"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const centerLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-[#fff9e8] px-6 py-4 sm:px-8">
      <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold uppercase tracking-tighter text-[#1e1c0b] [font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]"
        >
          <Image
            src="/logo-rayd.png"
            alt="Rayden Siarot"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 object-contain"
            priority
          />
          RaydenSiarot
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {centerLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={
                  active
                    ? "border-b border-[#af101a] pb-1 text-sm font-bold uppercase tracking-tighter text-[#af101a] [font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]"
                    : "text-xs font-medium uppercase tracking-widest text-[#1e1c0b] transition-colors duration-200 hover:bg-[#f5eed2] [font-family:var(--font-stitch-body),ui-sans-serif,sans-serif]"
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="shrink-0 bg-[#af101a] px-5 py-2 text-xs font-bold uppercase tracking-tighter text-white transition-colors hover:opacity-90 [font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
