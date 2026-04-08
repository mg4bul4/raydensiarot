"use client";

import { motion } from "framer-motion";

const mechanical = [0.4, 0, 0.2, 1] as const;
const snap = { duration: 0.2, ease: mechanical };

type SkillRow = {
  key: string;
  label: string;
  filled: number;
  total: number;
  detail: string;
};

const SKILLS: SkillRow[] = [
  {
    key: "ui-ux",
    label: "UI / UX design",
    filled: 9,
    total: 10,
    detail: "Systems, flows, typographic rhythm, and handoff-ready UI.",
  },
  {
    key: "front-end",
    label: "Front-end development",
    filled: 8,
    total: 10,
    detail: "React and Next.js surfaces wired to design tokens and motion.",
  },
  {
    key: "creative",
    label: "Creative direction",
    filled: 9,
    total: 10,
    detail: "Visual language, narrative, and cross-touchpoint consistency.",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: snap },
};

const rowStagger = {
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.03 } },
};

const rowEntry = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: snap },
};

function SkillBar({ filled, total }: { filled: number; total: number }) {
  const pct = Math.round((filled / total) * 100);
  return (
    <div
      className="h-1 w-full max-w-[200px] overflow-hidden bg-black/10"
      role="img"
      aria-label={`Relative emphasis ${pct} percent`}
    >
      <div
        className="h-full bg-[#af101a] transition-[width] duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function PlayerStats() {
  return (
    <motion.section
      id="player-stats"
      className="scroll-mt-1 bg-[#fff8dc] px-6 py-20 text-black sm:px-10 md:py-28 md:px-12"
      aria-labelledby="stats-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionReveal}
    >
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/50 sm:text-xs">
          PLAYER_STATS
        </p>
        <h2
          id="stats-heading"
          className="kanso-heading mt-3 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#af101a] sm:text-5xl"
        >
          Capabilities
        </h2>
        <p className="mt-6 max-w-prose font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-black/50 sm:text-[11px]">
          Relative emphasis across practice areas, not a score.
        </p>

        <motion.div
          className="mt-16 space-y-14"
          variants={rowStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SKILLS.map((row) => (
            <motion.div key={row.key} variants={rowEntry}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0 flex-1">
                  <h3 className="kanso-heading text-lg font-bold uppercase tracking-tight text-black sm:text-xl">
                    {row.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/80 sm:text-[15px]">
                    {row.detail}
                  </p>
                </div>
                <div className="shrink-0 sm:pl-8">
                  <SkillBar filled={row.filled} total={row.total} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
