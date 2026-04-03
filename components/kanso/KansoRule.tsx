/** Razor-thin 1px rule — structural only (no organic stroke). */
export function KansoRule({
  className = "",
  tone = "ink",
}: {
  className?: string;
  /** `ink` = #000000, `beni` = deep red */
  tone?: "ink" | "beni";
}) {
  return (
    <div
      className={`h-px w-full shrink-0 ${tone === "beni" ? "bg-[#D32F2F]" : "bg-black"} ${className}`}
      aria-hidden
    />
  );
}
