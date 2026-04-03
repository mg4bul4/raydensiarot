/** Single hand-drawn brushstroke horizontal rule (replaces rigid hairlines). */
export function BrushRule({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full ${className}`} aria-hidden>
      <svg
        className="h-3 w-full text-black/[0.22]"
        preserveAspectRatio="none"
        viewBox="0 0 400 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4.2C32 2.8 64 5.4 96 4.1c32-1.3 64 1.2 96 0.3 32-0.9 64-0.4 96 0.5 32 0.9 64 0.2 112-0.4"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
