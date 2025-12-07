import { Metadata } from "next";

import { siteConfig } from "@/lib/siteConfig";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "İletişim",
  description: "AI ve teknoloji odaklı KodlamaHaftası iletişim sayfası.",
};

export default function ContactPage() {
  return <ContactClient />;
}

