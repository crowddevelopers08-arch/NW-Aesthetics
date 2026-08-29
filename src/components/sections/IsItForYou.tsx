import Section, { Heading } from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

const YES = [
  "Own or run an aesthetic clinic, skin clinic or medi-spa",
  "Have regular patients",
  "Want to add face and body contouring",
  "Want something your competitors don't have",
];

const NOT_YET = [
  "Are just starting out with no patients",
  "Only want the cheapest machine",
];

export default function IsItForYou() {
  return (
    <Section id="is-it-for-you" tone="alt">
      <Reveal className="text-center">
        <Heading className="mx-auto max-w-2xl">Is it for you?</Heading>
      </Reveal>

      <div className="mt-7 grid gap-4 sm:mt-10 md:grid-cols-2">
        <Reveal>
          <GlassCard className="h-full p-6 sm:p-8" hover={false}>
            <span className="absolute inset-x-0 top-0 h-1 bg-accent" />
            <h3 className="text-[20px] font-extrabold tracking-[-0.01em] text-ink-strong sm:text-[22px]">
              Yes, if you:
            </h3>
            <ul className="mt-5 space-y-3.5">
              {YES.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                      <path
                        d="M5 12.5l4.5 4.5L19 7.5"
                        stroke="currentColor"
                        strokeWidth="3.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="min-w-0 text-[15px] leading-relaxed font-semibold text-ink sm:text-[16px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal delay={100}>
          <GlassCard className="h-full p-6 sm:p-8" hover={false}>
            <h3 className="text-[20px] font-extrabold tracking-[-0.01em] text-ink-soft sm:text-[22px]">
              Maybe not yet, if you:
            </h3>
            <ul className="mt-5 space-y-3.5">
              {NOT_YET.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-sunken text-ink-faint">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                      <path
                        d="M6 12h12"
                        stroke="currentColor"
                        strokeWidth="3.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="min-w-0 text-[15px] leading-relaxed font-medium text-ink-soft sm:text-[16px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal delay={160}>
        <div className="mt-7 flex justify-center sm:mt-10">
          <CTAButton>Book a Product Demo for Your Clinic</CTAButton>
        </div>
      </Reveal>
    </Section>
  );
}
