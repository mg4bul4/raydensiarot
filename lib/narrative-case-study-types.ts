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
    visualIdentity: string;
  };
  solution: {
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
