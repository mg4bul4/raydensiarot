export type ArchiveProject = {
  id: string;
  title: string;
  type: string;
  role: string;
  year: string;
  description?: string;
  mission?: string;
  impactPoints?: string[];
  href: string;
  featured?: boolean;
  ctaLabel?: string;
};

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    id: "grounded-talks",
    title: "GroundedTalks",
    type: "Startup platform",
    role: "Creative lead",
    year: "2023",
    mission:
      "Bridging the gap between academia and industry. Built a digital bridge for students to access high-level professional mentorship.",
    impactPoints: [
      "Jumpstarted the initial brand identity and platform UX.",
      "Scaled student-to-professional connectivity.",
      "Established design-driven empowerment as a core mission value.",
    ],
    href: "/projects/grounded-talks",
    featured: true,
    ctaLabel: "View case study",
  },
  {
    id: "nafs",
    title: "Nafs.fyi",
    type: "Mobile app",
    role: "UI designer",
    year: "—",
    description:
      "Muslim women's health startup. Focused on intuitive UX and high-fidelity UI.",
    href: "https://nafs.fyi",
    ctaLabel: "Visit site",
  },
  {
    id: "msa-uta",
    title: "MSA at UTA Website",
    type: "Web platform",
    role: "Lead developer",
    year: "—",
    description:
      "Community-driven digital hub for the UT Arlington Muslim Student Association.",
    href: "#",
    ctaLabel: "Soon",
  },
  {
    id: "siaria",
    title: "Siaria Labs",
    type: "Design agency",
    role: "Founder",
    year: "—",
    description:
      "A creative lab specializing in distinctive digital experiences.",
    href: "#",
    ctaLabel: "Soon",
  },
];
