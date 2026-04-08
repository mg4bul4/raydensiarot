import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProjectCardActions } from "@/components/projects/ProjectCardActions";
import { getProjectConfig } from "@/lib/project-registry";

const HEADLINE =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";
const BODY = "[font-family:var(--font-stitch-body),ui-sans-serif,sans-serif]";

const IMG = {
  siaria:
    "https://lh3.googleusercontent.com/aida/ADBb0uhb87DfVZRVt5n0FJBWG6ItefxKpU_EMSnRfHT-F8dhZhHwmEv2w9bTr_5txzZ17kk97s6_UIk1vVcXKcN9m9LkbvLJMt4UNP9K1keKrB3-ZyXtQ5R1QsxGqKONuUGJDgAvkjd12hooKvlevEyAovg5tWeL-K9sMgY9UsECrDj_Lmznrh3kYbpLC9fPDtESmKjMuN9qHGXvgG01rQI63MCq_awpdmmMpSVxWAX569ux8w_53RPQLBVCNAiYEcub-LUfTUDTmMPt1FA",
  msa: "https://lh3.googleusercontent.com/aida/ADBb0ujWMk4fsfdKhxXH2Y2uuAn15wOEVdzLN3Q_xYWkKbmvIQ148HibweKc3PIMG00nBPJ4o4aoD3MCIc0j-29xIS05Ry4piU1ML0bzBzlkJb2MJODJ9xyqvibq5Lswmbmi74PAWhdM9KfJHJingmAwyMXc7Nfe8NZJtzfpJXBV6Z6uVTzA_iamLC7l91FXrApBaqxBWkaIb7wrjPB6TNKERYyzQ7SQxuPip039KUZRx3x4HdkMZ8lhOGngkS8Q2ZlbCnswk-5gaLFvvZQ",
  grounded:
    "https://lh3.googleusercontent.com/aida/ADBb0uj91YS6EZNG3VowYWpVC3JSddrEdRbYUqHCQyYoo2DlqRgURzyOazqsPrxW0n4SPHjQV6j3QxZ_3Blwar7YPeiBKLqWbY2_6T1Mrzeg_QpebQctH65TjBdIsGiD06VQQP_XbqeN5CqwF7_kMn0qCvSyueVcjk3-xFY5BDmXHJ3NO1Lfab3SHv119t_Tr2xNSH9bhpioDTrq8U0bW4CxMvWgOx0xQ78rxXl2EkvEEAxVQWPn-BqgJ8LZSgvZnKmHKMJHzAq-3jKlE3I",
  nafs: "/projects/nafs-fyi-thumbnail.png",
  tanzeel: "/projects/tanzeel-thumbnail.png",
  graphicPosters: "/projects/posters/all-time-high-tour.png",
} as const;

function CategoryLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className={`kanso-tag-filled ${HEADLINE}`}>{children}</span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className={`kanso-tag-outline ${HEADLINE}`}>{children}</span>
  );
}

export function StitchProjectsIndex() {
  const siaria = getProjectConfig("siaria");
  const msa = getProjectConfig("msa-uta");
  const nafs = getProjectConfig("nafs-fyi");
  const tanzeel = getProjectConfig("tanzeel-initiative");
  const graphic = getProjectConfig("graphic-design");
  return (
    <div className={`min-h-dvh bg-[#fdf9ea] text-[#1e1c0b] ${BODY}`}>
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-4 sm:px-8 md:pb-24">
        <header className="mb-16 grid grid-cols-12 gap-8 lg:mb-24">
          <div className="col-span-12 lg:col-span-8">
            <h1
              className={`text-[clamp(3rem,10vw,10rem)] font-black uppercase leading-[0.85] tracking-tighter text-[#af101a] ${HEADLINE}`}
            >
              My projects
            </h1>
          </div>
          <div className="col-span-12 hidden lg:col-span-4 lg:block" aria-hidden />
        </header>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Siaria: featured */}
          <article
            className={`relative col-span-12 grid grid-cols-12 gap-0 kanso-card-featured bg-[#fff8dc]`}
          >
            <div
              className="absolute right-0 top-0 z-10 flex h-12 w-12 items-center justify-center bg-[#af101a] text-white"
              aria-hidden
            >
              <Star className="h-5 w-5" fill="white" stroke="white" />
            </div>
            {/* Image side with corner registration mark */}
            <div
              className={`kanso-corner relative col-span-12 min-h-[280px] overflow-hidden border-b border-[#af101a] bg-[#fff8dc] lg:col-span-7 lg:min-h-[420px] lg:border-b-0 lg:border-r`}
            >
              <Image
                src={IMG.siaria}
                alt=""
                fill
                className="object-cover object-left grayscale-0"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
              {/* Subtle red overlay ties image to palette */}
              <div className="absolute inset-0 bg-[#af101a]/8 mix-blend-multiply pointer-events-none" />
            </div>
            <div className="col-span-12 flex flex-col justify-between bg-[#fff8dc] p-10 lg:col-span-5 lg:p-16">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="kanso-rule" />
                  <CategoryLabel>Design agency</CategoryLabel>
                </div>
                <h2
                  className={`mb-8 text-5xl font-bold uppercase tracking-tighter text-[#1e1c0b] lg:text-7xl ${HEADLINE}`}
                >
                  Siaria Labs
                </h2>
                <p className="mb-10 text-lg leading-relaxed opacity-90">
                  As co-founder and lead designer at Siaria Labs, I lead the
                  development of bespoke digital solutions, focusing on the
                  intersection of technical excellence and visual authority.
                </p>
                <div className="mb-10 flex flex-wrap gap-2">
                  <Tag>Responsive structural styling</Tag>
                  <Tag>AI-augmented rapid prototyping</Tag>
                  <Tag>Interaction &amp; motion logic</Tag>
                  <Tag>Frontend implementation</Tag>
                </div>
                {siaria ? (
                  <ProjectCardActions
                    docsSlug={siaria.slug}
                    primaryHref={siaria.primaryHref}
                    primaryLabel={siaria.primaryLabel}
                    primaryExternal={siaria.primaryExternal}
                    showPrimary={siaria.showPrimary}
                  />
                ) : null}
                <p
                  className={`mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#af101a]/90 ${HEADLINE}`}
                >
                  UNDER CONSTRUCTION
                </p>
              </div>
            </div>
          </article>

          {/* MSA */}
          <article
            className={`col-span-12 flex flex-col kanso-card bg-[#fff8dc] lg:col-span-6`}
          >
            <div className="p-10 lg:p-12">
              <div className="mb-4 flex items-center gap-4">
                <CategoryLabel>Religious organization</CategoryLabel>
              </div>
              <h3
                className={`mb-6 text-4xl font-bold uppercase tracking-tighter text-[#1e1c0b] ${HEADLINE}`}
              >
                MSA at UTA website
              </h3>
              <p className="mb-8 opacity-80">
                Led the end-to-end creation of a centralized community hub. I
                designed a streamlined interface for event management, handling
                high-traffic RSVPs and registrations through clean, responsive
                structural styling and intentional UI logic.
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                <Tag>Web design</Tag>
                <Tag>Web development</Tag>
              </div>
            </div>
            {/* Mat border image frame */}
            <div className="mt-auto px-4 pb-4">
              <div className="border border-[#af101a]">
                <div className="relative h-80 min-h-[240px] overflow-hidden bg-[#fff8dc]">
                  <Image
                    src={IMG.msa}
                    alt=""
                    fill
                    className="object-cover transition-all duration-500 grayscale hover:grayscale-0"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="border-t border-[#af101a]/10 p-8 lg:p-10">
              {msa ? (
                <ProjectCardActions
                  docsSlug={msa.slug}
                  primaryHref={msa.primaryHref}
                  primaryLabel={msa.primaryLabel}
                  primaryExternal={msa.primaryExternal}
                  showPrimary={msa.showPrimary}
                />
              ) : null}
            </div>
          </article>

          {/* GroundedTalks */}
          <article
            className={`col-span-12 flex flex-col-reverse kanso-card bg-[#fff8dc] lg:col-span-6 lg:flex-col`}
          >
            {/* Mat border image frame */}
            <div className="px-4 pt-4 lg:pb-0 lg:pt-4">
              <div className="border border-[#af101a]">
                <div className="relative h-80 min-h-[240px] overflow-hidden bg-[#fff8dc]">
                  <Image
                    src={IMG.grounded}
                    alt=""
                    fill
                    className="object-cover object-top transition-all duration-500 grayscale hover:grayscale-0"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="p-10 lg:p-12">
              <div className="mb-4 flex items-center gap-4">
                <CategoryLabel>Edu tech startup</CategoryLabel>
              </div>
              <h3
                className={`mb-6 text-4xl font-bold uppercase tracking-tighter text-[#1e1c0b] ${HEADLINE}`}
              >
                GroundedTalks
              </h3>
              <p className="mb-8 opacity-80">
                Built a scalable visual system for a digital learning platform.
                Focused on radical clarity and intuitive interaction logic, I
                transformed dense educational content into a streamlined,
                high-fidelity user journey.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag>UI/UX design</Tag>
                <Tag>Creative &amp; marketing strategy</Tag>
              </div>
              <Link
                href="/projects/grounded-talks"
                className={`mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-tighter text-[#af101a] hover:underline ${HEADLINE}`}
              >
                Read case study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Nafs */}
          <article
            className={`col-span-12 flex flex-col kanso-card bg-[#fff8dc] p-8 lg:col-span-6`}
          >
            <div className="mb-4 flex items-center gap-4">
              <CategoryLabel>Mobile UI design</CategoryLabel>
            </div>
            <h3
              className={`mb-6 text-4xl font-bold uppercase tracking-tighter text-[#1e1c0b] lg:text-5xl ${HEADLINE}`}
            >
              Nafs.fyi
            </h3>
            <p className="mb-6 max-w-xl text-sm opacity-70">
              Architected a high-fidelity wellness ecosystem, transforming complex
              health data into a calm, intuitive interface. I delivered a scalable
              design system and implementation-ready prototypes focused on
              cognitive ease and user trust.
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              <Tag>Mobile UI design</Tag>
              <Tag>Wellness ecosystem</Tag>
            </div>
            {/* Mat border image frame */}
            <div className="border border-[#af101a] p-1">
              <div className="relative aspect-video w-full overflow-hidden bg-[#fff8dc]">
                <Image
                  src={IMG.nafs}
                  alt="Nafs.fyi landing page: logo, tagline, and Get Access call to action"
                  fill
                  className="object-cover object-top transition-all duration-500 grayscale hover:grayscale-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            {nafs ? (
              <ProjectCardActions
                docsSlug={nafs.slug}
                primaryHref={nafs.primaryHref}
                primaryLabel={nafs.primaryLabel}
                primaryExternal={nafs.primaryExternal}
                showPrimary={nafs.showPrimary}
                docsDisabled={nafs.docsDisabled}
              />
            ) : null}
          </article>

          {/* Tanzeel Initiative */}
          <article
            className={`col-span-12 flex flex-col kanso-card bg-[#fff8dc] p-8 lg:col-span-6`}
          >
            <div className="mb-4 flex items-center gap-4">
              <CategoryLabel>Nonprofit web</CategoryLabel>
            </div>
            <h3
              className={`mb-6 text-3xl font-bold uppercase tracking-tighter text-[#1e1c0b] sm:text-4xl lg:text-5xl ${HEADLINE}`}
            >
              The Tanzeel Initiative
            </h3>
            <p className="mb-6 max-w-xl text-sm opacity-70">
              UI design for a community-focused nonprofit: a clear path to events,
              bookings, and giving, with a calm visual layer that reads as
              trustworthy and approachable on every screen size.
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              <Tag>Web UI design</Tag>
              <Tag>Nonprofit</Tag>
            </div>
            {/* Mat border image frame */}
            <div className="border border-[#af101a] p-1">
              <div className="relative aspect-video w-full overflow-hidden bg-[#fff8dc]">
                <Image
                  src={IMG.tanzeel}
                  alt="The Tanzeel Initiative hero: navigation, welcome headline, and gold calligraphy emblem"
                  fill
                  className="object-cover object-center bg-[#050508] transition-all duration-500 grayscale hover:grayscale-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            {tanzeel ? (
              <ProjectCardActions
                docsSlug={tanzeel.slug}
                primaryHref={tanzeel.primaryHref}
                primaryLabel={tanzeel.primaryLabel}
                primaryExternal={tanzeel.primaryExternal}
                showPrimary={tanzeel.showPrimary}
              />
            ) : null}
          </article>

          {/* Graphic design — posters gallery */}
          <article
            className={`col-span-12 flex flex-col kanso-card bg-[#fff8dc] p-8 lg:col-span-8`}
          >
            <div className="mb-4 flex items-center gap-4">
              <CategoryLabel>Graphic design</CategoryLabel>
            </div>
            <h3
              className={`mb-6 text-4xl font-bold uppercase tracking-tighter text-[#1e1c0b] lg:text-5xl ${HEADLINE}`}
            >
              Posters &amp; print
            </h3>
            <p className="mb-6 max-w-xl text-sm opacity-70">
              Concert flyers, community events, and campaign art—laid out as a
              digital gallery with the same restraint as the rest of the site.
              Hover for titles; click any poster for full-screen view.
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              <Tag>Poster design</Tag>
              <Tag>Print &amp; digital</Tag>
            </div>
            {/* Mat border image frame */}
            <div className="border border-[#af101a] p-1">
              <div className="relative aspect-video w-full overflow-hidden bg-[#fff8dc]">
                <Image
                  src={IMG.graphicPosters}
                  alt="All Time High Tour poster thumbnail"
                  fill
                  className="object-cover object-center transition-all duration-500 grayscale hover:grayscale-0"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            </div>
            {graphic ? (
              <ProjectCardActions
                docsSlug={graphic.slug}
                primaryHref={graphic.primaryHref}
                primaryLabel={graphic.primaryLabel}
                primaryExternal={graphic.primaryExternal}
                showPrimary={graphic.showPrimary}
              />
            ) : null}
          </article>

          {/* CTA */}
          <article
            className={`relative col-span-12 flex flex-col justify-center kanso-card bg-[#af101a] p-10 text-white lg:col-span-4`}
          >
            {/* Inner border — frame within a frame, Showa print motif */}
            <div className="pointer-events-none absolute inset-3 border border-[#fff9e8]/40" />
            <h4
              className={`mb-8 text-4xl font-black uppercase leading-none tracking-tighter lg:text-5xl ${HEADLINE}`}
            >
              Purposeful design. Proven strategy. Let&apos;s talk.
            </h4>
            <p className="mb-10 text-lg opacity-90">
              If I don&apos;t answer in 24 hours, coffee is on me.
            </p>
            <Link
              href="/contact"
              className={`inline-flex w-fit bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#af101a] transition-colors hover:bg-[#f5eed2] ${HEADLINE}`}
            >
              Contact me
            </Link>
          </article>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
