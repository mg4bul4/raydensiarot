export type ArchiveProject = {
  id: string;
  index: string;
  title: string;
  role: string;
  year: string;
  focus: string;
  href: string;
  specLines: string[];
};

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    id: "nafs",
    index: "01",
    title: "Nafs.fyi",
    role: "UI Designer",
    year: "2024",
    focus: "Startup product: onboarding, dashboard, and mobile-first layouts.",
    href: "https://nafs.fyi",
    specLines: [
      "VIEWPORT · 390–1440PX",
      "HANDOFF · FIGMA · COMPONENT_SET",
      "COLOR · SRGB · DESIGN_TOKENS",
    ],
  },
  {
    id: "msa-uta",
    index: "02",
    title: "MSA at UTA Website",
    role: "Co-Developer & Designer",
    year: "2023",
    focus: "Community site: events, content hierarchy, and membership flows.",
    href: "#",
    specLines: [
      "VIEWPORT · 1280PX_LAB",
      "RENDER · NEXT.JS · RESPONSIVE",
      "COLOR · SRGB · BRAND_SYSTEM",
    ],
  },
  {
    id: "siaria",
    index: "03",
    title: "SIARIA LABS",
    role: "Founder / Lead Designer",
    year: "2025",
    focus: "Studio presence: positioning, case structure, and editorial type.",
    href: "#",
    specLines: [
      "VIEWPORT · 1440PX",
      "RENDER · NEXT.JS · APP_ROUTER",
      "TYPE · DISPLAY / MONO_PAIR",
    ],
  },
];
