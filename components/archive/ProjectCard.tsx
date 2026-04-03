"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ArchiveProject } from "./archive-data";

type ProjectCardProps = {
  project: ArchiveProject;
  /** Bento: thin border or subtle fill, sans meta row. */
  variant?: "default" | "bento";
};

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function ProjectCard({
  project,
  variant = "default",
}: ProjectCardProps) {
  const isActionable = project.href !== "#";
  const internalLink = isActionable && isInternalHref(project.href);
  const ctaText = project.ctaLabel ?? (isActionable ? "Open" : "Unavailable");

  const bodyCopy =
    project.mission != null && project.mission.length > 0
      ? project.mission
      : (project.description ?? "");

  const bento = variant === "bento";

  const shell = bento
    ? "rounded-sm border border-[#D32F2F] bg-[#F5EED7] p-6 sm:p-8"
    : "";

  const metaRow = bento ? (
    <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11px] font-medium uppercase tracking-[0.16em] text-black/60 sm:text-xs">
      <span>
        <span className="text-black/35">Type</span> {project.type}
      </span>
      <span>
        <span className="text-black/35">Role</span> {project.role}
      </span>
      <span>
        <span className="text-black/35">Year</span> {project.year}
      </span>
    </div>
  ) : (
    <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-black/55 sm:text-[11px]">
      <span className="text-black/40">Role</span> {project.role}{" "}
      <span className="text-black/30">·</span>{" "}
      <span className="text-black/40">Year</span> {project.year}{" "}
      <span className="text-black/30">·</span>{" "}
      <span className="text-black/40">Type</span> {project.type}
    </p>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className={`group relative flex flex-col ${bento ? "" : "pt-2"}`}
    >
      {isActionable && internalLink ? (
        <Link
          href={project.href}
          className="absolute inset-0 z-10 cursor-pointer rounded-sm"
          aria-label={`${project.title} — open project`}
        />
      ) : isActionable ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 cursor-pointer rounded-sm"
          aria-label={`${project.title} — open link`}
        />
      ) : null}

      <div className={`relative z-[1] flex flex-col ${shell}`}>
        {metaRow}

        {project.outcomeLead ? (
          <p
            className={`mt-5 border-l-2 border-[#d32f2f]/75 pl-4 text-sm font-medium leading-snug text-black/90 sm:text-[15px] ${bento ? "" : "max-w-prose"}`}
          >
            {project.outcomeLead}
          </p>
        ) : null}

        <h3
          className={`kanso-heading font-bold uppercase leading-tight text-black transition-colors group-hover:text-[#d32f2f] sm:text-3xl ${project.outcomeLead ? "mt-5" : "mt-6"} text-2xl`}
        >
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-black/85 sm:text-[15px]">
          {bodyCopy}
        </p>

        {project.impactPoints && project.impactPoints.length > 0 ? (
          <div className="mt-8">
            <p
              className={
                bento
                  ? "text-[10px] font-medium uppercase tracking-[0.2em] text-black/45 sm:text-[11px]"
                  : "font-mono text-[10px] uppercase tracking-[0.2em] text-black/45 sm:text-[11px]"
              }
            >
              Impact
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/80">
              {project.impactPoints.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <p
          className={`mt-10 text-[10px] uppercase tracking-[0.18em] sm:text-[11px] ${
            bento ? "font-medium" : "font-mono"
          } ${isActionable ? "text-[#d32f2f]" : "text-black/35"}`}
        >
          {ctaText}
        </p>
      </div>
    </motion.article>
  );
}
