import Link from "next/link";

const exitClass =
  "inline-block font-mono text-[10px] uppercase tracking-[0.22em] text-black transition-colors duration-200 hover:text-[#af101a] sm:text-[11px]";

export function ExitToHome() {
  return (
    <Link href="/" className={exitClass}>
      ← [ EXIT_TO_HOME ]
    </Link>
  );
}
