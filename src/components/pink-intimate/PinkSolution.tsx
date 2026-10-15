import Section, { Heading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import PinkReel from "./PinkReel";

const BENEFITS = [
  {
    title: "Lightens",
    text: "Works on darkening of underarms, groin, inner thighs, bikini area and nipples",
    icon: "sun",
  },
  {
    title: "Rejuvenates",
    text: "Bio-revitalises delicate skin and improves how firm it looks",
    icon: "spark",
  },
  {
    title: "Gentle",
    text: "Made for sensitive areas. No needles, no downtime",
    icon: "leaf",
  },
] as const;

const SPECS = [
  "14 single-use vials x 3 ml per box",
  "1 vial per treatment",
  "Topical, no needles",
  "Women and men",
];

export default function PinkSolution() {
  return (
    <Section id="solution" dense>
      <Reveal className="text-center">
        <Heading className="mx-auto">A Peel Made Only for Intimate Skin.</Heading>
      </Reveal>

      {/* The brand reel sits here because it makes this section's point —
          lifting, brightening and rejuvenating for intimate areas — and a
          vertical video in the hero would break its one-screen fit. */}
      <div className="mt-6 grid items-center gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
        <Reveal className="min-w-0">
          <PinkReel />
        </Reveal>

        <div className="grid min-w-0 gap-3 sm:gap-4">
          {/* ---------- what it does ---------- */}
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <article className="lp-card flex h-full items-start gap-4 rounded-2xl border border-line bg-surface p-5 sm:gap-5 sm:p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-white">
                  <BenefitIcon kind={b.icon} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[19px] font-extrabold text-ink-strong sm:text-[21px]">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed font-medium text-ink-soft sm:text-[16px]">
                    {b.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          {/* ---------- the box, drawn: 14 vials, with the spec chips ---------- */}
          <Reveal delay={270}>
            <div className="grid items-center gap-5 rounded-2xl bg-accent-tint p-5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:p-6">
              <div
                aria-hidden="true"
                className="mx-auto grid w-full max-w-xs grid-cols-7 gap-1.5 sm:gap-2"
              >
                {Array.from({ length: 14 }, (_, i) => (
                  <Vial key={i} filled={i === 0} />
                ))}
              </div>

              <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
                {SPECS.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-accent/20 bg-surface px-3.5 py-2 text-[13px] font-bold text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/** One vial in the box diagram; the first is "opened" — one per treatment. */
function Vial({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 48" className="h-auto w-full" fill="none">
      <rect x="6" y="1" width="12" height="7" rx="2" fill="var(--color-ink-strong)" opacity={filled ? 1 : 0.85} />
      <rect x="8" y="8" width="8" height="4" fill="var(--color-line-strong)" />
      <rect
        x="3"
        y="12"
        width="18"
        height="34"
        rx="4"
        fill={filled ? "var(--color-accent)" : "var(--color-surface)"}
        stroke="var(--color-accent)"
        strokeWidth="1.6"
      />
      <rect x="3.8" y="24" width="16.4" height="10" fill={filled ? "#fff" : "var(--color-accent)"} opacity={filled ? 0.35 : 0.15} />
    </svg>
  );
}

function BenefitIcon({ kind }: { kind: "sun" | "spark" | "leaf" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-6 w-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "sun" && (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" />
        </>
      )}
      {kind === "spark" && (
        <path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9L12 3ZM18.5 16.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
      )}
      {kind === "leaf" && (
        <>
          <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" />
          <path d="M5 19c3-4 6-7 10-9" />
        </>
      )}
    </svg>
  );
}
