import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { Swash } from "@/components/ui/Section";
import { CheckIcon } from "@/components/lp/QuoteStickyBar";

export default function NucleoHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-surface px-4 pt-[calc(4rem+2svh)] pb-[1.5svh] sm:px-6 sm:pb-[3svh] lg:min-h-[600px] lg:h-svh lg:px-8 lg:pt-[calc(4.5rem+2svh)]"
    >
      {/* atmosphere: lab dot-grid and an aqua glow behind the product */}
      <div aria-hidden="true" className="lp-dots pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="lp-glow pointer-events-none absolute top-[12%] right-[-12%] h-[75%] w-[65%]"
      />

      {/* Everything is sized off the viewport height (svh), so the hero
          fills exactly one screen on phones and laptops alike. */}
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-[2.5svh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* ---------- copy ---------- */}
        <div className="min-w-0">
          {/* Two tidy rows instead of one wrapping pill: origin tags, then
              the audience as its own badge, so no separator is left dangling. */}
          <div className="lp-rise lp-d1 flex flex-col items-start gap-2">
            <ul className="flex flex-wrap items-center gap-1.5 text-[11px] font-extrabold tracking-[0.12em] text-ink-soft uppercase sm:gap-2 sm:text-[12px]">
              {["Made in Italy", "Now in India"].map((tag) => (
                <li
                  key={tag}
                  className="flex items-center gap-1.5 rounded-full border border-line bg-surface-alt px-3 py-1"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                  {tag}
                </li>
              ))}
            </ul>
            <p className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-1.5 text-[11px] leading-snug font-extrabold tracking-[0.1em] text-white uppercase sm:text-[12px]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 text-brand-blue"
              >
                <path
                  d="M12 2.5 4.5 5.5v6c0 4.6 3.2 8.5 7.5 10 4.3-1.5 7.5-5.4 7.5-10v-6L12 2.5Z"
                  fill="currentColor"
                />
                <path
                  d="m8.5 12 2.5 2.5 4.5-5"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              For Dermatologist &amp; Aesthetic Clinic owners Only
            </p>
          </div>

          <h1 className="lp-rise lp-d2 relative mt-[2svh] w-fit pb-[1.6svh] text-[clamp(1.6rem,min(8vw,4.6svh),2.6rem)] leading-[1.05] lg:pb-5 lg:text-[clamp(2.2rem,min(4.6vw,7.2svh),3.9rem)] font-extrabold tracking-[-0.03em] text-balance text-ink-strong sm:pb-6">
            Your Patients Already Want PDRN.{" "}
            <span className="text-accent">Give Them the Best One.</span>
            <Swash />
          </h1>

          <p className="lp-rise lp-d3 mt-[2svh] max-w-xl text-[clamp(0.9rem,min(4vw,2.1svh),1.18rem)] leading-relaxed font-medium text-pretty text-ink-soft">
            NucleoSkin combines PDRN, Hyaluronic Acid and Glutathione in one 3
            ml vial. Clinics charge up to{" "}
            <strong className="font-extrabold text-ink-strong">
              ₹35,000 a session
            </strong>
            . Used by 500+ doctors across India.
          </p>

          <div className="lp-rise lp-d4 mt-[2.6svh] flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-5">
            <CTAButton href="#quote">Get the Quote &amp; Protocol</CTAButton>
            <span className="flex items-center gap-1.5 text-[14px] font-bold text-ink-soft">
              <CheckIcon />
              Training included
            </span>
          </div>
        </div>

        {/* ---------- product ----------
            A square stage sized off the viewport height, so the disc stays
            a true circle and the hero still fits one screen. */}
        <div className="lp-rise lp-d3 relative mx-auto aspect-square w-[min(31svh,100%)] min-w-0 sm:w-[min(42svh,100%)] lg:w-[min(70svh,640px,100%)]">
          {/* flat teal disc behind the cut-out pack */}
          <div
            aria-hidden="true"
            className="absolute inset-[4%] rounded-full bg-accent-tint"
          />

          {/* molecular orbits — PDRN is DNA fragments, so the pack sits
              inside slowly turning rings with their own little particles */}
          <div
            aria-hidden="true"
            className="lp-spin absolute inset-[3%] rounded-full border border-accent/20"
          >
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-blue ring-4 ring-surface" />
            <span className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-accent" />
          </div>
          <div
            aria-hidden="true"
            className="lp-spin-rev absolute inset-[11%] rounded-full border border-dashed border-accent/30"
          >
            <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent/70" />
            <span className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rounded-full bg-brand-blue" />
          </div>

          <Image
            src="/images/nucleoskin/hero-box-vial-centred.webp"
            alt="NucleoSkin box with a 3 ml vial, by Promoitalia"
            width={1025}
            height={1108}
            priority
            sizes="(min-width: 1024px) 640px, 42vh"
            className="lp-float absolute inset-[17%] h-[66%] w-[66%] object-contain drop-shadow-[0_30px_40px_rgba(7,78,76,0.22)]"
          />
        </div>
      </div>
    </section>
  );
}
