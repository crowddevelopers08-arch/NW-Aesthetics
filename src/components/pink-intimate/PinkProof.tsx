import Image from "next/image";
import Section, { Heading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Carousel from "@/components/ui/Carousel";

/** Named doctors — names only until headshots arrive. */
const DOCTORS = [
  "Dr Nivedita Dadu",
  "Dr Geeta Patel",
  "Dr Amit Luthra",
  "Dr Jenny Mathew",
];

/**
 * How many doctors use Pink Intimate, for "and [X]+ more". While it is
 * null that tile is left out rather than printing an unconfirmed number.
 */
const DOCTOR_COUNT: number | null = null;

/**
 * Underarm only on the public page — intimate-area results stay in the
 * protocol sheet. `after` is the treatment count; null hides the tag until
 * the count for that patient is confirmed.
 */
const RESULTS = [
  {
    src: "/images/pink-intimate/ba-underarm-1-crop.jpg",
    alt: "Underarm before and after Pink Intimate",
    width: 990,
    height: 884,
    after: 4,
  },
  {
    src: "/images/pink-intimate/ba-underarm-2-crop.jpg",
    alt: "Underarm before and after Pink Intimate",
    width: 1010,
    height: 718,
    after: null,
  },
  {
    src: "/images/pink-intimate/ba-underarm-3-crop.jpg",
    alt: "Underarm before and after Pink Intimate",
    width: 1012,
    height: 719,
    after: null,
  },
] satisfies {
  src: string;
  alt: string;
  width: number;
  height: number;
  after: number | null;
}[];

export default function PinkProof() {
  return (
    <Section id="proof" tone="alt" dense>
      <Reveal>
        {/* Capped near the two-line text width: a wrapped heading's box
            fills the column, and the swash spans the box, not the text. */}
        <Heading className="max-w-2xl">
          Already in the Hands of India&apos;s Leading Skin Doctors.
        </Heading>
      </Reveal>

      {/* ---------- face strip ---------- */}
      <Reveal delay={80}>
        <ul className="mt-5 flex flex-wrap gap-3 sm:mt-9">
          {DOCTORS.map((name) => (
            <li
              key={name}
              className="rounded-full border border-line bg-surface px-5 py-3 text-[15px] font-extrabold text-ink-strong"
            >
              {name}
            </li>
          ))}
          {DOCTOR_COUNT !== null && (
            <li className="rounded-full bg-accent px-5 py-3 text-[15px] font-extrabold text-white">
              and {DOCTOR_COUNT}+ more
            </li>
          )}
        </ul>
      </Reveal>

      {/* ---------- before / after ----------
          One result per swipe on phones; from `sm` all three fit in a row,
          so the carousel hides its arrows and dots and stops auto-playing. */}
      <Reveal delay={90} className="mt-6">
        <Carousel
          label="Pink Intimate results"
          slideClassName="w-full sm:w-[calc((100%-2rem)/3)]"
        >
          {RESULTS.map((r) => (
            <figure
              key={r.src}
              className="lp-card flex h-full items-center overflow-hidden rounded-2xl border border-line bg-white"
            >
              {/* Cropped collages differ in height; `h-full` + centring keeps
                  every card the same size with the photo in the middle. */}
              <div className="relative w-full">
                <Image
                  src={r.src}
                  alt={r.alt}
                  width={r.width}
                  height={r.height}
                  sizes="(min-width: 640px) 360px, 92vw"
                  className="h-auto w-full"
                />
                {r.after !== null && (
                  <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1.5 text-[12px] font-extrabold tracking-[0.08em] text-white uppercase">
                    After {r.after} treatments
                  </span>
                )}
              </div>
            </figure>
          ))}
        </Carousel>
      </Reveal>
    </Section>
  );
}
