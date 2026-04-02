"use client";

import { motion } from "framer-motion";

const mechanical = [0.4, 0, 0.2, 1] as const;

type StatRow = {
  key: string;
  label: string;
  filled: number;
  total: number;
  note: string;
};

const STATS: StatRow[] = [
  {
    key: "ux",
    label: "UI / UX",
    filled: 9,
    total: 10,
    note: "Research-backed layouts, responsive systems, and design QA.",
  },
  {
    key: "wire",
    label: "Wireframing",
    filled: 8,
    total: 10,
    note: "IA maps, annotated flows, and tidy low-fi structure.",
  },
  {
    key: "proto",
    label: "Prototyping",
    filled: 8,
    total: 10,
    note: "Clickable paths and motion studies before engineering lock-in.",
  },
  {
    key: "fe",
    label: "Front-end",
    filled: 7,
    total: 10,
    note: "React / Next.js implementation aligned to design tokens.",
  },
  {
    key: "cd",
    label: "Creative direction",
    filled: 9,
    total: 10,
    note: "Narrative, visual language, and art direction across touchpoints.",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: mechanical },
  },
};

const rowStagger = {
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.04 },
  },
};

const rowEntry = {
  hidden: { opacity: 0, x: -14 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.26, ease: mechanical },
  },
};

function BlockMeter({ filled, total }: { filled: number; total: number }) {
  return (
    <div
      className="flex flex-wrap gap-1"
      role="img"
      aria-label={`${filled} of ${total}`}
    >
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-3 w-3 border border-fg-stark sm:h-3.5 sm:w-3.5 ${
            i < filled ? "bg-neon-green shadow-[2px_2px_0_0_var(--neon-yellow)]" : "bg-bg-deep"
          }`}
        />
      ))}
    </div>
  );
}

export function PlayerStats() {
  return (
    <motion.section
      id="player-stats"
      className="scroll-mt-2 border-t-2 border-fg-stark bg-[#060606] px-4 py-16 sm:px-6 md:py-24 md:px-10"
      aria-labelledby="stats-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionReveal}
    >
      <div className="mx-auto max-w-4xl">
        <div className="border-2 border-fg-stark bg-bg-deep shadow-[8px_8px_0_0_var(--neon-green)]">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-fg-stark px-4 py-3 sm:px-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--hud-muted)] sm:text-xs">
              Capabilities
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-stark/70 sm:text-xs">
              Viewport 1440 · sRGB
            </span>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8 flex flex-col gap-4 border-b border-dashed border-fg-stark/40 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <h2
                id="stats-heading"
                className="font-display text-4xl uppercase leading-none tracking-tight text-fg-stark sm:text-5xl"
              >
                Skill spread
              </h2>
              <p className="max-w-sm font-mono text-xs uppercase leading-relaxed tracking-wide text-fg-stark/55 sm:text-right sm:text-sm">
                Relative emphasis across engagements — not a certification score.
              </p>
            </div>

            <motion.div
              className="space-y-5"
              variants={rowStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {STATS.map((stat) => (
                <motion.div
                  key={stat.key}
                  variants={rowEntry}
                  className="border border-fg-stark/35 bg-[#0a0a0a] p-4 sm:p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                    <div className="min-w-0 sm:max-w-[55%]">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-fg-stark sm:text-sm">
                        {stat.label}
                      </p>
                      <p className="mt-2 font-mono text-[11px] leading-relaxed tracking-wide text-fg-stark/50 sm:text-xs">
                        {stat.note}
                      </p>
                    </div>
                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[220px]">
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[var(--hud-muted)] sm:text-xs">
                        <span>Scale</span>
                        <span className="tabular-nums text-fg-stark/90">
                          {stat.filled}/{stat.total}
                        </span>
                      </div>
                      <BlockMeter filled={stat.filled} total={stat.total} />
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
