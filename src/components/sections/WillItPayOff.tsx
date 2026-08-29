import Section, { Eyebrow, Heading } from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import CTAButton from "@/components/ui/CTAButton";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";

const REASONS = [
  "Short sessions, more patients per day",
  "Treats face and body, so more of your patients qualify",
  "Premium treatment, premium price",
  "One consumable bottle lasts about 100 sessions, so cost per session stays low",
  "No hidden costs",
];

export default function WillItPayOff() {
  return (
    <Section id="roi">
      <Reveal>
        <Eyebrow>Will it pay off?</Eyebrow>
        <Heading className="max-w-lg">
          A machine only earns money if it stays busy.{" "}
          <span className="text-accent">MShape does.</span>
        </Heading>
      </Reveal>

      <div className="mt-7 grid gap-4 sm:mt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <div className="grid gap-2.5">
          {REASONS.map((reason, i) => (
            <Reveal key={reason} delay={i * 60}>
              <GlassCard className="flex items-center gap-4 p-4 sm:gap-5 sm:p-5">
                <span className="w-8 shrink-0 text-[20px] font-extrabold text-accent tabular-nums sm:text-[22px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 text-[15px] leading-relaxed font-semibold text-ink sm:text-[16px]">
                  {reason}
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <GlassCard
            className="flex h-full flex-col justify-center bg-surface-alt p-6 sm:p-8"
            hover={false}
          >
            <p className="text-[clamp(1.3rem,4vw,1.6rem)] leading-snug font-extrabold tracking-[-0.02em] text-balance text-ink-strong">
              Want your clinic&apos;s numbers?
            </p>
            <p className="mt-3 text-[15px] leading-relaxed font-medium text-ink-soft sm:text-[16px]">
              We build a simple revenue model for you at the demo.
            </p>
            <CTAButton className="mt-6 w-full">
              Get My Clinic&apos;s ROI Model
            </CTAButton>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <Figure
          src="/images/brand/treatment-map.avif"
          alt="MShape treatment areas across the face and body, with the result each one targets"
          width={1583}
          height={769}
          sizes="(min-width: 1280px) 1152px, 100vw"
          ratio="aspect-[1583/769]"
          tone="surface"
          className="mt-4"
        />
      </Reveal>
    </Section>
  );
}
