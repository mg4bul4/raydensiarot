"use client";

import { motion } from "framer-motion";
import { ARCHIVE_PROJECTS } from "./archive-data";
import { ProjectCard } from "./ProjectCard";

const mechanical = [0.4, 0, 0.2, 1] as const;
const snap = { duration: 0.2, ease: mechanical };

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: snap },
};

const gridStagger = {
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
};

const tileEntry = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: snap },
};

export function Archive() {
  return (
    <motion.section
      id="archive"
      className="scroll-mt-1 border-t border-fg-stark bg-bg-deep px-4 py-16 sm:px-6 md:py-24 md:px-10"
      aria-labelledby="archive-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionReveal}
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 border-b border-fg-stark pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-fg-stark/50 sm:text-xs">
              DEPLOYMENTS
            </p>
            <h2
              id="archive-heading"
              className="font-display text-5xl font-normal uppercase leading-none tracking-tighter text-fg-stark sm:text-6xl md:text-7xl"
            >
              THE_ARCHIVE
            </h2>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5"
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
