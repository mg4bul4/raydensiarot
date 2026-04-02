import type { Metadata } from "next";
import { BiosPage } from "@/components/about/BiosPage";

export const metadata: Metadata = {
  title: "BIOS — Rayden Siarot",
  description:
    "Profile: identity, mission history, and philosophy — Rayden Siarot.",
};

export default function AboutPage() {
  return <BiosPage />;
}
