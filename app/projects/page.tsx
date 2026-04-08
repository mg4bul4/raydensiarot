import type { Metadata } from "next";
import { StitchProjectsIndex } from "@/components/projects/StitchProjectsIndex";

export const metadata: Metadata = {
  title: "My projects | Rayden Siarot",
  description:
    "Selected work: product UI, community platforms, edutech, and graphic design & posters.",
};

export default function ProjectsPage() {
  return <StitchProjectsIndex />;
}
