import type { Metadata } from "next";
import { StitchAboutPage } from "@/components/about/StitchAboutPage";

export const metadata: Metadata = {
  title: "About | Rayden Siarot",
  description:
    "UI Designer & Brand Strategist: purposeful digital identities, user-centric interfaces, and disciplined design. Rayden Siarot.",
};

export default function AboutPage() {
  return <StitchAboutPage />;
}
