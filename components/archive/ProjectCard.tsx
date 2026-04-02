"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { ArchiveProject } from "./archive-data";

const cardVariants: Variants = {
  rest: {
    scale: 1,
    x: 0,
    skewX: 0,
    backgroundColor: "rgba(10, 10, 10, 0.96)",
    color: "var(--fg-stark)",
    filter: "none",
    boxShadow: "6px 6px 0 0 var(--neon-yellow)",
  },
  hover: {
    scale: 1.02,
    x: [0, -6, 5, -3, 4, 0],
    skewX: [0, -3, 2, -1, 0],
    backgroundColor: "var(--fg-stark)",
    color: "var(--bg-deep)",
    filter: ["none", "invert(1)", "invert(0)", "hue-rotate(90deg)", "none"],
    boxShadow: "8px 8px 0 0 var(--neon-magenta)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      filter: { duration: 0.35, times: [0, 0.15, 0.35, 0.55, 1] },
      x: { duration: 0.45, times: [0, 0.15, 0.35, 0.55, 0.75, 1] },
      skewX: { duration: 0.45, times: [0, 0.2, 0.45, 0.7, 1] },
      backgroundColor: { duration: 0.07 },
      color: { duration: 0.07 },
    },
  },
};

const glitchLayerVariants: Variants = {
  rest: { opacity: 0, x: 0 },
  hover: {
    opacity: [0, 0.85, 0.2, 0.9, 0, 0.6, 0],
    x: [0, 3, -4, 2, -5, 0],
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const specsVariants: Variants = {
  rest: { opacity: 0, y: 6 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.12, ease: "easeOut" },
  },
};

type ProjectCardProps = {
  project: ArchiveProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isActionable = project.href !== "#";

  return (
    <motion.article
      layout
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardVariants}
      className="group relative flex min-h-[280px] flex-col border-2 border-fg-stark"
    >
      {isActionable ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 cursor-pointer"
          aria-label={`Open project ${project.title}`}
        />
      ) : null}

      {/* CRT-style RGB split ghost (decorative) */}
      <motion.div
        aria-hidden
        variants={glitchLayerVariants}
        className="pointer-events-none absolute inset-0 z-[5] mix-blend-screen"
      >
        <div className="absolute inset-0 translate-x-[2px] bg-neon-magenta/35" />
        <div className="absolute inset-0 -translate-x-[3px] bg-neon-green/30" />
        <div className="crt-scanlines absolute inset-0 opacity-40" />
      </motion.div>

      <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 border-b border-current pb-3 font-mono text-[10px] uppercase tracking-[0.35em] opacity-80">
          <span>DROP_{project.index}</span>
          {isActionable ? (
            <ExternalLink className="size-4 shrink-0" strokeWidth={2} aria-hidden />
          ) : (
            <span className="text-[9px] tracking-widest">NO_ROUTE</span>
          )}
        </div>

        <h3 className="mt-4 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
          {project.title}
        </h3>

        <dl className="mt-4 space-y-2 font-mono text-xs uppercase leading-snug tracking-wide sm:text-sm">
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <dt className="text-[var(--hud-muted)] group-hover:text-bg-deep/55">ROLE</dt>
            <dd className="font-medium">{project.role}</dd>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <dt className="text-[var(--hud-muted)] group-hover:text-bg-deep/55">VIBE</dt>
            <dd className="font-medium text-neon-yellow group-hover:text-neon-magenta">
              {project.vibe}
            </dd>
          </div>
        </dl>

        <motion.div
          variants={specsVariants}
          className="mt-auto border-t border-dashed border-current pt-4 font-mono text-[10px] uppercase leading-relaxed tracking-wider text-[var(--hud-muted)] group-hover:text-bg-deep/70 sm:text-xs"
        >
          <p className="mb-2 text-fg-stark/90 group-hover:text-bg-deep">RAW_READOUT //</p>
          <ul className="space-y-1">
            {project.specLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.article>
  );
}
