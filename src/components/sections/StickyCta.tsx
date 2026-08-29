"use client";

import { useEffect, useState } from "react";

/** Mobile-only bottom bar. Appears past the hero, hides over the demo form. */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const form = document.getElementById("book-demo");

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
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface px-4 py-3 transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="/#book-demo"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[15px] font-bold text-white"
      >
        Book a Product Demo
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
          <path
            d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
