import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";
import { ExitToHome } from "@/components/layout/ExitToHome";
import { ContactFormClient } from "@/components/contact/ContactFormClient";

const HEADLINE =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";
const BODY = "[font-family:var(--font-stitch-body),ui-sans-serif,sans-serif]";

const LINKEDIN_URL =
  typeof process.env.NEXT_PUBLIC_LINKEDIN_URL === "string"
    ? process.env.NEXT_PUBLIC_LINKEDIN_URL
    : "#";

const RESUME_URL =
  typeof process.env.NEXT_PUBLIC_RESUME_URL === "string"
    ? process.env.NEXT_PUBLIC_RESUME_URL
    : "/accomplishments.pdf";

const READCV_URL =
  typeof process.env.NEXT_PUBLIC_READCV_URL === "string"
    ? process.env.NEXT_PUBLIC_READCV_URL
    : "https://read.cv";

function ExternalRow({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const external = href.startsWith("http");
  const className =
    "group flex items-center justify-between border-b border-[#e4beba] py-2 transition-all hover:border-[#af101a]";
  const inner = (
    <>
      <span
        className={`text-sm font-bold uppercase tracking-tighter ${HEADLINE}`}
      >
        {label}
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
    </>
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

export function StitchContactPage() {
  const year = new Date().getFullYear();

  return (
    <div className={`min-h-dvh bg-[#fdf9ea] text-[#1e1c0b] ${BODY}`}>
      <main className="mx-auto max-w-screen-2xl px-6 pb-24 pt-4 sm:px-8 md:pb-32">
        <div className="relative z-10 mb-12">
          <ExitToHome />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="space-y-16 md:col-span-8 lg:space-y-24">
            <section>
              <h1
                className={`mb-4 text-[12vw] font-black uppercase leading-[0.85] tracking-tighter text-[#af101a] md:text-[8rem] ${HEADLINE}`}
              >
                Let&apos;s
                <br />
                Connect.
              </h1>
            </section>
            <ContactFormClient />
          </div>

          <aside className="flex flex-col justify-center pt-4 md:col-span-4">
            <div className="space-y-16">
              <div className="relative inline-block border border-[#af101a] bg-[#af101a] p-6 text-white">
                <p
                  className={`text-xs font-bold uppercase leading-relaxed tracking-widest ${HEADLINE}`}
                >
                  Open to full-time
                  <br />
                  strategic roles.
                </p>
                <div className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center border-2 border-[#fdf9ea] bg-[#af101a]">
                  <Shield className="h-3 w-3 text-[#fdf9ea]" strokeWidth={2} aria-hidden />
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <span
                    className={`block text-[10px] uppercase tracking-[0.3em] text-[#af101a] ${BODY}`}
                  >
                    Links
                  </span>
                  <ul className="space-y-4">
                    <li>
                      <ExternalRow href={RESUME_URL} label="Resume" />
                    </li>
                    <li>
                      <ExternalRow href={LINKEDIN_URL} label="LinkedIn" />
                    </li>
                    <li>
                      <ExternalRow href={READCV_URL} label="Read.cv" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-[#af101a] bg-[#fdf9ea]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-8 py-12 md:flex-row">
          <div
            className={`text-[10px] font-bold uppercase tracking-widest text-[#af101a] ${HEADLINE}`}
          >
            Rayden Siarot {year}
          </div>
          <p
            className={`text-center text-[10px] uppercase tracking-widest text-[#1e1c0b] ${HEADLINE}`}
          >
            © {year} THE DIGITAL CALLIGRAPHER. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[10px] uppercase tracking-widest text-[#1e1c0b] opacity-60 transition-all duration-200 hover:text-[#af101a] hover:underline ${HEADLINE}`}
            >
              LinkedIn
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[10px] uppercase tracking-widest text-[#1e1c0b] opacity-60 transition-all duration-200 hover:text-[#af101a] hover:underline ${HEADLINE}`}
            >
              My resume
            </a>
            <a
              href="https://siaria.fyi"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[10px] uppercase tracking-widest text-[#1e1c0b] opacity-60 transition-all duration-200 hover:text-[#af101a] hover:underline ${HEADLINE}`}
            >
              Siaria Labs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
