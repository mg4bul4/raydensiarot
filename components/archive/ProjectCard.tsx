"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { ArchiveProject } from "./archive-data";

const mechanical = [0.4, 0, 0.2, 1] as const;

const cardVariants: Variants = {
  rest: {
    scale: 1,
    x: 0,
    backgroundColor: "rgba(10, 10, 10, 0.96)",
    color: "var(--fg-stark)",
    filter: "none",
    boxShadow: "6px 6px 0 0 var(--neon-yellow)",
  },
  hover: {
    scale: 1,
    x: [0, -3, 2, 0],
    backgroundColor: "var(--fg-stark)",
    color: "var(--bg-deep)",
    filter: ["none", "invert(1)", "invert(0)"],
    boxShadow: "8px 8px 0 0 var(--neon-magenta)",
    transition: {
      duration: 0.22,
      ease: mechanical,
      x: { duration: 0.16, times: [0, 0.35, 0.7, 1], ease: "linear" },
      filter: { duration: 0.14, times: [0, 0.45, 1], ease: "linear" },
      backgroundColor: { duration: 0.1, ease: mechanical },
      color: { duration: 0.1, ease: mechanical },
    },
  },
};

const glitchLayerVariants: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: [0, 0.5, 0.1, 0.45, 0],
    transition: { duration: 0.2, ease: "linear" },
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
      className="group relative flex min-h-[260px] flex-col border-2 border-fg-stark"
    >
      {isActionable ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 cursor-pointer"
          aria-label={`${project.title} — opens in a new tab`}
        />
      ) : null}

      <motion.div
        aria-hidden
        variants={glitchLayerVariants}
        className="pointer-events-none absolute inset-0 z-[5] mix-blend-screen"
      >
        <div className="absolute inset-0 translate-x-[2px] bg-neon-magenta/30" />
        <div className="absolute inset-0 -translate-x-[2px] bg-neon-green/25" />
      </motion.div>

      <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-end gap-2">
          <p
            className="border border-current bg-bg-deep px-2 py-1 font-mono text-[9px] uppercase leading-none tracking-[0.18em] text-fg-stark group-hover:border-bg-deep group-hover:bg-fg-stark group-hover:text-bg-deep sm:text-[10px] sm:tracking-[0.22em]"
            aria-label={`Role: ${project.role}. Year: ${project.year}.`}
          >
            {project.role.replace(/\s+/g, " ")} · {project.year}
          </p>
        </div>

        <h3 className="mt-5 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 font-mono text-[11px] uppercase leading-relaxed tracking-wide text-[var(--hud-muted)] group-hover:text-bg-deep/65 sm:text-xs">
          {project.focus}
        </p>

        <ul className="mt-6 space-y-1.5 border-t border-fg-stark/30 pt-4 font-mono text-[10px] uppercase leading-relaxed tracking-wider text-fg-stark/80 group-hover:text-bg-deep/75 sm:text-[11px] sm:tracking-wide">
          {project.specLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        {isActionable ? (
          <p className="mt-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-neon-green group-hover:text-neon-magenta">
            <ExternalLink className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
            Live
          </p>
        ) : (
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--hud-muted)] group-hover:text-bg-deep/50">
            Case study available on request
          </p>
        )}
      </div>
    </motion.article>
  );
}
