"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Eyebrow, Swash } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const CHOICES = [
  {
    name: "role",
    label: "Are you the owner or decision-maker?",
    options: ["Owner", "Shared", "No"],
  },
  {
    name: "contouring",
    label: "Do you offer body or face contouring now?",
    options: ["Yes", "No", "Planning to"],
  },
  {
    name: "interest",
    label: "You want:",
    options: ["Demo", "Pricing", "ROI numbers", "Just looking"],
  },
] as const;

const TEXT_FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "phone", label: "Phone / WhatsApp", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  {
    name: "clinic",
    label: "Clinic name",
    type: "text",
    autoComplete: "organization",
  },
  { name: "city", label: "City", type: "text", autoComplete: "address-level2" },
] as const;

export default function BookDemo() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  /**
   * Posts to /api/submit-lead, which fans the lead out to Google Sheets and
   * TeleCRM, then hands the visitor to /thank-you.
   */
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
        body: JSON.stringify({ ...values, pageUrl: window.location.href }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSending(false);
        return;
      }

      form.reset();
      router.push("/thank-you");
    } catch {
      setError(
        "We couldn't reach our server. Check your connection and try again.",
      );
      setSending(false);
    }
  };

  return (
    <section
      id="book-demo"
      className="scroll-mt-20 bg-surface px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:flex lg:min-h-svh lg:items-center lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>Book your demo</Eyebrow>
          </div>
          <h2 className="relative mx-auto mt-3 w-fit max-w-md pb-5 text-[clamp(1.6rem,4.4vw,2.5rem)] leading-[1.1] font-extrabold tracking-[-0.02em] text-balance text-ink-strong sm:pb-6">
            Book a Product Demo for Your Clinic
            <Swash />
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed font-medium text-pretty text-ink-soft sm:text-[16px]">
            See the machine, the treatments, and your clinic&apos;s numbers. No
            obligation.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <GlassCard className="mt-5 p-4 sm:mt-6 sm:p-6 lg:p-7" hover={false}>
            <form onSubmit={handleSubmit} noValidate>
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

              {/* Two columns on desktop — details left, questions right —
                    so the whole form lands inside one screen. */}
                <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
                  <div className="grid content-start gap-3 sm:grid-cols-2">
                    {TEXT_FIELDS.map((field, i) => (
                      <div
                        key={field.name}
                        className={i === 4 ? "sm:col-span-2" : undefined}
                      >
                        <label
                          htmlFor={field.name}
                          className="block text-[11px] font-extrabold tracking-[0.14em] text-ink-faint uppercase"
                        >
                          {field.label}
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          autoComplete={field.autoComplete}
                          required
                          /* 16px keeps iOS from zooming the page on focus. */
                          className="mt-1.5 w-full rounded-lg border-2 border-line bg-surface-alt px-3.5 py-2.5 text-[16px] font-semibold text-ink-strong transition-colors duration-200 outline-none focus:border-accent focus:bg-surface"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid content-start gap-4">
                    {CHOICES.map((group) => (
                      <fieldset key={group.name}>
                        <legend className="text-[11px] font-extrabold tracking-[0.14em] text-ink-faint uppercase">
                          {group.label}
                        </legend>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {group.options.map((option) => (
                            <label
                              key={option}
                              className="group cursor-pointer select-none"
                            >
                              <input
                                type="radio"
                                name={group.name}
                                value={option}
                                required
                                className="peer sr-only"
                              />
                              <span className="block rounded-full border-2 border-line bg-surface px-3.5 py-2 text-[14px] font-bold text-ink-soft transition-colors duration-200 group-hover:border-line-strong peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                                {option}
                              </span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    ))}
                  </div>
                </div>

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
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-bold text-white transition-colors duration-300 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-70 sm:text-[16px]"
              >
                {sending ? "Sending…" : "Book My Demo"}
                {sending ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 animate-spin"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeOpacity="0.3"
                    />
                    <path
                      d="M21 12a9 9 0 0 0-9-9"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              <p className="mt-3 text-center text-[14px] font-medium text-ink-faint">
                We&apos;ll call you to fix demo.
              </p>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
