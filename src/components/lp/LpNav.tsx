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
  mobileCtaLabel = "Get Quote",
}: {
  /** Omitted on the thank-you pages, which show the logo alone. */
  ctaLabel?: string;
  ctaHref?: string;
  /** Shorter label for phones, so the button fits beside the logo. */
  mobileCtaLabel?: string;
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

        {ctaLabel && (
        <span className="shrink-0">
          <CTAButton
            href={ctaHref}
            className="px-4 py-2.5 text-[13px] whitespace-nowrap sm:px-6 sm:py-3 sm:text-[13px]"
          >
            <span className="sm:hidden">{mobileCtaLabel}</span>
            <span className="hidden sm:inline">{ctaLabel}</span>
          </CTAButton>
        </span>
        )}
      </nav>
    </header>
  );
}
