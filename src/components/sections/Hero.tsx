import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import Carousel from "@/components/ui/Carousel";
import { Swash } from "@/components/ui/Section";

/**
 * Hero carousel. Square-format shots only, so each one fills the square frame
 * edge to edge — no padding, no letterboxing, nothing cropped away.
 */
const SHOTS = [
  {
    src: "/images/brand/mshape-face.png",
    alt: "MShape face treatment, with the console and the two face applicators",
    width: 1080,
    height: 1080,
  },
  {
    src: "/images/brand/mshape-energy.jpg",
    alt: "The MShape console during a body treatment",
    width: 1000,
    height: 1000,
  },
  {
    src: "/images/brand/technologies.jpg",
    alt: "The MShape machine with its applicators docked in the side tray",
    width: 1000,
    height: 1000,
  },
  {
    src: "/images/machine/mshape-console.png",
    alt: "The MShape touchscreen console with its applicators docked alongside",
    width: 3535,
    height: 3744,
  },
  {
    src: "/images/brand/mshape-training.jpg",
    alt: "The MShape console beside a treated body",
    width: 1000,
    height: 1000,
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-surface px-4 pt-20 pb-10 sm:px-6 sm:pt-24 sm:pb-12 lg:flex lg:min-h-svh lg:items-center lg:px-8 lg:pt-24 lg:pb-12"
    >
      {/* Three blocks in source order: headline, machine, call to action.
          Stacked on mobile that puts the machine between the copy and the CTA;
          from `lg` the explicit row/column placement rebuilds the two-column
          layout, with the machine spanning both rows on the right. */}
      <div className="mx-auto grid w-full max-w-6xl gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-x-12 xl:gap-x-16">
        {/* ---------- headline ---------- */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-1 lg:self-end">
          <span className="inline-flex flex-wrap items-center gap-2 rounded-full border-2 border-line bg-surface-alt px-3.5 py-1.5 text-[10px] font-extrabold tracking-[0.14em] text-ink-soft uppercase sm:text-[11px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
            Made in Italy · Face &amp; Body Contouring
          </span>

          <h1 className="relative mt-4 w-fit pb-4 text-[clamp(2rem,7.2vw,4rem)] leading-[1.06] font-extrabold tracking-[-0.025em] text-balance text-ink-strong sm:mt-5 sm:pb-6">
            Clinics Are Making{" "}
            <span className="text-accent">₹10L+ a Month</span> With M-Shape
            <Swash />
          </h1>

          <p className="mt-4 max-w-lg text-[clamp(1rem,2.4vw,1.2rem)] sm:mt-5 leading-relaxed font-medium text-pretty text-ink-soft">
            Treats muscle, fat and skin in one 30-minute session. See the real
            numbers below.
          </p>

        </div>

        {/* ---------- machine ---------- */}
        <div className="mx-auto w-full min-w-0 max-w-104 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mx-0 lg:max-w-none lg:self-center">
          <Carousel label="The MShape machine" autoPlayMs={4500}>
            {SHOTS.map((shot, i) => (
              <div
                key={shot.src}
                className="relative aspect-square w-full overflow-hidden rounded-2xl border border-line bg-surface-alt"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes="(min-width: 1024px) 520px, 90vw"
                  priority={i === 0}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* ---------- call to action ---------- */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-2 lg:self-start">
          <CTAButton>Book a Product Demo for Your Clinic</CTAButton>

          <Image
            src="/images/clinics/client-logos.png"
            alt="Installed at Ekisa, Face Glow and Zenara"
            width={2040}
            height={397}
            sizes="(min-width: 1024px) 460px, 90vw"
            className="mt-7 h-auto w-full max-w-115 sm:mt-9"
          />
        </div>
      </div>
    </section>
  );
}
