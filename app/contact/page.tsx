import type { Metadata } from "next";
import { StitchContactPage } from "@/components/contact/StitchContactPage";

export const metadata: Metadata = {
  title: "Contact — Rayden Siarot",
  description:
    "Get in touch: name, email, and message — The Digital Calligrapher.",
};

export default function ContactPage() {
  return <StitchContactPage />;
}
