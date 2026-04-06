const DEFAULT_ITEMS = [
  "GRID · 64PX",
  "RENDER · NEXT.JS",
  "COLOR · SRGB",
  "TYPE · ANTON / JETBRAINS_MONO",
];

type MarqueeProps = {
  items?: string[];
  className?: string;
};

export function Marquee({
  items = DEFAULT_ITEMS,
  className = "",
}: MarqueeProps) {
  const line = items.join("    ") + "    ";
  const doubled = line + line;

  return (
    <div
      className={`relative z-20 overflow-hidden border-y border-fg-stark bg-bg-deep ${className}`}
      aria-hidden
    >
      <div className="flex w-max font-mono text-[10px] uppercase tracking-[0.18em] text-fg-stark/55 sm:text-xs">
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
