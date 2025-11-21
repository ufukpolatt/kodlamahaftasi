import { Metadata } from "next";

import { siteConfig } from "@/lib/siteConfig";
import { faqs } from "@/data/mockData";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "İletişim & SSS",
  description: "AI ve teknoloji odaklı CodeWeek iletişim sayfası.",
};

export default function ContactPage() {
  return <ContactClient />;
}

