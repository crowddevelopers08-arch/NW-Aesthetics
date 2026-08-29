import Section, { Heading } from "@/components/ui/Section";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";

const STEPS = [
  { step: "01", title: "Installed in about 15 days", detail: "When in stock." },
  { step: "02", title: "Demo and training", detail: "" },
  { step: "03", title: "Support from the Italy team", detail: "" },
  { step: "04", title: "Consumables direct from Italy", detail: "" },
];

export default function SetupSupport() {
  return (
    <Section id="setup">
      <Reveal>
        <Heading className="max-w-2xl">Setup &amp; support</Heading>
      </Reveal>

      <div className="mt-7 grid gap-4 sm:mt-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-8">
        <Reveal className="min-w-0">
          <div className="mx-auto w-full max-w-80 lg:max-w-none">
            <Figure
              src="/images/machine/mshape-full.png"
              alt="The MShape machine on its castors, ready to roll between treatment rooms"
              width={3961}
              height={6510}
              sizes="(min-width: 1024px) 420px, 80vw"
              ratio="aspect-3/4 lg:aspect-4/5"
              fit="contain"
              tone="alt"
            />
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {STEPS.map((item, i) => (
            <Reveal key={item.step} delay={i * 80} className="bg-surface">
              <div className="h-full bg-surface p-5 transition-colors duration-300 hover:bg-surface-alt sm:p-6">
                <span className="text-[26px] font-extrabold text-accent tabular-nums sm:text-[28px]">
                  {item.step}
                </span>
                <h3 className="mt-4 text-[16px] leading-snug font-extrabold text-balance text-ink-strong sm:text-[17px]">
                  {item.title}
                </h3>
                {item.detail && (
                  <p className="mt-2 text-[14px] leading-relaxed font-medium text-ink-faint">
                    {item.detail}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
