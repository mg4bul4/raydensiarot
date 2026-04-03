import { Archive } from "@/components/archive/Archive";
import { ExitToHome } from "@/components/layout/ExitToHome";

export default function ProjectsPage() {
  return (
    <main className="bg-[#fff8dc] pt-24 text-black sm:pt-28">
      <div className="mx-auto max-w-6xl px-6 pb-10 sm:px-10 md:px-12">
        <ExitToHome />
        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.28em] text-black/50 sm:mt-12 sm:text-xs">
          THE_ARCHIVE
        </p>
        <h1 className="kanso-heading mt-3 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#D32F2F] sm:text-5xl md:text-6xl">
          Projects
        </h1>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base">
          Work is organized by problem context, role, and outcome—case studies
          unpack constraints; listings stay scannable.
        </p>
      </div>
      <Archive showSectionHeader={false} cardVariant="bento" />
    </main>
  );
}
