import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";

const HEADLINE =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";
const BODY = "[font-family:var(--font-stitch-body),ui-sans-serif,sans-serif]";

export function MessageSentPage() {
  return (
    <div className={`flex min-h-dvh flex-col bg-[#fff9e8] text-[#1e1c0b] selection:bg-[#af101a] selection:text-white ${BODY}`}>
      <main className="flex flex-grow flex-col items-center justify-center bg-[#fffbf0] p-8 md:p-24">
        <div className="relative w-full max-w-3xl overflow-hidden border border-[#af101a] bg-[#fff9e8] p-12 md:p-24">
          <div className="relative z-10 space-y-8">
            <h1
              className={`text-5xl font-black leading-none tracking-tighter text-[#af101a] md:text-8xl ${HEADLINE}`}
            >
              MESSAGE SENT.
            </h1>
            <div className="space-y-4">
              <p className="max-w-md text-lg leading-relaxed text-[#1e1c0b] md:text-xl">
                Coffee is on me if I don&apos;t reply in 24 hours.
              </p>
              <p
                className={`text-sm font-medium uppercase tracking-widest text-[#1e1c0b]/70 ${BODY}`}
              >
                While you wait, check out my projects or read about me
              </p>
            </div>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href="/projects"
                className={`inline-flex items-center justify-center border border-[#af101a] bg-[#af101a] px-8 py-3 text-sm font-bold uppercase tracking-tighter text-white transition-all duration-200 hover:bg-transparent hover:text-[#af101a] ${HEADLINE}`}
              >
                See projects
              </Link>
              <Link
                href="/about"
                className={`inline-flex items-center justify-center border border-[#af101a] bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-tighter text-[#af101a] transition-all duration-200 hover:bg-[#af101a] hover:text-white ${HEADLINE}`}
              >
                About me
              </Link>
            </div>
          </div>
          <div
            className="absolute right-0 top-0 h-12 w-px bg-[#af101a]/20"
            aria-hidden
          />
          <div
            className="absolute right-0 top-0 h-px w-12 bg-[#af101a]/20"
            aria-hidden
          />
        </div>
      </main>

      <SiteFooter className="mt-auto w-full" />
    </div>
  );
}
