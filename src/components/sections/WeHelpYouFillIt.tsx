import Section, { Eyebrow, Heading } from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import CTAButton from "@/components/ui/CTAButton";
import Carousel from "@/components/ui/Carousel";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";

/** The campaign creatives we run for a clinic. */
const CREATIVES = [
  { src: "/images/brand/slide-upgrade.png", alt: "MShape upgrade campaign creative" },
  { src: "/images/brand/slide-face.png", alt: "MShape face treatment campaign creative" },
  {
    src: "/images/brand/slide-small-areas.png",
    alt: "MShape small areas campaign creative",
  },
  { src: "/images/brand/slide-body.png", alt: "MShape body treatment campaign creative" },
];

const SUPPORT = [
  { body: "Launch event with influencers and your patients", icon: "spark" },
  {
    body: "We run ads and send you leads (Face Glow got 64 leads, 11 bookings in 6 weeks)",
    icon: "target",
  },
  { body: "Full training for your team", icon: "book" },
  { body: "Support direct from Italy", icon: "globe" },
] as const;

export default function WeHelpYouFillIt() {
  return (
    <Section id="we-help" tone="alt">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 xl:gap-16">
        <Reveal className="min-w-0">
          <Eyebrow>We help you fill it</Eyebrow>
          <Heading>
            We don&apos;t just sell the machine. We help you get patients.
          </Heading>

          <div className="mt-6 border-l-4 border-accent bg-surface py-4 pr-5 pl-5 sm:mt-7 sm:py-5 sm:pl-6">
            <p className="text-[16px] leading-relaxed font-semibold text-balance text-ink sm:text-[17px]">
              Other suppliers drop the machine and leave.{" "}
              <span className="font-extrabold text-ink-strong">
                We stay until it pays for itself.
              </span>
            </p>
          </div>

          <div className="mt-6 sm:mt-7">
            <CTAButton>Book a Product Demo for Your Clinic</CTAButton>
          </div>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <div className="grid gap-2.5 sm:grid-cols-2">
            {SUPPORT.map((item) => (
              <GlassCard key={item.body} className="p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-tint text-accent-deep">
                  <Icon name={item.icon} />
                </span>
                <p className="mt-4 text-[15px] leading-relaxed font-semibold text-pretty text-ink-strong sm:text-[16px]">
                  {item.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </Reveal>
      </div>

      {/* campaign creatives */}
      <Reveal className="mt-4">
        <Carousel
          label="Campaign creatives"
          autoPlayMs={5000}
          edgeToEdge
          slideClassName="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
        >
          {CREATIVES.map((creative) => (
            <Figure
              key={creative.src}
              src={creative.src}
              alt={creative.alt}
              width={1080}
              height={1080}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 92vw"
              ratio="aspect-square"
              tone="surface"
            />
          ))}
        </Carousel>
      </Reveal>
    </Section>
  );
}

function Icon({ name }: { name: (typeof SUPPORT)[number]["icon"] }) {
  const s = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      {name === "spark" && (
        <path
          d="M12 3.5l2.1 5.4 5.4 2.1-5.4 2.1L12 18.5l-2.1-5.4L4.5 11l5.4-2.1L12 3.5Z"
          {...s}
        />
      )}
      {name === "target" && (
        <>
          <circle cx="12" cy="12" r="8.3" {...s} />
          <circle cx="12" cy="12" r="3.6" {...s} />
        </>
      )}
      {name === "book" && (
        <path
          d="M4.5 5.2A2 2 0 0 1 6.5 4H12v15H6.5a2 2 0 0 0-2 1.3V5.2ZM19.5 5.2A2 2 0 0 0 17.5 4H12v15h5.5a2 2 0 0 1 2 1.3V5.2Z"
          {...s}
        />
      )}
      {name === "globe" && (
        <>
          <circle cx="12" cy="12" r="8.3" {...s} />
          <path
            d="M3.7 12h16.6M12 3.7c2.1 2.3 3.2 5.2 3.2 8.3S14.1 18 12 20.3C9.9 18 8.8 15.1 8.8 12S9.9 6 12 3.7Z"
            {...s}
          />
        </>
      )}
    </svg>
  );
}
