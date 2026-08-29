import Section, { Heading } from "@/components/ui/Section";
import CTAButton from "@/components/ui/CTAButton";
import Carousel from "@/components/ui/Carousel";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";

const CLINICS = [
  {
    src: "/images/clinics/hydrabad.png",
    alt: "Zennara, Hyderabad — Dr Rickson Pereira. Installed July 2025. ₹86.97 lakh in 8 months, over ₹10 lakh a month.",
  },
  {
    src: "/images/clinics/mumbai.png",
    alt: "Ekisa, Mumbai — Dr Kapisha Shah & Dr Sunny Shah. Installed November 2025. They switched to MShape from another contouring machine. ₹50.4 lakh in 5 months, 63+ patients, already reordered.",
  },
  {
    src: "/images/clinics/kochi.png",
    alt: "Face Glow, Kochi — Dr Husana Gafoor. Installed May 2026. We ran her launch and sent leads: 64 leads and 11 bookings in 6 weeks.",
  },
];

export default function CaseStudies() {
  return (
    <Section id="case-studies" tone="alt">
      <Reveal className="text-center">
        <Heading className="mx-auto max-w-2xl">3 clinics. Real numbers.</Heading>
      </Reveal>

      <Reveal delay={100} className="mt-7 sm:mt-10">
        <Carousel
          label="Clinic results"
          autoPlayMs={6000}
          edgeToEdge
          slideClassName="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
        >
          {CLINICS.map((clinic) => (
            <Figure
              key={clinic.src}
              src={clinic.src}
              alt={clinic.alt}
              width={1254}
              height={1254}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
              ratio="aspect-square"
              tone="surface"
            />
          ))}
        </Carousel>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-7 flex flex-col items-center gap-6 sm:mt-10 text-center">
          <p className="max-w-2xl text-[14px] leading-relaxed font-medium text-ink-faint sm:text-[15px]">
            Real figures from these clinics. Your results depend on your clinic.
          </p>
          <CTAButton>Book a Product Demo for Your Clinic</CTAButton>
        </div>
      </Reveal>
    </Section>
  );
}
