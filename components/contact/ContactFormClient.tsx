"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";

const HEADLINE =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";
const BODY = "[font-family:var(--font-stitch-body),ui-sans-serif,sans-serif]";

export function ContactFormClient() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Name: name, Email: email, Message: message }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Try again later.");
        return;
      }
      if (data.ok) {
        router.push("/contact/sent");
      }
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="max-w-2xl border border-[#e4beba]/30 bg-[#fff8dc] p-8 shadow-sm sm:p-10">
      <form className="space-y-12" onSubmit={onSubmit} noValidate>
        <div>
          <label
            htmlFor="contact-name"
            className={`mb-2 block text-[10px] uppercase tracking-[0.2em] text-black ${BODY}`}
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full border-0 border-b border-[#1e1c0b] bg-transparent px-0 py-3 text-lg text-black outline-none transition-colors duration-300 placeholder:text-black/50 focus:border-[#af101a] focus:ring-0"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className={`mb-2 block text-[10px] uppercase tracking-[0.2em] text-black ${BODY}`}
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@address.com"
            className="w-full border-0 border-b border-[#1e1c0b] bg-transparent px-0 py-3 text-lg text-black outline-none transition-colors duration-300 placeholder:text-black/50 focus:border-[#af101a] focus:ring-0"
          />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className={`mb-2 block text-[10px] uppercase tracking-[0.2em] text-black ${BODY}`}
          >
            Your Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="what's on your mind?"
            className="w-full resize-none border-0 border-b border-[#1e1c0b] bg-transparent px-0 py-3 text-lg text-black outline-none transition-colors duration-300 placeholder:text-black/50 focus:border-[#af101a] focus:ring-0"
          />
        </div>
        {error ? (
          <p className="text-sm text-[#af101a]" role="alert">
            {error}
          </p>
        ) : null}
        <div className="pt-2">
          <button
            type="submit"
            disabled={pending}
            className={`group inline-flex items-center gap-4 bg-[#af101a] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#930010] disabled:opacity-70 ${HEADLINE}`}
          >
            {pending ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              <>
                Send Message
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
