import type { Metadata } from "next";
import Link from "next/link";

const PDF_SRC = "/rayden-siarot-resume-2026.pdf";

export const metadata: Metadata = {
  title: "CV — Rayden Siarot",
  description: "View résumé (PDF).",
};

export default function ResumePage() {
  return (
    <div className="flex min-h-[calc(100dvh-5rem)] flex-col bg-[#fdf9ea]">
      <div className="flex flex-wrap items-center justify-end gap-4 border-b border-[#af101a] bg-[#fdf9ea] px-6 py-4 sm:px-8">
        <Link
          href={PDF_SRC}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-bold uppercase tracking-widest text-[#1e1c0b] opacity-70 transition-colors hover:text-[#af101a] [font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]"
        >
          Open PDF in new tab
        </Link>
      </div>
      <iframe
        title="Rayden Siarot — CV (PDF)"
        src={`${PDF_SRC}#view=FitH`}
        className="min-h-[calc(100dvh-5rem-4.25rem)] w-full flex-1 border-0 bg-[#e7e5e4]"
      />
    </div>
  );
}
