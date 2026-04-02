export type ArchiveProject = {
  id: string;
  index: string;
  title: string;
  role: string;
  vibe: string;
  href: string;
  specLines: string[];
};

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    id: "nafs",
    index: "01",
    title: "Nafs.fyi",
    role: "UI Designer",
    vibe: "Startup App Design",
    href: "https://nafs.fyi",
    specLines: [
      "STACK: PRODUCT_UI",
      "SIGNAL: HI_FI_SCREENS",
      "TAGS: [MOBILE_FIRST, TOKENS]",
    ],
  },
  {
    id: "msa-uta",
    index: "02",
    title: "MSA at UTA Website",
    role: "Co-Developer & Designer",
    vibe: "Community Platform",
    href: "#",
    specLines: [
      "STACK: WEB_PLATFORM",
      "SIGNAL: COMMUNITY_OPS",
      "TAGS: [CMS, EVENTS, BRAND]",
    ],
  },
  {
    id: "siaria",
    index: "03",
    title: "SIARIA LABS",
    role: "Founder / Lead Designer",
    vibe: "Design Agency Site",
    href: "#",
    specLines: [
      "STACK: AGENCY_FRONTEND",
      "SIGNAL: STUDIO_LED",
      "TAGS: [LEADERSHIP, CRAFT]",
    ],
  },
];
