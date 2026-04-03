import type { Metadata } from "next";
import { GroundedTalksDebrief } from "@/components/projects/GroundedTalksDebrief";

export const metadata: Metadata = {
  title: "GroundedTalks — The Debriefing",
  description:
    "Case file: creative lead, platform UX, and impact — GroundedTalks deployment.",
};

export default function GroundedTalksPage() {
  return <GroundedTalksDebrief />;
}
