"use client";

// [CONSISTENCY AUDIT] — normalized MSA/Tanzeel docs to shared container width, heading scale, body typography, metadata rhythm, and section spacing tokens used across project pages.
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import type { NarrativeCaseStudy } from "@/lib/narrative-case-study-types";
import { NarrativeRichText } from "@/components/projects/NarrativeRichText";

// Visual refresh: elevated editorial type hierarchy, stronger contrast, expanded section rhythm, and refined card/image/callout depth while preserving structure and existing brand colors.
/* ─── Design tokens ──────────────────────────────────────────────────────── */
/* Primary background  : #fdf9ea  (warm cream)                               */
/* Ink                 : #1e1c0b                                              */
/* Accent              : var(--accent-red) / #af101a                         */
/* Border muted        : rgba(30,28,11,0.12)                                 */
/* Bento card bg       : #fff9e8  (slightly lighter cream)                   */

/* ─── Typography helpers ─────────────────────────────────────────────────── */
const HL =
  "[font-family:var(--font-stitch-headline,var(--font-kanso-heading),ui-sans-serif,sans-serif)]";
const BODY =
  "[font-family:var(--font-stitch-body,var(--font-inter),ui-sans-serif,sans-serif)]";

const LABEL =
  `text-xs font-bold uppercase tracking-widest text-[color:var(--accent-red)]/80 ${HL}`;
const PROSE =
  `max-w-4xl text-base leading-relaxed text-[#1e1c0b]/92 md:text-lg ${BODY}`;
const SECTION_HEADING =
  `text-2xl font-semibold leading-tight tracking-tight text-[#1e1c0b] md:text-3xl ${HL}`;

/* ─── Sidebar section registry ───────────────────────────────────────────── */
const SECTIONS = [
  { id: "overview",        label: "Project overview" },
  { id: "strategic-logic", label: "Strategic logic"  },
  { id: "solution",        label: "The solution"     },
  { id: "outcome",         label: "The outcome"      },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

/* ─── Bento card ─────────────────────────────────────────────────────────── */
function BentoCard({
  label,
  body,
  accent = false,
}: {
  label: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-3 rounded-[2px] border p-7 shadow-[0_10px_28px_rgba(30,28,11,0.06)] sm:p-8 ${
        accent
          ? "border-[color:var(--accent-red)]/30 bg-[color:var(--accent-red)]/5"
          : "border-[rgba(30,28,11,0.10)] bg-[#fff9e8]"
      }`}
    >
      <p className={LABEL}>{label}</p>
      <p className={`text-[16px] leading-[1.7] text-[#1e1c0b]/90 ${BODY}`}>{body}</p>
    </div>
  );
}

/* ─── Inline image block (real or placeholder) ───────────────────────────── */
function InlineImage({
  caption,
  image,
}: {
  caption: string;
  image?: { src: string; alt: string; variant: "desktop" | "mobile" };
}) {
  if (!image) {
    return (
      <div className="flex min-h-[28vh] items-center justify-center rounded-[2px] border border-dashed border-[color:var(--accent-red)]/30 bg-[#fff9e8] px-6 py-14 shadow-[0_10px_24px_rgba(30,28,11,0.05)]">
        <p className={`text-center text-[11px] font-medium uppercase tracking-[0.22em] text-[#1e1c0b]/46 ${HL}`}>
          {caption}
        </p>
      </div>
    );
  }

  if (image.variant === "mobile") {
    return (
      /* Phone frame: centered, max-w constrained to feel like a device mockup */
      <div className="flex justify-center py-4">
        <div className="relative w-full max-w-[320px]">
          {/* Outer phone shell */}
          <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-[#1e1c0b] bg-[#1e1c0b] shadow-[0_24px_60px_rgba(30,28,11,0.22)]">
            {/* Notch bar */}
            <div className="relative z-10 flex h-8 items-center justify-center bg-[#1e1c0b]">
              <div className="h-3 w-20 rounded-full bg-[#0a0a0a]" />
            </div>
            {/* Screen */}
            <div className="relative overflow-hidden bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                width={390}
                height={844}
                className="w-full object-cover object-top"
                sizes="320px"
              />
            </div>
            {/* Home indicator */}
            <div className="flex h-6 items-center justify-center bg-[#1e1c0b]">
              <div className="h-1 w-24 rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Desktop variant */
  return (
    <div className="rounded-[2px] border border-[color:var(--accent-red)]/20 p-1 shadow-[0_14px_34px_rgba(30,28,11,0.12)]">
      <div className="relative w-full overflow-hidden rounded-[1px]">
        <Image
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          className="w-full object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
type Props = { narrative: NarrativeCaseStudy };

export function NarrativeCaseStudyDocs({ narrative: n }: Props) {
  const [activeSection, setActiveSection] = useState<SectionId>("overview");
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* Track which section is in view via IntersectionObserver */
  useEffect(() => {
    const rootMargin = "-20% 0px -60% 0px";

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        }
      },
      { rootMargin, threshold: 0 },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className={`min-h-dvh bg-[#fdf9ea] text-[#1e1c0b] ${BODY}`}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-[rgba(30,28,11,0.10)] px-6 pb-16 pt-8 md:px-12 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/projects"
            className={`mb-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--accent-red)] transition-colors duration-200 hover:text-[#1e1c0b] ${HL}`}
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            Projects
          </Link>

          <p className={`mb-5 ${LABEL}`}>Case study</p>

          <h1 className={`text-5xl font-black uppercase leading-[0.95] tracking-tight text-[color:var(--accent-red)] md:text-6xl ${HL}`}>
            {n.displayTitle}
          </h1>

          <p className={`mt-6 max-w-4xl text-lg leading-relaxed text-[#1e1c0b]/88 md:text-xl ${BODY}`}>
            {n.tagline}
          </p>

          <p className={`mt-5 text-xs leading-relaxed text-[#1e1c0b]/64 ${HL} font-medium uppercase tracking-wider`}>
            {n.roleLine}
          </p>
        </div>
      </section>

      {/* ── Bento summary ────────────────────────────────────────────────── */}
      <section
        aria-label="Project summary"
        className="border-b border-[rgba(30,28,11,0.10)] px-6 py-16 md:px-12 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className={`mb-9 ${LABEL}`}>At a glance</p>
          {/* 2-col on sm, 4-col on lg */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <BentoCard label="Core problem"        body={n.bentoSummary.coreProblem}       />
            <BentoCard label="My role"             body={n.bentoSummary.myRole}            />
            <BentoCard label="Strategic decision"  body={n.bentoSummary.strategicDecision} accent />
            <BentoCard label="User benefit"        body={n.bentoSummary.userBenefit}       />
          </div>
        </div>
      </section>

      {/* Mobile anchor bar mirrors desktop sticky nav for long reads. */}
      <div className="sticky top-[73px] z-30 border-b border-[rgba(30,28,11,0.1)] bg-[#fdf9ea]/95 px-6 py-3 backdrop-blur-sm sm:top-[81px] sm:px-8 lg:hidden">
        <div className="mx-auto max-w-6xl overflow-x-auto">
          <div className="flex min-w-max gap-2">
            {SECTIONS.map(({ id, label }, i) => {
              const active = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`inline-flex items-center border px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${HL} ${
                    active
                      ? "border-[color:var(--accent-red)] bg-[color:var(--accent-red)]/8 text-[color:var(--accent-red)]"
                      : "border-[#1e1c0b]/20 text-[#1e1c0b]/65 hover:border-[color:var(--accent-red)]/40 hover:text-[#1e1c0b]"
                  }`}
                >
                  {i + 1}. {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Scrollytelling body ───────────────────────────────────────────── */}
      <div className="px-6 md:px-12">
        <div className="mx-auto max-w-6xl">
          {/*
            Asymmetric 2-col grid:
            - Left  30%  sticky sidebar  (hidden on mobile, shown lg+)
            - Right 70%  main content
          */}
          <div className="lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,5fr)] lg:gap-12 xl:gap-16">

            {/* ── Sticky sidebar ─────────────────────────────────────────── */}
            <aside
              aria-label="Section navigation"
              className="hidden lg:block"
            >
              <div className="sticky top-24 pt-14 pb-24">
                <p className={`mb-6 ${LABEL}`}>Contents</p>
                <nav>
                  <ul className="m-0 list-none space-y-1 p-0">
                    {SECTIONS.map(({ id, label }, i) => {
                      const active = activeSection === id;
                      return (
                        <li key={id}>
                          <a
                            href={`#${id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={`group flex items-center gap-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 no-underline ${HL} ${
                              active
                                ? "text-[color:var(--accent-red)]"
                                : "text-[#1e1c0b]/38 hover:text-[#1e1c0b]/70"
                            }`}
                          >
                            <span
                              className={`block h-px flex-shrink-0 transition-all duration-300 ${
                                active
                                  ? "w-8 bg-[color:var(--accent-red)]"
                                  : "w-4 bg-[#1e1c0b]/20 group-hover:w-6 group-hover:bg-[#1e1c0b]/40"
                              }`}
                              aria-hidden
                            />
                            <span>{i + 1}. {label}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* ── Main content ───────────────────────────────────────────── */}
            <main className="min-w-0 py-16 pb-24 md:py-24 md:pb-32">

              {/* 1. Project overview */}
              <section id="overview" className="mb-16 border-b border-[rgba(30,28,11,0.1)] pb-16 scroll-mt-28 md:mb-24 md:pb-24">
                <p className={`mb-8 ${LABEL}`}>1. Project overview</p>

                <div className="space-y-10 sm:space-y-12">
                  <div>
                    <h2 className={`mb-3 ${SECTION_HEADING}`}>Title &amp; summary</h2>
                    <p className={PROSE}>
                      <NarrativeRichText text={n.overview.summary} />
                    </p>
                  </div>

                  <div>
                    <h2 className={`mb-3 ${SECTION_HEADING}`}>The challenge</h2>
                    <p className={PROSE}>
                      <NarrativeRichText text={n.overview.challenge} />
                    </p>
                  </div>

                  <div>
                    <h2 className={`mb-3 ${SECTION_HEADING}`}>Target audience</h2>
                    <p className={PROSE}>
                      <NarrativeRichText text={n.overview.audience} />
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. Strategic logic */}
              <section id="strategic-logic" className="mb-16 border-b border-[rgba(30,28,11,0.1)] pb-16 scroll-mt-28 md:mb-24 md:pb-24">
                <p className={`mb-8 ${LABEL}`}>2. Strategic logic</p>

                <div className="space-y-10 sm:space-y-12">
                  <div>
                    <h2 className={`mb-3 ${SECTION_HEADING}`}>Design strategy</h2>
                    <p className={PROSE}>
                      <NarrativeRichText text={n.strategicLogic.designStrategy} />
                    </p>
                  </div>

                  <div>
                    <h2 className={`mb-3 ${SECTION_HEADING}`}>Visual identity</h2>
                    <p className={PROSE}>
                      <NarrativeRichText text={n.strategicLogic.visualIdentity} />
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. The solution */}
              <section id="solution" className="mb-16 border-b border-[rgba(30,28,11,0.1)] pb-16 scroll-mt-28 md:mb-24 md:pb-24">
                <p className={`mb-8 ${LABEL}`}>3. The solution</p>

                <div>
                  <h2 className={`mb-3 ${SECTION_HEADING}`}>High-fidelity execution</h2>
                  <p className={PROSE}>
                    <NarrativeRichText text={n.solution.body} />
                  </p>

                  {/* Keep evidence blocks visually grouped as one narrative chunk. */}
                  <div className="mt-12 space-y-7">
                    {n.solution.imagePlaceholders.map((caption, i) => (
                      <InlineImage
                        key={caption}
                        caption={caption}
                        image={n.solution.images?.[i]}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* 4. The outcome */}
              <section id="outcome" className="scroll-mt-28">
                <p className={`mb-8 ${LABEL}`}>4. The outcome</p>

                <div className="space-y-10 sm:space-y-12">
                  <div>
                    <h2 className={`mb-3 ${SECTION_HEADING}`}>Impact &amp; takeaways</h2>
                    <p className={PROSE}>
                      <NarrativeRichText text={n.outcome.impact} />
                    </p>
                  </div>

                  {/* Pull this synthesis as a styled callout for quick executive scan. */}
                  <div className="rounded-[2px] border border-[#1e1c0b]/12 border-l-2 border-l-[color:var(--accent-red)]/50 bg-[color:var(--accent-red)]/5 px-5 py-5 shadow-[0_10px_24px_rgba(30,28,11,0.06)] sm:pl-6 sm:pr-6">
                    <p className={`mb-4 ${SECTION_HEADING}`}>Strategic through-line</p>
                    <p className={PROSE}>
                      <NarrativeRichText text={n.outcome.throughLine} />
                    </p>
                  </div>
                </div>
              </section>

            </main>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
