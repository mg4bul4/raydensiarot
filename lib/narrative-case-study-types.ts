/**
 * Narrative documentation for /projects/[slug]/docs ("The Disciplined Canvas").
 * Optional alternative to {@link ProjectDocsContent} (design manual).
 */
export type NarrativeCaseStudy = {
  displayTitle: string;
  /** Small label under nav, e.g. The Disciplined Canvas */
  kicker: string;
  /** One line: role + scope */
  roleLine: string;
  /** Short tagline for the hero section */
  tagline: string;
  /** Optional team members shown in the hero metadata grid */
  team?: string;
  /** Optional tech stack tags shown in the hero */
  techStack?: string[];
  /** 4-card bento summary directly below the hero */
  bentoSummary: {
    coreProblem: string;
    myRole: string;
    strategicDecision: string;
    userBenefit: string;
  };
  overview: {
    summary: string;
    challenge: string;
    audience: string;
  };
  strategicLogic: {
    designStrategy: string;
    /** Content for the second strategic logic block */
    visualIdentity: string;
    /** Override the default "Design strategy" heading */
    designStrategyHeading?: string;
    /** Override the default "Visual identity" heading */
    visualIdentityHeading?: string;
    /**
     * Optional process/wireframe images shown after the two strategic logic blocks.
     * Rendered as a 2-3 col grid.
     */
    processImages?: Array<{ src: string; alt: string; caption: string }>;
    /**
     * Optional persona cards rendered after processImages.
     * Rendered as a 2-col grid with caption below each.
     */
    personaImages?: Array<{ src: string; alt: string; caption: string }>;
  };
  solution: {
    /** Optional wide banner shown above the solution body copy */
    heroImage?: { src: string; alt: string };
    body: string;
    /** Captions for placeholder image blocks (shown when no real image is provided) */
    imagePlaceholders: string[];
    /**
     * Optional real images — when provided, replaces the dashed placeholder.
     * Each entry maps 1:1 with imagePlaceholders by index.
     */
    images?: Array<{
      src: string;
      alt: string;
      /** "desktop" renders wide 16:9, "mobile" renders portrait in a phone frame */
      variant: "desktop" | "mobile";
    }>;
    /**
     * Optional extra images shown after the placeholder blocks as individually
     * titled figures — use for additional final screens.
     */
    additionalScreens?: Array<{ title: string; src: string; alt: string }>;
    /** Optional Figma prototype embed URL (used as iframe src) */
    prototypeEmbedUrl?: string;
    /** Caption for the full-bleed interruption image */
    fullBleedCaption: string;
    /** Optional real full-bleed image — replaces the dashed placeholder */
    fullBleedImage?: { src: string; alt: string };
  };
  outcome: {
    impact: string;
    throughLine: string;
  };
};
