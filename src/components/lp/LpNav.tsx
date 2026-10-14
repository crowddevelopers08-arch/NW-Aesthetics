"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/brand/Logo";
import CTAButton from "@/components/ui/CTAButton";

/**
 * Header for the single-product quote pages. No section links: these pages
 * run from ads, so the only way out of the header is the quote form.
 */
export default function LpNav({
  ctaLabel,
  ctaHref = "#quote",
}: {
  /** Omitted on the thank-you pages, which show the logo alone. */
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-surface/95 backdrop-blur transition-colors duration-300 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Logo className="h-9 w-auto sm:h-10" />

        {/* Phones get the sticky bottom bar instead, so the name has room. */}
        {ctaLabel && (
        <span className="hidden shrink-0 sm:block">
          <CTAButton
            href={ctaHref}
            className="px-5 py-3 text-[13px] sm:px-6 sm:py-3 sm:text-[13px]"
          >
            {ctaLabel}
          </CTAButton>
        </span>
        )}
      </nav>
    </header>
  );
}
