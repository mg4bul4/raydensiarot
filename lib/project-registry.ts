import {
  GIGATAX_NARRATIVE,
  GROUNDED_TALKS_NARRATIVE,
  MSA_UTA_NARRATIVE,
  NAFS_NARRATIVE,
  TANZEEL_NARRATIVE,
} from "@/lib/narrative-case-studies";
import { SITE_MSA_UTA_URL } from "@/lib/site-links";
import type { ProjectCardConfig } from "@/lib/project-registry-types";

const vibeCodingNotes =
  "Vibe coding: explicit tokens (spacing on an 8px grid), type via CSS variables, and paired hover + focus-visible states so polish does not regress accessibility.";

export const PROJECT_REGISTRY: Record<string, ProjectCardConfig> = {
  gigatax: {
    slug: "gigatax",
    primaryHref: "https://devpost.com/software/gigatax",
    primaryLabel: "View on Devpost",
    primaryExternal: true,
    showPrimary: true,
    narrativeCaseStudy: GIGATAX_NARRATIVE,
  },

  "msa-uta": {
    slug: "msa-uta",
    primaryHref: SITE_MSA_UTA_URL,
    primaryLabel: "Visit Website",
    primaryExternal: true,
    showPrimary: true,
    narrativeCaseStudy: MSA_UTA_NARRATIVE,
  },

  "nafs-fyi": {
    slug: "nafs-fyi",
    primaryHref: "https://nafs.fyi",
    primaryLabel: "Visit Website",
    primaryExternal: true,
    showPrimary: true,
    docsDisabled: true,
    narrativeCaseStudy: NAFS_NARRATIVE,
  },

  "tanzeel-initiative": {
    slug: "tanzeel-initiative",
    primaryHref: "https://www.tanzeelinitiative.org/",
    primaryLabel: "Visit Website",
    primaryExternal: true,
    showPrimary: true,
    narrativeCaseStudy: TANZEEL_NARRATIVE,
  },

  "grounded-talks": {
    slug: "grounded-talks",
    primaryHref: "https://www.figma.com/proto/JCudWWWOUFPvT874qDMIGH?node-id=618-338&t=ZT80TGs74DUIt1r2-6",
    primaryLabel: "View Prototype",
    primaryExternal: true,
    showPrimary: true,
    narrativeCaseStudy: GROUNDED_TALKS_NARRATIVE,
  },

  "graphic-design": {
    slug: "graphic-design",
    primaryHref: "/projects/posters",
    primaryLabel: "View Gallery",
    primaryExternal: false,
    showPrimary: true,
    docsContent: {
      manualTitle: "Posters & print",
      brandStrategy: {
        typography: [
          {
            name: "Display type as image",
            role: "Typography in these posters is treated as a visual element first, not a legibility tool. Scale, weight, and placement carry emotional charge before the words are read.",
            sample: "ALL TIME HIGH · TOUR",
          },
          {
            name: "Contrast as hierarchy",
            role: "Every piece uses high contrast to establish read-order without relying on color alone. The eye lands on the right element even at reduced size or in low light.",
            sample: "Halftone · Silhouette · Cut type",
          },
          {
            name: "Texture and print reference",
            role: "Grain, halftone, and distress are intentional signals, not decoration. They reference specific print traditions: zine culture, screenprint, vintage offset.",
            sample: "Quran Night · Retro Gundam · Dreaming",
          },
        ],
        colors: [
          {
            name: "Context-specific palettes",
            hex: "#0A0A0A",
            usage: "Each poster is built around the constraints of its brief. Event posters lean warm and photographic. Speculative and experimental work uses limited, high-contrast palettes closer to screenprint.",
          },
          {
            name: "Dark fields as composition",
            hex: "#1A1A1A",
            usage: "Dark grounds are a recurring structural choice. They isolate subjects, add weight, and keep the overall feel legible and punchy at any scale.",
          },
          {
            name: "Accent color as focal point",
            hex: "#AF101A",
            usage: "A single saturated accent per piece focuses attention. The red frame in Retro Gundam, the cyan bar in I Won't Tell, the neon in Future Folklore — each functions as a deliberate visual stop.",
          },
        ],
      },
      componentArchitecture: [
        {
          name: "All Time High Tour",
          functionalLogic:
            "Promote a local DIY punk show with a raw, high-energy identity. High-contrast halftone and cut-and-paste type reference 90s zine culture and classic punk flyers.",
        },
        {
          name: "Dreaming",
          functionalLogic:
            "Capture a surreal, subconscious mood using gritty lo-fi visual language. Silhouette and airbrushed glow sit on dense texture so depth and mystery stay legible at poster scale.",
        },
        {
          name: "Retro Gundam Screenprint",
          functionalLogic:
            "Evoke nostalgia for classic mecha anime with a distressed, limited-palette graphic. Complementary orange and purple on a dark field, framed by a bold red edge for vintage print impact.",
        },
        {
          name: "I Won't Tell",
          functionalLogic:
            "Bridge classical sculpture and digital print with a provocative take on secrecy and identity. Halftone pattern and a censorship strip focus attention on what is withheld, not shown.",
        },
        {
          name: "Showdown Nights After Hours",
          functionalLogic:
            "Promote a late-night community program that balances energy, clarity, and spiritual tone. Celestial backdrop with metallic type keeps hierarchy readable over a busy photographic scene.",
        },
        {
          name: "Quran Night: The Serenity of Remembrance",
          functionalLogic:
            "Design a dignified invite for a university spiritual event that welcomes students and guests. Warm dark palette, script headline, and serif detail signal tradition and calm in one glance.",
        },
        {
          name: "Future Folklore Festival",
          functionalLogic:
            "Promote a fictional festival blending North African heritage with a far-future cyberpunk lens. Neon gradients and scanline texture sell retro-futurism without losing cultural silhouette.",
        },
      ],
      userFlows: [
        {
          title: "Objective before execution",
          why: "Every piece starts with a clear brief: what needs to be communicated, to whom, and in what context. Visual decisions follow from that constraint, not the other way around.",
        },
        {
          title: "Print tradition as reference",
          why: "Zine culture, screenprint, vintage offset, and halftone photography are deliberate reference points, not aesthetic accidents. Knowing the tradition makes the departure intentional.",
        },
        {
          title: "Legibility under real conditions",
          why: "Posters are read at distance, at small size, in feeds, and in low light. Every composition is stress-tested for read-order and contrast before it's finished.",
        },
      ],
      technicalExecution: [
        {
          title: "Tools and process",
          notes: `Primary tools: Adobe Illustrator, Photoshop, and Figma depending on the piece. Print-informed work (halftone, screenprint simulation) is produced in Photoshop with custom halftone screens and grain overlays. Vector and type-heavy work lives in Illustrator. Final exports are optimized for both digital display and print-ready output where the brief requires it.`,
        },
        {
          title: "Gallery implementation",
          notes: `Posters load from data/posters.json with intrinsic dimensions to avoid layout shift. Each entry carries an objective and visual logic field that surfaces the design rationale inline with the work. ${vibeCodingNotes}`,
          code: `import data from "@/data/posters.json";
export const posters = data.posters;`,
          language: "ts",
        },
      ],
    },
  },
};

export const DOCS_SLUGS = Object.keys(PROJECT_REGISTRY);

export function getProjectConfig(slug: string): ProjectCardConfig | undefined {
  return PROJECT_REGISTRY[slug];
}

export function getDocPageTitle(config: ProjectCardConfig): string {
  return (
    config.narrativeCaseStudy?.displayTitle ??
    config.docsContent?.manualTitle ??
    "Documentation"
  );
}
