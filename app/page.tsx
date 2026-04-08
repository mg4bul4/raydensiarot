import type { Metadata } from "next";
import { StitchSiariaLanding } from "@/components/landing/StitchSiariaLanding";

export const metadata: Metadata = {
  title: "Rayden Siarot | UI Designer & Brand Strategist",
  description:
    "Where structural logic meets aesthetic grace: visual systems that align brand identity with seamless user experience.",
};

export default function Home() {
  return <StitchSiariaLanding />;
}
