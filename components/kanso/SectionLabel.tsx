import { HankoMarker } from "./HankoMarker";

export function SectionLabel({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <HankoMarker />
      <h2
        id={id}
        className="kanso-heading text-xl font-bold uppercase leading-tight tracking-tight text-[#af101a] sm:text-2xl md:text-3xl"
      >
        {children}
      </h2>
    </div>
  );
}
