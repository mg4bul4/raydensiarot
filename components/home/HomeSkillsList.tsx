"use client";

import { motion } from "framer-motion";

const snap = { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const };

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: snap },
};

const ROWS: { label: string; line: string }[] = [
  {
    label: "UI / UX design",
    line: "Flows, information hierarchy, and systems that survive handoff and iteration.",
  },
  {
    label: "Front-end development",
    line: "React / Next.js implementation aligned to design tokens and interaction specs.",
  },
  {
    label: "Creative direction",
    line: "Coherent brand execution across marketing and product touchpoints.",
  },
];

export function HomeSkillsList() {
  return (
    <motion.section
      id="player-stats"
      className="scroll-mt-1 bg-[#fff8dc] px-6 py-20 text-black sm:px-10 md:py-28 md:px-12"
      aria-labelledby="skills-home-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/50 sm:text-xs">
          PLAYER_STATS
        </p>
        <h2
          id="skills-home-heading"
          className="kanso-heading mt-3 text-[clamp(2.5rem,8vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-[#D32F2F]"
        >
          Capabilities
        </h2>

        <dl className="mt-14 space-y-10">
          {ROWS.map((row) => (
            <div key={row.label}>
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/50 sm:text-[11px]">
                {row.label}
              </dt>
              <dd className="mt-2 text-base leading-relaxed text-black/85 sm:text-[17px]">
                {row.line}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.section>
  );
}
