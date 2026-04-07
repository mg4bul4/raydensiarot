import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { GroundedTalksDebrief } from "@/components/projects/GroundedTalksDebrief";

export const metadata: Metadata = {
  title: "GroundedTalks — Case study",
  description:
    "Creative lead: 0→1 brand and platform UX for a student–industry mentorship product—constraints, system, and outcomes.",
};

export default function GroundedTalksPage() {
  return (
    <>
      <GroundedTalksDebrief />
      <SiteFooter />
    </>
  );
}
