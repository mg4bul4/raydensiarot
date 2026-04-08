import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDocsPage } from "@/components/projects/ProjectDocsPage";
import {
  DOCS_SLUGS,
  getDocPageTitle,
  getProjectConfig,
} from "@/lib/project-registry";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return DOCS_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getProjectConfig(slug);
  if (!config?.narrativeCaseStudy && !config?.docsContent) {
    return { title: "Documentation" };
  }
  const pageTitle = getDocPageTitle(config);
  const narrative = Boolean(config.narrativeCaseStudy);
  return {
    title: `${pageTitle} — ${narrative ? "Case study" : "Documentation"} | Rayden Siarot`,
    description: narrative
      ? `The Disciplined Canvas: strategy and execution for ${pageTitle}.`
      : `Strategy & implementation notes for ${pageTitle}.`,
  };
}

export default async function ProjectDocsRoute({ params }: PageProps) {
  const { slug } = await params;
  const config = getProjectConfig(slug);
  if (!config?.narrativeCaseStudy && !config?.docsContent) notFound();
  return <ProjectDocsPage config={config} />;
}
