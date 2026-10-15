import Section, { Heading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * The two ways a booster course is lost, side by side, so the reader sees
 * NucleoSkin's gap before the next section fills it.
 */
const FAILURES = [
  {
    text: "Patients pay for PDRN, see little after session one, and drop the course.",
    icon: "slow",
  },
  {
    text: "HA boosters show fast but fade fast.",
    icon: "fade",
  },
] as const;

export default function NucleoProblem() {
  return (
    <Section id="problem" tone="alt" dense>
      <Reveal className="mx-auto max-w-3xl text-center">
        <Heading className="mx-auto">
          Plain PDRN Takes Months to Show. Your Patients Won&apos;t Wait.
        </Heading>
      </Reveal>

      <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
        {FAILURES.map((f, i) => (
          <Reveal key={f.icon} delay={i * 100}>
            <article className="lp-card h-full rounded-2xl border border-line bg-surface p-6 sm:p-7">
              <ProblemIcon kind={f.icon} />
              <p className="mt-5 text-[16px] leading-relaxed font-medium text-ink-soft sm:text-[17px]">
                {f.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mx-auto mt-5 flex max-w-4xl items-center justify-center gap-3 rounded-2xl bg-ink-strong px-6 py-5 text-center text-[17px] font-extrabold text-white shadow-[0_20px_40px_-24px_rgba(7,78,76,0.6)] sm:text-[20px]">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-blue" />
          Either way, you lose the repeat booking.
        </p>
      </Reveal>
    </Section>
  );
}

/** Tiny line charts: a curve that crawls up late, and one that peaks and drops. */
function ProblemIcon({ kind }: { kind: "slow" | "fade" }) {
  return (
    <svg
      viewBox="0 0 240 70"
      fill="none"
      aria-hidden="true"
      className="mt-5 h-16 w-full text-line-strong"
    >
      <path d="M4 66h232" stroke="currentColor" strokeWidth="2" />
      <path
        d={kind === "slow" ? "M4 64 C90 64 150 60 236 12" : "M4 64 C30 10 70 8 110 30 S190 62 236 64"}
        stroke="var(--color-accent)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle
        cx={kind === "slow" ? 60 : 236}
        cy={kind === "slow" ? 63 : 64}
        r="6"
        fill="var(--color-surface)"
        stroke="var(--color-accent)"
        strokeWidth="3"
      />
    </svg>
  );
}
