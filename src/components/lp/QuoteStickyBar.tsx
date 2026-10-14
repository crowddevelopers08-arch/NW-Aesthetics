"use client";

import { useEffect, useState } from "react";

/**
 * Mobile-only bottom bar: a short reassurance on the left, the CTA on the
 * right. Appears past the hero, hides once the quote form is on screen.
 */
export default function QuoteStickyBar({
  note,
  ctaLabel,
  targetId = "quote",
}: {
  note: string;
  ctaLabel: string;
  targetId?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const form = document.getElementById(targetId);

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const atForm = form
        ? form.getBoundingClientRect().top < window.innerHeight * 0.85
        : false;
      setShow(pastHero && !atForm);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [targetId]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-line bg-surface px-4 py-3 transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <span className="flex min-w-0 shrink items-center gap-1.5 text-[12px] leading-tight font-bold text-ink-soft max-[359px]:hidden">
        <CheckIcon />
        {note}
      </span>
      <a
        href={`#${targetId}`}
        className="ml-auto flex min-h-12 shrink-0 max-[359px]:ml-0 max-[359px]:w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-[14px] font-bold whitespace-nowrap text-white"
      >
        {ctaLabel}
      </a>
    </div>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`${className} shrink-0 text-accent`}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.14" />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
