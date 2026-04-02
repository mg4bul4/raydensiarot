"use client";

import { motion } from "framer-motion";
import { Crosshair } from "lucide-react";
import { HeroInvaders } from "./HeroInvaders";
import { Marquee } from "./Marquee";

const DISPLAY_NAME = "RAYDEN SIAROT";
const ROLE_LINE = "UI DESIGNER & CREATIVE DEVELOPER";

const mechanical = [0.4, 0, 0.2, 1] as const;

const slamFast = {
  hidden: { y: -24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.28, ease: mechanical },
  },
};

const slamHeavy = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.32, ease: mechanical },
  },
};

const staggerHud = {
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.04 },
  },
};

function scrollToArchive() {
  document.getElementById("archive")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-bg-deep text-fg-stark"
      aria-labelledby="hero-heading"
    >
      {/* Structural grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "clamp(28px, 6vw, 56px) clamp(28px, 6vw, 56px)",
        }}
      />

      <HeroInvaders />

      <Marquee />

      <motion.div
        className="relative z-10 flex flex-1 flex-col px-4 pb-10 pt-6 sm:px-6 md:px-10"
        initial="hidden"
        animate="show"
        variants={staggerHud}
      >
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-fg-stark pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--hud-muted)] sm:text-[11px] sm:tracking-[0.22em]">
          <motion.span variants={slamFast}>Viewport · 1440px</motion.span>
          <motion.span variants={slamFast} className="hidden sm:inline">
            Render · Next.js
          </motion.span>
          <motion.span variants={slamFast}>Color · sRGB</motion.span>
        </div>

        {/* Corner brackets */}
        <div className="pointer-events-none absolute left-3 top-[calc(3.25rem+1px)] text-neon-yellow/70 sm:left-5 md:left-8">
          <Crosshair className="size-6 sm:size-8" strokeWidth={1.25} aria-hidden />
        </div>
        <div className="pointer-events-none absolute right-3 top-[calc(3.25rem+1px)] rotate-90 text-neon-yellow/70 sm:right-5 md:right-8">
          <Crosshair className="size-6 sm:size-8" strokeWidth={1.25} aria-hidden />
        </div>

        <div className="flex flex-1 flex-col items-stretch justify-center py-8 sm:py-12 md:py-16">
          <motion.h1
            id="hero-heading"
            className="font-display text-[clamp(2.75rem,12vw,9rem)] font-normal uppercase leading-[0.88] tracking-tight text-fg-stark"
            style={{ textShadow: "4px 4px 0 var(--neon-yellow)" }}
            variants={slamHeavy}
          >
            {DISPLAY_NAME}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-4xl font-mono text-sm uppercase leading-relaxed tracking-[0.2em] text-fg-stark/75 sm:text-base sm:tracking-[0.24em]"
            variants={slamFast}
          >
            {ROLE_LINE}
          </motion.p>

          <motion.div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center" variants={slamFast}>
            <motion.button
              type="button"
              onClick={scrollToArchive}
              className="group relative inline-flex w-full items-center justify-center border-2 border-fg-stark bg-fg-stark px-8 py-5 font-mono text-sm font-medium uppercase tracking-[0.2em] text-bg-deep shadow-[6px_6px_0_0_var(--neon-green)] sm:w-auto sm:py-4"
              transition={{ duration: 0.1, ease: mechanical }}
              whileHover={{
                backgroundColor: "var(--neon-yellow)",
                color: "var(--bg-deep)",
                borderColor: "var(--neon-yellow)",
                boxShadow: "6px 6px 0 0 var(--neon-magenta)",
              }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="relative z-10">Selected work</span>
            </motion.button>
          </motion.div>
        </div>

        <motion.footer
          className="mt-auto border-t border-fg-stark pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--hud-muted)] sm:text-[11px]"
          variants={slamFast}
        >
          UI & front-end — available for contract and full-time
        </motion.footer>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[15] mix-blend-overlay">
        <div className="crt-scanlines absolute inset-0 opacity-50" />
        <div className="noise-grain absolute inset-0 opacity-50 mix-blend-soft-light" />
      </div>
    </section>
  );
}
