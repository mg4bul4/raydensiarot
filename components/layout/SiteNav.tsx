import Link from "next/link";

const links = [
  { href: "/#transmission", label: "CONTACT" },
  { href: "/about", label: "BIOS" },
  { href: "/projects", label: "ARCHIVE" },
] as const;

const linkClass =
  "text-[11px] font-medium uppercase tracking-[0.28em] text-black transition-colors duration-75 hover:text-[#d32f2f] sm:text-xs sm:tracking-[0.32em]";

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center bg-[#fff8dc]/90 px-6 pt-8 pb-4 backdrop-blur-sm sm:px-10 sm:pt-10">
      <nav
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-10 md:gap-x-14"
        aria-label="Primary"
      >
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={linkClass}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
