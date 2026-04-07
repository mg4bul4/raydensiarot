import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { ExitToHome } from "@/components/layout/ExitToHome";

const BORDER = "border-[#af101a]";
const HEADLINE =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";
const BODY = "[font-family:var(--font-stitch-body),ui-sans-serif,sans-serif]";

const IMG = {
  siaria:
    "https://lh3.googleusercontent.com/aida/ADBb0uhb87DfVZRVt5n0FJBWG6ItefxKpU_EMSnRfHT-F8dhZhHwmEv2w9bTr_5txzZ17kk97s6_UIk1vVcXKcN9m9LkbvLJMt4UNP9K1keKrB3-ZyXtQ5R1QsxGqKONuUGJDgAvkjd12hooKvlevEyAovg5tWeL-K9sMgY9UsECrDj_Lmznrh3kYbpLC9fPDtESmKjMuN9qHGXvgG01rQI63MCq_awpdmmMpSVxWAX569ux8w_53RPQLBVCNAiYEcub-LUfTUDTmMPt1FA",
  msa: "https://lh3.googleusercontent.com/aida/ADBb0ujWMk4fsfdKhxXH2Y2uuAn15wOEVdzLN3Q_xYWkKbmvIQ148HibweKc3PIMG00nBPJ4o4aoD3MCIc0j-29xIS05Ry4piU1ML0bzBzlkJb2MJODJ9xyqvibq5Lswmbmi74PAWhdM9KfJHJingmAwyMXc7Nfe8NZJtzfpJXBV6Z6uVTzA_iamLC7l91FXrApBaqxBWkaIb7wrjPB6TNKERYyzQ7SQxuPip039KUZRx3x4HdkMZ8lhOGngkS8Q2ZlbCnswk-5gaLFvvZQ",
  grounded:
    "https://lh3.googleusercontent.com/aida/ADBb0uj91YS6EZNG3VowYWpVC3JSddrEdRbYUqHCQyYoo2DlqRgURzyOazqsPrxW0n4SPHjQV6j3QxZ_3Blwar7YPeiBKLqWbY2_6T1Mrzeg_QpebQctH65TjBdIsGiD06VQQP_XbqeN5CqwF7_kMn0qCvSyueVcjk3-xFY5BDmXHJ3NO1Lfab3SHv119t_Tr2xNSH9bhpioDTrq8U0bW4CxMvWgOx0xQ78rxXl2EkvEEAxVQWPn-BqgJ8LZSgvZnKmHKMJHzAq-3jKlE3I",
  nafs: "https://lh3.googleusercontent.com/aida/ADBb0uhJhtcHuE1FW8r4NB0T5bBf2so_pGWRPVHQhvaRZBMXe6seH53cPFY1NtB3sfdt8FCYxFl05K9jM3unPI3LazAuN5yof1NMd-QwHs3Q3fbim67oRjH__ts1NuMR2L6F9qIVkUPJPFojalzLznB0T0e7yUmnmPdLLZD85NC9tCxldiDtLVLdnhb1IMaogaEdXX24dhJ3uKusTvnrdetfoH4sTVedlq1kYWtHPKspn1PPj4rlbmBxlQKPiqgDe8dBJ2mYnqClXMS6Wxc",
} as const;

const LINKEDIN_URL =
  typeof process.env.NEXT_PUBLIC_LINKEDIN_URL === "string"
    ? process.env.NEXT_PUBLIC_LINKEDIN_URL
    : "#";

const RESUME_URL =
  typeof process.env.NEXT_PUBLIC_RESUME_URL === "string"
    ? process.env.NEXT_PUBLIC_RESUME_URL
    : "/accomplishments.pdf";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-[#af101a] ${BORDER}`}
    >
      {children}
    </span>
  );
}

export function StitchProjectsIndex() {
  return (
    <div className={`min-h-dvh bg-[#fdf9ea] text-[#1e1c0b] ${BODY}`}>
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-4 sm:px-8 md:pb-24">
        <div className="relative z-20">
          <ExitToHome />
        </div>

        <header className="mb-16 grid grid-cols-12 gap-8 lg:mb-24">
          <div className="col-span-12 lg:col-span-8">
            <h1
              className={`text-[clamp(3rem,10vw,10rem)] font-black uppercase leading-[0.85] tracking-tighter text-[#D32F2F] ${HEADLINE}`}
            >
              My projects
            </h1>
          </div>
          <div className="col-span-12 hidden lg:col-span-4 lg:block" aria-hidden />
        </header>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Siaria — featured */}
          <article
            className={`relative col-span-12 grid grid-cols-12 gap-0 border bg-[#fff8dc] ${BORDER}`}
          >
            <div
              className="absolute right-0 top-0 z-10 flex h-12 w-12 items-center justify-center bg-[#af101a] text-white"
              aria-hidden
            >
              <Star className="h-5 w-5" fill="white" stroke="white" />
            </div>
            <div
              className={`relative col-span-12 min-h-[280px] overflow-hidden border-b bg-[#fff8dc] lg:col-span-7 lg:min-h-[420px] lg:border-b-0 lg:border-r ${BORDER}`}
            >
              <Image
                src={IMG.siaria}
                alt=""
                fill
                className="object-cover object-left"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
            </div>
            <div className="col-span-12 flex flex-col justify-between bg-[#fff8dc] p-10 lg:col-span-5 lg:p-16">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-1 w-12 bg-[#af101a]" />
                  <span
                    className={`text-sm font-bold uppercase tracking-widest text-[#af101a] ${HEADLINE}`}
                  >
                    Design agency
                  </span>
                </div>
                <h2
                  className={`mb-8 text-5xl font-bold uppercase tracking-tighter text-[#D32F2F] lg:text-7xl ${HEADLINE}`}
                >
                  Siaria Labs
                </h2>
                <p className="mb-10 text-lg leading-relaxed opacity-90">
                  As co-founder and lead designer at Siaria Labs, I lead the
                  development of bespoke digital solutions, focusing on the
                  intersection of technical excellence and visual authority.
                </p>
                <div className="mb-12 flex flex-wrap gap-2">
                  <Tag>Responsive structural styling</Tag>
                  <Tag>AI-augmented rapid prototyping</Tag>
                  <Tag>Interaction &amp; motion logic</Tag>
                  <Tag>Frontend implementation</Tag>
                </div>
              </div>
              <Link
                href="https://siaria.fyi"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 text-xl font-bold uppercase tracking-tighter text-[#1e1c0b] hover:text-[#af101a] ${HEADLINE}`}
              >
                View project
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </article>

          {/* MSA */}
          <article
            className={`col-span-12 flex flex-col border bg-[#fff8dc] lg:col-span-6 ${BORDER}`}
          >
            <div className="p-10 lg:p-12">
              <div className="mb-4 flex items-center gap-4">
                <span
                  className={`text-xs font-bold uppercase tracking-widest text-[#af101a] ${HEADLINE}`}
                >
                  Religious organization
                </span>
              </div>
              <h3
                className={`mb-6 text-4xl font-bold uppercase tracking-tighter text-[#D32F2F] ${HEADLINE}`}
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
            <div
              className={`relative mt-auto h-80 min-h-[240px] overflow-hidden border-t bg-[#fff8dc] ${BORDER}`}
            >
              <Image
                src={IMG.msa}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </article>

          {/* GroundedTalks */}
          <article
            className={`col-span-12 flex flex-col-reverse border bg-[#fff8dc] lg:col-span-6 lg:flex-col ${BORDER}`}
          >
            <div
              className={`relative h-80 min-h-[240px] overflow-hidden border-b bg-[#fff8dc] lg:border-b-0 lg:border-t ${BORDER}`}
            >
              <Link href="/projects/grounded-talks" className="absolute inset-0">
                <Image
                  src={IMG.grounded}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Link>
            </div>
            <div className="p-10 lg:p-12">
              <div className="mb-4 flex items-center gap-4">
                <span
                  className={`text-xs font-bold uppercase tracking-widest text-[#af101a] ${HEADLINE}`}
                >
                  Edu tech startup
                </span>
              </div>
              <h3
                className={`mb-6 text-4xl font-bold uppercase tracking-tighter text-[#D32F2F] ${HEADLINE}`}
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
            className={`col-span-12 flex flex-col border bg-[#fff8dc] p-8 lg:col-span-8 ${BORDER}`}
          >
            <span
              className={`mb-4 block text-xs font-bold uppercase tracking-widest text-[#af101a] ${HEADLINE}`}
            >
              Mobile UI design
            </span>
            <h3
              className={`mb-6 text-4xl font-bold uppercase tracking-tighter text-[#D32F2F] lg:text-5xl ${HEADLINE}`}
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
            <div className={`relative aspect-video w-full overflow-hidden border bg-[#fff8dc] ${BORDER}`}>
              <Image
                src={IMG.nafs}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
            <Link
              href="https://nafs.fyi"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase text-[#af101a] hover:underline ${HEADLINE}`}
            >
              Visit site
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          {/* CTA */}
          <article
            className={`col-span-12 flex flex-col justify-center border bg-[#af101a] p-10 text-white lg:col-span-4 ${BORDER}`}
          >
            <h4
              className={`mb-8 text-4xl font-black uppercase leading-none tracking-tighter lg:text-5xl ${HEADLINE}`}
            >
              Purposeful design. Proven strategy. Let&apos;s talk.
            </h4>
            <p className="mb-10 text-lg opacity-90">
              If I don&apos;t answer in 24 hours, coffee is on me.
            </p>
            <Link
              href="/#contact-cta"
              className={`inline-flex w-fit bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#af101a] transition-colors hover:bg-[#f5eed2] ${HEADLINE}`}
            >
              Contact me
            </Link>
          </article>
        </div>
      </div>

      <footer className={`border-t bg-[#fdf9ea] ${BORDER}`}>
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 px-8 py-12 md:flex-row">
          <div
            className={`text-[10px] font-bold uppercase tracking-widest text-[#af101a] ${HEADLINE}`}
          >
            Rayden Siarot {new Date().getFullYear()}
          </div>
          <p className="text-center text-[10px] uppercase tracking-widest text-[#1e1c0b] opacity-70">
            Portfolio &amp; selected work.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-[#1e1c0b] opacity-60 transition-colors hover:text-[#af101a] hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-[#1e1c0b] opacity-60 transition-colors hover:text-[#af101a] hover:underline"
            >
              My resume
            </a>
            <a
              href="https://siaria.fyi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-[#1e1c0b] opacity-60 transition-colors hover:text-[#af101a] hover:underline"
            >
              Siaria Labs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
