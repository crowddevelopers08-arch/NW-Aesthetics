import Image from "next/image";
import { Swash } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const ACTIVES = [
  {
    name: "PDRN",
    dose: "20",
    unit: "mg/ml",
    text: "Repairs and firms the skin over the course",
  },
  {
    name: "HA",
    dose: "10",
    unit: "mg/ml",
    text: "Visible hydration from session one",
  },
  {
    name: "Glutathione",
    dose: "2",
    unit: "mg/ml",
    text: "Brighter, more even skin tone",
  },
];

/** Dark band — the product's own lit-vial photography sets the mood. */
export default function NucleoSolution() {
  return (
    <section
      id="solution"
      className="relative scroll-mt-20 overflow-hidden bg-accent-deep px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* atmosphere: faint dot-grid and an aqua glow under the photo */}
      <div aria-hidden="true" className="lp-dots-light pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="lp-glow pointer-events-none absolute top-[5%] right-[-10%] h-[90%] w-[60%] opacity-70"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <Reveal className="min-w-0 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-[0_40px_80px_-40px_rgba(46,196,182,0.55)]">
            <Image
              src="/images/nucleoskin/vial-in-hand.jpg"
              alt="A NucleoSkin vial held up to the light"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 560px, 92vw"
              className="aspect-[16/9] h-auto w-full object-cover lg:aspect-auto"
            />
          </div>
        </Reveal>

        <div className="min-w-0 lg:order-1">
          <Reveal>
            <h2 className="relative w-fit pb-4 text-[clamp(1.75rem,5.2vw,3rem)] leading-[1.08] font-extrabold tracking-[-0.02em] text-balance sm:pb-6 [&>svg]:text-brand-blue">
              Regenerate. Hydrate. Brighten. One Injection.
              <Swash />
            </h2>
          </Reveal>

          <div className="mt-7 grid gap-3 sm:mt-9">
            {ACTIVES.map((a, i) => (
              <Reveal key={a.name} delay={i * 90}>
                <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm transition-colors duration-300 hover:border-brand-blue/60 hover:bg-white/[0.1] sm:gap-5 sm:p-5">
                  <div className="flex w-[5.5rem] shrink-0 flex-col items-center justify-center rounded-xl bg-white py-3 text-accent-deep sm:w-24">
                    <span className="text-[28px] leading-none font-extrabold tabular-nums sm:text-[32px]">
                      {a.dose}
                    </span>
                    <span className="mt-1 text-[12px] font-bold">
                      {a.unit}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[19px] font-extrabold sm:text-[21px]">
                      {a.name}
                    </h3>
                    <p className="mt-1 text-[15px] leading-snug font-medium text-white/80 sm:text-[16px]">
                      {a.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
