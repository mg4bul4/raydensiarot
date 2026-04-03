export type ArchiveCardVariant = "default" | "missionLead";

export type ArchiveProject = {
  id: string;
  index: string;
  title: string;
  /** e.g. PROJECT_ID: 00 // GROUNDED_TALKS */
  projectIdLine?: string;
  typeRoleLine: string;
  description?: string;
  mission?: string;
  impactReport?: string[];
  href: string;
  ctaLabel?: string;
  cardVariant?: ArchiveCardVariant;
};

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    id: "grounded-talks",
    index: "00",
    title: "GROUNDED_TALKS",
    projectIdLine: "PROJECT_ID: 00 // GROUNDED_TALKS",
    typeRoleLine: "TYPE: STARTUP_PLATFORM // ROLE: CREATIVE_LEAD [2023]",
    mission:
      "Bridging the gap between academia and industry. Built a digital bridge for students to access high-level professional mentorship.",
    impactReport: [
      "[RESULT_01]: Jumpstarted the initial brand identity and platform UX.",
      "[RESULT_02]: Scaled student-to-professional connectivity.",
      "[RESULT_03]: Established design-driven empowerment as a core mission value.",
    ],
    href: "/projects/grounded-talks",
    ctaLabel: "( EXECUTE_INTEL )",
    cardVariant: "missionLead",
  },
  {
    id: "nafs",
    index: "01",
    title: "Nafs.fyi",
    typeRoleLine: "TYPE: MOBILE_APP // ROLE: UI_DESIGNER",
    description:
      "Muslim women's health startup. Focused on intuitive UX and high-fidelity UI.",
    href: "https://nafs.fyi",
  },
  {
    id: "msa-uta",
    index: "02",
    title: "MSA at UTA Website",
    typeRoleLine: "TYPE: WEB_PLATFORM // ROLE: LEAD_DEV",
    description:
      "Community-driven digital hub for the UT Arlington Muslim Student Association.",
    href: "#",
  },
  {
    id: "siaria",
    index: "03",
    title: "SIARIA LABS",
    typeRoleLine: "TYPE: DESIGN_AGENCY // ROLE: FOUNDER",
    description: "A creative lab specializing in brutalist digital experiences.",
    href: "#",
  },
];
