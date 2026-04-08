import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PosterGallerySection } from "@/components/projects/PosterGallerySection";

const HEADLINE =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";
const BODY = "[font-family:var(--font-stitch-body),ui-sans-serif,sans-serif]";

export function StitchPostersPage() {
  return (
    <div className={`min-h-dvh bg-[#fdf9ea] text-[#1e1c0b] ${BODY}`}>
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-4 sm:px-8 md:pb-24">
        <header className="mb-12 lg:mb-16">
          <Link
            href="/projects"
            className={`mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#af101a] transition-colors hover:text-[#1e1c0b] ${HEADLINE}`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Projects
          </Link>
          <h1
            className={`text-[clamp(2.25rem,8vw,5rem)] font-black uppercase leading-[0.95] tracking-tighter text-[#af101a] ${HEADLINE}`}
          >
            Graphic design &amp; posters
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-85">
            Print and screen: posters, flyers, and campaign art—structured like a
            gallery, built for clarity at a distance.
          </p>
        </header>

        <PosterGallerySection showIntro={false} />
      </div>

      <SiteFooter />
    </div>
  );
}
