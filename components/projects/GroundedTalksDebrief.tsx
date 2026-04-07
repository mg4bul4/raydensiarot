"use client";

import { motion } from "framer-motion";
import { Open_Sans, Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/kanso/SectionLabel";

const openSans = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

const helveticaNeueStyle = {
  fontFamily:
    '"Helvetica Neue", Helvetica, Arial, ui-sans-serif, system-ui, sans-serif',
} as const;

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

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-5 first:pt-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/50">
        {label}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-black/90 sm:text-base">
        {value}
      </p>
    </div>
  );
}

function ImageFrame({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption: string;
}) {
  return (
    <figure className="flex flex-col">
      <div className="overflow-hidden rounded-sm border border-[#af101a] bg-[#F5EED7] p-3 sm:p-4">
        {children}
      </div>
      <figcaption className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
        {caption}
      </figcaption>
    </figure>
  );
}

function OutcomeSignals() {
  const items = [
    {
      label: "0→1 delivery",
      detail:
        "Brand, UI shell, and scheduling-minded flows established together—not as a slide deck.",
    },
    {
      label: "Dual audience",
      detail:
        "One system had to earn trust from students and from time-poor professionals without splitting the experience.",
    },
    {
      label: "Friction focus",
      detail:
        "Profiles and booking paths were the leverage points: hesitation there kills a two-sided product.",
    },
  ];

  return (
    <motion.div
      variants={fade}
      className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-sm border border-[#af101a] bg-[#F5EED7] p-6 sm:p-7"
        >
          <p className="kanso-heading text-lg font-bold uppercase leading-tight tracking-tight text-[#af101a] sm:text-xl">
            {item.label}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-black/82 sm:text-[15px]">
            {item.detail}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

function KeyFindingsGrid() {
  const findings = [
    {
      title: "Scheduling clarity",
      body: "Primary job-to-be-done: get a session booked without negotiation spam. Controls and states favor obvious next steps.",
    },
    {
      title: "Trust on both sides",
      body: "Profiles and credentials had to read legitimate to sponsors and low-risk to students—visual restraint over novelty.",
    },
    {
      title: "Brand as proof",
      body: "The identity signals stability so the platform could borrow authority before it had years of usage data.",
    },
    {
      title: "Scalable system",
      body: "Tokens, type, and components were set up so later features could plug in without a visual reset.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {findings.map((f) => (
        <div
          key={f.title}
          className="rounded-sm border border-[#af101a] bg-[#F5EED7] p-5 sm:p-6"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#af101a]/90">
            {f.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-black/85">{f.body}</p>
        </div>
      ))}
    </div>
  );
}

function MaterialsBoard() {
  const swatches = [
    { hex: "#FFF8DC", label: "Canvas" },
    { hex: "#000000", label: "Ink" },
    { hex: "#FFFFFF", label: "Paper" },
    { hex: "#af101a", label: "Accent" },
  ];

  return (
    <motion.section
      variants={fade}
      className="py-16 sm:py-20"
      aria-labelledby="materials-heading"
    >
      <SectionLabel id="materials-heading">System materials</SectionLabel>

      <p className="mt-6 max-w-prose text-sm leading-relaxed text-black/80">
        A tight palette and typographic contract so marketing and product
        surfaces stay aligned as the product grows.
      </p>

      <div className="mt-10 flex flex-wrap gap-6">
        {swatches.map((s) => (
          <div key={s.hex} className="flex flex-col gap-2">
            <div
              className="h-14 w-24 rounded-sm border border-[#af101a]"
              style={{ backgroundColor: s.hex }}
            />
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/55">
              {s.label}
            </p>
            <p className="font-mono text-[9px] text-black/40">{s.hex}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-6 rounded-sm border border-[#af101a] bg-[#F5EED7] p-6 sm:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
          Typography scale
        </p>
        <div className="space-y-6 border-t border-[#af101a]/35 pt-6">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/40">
              Heading
            </p>
            <p
              className="mt-2 text-lg font-bold uppercase tracking-[-0.03em] text-black sm:text-xl"
              style={helveticaNeueStyle}
            >
              Mission deployment
            </p>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/40">
              Body
            </p>
            <p
              className={`mt-2 text-[13px] leading-relaxed text-black/88 sm:text-sm ${openSans.className}`}
            >
              Supporting copy stays calm and legible—scheduling, profiles, and
              trust surfaces share the same rhythm.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/40">
              Primary control
            </p>
            <div
              className={`mt-2 inline-flex border border-black bg-black px-4 py-2 ${raleway.className}`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Schedule a session
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-sm border border-[#af101a] bg-neutral-950 p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
          Logotype lockup
        </p>
        <div className="relative mx-auto mt-4 w-full max-w-[280px] overflow-hidden">
          <Image
            src="/projects/grounded-talks/wordmark-groundedtalks-white.png"
            alt="GroundedTalks logotype"
            width={1024}
            height={196}
            className="h-auto w-full object-contain object-bottom"
            sizes="280px"
          />
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 border-t border-white/10 pt-6">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden sm:h-14 sm:w-14">
            <Image
              src="/projects/grounded-talks/gt-stem-mark.png"
              alt="GT stem mark"
              fill
              className="object-contain"
              sizes="56px"
            />
          </div>
          <p className="text-left text-xs leading-relaxed text-white/65">
            Stem mark for app icon and social avatars.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export function GroundedTalksDebrief() {
  return (
    <div className="min-h-dvh bg-[#fff8dc] text-black">
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-24 sm:px-10 md:px-12 md:pb-32 md:pt-28"
        initial="hidden"
        animate="show"
        variants={container}
      >
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
          <p className="mt-8 max-w-prose text-base leading-relaxed text-black/85 sm:text-[17px]">
            GroundedTalks needed to feel like a serious bridge—not a campus
            experiment. The design job was to turn a two-sided access problem
            into a product that both students and professionals would actually
            use.
          </p>
        </motion.header>

        <OutcomeSignals />

        <div className="h-14 md:h-20" aria-hidden />

        <motion.section
          variants={fade}
          id="brand-intent"
          aria-labelledby="brand-intent-h"
          className="pb-4"
        >
          <SectionLabel id="brand-intent-h">Brand intent</SectionLabel>
          <p className="mt-8 max-w-prose text-base leading-relaxed text-black/88 sm:text-[17px]">
            The emotional target was{" "}
            <strong className="font-semibold text-black">
              credible warmth
            </strong>
            : approachable enough for students exploring careers, restrained
            enough for mentors who guard their time. Visual noise would have
            read as unserious; cold corporate polish would have read as
            inaccessible.
          </p>
        </motion.section>

        <div className="h-14 md:h-20" aria-hidden />

        <motion.section
          variants={fade}
          id="constraints"
          aria-labelledby="constraints-h"
        >
          <SectionLabel id="constraints-h">Operating constraints</SectionLabel>
          <div className="mt-8">
            <Field
              label="Market gap"
              value="Students were navigating informal networks; mentors were willing but hard to reach through ad hoc channels. No single place owned the handoff."
            />
            <Field
              label="Trust bar"
              value="Both sides needed to believe the platform was legitimate before sharing time or contact context—brand and UI had to earn that in the first session."
            />
            <Field
              label="Execution scope"
              value="Creative lead meant brand and product surfaces moved together: identity, key screens, and component logic had to ship as one coherent story."
            />
          </div>
        </motion.section>

        <div className="h-14 md:h-20" aria-hidden />

        <motion.section
          variants={fade}
          id="design-response"
          aria-labelledby="design-response-h"
        >
          <SectionLabel id="design-response-h">Design response</SectionLabel>
          <div className="mt-8">
            <Field
              label="Product narrative"
              value="Flows emphasize scheduling and profile clarity—where hesitation usually kills conversion in mentorship marketplaces."
            />
            <Field
              label="Visual system"
              value="Cream ground, sharp ink type, and a single accent discipline keep marketing and product surfaces feeling like one institution."
            />
          </div>
        </motion.section>

        <div className="h-14 md:h-20" aria-hidden />

        <motion.section
          variants={fade}
          id="systems-debriefing"
          aria-labelledby="systems-h"
          className="py-4"
        >
          <SectionLabel id="systems-h">Proof &amp; key findings</SectionLabel>
          <p className="mt-6 text-sm leading-relaxed text-black/75">
            Primary UI surface alongside the decisions that drove layout and
            hierarchy—replacing a busy journey poster with explicit findings.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 lg:items-start">
            <ImageFrame caption="Product UI">
              <div className="flex min-h-[200px] items-center justify-center overflow-hidden bg-[#0a0a0a] sm:min-h-[240px]">
                <Image
                  src="/projects/grounded-talks/ui-mockup.png"
                  alt="GroundedTalks UI mockup"
                  width={1600}
                  height={1000}
                  className="h-auto max-h-[min(60vh,420px)] w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </ImageFrame>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
                Key findings
              </p>
              <div className="mt-4">
                <KeyFindingsGrid />
              </div>
            </div>
          </div>
        </motion.section>

        <div className="h-14 md:h-20" aria-hidden />

        <MaterialsBoard />

        <div className="h-14 md:h-20" aria-hidden />

        <motion.section
          variants={fade}
          id="impact-report"
          aria-labelledby="impact-h"
          className="pb-8"
        >
          <SectionLabel id="impact-h">Outcomes</SectionLabel>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
            {[
              {
                head: "Foundation",
                text: "Brand DNA and UI foundation established from zero—ready for future product cycles.",
              },
              {
                head: "Scalable kit",
                text: "Design decisions packaged as reusable structure, not one-off comps.",
              },
              {
                head: "Access model",
                text: "Positioned the platform to shorten the path from intent to booked conversation.",
              },
            ].map((o) => (
              <div
                key={o.head}
                className="rounded-sm border border-[#af101a] bg-[#F5EED7] p-5 sm:p-6"
              >
                <p className="kanso-heading text-sm font-bold uppercase leading-tight text-[#af101a]">
                  {o.head}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-black/82">
                  {o.text}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
