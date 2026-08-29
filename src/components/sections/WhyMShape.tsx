import Section, { Heading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const ROWS = [
  { feature: "Muscle", mshape: "3 ways, 4 technologies", others: "1 way" },
  { feature: "Face + body", mshape: "Both", others: "Usually one" },
  { feature: "Hidden costs", mshape: "None", others: "Common" },
  { feature: "Marketing help", mshape: "Yes", others: "No" },
  { feature: "Made in", mshape: "Italy", others: "Varies" },
];

export default function WhyMShape() {
  return (
    <Section id="why-mshape">
      <Reveal className="text-center">
        <Heading className="mx-auto max-w-2xl">Why MShape</Heading>
      </Reveal>

      <Reveal delay={100}>
        {/* ---------- table: sm and up ---------- */}
        <div className="mt-10 hidden overflow-hidden rounded-xl border border-line sm:block">
          <table className="w-full table-fixed border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-line bg-surface-alt">
                <th className="w-[26%] px-3 py-4 md:px-5">
                  <span className="sr-only">Feature</span>
                </th>
                <th className="w-[41%] border-x-2 border-line bg-accent-tint px-3 py-4 text-[16px] font-extrabold text-accent-deep md:px-5 md:text-[18px]">
                  MShape
                </th>
                <th className="px-3 py-4 text-[16px] font-bold text-ink-faint md:px-5 md:text-[18px]">
                  Other machines
                </th>
              </tr>
            </thead>

            <tbody>
              {ROWS.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-line last:border-b-0"
                >
                  <th
                    scope="row"
                    className="px-3 py-4 text-[12px] font-extrabold tracking-[0.06em] text-ink-faint uppercase md:px-5 md:text-[13px]"
                  >
                    {row.feature}
                  </th>
                  <td className="border-x-2 border-line bg-accent-tint/50 px-3 py-4 md:px-5">
                    <span className="flex items-start gap-2 text-[15px] font-bold text-balance text-ink-strong md:text-[16px]">
                      <Check />
                      {row.mshape}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-[15px] font-medium text-ink-soft md:px-5 md:text-[16px]">
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ---------- stacked cards: below sm ---------- */}
        <div className="mt-7 grid gap-3 sm:hidden">
          {ROWS.map((row) => (
            <div
              key={row.feature}
              className="overflow-hidden rounded-xl border border-line"
            >
              <p className="border-b border-line bg-surface-alt px-4 py-3 text-[12px] font-extrabold tracking-[0.12em] text-ink-faint uppercase">
                {row.feature}
              </p>
              <div className="grid grid-cols-2 divide-x divide-line">
                <div className="min-w-0 bg-accent-tint/50 px-3.5 py-4">
                  <p className="text-[10px] font-extrabold tracking-[0.14em] text-accent-deep uppercase">
                    MShape
                  </p>
                  <p className="mt-2 flex items-start gap-1.5 text-[14px] font-bold text-ink-strong">
                    <Check />
                    {row.mshape}
                  </p>
                </div>
                <div className="min-w-0 px-3.5 py-4">
                  <p className="text-[10px] font-extrabold tracking-[0.14em] text-ink-faint uppercase">
                    Others
                  </p>
                  <p className="mt-2 text-[14px] font-medium text-ink-soft">
                    {row.others}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
    >
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
