"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const snap = { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const };

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: snap },
};

export function HomeBiosPreview() {
  return (
    <motion.section
      id="bios"
      className="scroll-mt-1 bg-[#fff8dc] px-6 py-20 text-black sm:px-10 md:py-28 md:px-12"
      aria-labelledby="bios-home-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50 sm:text-xs">
          Bios
        </p>
        <h2
          id="bios-home-heading"
          className="kanso-heading mt-3 text-[clamp(2.5rem,8vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-black"
        >
          Profile
        </h2>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-black/85 sm:text-lg">
          Student at UT Arlington (Information Systems). Hawai&apos;i-grown;
          design-driven work across product, interface, and creative code.
        </p>
        <Link
          href="/about"
          className="mt-10 inline-block font-mono text-[10px] uppercase tracking-[0.24em] text-[#d32f2f] transition-colors hover:text-black sm:text-[11px]"
        >
          Open full bios →
        </Link>
      </div>
    </motion.section>
  );
}
