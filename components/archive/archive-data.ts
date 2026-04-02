export type ArchiveProject = {
  id: string;
  index: string;
  title: string;
  typeRoleLine: string;
  description: string;
  href: string;
};

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
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
