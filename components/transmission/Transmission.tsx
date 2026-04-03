"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const mechanical = [0.4, 0, 0.2, 1] as const;
const snap = { duration: 0.2, ease: mechanical };

const CONTACT_EMAIL =
  typeof process.env.NEXT_PUBLIC_CONTACT_EMAIL === "string"
    ? process.env.NEXT_PUBLIC_CONTACT_EMAIL
    : "";

const sectionReveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: snap },
};

export function Transmission() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!CONTACT_EMAIL) return;
    const params = new URLSearchParams({
      subject: subject || "Inquiry",
      body,
    });
    window.location.href = `mailto:${CONTACT_EMAIL}?${params.toString()}`;
  }

  return (
    <motion.section
      id="transmission"
      className="scroll-mt-1 bg-[#fff8dc] pb-20 pt-16 text-black sm:pb-28 sm:pt-20"
      aria-labelledby="transmission-heading"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionReveal}
    >
      <div className="mx-auto max-w-xl px-6 sm:px-10 md:px-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50 sm:text-xs">
          Contact
        </p>
        <h2
          id="transmission-heading"
          className="kanso-heading mt-3 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-black sm:text-5xl md:text-6xl"
        >
          Message
        </h2>

        <form onSubmit={onSubmit} className="mt-12 space-y-8">
          <div>
            <label
              htmlFor="tx-subject"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 sm:text-[11px]"
            >
              Subject
            </label>
            <input
              id="tx-subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 w-full border-0 border-b border-black/20 bg-transparent px-0 py-2 text-sm text-black outline-none transition-colors placeholder:text-black/25 focus:border-[#d32f2f]"
              placeholder="Project or collaboration"
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="tx-body"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 sm:text-[11px]"
            >
              Message
            </label>
            <textarea
              id="tx-body"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={5}
              className="mt-2 w-full resize-y border-0 border-b border-black/20 bg-transparent px-0 py-2 text-sm text-black outline-none placeholder:text-black/25 focus:border-[#d32f2f]"
              placeholder="Scope, timeline, links."
            />
          </div>
          <motion.button
            type="submit"
            className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-black transition-colors hover:text-[#d32f2f] sm:text-xs"
            transition={snap}
            whileTap={{ scale: 0.995 }}
          >
            Send
          </motion.button>
          {!CONTACT_EMAIL ? (
            <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-black/45">
              Set NEXT_PUBLIC_CONTACT_EMAIL for mail routing.
            </p>
          ) : null}
        </form>
      </div>

      <div className="mx-auto mt-24 max-w-6xl border-t border-black/10 px-6 py-8 sm:px-10 md:px-12">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-black/45 sm:text-[11px]">
          © {new Date().getFullYear()} Rayden Siarot
        </p>
      </div>
    </motion.section>
  );
}
