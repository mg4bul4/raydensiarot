"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const mechanical = [0.4, 0, 0.2, 1] as const;
const snap = { duration: 0.2, ease: mechanical };

/** Set your public contact address here or via env. */
const CONTACT_EMAIL =
  typeof process.env.NEXT_PUBLIC_CONTACT_EMAIL === "string"
    ? process.env.NEXT_PUBLIC_CONTACT_EMAIL
    : "";

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: snap },
};

function CopyrightMarquee() {
  const chunk = "(C) 2026 RAYDEN SIAROT    ";
  const line = chunk.repeat(8);

  return (
    <div className="relative z-20 overflow-hidden border-y border-fg-stark bg-bg-deep">
      <div className="flex w-max font-display text-[clamp(2.5rem,8vw,5rem)] font-normal uppercase leading-none tracking-tighter text-fg-stark">
        <span className="marquee-track flex shrink-0 whitespace-nowrap py-6 sm:py-8">
          {line}
        </span>
        <span className="marquee-track flex shrink-0 whitespace-nowrap py-6 sm:py-8">
          {line}
        </span>
      </div>
    </div>
  );
}

export function Transmission() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!CONTACT_EMAIL) return;
    const params = new URLSearchParams({
      subject: subject || "COMM_LINK",
      body,
    });
    window.location.href = `mailto:${CONTACT_EMAIL}?${params.toString()}`;
  }

  return (
    <motion.section
      id="transmission"
      className="scroll-mt-1 border-t border-fg-stark bg-bg-deep"
      aria-labelledby="transmission-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionReveal}
    >
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 md:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-stark/50 sm:text-xs">
          COMM_LINK
        </p>
        <h2
          id="transmission-heading"
          className="mt-2 font-display text-4xl font-normal uppercase leading-none tracking-tighter text-fg-stark sm:text-5xl md:text-6xl"
        >
          TRANSMISSION
        </h2>

        <form
          onSubmit={onSubmit}
          className="mt-10 space-y-4 border border-fg-stark bg-bg-deep p-4 sm:p-6"
        >
          <div>
            <label
              htmlFor="tx-subject"
              className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-stark/50"
            >
              SUBJECT
            </label>
            <input
              id="tx-subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 w-full border border-fg-stark bg-bg-deep px-3 py-2 font-mono text-sm text-fg-stark outline-none placeholder:text-fg-stark/25 focus:border-neon-green"
              placeholder="PROJECT_INQUIRY"
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="tx-body"
              className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-stark/50"
            >
              MESSAGE
            </label>
            <textarea
              id="tx-body"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={5}
              className="mt-2 w-full resize-y border border-fg-stark bg-bg-deep px-3 py-2 font-mono text-sm text-fg-stark outline-none placeholder:text-fg-stark/25 focus:border-neon-green"
              placeholder="Brief scope, timeline, links."
            />
          </div>
          <motion.button
            type="submit"
            className="w-full border border-fg-stark bg-bg-deep px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-fg-stark sm:w-auto sm:text-sm"
            transition={snap}
            whileHover={{
              backgroundColor: "var(--neon-green)",
              color: "var(--bg-deep)",
              borderColor: "var(--neon-green)",
            }}
            whileTap={{ scale: 0.995 }}
          >
            [ SEND_TRANSMISSION ]
          </motion.button>
          {!CONTACT_EMAIL ? (
            <p className="font-mono text-[10px] uppercase leading-relaxed tracking-wide text-fg-stark/45">
              Set <span className="text-fg-stark/70">NEXT_PUBLIC_CONTACT_EMAIL</span> for mailto routing.
            </p>
          ) : null}
        </form>
      </div>

      <CopyrightMarquee />
    </motion.section>
  );
}
