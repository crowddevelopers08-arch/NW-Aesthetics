"use client";

import { useState } from "react";
import Section, { Heading } from "@/components/ui/Section";
import Figure from "@/components/ui/Figure";
import Reveal from "@/components/ui/Reveal";

const FAQS = [
  {
    q: "What is MShape?",
    a: "A face and body contouring machine, made in Italy. Works on muscle, fat and skin.",
  },
  {
    q: "How is it different from EMS machines?",
    a: "It works the muscle 3 ways, treats face and body, and we help you get patients.",
  },
  {
    q: "How much do clinics earn?",
    a: "From ₹50 lakh in 5 months to ₹86.97 lakh in 8 months. We work out your numbers at the demo.",
  },
  { q: "How fast is installation?", a: "About 15 days when in stock." },
  { q: "Do you help with marketing?", a: "Yes. Launch events, ads and leads." },
  { q: "Can I see it first?", a: "Yes. Book a demo." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" tone="alt">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 xl:gap-16">
        <Reveal className="min-w-0">
          <Heading>FAQ</Heading>
          <Figure
            src="/images/machine/mshape-console.png"
            alt="The MShape touchscreen console with its applicators docked alongside"
            width={3535}
            height={3744}
            sizes="(min-width: 1024px) 380px, 90vw"
            ratio="aspect-4/3"
            fit="contain"
            tone="surface"
            className="mt-8 hidden lg:block"
          />
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <div className="divide-y divide-line border-y border-line">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className={`flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200 ${
                        isOpen ? "text-accent" : "hover:text-accent"
                      }`}
                    >
                      <span className="min-w-0 text-[16px] font-bold text-balance sm:text-[18px]">
                        {faq.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-45 border-accent text-accent"
                            : "border-line-strong text-ink-soft"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-3.5 w-3.5"
                        >
                          <path
                            d="M12 5v14M5 12h14"
                            stroke="currentColor"
                            strokeWidth="2.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div id={`faq-panel-${i}`} hidden={!isOpen}>
                    <p className="pr-10 pb-5 text-[15px] leading-relaxed font-medium text-ink-soft sm:text-[16px]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
