import Link from "next/link";
import { ArrowRight } from "lucide-react";

const headline =
  "[font-family:var(--font-stitch-headline),ui-sans-serif,sans-serif]";

export type ProjectCardActionsProps = {
  docsSlug: string;
  primaryHref: string;
  primaryLabel: string;
  primaryExternal?: boolean;
  showPrimary?: boolean;
  docsDisabled?: boolean;
};

export function ProjectCardActions({
  docsSlug,
  primaryHref,
  primaryLabel,
  primaryExternal,
  showPrimary = true,
  docsDisabled = false,
}: ProjectCardActionsProps) {
  const docsHref = `/projects/${docsSlug}/docs`;

  const primaryClassName = `inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#fff9e8] transition-opacity hover:opacity-90 sm:flex-initial sm:min-h-0 ${headline}`;
  const primarySolid =
    "bg-[color:var(--accent-red)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-red)]";

  const outlineClassName = `inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 border border-[color:var(--accent-red)] bg-transparent px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#1e1c0b] transition-colors hover:bg-[#fff9e8] sm:flex-initial sm:min-h-0 ${headline}`;

  return (
    <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
      {showPrimary ? (
        primaryExternal ? (
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${primaryClassName} ${primarySolid}`}
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </a>
        ) : (
          <Link href={primaryHref} className={`${primaryClassName} ${primarySolid}`}>
            {primaryLabel}
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </Link>
        )
      ) : null}

      {docsDisabled ? (
        <span
          className={`inline-flex min-h-[44px] flex-1 cursor-not-allowed items-center justify-center gap-2 border border-[color:var(--accent-red)]/30 bg-transparent px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#1e1c0b]/35 sm:flex-initial sm:min-h-0 ${headline}`}
          aria-disabled="true"
        >
          Documentation in progress
        </span>
      ) : (
        <Link href={docsHref} className={outlineClassName}>
          View Documentation
          <ArrowRight className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
        </Link>
      )}
    </div>
  );
}
