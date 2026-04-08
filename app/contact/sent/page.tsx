import type { Metadata } from "next";
import { MessageSentPage } from "@/components/contact/MessageSentPage";

export const metadata: Metadata = {
  title: "Message sent | Rayden Siarot",
  description: "Thanks for reaching out. Explore projects or about while you wait.",
};

export default function ContactSentPage() {
  return <MessageSentPage />;
}
