import CTAButton from "@/components/ui/CTAButton";
import { Eyebrow, Swash } from "@/components/ui/Section";
import SubmitApplicationEvent from "@/components/ui/SubmitApplicationEvent";

type Step = { title: string; detail: string };

/**
 * Post-submission screen for the product quote pages. Same layout as the
 * main /thank-you page, themed by the product page's wrapper class.
 */
export default function QuoteThankYou({
  message,
  steps,
  backHref,
  backLabel,
}: {
  message: string;
  /** What happens next, in order. Three reads best. */
  steps: readonly Step[];
  backHref: string;
  backLabel: string;
}) {
  return (
    <section className="bg-surface px-4 pt-28 pb-12 sm:px-6 sm:pt-36 sm:pb-16 lg:flex lg:min-h-svh lg:items-center lg:px-8 lg:pb-20">
      <SubmitApplicationEvent />
      <div className="mx-auto w-full max-w-3xl text-center">
        <span className="lp-rise lp-d1 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent sm:h-20 sm:w-20">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-7 w-7 sm:h-9 sm:w-9"
          >
            <path
              d="M5 12.5l4.5 4.5L19 7.5"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <div className="lp-rise lp-d2 mt-7 flex justify-center">
          <Eyebrow>Request received</Eyebrow>
        </div>

        <h1 className="lp-rise lp-d2 relative mx-auto mt-3 w-fit max-w-lg pb-4 text-[clamp(2rem,6vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.02em] text-balance text-ink-strong sm:pb-6">
          Thank you.
          <Swash />
        </h1>

        <p className="lp-rise lp-d3 mx-auto mt-4 max-w-xl text-[clamp(1rem,2.2vw,1.175rem)] leading-relaxed font-medium text-pretty text-ink-soft">
          {message}
        </p>

        <ol className="lp-rise lp-d4 mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line text-left sm:mt-9 sm:grid-cols-3">
          {steps.map((item, i) => (
            <li key={item.title} className="h-full bg-surface p-5 sm:p-6">
              <span className="text-[22px] font-extrabold text-accent tabular-nums sm:text-[24px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-[16px] leading-snug font-extrabold text-balance text-ink-strong sm:text-[17px]">
                {item.title}
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed font-medium text-ink-faint">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>

        <div className="lp-rise lp-d5 mt-8 flex justify-center sm:mt-9">
          <CTAButton href={backHref} variant="ghost">
            {backLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
