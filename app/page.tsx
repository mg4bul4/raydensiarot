import type { Metadata } from "next";
import { StitchSiariaLanding } from "@/components/landing/StitchSiariaLanding";

export const metadata: Metadata = {
  title: "Rayden Siarot — UI Designer & Creative Developer",
  description:
    "UI designer and brand strategist specializing in high-fidelity implementation and aesthetic logic.",
};

export default function Home() {
  return <StitchSiariaLanding />;
}
