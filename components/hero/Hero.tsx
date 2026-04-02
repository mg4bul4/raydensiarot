"use client";

import { motion } from "framer-motion";
import { Crosshair, Radio } from "lucide-react";
import { Marquee } from "./Marquee";

const DISPLAY_NAME = "RAYDEN SIAROT";
const ROLE_LINE = "UI DESIGNER & CREATIVE DEVELOPER";

const slamFast = {
  hidden: { y: -48, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 520, damping: 28, mass: 0.85 },
  },
};

const slamHeavy = {
  hidden: { y: 72, opacity: 0, skewX: -6 },
  show: {
    y: 0,
    opacity: 1,
    skewX: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 26, mass: 1.1 },
  },
};

const staggerHud = {
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
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

      <Marquee />

      <motion.div
        className="relative z-10 flex flex-1 flex-col px-4 pb-10 pt-6 sm:px-6 md:px-10"
        initial="hidden"
        animate="show"
        variants={staggerHud}
      >
        {/* Top HUD */}
        <div className="flex items-start justify-between gap-4 border-b border-fg-stark pb-4 font-mono text-[10px] uppercase tracking-widest text-[var(--hud-muted)] sm:text-xs">
          <motion.div
            className="flex items-center gap-2 text-neon-green"
            variants={slamFast}
          >
            <Radio className="size-4 shrink-0" strokeWidth={2} />
            <span className="leading-none">SIG: LIVE // CHANNEL_01</span>
          </motion.div>
          <motion.div className="hidden text-right sm:block" variants={slamFast}>
            <span className="text-fg-stark">COORD</span>{" "}
            <span className="text-neon-magenta">48.2143°N</span>
            <span className="mx-1 text-fg-stark/40">|</span>
            <span className="text-neon-magenta">16.3707°E</span>
          </motion.div>
        </div>

        {/* Corner brackets */}
        <div className="pointer-events-none absolute left-3 top-[calc(3.25rem+1px)] text-neon-yellow/80 sm:left-5 md:left-8">
          <Crosshair className="size-6 sm:size-8" strokeWidth={1.25} />
        </div>
        <div className="pointer-events-none absolute right-3 top-[calc(3.25rem+1px)] rotate-90 text-neon-yellow/80 sm:right-5 md:right-8">
          <Crosshair className="size-6 sm:size-8" strokeWidth={1.25} />
        </div>

        <div className="flex flex-1 flex-col items-stretch justify-center py-8 sm:py-12 md:py-16">
          <motion.p
            className="mb-3 font-mono text-[10px] uppercase tracking-[0.5em] text-neon-magenta sm:text-xs sm:tracking-[0.65em]"
            variants={slamFast}
          >
            PLAYER_01 // SELECT_PROFILE
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="font-display text-[clamp(2.75rem,12vw,9rem)] font-normal uppercase leading-[0.88] tracking-tight text-fg-stark"
            style={{ textShadow: "4px 4px 0 var(--neon-yellow)" }}
            variants={slamHeavy}
          >
            {DISPLAY_NAME}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-4xl font-mono text-sm uppercase leading-relaxed tracking-[0.2em] text-fg-stark/85 sm:text-base sm:tracking-[0.28em]"
            variants={slamFast}
          >
            {ROLE_LINE}
          </motion.p>

          <motion.div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center" variants={slamFast}>
            <motion.button
              type="button"
              onClick={scrollToArchive}
              className="group relative inline-flex w-full items-center justify-center border-2 border-fg-stark bg-fg-stark px-8 py-5 font-mono text-sm font-medium uppercase tracking-[0.25em] text-bg-deep shadow-[6px_6px_0_0_var(--neon-green)] transition-colors sm:w-auto sm:py-4"
              whileHover={{
                backgroundColor: "var(--neon-yellow)",
                color: "var(--bg-deep)",
                borderColor: "var(--neon-yellow)",
                boxShadow: "6px 6px 0 0 var(--neon-magenta)",
                transition: { duration: 0.08 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="h-2 w-2 bg-neon-green anim-blink group-hover:bg-bg-deep" />
                START_GAME
              </span>
            </motion.button>

            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--hud-muted)] sm:text-xs">
              [ press to load archive ]
            </p>
          </motion.div>
        </div>

        <motion.footer
          className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-fg-stark pt-4 font-mono text-[10px] uppercase tracking-widest text-[var(--hud-muted)] sm:text-xs"
          variants={slamFast}
        >
          <span>BUILD: PROTOTYPE_UI</span>
          <span className="text-neon-yellow">FIELD_READY: TRUE</span>
        </motion.footer>
      </motion.div>

      {/* CRT + noise stacks */}
      <div className="pointer-events-none absolute inset-0 z-[15] mix-blend-overlay">
        <div className="crt-flicker-layer absolute inset-0 bg-neon-green/10" />
        <div className="crt-scanlines absolute inset-0 opacity-70" />
        <div className="noise-grain absolute inset-0 opacity-80 mix-blend-soft-light" />
      </div>
    </section>
  );
}
