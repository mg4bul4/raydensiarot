"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";

const centerLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
] as const;

const headline =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";
const body = "[font-family:var(--font-stitch-body),ui-sans-serif,sans-serif]";

function NavLinks({
  pathname,
  onNavigate,
  className,
  variant = "desktop",
}: {
  pathname: string;
  onNavigate?: () => void;
  className?: string;
  variant?: "desktop" | "mobile";
}) {
  const mobile = variant === "mobile";
  return (
    <ul
      className={`m-0 list-none p-0 ${mobile ? "flex flex-col items-center gap-10" : "flex flex-row items-center gap-8"} ${className ?? ""}`}
    >
      {centerLinks.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              onClick={onNavigate}
              className={
                active
                  ? mobile
                    ? `block border-b border-[#af101a] pb-2 text-2xl font-bold uppercase tracking-tighter text-[#af101a] sm:text-3xl ${headline}`
                    : `block border-b border-[#af101a] pb-1 text-sm font-bold uppercase tracking-tighter text-[#af101a] ${headline}`
                  : mobile
                    ? `block text-xl font-bold uppercase tracking-tighter text-[#1e1c0b] transition-colors hover:text-[#af101a] sm:text-2xl ${headline}`
                    : `block text-xs font-medium uppercase tracking-widest text-[#1e1c0b] transition-colors duration-200 hover:bg-[#f5eed2] ${body}`
              }
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    const id = requestAnimationFrame(() => closeMenu());
    return () => cancelAnimationFrame(id);
  }, [pathname, closeMenu]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative z-50 border-b border-[#af101a] bg-[#fff9e8] px-6 py-4 sm:px-8">
        <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-4">
          <Link
            href="/"
            className={`flex items-center gap-3 text-xl font-bold uppercase tracking-tighter text-[#1e1c0b] ${headline}`}
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

          <nav
            className={`hidden min-[769px]:flex items-center gap-8`}
            aria-label="Primary"
          >
            <NavLinks pathname={pathname} />
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={`shrink-0 bg-[#af101a] px-5 py-2 text-xs font-bold uppercase tracking-tighter text-white transition-colors hover:opacity-90 ${headline}`}
            >
              Contact
            </Link>
            <button
              type="button"
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-[#af101a]/25 text-[#1e1c0b] transition-colors hover:bg-[#f5eed2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#af101a] min-[769px]:hidden motion-reduce:transition-none ${headline}`}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
            >
              <span className="relative block h-5 w-6" aria-hidden>
                <span
                  className={`absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-current transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none ${
                    menuOpen
                      ? "translate-y-[9px] rotate-45"
                      : "translate-y-0 rotate-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[9px] block h-0.5 w-6 rounded-full bg-current transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[18px] block h-0.5 w-6 rounded-full bg-current transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none ${
                    menuOpen
                      ? "-translate-y-[9px] -rotate-45"
                      : "translate-y-0 rotate-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed bottom-0 left-0 right-0 top-[4.5rem] z-40 flex min-h-0 flex-col overflow-y-auto bg-[#fff9e8] transition-[visibility,opacity,transform] duration-300 ease-out motion-reduce:transition-none min-[769px]:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0"
        }`}
        {...(!menuOpen ? { inert: true } : {})}
      >
        <nav
          className="flex flex-1 flex-col justify-center px-8 py-12"
          aria-label="Primary"
        >
          <NavLinks
            pathname={pathname}
            onNavigate={closeMenu}
            variant="mobile"
          />
        </nav>
      </div>
    </header>
  );
}
