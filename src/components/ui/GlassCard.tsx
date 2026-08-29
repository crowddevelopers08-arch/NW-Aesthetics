import type { ReactNode } from "react";

/** Flat white panel with a hairline border. Used across the page. */
export default function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-line bg-surface ${
        hover ? "transition-colors duration-300 hover:border-accent" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
