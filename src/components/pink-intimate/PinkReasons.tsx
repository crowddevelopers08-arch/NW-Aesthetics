import CTAButton from "@/components/ui/CTAButton";
import Section, { Heading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/lp/QuoteStickyBar";

const REASONS = [
  {
    title: "It Treats What Patients Hide.",
    text: "Nearly every patient has this concern. Very few clinics openly treat it.",
  },
  {
    title: "No Needles. No Machine. No Downtime.",
    text: "A topical peel, a few minutes in the chair, and the patient walks out as normal. You can start next week.",
  },
  {
    title: "One Vial, One Treatment, Zero Waste.",
    text: "14 single-use vials per box. Every vial you open is a billed treatment.",
  },
  {
    title: "Brides Book It as a Package.",
    text: "In wedding season, underarm and bikini lightening becomes a pre-bridal package, not a one-off visit.",
  },
  {
    title: "Women and Men.",
    text: "Underarm and groin darkening is not just a female concern. That doubles your patient pool.",
  },
  {
    title: "Genuine Italian Stock, Training Included.",
    text: "Direct from Promoitalia through NW Aesthetics, the authorised India distributor.",
  },
];

/** Bento grid: the first reason, the core insight, gets the tall dark tile. */
export default function PinkReasons() {
  return (
    <Section id="why" tone="alt">
      <Reveal className="max-w-2xl">
        <Heading>
          6 Reasons Clinics Are Adding{" "}
          <span className="text-accent">Pink Intimate</span> This Season
        </Heading>
      </Reveal>

      <ol className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {REASONS.map((r, i) => {
          const lead = i === 0;
          // 06 runs the full width, which closes the grid around the
          // two-row lead tile on both the 2- and 3-column layouts.
          const last = i === REASONS.length - 1;
          return (
            <li
              key={r.title}
              className={`min-w-0 ${lead ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""} ${last ? "sm:col-span-2 lg:col-span-3" : ""}`}
            >
              <Reveal delay={(i % 3) * 80} className="h-full">
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-5 sm:p-6 ${
                    lead
                      ? "bg-ink-strong text-white shadow-[0_40px_80px_-44px_rgba(125,0,67,0.7)] lg:justify-between lg:p-8"
                      : "lp-card border border-line bg-surface"
                  }`}
                >
                  <span
                    className={`relative font-extrabold tabular-nums ${
                      lead
                        ? "text-[56px] leading-none text-brand-blue lg:text-[96px]"
                        : "text-[34px] leading-none text-accent/25"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className={`relative ${lead ? "mt-4 lg:mt-10" : "mt-3"}`}>
                    <h3
                      className={`leading-snug font-extrabold text-balance ${
                        lead
                          ? "text-[22px] lg:text-[28px]"
                          : "text-[18px] text-ink-strong"
                      }`}
                    >
                      {r.title}
                    </h3>
                    <p
                      className={`mt-2 leading-relaxed font-medium ${
                        lead
                          ? "text-[16px] text-white/80 lg:text-[18px]"
                          : "text-[15px] text-ink-soft"
                      }`}
                    >
                      {r.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>

      <Reveal className="mt-8 flex flex-col items-center gap-3 text-center">
        <CTAButton href="#quote">Get the Quote &amp; Protocol</CTAButton>
        <p className="flex items-center gap-1.5 text-[14px] font-bold text-ink-soft">
          <CheckIcon />
          Training included
        </p>
      </Reveal>
    </Section>
  );
}
