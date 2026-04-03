"use client";

import { motion } from "framer-motion";
import { Open_Sans, Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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

/** System stack for Helvetica Neue–class neo-grotesque specimens (matches GT wordmark tone). */
const helveticaNeueStyle = {
  fontFamily:
    '"Helvetica Neue", Helvetica, Arial, ui-sans-serif, system-ui, sans-serif',
} as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const slam = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 520,
      damping: 32,
      mass: 0.9,
    },
  },
};

const manifestInner = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const manifestSlam = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 480,
      damping: 30,
      mass: 0.85,
    },
  },
};

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-fg-stark/30 py-3 last:border-b-0 sm:py-4">
      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg-stark/45 sm:text-[10px]">
        {label}
      </p>
      <p className="mt-1 font-mono text-[11px] leading-relaxed tracking-wide text-fg-stark/90 sm:text-xs">
        {value}
      </p>
    </div>
  );
}

function ModuleShell({
  id,
  title,
  children,
  collapseWithPrevious = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  collapseWithPrevious?: boolean;
}) {
  return (
    <motion.section
      variants={slam}
      id={id}
      className={`col-span-12 border border-fg-stark bg-bg-deep ${collapseWithPrevious ? "-mt-px" : ""}`}
    >
      <header className="border-b border-fg-stark px-4 py-3 sm:px-6 sm:py-4">
        <h2 className="font-display text-xl font-normal uppercase leading-none tracking-tighter text-fg-stark sm:text-2xl md:text-3xl">
          {title}
        </h2>
      </header>
      <div className="px-4 py-4 sm:px-6 sm:py-5">{children}</div>
    </motion.section>
  );
}

function BrandManifestModule() {
  return (
    <motion.aside
      variants={slam}
      className="relative col-span-12 -mt-px flex flex-col border border-fg-stark bg-bg-deep sm:col-span-4"
    >
      <span className="absolute left-2 top-2 z-10 font-mono text-[8px] uppercase tracking-[0.14em] text-fg-stark/40 sm:left-3 sm:text-[9px]">
        [ CODE_01B ]
      </span>
      <span className="absolute right-2 top-2 z-10 font-mono text-[8px] uppercase tracking-[0.14em] text-fg-stark/40 sm:right-3 sm:text-[9px]">
        VER_A
      </span>

      <header className="border-b border-fg-stark px-3 pb-3 pt-8 sm:px-4 sm:pb-4 sm:pt-9">
        <h2 className="font-display text-lg font-normal uppercase leading-none tracking-tighter text-fg-stark sm:text-xl">
          [ 01B_BRAND_MANIFEST ]
        </h2>
      </header>

      <motion.div
        className="flex min-h-0 flex-1 flex-col gap-0 p-3 sm:p-4"
        initial="hidden"
        animate="show"
        variants={manifestInner}
      >
        <motion.section
          variants={manifestSlam}
          className="relative border border-fg-stark bg-[#080808] p-3 sm:p-4"
        >
          <span className="absolute bottom-1.5 left-2 z-10 font-mono text-[7px] uppercase text-fg-stark/35">
            [ CODE_01 ]
          </span>
          <span className="absolute right-2 top-2 z-10 font-mono text-[7px] uppercase text-fg-stark/35">
            VER_A
          </span>
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-fg-stark/55">
            [ BRAND_IDENTITY_MONOGRAM ]
          </p>

          <div className="border border-fg-stark bg-black px-3 py-4 sm:px-4 sm:py-5">
            <div className="relative mx-auto w-full max-w-[280px]">
              <Image
                src="/projects/grounded-talks/grounded-talks-wordmark.png"
                alt="GROUNDEDTALKS typographic logotype with GT stem mark"
                width={560}
                height={200}
                className="h-auto w-full object-contain"
                sizes="(max-width: 640px) 70vw, 220px"
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-3 border-t border-fg-stark/30 pt-4">
              <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                <Image
                  src="/projects/grounded-talks/gt-stem-mark.png"
                  alt="GT stem cup mark"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <p className="font-mono text-[8px] uppercase leading-snug tracking-[0.12em] text-fg-stark/55 sm:text-[9px]">
                CODE: GT_STEM // [ RENDERED ]
              </p>
            </div>
          </div>

          <p className="mt-3 font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-fg-stark/50 sm:text-[9px]">
            LOGOTYPE: GEOMETRIC_SANS_SERIF // CODE: 01A
          </p>
        </motion.section>

        <motion.section
          variants={manifestSlam}
          className="relative -mt-px border border-fg-stark bg-[#080808] p-3 sm:p-4"
        >
          <span className="absolute left-2 top-2 z-10 font-mono text-[7px] uppercase text-fg-stark/35">
            [ CODE_02B ]
          </span>
          <span className="absolute right-2 top-2 z-10 font-mono text-[7px] uppercase text-fg-stark/35">
            VER_A
          </span>
          <p className="mb-3 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-fg-stark/55 sm:pt-6">
            [ TYPOGRAPHIC_MANIFEST ] // [ CODE: 02B ]
          </p>
          <div className="border border-fg-stark bg-bg-deep px-2 py-2 sm:px-3 sm:py-2.5">
            <p className="font-mono text-[8px] uppercase leading-relaxed tracking-[0.14em] text-fg-stark/70 sm:text-[9px]">
              TYPE: CLEAN_EMPOWERMENT // CODE_MANIFEST: 02B
            </p>
          </div>
        </motion.section>

        <motion.section
          variants={manifestSlam}
          className="relative -mt-px border border-fg-stark bg-[#080808] p-3 sm:p-4"
        >
          <span className="absolute bottom-2 right-2 z-10 font-mono text-[7px] uppercase text-fg-stark/35">
            VER_A
          </span>
          <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.16em] text-fg-stark/55">
            [ TYPOGRAPHIC_MANIFEST_LIST ] // [ CODE_MANIFEST: 02B ]
          </p>

          <ul className="space-y-5 border-t border-fg-stark/30 pt-4">
            <li className="border-b border-fg-stark/20 pb-4">
              <p className="font-mono text-[8px] uppercase tracking-wide text-fg-stark/50 sm:text-[9px]">
                [ HEADING_1 // 700 // HELVETICA_NEUE ]
              </p>
              <p
                className="mt-2 text-lg font-bold uppercase tracking-[-0.04em] text-fg-stark sm:text-xl"
                style={helveticaNeueStyle}
              >
                MISSION_DEPLOYMENT
              </p>
            </li>

            <li className="border-b border-fg-stark/20 pb-4">
              <p className="font-mono text-[8px] uppercase tracking-wide text-fg-stark/50 sm:text-[9px]">
                [ BODY_TEXT // 400 // OPEN_SANS ]
              </p>
              <p
                className={`mt-2 text-[13px] font-normal leading-relaxed normal-case text-fg-stark/90 sm:text-sm ${openSans.className}`}
              >
                UX logic focused on high-fidelity UI and seamless connection with
                matching details across scheduling, profiles, and trust surfaces.
              </p>
            </li>

            <li>
              <p className="font-mono text-[8px] uppercase tracking-wide text-fg-stark/50 sm:text-[9px]">
                [ BUTTON_TEXT // 600 // RALEWAY ]
              </p>
              <div
                className={`mt-3 inline-flex border border-fg-stark bg-fg-stark px-5 py-2.5 ${raleway.className}`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-bg-deep sm:text-sm">
                  EXECUTE
                </span>
              </div>
            </li>
          </ul>
        </motion.section>
      </motion.div>
    </motion.aside>
  );
}

export function GroundedTalksDebrief() {
  return (
    <div className="min-h-dvh bg-bg-deep text-fg-stark">
      <div
        className="pointer-events-none fixed inset-0 opacity-90"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "clamp(24px, 4vw, 48px) clamp(24px, 4vw, 48px)",
        }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto grid max-w-[120rem] grid-cols-12 gap-0 px-4 pb-20 pt-6 sm:px-6 md:px-10 md:pb-28 md:pt-10"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.header variants={slam} className="col-span-12 mb-8 md:mb-12">
          <Link
            href="/#archive"
            className="inline-flex border border-fg-stark bg-bg-deep px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-fg-stark transition-colors hover:bg-neon-green hover:text-bg-deep hover:border-neon-green sm:text-sm"
          >
            [ RETURN_TO_ARCHIVE ]
          </Link>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.35em] text-fg-stark/45 sm:text-xs">
            CASE_FILE // GROUNDED_TALKS
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-normal uppercase leading-[0.92] tracking-tighter">
            THE_DEBRIEFING
          </h1>
        </motion.header>

        <ModuleShell id="mission-overview" title="[ 00_MISSION_OVERVIEW ]">
          <Field label="PROJECT" value="GROUNDED_TALKS" />
          <Field label="ROLE" value="CREATIVE_LEAD" />
          <Field label="TIMELINE" value="2023_DEPLOYMENT" />
          <Field
            label="OBJECTIVE"
            value="Bridge the gap between academic theory and industry reality by connecting students directly with high-level professionals."
          />
        </ModuleShell>

        <ModuleShell
          id="the-problem"
          title="[ 01_THE_PROBLEM ]"
          collapseWithPrevious
        >
          <Field label="STATUS" value="CRITICAL_DISCONNECT" />
          <Field
            label="INTEL"
            value="Students lacked a direct line to real-world career advice, creating a vacuum between graduation and employment. Industry pros were willing to talk but lacked a centralized portal for connection."
          />
        </ModuleShell>

        <ModuleShell
          id="the-solution"
          title="[ 02_THE_SOLUTION ]"
          collapseWithPrevious
        >
          <Field
            label="EXECUTION"
            value="Designed a seamless digital hub for mentorship and career transparency."
          />
          <Field
            label="UX_LOGIC"
            value="Focused on frictionless scheduling, clean professional profiles, and a high-trust brand identity that appealed to both Gen-Z students and Corporate Executives."
          />
        </ModuleShell>

        <motion.div
          variants={slam}
          className="relative col-span-12 -mt-px min-h-[200px] border border-fg-stark bg-[#050505] sm:col-span-8 sm:min-h-[260px] md:min-h-[320px] sm:border-r-0"
        >
          <span className="absolute left-2 top-2 z-10 font-mono text-[8px] uppercase tracking-[0.14em] text-fg-stark/50 sm:left-3 sm:text-[9px]">
            [ CODE_01A ]
          </span>
          <span className="absolute right-2 top-2 z-10 font-mono text-[8px] uppercase tracking-[0.14em] text-fg-stark/50 sm:right-3 sm:text-[9px]">
            VER_A
          </span>
          <div className="flex items-center justify-center px-3 pb-10 pt-9 sm:px-4 sm:pb-12 sm:pt-10">
            <Image
              src="/projects/grounded-talks/ui-mockup.png"
              alt="GroundedTalks product UI mockup on laptop and phone"
              width={1600}
              height={1000}
              className="h-auto max-h-[min(72vh,540px)] w-full max-w-[920px] object-contain"
              sizes="(max-width: 640px) 100vw, 66vw"
              priority
            />
          </div>
          <span className="absolute bottom-2 left-2 z-10 font-mono text-[8px] uppercase tracking-[0.14em] text-fg-stark/45 sm:bottom-3 sm:left-3 sm:text-[9px]">
            [ SYSTEM_UI_SCREENSHOT_01 ]
          </span>
        </motion.div>

        <BrandManifestModule />

        <motion.div
          variants={slam}
          className="relative col-span-12 -mt-px min-h-[220px] border border-fg-stark bg-[#050505] md:min-h-[280px]"
        >
          <span className="absolute left-2 top-2 z-10 font-mono text-[8px] uppercase tracking-[0.14em] text-fg-stark/50 sm:left-3 sm:text-[9px]">
            [ CODE_03_FLOW ]
          </span>
          <span className="absolute right-2 top-2 z-10 font-mono text-[8px] uppercase tracking-[0.14em] text-fg-stark/50 sm:right-3 sm:text-[9px]">
            VER_A
          </span>
          <div className="flex items-center justify-center px-3 pb-10 pt-9 sm:px-4 sm:pb-12 sm:pt-10">
            <Image
              src="/projects/grounded-talks/user-flow-map.png"
              alt="GroundedTalks user flow diagram: landing, mentors, content library, and mentor profiles"
              width={1800}
              height={1000}
              className="h-auto max-h-[min(85vh,720px)] w-full max-w-[1100px] object-contain"
              sizes="(max-width: 640px) 100vw, 100vw"
            />
          </div>
          <span className="absolute bottom-2 left-2 z-10 font-mono text-[8px] uppercase tracking-[0.14em] text-fg-stark/45 sm:bottom-3 sm:left-3 sm:text-[9px]">
            [ USER_FLOW_MAP ]
          </span>
        </motion.div>

        <ModuleShell
          id="impact-report"
          title="[ 03_IMPACT_REPORT ]"
          collapseWithPrevious
        >
          <Field
            label="METRIC_01"
            value="Jumpstarted the initial brand DNA and platform UI from zero."
          />
          <Field
            label="METRIC_02"
            value="Established a scalable design system for future iterations."
          />
          <Field
            label="METRIC_03"
            value="Empowered students to bypass traditional networking barriers."
          />
        </ModuleShell>
      </motion.div>

      <div className="pointer-events-none fixed inset-0 z-[5] mix-blend-overlay">
        <div className="crt-scanlines absolute inset-0 opacity-25" />
        <div className="noise-grain absolute inset-0 opacity-30 mix-blend-soft-light" />
      </div>
    </div>
  );
}
