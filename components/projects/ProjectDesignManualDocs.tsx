import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import type { ProjectCardConfig, ProjectDocsContent } from "@/lib/project-registry-types";

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
      <article className="mx-auto max-w-3xl px-6 pb-32 pt-8 sm:px-8 lg:max-w-4xl lg:pb-40 lg:pt-12">
        <Link
          href="/projects"
          className={`mb-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent-red)] transition-colors hover:text-[#1e1c0b] ${headline}`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Projects
        </Link>

        <header className="mb-28 lg:mb-36">
          <p
            className={`mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[color:var(--accent-red)] ${headline}`}
          >
            Strategy &amp; Implementation
          </p>
          <h1
            className={`text-[clamp(2.5rem,12vw,6.5rem)] font-black uppercase leading-[0.92] tracking-tighter text-[#1e1c0b] ${headline}`}
          >
            {d.manualTitle}
          </h1>
        </header>

        <section className="mb-28 space-y-12 lg:mb-40 lg:space-y-16">
          <h2
            className={`border-b border-[color:var(--accent-red)]/25 pb-4 text-2xl font-bold uppercase tracking-tight text-[#1e1c0b] lg:text-3xl ${headline}`}
          >
            Brand strategy
          </h2>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className={`mb-8 text-xs font-bold uppercase tracking-[0.25em] text-[color:var(--accent-red)] ${headline}`}>
                Typography scale
              </h3>
              <ul className="space-y-10">
                {d.brandStrategy.typography.map((t) => (
                  <li key={t.name}>
                    <p className={`text-lg font-bold text-[#1e1c0b] ${headline}`}>{t.name}</p>
                    <p className="mt-2 text-[15px] leading-[1.8] text-[#1e1c0b]/85">{t.role}</p>
                    <p className={`mt-4 border-l-2 border-[color:var(--accent-red)]/40 pl-4 text-sm italic leading-[1.8] text-[#1e1c0b]/70`}>
                      {t.sample}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={`mb-8 text-xs font-bold uppercase tracking-[0.25em] text-[color:var(--accent-red)] ${headline}`}>
                Color theory
              </h3>
              <ul className="space-y-8">
                {d.brandStrategy.colors.map((c) => (
                  <li
                    key={`${c.name}-${c.hex}`}
                    className="flex gap-6 border border-[#1e1c0b]/10 bg-[#fff9e8]/60 p-5"
                  >
                    <div
                      className="h-16 w-16 shrink-0 border border-[#1e1c0b]/15"
                      style={{ backgroundColor: c.hex }}
                      title={c.hex}
                    />
                    <div>
                      <p className={`font-bold ${headline}`}>{c.name}</p>
                      <p className="mt-1 font-mono text-sm text-[color:var(--accent-red)]">{c.hex}</p>
                      <p className="mt-3 text-[15px] leading-[1.8] text-[#1e1c0b]/85">{c.usage}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-28 lg:mb-40">
          <h2
            className={`mb-14 border-b border-[color:var(--accent-red)]/25 pb-4 text-2xl font-bold uppercase tracking-tight text-[#1e1c0b] lg:text-3xl ${headline}`}
          >
            Component architecture
          </h2>
          <ul className="space-y-12">
            {d.componentArchitecture.map((c) => (
              <li
                key={c.name}
                className="border-l-2 border-[color:var(--accent-red)] pl-8"
              >
                <h3 className={`text-xl font-bold uppercase tracking-tight text-[#1e1c0b] ${headline}`}>
                  {c.name}
                </h3>
                <p className="mt-4 max-w-prose text-[15px] leading-[1.8] text-[#1e1c0b]/88">
                  {c.functionalLogic}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-28 lg:mb-40">
          <h2
            className={`mb-14 border-b border-[color:var(--accent-red)]/25 pb-4 text-2xl font-bold uppercase tracking-tight text-[#1e1c0b] lg:text-3xl ${headline}`}
          >
            User flow &amp; UX logic
          </h2>
          <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pl-6 pr-6 sm:mx-0 sm:pl-0 sm:pr-0">
            {d.userFlows.map((f) => (
              <article
                key={f.title}
                className="min-w-[min(100%,320px)] max-w-sm shrink-0 snap-start border border-[#1e1c0b]/12 bg-[#fff9e8]/80 p-8"
              >
                <h3 className={`text-lg font-bold uppercase tracking-tight text-[color:var(--accent-red)] ${headline}`}>
                  {f.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.8] text-[#1e1c0b]/88">{f.why}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2
            className={`mb-14 border-b border-[color:var(--accent-red)]/25 pb-4 text-2xl font-bold uppercase tracking-tight text-[#1e1c0b] lg:text-3xl ${headline}`}
          >
            Technical execution
          </h2>
          <div className="space-y-16">
            {d.technicalExecution.map((block) => (
              <div key={block.title}>
                <h3 className={`text-lg font-bold text-[#1e1c0b] ${headline}`}>{block.title}</h3>
                <p className="mt-5 max-w-prose whitespace-pre-wrap text-[15px] leading-[1.8] text-[#1e1c0b]/88">
                  {block.notes}
                </p>
                {block.code ? (
                  <pre className="mt-8 overflow-x-auto border border-[#1e1c0b]/15 bg-[#1e1c0b] p-6 text-left text-[13px] leading-relaxed text-[#f5eed2]">
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
