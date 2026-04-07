"use client";

import { motion } from "framer-motion";
import { ARCHIVE_PROJECTS } from "./archive-data";
import { ProjectCard } from "./ProjectCard";

const snap = { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const };

const sectionReveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: snap },
};

const gridStagger = {
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

const tileEntry = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: snap },
};

type ArchiveProps = {
  /** When false, only the project grid is rendered (e.g. /projects page supplies its own title). */
  showSectionHeader?: boolean;
  /** Bento cards with thin border / subtle fill on the projects index. */
  cardVariant?: "default" | "bento";
};

export function Archive({
  showSectionHeader = true,
  cardVariant = "default",
}: ArchiveProps) {
  return (
    <motion.section
      id="archive"
      className="scroll-mt-1 bg-[#fff8dc] px-6 py-20 text-black sm:px-10 md:py-28 md:px-12"
      aria-labelledby={showSectionHeader ? "archive-heading" : undefined}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionReveal}
    >
      <div className="relative mx-auto max-w-6xl">
        {showSectionHeader ? (
          <div className="mb-16 md:mb-20">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/50 sm:text-xs">
              THE_ARCHIVE
            </p>
            <h2
              id="archive-heading"
              className="kanso-heading mt-3 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#af101a] sm:text-5xl md:text-6xl"
            >
              Selected work
            </h2>
          </div>
        ) : null}

        <motion.div
          className={
            cardVariant === "bento"
              ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8"
              : "grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-20 lg:grid-cols-2"
          }
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {ARCHIVE_PROJECTS.map((project) => (
            <motion.div key={project.id} variants={tileEntry}>
              <ProjectCard project={project} variant={cardVariant} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
