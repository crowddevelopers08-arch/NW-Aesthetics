import type { ReactNode } from "react";
import Section, { Eyebrow, Heading } from "@/components/ui/Section";

/**
 * ─────────────────────────────────────────────────────────────────────
 * EDIT THESE BEFORE THE PAGES GO LIVE.
 * They appear in both product privacy policies (NucleoSkin and Pink
 * Intimate) and are the only details that can't be read off the site.
 * ─────────────────────────────────────────────────────────────────────
 */
const COMPANY = {
  legalName: "NW Aesthetics, a division of NW Overseas Group",
  address: "[add your registered office address]",
  email: "[add your contact email]",
  phone: "[add your phone / WhatsApp number]",
  grievanceOfficer: "[add name of grievance officer]",
  grievanceEmail: "[add grievance officer email]",
  manufacturer: "Promoitalia",
  lastUpdated: "14 October 2026",
};

/**
 * Privacy policy for a single-product quote page. The body is shared; only
 * the product name and the form's "You are" options differ, so each policy
 * describes exactly the form on its own page.
 */
export default function ProductPrivacyPolicy({
  product,
  professions,
}: {
  /** e.g. "NucleoSkin" */
  product: string;
  /** The "You are" options on that page's form. */
  professions: readonly string[];
}) {
  return (
    // Wrapper clears the fixed nav; a pt-* on <Section> loses to its own py-*.
    <div className="pt-16 sm:pt-20">
    <Section>
      <Eyebrow>{product}</Eyebrow>
      <Heading className="max-w-lg">Privacy Policy</Heading>

      <p className="mt-2 text-[14px] font-semibold text-ink-faint">
        Last updated {COMPANY.lastUpdated}
      </p>

      <div className="mt-10 max-w-3xl">
        <Clause title="Who we are">
          <p>
            This {product} page is run by {COMPANY.legalName}, the authorised
            India distributor of {COMPANY.manufacturer} products, supplying
            doctors and clinics across India. In this policy, &ldquo;we&rdquo;
            and &ldquo;us&rdquo; mean {COMPANY.legalName}.
          </p>
          <p>
            Our registered office is at {COMPANY.address}. You can reach us at{" "}
            {COMPANY.email} or {COMPANY.phone}.
          </p>
        </Clause>

        <Clause title="What we collect">
          <p>
            When you request the {product} quote and protocol, we collect what
            you enter in the form:
          </p>
          <List
            items={[
              "Your name",
              "Your WhatsApp number",
              "Your clinic name and city",
              `Which of these you are: ${professions.join(", ")}`,
              "The address of the page you sent the form from",
            ]}
          />
          <p>
            Our hosting provider also keeps standard server logs — your IP
            address, browser type and the pages you requested — for security
            and troubleshooting.
          </p>
          <p>
            We do not ask for, and you should not send us, any patient
            information, patient photographs or medical records.
          </p>
        </Clause>

        <Clause title="Why we collect it">
          <p>
            We process this information on the basis of your consent, given
            when you submit the form. We use it to:
          </p>
          <List
            items={[
              `Send you the ${product} price, protocol sheet and training dates on WhatsApp`,
              "Call or message you about your quote, your order and your training",
              "Confirm that the request comes from a doctor or clinic, as the product is supplied to doctors and clinics only",
              "Keep a record of our conversations with you",
            ]}
          />
          <p>
            We will not use your details for anything else without asking you
            first, and we do not sell them to anyone.
          </p>
        </Clause>

        <Clause title="Who sees it">
          <p>Your details are shared only with:</p>
          <List
            items={[
              "Our own team, so they can send your quote and arrange training",
              "The providers who store and manage our enquiries — Google (Google Sheets) and TeleCRM — strictly on our instructions",
              "The providers who run this website and our WhatsApp, phone and email tools",
              `${COMPANY.manufacturer}, the manufacturer in Italy, only where a product or training question needs their input`,
              "Anyone we are legally required to disclose to, such as a court or regulator",
            ]}
          />
          <p>
            Some of these providers, and {COMPANY.manufacturer}, may store or
            process your details outside India. We share the minimum needed in
            each case.
          </p>
        </Clause>

        <Clause title="Cookies, analytics and advertising">
          <p>
            This site uses Google Tag Manager and the Meta Pixel. They record
            that you visited, which pages you viewed and whether you sent the
            form, so we can measure and improve our advertising on Google and
            on Meta (Facebook and Instagram).
          </p>
          <p>
            Google and Meta may set cookies on your device and process this
            information under their own privacy policies. You can block or
            delete these cookies in your browser settings, and manage how ads
            are shown to you in your Google and Meta ad settings.
          </p>
        </Clause>

        <Clause title="WhatsApp and other platforms">
          <p>
            Your quote, protocol sheet and training dates are sent on WhatsApp.
            That conversation also sits on WhatsApp and is covered by its own
            privacy policy as well as this one. Links from this site to other
            websites are not under our control, and we are not responsible for
            how those sites handle your information.
          </p>
        </Clause>

        <Clause title="How long we keep it">
          <p>
            We keep enquiry details for as long as we are in contact with you
            about a quote, an order or training, and for a reasonable period
            afterwards in case you come back to us. If you ask us to delete
            your details, we will, unless we are required by law to keep them —
            for example, tax records tied to an actual purchase.
          </p>
        </Clause>

        <Clause title="Keeping it safe">
          <p>
            We restrict access to enquiry details to the people who need them,
            and we use reputable providers for our website, records and
            messaging. No method of transmission over the internet is
            completely secure, so we cannot promise absolute security, but we
            take reasonable steps to protect what you share with us.
          </p>
        </Clause>

        <Clause title="Your rights">
          <p>
            Under the Digital Personal Data Protection Act, 2023, you can ask
            us to:
          </p>
          <List
            items={[
              "Tell you what information we hold about you and who we have shared it with",
              "Correct anything inaccurate or incomplete",
              "Delete your details, where we are not required to keep them",
              "Withdraw your consent, after which we will stop contacting you",
              "Nominate someone to exercise these rights on your behalf if you die or become incapacitated",
            ]}
          />
          <p>
            Email {COMPANY.email} and we will act on your request. There is no
            charge.
          </p>
        </Clause>

        <Clause title="Complaints">
          <p>
            If you are unhappy with how we have handled your information,
            contact our grievance officer:
          </p>
          <p className="font-semibold text-ink-strong">
            {COMPANY.grievanceOfficer}
            <br />
            {COMPANY.grievanceEmail}
          </p>
          <p>
            If we do not resolve it, you may complain to the Data Protection
            Board of India.
          </p>
        </Clause>

        <Clause title="Children">
          <p>
            This page is for doctors and clinics only. It is not aimed at
            anyone under 18, and we do not knowingly collect information from
            children.
          </p>
        </Clause>

        <Clause title="Changes to this policy">
          <p>
            If we change how we handle your information, we will update this
            page and the date at the top. Please check back from time to time.
          </p>
        </Clause>
      </div>
    </Section>
    </div>
  );
}

/** One clause of the policy. */
function Clause({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line py-8 first:border-t-0 first:pt-0">
      <h2 className="text-[20px] leading-snug font-extrabold tracking-[-0.01em] text-balance text-ink-strong sm:text-[22px]">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed font-medium text-pretty text-ink-soft sm:text-[16px]">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}
