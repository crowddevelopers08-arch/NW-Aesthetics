import Section, { Eyebrow, Heading, Lede } from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import Figure from "@/components/ui/Figure";
import ImageTile from "@/components/ui/ImageTile";
import Reveal from "@/components/ui/Reveal";

const TECHNOLOGIES = ["EBE", "SME", "PDE", "MENS"];

/** The three muscle actions, as shot by MShape. */
const MUSCLE_ACTIONS = [
  {
    src: "/images/brand/muscle-cross.jpg",
    alt: "MShape cross muscle action",
  },
  {
    src: "/images/brand/muscle-one-to-three.jpg",
    alt: "MShape one-to-three muscle action",
  },
  {
    src: "/images/brand/muscle-parallel.jpg",
    alt: "MShape parallel muscle action",
  },
];

const FEATURES = [
  { title: "30-minute sessions", icon: "clock" },
  { title: "Face and body", icon: "face" },
  { title: "Non-invasive", icon: "shield" },
  { title: "Up to 12 to 16 patients a day", icon: "users" },
] as const;

export default function WhatItIs() {
  return (
    <Section id="what-it-is" tone="alt">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
        <Reveal className="min-w-0">
          <Eyebrow>What it is</Eyebrow>
          <Heading className="max-w-md">One machine. Muscle, fat and skin. One session.</Heading>
          <Lede>
            Most machines work the muscle one way. MShape works it three ways,
            using four technologies.
          </Lede>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {TECHNOLOGIES.map((tech) => (
              <span
                key={tech}
                className="rounded-full border-2 border-brand-blue/35 bg-brand-blue-tint px-4 py-2 text-[12px] font-extrabold tracking-[0.1em] text-brand-blue-deep sm:text-[13px]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-2.5 sm:mt-7 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <GlassCard
                key={feature.title}
                className="flex items-center gap-3.5 p-4 sm:p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-tint text-accent-deep">
                  <Icon name={feature.icon} />
                </span>
                <span className="min-w-0 text-[14px] leading-snug font-bold text-ink-strong sm:text-[15px]">
                  {feature.title}
                </span>
              </GlassCard>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <ImageTile
            src="/images/brand/mshape-training.jpg"
            alt="The MShape console beside a treated body"
            width={1000}
            height={1000}
            sizes="(min-width: 1024px) 560px, 100vw"
            title="How MShape works"
          />
        </Reveal>
      </div>

      {/* the three muscle actions */}
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {MUSCLE_ACTIONS.map((action, i) => (
          <Reveal key={action.src} delay={i * 90} className="min-w-0">
            <Figure
              src={action.src}
              alt={action.alt}
              width={1000}
              height={1000}
              sizes="(min-width: 640px) 33vw, 100vw"
              ratio="aspect-square"
              tone="surface"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Icon({ name }: { name: (typeof FEATURES)[number]["icon"] }) {
  const s = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      {name === "clock" && (
        <>
          <circle cx="12" cy="12" r="8.5" {...s} />
          <path d="M12 7.5V12l3 2" {...s} />
        </>
      )}
      {name === "face" && (
        <>
          <circle cx="12" cy="12" r="8.5" {...s} />
          <path
            d="M9 10h.01M15 10h.01M9 14.5c.9.9 1.9 1.3 3 1.3s2.1-.4 3-1.3"
            {...s}
          />
        </>
      )}
      {name === "shield" && (
        <path
          d="M12 3.5l6.5 2.6v5c0 4.1-2.7 7.5-6.5 8.9-3.8-1.4-6.5-4.8-6.5-8.9v-5L12 3.5Z"
          {...s}
        />
      )}
      {name === "users" && (
        <>
          <circle cx="9" cy="9" r="3.2" {...s} />
          <path d="M3.5 19c0-3 2.5-4.8 5.5-4.8s5.5 1.8 5.5 4.8" {...s} />
          <path d="M16.5 7.2a3 3 0 0 1 0 5.6M17.5 14.6c1.9.5 3 1.9 3 4.4" {...s} />
        </>
      )}
    </svg>
  );
}
