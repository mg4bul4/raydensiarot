import Link from "next/link";
import {
  SITE_LINKEDIN_URL,
  SITE_RESUME_HREF,
  SITE_SIARIA_LABS_URL,
} from "@/lib/site-links";

const HEADLINE =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";

const resumeLinkClass =
  "text-[10px] uppercase tracking-widest text-[#1e1c0b] opacity-60 transition-colors hover:text-[#af101a] hover:underline";

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export type SiteFooterProps = {
  /** Extra classes on the footer element (e.g. mt-auto w-full). */
  className?: string;
};

/**
 * Standard site footer: matches the projects page (three columns, tagline, links).
 */
export function SiteFooter({ className }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={["border-t border-[#af101a] bg-[#fdf9ea]", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 px-8 py-12 md:flex-row">
        <div
          className={`text-[10px] font-bold uppercase tracking-widest text-[#af101a] ${HEADLINE}`}
        >
          Rayden Siarot {year}
        </div>
        <p className="text-center text-[10px] uppercase tracking-widest text-[#1e1c0b] opacity-70">
          Portfolio &amp; selected work.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href={SITE_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest text-[#1e1c0b] opacity-60 transition-colors hover:text-[#af101a] hover:underline"
          >
            LinkedIn
          </a>
          {isInternalHref(SITE_RESUME_HREF) ? (
            <Link href={SITE_RESUME_HREF} className={resumeLinkClass}>
              My resume
            </Link>
          ) : (
            <a
              href={SITE_RESUME_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={resumeLinkClass}
            >
              My resume
            </a>
          )}
          <a
            href={SITE_SIARIA_LABS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest text-[#1e1c0b] opacity-60 transition-colors hover:text-[#af101a] hover:underline"
          >
            Siaria Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
