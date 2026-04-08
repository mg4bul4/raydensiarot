import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Brush, Compass, Pencil } from "lucide-react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import {
  SITE_MSA_UTA_URL,
  SITE_RESUME_HREF,
  SITE_SIARIA_LABS_URL,
} from "@/lib/site-links";
import { PROFILE_PHOTO_SRC } from "@/lib/profile-photo";

const IMG = {
  profile: PROFILE_PHOTO_SRC,
  siaria:
    "https://lh3.googleusercontent.com/aida/ADBb0uhb87DfVZRVt5n0FJBWG6ItefxKpU_EMSnRfHT-F8dhZhHwmEv2w9bTr_5txzZ17kk97s6_UIk1vVcXKcN9m9LkbvLJMt4UNP9K1keKrB3-ZyXtQ5R1QsxGqKONuUGJDgAvkjd12hooKvlevEyAovg5tWeL-K9sMgY9UsECrDj_Lmznrh3kYbpLC9fPDtESmKjMuN9qHGXvgG01rQI63MCq_awpdmmMpSVxWAX569ux8w_53RPQLBVCNAiYEcub-LUfTUDTmMPt1FA",
  grounded:
    "https://lh3.googleusercontent.com/aida/ADBb0uj91YS6EZNG3VowYWpVC3JSddrEdRbYUqHCQyYoo2DlqRgURzyOazqsPrxW0n4SPHjQV6j3QxZ_3Blwar7YPeiBKLqWbY2_6T1Mrzeg_QpebQctH65TjBdIsGiD06VQQP_XbqeN5CqwF7_kMn0qCvSyueVcjk3-xFY5BDmXHJ3NO1Lfab3SHv119t_Tr2xNSH9bhpioDTrq8U0bW4CxMvWgOx0xQ78rxXl2EkvEEAxVQWPn-BqgJ8LZSgvZnKmHKMJHzAq-3jKlE3I",
  msa: "https://lh3.googleusercontent.com/aida/ADBb0ujWMk4fsfdKhxXH2Y2uuAn15wOEVdzLN3Q_xYWkKbmvIQ148HibweKc3PIMG00nBPJ4o4aoD3MCIc0j-29xIS05Ry4piU1ML0bzBzlkJb2MJODJ9xyqvibq5Lswmbmi74PAWhdM9KfJHJingmAwyMXc7Nfe8NZJtzfpJXBV6Z6uVTzA_iamLC7l91FXrApBaqxBWkaIb7wrjPB6TNKERYyzQ7SQxuPip039KUZRx3x4HdkMZ8lhOGngkS8Q2ZlbCnswk-5gaLFvvZQ",
} as const;

const BORDER = "border-[#af101a]";
const HEADLINE = "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";
const BODY = "[font-family:var(--font-stitch-body),ui-sans-serif,sans-serif]";

function Hanko({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex h-6 w-6 items-center justify-center text-white"
      style={{ backgroundColor: "#af101a" }}
    >
      {children}
    </div>
  );
}

export function StitchSiariaLanding() {

  return (
    <div
      className={`flex min-h-dvh flex-col bg-[#fff9e8] text-[#1e1c0b] ${BODY}`}
    >
      <main className="mx-auto w-full max-w-7xl flex-1 p-4 md:p-8">
        {/* Hero — bento */}
        <section
          className={`mb-8 grid grid-cols-1 gap-0 border md:grid-cols-12 ${BORDER}`}
        >
          <div
            className={`flex min-h-[500px] flex-col justify-between bg-[#fff9e8] p-12 md:col-span-8 md:border-r md:p-24 ${BORDER}`}
          >
            <Hanko>
              <Compass className="h-3.5 w-3.5" strokeWidth={2} />
            </Hanko>
            <div>
              <span
                className={`mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#af101a]`}
              >
                Hey, I&apos;m Rayden
              </span>
              <h1
                className={`mb-6 text-5xl font-extrabold leading-none tracking-tighter text-[#af101a] md:text-7xl lg:text-8xl ${HEADLINE}`}
              >
                UI DESIGNER &amp; BRAND STRATEGIST
              </h1>
              <p className="max-w-md text-lg leading-relaxed opacity-80 md:text-xl">
                Specializing in high-fidelity implementation and aesthetic logic.
              </p>
            </div>
          </div>
          <div className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden bg-[#f5eed2] p-8 md:col-span-4 md:min-h-0">
            <Image
              src={IMG.profile}
              alt="Rayden Siarot"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="relative z-10 text-center">
              <Link
                href="/about"
                className="group block rounded-sm bg-[#fff9e8]/90 px-5 py-4 shadow-sm backdrop-blur-[1px]"
              >
                <span
                  className={`mb-2 block text-4xl font-bold uppercase tracking-tighter text-[#af101a] ${HEADLINE}`}
                >
                  Read
                </span>
                <span
                  className={`block text-4xl font-bold uppercase tracking-tighter text-[#1e1c0b] group-hover:text-[#af101a] ${HEADLINE}`}
                >
                  About me
                </span>
              </Link>
            </div>
            <div className="absolute bottom-4 right-4 z-10">
              <Hanko>
                <Brush className="h-3.5 w-3.5" strokeWidth={2} />
              </Hanko>
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2
              className={`text-3xl font-bold uppercase tracking-tighter text-[#af101a] ${HEADLINE}`}
            >
              Selected work
            </h2>
            <div className="mx-4 h-px flex-grow bg-[#af101a]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#1e1c0b]">
              Est. 2023
            </span>
          </div>
          <div className={`grid grid-cols-1 gap-0 border md:grid-cols-3 ${BORDER}`}>
            <Link
              href={SITE_SIARIA_LABS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer flex-col overflow-hidden border-b border-[#af101a] bg-[#fff9e8] md:col-span-2 md:row-span-2 md:border-b-0 md:border-r"
            >
              <div
                className={`flex items-center justify-between border-b bg-[#fff9e8] p-8 ${BORDER}`}
              >
                <h3 className={`text-2xl font-bold uppercase tracking-tight ${HEADLINE}`}>
                  Siaria Labs
                </h3>
                <ArrowUpRight className="h-5 w-5 text-[#af101a]" />
              </div>
              <div className="relative aspect-video bg-black">
                <Image
                  src={IMG.siaria}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div className="flex flex-grow flex-col justify-center p-10 md:p-14">
                <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#af101a]">
                  Role: Co-founder &amp; lead designer
                </span>
                <p className="max-w-2xl text-xl font-medium leading-relaxed md:text-2xl">
                  As co-founder and lead designer, I spearhead the creation of
                  fully custom digital solutions. We collaborate with clients to
                  deliver high-fidelity, functional web experiences and
                  comprehensive branding strategies that define powerful digital
                  identities.
                </p>
              </div>
              <div
                className="mt-auto flex items-center justify-between border-t border-[#af101a]/10 bg-white p-8"
              >
                <div className="flex gap-4">
                  <span className="border border-[#af101a]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    Agency
                  </span>
                  <span className="border border-[#af101a]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    Founding designer
                  </span>
                </div>
                <Hanko>
                  <BarChart3 className="h-3.5 w-3.5" strokeWidth={2} />
                </Hanko>
              </div>
            </Link>

            <Link
              href="/projects/grounded-talks"
              className="group cursor-pointer border-b border-[#af101a] bg-[#fff9e8] md:border-b"
            >
              <div className={`flex items-center justify-between border-b p-8 ${BORDER}`}>
                <h3 className={`text-xl font-bold uppercase tracking-tight ${HEADLINE}`}>
                  GroundedTalks: edutech platform
                </h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[#af101a]" />
              </div>
              <div className="aspect-square overflow-hidden bg-[#efe8cd]">
                <Image
                  src={IMG.grounded}
                  alt=""
                  width={800}
                  height={800}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
            </Link>

            <Link
              href={SITE_MSA_UTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full cursor-pointer flex-col bg-[#fbf4d8]"
            >
              <div className={`flex items-center justify-between border-b p-8 ${BORDER}`}>
                <h3 className={`text-xl font-bold uppercase tracking-tight ${HEADLINE}`}>
                  MSA at UTA website
                </h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[#af101a]" />
              </div>
              <div className="flex flex-grow items-center justify-center overflow-hidden">
                <Image
                  src={IMG.msa}
                  alt=""
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
            </Link>
          </div>
        </section>

        {/* Skills & mission */}
        <section className={`mb-8 grid grid-cols-1 gap-0 border md:grid-cols-2 ${BORDER}`}>
          <div className={`flex flex-col bg-[#fff9e8] p-12 md:border-r ${BORDER}`}>
            <h2
              className={`mb-12 text-3xl font-bold uppercase tracking-tighter text-[#af101a] ${HEADLINE}`}
            >
              Skills
            </h2>
            <div className="space-y-8">
              <div>
                <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-[#af101a]">
                  Design
                </span>
                <ul className={`space-y-2 text-xl uppercase tracking-tighter ${HEADLINE}`}>
                  <li>Visual hierarchy &amp; typography</li>
                  <li>Information architecture</li>
                  <li>Prototyping &amp; interaction design</li>
                  <li>Design systems &amp; component logic</li>
                </ul>
              </div>
              <div className="border-t border-[#e4beba] pt-8">
                <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-[#af101a]">
                  Development
                </span>
                <ul className={`space-y-2 text-xl uppercase tracking-tighter ${HEADLINE}`}>
                  <li>Responsive structural styling (HTML/CSS)</li>
                  <li>Interaction &amp; motion logic</li>
                  <li>Frontend implementation &amp; deployment</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[#f5eed2] p-12">
            <div>
              <h2
                className={`mb-12 text-3xl font-bold uppercase tracking-tighter text-[#af101a] ${HEADLINE}`}
              >
                My mission
              </h2>
              <p className="max-w-md text-lg leading-relaxed">
                I am a UI designer and creative developer dedicated to building
                high-fidelity digital products that balance aesthetic
                sophistication with technical performance. I specialize in
                turning complex data into intuitive, human-centric experiences.
              </p>
            </div>
            <div className="relative mt-12 border border-[#af101a] bg-[#fff9e8] p-8">
              <p className="text-sm italic">
                &ldquo;Design is the silent ambassador of your brand.&rdquo; —
                Paul Rand
              </p>
              <div className="absolute -bottom-3 -right-3">
                <Hanko>
                  <Pencil className="h-3.5 w-3.5" strokeWidth={2} />
                </Hanko>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact-cta"
          className="border border-[#af101a] bg-[#af101a] p-12 text-center md:p-24"
        >
          <h2
            className={`mb-8 text-4xl font-extrabold uppercase tracking-tighter text-[#fff9e8] md:text-6xl lg:text-7xl ${HEADLINE}`}
          >
            Looking for the bridge between design and deployment?
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link
              href="/contact"
              className={`w-full bg-[#fff9e8] px-12 py-4 font-extrabold uppercase tracking-widest text-[#af101a] transition-colors hover:bg-[#f5eed2] md:w-auto ${HEADLINE}`}
            >
              Get in contact
            </Link>
            <Link
              href={SITE_RESUME_HREF}
              className={`w-full border border-white px-12 py-4 font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-[#af101a] md:w-auto ${HEADLINE}`}
            >
              VIEW CV
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter className="mt-auto" />
    </div>
  );
}
