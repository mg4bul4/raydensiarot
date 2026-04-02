"use client";

import { motion } from "framer-motion";
import { Database } from "lucide-react";
import { ARCHIVE_PROJECTS } from "./archive-data";
import { ProjectCard } from "./ProjectCard";

const sectionReveal = {
  hidden: { opacity: 0, y: 56 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 28 },
  },
};

const gridStagger = {
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const tileEntry = {
  hidden: { opacity: 0, y: 40, rotate: -2 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },
};

export function Archive() {
  return (
    <motion.section
      id="archive"
      className="scroll-mt-2 border-t-2 border-fg-stark bg-bg-deep px-4 py-16 sm:px-6 md:py-24 md:px-10"
      aria-labelledby="archive-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionReveal}
    >
      <div className="relative mx-auto max-w-7xl">
        <div
          className="pointer-events-none absolute -left-px -top-px hidden h-16 w-px bg-neon-green/80 md:block"
          aria-hidden
        />
        <div className="mb-10 flex flex-col gap-6 border-b border-fg-stark pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.45em] text-neon-green sm:text-xs">
              <Database className="size-4 shrink-0" strokeWidth={2} aria-hidden />
              MODULE // INVENTORY_SCAN
            </p>
            <h2
              id="archive-heading"
              className="font-display text-5xl uppercase leading-none tracking-tight text-fg-stark sm:text-6xl md:text-7xl"
              style={{ textShadow: "4px 4px 0 var(--neon-magenta)" }}
            >
              THE_ARCHIVE
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs uppercase leading-relaxed tracking-[0.2em] text-[var(--hud-muted)] sm:text-sm">
            Select a drop to decode payload. Hover triggers interference pattern +
            inverse buffer.
          </p>
        </div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {ARCHIVE_PROJECTS.map((project) => (
            <motion.div key={project.id} variants={tileEntry}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
