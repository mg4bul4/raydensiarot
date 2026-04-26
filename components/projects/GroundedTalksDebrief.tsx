// [HARD CONSISTENCY FIX] — root cause: project pages used different component-specific typography/spacing systems, tokens applied: yes, cross-checked: yes
"use client";

// [CONSISTENCY AUDIT] — normalized GroundedTalks to the shared project docs design system: container width, heading/body type scale, metadata/labels cadence, and section spacing tokens.
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HankoMarker } from "@/components/kanso/HankoMarker";
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

const HL =
  "[font-family:var(--font-stitch-headline,var(--font-kanso-heading),ui-sans-serif,sans-serif)]";
const BODY =
  "[font-family:var(--font-stitch-body,var(--font-inter),ui-sans-serif,sans-serif)]";
const EYEBROW =
  `text-xs font-bold uppercase tracking-widest text-[color:var(--accent-red)]/80 ${HL}`;
const H1 =
  `text-5xl font-black uppercase leading-[0.95] tracking-tight text-[color:var(--accent-red)] md:text-6xl ${HL}`;
const H2 =
  `text-2xl font-semibold leading-tight tracking-tight text-[#1e1c0b] md:text-3xl ${HL}`;
const H3 =
  `text-xl font-medium leading-tight tracking-tight text-[#1e1c0b] md:text-2xl ${HL}`;
const PROSE =
  `mt-6 max-w-4xl text-base leading-relaxed text-[#1e1c0b]/92 md:text-lg ${BODY}`;
const SECTION_SPACE = "h-16 md:h-24";
const META_CARD =
  "rounded-[2px] border border-[#af101a] bg-[#F5EED7] p-6 sm:p-7";
const META_LABEL = `text-xs font-bold uppercase tracking-wider text-black/45 ${HL}`;
const META_VALUE = `mt-3 text-sm font-medium leading-relaxed text-black/88 ${BODY}`;
const NAV =
  `text-xs font-bold uppercase tracking-widest text-[color:var(--accent-red)] transition-colors duration-200 hover:text-black ${HL}`;

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
  return <div className={SECTION_SPACE} aria-hidden />;
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
      <h2 id={id} className={H2}>
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
    <p className={`${PROSE} ${className}`}>
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
    <div className={META_CARD}>
      <p className={META_LABEL}>
        {label}
      </p>
      <div className={META_VALUE}>
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
      <h3 className={H3}>
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
      <h3 className={H3}>
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
      <p className={META_LABEL}>
        {title}
      </p>
      <p className="kanso-heading mt-3 text-3xl font-bold tabular-nums tracking-tight text-[#af101a] sm:text-4xl">
        {stat}
      </p>
      <p className={`mt-3 text-sm leading-relaxed text-black/85 ${BODY}`}>{description}</p>
    </div>
  );
}

export function GroundedTalksDebrief() {
  return (
    <div className="min-h-dvh bg-[#fff8dc] text-black">
      <motion.main
        className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 md:px-12 md:pb-32 md:pt-24"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* 1. Hero */}
        <motion.header variants={fade} className="mb-2">
          <div className="flex justify-end">
            <Link href="/projects" className={NAV}>
              ← Projects
            </Link>
          </div>
          <p className={`mt-10 ${EYEBROW}`}>
            CASE_STUDY
          </p>
          <h1 className={`mt-3 ${H1}`}>
            GroundedTalks
          </h1>
          <p className={`mt-6 max-w-4xl text-lg leading-relaxed text-[#1e1c0b]/88 md:text-xl ${BODY}`}>
            I reached{" "}
            <strong className="font-semibold text-black">300+ students</strong>{" "}
            with a discovery platform that connected them to real industry voices,
            not generic blog posts.
          </p>
          <p className={`mt-4 max-w-4xl text-base leading-relaxed text-[#1e1c0b]/92 md:text-lg ${BODY}`}>
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

        {/* [STRUCTURE AUDIT] — OVERVIEW */}
        <motion.section variants={fade} aria-labelledby="overview-h">
          <CaseSectionTitle id="overview-h">Project overview</CaseSectionTitle>
          <Prose className="mt-6">
            GroundedTalks is a mentor-led career discovery platform I designed for students trying to connect coursework with real industry paths. It served students who needed practical direction and community members who wanted clearer access to relevant guidance. The project existed because existing career resources felt scattered, generic, and hard to trust under real student time pressure.
          </Prose>
          <Prose className="mt-4">
            I framed the product as a decision-support experience: reduce ambiguity, surface concrete next steps, and keep the content scannable enough that students would actually use it.
          </Prose>
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
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

        {/* [STRUCTURE AUDIT] — THE PROBLEM */}
        <motion.section variants={fade} aria-labelledby="challenge-h">
          <CaseSectionTitle id="challenge-h">
            The Problem
          </CaseSectionTitle>
          <Prose>
            Students could find information, but they could not easily turn it into a plan they believed in. Advice was fragmented across search results, social threads, and disconnected school resources.
          </Prose>
          <Prose>
            The risk was decision paralysis: when everything feels equally unclear, users stop exploring and default to inaction.
          </Prose>
          <Prose>
            I treated this as a UX clarity problem, not a content volume problem. The core job was helping users answer, &ldquo;What should I do next?&rdquo; within minutes, not after reading long pages.
          </Prose>
        </motion.section>

        <SectionSpacer />

        {/* [STRUCTURE AUDIT] — ROLE & CONTRIBUTIONS */}
        <motion.section variants={fade} aria-labelledby="research-h">
          <CaseSectionTitle id="research-h">Role &amp; Contributions</CaseSectionTitle>
          <Prose>
            I owned the end-to-end design direction: discovery research, information architecture, wireframing, visual system decisions, and high-fidelity prototyping. I also translated research findings into prioritized product decisions and narrative content structure.
          </Prose>
          <Prose className="mt-4">
            On execution, I built and iterated the interaction model for career browsing, mentor guidance, and article readability. I also defined the brand direction so tone and interface worked together instead of pulling in different directions.
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
            I collaborated with mentors and stakeholders to ensure the system reflected real career expectations, not just academic assumptions.
          </Prose>
          <Prose className="mt-4">
            The result was a coherent product direction where research, structure, and interface behavior all supported the same user goal: confident decision-making.
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

        {/* [STRUCTURE AUDIT] — APPROACH / DESIGN PROCESS */}
        <motion.section variants={fade} aria-labelledby="ideation-h">
          <CaseSectionTitle id="ideation-h">
            Approach / Design Process
          </CaseSectionTitle>
          <Prose>
            I started with discovery across surveys and interviews to identify where students lost confidence in their career decisions. I then mapped the journey to remove redundant steps between curiosity and actionable direction.
          </Prose>
          <Prose className="mt-4">
            Key design decisions focused on scan speed, comprehension, and emotional safety: clear hierarchy, chunked content, and predictable navigation patterns. I stayed in low-fidelity until stakeholders were aligned on flow and information structure, then moved to visual refinement.
          </Prose>
          <h3 className={`mt-10 ${H3}`}>
            The &ldquo;Why&rdquo; behind the UI
          </h3>
          <Prose>
            I introduced light gamified patterns to make dense mentor and career information feel approachable without trivializing the content. The goal was to keep users engaged long enough to complete meaningful exploration.
          </Prose>
          <Prose className="mt-4">
            Constraints included platform limitations and content volume, so I prioritized modular components that could scale across pages while preserving readability.
          </Prose>
          <h3 className={`mt-10 ${H3}`}>
            The &ldquo;Why&rdquo; behind the Branding
          </h3>
          <Prose>
            I built a warm &ldquo;Cup of Joe&rdquo; visual language to make professional guidance feel conversational instead of institutional. That tone choice supported trust for users who were already anxious about career uncertainty.
          </Prose>
          <Prose className="mt-4">
            Iteration focused on reducing navigation loops and tightening content hierarchy when testing showed users drifting. Each revision aimed to improve clarity before adding polish.
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
            <h3 className={H3}>
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

        {/* [STRUCTURE AUDIT] — SOLUTION */}
        <motion.section variants={fade} aria-labelledby="iteration-h">
          <CaseSectionTitle id="iteration-h">Solution</CaseSectionTitle>
          <Prose>
            The final solution was a structured discovery platform combining mentor insights, career path exploration, and scannable educational content. Users could move from broad questions to concrete role and skill guidance without leaving a coherent interface.
          </Prose>
          <Prose className="mt-4">
            I paired high-fidelity interface patterns with reusable content modules so long-form advice remained readable and actionable. The prototype validated the interaction model before final implementation decisions.
          </Prose>
          <Prose className="mt-4">
            This section captures the interactive behavior that made the product understandable in use, not just in static screens.
          </Prose>
          <div className="mt-10 w-full overflow-hidden rounded-sm border border-[#af101a] bg-[#f4f4f4]">
            <iframe
              title="GroundedTalks Figma prototype"
              className="block h-[min(520px,78vh)] w-full min-h-[360px] border border-black/10 sm:h-[600px] sm:min-h-[600px]"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJCudWWWOUFPvT874qDMIGH%3Fnode-id%3D618-338%26t%3DZT80TGs74DUIt1r2-6"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
            Interactive prototype (Figma)
          </p>
        </motion.section>

        <SectionSpacer />

        {/* [STRUCTURE AUDIT] — OUTCOME / IMPACT */}
        <motion.section variants={fade} aria-labelledby="final-h">
          <CaseSectionTitle id="final-h">
            Outcome / Impact
          </CaseSectionTitle>
          <Prose>
            GroundedTalks reached 300+ student respondents during discovery and produced a clearer path for students to evaluate careers with less guesswork. Feedback indicated stronger confidence after using the platform and highlighted the skills visualizer as especially useful for understanding expectations.
          </Prose>
          <Prose className="mt-4">
            Beyond individual screens, the project created a reusable structure for mentor-backed career content that could scale with new topics. The primary impact was turning abstract career anxiety into clearer next actions.
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

        {/* [STRUCTURE AUDIT] — OUTCOME / IMPACT */}
        <motion.section variants={fade} aria-labelledby="impact-h">
          <CaseSectionTitle id="impact-h">Outcome Evidence</CaseSectionTitle>
          <Prose>
            Qualitative testing reinforced the same outcome: students reported that the experience made career planning feel more concrete and less overwhelming.
          </Prose>
          <Prose className="mt-4">
            The interface worked because it combined practical mentor context with scannable structure, helping users move from passive reading to active planning.
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

        {/* [STRUCTURE AUDIT] — LEARNINGS */}
        <motion.section variants={fade} aria-labelledby="lessons-h">
          <CaseSectionTitle id="lessons-h">Learnings</CaseSectionTitle>
          <Prose>
            This project reinforced that clarity and pacing are core product decisions, not just writing polish. When users are anxious, structure carries as much value as the information itself.
          </Prose>
          <Prose className="mt-4">
            I also learned to test content density early: even strong insights fail if interaction flow makes users work too hard to parse them.
          </Prose>
          <Prose className="mt-4">
            If I revisited this project, I would front-load performance constraints and analytics instrumentation so quality and speed decisions could be validated sooner.
          </Prose>
          <Prose className="mt-4">
            The biggest takeaway is process discipline: research signal, interaction clarity, and implementation realities have to stay connected from day one.
          </Prose>
        </motion.section>
      </motion.main>
    </div>
  );
}
