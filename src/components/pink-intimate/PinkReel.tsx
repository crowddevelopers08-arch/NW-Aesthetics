"use client";

import { useEffect, useRef, useState } from "react";

const CLOUD = "https://res.cloudinary.com/f21kgzno/video/upload";
const ASSET = "v1791979473/Pink_Intimate_Promotion_Reel";
/** q_auto lets Cloudinary pick the lightest encode the browser can play. */
const VIDEO_SRC = `${CLOUD}/q_auto/${ASSET}.mp4`;
/** Frame at 1s (model holding the box), served as a compressed still. */
const POSTER_SRC = `${CLOUD}/so_1,w_720,q_auto/${ASSET}.jpg`;

/**
 * The vertical Pink Intimate brand reel in a phone-shaped frame.
 *
 * Muted autoplay is the only autoplay browsers allow, so it starts muted and
 * offers a sound toggle. It loads nothing until it nears the screen
 * (preload="none"), plays only while at least 40% visible, and pauses when
 * scrolled away. Anyone who asks for reduced motion gets a still poster and
 * plays it themselves. Tapping the video toggles play/pause.
 */
export default function PinkReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() rejects if the browser blocks it — the poster stays up
          // and the play button still works, so there is nothing to handle.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    // Unmuting is a deliberate tap, so start it if it was paused.
    if (!video.muted && video.paused) video.play().catch(() => {});
  };

  return (
    <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem]">
      {/* offset magenta block behind the frame, as in the hero */}
      <div
        aria-hidden="true"
        className="absolute -right-3 -bottom-3 left-6 top-6 rounded-[2rem] bg-brand-blue sm:-right-4 sm:-bottom-4"
      />

      <div className="relative aspect-9/16 overflow-hidden rounded-[2rem] border-4 border-ink-strong bg-ink-strong shadow-[0_30px_60px_-30px_rgba(125,0,67,0.55)]">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          muted
          loop
          playsInline
          preload="none"
          aria-label="Pink Intimate System promotional video"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onClick={togglePlay}
          className="h-full w-full cursor-pointer object-cover"
        />

        {/* big play button while paused (before autoplay, or after a tap) */}
        {!playing && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center bg-black/10"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-accent shadow-lg">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 h-7 w-7">
                <path d="M7 4.5v15l13-7.5-13-7.5Z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}

        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "Turn sound on" : "Turn sound off"}
          aria-pressed={!muted}
          className="absolute right-3 bottom-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition-colors hover:bg-black/70"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-5 w-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4v-5Z" fill="currentColor" />
            {muted ? (
              <path d="m16 9.5 5 5m0-5-5 5" />
            ) : (
              <path d="M16 9a4.5 4.5 0 0 1 0 6m2.5-8.5a8 8 0 0 1 0 11" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
