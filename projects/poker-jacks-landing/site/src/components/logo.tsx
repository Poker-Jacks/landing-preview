import { SUIT_PATHS, type Suit } from "@/components/suit-icon";

const FAN: Array<{ suit: Suit; red: boolean; rotate: string; delay: string }> = [
  // Orden DOM = z-order: la más abierta (club) queda al fondo, la más
  // cercana (heart) encima, así el índice de esquina de cada carta asoma
  // como en una mano real.
  { suit: "club", red: false, rotate: "group-hover:-rotate-[39deg] group-hover:-translate-y-[6px]", delay: "delay-100" },
  { suit: "diamond", red: true, rotate: "group-hover:-rotate-[26deg] group-hover:-translate-y-[4px]", delay: "delay-75" },
  { suit: "heart", red: true, rotate: "group-hover:-rotate-[13deg] group-hover:-translate-y-[2px]", delay: "delay-0" },
];

function FanCard({ suit, red }: { suit: Suit; red: boolean }) {
  const fill = red ? "fill-[#C43C35]" : "fill-foreground";
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" aria-hidden="true">
      <rect
        x="1"
        y="1"
        width="22"
        height="30"
        rx="3.5"
        className="fill-background stroke-foreground"
        strokeWidth="1.4"
      />
      {/* Índice de esquina, como naipe real: J arriba, palo debajo (path, no glyph) */}
      <text x="6.5" y="11" textAnchor="middle" fontSize="8" fontWeight="700" className={fill}>
        J
      </text>
      <path
        d={SUIT_PATHS[suit]}
        transform="translate(3.1 12.3) scale(0.29)"
        className={fill}
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}>
      {/* Mano de cartas: J al frente; al hover salen heart/diamond/club en abanico (four of a kind) */}
      <span className="relative inline-block h-8 w-6 shrink-0">
        {FAN.map((card) => (
          <span
            key={card.suit}
            className={`absolute inset-0 origin-bottom-right opacity-0 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out ${card.delay} group-hover:opacity-100 ${card.rotate}`}
          >
            <FanCard suit={card.suit} red={card.red} />
          </span>
        ))}

        {/* Carta principal: J de picas */}
        <svg
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="none"
          aria-hidden="true"
          className="relative z-10 origin-bottom-right motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:rotate-[7deg]"
        >
          <rect
            x="1"
            y="1"
            width="22"
            height="30"
            rx="3.5"
            className="fill-background stroke-foreground"
            strokeWidth="1.6"
          />
          <path
            d="M15.4 8v11.2c0 2.5-1.7 4.2-4.2 4.2-2.1 0-3.7-1.2-4.2-3.1l2.3-.9c.3 1 .9 1.6 1.9 1.6 1.1 0 1.7-.7 1.7-1.9V8h2.5z"
            className="fill-foreground"
          />
        </svg>
      </span>
      <span className="font-heading text-lg font-bold tracking-tight">
        Poker Jacks
      </span>
    </span>
  );
}
