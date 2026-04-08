import type {
  ProjectCardConfig,
  ProjectDocsContent,
} from "@/lib/project-registry-types";
import { NarrativeCaseStudyDocs } from "@/components/projects/NarrativeCaseStudyDocs";
import { ProjectDesignManualDocs } from "@/components/projects/ProjectDesignManualDocs";

type ProjectDocsPageProps = {
  config: ProjectCardConfig;
};

/**
 * Project documentation: narrative case study ("Disciplined Canvas") when
 * {@link ProjectCardConfig.narrativeCaseStudy} is set; otherwise design manual.
 */
export function ProjectDocsPage({ config }: ProjectDocsPageProps) {
  if (config.narrativeCaseStudy) {
    return <NarrativeCaseStudyDocs narrative={config.narrativeCaseStudy} />;
  }
  if (config.docsContent) {
    return (
      <ProjectDesignManualDocs
        config={config as ProjectCardConfig & { docsContent: ProjectDocsContent }}
      />
    );
  }
  return null;
}
