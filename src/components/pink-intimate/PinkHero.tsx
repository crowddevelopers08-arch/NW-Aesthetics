import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { Swash } from "@/components/ui/Section";
import { CheckIcon } from "@/components/lp/QuoteStickyBar";

const FOR = [
  "Dermatologist",
  "Gynaecologist",
  "Plastic surgeon",
  "Aesthetic clinic owner",
];

export default function PinkHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-surface px-4 pt-[calc(4rem+2svh)] pb-[3svh] sm:px-6 lg:min-h-[600px] lg:h-svh lg:px-8 lg:pt-[calc(4.5rem+2svh)]"
    >
      {/* atmosphere: a soft magenta haze behind the product */}
      <div
        aria-hidden="true"
        className="lp-glow pointer-events-none absolute top-[18%] right-[-8%] h-[60%] w-[55%] opacity-60"
      />

      {/* Everything is sized off the viewport height (svh), so the hero
          fills exactly one screen on phones and laptops alike. */}
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-[3svh] lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        {/* ---------- copy ---------- */}
        <div className="min-w-0">
          <p className="lp-rise lp-d1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-extrabold tracking-[0.14em] text-accent uppercase sm:text-[13px]">
            <span className="h-0.5 w-6 bg-accent" />
            Made in Italy
            <span className="text-line-strong">·</span>
            No Needles
          </p>

          <h1 className="lp-rise lp-d2 relative mt-[1.6svh] w-fit pb-[1.6svh] text-[clamp(1.55rem,min(7.6vw,4.3svh),2.5rem)] leading-[1.06] lg:pb-5 lg:text-[clamp(2.1rem,min(4.4vw,6.8svh),3.6rem)] font-extrabold tracking-[-0.03em] text-balance text-ink-strong sm:pb-6">
            Your City Has the Demand for Intimate Lightening.{" "}
            <span className="text-accent">
              Does Your Clinic Have the Treatment?
            </span>
            <Swash />
          </h1>

          <p className="lp-rise lp-d3 mt-[2svh] max-w-xl text-[clamp(0.9rem,min(4vw,2.1svh),1.18rem)] leading-relaxed font-medium text-pretty text-ink-soft">
            An Italian peel for underarms, bikini line and inner thighs. No
            needles. No downtime.
          </p>

          <div className="lp-rise lp-d4 mt-[2.6svh] flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-5">
            <CTAButton href="#quote">Get the Quote &amp; Protocol</CTAButton>
            <span className="flex items-center gap-1.5 text-[14px] font-bold text-ink-soft">
              <CheckIcon />
              Training included
            </span>
          </div>

          <div className="lp-rise lp-d5 mt-[3svh] border-t border-line pt-[2svh]">
            <p className="text-[12px] leading-snug font-bold text-ink-soft sm:hidden">
              <span className="font-extrabold text-ink-faint uppercase">For </span>
              {FOR.join(" · ")}
            </p>
            <p className="hidden text-[12px] font-extrabold tracking-[0.12em] text-ink-faint uppercase sm:block">
              For
            </p>
            <ul className="mt-2.5 hidden flex-wrap gap-2 sm:flex">
              {FOR.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-line bg-surface-alt px-3.5 py-1.5 text-[13px] font-bold text-ink-soft"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- product ---------- */}
        <div className="lp-rise lp-d3 relative mx-auto w-fit min-w-0">
          <div className="lp-float relative pt-3 pr-3 sm:pt-4 sm:pr-4">
          {/* offset flat magenta block, echoing the box's pink band */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 bottom-6 left-6 rounded-[1.5rem] bg-brand-blue sm:bottom-8 sm:left-8 sm:rounded-[2rem]"
          />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-white sm:rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(125,0,67,0.45)]">
            <Image
              src="/images/pink-intimate/pink-intimate-kit-tight.jpg"
              alt="The Pink Intimate system box with a vial and a sachet, by Promoitalia"
              width={1400}
              height={1120}
              priority
              sizes="(min-width: 1024px) 480px, 88vw"
              className="h-[24svh] w-auto sm:h-[32svh] lg:h-[min(54svh,480px)]"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
