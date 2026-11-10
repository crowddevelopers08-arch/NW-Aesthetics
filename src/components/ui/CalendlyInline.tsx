"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: {
          name?: string;
          email?: string;
          customAnswers?: Record<string, string>;
        };
      }) => void;
    };
  }
}

const CALENDLY_URL =
  "https://calendly.com/ankitnwoverseas/1-1-personalised-consultation?hide_event_type_details=1&hide_gdpr_banner=1";

/**
 * Which Calendly invitee question each form field fills. Calendly numbers its
 * custom questions a1, a2 … by their order on the event's booking form; a1–a4
 * are the existing multiple-choice questions, so Phone, Clinic name and City
 * must be added as questions 5, 6 and 7 for these to show up. Calendly
 * ignores answers for questions that don't exist.
 */
const ANSWER_SLOTS = {
  phone: "a5",
  clinic: "a6",
  city: "a7",
} as const;

const PREFILL_KEY = "nw:lead-prefill";

type LeadPrefill = { name: string; phone: string; clinic: string; city: string };

/** Called by BookDemo just before it redirects to /book-slot. */
export function savePrefill(lead: LeadPrefill) {
  try {
    sessionStorage.setItem(PREFILL_KEY, JSON.stringify(lead));
  } catch {
    // Storage blocked: Calendly simply opens empty.
  }
}

function readPrefill(): Partial<LeadPrefill> {
  try {
    return JSON.parse(sessionStorage.getItem(PREFILL_KEY) || "{}");
  } catch {
    return {};
  }
}

/** Calendly phone questions expect the country code: "+91 9876543210". */
function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
  return digits.length === 10 ? `+91 ${digits}` : raw.trim();
}

/**
 * Calendly's inline embed. widget.js only scans the page once on load, which
 * misses client-side renders, so the widget is started explicitly instead.
 */
export default function CalendlyInline() {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  const start = () => {
    if (started.current || !ref.current || !window.Calendly) return;
    started.current = true;

    const lead = readPrefill();
    const customAnswers: Record<string, string> = {};
    if (lead.phone) customAnswers[ANSWER_SLOTS.phone] = formatPhone(lead.phone);
    if (lead.clinic?.trim()) customAnswers[ANSWER_SLOTS.clinic] = lead.clinic.trim();
    if (lead.city?.trim()) customAnswers[ANSWER_SLOTS.city] = lead.city.trim();

    window.Calendly.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: ref.current,
      prefill: {
        name: lead.name?.trim() || undefined,
        customAnswers,
      },
    });
  };

  // Covers the script already being cached from an earlier visit.
  useEffect(start, []);

  return (
    <>
      <div ref={ref} className="h-[700px] min-w-[320px]" />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onReady={start}
      />
    </>
  );
}
