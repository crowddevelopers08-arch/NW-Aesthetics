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
      className="relative flex flex-col justify-center overflow-hidden bg-surface px-4 pt-20 pb-10 sm:min-h-svh sm:px-6 sm:pt-[calc(4rem+2svh)] sm:pb-[3svh] lg:min-h-[600px] lg:h-svh lg:px-8 lg:pt-[calc(4.5rem+2svh)]"
    >
      {/* atmosphere: a soft magenta haze behind the product */}
      <div
        aria-hidden="true"
        className="lp-glow pointer-events-none absolute top-[18%] right-[-8%] h-[60%] w-[55%] opacity-60"
      />

      {/* Everything is sized off the viewport height (svh), so the hero
          fills exactly one screen on phones and laptops alike. */}
      {/* On phones the stack reads copy → product → CTA; on desktop the
          copy halves share the left column and the product spans the right. */}
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-6 sm:gap-[3svh] lg:grid-cols-[1.08fr_0.92fr] lg:gap-x-14 lg:gap-y-0">
        {/* ---------- copy ---------- */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-1 lg:self-end">
          {/* Same pill eyebrow as the M-Shape hero */}
          <span className="lp-rise lp-d1 inline-flex flex-wrap items-center gap-2 rounded-full border-2 border-line bg-surface-alt px-3.5 py-1.5 text-[10px] font-extrabold tracking-[0.14em] text-ink-soft uppercase sm:text-[11px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            Made in Italy · No Needles
          </span>

          <h1 className="lp-rise lp-d2 relative mt-4 w-fit pb-4 text-[clamp(1.85rem,7.2vw,2.5rem)] leading-[1.06] sm:mt-[1.6svh]sm:text-[clamp(1.55rem,min(7.6vw,4.3svh),2.5rem)] lg:pb-5 lg:text-[clamp(2.1rem,min(4.4vw,6.8svh),3.6rem)] font-extrabold tracking-[-0.03em] text-balance text-ink-strong sm:pb-6">
            Your City Has the Demand for Intimate Lightening.{" "}
            <span className="text-accent">
              Does Your Clinic Have the Treatment?
            </span>
            <Swash />
          </h1>

          <p className="lp-rise lp-d3 mt-4 max-w-xl text-[1rem] sm:mt-[2svh] sm:text-[clamp(0.9rem,min(4vw,2.1svh),1.18rem)] leading-relaxed font-medium text-pretty text-ink-soft">
            An Italian peel for underarms, bikini line and inner thighs. No
            needles. No downtime.
          </p>
        </div>

        {/* ---------- CTA ---------- */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-2 lg:self-start">
          <div className="lp-rise lp-d4 flex lg:mt-[2.6svh] flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-5">
            <CTAButton href="#quote">Get the Quote &amp; Protocol</CTAButton>
            <span className="flex items-center gap-1.5 text-[14px] font-bold text-ink-soft">
              <CheckIcon />
              Training included
            </span>
          </div>

          <div className="lp-rise lp-d5 mt-4 border-t border-line pt-3 sm:mt-[3svh] sm:pt-[2svh]">
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
        {/* Phones: a plain full-width frame like the M-Shape hero.
            From `sm` the offset magenta block comes back. */}
        <div className="lp-rise lp-d3 relative row-start-2 mx-auto w-full max-w-104 min-w-0 sm:w-fit sm:max-w-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div className="lp-float relative sm:pt-4 sm:pr-4">
          {/* offset flat magenta block, echoing the box's pink band */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 bottom-8 left-8 hidden rounded-[2rem] bg-brand-blue sm:block"
          />
          <div className="relative overflow-hidden rounded-2xl border border-line bg-white sm:rounded-[2rem] sm:shadow-[0_30px_60px_-30px_rgba(125,0,67,0.45)]">
            <Image
              src="/images/pink-intimate/pink-intimate-kit-tight.jpg"
              alt="The Pink Intimate system box with a vial and a sachet, by Promoitalia"
              width={1400}
              height={1120}
              priority
              sizes="(min-width: 1024px) 680px, 90vw"
              className="h-auto w-full sm:w-[min(86vw,460px)] lg:h-[min(62svh,560px)] lg:w-auto"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
