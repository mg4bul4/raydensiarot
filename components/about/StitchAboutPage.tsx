import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Pencil } from "lucide-react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PROFILE_PHOTO_SRC } from "@/lib/profile-photo";

const HEADLINE =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";
const BODY = "[font-family:var(--font-stitch-body),ui-sans-serif,sans-serif]";
const BORDER = "border-[#af101a]";

const PHILOSOPHY = [
  "Functional Minimalism",
  "Implementation-First Design",
  "Agile Rapid Prototyping",
  "Holistic Brand Integrity",
] as const;

export function StitchAboutPage() {
  return (
    <div className={`min-h-dvh bg-[#fff9e8] text-[#1e1c0b] ${BODY}`}>
      <main className="mx-auto max-w-7xl px-6 pb-12 pt-4 sm:px-8 md:pb-16">
        {/* Hero + portrait */}
        <div className={`mb-12 grid grid-cols-1 gap-0 border bg-[#fff9e8] md:grid-cols-12 ${BORDER}`}>
          <div className="flex flex-col justify-between bg-[#fff9e8] p-8 md:col-span-8 md:p-12">
            <div>
              <h1
                className={`mb-8 text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#af101a] md:text-7xl lg:text-8xl ${HEADLINE}`}
              >
                Hey, I&apos;m{" "}
                <span className="inline-block bg-[#af101a] px-2 text-white">
                  Rayden
                </span>
              </h1>
              <p className="max-w-2xl text-xl font-medium leading-snug md:text-2xl lg:text-3xl">
                A visual-focused UI Designer &amp; Developer dedicated to crafting
                clean, intentional digital experiences. I transform complex data
                into functional, user-centric interfaces through the lens of Kanso
                minimalism.
              </p>
            </div>
          </div>
          <div
            className={`relative aspect-square min-h-[280px] border-t md:col-span-4 md:aspect-auto md:min-h-0 md:border-l md:border-t-0 ${BORDER}`}
          >
            <Image
              src={PROFILE_PHOTO_SRC}
              alt="Rayden Siarot"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Experience + side columns */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            className={`flex flex-col gap-12 border bg-[#fbf4d8] p-8 md:col-span-2 md:p-12 ${BORDER}`}
          >
            <div className="flex items-start justify-between">
              <h2
                className={`text-3xl font-black uppercase tracking-tighter text-[#af101a] ${HEADLINE}`}
              >
                Professional Experience
              </h2>
              <GraduationCap
                className="h-8 w-8 shrink-0 text-[#af101a]"
                strokeWidth={1.5}
                aria-hidden
              />
            </div>
            <div className="space-y-16">
              <div className="border-l border-[#af101a] pl-6">
                <div className="mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between">
                  <h3
                    className={`text-xl font-bold uppercase tracking-tight ${HEADLINE}`}
                  >
                    Ark Design Agency
                  </h3>
                  <span
                    className={`text-sm font-bold text-[#af101a] ${BODY}`}
                  >
                    Senior UI Designer | JUN 2024 — PRESENT
                  </span>
                </div>
                <p className="max-w-2xl leading-relaxed text-[#1e1c0b]/80">
                  Leading design systems and high-fidelity interface design for
                  global enterprise clients, focusing on data-heavy dashboard
                  ecosystems.
                </p>
              </div>
              <div className="border-l border-[#af101a] pl-6">
                <div className="mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between">
                  <h3
                    className={`text-xl font-bold uppercase tracking-tight ${HEADLINE}`}
                  >
                    GroundedTalks
                  </h3>
                  <span
                    className={`text-sm font-bold text-[#af101a] ${BODY}`}
                  >
                    Lead Visual Designer | OCT 2023 — JUN 2024
                  </span>
                </div>
                <p className="max-w-2xl leading-relaxed text-[#1e1c0b]/80">
                  Defined the visual identity and mobile experience for a
                  sustainable-tech podcast and media platform.
                </p>
              </div>
              <div className="border-l border-[#af101a] pl-6">
                <div className="mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between">
                  <h3
                    className={`text-xl font-bold uppercase tracking-tight ${HEADLINE}`}
                  >
                    Tomorrow&apos;s Leaders Today
                  </h3>
                  <span
                    className={`text-sm font-bold text-[#af101a] ${BODY}`}
                  >
                    UI Developer Intern | JAN 2024 — APR 2024
                  </span>
                </div>
                <p className="max-w-2xl leading-relaxed text-[#1e1c0b]/80">
                  Bridging the gap between design and code by implementing
                  responsive web components and interactive prototypes.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div
              className={`flex flex-col border bg-[#efe8cd] p-8 ${BORDER}`}
            >
              <h2
                className={`mb-6 text-2xl font-black uppercase tracking-tighter text-[#af101a] ${HEADLINE}`}
              >
                DESIGN PHILOSOPHY
              </h2>
              <ul
                className={`space-y-2 text-lg font-bold uppercase tracking-tight ${HEADLINE}`}
              >
                {PHILOSOPHY.map((line) => (
                  <li key={line} className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 bg-[#af101a]" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`flex flex-col border bg-white p-8 ${BORDER}`}>
              <div className="mb-6 flex items-start justify-between">
                <h2
                  className={`text-2xl font-black uppercase tracking-tighter text-[#af101a] ${HEADLINE}`}
                >
                  PERSPECTIVE
                </h2>
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#af101a] text-white"
                  aria-hidden
                >
                  <Pencil className="h-5 w-5" strokeWidth={2} />
                </div>
              </div>
              <p className="italic leading-relaxed text-[#1e1c0b]">
                &ldquo;I view every pixel through a dual lens: aesthetic grace
                and business impact. I design for the brand&apos;s longevity,
                turning complex problems into simple, high-fidelity solutions that
                stand the test of time.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col items-center justify-between gap-8 border bg-[#af101a] p-10 text-white md:flex-row md:p-12 ${BORDER}`}
        >
          <h2
            className={`text-center text-3xl font-black uppercase tracking-tighter md:text-left md:text-4xl lg:text-5xl ${HEADLINE}`}
          >
            Let&apos;s build something
            <br />
            intentional together.
          </h2>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <p
              className={`text-center text-sm uppercase tracking-widest opacity-80 md:text-right ${BODY}`}
            >
              If I don&apos;t answer in 24 hours, coffee is on me
            </p>
            <Link
              href="/contact"
              className={`bg-white px-12 py-4 text-xl font-bold uppercase tracking-tighter text-[#af101a] transition-colors duration-200 hover:bg-[#f5eed2] ${HEADLINE}`}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
