"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HankoMarker } from "@/components/kanso/HankoMarker";
import { SectionLabel } from "@/components/kanso/SectionLabel";
import { LightboxImage } from "@/components/ui/LightboxImage";

const snap = { duration: 0.25, ease: [0.4, 0, 0.2, 1] as const };

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.03 },
  },
};

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: snap,
  },
};

const GT_WIREFRAMES = [
  {
    title: "Landing page",
    src: "/projects/grounded-talks/wireframe-landing-page.png",
    alt: "Low-fidelity wireframe for the GroundedTalks landing page.",
  },
  {
    title: "Career page",
    src: "/projects/grounded-talks/wireframe-career-page.png",
    alt: "Low-fidelity wireframe for the GroundedTalks career exploration page.",
  },
  {
    title: "Career insights visualizer",
    src: "/projects/grounded-talks/wireframe-career-insights-visualizer.png",
    alt: "Low-fidelity wireframe for the career insights visualizer layout.",
  },
] as const;

const FINAL_SCREENS = [
  {
    title: "Landing page",
    src: "/projects/grounded-talks/final-screen-01-landing.png",
    alt: "High-fidelity GroundedTalks landing page with hero, career preview, and mentor logos.",
  },
  {
    title: "Explore careers",
    src: "/projects/grounded-talks/final-screen-02-explore-careers.png",
    alt: "High-fidelity Explore Careers screen with career path cards.",
  },
  {
    title: "Career insights visualizer",
    src: "/projects/grounded-talks/final-screen-03-career-insights-visualizer.png",
    alt: "High-fidelity Career Insights Visualizer with skill plot and career compass.",
  },
] as const;

const PERSONA_CARDS = [
  {
    src: "/projects/grounded-talks/persona-peter-openminded-explorer.png",
    alt: "UX persona card: Peter Dawson, The Openminded Explorer. Goals, frustrations, and needs.",
    caption: "Peter Dawson · The Openminded Explorer",
  },
  {
    src: "/projects/grounded-talks/persona-aliyah-mastermind.png",
    alt: "UX persona card: Aliyah Saad, The Mastermind. Goals, frustrations, and needs.",
    caption: "Aliyah Saad · The Mastermind",
  },
] as const;

function SectionSpacer() {
  return <div className="h-16 md:h-24" aria-hidden />;
}

/** Section title with hanko; preserves exact title casing from copy. */
function CaseSectionTitle({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <HankoMarker />
      <h2
        id={id}
        className="kanso-heading text-xl font-bold leading-tight tracking-tight text-[#af101a] sm:text-2xl md:text-3xl"
      >
        {children}
      </h2>
    </div>
  );
}

function Prose({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mt-6 max-w-prose text-base leading-relaxed text-black/85 sm:text-[17px] ${className}`}
    >
      {children}
    </p>
  );
}

function OverviewCell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-[#af101a] bg-[#F5EED7] p-6 sm:p-7">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
        {label}
      </p>
      <div className="mt-3 text-sm leading-relaxed text-black/88 sm:text-[15px]">
        {children}
      </div>
    </div>
  );
}

function WireframeFigure({
  title,
  src,
  alt,
}: {
  title: string;
  src: string;
  alt: string;
}) {
  return (
    <figure className="flex flex-col">
      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#af101a]">
        {title}
      </h3>
      <div className="mt-4 overflow-hidden rounded-sm border border-[#af101a] bg-white p-2 sm:p-3">
        <div className="relative aspect-[4/3] w-full">
          <LightboxImage
            src={src}
            alt={alt}
            fill
            containerClassName="absolute inset-0"
            imgClassName="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 280px"
          />
        </div>
      </div>
    </figure>
  );
}

function FinalScreenFigure({
  title,
  src,
  alt,
}: {
  title: string;
  src: string;
  alt: string;
}) {
  return (
    <figure className="flex flex-col">
      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#af101a]">
        {title}
      </h3>
      <div className="mt-4 overflow-hidden rounded-sm border border-[#af101a] bg-[#F5EED7] p-2 sm:p-3">
        <div className="relative aspect-[16/10] w-full">
          <LightboxImage
            src={src}
            alt={alt}
            fill
            containerClassName="absolute inset-0"
            imgClassName="object-contain object-center"
            sizes="(max-width: 896px) 100vw, 800px"
          />
        </div>
      </div>
    </figure>
  );
}

function ResearchStat({
  title,
  stat,
  description,
}: {
  title: string;
  stat: string;
  description: ReactNode;
}) {
  return (
    <div className="border border-[#af101a] bg-white p-6 sm:p-7">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
        {title}
      </p>
      <p className="kanso-heading mt-3 text-3xl font-bold tabular-nums tracking-tight text-[#af101a] sm:text-4xl">
        {stat}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-black/85">{description}</p>
    </div>
  );
}

export function GroundedTalksDebrief() {
  return (
    <div className="min-h-dvh bg-[#fff8dc] text-black">
      <motion.main
        className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-24 sm:px-10 md:px-12 md:pb-32 md:pt-28"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* 1. Hero */}
        <motion.header variants={fade} className="mb-2">
          <div className="flex justify-end">
            <Link
              href="/projects"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-black transition-colors duration-200 hover:text-[#af101a] sm:text-[11px]"
            >
              ← THE_ARCHIVE
            </Link>
          </div>
          <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.28em] text-black/50">
            CASE_STUDY
          </p>
          <h1 className="kanso-heading mt-3 text-[clamp(2rem,7vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-[#af101a]">
            GroundedTalks
          </h1>
          <p className="mt-6 max-w-prose text-lg font-medium leading-snug text-black/90 sm:text-xl">
            I reached{" "}
            <strong className="font-semibold text-black">300+ students</strong>{" "}
            with a discovery platform that connected them to real industry voices,
            not generic blog posts.
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-black/85 sm:text-[17px]">
            I owned end-to-end UX for that bridge: mentor-led advice, scannable
            career paths, and a system students could trust when they already felt
            behind.
          </p>
          <div className="mt-12 overflow-hidden rounded-sm border border-[#af101a] bg-[#F5EED7] p-3 sm:p-4">
            <div className="relative w-full">
              <LightboxImage
                src="/projects/grounded-talks/case-study-hero-mockup.png"
                alt="High-fidelity GroundedTalks mockup showing desktop and mobile landing experience"
                width={1600}
                height={1000}
                className="w-full"
                imgClassName="h-auto w-full object-contain"
                sizes="(max-width: 896px) 100vw, 800px"
                priority
              />
            </div>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
              High-fidelity mockup: landing (desktop &amp; mobile)
            </p>
          </div>
        </motion.header>

        <SectionSpacer />

        {/* 2. Project overview */}
        <motion.section variants={fade} aria-labelledby="overview-h">
          <SectionLabel id="overview-h">Project overview</SectionLabel>
          <Prose className="mt-6">
            <strong className="font-semibold text-black">300+ students</strong>{" "}
            informed the roadmap; I translated that signal into a mentor-led
            discovery platform students actually finished reading.
          </Prose>
          <Prose className="mt-4">
            Below is how I scoped the work (role, timeline, stack) before I unpack
            the problem I solved and the system I shipped.
          </Prose>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <OverviewCell label="Role">
              <p>Creative Lead, UX Design</p>
            </OverviewCell>
            <OverviewCell label="Timeline">
              <p>8 Months (Oct 2023 – Jun 2024)</p>
            </OverviewCell>
            <OverviewCell label="Tools">
              <p>Figma, Squarespace, HTML, CSS, Canva</p>
            </OverviewCell>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <OverviewCell label="The Problem">
              <p>
                <strong className="font-semibold text-black">
                  Students were flying blind:
                </strong>{" "}
                scattered Google results and outdated major maps did not translate
                into confident next steps.
              </p>
              <p className="mt-3">
                I focused the brief on emotional truth:{" "}
                <strong className="font-semibold text-black">
                  anxiety, not ignorance
                </strong>
                . That is what kills exploration before it starts.
              </p>
            </OverviewCell>
            <OverviewCell label="The Solution">
              <p>
                I shipped a{" "}
                <strong className="font-semibold text-black">
                  single discovery hub
                </strong>
                : browse fields, read mentor-specific guidance, and pull from a
                curated article library with one coherent voice, not ten tabs.
              </p>
              <p className="mt-3">
                I prioritized{" "}
                <strong className="font-semibold text-black">
                  low-friction scanning
                </strong>{" "}
                because overwhelmed users do not finish long reads; they bail.
              </p>
            </OverviewCell>
          </div>
        </motion.section>

        <SectionSpacer />

        {/* 3. The challenge */}
        <motion.section variants={fade} aria-labelledby="challenge-h">
          <CaseSectionTitle id="challenge-h">
            Bridging the Gap Between Academia and Reality
          </CaseSectionTitle>
          <Prose>
            Generic search and syllabus-adjacent advice widen the gap between what
            classrooms teach and what hiring managers expect.
          </Prose>
          <Prose>
            I pressure-tested the problem with one question: &ldquo;If I was a
            curious freshman in my first semester, what would I actually open when I
            panicked about my major?&rdquo;
          </Prose>
          <Prose>
            That constraint forced me to translate{" "}
            <strong className="font-semibold text-black">
              dense industry nuance
            </strong>{" "}
            into layouts a stressed student could parse in under a minute, because
            comprehension is the real product.
          </Prose>
        </motion.section>

        <SectionSpacer />

        {/* 4. Research & discovery */}
        <motion.section variants={fade} aria-labelledby="research-h">
          <CaseSectionTitle id="research-h">Validating the Problem</CaseSectionTitle>
          <Prose>
            I ran surveys across{" "}
            <strong className="font-semibold text-black">
              3 college campuses in Dallas
            </strong>{" "}
            and captured{" "}
            <strong className="font-semibold text-black">300+ responses</strong>{" "}
            because I needed quantitative proof before I defended a single layout.
          </Prose>
          <Prose className="mt-4">
            The pattern held: students were not lazy; they were{" "}
            <strong className="font-semibold text-black">under-informed</strong>{" "}
            and time-poor.
          </Prose>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ResearchStat
              title="Insight 1"
              stat="87%"
              description={
                <>
                  Said they felt <strong className="font-semibold text-black">lost</strong>{" "}
                  in their career journey. That signal was loud enough to anchor the
                  entire IA.
                </>
              }
            />
            <ResearchStat
              title="Insight 2"
              stat="62%"
              description={
                <>
                  Reported <strong className="font-semibold text-black">major confusion</strong>
                  , so I designed for exploratory browsing, not linear funnels.
                </>
              }
            />
            <ResearchStat
              title="Insight 3"
              stat="50%"
              description={
                <>
                  Felt <strong className="font-semibold text-black">unprepared</strong> for
                  the workforce. That was my proof to foreground concrete skills language.
                </>
              }
            />
          </div>
          <Prose>
            I interviewed professionals at companies including OE, 2020INC, and The
            Paak to stress-test how advice should sound when it leaves Slack and lands
            in a student&apos;s hands.
          </Prose>
          <Prose className="mt-4">
            I translated those conversations into personas (&ldquo;The Openminded
            Explorer&rdquo; and &ldquo;The Mastermind&rdquo;) so every screen choice
            answered{" "}
            <strong className="font-semibold text-black">
              which mindset I was protecting
            </strong>
            , not just which feature shipped next.
          </Prose>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
            {PERSONA_CARDS.map((p) => (
              <figure key={p.src} className="flex flex-col">
                <div className="overflow-hidden rounded-sm border border-[#af101a] bg-white p-2 sm:p-3">
                  <LightboxImage
                    src={p.src}
                    alt={p.alt}
                    width={1200}
                    height={1600}
                    className="w-full"
                    imgClassName="h-auto w-full object-contain object-top"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <figcaption className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </motion.section>

        <SectionSpacer />

        {/* 5. Ideation & wireframing */}
        <motion.section variants={fade} aria-labelledby="ideation-h">
          <CaseSectionTitle id="ideation-h">
            Keeping It Simple &amp; Gamified
          </CaseSectionTitle>
          <Prose>
            I mapped the journey first because I needed to see every redundant hop
            between curiosity and a concrete takeaway.
          </Prose>
          <Prose className="mt-4">
            I stayed in low-fidelity wireframes until stakeholders argued about flow,
            not decoration. Cheap iteration beats polished dead ends.
          </Prose>
          <h3 className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-[#af101a]">
            The &ldquo;Why&rdquo; behind the UI
          </h3>
          <Prose>
            I gamified the surface because a deep mentor database reads intimidating
            unless I borrow patterns people already understand from dashboards and
            progress trackers.
          </Prose>
          <Prose className="mt-4">
            Light game language gave me permission to chunk dense advice into{" "}
            <strong className="font-semibold text-black">digestible wins</strong>{" "}
            instead of walls of text.
          </Prose>
          <h3 className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-[#af101a]">
            The &ldquo;Why&rdquo; behind the Branding
          </h3>
          <Prose>
            I built a &ldquo;Cup of Joe&rdquo; palette from espresso browns, latte
            beiges, and frothy whites. I needed the brand to feel like a calm café
            conversation, not a corporate portal.
          </Prose>
          <Prose className="mt-4">
            Warmth was strategic: it lowers defensive scanning and buys the trust I
            needed before students commit time to long-form mentor content.
          </Prose>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-3">
            {GT_WIREFRAMES.map((w) => (
              <WireframeFigure
                key={w.title}
                title={w.title}
                src={w.src}
                alt={w.alt}
              />
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#af101a]">
              Color palette &amp; typefaces
            </h3>
            <div className="mt-4 overflow-hidden rounded-sm border border-[#af101a] bg-white p-3 sm:p-4">
              <div className="relative w-full">
                <LightboxImage
                  src="/projects/grounded-talks/case-study-style-guide.png"
                  alt="GroundedTalks style guide: Helvetica Neue, Open Sans, Raleway, color swatches Creme Latte Coffee, and logotype"
                  width={1200}
                  height={800}
                  className="w-full"
                  imgClassName="h-auto w-full object-contain"
                  sizes="(max-width: 896px) 100vw, 800px"
                />
              </div>
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
                Typography, palette, and logo lockup
              </p>
            </div>
          </div>
        </motion.section>

        <SectionSpacer />

        {/* 6. Iteration & prototyping */}
        <motion.section variants={fade} aria-labelledby="iteration-h">
          <CaseSectionTitle id="iteration-h">Refining the Flow</CaseSectionTitle>
          <Prose>
            Usability tests surfaced what I hoped: users loved the{" "}
            <strong className="font-semibold text-black">skills blueprint</strong>{" "}
            and the mentor exploration loop.
          </Prose>
          <Prose className="mt-4">
            They also exposed where I over-designed. Some flows trapped people in{" "}
            <strong className="font-semibold text-black">navigation loops</strong>,
            and mentor articles felt heavier than the scanning behavior I was asking
            for.
          </Prose>
          <Prose className="mt-4">
            I treated that as a signal to simplify, not defend: I rebuilt IA around
            scannable data, tightened hierarchy, and cut copy so discovery stayed the
            hero.
          </Prose>
          <Prose className="mt-4">
            That pivot cost polish time, but it bought clarity:{" "}
            <strong className="font-semibold text-black">
              humility in testing beats ego in Figma
            </strong>
            .
          </Prose>
          <div className="mt-10 w-full overflow-hidden rounded-sm border border-[#af101a] bg-[#f4f4f4]">
            <iframe
              title="GroundedTalks Figma prototype"
              className="block h-[min(520px,78vh)] w-full min-h-[360px] sm:h-[600px] sm:min-h-[600px]"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJCudWWWOUFPvT874qDMIGH%3Fnode-id%3D618-338%26t%3DZT80TGs74DUIt1r2-6"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
            Interactive prototype (Figma)
          </p>
        </motion.section>

        <SectionSpacer />

        {/* 7. Final design & solution */}
        <motion.section variants={fade} aria-labelledby="final-h">
          <CaseSectionTitle id="final-h">
            A Frictionless Discovery Platform
          </CaseSectionTitle>
          <Prose>
            I unified typography, spacing, and content modules so marketing pages and
            in-product reading felt like the same institution.
          </Prose>
          <Prose className="mt-4">
            The shipped experience pairs a{" "}
            <strong className="font-semibold text-black">
              mentor matching directory
            </strong>{" "}
            with article templates that break complex industries into headings,
            pull-quotes, and supporting visuals, because structure is how I respect
            cognitive load.
          </Prose>
          <div className="mt-10 space-y-12">
            {FINAL_SCREENS.map((screen) => (
              <FinalScreenFigure
                key={screen.src}
                title={screen.title}
                src={screen.src}
                alt={screen.alt}
              />
            ))}
          </div>
        </motion.section>

        <SectionSpacer />

        {/* 8. Impact & results */}
        <motion.section variants={fade} aria-labelledby="impact-h">
          <CaseSectionTitle id="impact-h">User Reception</CaseSectionTitle>
          <Prose>
            Session feedback skewed positive on confidence: students said the
            platform made the future feel actionable, not abstract.
          </Prose>
          <Prose className="mt-4">
            The{" "}
            <strong className="font-semibold text-black">skills plot</strong> landed
            as the clearest proof I gave them; they could finally see competency
            expectations without decoding a job posting.
          </Prose>
          <blockquote className="mt-10 border-l-4 border-[#af101a] bg-[#F5EED7]/90 py-6 pl-6 pr-5 sm:py-7 sm:pl-8">
            <p className="text-base font-medium leading-relaxed text-black/88 sm:text-[17px]">
              &ldquo;The website is super easy to use, and going through the
              professional advice makes me feel a whole lot better about my
              future.&rdquo;
            </p>
            <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-black/50">
              PM Freshman, 18yo
            </footer>
          </blockquote>
        </motion.section>

        <SectionSpacer />

        {/* 9. Lessons learned */}
        <motion.section variants={fade} aria-labelledby="lessons-h">
          <CaseSectionTitle id="lessons-h">Real-World Constraints</CaseSectionTitle>
          <Prose>
            The startup sunset, but the design constraints did not. I treat that
            honesty as part of the case study.
          </Prose>
          <Prose className="mt-4">
            I learned how ruthlessly I must pair{" "}
            <strong className="font-semibold text-black">scannable data</strong> with
            narrative, especially when users are anxious, not browsing for fun.
          </Prose>
          <Prose className="mt-4">
            Choosing Squarespace accelerated launch, yet{" "}
            <strong className="font-semibold text-black">
              heavy visuals crushed mobile load times
            </strong>
            , a humbling trade I now front-load in technical planning.
          </Prose>
          <Prose className="mt-4">
            I own that miss: I optimized for visual craft before I proved performance,
            and users on slower devices paid first.
          </Prose>
          <Prose className="mt-4">
            The line I carry forward is simple:{" "}
            <strong className="font-semibold text-black">
              beauty without speed and accessibility is incomplete UX
            </strong>
            .
          </Prose>
        </motion.section>
      </motion.main>
    </div>
  );
}
