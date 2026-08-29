export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';

interface LeadInput {
  name: string;
  phone: string;
  email?: string;
  clinic?: string;
  city?: string;
  /** Are you the owner or decision-maker? */
  role?: string;
  /** Do you offer body or face contouring now? */
  contouring?: string;
  /** You want: demo / pricing / ROI numbers / just looking */
  interest?: string;
  source?: string;
  pageUrl?: string;
  sheetTab?: string;
  telecrmPageName?: string;
  treatmentType?: string;
}

type LeadRouteConfig = {
  source: string;
  sheetTab: string;
  telecrmPageName: string;
  treatmentType: string;
};

const DEFAULT_ROUTE: LeadRouteConfig = {
  source: 'NW Aesthetics MShape LP',
  sheetTab: 'MShape Leads',
  telecrmPageName: 'nw-aesthetics-mshape',
  treatmentType: 'MShape Face & Body Contouring',
};

/** The three qualifying questions, exactly as the form offers them. */
const CHOICES: Record<'role' | 'contouring' | 'interest', readonly string[]> = {
  role: ['Owner', 'Shared', 'No'],
  contouring: ['Yes', 'No', 'Planning to'],
  interest: ['Demo', 'Pricing', 'ROI numbers', 'Just looking'],
};

function normalisePhone(raw: string) {
  return raw.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '');
}

function isValidIndianPhone(raw: string) {
  return /^[6-9]\d{9}$/.test(normalisePhone(raw));
}

function isValidName(raw: string) {
  return raw.trim().length >= 2 && /^[a-zA-Z\s'.-]+$/.test(raw.trim());
}

function isValidEmail(raw: string) {
  if (!raw.trim()) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.trim());
}

async function appendToGoogleSheet(data: LeadInput) {
  const endpoint = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!endpoint) throw new Error('GOOGLE_SHEETS_WEBHOOK_URL is not set');

  const payload = {
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    name: data.name.trim(),
    email: data.email?.trim() || '',
    phone: normalisePhone(data.phone),
    clinic: data.clinic?.trim() || 'Not specified',
    city: data.city?.trim() || 'Not specified',
    role: data.role || 'Not specified',
    contouring: data.contouring || 'Not specified',
    interest: data.interest || 'Not specified',
    source: data.pageUrl || data.source || DEFAULT_ROUTE.source,
    sheetTab: data.sheetTab || DEFAULT_ROUTE.sheetTab,
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  const text = await res.text();
  if (!res.ok) throw new Error(text || `Google Sheets responded with ${res.status}`);
  try { return text ? JSON.parse(text) : { success: true }; }
  catch { return { success: true }; }
}

async function sendToTeleCRM(data: LeadInput) {
  const endpoint = process.env.TELECRM_API_URL;
  if (!endpoint) throw new Error('TELECRM_API_URL is not set');
  if (!process.env.TELECRM_API_KEY) throw new Error('TELECRM_API_KEY is not set');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  const name = data.name.trim();
  const email = data.email?.trim() || '';
  const phone = normalisePhone(data.phone);
  const clinic = data.clinic?.trim() || '';
  const city = data.city?.trim() || '';
  const treatmentType = data.treatmentType || DEFAULT_ROUTE.treatmentType;

  // TeleCRM silently drops `fields` keys that aren't defined on the enterprise,
  // so only canonical keys go here. Everything else is repeated as a system
  // note below, which always survives regardless of the field configuration.
  const fields: Record<string, string> = {
    name,
    phone,
    'Lead Status': 'new',
    'Lead Request Type': 'demo',
    'Treatment Type': treatmentType,
    Source: data.pageUrl || data.source || DEFAULT_ROUTE.source,
    PageName: data.telecrmPageName || DEFAULT_ROUTE.telecrmPageName,
    Country: 'India',
  };

  if (email) fields.email = email;
  if (clinic) fields['Clinic Name'] = clinic;
  if (city) fields.City = city;
  if (data.role) fields['Decision Maker'] = data.role;
  if (data.contouring) fields['Offers Contouring'] = data.contouring;
  if (data.interest) fields['Lead Interest'] = data.interest;

  const payload = {
    fields,
    actions: [
      { type: 'SYSTEM_NOTE', text: `Lead Source: ${fields.Source}` },
      { type: 'SYSTEM_NOTE', text: `Landing Page: ${data.source || DEFAULT_ROUTE.source}` },
      { type: 'SYSTEM_NOTE', text: `Machine: ${treatmentType}` },
      { type: 'SYSTEM_NOTE', text: `Name: ${name}` },
      { type: 'SYSTEM_NOTE', text: `Phone: ${phone}` },
      { type: 'SYSTEM_NOTE', text: `Email: ${email || 'Not provided'}` },
      { type: 'SYSTEM_NOTE', text: `Clinic: ${clinic || 'Not provided'}` },
      { type: 'SYSTEM_NOTE', text: `City: ${city || 'Not provided'}` },
      { type: 'SYSTEM_NOTE', text: `Owner or decision-maker: ${data.role || 'Not specified'}` },
      { type: 'SYSTEM_NOTE', text: `Offers contouring now: ${data.contouring || 'Not specified'}` },
      { type: 'SYSTEM_NOTE', text: `Wants: ${data.interest || 'Not specified'}` },
      { type: 'SYSTEM_NOTE', text: 'Consent Given: Yes' },
    ],
  };

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TELECRM_API_KEY}`,
        'X-Client-ID': 'nw-aesthetics-website',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (res.status === 204) return { status: 'success', message: 'Lead created (204)' };

    const text = await res.text();

    if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
      throw new Error('TeleCRM returned an HTML response - check the API URL');
    }

    const json = text ? JSON.parse(text) : {};
    if (!res.ok) throw new Error(json.message || `TeleCRM HTTP ${res.status}`);
    return json;
  } catch (err) {
    clearTimeout(timeout);
    throw err instanceof Error ? err : new Error(String(err));
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const {
    name = '',
    phone = '',
    email = '',
    clinic = '',
    city = '',
    role = '',
    contouring = '',
    interest = '',
    pageUrl = '',
    company = '', // honeypot — real people never see this field
  } = body;

  // A filled honeypot means a bot. Answer as if it worked, forward nothing.
  if (company.trim()) {
    return NextResponse.json({ success: true }, { status: 201 });
  }

  if (!name.trim()) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
  }

  if (!isValidName(name)) {
    return NextResponse.json({ error: 'Name should contain letters only.' }, { status: 400 });
  }

  if (!phone.trim()) {
    return NextResponse.json({ error: 'Please enter your phone number.' }, { status: 400 });
  }

  if (!isValidIndianPhone(phone)) {
    return NextResponse.json(
      { error: 'Please enter a valid 10-digit Indian mobile number.' },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (!clinic.trim()) {
    return NextResponse.json({ error: 'Please enter your clinic name.' }, { status: 400 });
  }

  if (!city.trim()) {
    return NextResponse.json({ error: 'Please enter your city.' }, { status: 400 });
  }

  // Choice answers arrive from radio buttons, so anything off-list is tampering.
  for (const [key, allowed] of Object.entries(CHOICES) as [
    keyof typeof CHOICES,
    readonly string[],
  ][]) {
    const value = { role, contouring, interest }[key];
    if (value && !allowed.includes(value)) {
      return NextResponse.json({ error: 'Invalid selection.' }, { status: 400 });
    }
  }

  const routeConfig: LeadRouteConfig = DEFAULT_ROUTE;

  const leadData: LeadInput = {
    name,
    phone,
    email,
    clinic,
    city,
    role,
    contouring,
    interest,
    source: routeConfig.source,
    pageUrl: pageUrl.trim() || routeConfig.source,
    sheetTab: routeConfig.sheetTab,
    telecrmPageName: routeConfig.telecrmPageName,
    treatmentType: routeConfig.treatmentType,
  };

  const [sheetResult, crmResult] = await Promise.allSettled([
    appendToGoogleSheet(leadData),
    sendToTeleCRM(leadData),
  ]);

  if (sheetResult.status === 'rejected') {
    console.error('[Google Sheets] Error:', sheetResult.reason?.message);
  }
  if (crmResult.status === 'rejected') {
    console.error('[TeleCRM] Error:', crmResult.reason?.message);
  }

  // Both destinations failing means the lead is lost — say so, so the visitor
  // can call instead of assuming we have their number.
  if (sheetResult.status === 'rejected' && crmResult.status === 'rejected') {
    return NextResponse.json(
      { error: 'We could not save your request. Please call or WhatsApp us instead.' },
      { status: 502 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      sheet: sheetResult.status === 'fulfilled' ? 'ok' : 'failed',
      crm: crmResult.status === 'fulfilled' ? 'ok' : 'failed',
      route: routeConfig.sheetTab,
      timestamp: new Date().toISOString(),
    },
    { status: 201 }
  );
}
