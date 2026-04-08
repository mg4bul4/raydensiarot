"use client";

import Image from "next/image";
import { useState } from "react";
import { posters } from "@/lib/posters";
import { PosterLightbox } from "@/components/ui/PosterLightbox";

const headline =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";
const body = "[font-family:var(--font-stitch-body),ui-sans-serif,sans-serif]";

type PosterGallerySectionProps = {
  /** When false, only the grid and lightbox render (page supplies its own title). */
  showIntro?: boolean;
};

export function PosterGallerySection({ showIntro = true }: PosterGallerySectionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = posters.find((p) => p.id === activeId) ?? null;

  return (
    <>
      <section
        className={`w-full border border-[color:var(--accent-red)] bg-[#fff8dc] px-8 py-16 lg:px-16 lg:py-24 ${body}`}
        aria-labelledby={showIntro ? "poster-gallery-heading" : undefined}
      >
        {showIntro ? (
          <header className="mb-16 max-w-3xl lg:mb-24">
            <p
              className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#af101a] ${headline}`}
            >
              Graphic design &amp; poster
            </p>
            <h2
              id="poster-gallery-heading"
              className={`text-4xl font-black uppercase tracking-tighter text-[#af101a] lg:text-6xl ${headline}`}
            >
              Digital gallery
            </h2>
            <p className="mt-6 text-base leading-relaxed opacity-80">
              A quiet grid: restraint, breath, and a single accent. Each piece is
              framed to stay legible at a glance—Kanso, not clutter.
            </p>
          </header>
        ) : null}

        <ul className="grid list-none grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-28">
          {posters.map((p) => {
            const svg = p.src.endsWith(".svg");
            return (
              <li key={p.id} className="m-0 p-0">
                <button
                  type="button"
                  onClick={() => setActiveId(p.id)}
                  className={`group block w-full border-0 bg-transparent p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent-red)] ${headline}`}
                  aria-label={`Open full screen: ${p.title}`}
                >
                  <div
                    className="relative aspect-[2/3] w-full overflow-hidden border border-[color:var(--accent-red)] shadow-[0_2px_14px_rgba(30,28,11,0.06)]"
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={p.width}
                      height={p.height}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-full w-full object-contain object-center bg-[#fdf9ea] transition-transform duration-300 ease-out motion-reduce:transition-none group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
                      unoptimized={svg}
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/55 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                      <div className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none">
                        <p className="text-lg font-bold uppercase tracking-tight text-white sm:text-xl">
                          {p.title}
                        </p>
                        <p className="mt-1 text-sm font-medium text-white/85">
                          {p.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>

                <div className="mt-10 space-y-3">
                  <h3 className={`text-xl font-bold text-[#1e1c0b] sm:text-2xl ${headline}`}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1e1c0b]/90">
                    <span className="font-semibold">Objective: </span>
                    {p.objective}
                  </p>
                  <p className="text-sm leading-relaxed text-[#1e1c0b]/90">
                    <span className="font-semibold">Visual Logic: </span>
                    {p.visualLogic}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <PosterLightbox poster={active} onClose={() => setActiveId(null)} />
    </>
  );
}
