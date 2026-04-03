export type ArchiveProject = {
  id: string;
  title: string;
  type: string;
  role: string;
  year: string;
  description?: string;
  mission?: string;
  /** Single high-signal outcome line for listings (constraints → result). */
  outcomeLead?: string;
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
    outcomeLead:
      "0→1 product: dual-audience trust, scheduling, and brand system under one roof.",
    mission:
      "Students needed credible access to industry mentors; mentors needed a low-friction way to show up. I owned brand and platform UX so both sides could commit in minutes—not after a chain of cold emails.",
    impactPoints: [
      "End-to-end UI and design system from a standing start—scalable for future product work.",
      "Booking and profile flows tuned to reduce hesitation on both sides of the marketplace.",
      "Visual language that reads executive-grade to sponsors and approachable to students.",
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
    outcomeLead: "Sensitive category UX: clarity first, judgment never.",
    description:
      "Women’s health startup in a stigmatized space. UI work prioritized scanability, calm hierarchy, and flows that work when users are distracted or low on time.",
    href: "https://nafs.fyi",
    ctaLabel: "Visit site",
  },
  {
    id: "msa-uta",
    title: "MSA at UTA Website",
    type: "Web platform",
    role: "Lead developer",
    year: "—",
    outcomeLead: "Community site: events, resources, and onboarding in one place.",
    description:
      "Owned the student org’s public web presence—information architecture, build, and handoff so leadership can update content without engineering.",
    href: "#",
    ctaLabel: "Soon",
  },
  {
    id: "siaria",
    title: "Siaria Labs",
    type: "Design agency",
    role: "Founder",
    year: "—",
    outcomeLead: "Independent practice: product UI and creative direction for hire.",
    description:
      "Small studio focused on disciplined interfaces and coherent brand execution—fewer surfaces, sharper intent.",
    href: "#",
    ctaLabel: "Soon",
  },
];
