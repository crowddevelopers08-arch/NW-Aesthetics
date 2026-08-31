import type { Metadata } from "next";
import type { ReactNode } from "react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Section, { Eyebrow, Heading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy — NW Aesthetics",
  description:
    "How NW Aesthetics collects, uses and protects the information you share when you request an MShape demo.",
};

/**
 * ─────────────────────────────────────────────────────────────────────
 * EDIT THESE BEFORE THE PAGE GOES LIVE.
 * Every one of these appears in the policy text below. They are the only
 * details in this file that cannot be derived from the site itself.
 * ─────────────────────────────────────────────────────────────────────
 */
const COMPANY = {
  legalName: "NW Aesthetics, a division of NW Overseas Group",
  address: "[add your registered office address]",
  email: "[add your contact email]",
  phone: "[add your phone / WhatsApp number]",
  grievanceOfficer: "[add name of grievance officer]",
  grievanceEmail: "[add grievance officer email]",
  manufacturer: "[add the legal name of the MShape manufacturer in Italy]",
  lastUpdated: "29 August 2026",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main>
        <Section className="pt-32 sm:pt-36">
          <Eyebrow>Legal</Eyebrow>
          <Heading className="max-w-lg">Privacy Policy</Heading>

          <p className="mt-2 text-[14px] font-semibold text-ink-faint">
            Last updated {COMPANY.lastUpdated}
          </p>

          <div className="mt-10 max-w-3xl">
            <Clause title="Who we are">
              <p>
                This site is run by {COMPANY.legalName}, an authorised MShape
                provider supplying aesthetic technology to doctors and clinics
                across India. In this policy, &ldquo;we&rdquo; and
                &ldquo;us&rdquo; mean {COMPANY.legalName}.
              </p>
              <p>
                Our registered office is at {COMPANY.address}. You can reach us
                at {COMPANY.email} or {COMPANY.phone}.
              </p>
            </Clause>

            <Clause title="What we collect">
              <p>
                We only collect what you type into the demo form on this site:
              </p>
              <List
                items={[
                  "Your name",
                  "Your phone or WhatsApp number",
                  "Your email address",
                  "Your clinic name and city",
                  "Your answers to three questions: whether you are the owner or decision-maker, whether you already offer face or body contouring, and what you want from us (a demo, pricing, ROI numbers, or you are just looking)",
                ]}
              />
              <p>
                Our hosting provider also keeps standard server logs — your IP
                address, browser type and the pages you requested — for security
                and troubleshooting.
              </p>
              <p>
                We do not ask for, and you should not send us, any patient
                information or medical records.
              </p>
            </Clause>

            <Clause title="Why we collect it">
              <p>
                We process this information on the basis of your consent, given
                when you submit the form. We use it to:
              </p>
              <List
                items={[
                  "Call or message you to arrange a product demo",
                  "Prepare a revenue model for your clinic, using the details you give us",
                  "Answer your questions about the machine, pricing, installation and support",
                  "Keep a record of our conversations with you",
                ]}
              />
              <p>
                We will not use your details for anything else without asking
                you first, and we do not sell them to anyone.
              </p>
            </Clause>

            <Clause title="Who sees it">
              <p>Your details are shared only with:</p>
              <List
                items={[
                  "Our own team, so they can contact you and prepare your demo",
                  `${COMPANY.manufacturer}, where a technical or warranty question needs the manufacturer's input`,
                  "Service providers who run this site and our email, phone and messaging tools, strictly on our instructions",
                  "Anyone we are legally required to disclose to, such as a court or regulator",
                ]}
              />
              <p>
                Where the manufacturer is in Italy, answering a technical
                question may involve transferring your details outside India. We
                share the minimum needed to answer the question.
              </p>
            </Clause>

            <Clause title="WhatsApp, Instagram and other links">
              <p>
                If you message us on WhatsApp or contact us through Instagram,
                that conversation also sits on those platforms and is covered by
                their own privacy policies as well as this one. Links from this
                site to other websites are not under our control, and we are not
                responsible for how those sites handle your information.
              </p>
            </Clause>

            <Clause title="Cookies and analytics">
              <p>
                This site sets no advertising or analytics cookies, and does not
                track you across other websites. Nothing on the page profiles
                you or builds an advertising audience from your visit.
              </p>
              <p className="rounded-lg border-2 border-line bg-surface-alt p-4 text-[15px] font-semibold text-ink-strong">
                Note for the site owner: if you later add Google Analytics, a
                Meta or Google Ads pixel, or any similar tracking, this section
                must be rewritten and a cookie consent banner added before that
                tracking goes live.
              </p>
            </Clause>

            <Clause title="How long we keep it">
              <p>
                We keep enquiry details for as long as we are in contact with
                you about a demo or a purchase, and for a reasonable period
                afterwards in case you come back to us. If you ask us to delete
                your details, we will, unless we are required by law to keep
                them — for example, tax records tied to an actual purchase.
              </p>
            </Clause>

            <Clause title="Keeping it safe">
              <p>
                We restrict access to enquiry details to the people who need
                them, and we use reputable providers for our website, email and
                messaging. No method of transmission over the internet is
                completely secure, so we cannot promise absolute security, but
                we take reasonable steps to protect what you share with us.
              </p>
            </Clause>

            <Clause title="Your rights">
              <p>
                Under the Digital Personal Data Protection Act, 2023, you can
                ask us to:
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
                Email {COMPANY.email} and we will act on your request. There is
                no charge.
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
                This site is for clinic owners and medical professionals. It is
                not aimed at anyone under 18, and we do not knowingly collect
                information from children.
              </p>
            </Clause>

            <Clause title="Changes to this policy">
              <p>
                If we change how we handle your information, we will update this
                page and the date at the top. Please check back from time to
                time.
              </p>
            </Clause>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

/** One numbered clause of the policy. */
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
