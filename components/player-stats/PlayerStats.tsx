"use client";

import { motion } from "framer-motion";

const mechanical = [0.4, 0, 0.2, 1] as const;
const snap = { duration: 0.2, ease: mechanical };

type SkillTree = {
  key: string;
  tree: string;
  label: string;
  filled: number;
  total: number;
  detail: string;
};

const SKILL_TREES: SkillTree[] = [
  {
    key: "t1",
    tree: "SKILL_TREE_01",
    label: "[UI/UX_DESIGN]",
    filled: 9,
    total: 10,
    detail: "Systems, flows, typographic rhythm, and handoff-ready UI.",
  },
  {
    key: "t2",
    tree: "SKILL_TREE_02",
    label: "[FRONT_END_DEV]",
    filled: 8,
    total: 10,
    detail: "React / Next.js surfaces wired to design tokens and motion.",
  },
  {
    key: "t3",
    tree: "SKILL_TREE_03",
    label: "[CREATIVE_DIRECTION]",
    filled: 9,
    total: 10,
    detail: "Visual language, narrative, and cross-touchpoint consistency.",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: snap },
};

const rowStagger = {
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.03 } },
};

const rowEntry = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: snap },
};

function LevelGlyph({ filled, total }: { filled: number; total: number }) {
  const cells = Array.from({ length: total }, (_, i) => (i < filled ? "■" : "□"));
  return (
    <span
      className="font-mono text-sm tabular-nums tracking-tight text-fg-stark sm:text-base"
      aria-label={`${filled} of ${total}`}
    >
      [{cells.join("")}]
    </span>
  );
}

export function PlayerStats() {
  return (
    <motion.section
      id="player-stats"
      className="scroll-mt-1 border-t border-fg-stark bg-bg-deep px-4 py-16 sm:px-6 md:py-24 md:px-10"
      aria-labelledby="stats-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionReveal}
    >
      <div className="mx-auto max-w-4xl">
        <div className="border border-fg-stark bg-bg-deep shadow-[4px_4px_0_0_var(--fg-stark)]">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-fg-stark px-4 py-3 sm:px-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-stark/50 sm:text-xs">
              SYSTEM_SPECS
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-stark/45 sm:text-xs">
              MANIFEST_V1
            </span>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <h2
              id="stats-heading"
              className="font-display text-4xl font-normal uppercase leading-none tracking-tighter text-fg-stark sm:text-5xl"
            >
              PLAYER_STATS
            </h2>
            <p className="mt-4 max-w-prose font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-fg-stark/50 sm:text-xs">
              Core capability allocation — block gauge denotes relative emphasis.
            </p>

            <motion.div
              className="mt-10 space-y-4"
              variants={rowStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {SKILL_TREES.map((row) => (
                <motion.div
                  key={row.key}
                  variants={rowEntry}
                  className="border border-fg-stark bg-bg-deep p-4 sm:p-5"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-stark/45 sm:text-xs">
                        {row.tree}: {row.label}
                      </p>
                      <p className="mt-2 font-mono text-[11px] leading-relaxed text-fg-stark/55 sm:text-xs">
                        {row.detail}
                      </p>
                    </div>
                    <div className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-fg-stark/40 sm:text-xs">
                      <span className="mr-2 text-fg-stark/50">LVL</span>
                      <LevelGlyph filled={row.filled} total={row.total} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
