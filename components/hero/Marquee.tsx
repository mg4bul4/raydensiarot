const DEFAULT_ITEMS = [
  "MODE: CREATIVE_DIRECTOR",
  "INPUT_OK",
  "RENDER_PIPELINE: BRUTAL",
  "SYS: PORTFOLIO_V1",
  "NEON_SAFE",
];

type MarqueeProps = {
  items?: string[];
  className?: string;
};

export function Marquee({ items = DEFAULT_ITEMS, className = "" }: MarqueeProps) {
  const line = items.join(" — ") + " — ";
  const doubled = line + line;

  return (
    <div
      className={`relative z-20 overflow-hidden border-y border-fg-stark/25 bg-[#0d0d0d] ${className}`}
      aria-hidden
    >
      <div className="flex w-max font-mono text-[10px] uppercase tracking-[0.35em] text-neon-yellow sm:text-xs">
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
