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
        <div className={`kanso-card mb-12 grid grid-cols-1 gap-0 border bg-[#fff9e8] md:grid-cols-12 ${BORDER}`}>
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
            className={`kanso-card flex flex-col gap-12 border bg-[#fbf4d8] p-8 md:col-span-2 md:p-12 ${BORDER}`}
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
                    Founder &amp; Lead Designer | JUN 2024 to PRESENT
                  </span>
                </div>
                <div className="max-w-2xl space-y-3 leading-relaxed text-[#1e1c0b]/80">
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
                    Co-Founder &amp; Creative Director | OCT 2023 to JUN 2024
                  </span>
                </div>
                <div className="max-w-2xl space-y-3 leading-relaxed text-[#1e1c0b]/80">
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
                    Co-Developer &amp; UI Lead | JAN 2024 to APR 2024
                  </span>
                </div>
                <div className="max-w-2xl space-y-3 leading-relaxed text-[#1e1c0b]/80">
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

          <div className="flex flex-col gap-8">
            <div
              className={`kanso-card flex flex-col border bg-[#efe8cd] p-8 ${BORDER}`}
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

            <div className={`kanso-card flex flex-col border bg-white p-8 ${BORDER}`}>
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
          className={`kanso-card flex flex-col items-center justify-between gap-8 border bg-[#af101a] p-10 text-white md:flex-row md:p-12 ${BORDER}`}
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
