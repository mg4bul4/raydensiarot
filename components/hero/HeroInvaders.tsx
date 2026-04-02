import type { CSSProperties } from "react";

/** Classic-style 11×8 invader bitmap — renders as one lightweight SVG. */
const ROWS = [
  "00000100000",
  "00001110000",
  "00011111000",
  "00111111100",
  "01101110110",
  "01111111110",
  "00111001110",
  "00100000100",
];

function PixelInvader({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const w = ROWS[0].length;
  const h = ROWS.length;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      style={style}
      aria-hidden
    >
      {ROWS.flatMap((row, y) =>
        [...row].map((c, x) =>
          c === "1" ? (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={0.92}
              height={0.92}
              className="fill-current"
            />
          ) : null,
        ),
      )}
    </svg>
  );
}

type FleetItem = {
  id: string;
  animClass: string;
  top: string;
  widthClass: string;
  colorClass: string;
};

const FLEET: FleetItem[] = [
  {
    id: "a",
    animClass: "hero-invader-march-a",
    top: "26%",
    widthClass: "w-12 sm:w-14",
    colorClass: "text-neon-green/20",
  },
  {
    id: "b",
    animClass: "hero-invader-march-b",
    top: "44%",
    widthClass: "w-[3.25rem] sm:w-16",
    colorClass: "text-neon-magenta/18",
  },
  {
    id: "c",
    animClass: "hero-invader-march-c",
    top: "58%",
    widthClass: "w-11 sm:w-[3.25rem]",
    colorClass: "text-neon-yellow/16",
  },
];

/**
 * CSS-only “fleet” behind hero copy. Three small SVGs, no Framer / no canvas.
 */
export function HeroInvaders() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden select-none"
      aria-hidden
    >
      {FLEET.map((ship) => (
        <div
          key={ship.id}
          className={`absolute left-0 ${ship.animClass} ${ship.widthClass} ${ship.colorClass}`}
          style={{ top: ship.top }}
        >
          <PixelInvader className="h-auto w-full" />
        </div>
      ))}
    </div>
  );
}
