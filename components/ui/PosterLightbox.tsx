"use client";

import Image from "next/image";
import { X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import { createPortal } from "react-dom";
import type { PosterEntry } from "@/lib/posters";

const headline =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";

type PosterLightboxProps = {
  poster: PosterEntry | null;
  onClose: () => void;
};

export function PosterLightbox({ poster, onClose }: PosterLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!poster) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [poster, handleClose]);

  if (!poster || !mounted) return null;

  const svg = poster.src.endsWith(".svg");

  const overlay = (
    <div
      className="fixed inset-0 z-[220] flex flex-col bg-[#fff9e8] p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 z-0 cursor-default border-0 bg-transparent"
        aria-label="Close gallery"
        onClick={handleClose}
      />
      <div className="relative z-10 flex shrink-0 justify-end">
        <button
          type="button"
          onClick={handleClose}
          className={`flex h-11 w-11 items-center justify-center border border-[color:var(--accent-red)] bg-[#fdf9ea] text-[#1e1c0b] transition-colors hover:bg-[#f5eed2] ${headline}`}
          aria-label="Close"
        >
          <X className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>
      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-2">
        <p id={titleId} className="sr-only">
          {poster.title}, {poster.year}
        </p>
        <Image
          src={poster.src}
          alt={poster.alt}
          width={poster.width}
          height={poster.height}
          className="max-h-[min(85vh,1200px)] w-auto max-w-full object-contain"
          sizes="100vw"
          priority
          unoptimized={svg}
        />
        <p
          className={`mt-6 text-center text-sm font-bold uppercase tracking-wider text-[#af101a] ${headline}`}
        >
          {poster.title}
          <span className="font-normal text-[#1e1c0b]"> · {poster.year}</span>
        </p>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
