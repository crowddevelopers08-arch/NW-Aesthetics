import Image from "next/image";
import Section, { Heading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/** Named doctors — names only until headshots arrive. */
const DOCTORS = ["Dr Rickson Pereira", "Dr Jaishree Sharad", "Dr Kiran Sethi"];

/**
 * Each frame's grid track is sized to its photo's aspect ratio, so on
 * desktop the wide under-eye pair and the two square pairs end up the same
 * height — nothing is cropped out of a before/after.
 */
const RESULTS = [
  {
    area: "Under-eye",
    src: "/images/nucleoskin/ba-under-eye.jpg",
    width: 1280,
    height: 696,
    alt: "Under-eye before and after NucleoSkin",
  },
  {
    area: "Face",
    src: "/images/nucleoskin/ba-face.jpg",
    width: 1200,
    height: 1200,
    alt: "Face before and after NucleoSkin",
  },
  {
    area: "Neck",
    src: "/images/nucleoskin/ba-neck.jpg",
    width: 1280,
    height: 1276,
    alt: "Neck before and after NucleoSkin",
  },
];

export default function NucleoProof() {
  return (
    <Section id="proof">
      <Reveal className="text-center">
        <Heading className="mx-auto">
          500+ Doctors Didn&apos;t Switch by Accident.
        </Heading>
      </Reveal>

      {/* ---------- face strip ---------- */}
      <Reveal delay={80}>
        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3 sm:mt-10">
          {DOCTORS.map((name) => (
            <li
              key={name}
              className="rounded-full border border-line bg-surface px-5 py-3 text-[15px] font-extrabold text-ink-strong"
            >
              {name}
            </li>
          ))}
          <li className="flex items-center rounded-full bg-accent px-5 py-3 text-white">
            <span className="text-[15px] font-extrabold">and 500+ more</span>
          </li>
        </ul>
      </Reveal>

      {/* ---------- before / after ---------- */}
      <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-[1.84fr_1fr_1fr]">
        {RESULTS.map((r, i) => (
          <Reveal key={r.area} delay={i * 90} className="min-w-0">
            <figure className="lp-card overflow-hidden rounded-2xl border border-line bg-surface-alt">
              <div className="relative">
                <Image
                  src={r.src}
                  alt={r.alt}
                  width={r.width}
                  height={r.height}
                  sizes="(min-width: 1024px) 480px, 92vw"
                  className="h-auto w-full"
                />
                <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1.5 text-[12px] font-extrabold tracking-[0.08em] text-white uppercase">
                  After 3 sessions
                </span>
              </div>
              <figcaption className="flex items-center justify-between px-4 py-3 text-[14px] font-extrabold text-ink-strong">
                {r.area}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
