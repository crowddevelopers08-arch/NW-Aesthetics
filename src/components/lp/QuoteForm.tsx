"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Swash } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { goToThankYou } from "@/lib/metaPixel";
import { CheckIcon } from "./QuoteStickyBar";

const TEXT_FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  {
    name: "phone",
    label: "WhatsApp number",
    type: "tel",
    autoComplete: "tel",
  },
  {
    name: "clinic",
    label: "Clinic name",
    type: "text",
    autoComplete: "organization",
  },
  { name: "city", label: "City", type: "text", autoComplete: "address-level2" },
] as const;

/**
 * The quote request form shared by the product pages. Four short fields and
 * one tap-to-pick question, so it fits a phone screen without scrolling.
 * Posts to /api/submit-lead with `product`, which routes the lead.
 */
export default function QuoteForm({
  product,
  heading,
  sub,
  professions,
  buttonLabel,
  footnote,
  thankYouHref,
  aside,
}: {
  /** Matches a key in PRODUCT_ROUTES in the submit-lead route. */
  product: "nucleoskin" | "pink-intimate";
  heading: ReactNode;
  sub: string;
  professions: readonly string[];
  buttonLabel: string;
  footnote: string;
  thankYouHref: string;
  /** Visual column beside the form on desktop, above it on mobile. */
  aside: ReactNode;
}) {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          product,
          pageUrl: window.location.href,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSending(false);
        return;
      }

      form.reset();
      goToThankYou(thankYouHref);
    } catch {
      setError(
        "We couldn't reach our server. Check your connection and try again.",
      );
      setSending(false);
    }
  };

  return (
    <section
      id="quote"
      className="scroll-mt-20 overflow-hidden bg-surface-alt px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <Reveal className="min-w-0">{aside}</Reveal>

        <Reveal delay={120} className="relative min-w-0">
          {/* soft brand glow behind the card */}
          <div
            aria-hidden="true"
            className="lp-glow pointer-events-none absolute -inset-6 opacity-50"
          />
          <div className="relative rounded-3xl border border-line bg-surface p-4 min-[360px]:p-5 shadow-[0_24px_60px_-30px_rgba(20,17,31,0.25)] sm:p-8">
            <h2 className="relative w-fit pb-4 text-[clamp(1.5rem,4vw,2.25rem)] leading-[1.12] font-extrabold tracking-[-0.02em] text-balance text-ink-strong sm:pb-5">
              {heading}
              <Swash />
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed font-medium text-pretty text-ink-soft sm:text-[16px]">
              {sub}
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6">
              {/* Honeypot: off-screen and skipped by tab order, so only a bot
                  fills it. The API answers those with a silent success. */}
              <div aria-hidden="true" className="absolute left-[-9999px]">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {TEXT_FIELDS.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-[12px] font-extrabold tracking-[0.12em] text-ink-faint uppercase"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      inputMode={field.type === "tel" ? "numeric" : undefined}
                      required
                      /* 16px keeps iOS from zooming the page on focus. */
                      className="mt-1.5 min-h-12 w-full rounded-lg border-2 border-line bg-surface-alt px-3.5 py-2.5 text-[16px] font-semibold text-ink-strong transition-colors duration-200 outline-none focus:border-accent focus:bg-surface"
                    />
                  </div>
                ))}
              </div>

              <fieldset className="mt-5">
                <legend className="text-[12px] font-extrabold tracking-[0.12em] text-ink-faint uppercase">
                  You are
                </legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {professions.map((option) => (
                    <label
                      key={option}
                      className="group cursor-pointer select-none"
                    >
                      <input
                        type="radio"
                        name="profession"
                        value={option}
                        required
                        className="peer sr-only"
                      />
                      <span className="flex min-h-11 items-center rounded-full border-2 border-line bg-surface px-4 py-2 text-[14px] font-bold text-ink-soft transition-colors duration-200 group-hover:border-line-strong peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {error && (
                <p
                  role="alert"
                  className="mt-5 rounded-lg border-2 border-accent/30 bg-accent-tint px-4 py-3 text-[14px] font-semibold text-accent-deep"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="group mt-6 flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-4 text-[15px] whitespace-nowrap sm:px-7 font-bold text-white transition-colors duration-300 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-70 sm:text-[16px]"
              >
                {sending ? "Sending…" : buttonLabel}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className={`h-4 w-4 shrink-0 ${
                    sending
                      ? "animate-spin"
                      : "transition-transform duration-300 group-hover:translate-x-0.5"
                  }`}
                >
                  {sending ? (
                    <path
                      d="M21 12a9 9 0 0 0-9-9"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </svg>
              </button>

              <p className="mt-3 flex items-start justify-center gap-1.5 text-center text-[13px] font-semibold text-ink-faint sm:items-center">
                <CheckIcon />
                {footnote}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
