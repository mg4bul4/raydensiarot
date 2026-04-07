import type { Metadata } from "next";
import { StitchAboutPage } from "@/components/about/StitchAboutPage";

export const metadata: Metadata = {
  title: "About — Rayden Siarot",
  description:
    "UI designer and developer: experience, design philosophy, and how I work — The Digital Calligrapher.",
};

export default function AboutPage() {
  return <StitchAboutPage />;
}
