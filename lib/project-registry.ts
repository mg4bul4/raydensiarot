import {
  MSA_UTA_NARRATIVE,
  NAFS_NARRATIVE,
  TANZEEL_NARRATIVE,
} from "@/lib/narrative-case-studies";
import { SITE_MSA_UTA_URL, SITE_SIARIA_LABS_URL } from "@/lib/site-links";
import type { ProjectCardConfig } from "@/lib/project-registry-types";

const vibeCodingNotes =
  "Vibe coding: explicit tokens (spacing on an 8px grid), type via CSS variables, and paired hover + focus-visible states so polish does not regress accessibility.";

export const PROJECT_REGISTRY: Record<string, ProjectCardConfig> = {
  siaria: {
    slug: "siaria",
    primaryHref: SITE_SIARIA_LABS_URL,
    primaryLabel: "Visit Website",
    primaryExternal: true,
    showPrimary: false,
    docsContent: {
      manualTitle: "Siaria Labs",
      brandStrategy: {
        typography: [
          {
            name: "Display / Headline",
            role: "Epilogue 700–800 · Uppercase tracking for authority",
            sample: "AGENCY · PRODUCT UI",
          },
          {
            name: "Body",
            role: "Manrope 400–500 · Comfortable reading for proposals",
            sample: "Scope, timeline, and deliverables in plain language.",
          },
        ],
        colors: [
          {
            name: "Cream field",
            hex: "#FFF9E8",
            usage: "Default surface; lets work samples carry saturation.",
          },
          {
            name: "Accent",
            hex: "#AF101A",
            usage: "CTAs, key dividers, and emphasis without second accent colors.",
          },
          {
            name: "Ink",
            hex: "#1E1C0B",
            usage: "Primary text; kept warm to match cream grounds.",
          },
        ],
      },
      componentArchitecture: [
        {
          name: "Navigation shell",
          functionalLogic:
            "Fixed bar with minimal chrome so portfolio and case routes stay scannable; logo returns to root.",
        },
        {
          name: "Project tile",
          functionalLogic:
            "Image + meta + single primary action—no competing CTAs on listing views.",
        },
        {
          name: "Contact strip",
          functionalLogic:
            "One conversion path per viewport height to reduce decision fatigue.",
        },
      ],
      userFlows: [
        {
          title: "Prospect → proof",
          why: "Visitors land on credibility first (discipline, craft), then route to contact only after scanning work—mirrors how buyers actually decide.",
        },
        {
          title: "Repeat client → new engagement",
          why: "Stable URL structure and clear service labels reduce re-orientation when returning for a second scope.",
        },
      ],
      technicalExecution: [
        {
          title: "Implementation notes",
          notes: `Next.js App Router, shallow routes, metadata per page for shareable previews. ${vibeCodingNotes}`,
          code: `export const metadata = {
  title: "Siaria Labs | Rayden Siarot",
};`,
          language: "ts",
        },
      ],
    },
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
            name: "Poster display",
            role: "Epilogue / condensed grotesk at poster scale",
            sample: "ALL TIME HIGH · TOUR",
          },
          {
            name: "Annotation",
            role: "Manrope for objectives in portfolio",
            sample: "Objective · Visual logic",
          },
        ],
        colors: [
          { name: "Gallery cream", hex: "#FDF9EA", usage: "Digital gallery field; matches site Kanso base." },
          { name: "Accent red", hex: "#AF101A", usage: "1px frames + key emphasis in UI chrome only." },
          { name: "True black (print)", hex: "#0A0A0A", usage: "Referenced for halftone and ink-heavy pieces in docs." },
        ],
      },
      componentArchitecture: [
        {
          name: "Poster tile",
          functionalLogic:
            "Aspect ratio locked; hover scale 1.02 + title/year overlay for scan without opening lightbox.",
        },
        {
          name: "Lightbox",
          functionalLogic:
            "Cream full-screen field isolates print work from noisy page chrome.",
        },
        {
          name: "Strategic blurb block",
          functionalLogic:
            "Objective vs Visual logic trains clients to read intent before craft detail.",
        },
      ],
      userFlows: [
        {
          title: "Curator → evaluate craft",
          why: "Grid spacing (ma) prevents visual competition between posters; each piece breathes independently.",
        },
        {
          title: "Art director → steal with pride",
          why: "Lightbox reveals full bleed for texture/halftone decisions that thumbnails hide.",
        },
      ],
      technicalExecution: [
        {
          title: "Data-driven poster list",
          notes: `Posters load from data/posters.json; Next/Image uses intrinsic dimensions to avoid layout shift. ${vibeCodingNotes}`,
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
