import Section, { Eyebrow, Heading } from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

/** Hero numbers — stat tiles, deliberately not a chart. */
const STATS = [
  { value: "₹86.97", unit: "Lakh", caption: "Zennara, Hyderabad, in 8 months" },
  { value: "₹50.4", unit: "Lakh", caption: "Ekisa, Mumbai, in 5 months" },
  {
    value: "11",
    unit: "patients",
    caption: "booked by Face Glow from leads we sent, in 6 weeks",
  },
];

export default function RealResults() {
  return (
    <Section id="real-results">
      <Reveal className="text-center">
        <div className="flex justify-center">
          <Eyebrow>Real results</Eyebrow>
        </div>
        <Heading className="mx-auto max-w-2xl">
          Not projections. Real clinics.
        </Heading>
      </Reveal>

      <div className="mt-7 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.caption}
            delay={i * 90}
            className={i === 2 ? "sm:col-span-2 lg:col-span-1" : undefined}
          >
            <GlassCard className="h-full p-6 sm:p-7">
              <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                <span className="text-[clamp(2.4rem,7vw,3.1rem)] leading-none font-extrabold tracking-[-0.03em] text-ink-strong tabular-nums">
                  {stat.value}
                </span>
                <span className="text-[17px] font-bold text-ink-soft sm:text-[18px]">
                  {stat.unit}
                </span>
              </p>
              <div className="mt-5 h-1 w-12 rounded-full bg-accent" />
              <p className="mt-4 text-[15px] leading-relaxed font-medium text-ink-soft sm:text-[16px]">
                {stat.caption}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={140}>
        <div className="mt-7 flex flex-col items-center gap-6 sm:mt-10 text-center">
          <p className="max-w-2xl text-[14px] leading-relaxed font-medium text-ink-faint sm:text-[15px]">
            Real figures from these clinics. Your numbers depend on your clinic.
            We work them out with you at the demo.
          </p>
          <CTAButton>Book a Product Demo for Your Clinic</CTAButton>
        </div>
      </Reveal>
    </Section>
  );
}
