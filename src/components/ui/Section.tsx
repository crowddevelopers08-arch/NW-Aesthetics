import type { ReactNode } from "react";

/**
 * Consistent vertical rhythm + max width for every band on the page.
 * Horizontal padding steps up with the viewport; the inner wrapper is
 * width-capped so nothing can push the page sideways.
 */
export default function Section({
  id,
  children,
  className = "",
  tone = "plain",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  /** `plain` = white, `alt` = a warm off-white band. */
  tone?: "plain" | "alt";
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20 ${
        tone === "alt" ? "bg-surface-alt" : "bg-surface"
      } ${className}`}
    >
      <div className="relative mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/** Small all-caps label that sits above a section heading. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[11px] font-extrabold tracking-[0.24em] text-accent uppercase sm:text-[12px]">
      <span className="h-0.5 w-6 bg-accent" />
      {children}
    </span>
  );
}

/** The section headline. Fluid from 320px up to desktop. */
export function Heading({
  children,
  className = "",
  underline = true,
}: {
  children: ReactNode;
  className?: string;
  underline?: boolean;
}) {
  return (
    <h2
      /* `w-fit` shrinks the box to the headline, so the swash spans the text
         and not the whole column. `pb` reserves the room it sits in. */
      className={`relative mt-3 w-fit pb-4 text-[clamp(1.75rem,5.2vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.02em] text-balance text-ink-strong sm:mt-4 sm:pb-6 ${className}`}
    >
      {children}
      {underline && <Swash />}
    </h2>
  );
}

/**
 * The hand-drawn underline that sits under every heading. Drawn as a filled
 * lens rather than a stroke, so it tapers to a point at both ends, and
 * stretched (`preserveAspectRatio="none"`) to whatever width it is given.
 *
 * Positioned absolutely on purpose: an inline SVG carries a 300px default
 * intrinsic width, which would pad out the `w-fit` heading box and leave the
 * underline wider than the text it belongs to.
 */
export function Swash({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 10"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={`absolute inset-x-0 bottom-0 h-3.5 w-full text-swash sm:h-4 ${className}`}
    >
      <path
        d="M2 8.2C70 1 230 1 298 8.2C230 4.4 70 4.4 2 8.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Supporting copy under a heading. */
export function Lede({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mt-4 max-w-2xl sm:mt-5 text-[clamp(1rem,2.2vw,1.175rem)] leading-relaxed font-medium text-pretty text-ink-soft ${className}`}
    >
      {children}
    </p>
  );
}
