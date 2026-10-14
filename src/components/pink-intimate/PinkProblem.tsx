import { Swash } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * Dark, quiet band — the concern patients keep to themselves. The last line
 * of the copy is lifted out as the pull-quote, because it is the sting.
 */
export default function PinkProblem() {
  return (
    <section
      id="problem"
      className="relative scroll-mt-20 overflow-hidden bg-accent-deep px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="relative mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2 lg:gap-14">
        <Reveal className="min-w-0">
          <h2 className="relative w-fit pb-4 text-[clamp(1.75rem,5.2vw,3rem)] leading-[1.08] font-extrabold tracking-[-0.02em] text-balance sm:pb-6 [&>svg]:text-brand-blue">
            Almost Every Patient Has This Concern. Almost None Will Bring It Up.
            <Swash />
          </h2>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <p className="text-[clamp(1.02rem,2.3vw,1.2rem)] leading-relaxed font-medium text-pretty text-white/85">
            Darkening of the underarms, bikini line and inner thighs is one of
            the most common concerns in Indian skin. Patients are too
            embarrassed to ask. So they search for it privately and book the
            clinic that clearly offers it.
          </p>

          <blockquote className="mt-7 border-l-4 border-brand-blue pl-5 text-[clamp(1.2rem,3vw,1.6rem)] leading-snug font-extrabold text-balance">
            If yours doesn&apos;t, you never even hear about the patient you
            lost.
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
