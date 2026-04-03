"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import type { ArchiveProject } from "./archive-data";

const mechanical = [0.4, 0, 0.2, 1] as const;

const defaultCardVariants: Variants = {
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

const missionLeadCardVariants: Variants = {
  rest: {
    backgroundColor: "var(--bg-deep)",
    color: "var(--fg-stark)",
    boxShadow: "4px 4px 0 0 var(--fg-stark)",
  },
  hover: {
    backgroundColor: "var(--fg-stark)",
    color: "var(--bg-deep)",
    boxShadow: "6px 6px 0 0 var(--neon-green)",
    filter: [
      "none",
      "brightness(1.05)",
      "drop-shadow(0 0 14px rgba(0, 255, 102, 0.55))",
      "brightness(1)",
      "none",
    ],
    transition: {
      duration: 0.35,
      ease: mechanical,
      filter: { duration: 0.32, times: [0, 0.2, 0.45, 0.7, 1], ease: "linear" },
      boxShadow: { duration: 0.2, ease: mechanical },
      backgroundColor: { duration: 0.2, ease: mechanical },
      color: { duration: 0.2, ease: mechanical },
    },
  },
};

const missionGlitchLayer: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: [0, 0.45, 0.12, 0.38, 0.08, 0],
    transition: { duration: 0.4, ease: "linear" },
  },
};

type ProjectCardProps = {
  project: ArchiveProject;
};

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isActionable = project.href !== "#";
  const internalLink = isActionable && isInternalHref(project.href);
  const isMissionLead = project.cardVariant === "missionLead";
  const variants = isMissionLead ? missionLeadCardVariants : defaultCardVariants;
  const ctaText = project.ctaLabel ?? "( EXECUTE_VIEW )";

  const bodyCopy =
    project.mission != null && project.mission.length > 0
      ? project.mission
      : project.description ?? "";

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={variants}
      className="group relative flex min-h-[240px] flex-col border border-fg-stark"
    >
      {isMissionLead ? (
        <motion.div
          aria-hidden
          variants={missionGlitchLayer}
          className="pointer-events-none absolute inset-0 z-[1] bg-neon-green mix-blend-overlay"
        />
      ) : null}

      {isActionable && internalLink ? (
        <Link
          href={project.href}
          className="absolute inset-0 z-20 cursor-pointer"
          aria-label={`${project.title} — open project`}
        />
      ) : isActionable ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 cursor-pointer"
          aria-label={`${project.title} — open deployment`}
        />
      ) : null}

      <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-5">
        {project.projectIdLine ? (
          <p className="font-mono text-[8px] uppercase leading-snug tracking-[0.14em] text-fg-stark/45 group-hover:text-bg-deep/55 sm:text-[9px]">
            {project.projectIdLine}
          </p>
        ) : null}

        <p
          className={`border border-fg-stark bg-bg-deep px-2 py-1.5 font-mono text-[8px] uppercase leading-snug tracking-[0.12em] text-fg-stark group-hover:border-bg-deep group-hover:bg-fg-stark group-hover:text-bg-deep sm:text-[9px] sm:tracking-[0.14em] ${
            project.projectIdLine ? "mt-2" : ""
          }`}
        >
          {project.typeRoleLine}
        </p>

        <h3 className="mt-5 font-display text-2xl font-normal uppercase leading-none tracking-tighter text-fg-stark sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 font-mono text-[11px] leading-relaxed tracking-wide text-fg-stark/60 group-hover:text-bg-deep/70 sm:text-xs">
          {bodyCopy}
        </p>

        {project.impactReport && project.impactReport.length > 0 ? (
          <div className="mt-4 border-l border-fg-stark/40 pl-3 group-hover:border-bg-deep/35">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-fg-stark/45 group-hover:text-bg-deep/50">
              IMPACT_REPORT
            </p>
            <ul className="mt-2 space-y-2 font-mono text-[10px] leading-relaxed text-fg-stark/75 group-hover:text-bg-deep/75 sm:text-[11px]">
              {project.impactReport.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <p
          className={`mt-auto border-t border-fg-stark pt-4 font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px] ${
            isActionable || isMissionLead
              ? "text-neon-green group-hover:text-neon-green"
              : "text-fg-stark/40 group-hover:text-bg-deep/50"
          }`}
        >
          {ctaText}
        </p>
      </div>
    </motion.article>
  );
}
