import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import type { ProjectCardConfig, ProjectDocsContent } from "@/lib/project-registry-types";

// Visual refresh: stronger editorial typography scale, improved contrast/readability, roomier spacing rhythm, and subtle card/callout depth using existing palette/accent.
const headline =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";
const body = "[font-family:var(--font-stitch-body),ui-sans-serif,sans-serif]";

type Props = {
  config: ProjectCardConfig & { docsContent: ProjectDocsContent };
};

export function ProjectDesignManualDocs({ config }: Props) {
  const d = config.docsContent;

  return (
    <div className={`min-h-dvh bg-[#fdf9ea] text-[#1e1c0b] ${body}`}>
      <article className="mx-auto max-w-3xl px-6 pb-28 pt-8 sm:px-8 sm:pb-32 lg:max-w-5xl lg:pb-36 lg:pt-10">
        <Link
          href="/projects"
          className={`mb-12 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--accent-red)] transition-colors duration-200 hover:text-[#1e1c0b] ${headline}`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Projects
        </Link>

        <header className="mb-20 border-b border-[color:var(--accent-red)]/20 pb-12 sm:mb-24 sm:pb-14">
          <p
            className={`mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent-red)]/90 ${headline}`}
          >
            Strategy &amp; Implementation
          </p>
          <h1
            className={`text-[clamp(2.7rem,8vw,5.9rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--accent-red)] ${headline}`}
          >
            {d.manualTitle}
          </h1>
          {/* Compact metadata block keeps scope readable near the hero. */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <p className={`border border-[#1e1c0b]/15 bg-[#fff9e8] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1e1c0b]/80 shadow-[0_6px_20px_rgba(30,28,11,0.05)] ${headline}`}>
              Format: project brief
            </p>
            <p className={`border border-[#1e1c0b]/15 bg-[#fff9e8] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1e1c0b]/80 shadow-[0_6px_20px_rgba(30,28,11,0.05)] ${headline}`}>
              Focus: strategy + implementation
            </p>
            <p className={`border border-[#1e1c0b]/15 bg-[#fff9e8] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1e1c0b]/80 shadow-[0_6px_20px_rgba(30,28,11,0.05)] ${headline}`}>
              Status: documentation snapshot
            </p>
          </div>
        </header>

        <section className="mb-20 space-y-10 sm:mb-24 sm:space-y-12 lg:mb-28">
          <p className={`text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent-red)]/90 ${headline}`}>
            1. Context
          </p>
          <h2
            className={`border-b border-[color:var(--accent-red)]/25 pb-4 text-[1.9rem] font-black uppercase leading-[1.12] tracking-tight text-[#1e1c0b] lg:text-[2.1rem] ${headline}`}
          >
            Brand strategy
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className={`mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-red)]/90 ${headline}`}>
                Typography scale
              </h3>
              <ul className="space-y-10">
                {d.brandStrategy.typography.map((t) => (
                  <li key={t.name} className="rounded-[2px] border border-[#1e1c0b]/12 bg-[#fff9e8]/85 px-6 py-6 shadow-[0_10px_28px_rgba(30,28,11,0.06)]">
                    <p className={`text-[1.35rem] font-bold leading-[1.15] tracking-tight text-[#1e1c0b] ${headline}`}>{t.name}</p>
                    <p className="mt-3 text-[17px] leading-[1.7] text-[#1e1c0b]/92">{t.role}</p>
                    <p className={`mt-4 border-l-2 border-[color:var(--accent-red)]/45 pl-4 text-[15px] italic leading-[1.7] text-[#1e1c0b]/78`}>
                      {t.sample}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={`mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-red)]/90 ${headline}`}>
                Color theory
              </h3>
              <ul className="space-y-7">
                {d.brandStrategy.colors.map((c) => (
                  <li
                    key={`${c.name}-${c.hex}`}
                    className="flex gap-5 rounded-[2px] border border-[#1e1c0b]/12 bg-[#fff9e8]/80 p-6 shadow-[0_10px_28px_rgba(30,28,11,0.06)]"
                  >
                    <div
                      className="h-16 w-16 shrink-0 rounded-[2px] border border-[#1e1c0b]/15 shadow-[0_6px_14px_rgba(30,28,11,0.12)]"
                      style={{ backgroundColor: c.hex }}
                      title={c.hex}
                    />
                    <div>
                      <p className={`text-xl font-bold leading-[1.15] tracking-tight text-[#1e1c0b] ${headline}`}>{c.name}</p>
                      <p className="mt-1 font-mono text-sm text-[color:var(--accent-red)]/95">{c.hex}</p>
                      <p className="mt-3 text-[17px] leading-[1.7] text-[#1e1c0b]/92">{c.usage}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20 sm:mb-24 lg:mb-28">
          <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent-red)]/90 ${headline}`}>
            2. The problem
          </p>
          <h2
            className={`mb-8 border-b border-[color:var(--accent-red)]/25 pb-4 text-[1.9rem] font-black uppercase leading-[1.12] tracking-tight text-[#1e1c0b] lg:text-[2.1rem] ${headline}`}
          >
            Component architecture
          </h2>
          <ul className="space-y-9 sm:space-y-10">
            {d.componentArchitecture.map((c) => (
              <li
                key={c.name}
                className="rounded-[2px] border border-[#1e1c0b]/12 border-l-2 border-l-[color:var(--accent-red)] bg-[#fff9e8]/75 px-6 py-6 shadow-[0_10px_26px_rgba(30,28,11,0.05)] sm:px-8"
              >
                <h3 className={`text-[1.45rem] font-semibold uppercase leading-[1.15] tracking-tight text-[#1e1c0b] ${headline}`}>
                  {c.name}
                </h3>
                <p className="mt-3 max-w-[72ch] text-[17px] leading-[1.72] text-[#1e1c0b]/92">
                  {c.functionalLogic}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20 sm:mb-24 lg:mb-28">
          <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent-red)]/90 ${headline}`}>
            3. Approach
          </p>
          <h2
            className={`mb-8 border-b border-[color:var(--accent-red)]/25 pb-4 text-[1.9rem] font-black uppercase leading-[1.12] tracking-tight text-[#1e1c0b] lg:text-[2.1rem] ${headline}`}
          >
            User flow &amp; UX logic
          </h2>
          {/* Horizontal cards preserve scanability for comparative UX rationale. */}
          <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pl-6 pr-6 sm:mx-0 sm:pl-0 sm:pr-0">
            {d.userFlows.map((f) => (
              <article
                key={f.title}
                className="min-w-[min(100%,340px)] max-w-sm shrink-0 snap-start rounded-[2px] border border-[#1e1c0b]/12 bg-[#fff9e8]/80 p-8 shadow-[0_12px_30px_rgba(30,28,11,0.06)] transition-colors duration-200 hover:border-[color:var(--accent-red)]/35"
              >
                <h3 className={`text-[1.35rem] font-semibold uppercase leading-[1.15] tracking-tight text-[color:var(--accent-red)] ${headline}`}>
                  {f.title}
                </h3>
                <p className="mt-4 text-[17px] leading-[1.72] text-[#1e1c0b]/92">{f.why}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent-red)]/90 ${headline}`}>
            4. Solution and status
          </p>
          <h2
            className={`mb-8 border-b border-[color:var(--accent-red)]/25 pb-4 text-[1.9rem] font-black uppercase leading-[1.12] tracking-tight text-[#1e1c0b] lg:text-[2.1rem] ${headline}`}
          >
            Technical execution
          </h2>
          <div className="space-y-12 sm:space-y-14">
            {d.technicalExecution.map((block) => (
              <div key={block.title} className="rounded-[2px] border border-[#1e1c0b]/12 bg-[#fff9e8]/65 px-6 py-6 shadow-[0_10px_26px_rgba(30,28,11,0.05)] sm:px-8 sm:py-7">
                <h3 className={`text-[1.35rem] font-semibold leading-[1.15] tracking-tight text-[#1e1c0b] ${headline}`}>{block.title}</h3>
                <p className="mt-4 max-w-[72ch] whitespace-pre-wrap text-[17px] leading-[1.72] text-[#1e1c0b]/92">
                  {block.notes}
                </p>
                {block.code ? (
                  <pre className="mt-6 overflow-x-auto rounded-[2px] border border-[#1e1c0b]/15 bg-[#1e1c0b] p-6 text-left text-[14px] leading-relaxed text-[#f5eed2] shadow-[0_12px_30px_rgba(30,28,11,0.28)]">
                    <code>{block.code.trim()}</code>
                  </pre>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </article>

      <SiteFooter />
    </div>
  );
}
