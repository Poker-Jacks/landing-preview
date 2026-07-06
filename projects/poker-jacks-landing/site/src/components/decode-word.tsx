"use client";

import * as React from "react";

/*
 * <DecodeWord> — terminal-style decode/scramble for a single keyword.
 *
 * - SSR/static/no-JS render the real word (SEO, no flash).
 * - Animates once, when ≥50% visible (IntersectionObserver, disconnects
 *   after the first hit).
 * - Respects prefers-reduced-motion: never animates.
 * - 600ms total, rAF loop throttled to ~35ms ticks, characters settle
 *   left → right. Unsettled characters are painted with the section's
 *   accent color (accentClass) and inherit the title color on settle.
 * - Layout is fixed via an invisible copy of the real word; the animated
 *   layer is absolutely positioned, so nothing ever shifts.
 */

const CHARSET = "abcdefghjkmnpqrstuvwxyz#$%&<>/01";
const DURATION = 600;
const TICK = 35;

type Frame = { settled: string; scrambled: string };

export function DecodeWord({
  children: word,
  className,
  accentClass = "text-indigo",
}: {
  children: string;
  className?: string;
  accentClass?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [frame, setFrame] = React.useState<Frame | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        const start = performance.now();
        let lastTick = Number.NEGATIVE_INFINITY;

        const step = (now: number) => {
          const t = now - start;
          if (t >= DURATION) {
            setFrame(null);
            return;
          }
          if (now - lastTick >= TICK) {
            lastTick = now;
            const settledCount = Math.floor((t / DURATION) * word.length);
            let scrambled = "";
            for (let i = settledCount; i < word.length; i++) {
              scrambled += CHARSET[Math.floor(Math.random() * CHARSET.length)];
            }
            setFrame({ settled: word.slice(0, settledCount), scrambled });
          }
          raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      setFrame(null);
    };
  }, [word]);

  if (frame === null) {
    // Idle (pre-trigger, post-animation, reduced motion, SSR): real text.
    return (
      <span ref={ref} className={className}>
        {word}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={`relative inline-block whitespace-nowrap ${className ?? ""}`}
    >
      {/* Invisible real word reserves the exact layout width. */}
      <span className="invisible" aria-hidden="true">
        {word}
      </span>
      <span className="absolute inset-0" aria-hidden="true">
        {frame.settled}
        <span className={accentClass}>{frame.scrambled}</span>
      </span>
      <span className="sr-only">{word}</span>
    </span>
  );
}

/*
 * Splits a resolved (already-localized) title around the keyword and wraps
 * that keyword in <DecodeWord>. If the word isn't found, renders the title
 * as-is.
 */
export function renderTitleWithDecode(
  title: string,
  word: string | undefined,
  accentClass?: string
): React.ReactNode {
  if (!word) return title;
  const index = title.indexOf(word);
  if (index === -1) return title;
  return (
    <>
      {title.slice(0, index)}
      <DecodeWord accentClass={accentClass}>{word}</DecodeWord>
      {title.slice(index + word.length)}
    </>
  );
}
