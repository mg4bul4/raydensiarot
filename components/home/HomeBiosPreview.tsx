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
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/50 sm:text-xs">
          THE_BIOS
        </p>
        <h2
          id="bios-home-heading"
          className="kanso-heading mt-3 text-[clamp(2.5rem,8vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-[#D32F2F]"
        >
          Profile
        </h2>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-black/85 sm:text-lg">
          Information Systems at UT Arlington. I ship product UI and front-end
          surfaces with clear constraints—Hawai&apos;i-raised, design-first.
        </p>
        <Link
          href="/about"
          className="mt-10 inline-block font-mono text-[10px] uppercase tracking-[0.24em] text-[#d32f2f] transition-colors duration-200 hover:text-black sm:text-[11px]"
        >
          Open full bios →
        </Link>
      </div>
    </motion.section>
  );
}
