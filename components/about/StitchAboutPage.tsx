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
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-6 sm:px-8 sm:pb-20 lg:pt-8">
        {/* Hero + portrait */}
        <section
          className={`kanso-card mb-12 grid grid-cols-1 overflow-hidden border bg-[#fff9e8] md:mb-16 md:grid-cols-12 ${BORDER}`}
        >
          <div className="flex flex-col justify-center bg-[#fff9e8] p-8 sm:p-10 md:col-span-7 md:p-12 lg:p-14">
            <div>
              <h1
                className={`mb-6 text-4xl font-black uppercase leading-[0.92] tracking-tight text-[#af101a] sm:text-5xl md:text-6xl lg:text-7xl ${HEADLINE}`}
              >
                Hey, I&apos;m{" "}
                <span className="inline-block bg-[#af101a] px-2 text-white">
                  Rayden
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[#1e1c0b]/88 sm:text-lg md:text-[1.125rem]">
                UI Designer &amp; Brand Strategist dedicated to building purposeful
                digital identities and user-centric interfaces. My approach is rooted
                in a disciplined design process that balances aesthetic grace with
                strategic market insights. I am eager to apply my experience in
                high-fidelity prototyping and visual logic to help collaborative
                teams solve complex brand and product challenges.
              </p>
            </div>
          </div>
          <div
            className={`relative aspect-[4/3] min-h-[320px] border-t md:col-span-5 md:aspect-auto md:min-h-0 md:border-l md:border-t-0 ${BORDER}`}
          >
            <Image
              src={PROFILE_PHOTO_SRC}
              alt="Rayden Siarot"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 42vw"
              priority
            />
          </div>
        </section>

        {/* Editorial split: long-form background left, quick-scan cards right */}
        <section className="mb-12 grid grid-cols-1 gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-10">
          <div
            className={`kanso-card flex flex-col gap-10 border bg-[#fbf4d8] p-8 sm:p-10 lg:col-span-8 lg:gap-12 lg:p-12 ${BORDER}`}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#af101a]/20 pb-5">
              <h2
                className={`text-2xl font-black uppercase leading-tight tracking-tight text-[#af101a] sm:text-3xl ${HEADLINE}`}
              >
                Professional Experience
              </h2>
              <GraduationCap
                className="h-8 w-8 shrink-0 text-[#af101a]"
                strokeWidth={1.5}
                aria-hidden
              />
            </div>
            <div className="space-y-10 sm:space-y-12">
              <div className="border-l-2 border-[#af101a]/80 pl-5 sm:pl-6">
                <div className="mb-3 flex flex-col gap-2 xl:flex-row xl:items-baseline xl:justify-between">
                  <h3
                    className={`text-lg font-bold uppercase tracking-tight text-[#1e1c0b] sm:text-xl ${HEADLINE}`}
                  >
                    Ark Design Agency
                  </h3>
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.08em] text-[#af101a] sm:text-sm ${BODY}`}
                  >
                    Founder &amp; Lead Designer | JUN 2024 to PRESENT
                  </span>
                </div>
                <div className="max-w-2xl space-y-3 text-[15px] leading-7 text-[#1e1c0b]/82 sm:text-base">
                  <p>
                    Led end-to-end design strategy for a range of clients, delivering
                    high-fidelity UI/UX, brand identity systems, and responsive web
                    experiences built in React and Tailwind CSS.
                  </p>
                  <p>
                    Established scalable design systems and information architecture
                    frameworks that improved navigation and consistency across complex
                    digital products.
                  </p>
                  <p>
                    Owned the full project lifecycle from stakeholder discovery and
                    user research through implementation, ensuring outcomes aligned
                    with user needs and business goals.
                  </p>
                </div>
              </div>
              <div className="border-l-2 border-[#af101a]/80 pl-5 sm:pl-6">
                <div className="mb-3 flex flex-col gap-2 xl:flex-row xl:items-baseline xl:justify-between">
                  <h3
                    className={`text-lg font-bold uppercase tracking-tight text-[#1e1c0b] sm:text-xl ${HEADLINE}`}
                  >
                    GroundedTalks
                  </h3>
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.08em] text-[#af101a] sm:text-sm ${BODY}`}
                  >
                    Co-Founder &amp; Creative Director | OCT 2023 to JUN 2024
                  </span>
                </div>
                <div className="max-w-2xl space-y-3 text-[15px] leading-7 text-[#1e1c0b]/82 sm:text-base">
                  <p>
                    Shaped the digital brand identity for a community-focused startup,
                    leading creation of visual assets, social content, and web
                    interfaces from the ground up.
                  </p>
                  <p>
                    Translated mission and brand values into cohesive user journeys
                    with cross-functional teams, supporting measurable growth in
                    engagement and retention.
                  </p>
                  <p>
                    Designed and refined digital marketing touchpoints using
                    performance insights to strengthen visual hierarchy and messaging
                    effectiveness.
                  </p>
                </div>
              </div>
              <div className="border-l-2 border-[#af101a]/80 pl-5 sm:pl-6">
                <div className="mb-3 flex flex-col gap-2 xl:flex-row xl:items-baseline xl:justify-between">
                  <h3
                    className={`text-lg font-bold uppercase tracking-tight text-[#1e1c0b] sm:text-xl ${HEADLINE}`}
                  >
                    Tomorrow&apos;s Leaders Today
                  </h3>
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.08em] text-[#af101a] sm:text-sm ${BODY}`}
                  >
                    Co-Developer &amp; UI Lead | JAN 2024 to APR 2024
                  </span>
                </div>
                <div className="max-w-2xl space-y-3 text-[15px] leading-7 text-[#1e1c0b]/82 sm:text-base">
                  <p>
                    Led a full UI/UX overhaul of a student organization platform
                    serving 500+ members, with emphasis on accessibility and inclusive
                    design.
                  </p>
                  <p>
                    Bridged design and engineering by building frontend components,
                    ensuring high-fidelity execution and a smooth design-to-dev
                    handoff.
                  </p>
                  <p>
                    Ran user feedback sessions to uncover pain points and guide
                    iterative improvements, resulting in a more intuitive and engaging
                    digital experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-4">
            <div
              className={`kanso-card flex flex-col border bg-[#efe8cd] p-8 sm:p-9 ${BORDER}`}
            >
              <h2
                className={`mb-5 text-xl font-black uppercase tracking-tight text-[#af101a] sm:text-2xl ${HEADLINE}`}
              >
                DESIGN PHILOSOPHY
              </h2>
              <ul
                className={`space-y-3 text-base font-bold uppercase tracking-tight text-[#1e1c0b] sm:text-lg ${HEADLINE}`}
              >
                {PHILOSOPHY.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="h-2 w-2 shrink-0 bg-[#af101a]" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`kanso-card flex flex-col border bg-white p-8 sm:p-9 ${BORDER}`}>
              <div className="mb-6 flex items-start justify-between">
                <h2
                  className={`text-xl font-black uppercase tracking-tight text-[#af101a] sm:text-2xl ${HEADLINE}`}
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
              <p className="text-base italic leading-8 text-[#1e1c0b]/90">
                &ldquo;I view every pixel through a dual lens: aesthetic grace
                and business impact. I design for the brand&apos;s longevity,
                turning complex problems into simple, high-fidelity solutions that
                stand the test of time.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className={`kanso-card flex flex-col items-start justify-between gap-8 border bg-[#af101a] p-8 text-white sm:p-10 md:flex-row md:items-center md:p-12 ${BORDER}`}
        >
          {/* Keep CTA left-aligned on mobile for easier scan/read rhythm. */}
          <h2
            className={`text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl lg:text-5xl ${HEADLINE}`}
          >
            Let&apos;s build something
            <br />
            intentional together.
          </h2>
          <div className="flex w-full flex-col items-start gap-4 md:w-auto md:items-end">
            <p
              className={`text-sm uppercase tracking-[0.12em] text-white/85 md:text-right ${BODY}`}
            >
              If I don&apos;t answer in 24 hours, coffee is on me
            </p>
            <Link
              href="/contact"
              className={`inline-flex min-h-[48px] items-center justify-center bg-white px-10 py-3 text-lg font-bold uppercase tracking-tight text-[#af101a] transition-colors duration-200 hover:bg-[#f5eed2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${HEADLINE}`}
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
