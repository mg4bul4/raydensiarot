"use client";

import { motion, type Variants } from "framer-motion";
import type { ArchiveProject } from "./archive-data";

const mechanical = [0.4, 0, 0.2, 1] as const;

const cardVariants: Variants = {
  rest: {
    backgroundColor: "var(--bg-deep)",
    color: "var(--fg-stark)",
    boxShadow: "4px 4px 0 0 var(--fg-stark)",
  },
  hover: {
    backgroundColor: "var(--fg-stark)",
    color: "var(--bg-deep)",
    boxShadow: "4px 4px 0 0 var(--neon-green)",
    transition: { duration: 0.2, ease: mechanical },
  },
};

type ProjectCardProps = {
  project: ArchiveProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isActionable = project.href !== "#";

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardVariants}
      className="group relative flex min-h-[240px] flex-col border border-fg-stark"
    >
      {isActionable ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 cursor-pointer"
          aria-label={`${project.title} — open deployment`}
        />
      ) : null}

      <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-5">
        <p className="border border-fg-stark bg-bg-deep px-2 py-1.5 font-mono text-[8px] uppercase leading-snug tracking-[0.12em] text-fg-stark group-hover:border-bg-deep group-hover:bg-fg-stark group-hover:text-bg-deep sm:text-[9px] sm:tracking-[0.14em]">
          {project.typeRoleLine}
        </p>

        <h3 className="mt-5 font-display text-2xl font-normal uppercase leading-none tracking-tighter text-fg-stark sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 font-mono text-[11px] leading-relaxed tracking-wide text-fg-stark/60 group-hover:text-bg-deep/70 sm:text-xs">
          {project.description}
        </p>

        <p
          className={`mt-auto border-t border-fg-stark pt-4 font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px] ${
            isActionable
              ? "text-neon-green group-hover:text-neon-green"
              : "text-fg-stark/40 group-hover:text-bg-deep/50"
          }`}
        >
          ( EXECUTE_VIEW )
        </p>
      </div>
    </motion.article>
  );
}
