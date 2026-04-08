"use client";

import {
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";
import { X } from "lucide-react";

function resolveSrc(src: string | StaticImageData): string {
  return typeof src === "string" ? src : src.src;
}

type BaseProps = {
  src: string | StaticImageData;
  alt: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
};

type FixedProps = BaseProps & {
  width: number;
  height: number;
  className?: string;
  fill?: false;
};

type FillProps = BaseProps & {
  fill: true;
  containerClassName: string;
  width?: never;
  height?: never;
  className?: never;
};

export type LightboxImageProps = FixedProps | FillProps;

export function LightboxImage(props: LightboxImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const openLightbox = useCallback(() => {
    setOpen(true);
  }, []);

  const srcStr = resolveSrc(props.src);

  const isFill = "fill" in props && props.fill;

  const thumb = isFill ? (
    <div className={props.containerClassName}>
      <Image
        src={props.src}
        alt={props.alt}
        fill
        className={props.imgClassName}
        sizes={props.sizes}
        priority={props.priority}
      />
    </div>
  ) : (
    <Image
      src={props.src}
      alt={props.alt}
      width={(props as FixedProps).width}
      height={(props as FixedProps).height}
      className={props.imgClassName}
      sizes={props.sizes}
      priority={props.priority}
    />
  );

  const overlay = open && mounted && (
    <div
      className="fixed inset-0 z-[240] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-[2px]"
        aria-label="Close image preview"
        onClick={() => setOpen(false)}
      />
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-[min(96vw,1800px)] flex-col items-center">
        <div className="mb-2 flex w-full justify-end">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-white/20 bg-[#1a1a1a] text-white transition-colors hover:bg-[#af101a]"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
        <p id={titleId} className="sr-only">
          Enlarged: {props.alt}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element -- full-size preview; avoids layout constraints from fixed Next/Image dimensions */}
        <img
          src={srcStr}
          alt={props.alt}
          className="max-h-[min(88vh,1200px)] w-auto max-w-full object-contain shadow-2xl"
        />
      </div>
    </div>
  );

  const btnClass = isFill
    ? "absolute inset-0 z-0 h-full w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
    : `relative block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left ${(props as FixedProps).className ?? ""}`;

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        className={`group ${btnClass} transition-shadow hover:ring-2 hover:ring-[#af101a]/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#af101a]`}
        aria-label={`View larger: ${props.alt}`}
      >
        {thumb}
      </button>
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
