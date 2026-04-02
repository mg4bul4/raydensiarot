"use client";

import { motion } from "framer-motion";
import { ARCHIVE_PROJECTS } from "./archive-data";
import { ProjectCard } from "./ProjectCard";

const mechanical = [0.4, 0, 0.2, 1] as const;

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: mechanical },
  },
};

const gridStagger = {
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const tileEntry = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: mechanical },
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
        <div className="mb-10 flex flex-col gap-5 border-b border-fg-stark pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--hud-muted)] sm:text-xs">
              Index
            </p>
            <h2
              id="archive-heading"
              className="font-display text-5xl uppercase leading-none tracking-tight text-fg-stark sm:text-6xl md:text-7xl"
              style={{ textShadow: "4px 4px 0 var(--neon-magenta)" }}
            >
              Selected work
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs uppercase leading-relaxed tracking-[0.16em] text-fg-stark/60 sm:text-sm">
            Product, community, and studio sites — interface design with build-ready
            handoff.
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
