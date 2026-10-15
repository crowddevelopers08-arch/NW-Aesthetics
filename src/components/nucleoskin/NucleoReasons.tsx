import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { Heading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/lp/QuoteStickyBar";

const REASONS = [
  {
    title: "Be the PDRN Clinic in Your City.",
    text: "Few clinics offer a PDRN booster this complete. Get there before your competitors do.",
  },
  {
    title: "Three Jobs. One Needle.",
    text: "Regeneration, hydration and brightening in a single treatment. Plain PDRN does one.",
  },
  {
    title: "They See It From Session One.",
    text: "HA shows early, PDRN keeps building. Patients see results, so they finish the course.",
  },
  {
    title: "Every Drop Gets Billed.",
    text: "One 3 ml vial covers an under-eye plus full-face session. No half-used vials.",
  },
  {
    title: "One Patient. Three Bookings.",
    text: "A 3-session course across face, eyes, forehead, neck and hands.",
  },
  {
    title: "Genuine Italian Stock. Not Grey Market.",
    text: "Direct from Promoitalia through NW Aesthetics, the authorised India distributor. Training included.",
  },
];

/**
 * Editorial split: the headline, a product shot and the CTA hold still on the
 * left (sticky on desktop) while the six reasons scroll past on the right.
 */
export default function NucleoReasons() {
  return (
    <section
      id="why"
      className="scroll-mt-20 bg-surface px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-6 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <Heading>
              6 Reasons <span className="text-accent">500+ Doctors</span>{" "}
              Already Stock NucleoSkin
            </Heading>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 overflow-hidden rounded-3xl border border-line bg-surface-alt shadow-[0_30px_60px_-36px_rgba(7,78,76,0.45)]">
              <Image
                src="/images/nucleoskin/vials-group.jpg"
                alt="Five NucleoSkin 3 ml vials"
                width={1400}
                height={1106}
                sizes="(min-width: 1024px) 440px, 92vw"
                className="aspect-[16/9] h-auto w-full object-cover lg:aspect-auto"
              />
            </div>
          </Reveal>
          <Reveal delay={150} className="mt-6 hidden lg:block">
            <CTAButton href="#quote">Get the Quote &amp; Protocol</CTAButton>
            <p className="mt-3 flex items-center gap-1.5 text-[14px] font-bold text-ink-soft">
              <CheckIcon />
              Training included
            </p>
          </Reveal>
        </div>

        <ol className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
          {REASONS.map((r, i) => (
            <li key={r.title} className="min-w-0">
              <Reveal delay={(i % 2) * 80} className="h-full">
                <article
                  className={`lp-card group h-full rounded-2xl border p-5 sm:p-6 ${
                    i === REASONS.length - 1
                      ? "border-accent bg-accent text-white"
                      : "border-line bg-surface"
                  }`}
                >
                  <span
                    className={`text-[34px] leading-none font-extrabold tabular-nums ${
                      i === REASONS.length - 1 ? "text-brand-blue" : "text-accent/25"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`mt-3 text-[18px] leading-snug font-extrabold text-balance ${
                      i === REASONS.length - 1 ? "text-white" : "text-ink-strong"
                    }`}
                  >
                    {r.title}
                  </h3>
                  <p
                    className={`mt-2 text-[15px] leading-relaxed font-medium ${
                      i === REASONS.length - 1 ? "text-white/85" : "text-ink-soft"
                    }`}
                  >
                    {r.text}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="lg:hidden">
          <CTAButton href="#quote" className="w-full sm:w-auto">
            Get the Quote &amp; Protocol
          </CTAButton>
          <p className="mt-3 flex items-center gap-1.5 text-[14px] font-bold text-ink-soft">
            <CheckIcon />
            Training included
          </p>
        </div>
      </div>
    </section>
  );
}
