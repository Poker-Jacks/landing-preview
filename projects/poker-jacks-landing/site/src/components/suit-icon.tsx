import * as React from "react";

/*
 * Palos de naipe como paths SVG (viewBox 24×24, fill currentColor).
 * Reemplaza los caracteres Unicode de palos en la UI: mismo dibujo en
 * todos los OS, color controlado por CSS y cero hits en detectores que
 * barren el rango emoji/símbolos (U+2600–27BF).
 */

export type Suit = "spade" | "heart" | "diamond" | "club";

export const SUIT_PATHS: Record<Suit, string> = {
  spade:
    "M12 2C9.1 6.8 4 9.4 4 13.4 4 15.9 6 17.9 8.4 17.9c1.1 0 2.1-.4 2.9-1.1-.3 1.8-1.1 3.5-2.3 4.7v.5h6v-.5c-1.2-1.2-2-2.9-2.3-4.7.8.7 1.8 1.1 2.9 1.1 2.4 0 4.4-2 4.4-4.5C20 9.4 14.9 6.8 12 2Z",
  heart:
    "M12 21 4.9 13.9C3.1 12.1 3.1 9.1 4.9 7.3c1.8-1.8 4.7-1.8 6.5 0l.6.6.6-.6c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.8 0 6.6L12 21Z",
  diamond: "M12 2 19 12 12 22 5 12 12 2Z",
  club:
    "M12 2C9.8 2 8 3.8 8 6c0 .8.2 1.5.6 2.1-.2 0-.4-.1-.6-.1-2.2 0-4 1.8-4 4s1.8 4 4 4c1.1 0 2.1-.4 2.8-1.1-.2 2.1-1.1 5-2.3 6.3v.8h7v-.8c-1.2-1.3-2.1-4.2-2.3-6.3.7.7 1.7 1.1 2.8 1.1 2.2 0 4-1.8 4-4s-1.8-4-4-4c-.2 0-.4.1-.6.1.4-.6.6-1.3.6-2.1 0-2.2-1.8-4-4-4Z",
};

export function SuitIcon({
  suit,
  size = 13,
  className,
}: {
  suit: Suit;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d={SUIT_PATHS[suit]} />
    </svg>
  );
}
