"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const mechanical = [0.4, 0, 0.2, 1] as const;
const snap = { duration: 0.2, ease: mechanical };

const slide = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: snap },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
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

function CommButton({
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
    "flex min-h-[4.5rem] w-full items-center justify-center border border-fg-stark bg-bg-deep px-4 py-4 font-mono text-xs uppercase tracking-[0.14em] text-fg-stark transition-colors hover:bg-neon-green hover:text-bg-deep hover:border-neon-green sm:min-h-[5.5rem] sm:text-sm";

  const inner = (
    <span className="flex flex-col items-center gap-1 text-center">
      <span>{label}</span>
      {sublabel ? (
        <span className="text-[10px] font-normal tracking-[0.12em] text-fg-stark/50 group-hover:text-bg-deep/70">
          {sublabel}
        </span>
      ) : null}
    </span>
  );

  const isInternal = href.startsWith("/") && !href.startsWith("//");

  if (isInternal) {
    return (
      <Link href={href} className={`group ${className}`}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={`group ${className}`}
      {...(newTab
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {inner}
    </a>
  );
}

export function BiosPage() {
  const emailHref = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "#";

  return (
    <div className="min-h-dvh bg-bg-deep text-fg-stark">
      <div
        className="pointer-events-none fixed inset-0 opacity-90"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "clamp(28px, 6vw, 56px) clamp(28px, 6vw, 56px)",
        }}
        aria-hidden
      />

      <header className="relative z-10 border-b border-fg-stark px-4 py-5 sm:px-6 md:px-10">
        <Link
          href="/"
          className="inline-flex border border-fg-stark bg-bg-deep px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-fg-stark transition-colors hover:bg-neon-green hover:text-bg-deep hover:border-neon-green sm:text-sm"
        >
          [ EXIT_BIOS ]
        </Link>
      </header>

      <main className="relative z-10 px-4 py-12 sm:px-6 md:py-16 md:px-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={slide} className="mb-12 md:mb-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-stark/50 sm:text-xs">
              BIOS_PROFILE
            </p>
            <h1 className="mt-2 font-display text-4xl font-normal uppercase leading-none tracking-tighter sm:text-6xl md:text-7xl">
              RAYDEN SIAROT
            </h1>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            <motion.section
              variants={slide}
              aria-labelledby="bios-identity"
              className="flex flex-col border border-fg-stark bg-bg-deep p-5 sm:p-6"
            >
              <h2
                id="bios-identity"
                className="border-b border-fg-stark pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-stark/55 sm:text-xs"
              >
                [ IDENTITY ]
              </h2>
              <dl className="mt-5 space-y-5 font-mono text-[11px] uppercase leading-relaxed tracking-wide text-fg-stark/80 sm:text-xs">
                <div>
                  <dt className="text-fg-stark/45">NAME</dt>
                  <dd className="mt-1 text-fg-stark">RAYDEN SIAROT</dd>
                </div>
                <div>
                  <dt className="text-fg-stark/45">CURRENT_STATUS</dt>
                  <dd className="mt-1 normal-case tracking-normal text-fg-stark">
                    Student @ The University of Texas at Arlington (Information
                    Systems)
                  </dd>
                </div>
                <div>
                  <dt className="text-fg-stark/45">ORIGIN</dt>
                  <dd className="mt-1 normal-case tracking-normal text-fg-stark">
                    Hawai&apos;i Grown (Not Flown) // Half Filipino // Half
                    Japanese
                  </dd>
                </div>
              </dl>
            </motion.section>

            <motion.section
              variants={slide}
              aria-labelledby="bios-mission"
              className="flex flex-col border border-fg-stark bg-bg-deep p-5 sm:p-6 lg:col-span-1"
            >
              <h2
                id="bios-mission"
                className="border-b border-fg-stark pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-stark/55 sm:text-xs"
              >
                [ MISSION_HISTORY ]
              </h2>
              <div className="mt-5 space-y-4 font-mono text-[11px] leading-relaxed text-fg-stark/85 sm:text-xs">
                <p className="uppercase tracking-wide text-fg-stark">
                  [2023] Creative Lead @ GroundedTalks.
                </p>
                <div className="space-y-2 border-l border-fg-stark pl-3">
                  <p>
                    <span className="text-fg-stark/45">ACHIEVED:</span>{" "}
                    <span className="normal-case tracking-normal">
                      Jumpstarted startup connecting students to industry pros.
                    </span>
                  </p>
                  <p>
                    <span className="text-fg-stark/45">IMPACT:</span>{" "}
                    <span className="normal-case tracking-normal">
                      Fueled passion for design-driven empowerment.
                    </span>
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section
              variants={slide}
              aria-labelledby="bios-philosophy"
              className="flex flex-col border border-fg-stark bg-bg-deep p-5 sm:p-6 md:col-span-2 lg:col-span-1"
            >
              <h2
                id="bios-philosophy"
                className="border-b border-fg-stark pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-stark/55 sm:text-xs"
              >
                [ PHILOSOPHY ]
              </h2>
              <blockquote className="mt-5 font-mono text-[11px] leading-relaxed text-fg-stark/90 sm:text-sm">
                <p className="normal-case tracking-normal">
                  &ldquo;Design is not just what it looks like and feels like.
                  Design is how it works.&rdquo;
                </p>
                <footer className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-stark/45 sm:text-xs">
                  — Steve Jobs
                </footer>
              </blockquote>
            </motion.section>
          </div>

          <motion.section
            variants={slide}
            className="mt-10 border border-fg-stark bg-bg-deep p-5 sm:mt-12 sm:p-6"
            aria-labelledby="bios-commlinks"
          >
            <h2
              id="bios-commlinks"
              className="border-b border-fg-stark pb-3 font-display text-2xl font-normal uppercase tracking-tighter sm:text-3xl"
            >
              [ COMM_LINKS ]
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <CommButton
                href={LINKEDIN_URL}
                label="[ LINKEDIN ]"
                newTab
              />
              <CommButton
                href={emailHref}
                label="[ EMAIL_TRANSMISSION ]"
              />
              <CommButton
                href={RESUME_URL}
                label="[ DOWNLOAD_RESUME ]"
                sublabel="ACCOMPLISHMENTS_PDF"
                newTab
              />
            </div>
            {!CONTACT_EMAIL ? (
              <p className="mt-4 font-mono text-[10px] uppercase tracking-wide text-fg-stark/40">
                Set NEXT_PUBLIC_CONTACT_EMAIL for mail routing.
              </p>
            ) : null}
          </motion.section>
        </motion.div>
      </main>

      <div className="pointer-events-none fixed inset-0 z-[5] mix-blend-overlay">
        <div className="crt-scanlines absolute inset-0 opacity-30" />
        <div className="noise-grain absolute inset-0 opacity-35 mix-blend-soft-light" />
      </div>
    </div>
  );
}
