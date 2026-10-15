import CTAButton from "@/components/ui/CTAButton";
import Section, { Eyebrow, Heading, Lede } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * Clinic price of one box of 14 vials, in rupees. While it is null the
 * "Product cost" and "Your profit" columns stay hidden; set it and both
 * columns appear, worked out from the rows below.
 */
const BOX_PRICE: number | null = null;

const ROWS = [
  { period: "Per month", treatments: 12, boxes: 1, revenue: 90_000 },
  { period: "Per year", treatments: 144, boxes: 10, revenue: 1_080_000 },
];

/** ₹90,000 / ₹10.8 lakh — Indian grouping, lakh from one lakh up. */
function rupees(n: number) {
  if (n >= 100_000) {
    const lakh = n / 100_000;
    return `₹${Number.isInteger(lakh) ? lakh : lakh.toFixed(1)} lakh`;
  }
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function PinkNumbers() {
  const showCost = BOX_PRICE !== null;

  return (
    <Section id="numbers" dense>
      <div className="grid gap-4 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-14">
        <Reveal className="min-w-0">
          <Eyebrow>The cost of saying &ldquo;we don&apos;t treat that&rdquo;</Eyebrow>
          <Heading>
            Every City Will Have One Clinic Known for Intimate Lightening. Make
            It Yours.
          </Heading>
        </Reveal>
        <Reveal delay={100} className="min-w-0">
          <Lede className="lg:mt-0 lg:pb-6">
            Patients don&apos;t post about this treatment. They tell their
            sister, their best friend, the bride-to-be. One happy patient sends
            the next, and they all go to the same clinic.
          </Lede>
        </Reveal>
      </div>

      {/* ---------- the callout ---------- */}
      <Reveal className="mt-6 sm:mt-10">
        <div className="relative grid overflow-hidden rounded-3xl bg-accent-deep text-white shadow-[0_40px_80px_-44px_rgba(125,0,67,0.75)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative p-6 sm:p-8 lg:p-10">
            <p className="text-[clamp(2.4rem,12vw,5.5rem)] leading-none font-extrabold tracking-[-0.03em] whitespace-nowrap text-white">
              ₹10.8 lakh
            </p>
            <p className="mt-3 text-[clamp(1.1rem,2.6vw,1.45rem)] leading-snug font-extrabold text-balance">
              a year from 3 treatments a week.{" "}
              <span className="text-brand-blue-tint/80">No machine. No EMI.</span>
            </p>
          </div>
          <div className="relative flex items-center border-t border-white/15 bg-black/15 p-6 sm:p-8 lg:border-t-0 lg:border-l lg:p-10">
            <p className="text-[16px] leading-relaxed font-semibold text-white/90 sm:text-[18px]">
              Say no to those 3 patients a week, and ₹90,000 a month walks to
              the clinic that said yes.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ---------- the table ---------- */}
      <Reveal delay={80} className="mt-5">
        <div className="rounded-3xl border border-line bg-surface p-5 sm:p-7">
          <h3 className="text-[18px] font-extrabold text-ink-strong sm:text-[21px]">
            What just 3 treatments a week looks like
          </h3>

          {/* Phones: one card per period, label beside value, instead of a
              table whose last columns would be cut off. */}
          <ul className="mt-5 grid gap-2.5 sm:hidden">
            {ROWS.map((row) => {
              const cost = showCost ? row.boxes * (BOX_PRICE as number) : 0;
              const cells: [string, string][] = [
                ["Treatments", String(row.treatments)],
                ["Boxes used", `About ${row.boxes}`],
                ...(showCost
                  ? ([
                      ["Product cost", rupees(cost)],
                      ["Your profit", rupees(row.revenue - cost)],
                    ] as [string, string][])
                  : []),
              ];
              return (
                <li
                  key={row.period}
                  className="rounded-2xl border border-line bg-surface-alt p-4"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[15px] font-extrabold text-ink-strong">
                      {row.period}
                    </span>
                    <span className="text-right text-[17px] font-extrabold text-accent tabular-nums">
                      {rupees(row.revenue)}
                    </span>
                  </div>
                  <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[14px]">
                    {cells.map(([label, value]) => (
                      <div key={label} className="flex gap-1.5">
                        <dt className="font-medium text-ink-soft">{label}</dt>
                        <dd className="font-extrabold text-ink-strong tabular-nums">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 hidden overflow-x-auto sm:block">
            <table className="w-full min-w-[19rem] border-collapse text-left">
              <thead>
                <tr className="text-[12px] font-extrabold tracking-[0.08em] text-ink-faint uppercase">
                  <th scope="col" className="pb-3 pr-3 font-extrabold">Period</th>
                  <th scope="col" className="pb-3 pr-3 text-center font-extrabold">Treatments</th>
                  <th scope="col" className="pb-3 pr-3 text-center font-extrabold">Boxes used</th>
                  <th scope="col" className="pb-3 pr-3 text-right font-extrabold">Revenue</th>
                  {showCost && (
                    <>
                      <th scope="col" className="pb-3 pr-3 text-right font-extrabold">Product cost</th>
                      <th scope="col" className="pb-3 text-right font-extrabold">Your profit</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => {
                  const cost = showCost ? row.boxes * (BOX_PRICE as number) : 0;
                  return (
                    <tr key={row.period} className="border-t border-line">
                      <th scope="row" className="py-4 pr-3 text-[14px] font-extrabold text-ink-strong sm:text-[16px]">
                        {row.period}
                      </th>
                      <td className="py-4 pr-3 text-center text-[15px] font-bold text-ink tabular-nums sm:text-[17px]">
                        {row.treatments}
                      </td>
                      <td className="py-4 pr-3 text-center text-[15px] font-bold text-ink tabular-nums sm:text-[17px]">
                        About {row.boxes}
                      </td>
                      <td className="py-4 pr-3 text-right text-[15px] font-extrabold text-accent tabular-nums sm:text-[17px]">
                        {rupees(row.revenue)}
                      </td>
                      {showCost && (
                        <>
                          <td className="py-4 pr-3 text-right text-[15px] font-bold text-ink tabular-nums sm:text-[17px]">
                            {rupees(cost)}
                          </td>
                          <td className="py-4 text-right text-[15px] font-extrabold text-ink-strong tabular-nums sm:text-[17px]">
                            {rupees(row.revenue - cost)}
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-[12px] leading-relaxed font-medium text-ink-faint sm:text-[13px]">
            Illustrative, at ₹7,500 a treatment. Clinics in India charge ₹2,500
            to ₹20,000 per peel session.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-6 flex justify-center sm:mt-8">
        <CTAButton href="#quote">Get the Numbers for My Clinic</CTAButton>
      </Reveal>
    </Section>
  );
}
