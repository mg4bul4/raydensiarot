/** Abstract red hanko-style seal — replaces dossier code markers. */
export function HankoMarker({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      aria-hidden
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        className="text-[#d32f2f]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="20"
          height="20"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M6 7h10M6 11h10M8 15h6"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <circle cx="16" cy="6" r="1.35" fill="currentColor" />
      </svg>
    </span>
  );
}
