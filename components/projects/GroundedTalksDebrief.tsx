"use client";

import { motion } from "framer-motion";
import { Open_Sans, Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BrushRule } from "@/components/kanso/BrushRule";
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

const ease = [0.25, 0.1, 0.25, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
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
      <div className="rounded-sm border border-black/20 bg-[#fff8dc] p-3 sm:p-4">
        {children}
      </div>
      <figcaption className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
        {caption}
      </figcaption>
    </figure>
  );
}

function MaterialsBoard() {
  const swatches = [
    { hex: "#FFF8DC", label: "Canvas" },
    { hex: "#000000", label: "Ink" },
    { hex: "#FFFFFF", label: "Paper" },
    { hex: "#D32F2F", label: "Accent" },
  ];

  return (
    <motion.section
      variants={fade}
      className="py-16 sm:py-20"
      aria-labelledby="materials-heading"
    >
      <SectionLabel id="materials-heading">Materials board</SectionLabel>

      <p className="mt-6 max-w-prose text-sm leading-relaxed text-black/80">
        Color relationships and type scale for the GroundedTalks system — set on
        cream ground.
      </p>

      <div className="mt-10 flex flex-wrap gap-6">
        {swatches.map((s) => (
          <div key={s.hex} className="flex flex-col gap-2">
            <div
              className="h-14 w-24 rounded-sm border border-black/15 shadow-none"
              style={{ backgroundColor: s.hex }}
            />
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/55">
              {s.label}
            </p>
            <p className="font-mono text-[9px] text-black/40">{s.hex}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-6 rounded-sm border border-black/15 bg-[#fff8dc] p-6 sm:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
          Typography scale
        </p>
        <div className="space-y-6 border-t border-black/10 pt-6">
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
              UX logic focused on high-fidelity UI and seamless connection with
              matching details across scheduling, profiles, and trust surfaces.
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

      <div className="mt-10 rounded-sm border border-black/20 bg-neutral-950 p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
          Logotype lockup
        </p>
        <div className="relative mx-auto mt-4 w-full max-w-[280px]">
          <Image
            src="/projects/grounded-talks/wordmark-groundedtalks-white.png"
            alt="GroundedTalks logotype"
            width={1024}
            height={196}
            className="h-auto w-full object-contain"
            sizes="280px"
          />
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 border-t border-white/10 pt-6">
          <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
            <Image
              src="/projects/grounded-talks/gt-stem-mark.png"
              alt="GT stem mark"
              fill
              className="object-contain"
              sizes="56px"
            />
          </div>
          <p className="text-left text-xs leading-relaxed text-white/65">
            Stem mark for app and social surfaces.
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
          <Link
            href="/projects"
            className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/70 transition-colors hover:text-[#d32f2f]"
          >
            ← Archive
          </Link>
          <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.28em] text-black/45">
            Mission debriefing
          </p>
          <h1 className="kanso-heading mt-3 text-[clamp(2rem,7vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-black">
            GroundedTalks
          </h1>
        </motion.header>

        <motion.div variants={fade} className="my-12 md:my-16">
          <BrushRule />
        </motion.div>

        <motion.section
          variants={fade}
          id="mission-overview"
          aria-labelledby="mission-overview-h"
          className="pb-4"
        >
          <SectionLabel id="mission-overview-h">Mission overview</SectionLabel>
          <div className="mt-8">
            <Field label="Project" value="GroundedTalks" />
            <Field label="Role" value="Creative lead" />
            <Field label="Timeline" value="2023" />
            <Field
              label="Objective"
              value="Bridge the gap between academic theory and industry reality by connecting students directly with high-level professionals."
            />
          </div>
        </motion.section>

        <motion.div variants={fade} className="my-12 md:my-16">
          <BrushRule />
        </motion.div>

        <motion.section variants={fade} id="problem" aria-labelledby="problem-h">
          <SectionLabel id="problem-h">Problem</SectionLabel>
          <div className="mt-8">
            <Field label="Situation" value="Critical disconnect" />
            <Field
              label="Context"
              value="Students lacked a direct line to real-world career advice, creating a vacuum between graduation and employment. Industry pros were willing to talk but lacked a centralized portal for connection."
            />
          </div>
        </motion.section>

        <motion.div variants={fade} className="my-12 md:my-16">
          <BrushRule />
        </motion.div>

        <motion.section
          variants={fade}
          id="solution"
          aria-labelledby="solution-h"
        >
          <SectionLabel id="solution-h">Solution</SectionLabel>
          <div className="mt-8">
            <Field
              label="Approach"
              value="Designed a seamless digital hub for mentorship and career transparency."
            />
            <Field
              label="Experience focus"
              value="Focused on frictionless scheduling, clean professional profiles, and a high-trust brand identity that appealed to both Gen-Z students and corporate executives."
            />
          </div>
        </motion.section>

        <motion.div variants={fade} className="my-12 md:my-16">
          <BrushRule />
        </motion.div>

        <motion.section
          variants={fade}
          id="systems-debriefing"
          aria-labelledby="systems-h"
          className="py-4"
        >
          <SectionLabel id="systems-h">Systems debriefing</SectionLabel>
          <p className="mt-6 text-sm leading-relaxed text-black/75">
            Product surface and journey map — contained, minimal frames.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
            <ImageFrame caption="UI surface">
              <div className="flex min-h-[200px] items-center justify-center bg-[#0a0a0a] sm:min-h-[240px]">
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
            <ImageFrame caption="User flow">
              <div className="flex min-h-[200px] items-center justify-center bg-white sm:min-h-[240px]">
                <Image
                  src="/projects/grounded-talks/user-flow-map.png"
                  alt="User flow map"
                  width={1800}
                  height={1000}
                  className="h-auto max-h-[min(70vh,480px)] w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ImageFrame>
          </div>
        </motion.section>

        <motion.div variants={fade} className="my-12 md:my-16">
          <BrushRule />
        </motion.div>

        <MaterialsBoard />

        <motion.div variants={fade} className="my-12 md:my-16">
          <BrushRule />
        </motion.div>

        <motion.section
          variants={fade}
          id="impact-report"
          aria-labelledby="impact-h"
          className="pb-8"
        >
          <SectionLabel id="impact-h">Impact report</SectionLabel>
          <div className="mt-8">
            <Field
              label="Outcome 1"
              value="Jumpstarted the initial brand DNA and platform UI from zero."
            />
            <Field
              label="Outcome 2"
              value="Established a scalable design system for future iterations."
            />
            <Field
              label="Outcome 3"
              value="Empowered students to bypass traditional networking barriers."
            />
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
