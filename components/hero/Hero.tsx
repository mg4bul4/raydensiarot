"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.4, 0, 0.2, 1] as const;

const titleReveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease },
  },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export function Hero() {
  return (
    <section
      className="relative flex min-h-dvh flex-col items-center justify-center bg-[#fff8dc] px-6 pb-24 pt-28 text-black sm:px-10 sm:pt-32 md:pb-32"
      aria-labelledby="hero-heading"
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        <motion.h1
          id="hero-heading"
          variants={titleReveal}
          className="kanso-heading text-[clamp(3rem,14vw,9rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-black"
        >
          Rayden Siarot
        </motion.h1>

        <motion.div
          variants={titleReveal}
          className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:gap-4"
        >
          <p className="font-mono text-[11px] uppercase leading-none tracking-[0.42em] text-black sm:text-xs sm:tracking-[0.48em]">
            UI/UX designer
          </p>
          <p className="font-mono text-[11px] uppercase leading-none tracking-[0.42em] text-black sm:text-xs sm:tracking-[0.48em]">
            Creative developer
          </p>
        </motion.div>

        <motion.div variants={titleReveal} className="mt-14 sm:mt-16">
          <Link
            href="/#transmission"
            className="inline-flex items-center justify-center rounded-none border border-[#d32f2f] bg-transparent px-8 py-3.5 font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[#d32f2f] transition-colors duration-200 hover:bg-[#d32f2f] hover:text-white sm:text-[11px] sm:tracking-[0.32em]"
          >
            [ INITIALIZE_SESSION ]
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
