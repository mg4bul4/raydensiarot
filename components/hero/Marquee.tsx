const DEFAULT_ITEMS = [
  "VIEWPORT · 1440PX",
  "RENDER · NEXT.JS",
  "COLOR_SPACE · SRGB",
  "TYPE · ANTON / JETBRAINS_MONO",
  "GRID · MODULAR_SCALE",
];

type MarqueeProps = {
  items?: string[];
  className?: string;
};

export function Marquee({ items = DEFAULT_ITEMS, className = "" }: MarqueeProps) {
  const line = items.join("    ") + "    ";
  const doubled = line + line;

  return (
    <div
      className={`relative z-20 overflow-hidden border-y border-fg-stark/25 bg-[#0d0d0d] ${className}`}
      aria-hidden
    >
      <div className="flex w-max font-mono text-[10px] uppercase tracking-[0.2em] text-fg-stark/70 sm:text-xs">
        <span className="marquee-track flex shrink-0 whitespace-nowrap py-2 sm:py-2.5">
          {doubled}
        </span>
        <span className="marquee-track flex shrink-0 whitespace-nowrap py-2 sm:py-2.5">
          {doubled}
        </span>
      </div>
    </div>
  );
}
