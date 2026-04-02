"use client";

import { motion } from "framer-motion";
import { Crosshair } from "lucide-react";
import Link from "next/link";
import { HeroInvaders } from "./HeroInvaders";
import { Marquee } from "./Marquee";

const ROLE_LINE = "UI DESIGNER & CREATIVE DEVELOPER";

const mechanical = [0.4, 0, 0.2, 1] as const;
const snap = { duration: 0.2, ease: mechanical };

const fast = {
  hidden: { y: -16, opacity: 0 },
  show: { y: 0, opacity: 1, transition: snap },
};

const heavy = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: snap },
};

const staggerHud = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.03 } },
};

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-bg-deep text-fg-stark"
      aria-labelledby="hero-heading"
    >
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

      <div className="relative z-10 flex flex-1 flex-col px-4 pb-10 pt-6 sm:px-6 md:px-10">
        <div
          className="pointer-events-none absolute left-4 top-28 z-10 font-mono text-[9px] uppercase leading-tight tracking-[0.14em] text-fg-stark/45 sm:left-6 sm:top-32 sm:text-[10px] md:left-10"
          aria-hidden
        >
          LOC: ARLINGTON_TX
        </div>
        <div
          className="pointer-events-none absolute right-4 top-28 z-10 text-right font-mono text-[9px] uppercase leading-tight tracking-[0.14em] text-fg-stark/45 sm:right-6 sm:top-32 sm:text-[10px] md:right-10"
          aria-hidden
        >
          VER: 2026.04
        </div>
        <div
          className="pointer-events-none absolute bottom-36 left-4 z-10 font-mono text-[9px] uppercase leading-tight tracking-[0.14em] text-fg-stark/45 sm:bottom-40 sm:left-6 sm:text-[10px] md:left-10"
          aria-hidden
        >
          STATUS: ONLINE
        </div>

        <div className="pointer-events-none absolute left-3 top-[calc(3.25rem+1px)] text-fg-stark/35 sm:left-5 md:left-8">
          <Crosshair className="size-6 sm:size-8" strokeWidth={1.25} aria-hidden />
        </div>
        <div className="pointer-events-none absolute right-3 top-[calc(3.25rem+1px)] rotate-90 text-fg-stark/35 sm:right-5 md:right-8">
          <Crosshair className="size-6 sm:size-8" strokeWidth={1.25} aria-hidden />
        </div>

        <motion.div
          className="flex flex-1 flex-col items-stretch justify-center border-b border-fg-stark pb-[max(6rem,12vh)] pt-12 sm:pb-20 sm:pt-16"
          initial="hidden"
          animate="show"
          variants={staggerHud}
        >
          <motion.h1
            id="hero-heading"
            className="font-normal uppercase text-fg-stark"
            variants={heavy}
          >
            <span className="block font-display text-[clamp(3.25rem,14vw,10rem)] leading-[0.82] tracking-tighter">
              RAYDEN
            </span>
            <span className="mt-1 block font-display text-[clamp(2.5rem,11vw,8rem)] leading-[0.82] tracking-tighter">
              SIAROT
            </span>
            <span className="mt-8 block max-w-5xl font-display text-[clamp(1rem,3.2vw,2.75rem)] leading-[1.05] tracking-tighter sm:mt-10">
              {ROLE_LINE}
            </span>
          </motion.h1>

          <motion.div
            className="mt-12 w-full sm:mt-14 sm:w-auto"
            variants={fast}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
            transition={snap}
          >
            <Link
              href="/about"
              className="flex min-h-[3.25rem] w-full items-center justify-center border border-fg-stark bg-bg-deep px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-fg-stark transition-colors hover:bg-neon-green hover:text-bg-deep hover:border-neon-green sm:min-h-0 sm:w-auto sm:px-8 sm:text-sm"
            >
              ABOUT ME
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[15] mix-blend-overlay">
        <div className="crt-scanlines absolute inset-0 opacity-40" />
        <div className="noise-grain absolute inset-0 opacity-40 mix-blend-soft-light" />
      </div>
    </section>
  );
}
