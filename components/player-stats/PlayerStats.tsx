"use client";

import { motion } from "framer-motion";
import { Cpu, Shield } from "lucide-react";

const PLAYER_HANDLE = "RAYDEN_SIAROT";
const BUILD_ID = "BUILD_07.26_BRUTAL_UI";

type StatRow = {
  key: string;
  label: string;
  filled: number;
  total: number;
  flavor: string;
};

const STATS: StatRow[] = [
  {
    key: "ux",
    label: "UI/UX_DESIGN",
    filled: 9,
    total: 10,
    flavor: "SYS: VISUAL_LOGIC // MAX clarity under constraints",
  },
  {
    key: "wire",
    label: "WIREFRAMING",
    filled: 8,
    total: 10,
    flavor: "SYS: IA_MAP // Fast iteration loops",
  },
  {
    key: "proto",
    label: "PROTOTYPING",
    filled: 8,
    total: 10,
    flavor: "SYS: MOTION_SPEC // Feel before ship",
  },
  {
    key: "fe",
    label: "FRONTEND_DEV",
    filled: 7,
    total: 10,
    flavor: "SYS: COMPONENT_GRAPH // React + precision CSS",
  },
  {
    key: "cd",
    label: "CREATIVE_DIRECTION",
    filled: 9,
    total: 10,
    flavor: "SYS: NORTH_STAR_TONE // Systems, not decoration",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 280, damping: 30 },
  },
};

const rowStagger = {
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const rowEntry = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 420, damping: 32 },
  },
};

function BlockMeter({ filled, total }: { filled: number; total: number }) {
  return (
    <div
      className="flex flex-wrap gap-1"
      role="img"
      aria-label={`${filled} out of ${total} blocks`}
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
          {/* Terminal chrome */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-fg-stark bg-[#0f0f0f] px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-[var(--hud-muted)] sm:text-xs">
            <span className="flex items-center gap-2 text-neon-yellow">
              <Cpu className="size-4" strokeWidth={2} aria-hidden />
              STAT_TERMINAL_V1
            </span>
            <span className="text-fg-stark/80">{BUILD_ID}</span>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-8 flex flex-col gap-4 border-b border-dashed border-fg-stark/40 pb-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.5em] text-neon-magenta sm:text-xs">
                  {"// PLAYER_PROFILE"}
                </p>
                <h2
                  id="stats-heading"
                  className="font-display text-4xl uppercase leading-none tracking-tight text-fg-stark sm:text-5xl"
                >
                  PLAYER_STATS
                </h2>
              </div>
              <div className="font-mono text-xs uppercase leading-relaxed tracking-wider text-[var(--hud-muted)] sm:text-right sm:text-sm">
                <p className="flex items-center gap-2 text-fg-stark sm:justify-end">
                  <Shield className="size-4 text-neon-green" strokeWidth={2} aria-hidden />
                  HANDLE: {PLAYER_HANDLE}
                </p>
                <p className="mt-2">CLASS: CREATIVE_OPERATIVE</p>
                <p className="mt-1 text-neon-yellow">STATUS: FIELD_READY</p>
              </div>
            </div>

            <motion.div
              className="space-y-6"
              variants={rowStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  variants={rowEntry}
                  className="border border-fg-stark/35 bg-[#0a0a0a] p-4 sm:p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                    <div className="min-w-0 shrink-0 sm:w-[200px]">
                      <p className="font-mono text-xs uppercase tracking-[0.28em] text-fg-stark sm:text-sm">
                        <span className="text-neon-green">[{String(index + 1).padStart(2, "0")}]</span>{" "}
                        {stat.label}
                      </p>
                      <p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-wider text-[var(--hud-muted)] sm:text-xs">
                        {stat.flavor}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 sm:items-end">
                      <div className="flex w-full flex-col gap-2 sm:w-full sm:max-w-md">
                        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[var(--hud-muted)] sm:text-xs">
                          <span>METER</span>
                          <span className="text-fg-stark">
                            {stat.filled}/{stat.total} UNITS
                          </span>
                        </div>
                        <BlockMeter filled={stat.filled} total={stat.total} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <p className="mt-8 border-t border-fg-stark pt-4 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--hud-muted)] sm:text-xs">
              END_TRANSMISSION // STATS_CACHE_FLUSH: FALSE
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
