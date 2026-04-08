import type { NarrativeCaseStudy } from "@/lib/narrative-case-study-types";

/**
 * Project documentation payload for /projects/[slug]/docs (design manual).
 */
export type ProjectDocsTypographyItem = {
  name: string;
  role: string;
  sample: string;
};

export type ProjectDocsColorItem = {
  name: string;
  hex: string;
  usage: string;
};

export type ProjectDocsComponentItem = {
  name: string;
  functionalLogic: string;
};

export type ProjectDocsFlowItem = {
  title: string;
  why: string;
};

export type ProjectDocsTechnicalItem = {
  title: string;
  notes: string;
  code?: string;
  language?: string;
};

export type ProjectDocsContent = {
  /** Shown in docs page hero (can match marketing name). */
  manualTitle: string;
  brandStrategy: {
    typography: ProjectDocsTypographyItem[];
    colors: ProjectDocsColorItem[];
  };
  componentArchitecture: ProjectDocsComponentItem[];
  userFlows: ProjectDocsFlowItem[];
  technicalExecution: ProjectDocsTechnicalItem[];
};

export type ProjectCardConfig = {
  slug: string;
  /** Primary CTA (live site, case study, or gallery). */
  primaryHref: string;
  primaryLabel: string;
  primaryExternal?: boolean;
  /** If false, primary button is omitted (e.g. coming soon). */
  showPrimary?: boolean;
  /** If true, docs button is replaced with a static "Documentation in progress" label. */
  docsDisabled?: boolean;
  /** Design manual (typography, components, code). */
  docsContent?: ProjectDocsContent;
  /**
   * Narrative case study — **The Disciplined Canvas**. When set, docs page
   * renders this instead of {@link docsContent} (typically one or the other).
   */
  narrativeCaseStudy?: NarrativeCaseStudy;
};
