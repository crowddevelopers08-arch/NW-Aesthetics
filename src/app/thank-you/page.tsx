import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import CTAButton from "@/components/ui/CTAButton";
import { Eyebrow, Swash } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Thank you — NW Aesthetics",
  description: "Your demo request has reached us. We'll call you to fix a time.",
  /* Kept out of search results: it is a post-submission page, and indexing it
     would let people land here without ever filling the form. */
  robots: { index: false, follow: true },
};

const NEXT_STEPS = [
  {
    step: "01",
    title: "We call you",
    detail: "Usually the same working day, on the number you gave us.",
  },
  {
    step: "02",
    title: "We fix a demo",
    detail: "At your clinic or online, whichever suits you.",
  },
  {
    step: "03",
    title: "We build your numbers",
    detail: "A simple revenue model for your clinic, based on your patients.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-surface px-4 pt-28 pb-14 sm:px-6 sm:pt-32 md:py-16 lg:flex lg:min-h-svh lg:items-center lg:px-8 lg:py-20">
          <div className="mx-auto w-full max-w-3xl text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent sm:h-20 sm:w-20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-7 w-7 sm:h-9 sm:w-9"
              >
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <div className="mt-7 flex justify-center">
              <Eyebrow>Request received</Eyebrow>
            </div>

            <h1 className="relative mx-auto mt-3 w-fit max-w-lg pb-4 text-[clamp(2rem,6vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.02em] text-balance text-ink-strong sm:pb-6">
              Thank you.
              <Swash />
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-[clamp(1rem,2.2vw,1.175rem)] leading-relaxed font-medium text-pretty text-ink-soft">
              We&apos;ll call you to fix demo.
            </p>

            <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-line bg-line text-left sm:grid-cols-3">
              {NEXT_STEPS.map((item) => (
                <div key={item.step} className="h-full bg-surface p-5 sm:p-6">
                  <span className="text-[22px] font-extrabold text-accent tabular-nums sm:text-[24px]">
                    {item.step}
                  </span>
                  <h2 className="mt-3 text-[16px] leading-snug font-extrabold text-balance text-ink-strong sm:text-[17px]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[14px] leading-relaxed font-medium text-ink-faint">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <CTAButton href="/" variant="ghost">
                Back to home
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
