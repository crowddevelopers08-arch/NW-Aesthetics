import type { ReactNode } from "react";

/**
 * The single call-to-action style used site-wide.
 * Solid olive fill — no gradients anywhere, per brand direction.
 * Wraps its label on narrow screens rather than overflowing.
 */
export default function CTAButton({
  children,
  href = "/#book-demo",
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "group inline-flex max-w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-[14px] font-bold tracking-[0.01em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent sm:px-8 sm:py-4 sm:text-[15px]";

  if (variant === "ghost") {
    return (
      <a
        href={href}
        className={`${base} border-2 border-line-strong text-ink-strong hover:border-accent hover:text-accent ${className}`}
      >
        <span className="min-w-0">{children}</span>
        <Arrow />
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`${base} bg-accent text-white hover:bg-accent-deep ${className}`}
    >
      <span className="min-w-0">{children}</span>
      <Arrow />
    </a>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
    >
      <path
        d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
