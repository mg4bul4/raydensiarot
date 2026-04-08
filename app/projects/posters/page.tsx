import type { Metadata } from "next";
import { StitchPostersPage } from "@/components/projects/StitchPostersPage";

export const metadata: Metadata = {
  title: "Graphic design & posters | Rayden Siarot",
  description:
    "Poster and print design: concert flyers, events, and campaign art in a Kanso-inspired digital gallery.",
};

export default function PostersProjectPage() {
  return <StitchPostersPage />;
}
