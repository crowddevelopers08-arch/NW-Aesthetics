import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import Section, { Eyebrow, Heading, Lede } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * Show the scarcity line only if NW actually limits NucleoSkin clinics per
 * area. Flip to true once that is confirmed.
 */
const SHOW_SCARCITY = false;

const ROWS = [
  { month: "Month 1", patients: 5, sessions: 5, revenue: "₹1 lakh", share: 1 / 3 },
  { month: "Month 2", patients: 10, sessions: 10, revenue: "₹2 lakh", share: 2 / 3 },
  {
    month: "Month 3 onwards",
    patients: 15,
    sessions: 15,
    revenue: "₹3 lakh a month",
    share: 1,
  },
];

export default function NucleoNumbers() {
  return (
    <Section id="numbers" tone="alt" dense>
      <Reveal className="max-w-3xl">
        <Eyebrow>The cost of saying &ldquo;we don&apos;t do PDRN&rdquo;</Eyebrow>
        <Heading>
          Every City Will Have a Go-To PDRN Clinic. Make Sure It&apos;s Yours.
        </Heading>
        <Lede>
          Patients check Instagram before they book. When she asks for PDRN and
          you don&apos;t have it, she doesn&apos;t wait. She books the clinic
          down the road, and her peels, lasers and Botox follow her there.
        </Lede>
      </Reveal>

      <div className="mt-6 grid gap-5 sm:mt-10 xl:grid-cols-[1.2fr_0.8fr] xl:gap-6">
        {/* ---------- the ladder ---------- */}
        <Reveal className="min-w-0">
          <div className="h-full rounded-3xl border border-line bg-surface p-5 sm:p-7">
            <h3 className="text-[18px] font-extrabold text-ink-strong sm:text-[21px]">
              What just 5 new patients a month looks like
            </h3>

            {/* Phones: one card per month, label beside value — four table
                columns would squeeze "Patients on course" into a sliver. */}
            <ul className="mt-5 grid gap-2.5 sm:hidden">
              {ROWS.map((row, i) => (
                <li
                  key={row.month}
                  className="rounded-2xl border border-line bg-surface-alt p-4"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[15px] font-extrabold text-ink-strong">
                      {row.month}
                    </span>
                    <span
                      className={`text-right text-[17px] font-extrabold tabular-nums ${
                        i === ROWS.length - 1 ? "text-accent" : "text-ink-strong"
                      }`}
                    >
                      {row.revenue}
                    </span>
                  </div>
                  <span className="mt-2 block h-1.5 w-full overflow-hidden rounded-full bg-surface-sunken">
                    <span
                      className="lp-grow block h-full rounded-full bg-accent"
                      style={{ width: `${row.share * 100}%` }}
                    />
                  </span>
                  <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[14px]">
                    <div className="flex gap-1.5">
                      <dt className="font-medium text-ink-soft">Patients on course</dt>
                      <dd className="font-extrabold text-ink-strong tabular-nums">{row.patients}</dd>
                    </div>
                    <div className="flex gap-1.5">
                      <dt className="font-medium text-ink-soft">Sessions</dt>
                      <dd className="font-extrabold text-ink-strong tabular-nums">{row.sessions}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>

            <table className="mt-5 hidden w-full border-collapse text-left sm:table">
              <thead>
                <tr className="text-[12px] font-extrabold tracking-[0.08em] text-ink-faint uppercase">
                  <th scope="col" className="pb-3 pr-2 font-extrabold">Month</th>
                  <th scope="col" className="pb-3 pr-2 text-center font-extrabold">
                    Patients on course
                  </th>
                  <th scope="col" className="pb-3 pr-2 text-center font-extrabold">
                    Sessions
                  </th>
                  <th scope="col" className="pb-3 text-right font-extrabold">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.month} className="border-t border-line align-top">
                    <th
                      scope="row"
                      className="py-4 pr-2 text-[14px] font-extrabold text-ink-strong sm:text-[16px]"
                    >
                      {row.month}
                    </th>
                    <td className="py-4 pr-2 text-center text-[15px] font-bold text-ink tabular-nums sm:text-[17px]">
                      {row.patients}
                    </td>
                    <td className="py-4 pr-2 text-center text-[15px] font-bold text-ink tabular-nums sm:text-[17px]">
                      {row.sessions}
                    </td>
                    <td className="py-4 text-right">
                      <span
                        className={`text-[15px] font-extrabold tabular-nums sm:text-[17px] ${
                          i === ROWS.length - 1 ? "text-accent" : "text-ink-strong"
                        }`}
                      >
                        {row.revenue}
                      </span>
                      {/* revenue bar, scaled to month 3 */}
                      <span className="mt-2 ml-auto block h-1.5 w-full max-w-36 overflow-hidden rounded-full bg-surface-sunken">
                        <span
                          className="lp-grow lp-grow-r ml-auto block h-full rounded-full bg-accent"
                          style={{ width: `${row.share * 100}%` }}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-4 text-[12px] leading-relaxed font-medium text-ink-faint sm:text-[13px]">
              Illustrative, at ₹20,000 a session, 3 sessions per patient.
              Clinics charge ₹15,000 to ₹35,000 a session.
            </p>
          </div>
        </Reveal>

        {/* ---------- the callout ---------- */}
        <Reveal delay={120} className="min-w-0">
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink-strong p-6 text-white shadow-[0_40px_80px_-44px_rgba(7,78,76,0.7)] sm:p-8">
            <Image
              src="/images/nucleoskin/box-podium.jpg"
              alt=""
              width={864}
              height={1080}
              sizes="(min-width: 1024px) 420px, 92vw"
              className="absolute inset-0 h-full w-full object-cover opacity-35"
            />
            <div className="relative">
              <p className="text-[15px] font-bold text-white/80">About</p>
              <p className="text-[clamp(2.6rem,13vw,5rem)] leading-none font-extrabold tracking-[-0.03em] whitespace-nowrap text-brand-blue lg:text-[clamp(2.8rem,5vw,4.5rem)]">
                ₹33 lakh
              </p>
              <p className="mt-2 text-[20px] font-extrabold sm:text-[24px]">
                in year one.
              </p>
              <p className="mt-3 text-[16px] leading-relaxed font-semibold text-white/85">
                From one product. From 5 patients a month.
              </p>
            </div>

            <p className="relative mt-auto border-t border-white/20 pt-5 text-[15px] leading-relaxed font-semibold text-white sm:text-[16px]">
              Say no to those 5 patients, and that ₹3 lakh a month goes to the
              clinic that said yes.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-6 flex flex-col sm:mt-8 items-center gap-3 text-center">
        <CTAButton href="#quote">Get the Numbers for My Clinic</CTAButton>
        {SHOW_SCARCITY && (
          <p className="max-w-md text-[14px] font-semibold text-ink-soft">
            We onboard a limited number of NucleoSkin clinics in each area.
            Check if yours is still open.
          </p>
        )}
      </Reveal>
    </Section>
  );
}
