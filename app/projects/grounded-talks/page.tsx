import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { GroundedTalksDebrief } from "@/components/projects/GroundedTalksDebrief";

export const metadata: Metadata = {
  title: "GroundedTalks | Case study",
  description:
    "GroundedTalks: discovery platform for 300+ students. Research, gamified UX, Cup of Joe branding, Squarespace build, usability outcomes.",
};

export default function GroundedTalksPage() {
  return (
    <>
      <GroundedTalksDebrief />
      <SiteFooter />
    </>
  );
}
