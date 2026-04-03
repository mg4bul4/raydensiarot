"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/kanso/SectionLabel";
import { ExitToHome } from "@/components/layout/ExitToHome";

const snap = { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const };

const slide = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: snap },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const LINKEDIN_URL =
  typeof process.env.NEXT_PUBLIC_LINKEDIN_URL === "string"
    ? process.env.NEXT_PUBLIC_LINKEDIN_URL
    : "#";

const CONTACT_EMAIL =
  typeof process.env.NEXT_PUBLIC_CONTACT_EMAIL === "string"
    ? process.env.NEXT_PUBLIC_CONTACT_EMAIL
    : "";

const RESUME_URL =
  typeof process.env.NEXT_PUBLIC_RESUME_URL === "string"
    ? process.env.NEXT_PUBLIC_RESUME_URL
    : "/accomplishments.pdf";

function CommLink({
  href,
  label,
  sublabel,
  newTab,
}: {
  href: string;
  label: string;
  sublabel?: string;
  newTab?: boolean;
}) {
  const className =
    "block py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-black transition-colors duration-200 hover:text-[#d32f2f] sm:text-sm";

  const inner = (
    <span className="flex flex-col gap-1">
      <span>{label}</span>
      {sublabel ? (
        <span className="text-[11px] font-normal font-sans normal-case tracking-normal text-black/50">
          {sublabel}
        </span>
      ) : null}
    </span>
  );

  const isInternal = href.startsWith("/") && !href.startsWith("//");

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  );
}

export function BiosPage() {
  const emailHref = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "#";

  return (
    <div className="min-h-dvh bg-[#fff8dc] text-black">
      <header className="px-6 pb-4 pt-10 sm:px-10 md:px-12 md:pt-12">
        <ExitToHome />
      </header>

      <main className="px-6 pb-28 sm:px-10 md:px-12 md:pb-36">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="mx-auto max-w-2xl"
        >
          <motion.div variants={slide} className="pb-12 md:pb-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/50 sm:text-xs">
              THE_BIOS
            </p>
            <h1 className="kanso-heading mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#D32F2F] sm:text-6xl md:text-7xl">
              Rayden Siarot
            </h1>
          </motion.div>

          <motion.section
            variants={slide}
            aria-labelledby="bios-identity"
            className="pb-16 pt-12 md:pb-24 md:pt-16"
          >
            <SectionLabel id="bios-identity">Identity</SectionLabel>
            <dl className="mt-10 space-y-10 text-base leading-[1.75] text-black/88 sm:text-[17px]">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">
                  Name
                </dt>
                <dd className="mt-2">Rayden Siarot</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">
                  Status
                </dt>
                <dd className="mt-2">
                  Student @ The University of Texas at Arlington (Information
                  Systems)
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">
                  Origin
                </dt>
                <dd className="mt-2">
                  Hawai&apos;i — half Filipino, half Japanese.
                </dd>
              </div>
            </dl>
          </motion.section>

          <motion.section
            variants={slide}
            aria-labelledby="bios-mission"
            className="pb-16 pt-12 md:pb-24 md:pt-16"
          >
            <SectionLabel id="bios-mission">Experience</SectionLabel>
            <div className="mt-10 space-y-6 text-base leading-[1.75] text-black/88 sm:text-[17px]">
              <p className="font-semibold text-black">
                2023 — Creative lead, GroundedTalks
              </p>
              <p>
                Owned brand and platform UX for a mentorship marketplace:
                end-to-end UI, design system foundations, and flows aimed at
                reducing friction between students and industry mentors.
              </p>
            </div>
          </motion.section>

          <motion.section
            variants={slide}
            aria-labelledby="bios-philosophy"
            className="pb-16 pt-12 md:pb-24 md:pt-16"
          >
            <SectionLabel id="bios-philosophy">Philosophy</SectionLabel>
            <blockquote className="mt-10 text-base leading-[1.75] text-black/88 sm:text-[17px]">
              <p>
                &ldquo;Design is not just what it looks like and feels like.
                Design is how it works.&rdquo;
              </p>
              <footer className="mt-8 text-[11px] font-medium uppercase tracking-[0.16em] text-black/45">
                — Steve Jobs
              </footer>
            </blockquote>
          </motion.section>

          <motion.section
            variants={slide}
            aria-labelledby="bios-connect"
            className="pt-12 md:pt-16"
          >
            <SectionLabel id="bios-connect">Connect</SectionLabel>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-16">
              <CommLink href={LINKEDIN_URL} label="LinkedIn" newTab />
              <CommLink href={emailHref} label="Email" />
              <CommLink
                href={RESUME_URL}
                label="Résumé"
                sublabel="Accomplishments PDF"
                newTab
              />
            </div>
            {!CONTACT_EMAIL ? (
              <p className="mt-12 text-[10px] font-mono uppercase tracking-[0.12em] text-black/45">
                Set NEXT_PUBLIC_CONTACT_EMAIL for mail routing.
              </p>
            ) : null}
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
}
