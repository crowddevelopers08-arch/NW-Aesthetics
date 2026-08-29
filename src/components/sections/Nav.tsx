"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/brand/Logo";
import CTAButton from "@/components/ui/CTAButton";

const LINKS = [
  { label: "Real results", href: "/#real-results" },
  { label: "What it is", href: "/#what-it-is" },
  { label: "Clinics", href: "/#case-studies" },
  { label: "Support", href: "/#we-help" },
  { label: "FAQ", href: "/#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-surface-alt transition-colors duration-300 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="min-w-0 shrink">
          <Logo />
        </a>

        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-bold whitespace-nowrap text-ink-soft transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden shrink-0 lg:block">
          <CTAButton className="px-5 py-3 text-[13px] sm:px-6 sm:py-3 sm:text-[13px]">
            Book a Demo
          </CTAButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-line text-ink-strong lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 8h16M4 16h16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-line bg-surface-alt px-4 pt-2 pb-5 sm:px-6 lg:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 text-[15px] font-bold text-ink"
            >
              {link.label}
            </a>
          ))}
          <CTAButton className="mt-5 w-full">Book a Demo</CTAButton>
        </div>
      )}
    </header>
  );
}
