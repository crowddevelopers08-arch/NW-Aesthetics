"use client";

import { useState } from "react";
import LogoMark from "./LogoMark";

/**
 * Renders the official logo from `public/images/logo.png`.
 * If that file is not present yet, it silently falls back to <LogoMark />.
 */
export default function Logo({
  className = "h-10 w-auto sm:h-11",
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <span className="flex items-center gap-2.5">
      {useFallback ? (
        <LogoMark className={`${className} shrink-0`} />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src="/images/logo.png"
          alt="NW Aesthetics"
          className={`${className} shrink-0 object-contain`}
          onError={() => setUseFallback(true)}
        />
      )}

      {withWordmark && (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="truncate text-[13px] font-extrabold tracking-[0.1em] text-ink-strong uppercase sm:text-[15px]">
            NW Aesthetics
          </span>
          <span className="mt-1 truncate text-[8px] font-bold tracking-[0.2em] text-ink-faint uppercase sm:text-[9px]">
            Aesthetic Technology
          </span>
        </span>
      )}
    </span>
  );
}
