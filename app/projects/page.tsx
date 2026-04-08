import type { Metadata } from "next";
import { StitchProjectsIndex } from "@/components/projects/StitchProjectsIndex";

export const metadata: Metadata = {
  title: "My projects | Rayden Siarot",
  description:
    "Selected work: Siaria Labs, community platforms, edutech, and product UI.",
};

export default function ProjectsPage() {
  return <StitchProjectsIndex />;
}
