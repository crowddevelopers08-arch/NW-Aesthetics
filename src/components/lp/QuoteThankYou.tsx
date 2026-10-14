/** Post-submission screen for the product quote pages. */
export default function QuoteThankYou({ message }: { message: string }) {
  return (
    <section className="bg-surface px-4 pt-32 pb-16 sm:px-6 sm:pt-36 lg:flex lg:min-h-[80svh] lg:items-center lg:px-8">
      <div className="mx-auto w-full max-w-2xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent sm:h-20 sm:w-20">
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

        <h1 className="mx-auto mt-7 max-w-xl text-[clamp(1.4rem,4vw,2rem)] leading-snug font-extrabold text-balance text-ink-strong">
          {message}
        </h1>
      </div>
    </section>
  );
}
