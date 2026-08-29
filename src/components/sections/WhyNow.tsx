import Section, { Eyebrow, Heading, Lede } from "@/components/ui/Section";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";

export default function WhyNow() {
  return (
    <Section id="why-now" tone="alt">
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="min-w-0">
          <Eyebrow>Why now</Eyebrow>
          <Heading className="max-w-md">Body contouring is booming in India.</Heading>
          <Lede>
            Market growing from{" "}
            <span className="font-extrabold text-ink-strong">₹620 Cr</span> to{" "}
            <span className="font-extrabold text-ink-strong">₹2,100 Cr</span> by
            2030.
          </Lede>
          <Lede className="mt-4">
            Very few clinics offer it. Demand is high. Patients want it. The
            clinics adding it now will own this space in their city.
          </Lede>
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <div className="mx-auto w-full max-w-96 lg:max-w-none">
            <Figure
              src="/images/machine/mshape-front.png"
              alt="The MShape machine seen from the front"
              width={3130}
              height={5616}
              sizes="(min-width: 1024px) 520px, 90vw"
              ratio="aspect-square lg:aspect-4/3"
              fit="contain"
              tone="surface"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
