"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * The one carousel used across the page.
 *
 * Built on native scroll-snap rather than a transformed track, so a swipe on
 * a phone is the browser's own scrolling — momentum, rubber-banding and all —
 * and the buttons simply scroll it. One slide per screen on mobile; the
 * `slideClassName` widens the slides from `sm` up.
 *
 * Auto-advance stops on hover, on keyboard focus, while a finger is down, and
 * for anyone who asks for reduced motion.
 */
export default function Carousel({
  children,
  label,
  slideClassName = "w-full",
  autoPlayMs = 5000,
  edgeToEdge = false,
}: {
  children: ReactNode[];
  /** Names the carousel for screen readers, e.g. "Clinic results". */
  label: string;
  /** Per-breakpoint slide width. Defaults to one slide per screen. */
  slideClassName?: string;
  autoPlayMs?: number;
  /** Let slides run to the screen edge on mobile. */
  edgeToEdge?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [scrollable, setScrollable] = useState(false);
  const count = children.length;

  const goTo = useCallback((next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = track.children[next] as HTMLElement | undefined;
    if (!target) return;
    indexRef.current = next;
    setIndex(next);
    track.scrollTo({
      left: target.offsetLeft - track.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, []);

  const step = useCallback(
    (delta: number) => goTo((indexRef.current + delta + count) % count),
    [count, goTo],
  );

  /* Follow manual scrolling, and hide the buttons when nothing overflows
     (at `lg` every slide is usually on screen already). */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timer = 0;
    const sync = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const slides = Array.from(track.children) as HTMLElement[];
        const left = track.scrollLeft + track.offsetLeft;
        let best = 0;
        let closest = Infinity;
        slides.forEach((slide, i) => {
          const distance = Math.abs(slide.offsetLeft - left);
          if (distance < closest) {
            closest = distance;
            best = i;
          }
        });
        indexRef.current = best;
        setIndex(best);
      }, 120);
    };

    const measure = () =>
      setScrollable(track.scrollWidth > track.clientWidth + 4);

    measure();
    track.addEventListener("scroll", sync, { passive: true });
    const observer = new ResizeObserver(measure);
    observer.observe(track);

    return () => {
      window.clearTimeout(timer);
      track.removeEventListener("scroll", sync);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (paused || !scrollable || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(
      () => step(1),
      Math.max(2000, autoPlayMs),
    );
    return () => window.clearInterval(id);
  }, [paused, scrollable, count, autoPlayMs, step]);

  const hold = () => setPaused(true);
  const release = () => setPaused(false);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={hold}
      onMouseLeave={release}
      onFocusCapture={hold}
      onBlurCapture={release}
      onTouchStart={hold}
      onTouchEnd={release}
    >
      <div
        ref={trackRef}
        className={`flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          edgeToEdge ? "-mx-4 px-4 sm:mx-0 sm:px-0" : ""
        }`}
      >
        {children.map((slide, i) => (
          <div key={i} className={`shrink-0 snap-start ${slideClassName}`}>
            {slide}
          </div>
        ))}
      </div>

      {scrollable && (
        <div className="mt-5 flex items-center justify-center gap-3">
          <Arrow direction="prev" onClick={() => step(-1)} label={label} />

          <div className="flex items-center gap-1.5">
            {children.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1} of ${count}`}
                aria-current={i === index || undefined}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  i === index ? "w-6 bg-accent" : "w-2 bg-line-strong"
                }`}
              />
            ))}
          </div>

          <Arrow direction="next" onClick={() => step(1)} label={label} />
        </div>
      )}
    </section>
  );
}

function Arrow({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  const isNext = direction === "next";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${isNext ? "Next" : "Previous"} — ${label}`}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-line bg-surface text-ink-strong transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d={isNext ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"}
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
