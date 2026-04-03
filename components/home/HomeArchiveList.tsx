"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ARCHIVE_PROJECTS } from "@/components/archive/archive-data";

const snap = { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const };

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: snap },
};

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function HomeArchiveList() {
  return (
    <motion.section
      id="archive"
      className="scroll-mt-1 bg-[#fff8dc] px-6 py-20 text-black sm:px-10 md:py-28 md:px-12"
      aria-labelledby="archive-home-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/50 sm:text-xs">
          THE_ARCHIVE
        </p>
        <h2
          id="archive-home-heading"
          className="kanso-heading mt-3 text-[clamp(2.5rem,8vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-[#D32F2F]"
        >
          Projects
        </h2>

        <ul className="mt-12 space-y-12">
          {ARCHIVE_PROJECTS.map((project) => {
            const actionable = project.href !== "#";
            const inner = (
              <>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/45 sm:text-[11px]">
                  {project.year} · {project.type}
                </span>
                <span className="kanso-heading mt-2 block text-xl font-bold uppercase tracking-tight text-black sm:text-2xl">
                  {project.title}
                </span>
              </>
            );

            return (
              <li key={project.id} className="first:pt-0">
                {actionable && isInternalHref(project.href) ? (
                  <Link
                    href={project.href}
                    className="block transition-colors hover:text-[#d32f2f]"
                  >
                    {inner}
                  </Link>
                ) : actionable ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-colors hover:text-[#d32f2f]"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="opacity-50">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>

        <Link
          href="/projects"
          className="mt-12 inline-block font-mono text-[10px] uppercase tracking-[0.24em] text-[#d32f2f] transition-colors duration-200 hover:text-black sm:text-[11px]"
        >
          Full archive →
        </Link>
      </div>
    </motion.section>
  );
}
