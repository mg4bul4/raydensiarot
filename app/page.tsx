import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Placeholder — Archive (projects), Player Stats, Transmission next */}
      <section
        id="archive"
        className="scroll-mt-2 border-t-2 border-fg-stark bg-bg-deep px-4 py-24 font-mono text-sm uppercase tracking-widest text-[var(--hud-muted)] sm:px-6 md:px-10"
        aria-label="Project archive"
      >
        <p className="max-w-prose text-fg-stark/70">
          <span className="text-neon-green">{"//"}</span> ARCHIVE_MODULE_LOADING…
        </p>
      </section>
    </>
  );
}
