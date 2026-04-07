/**
 * Canonical outbound URLs. Optional NEXT_PUBLIC_* env overrides per deploy.
 */

const DEFAULT_LINKEDIN = "https://www.linkedin.com/in/raydensiarot/";
const DEFAULT_SIARIA_LABS = "https://siarialabs.com/";
const DEFAULT_MSA_UTA = "https://utaatmsa.org";

/** In-app PDF viewer route (embeds /public/rayden-siarot-resume-2026.pdf). */
const DEFAULT_RESUME_PATH = "/resume";

function trimEnv(value: string | undefined): string | undefined {
  const v = typeof value === "string" ? value.trim() : "";
  return v.length > 0 ? v : undefined;
}

export const SITE_LINKEDIN_URL =
  trimEnv(process.env.NEXT_PUBLIC_LINKEDIN_URL) ?? DEFAULT_LINKEDIN;

export const SITE_SIARIA_LABS_URL =
  trimEnv(process.env.NEXT_PUBLIC_SIARIA_LABS_URL) ?? DEFAULT_SIARIA_LABS;

export const SITE_MSA_UTA_URL =
  trimEnv(process.env.NEXT_PUBLIC_MSA_UTA_URL) ?? DEFAULT_MSA_UTA;

/** Résumé: default `/resume` (embedded PDF viewer). Override with NEXT_PUBLIC_RESUME_URL. */
export const SITE_RESUME_HREF =
  trimEnv(process.env.NEXT_PUBLIC_RESUME_URL) ?? DEFAULT_RESUME_PATH;
