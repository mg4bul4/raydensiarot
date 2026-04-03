import { Archive } from "@/components/archive/Archive";
import { BrushRule } from "@/components/kanso/BrushRule";

export default function ProjectsPage() {
  return (
    <main className="bg-[#fff8dc] pt-24 text-black sm:pt-28">
      <div className="mx-auto max-w-6xl px-6 pb-10 sm:px-10 md:px-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/45 sm:text-xs">
          Archive
        </p>
        <h1 className="kanso-heading mt-3 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-black sm:text-5xl md:text-6xl">
          Projects
        </h1>
        <div className="mt-10 max-w-xl">
          <BrushRule />
        </div>
      </div>
      <Archive showSectionHeader={false} cardVariant="bento" />
    </main>
  );
}
