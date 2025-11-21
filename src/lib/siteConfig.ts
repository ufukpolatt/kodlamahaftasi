export const siteConfig = {
  name: "CodeWeek AI",
  description:
    "Yapay zeka ve etik temalı CodeWeek haftası. Machine learning, AI ethics ve sorumlu inovasyon için bir araya geliyoruz.",
  url: "https://codeweek-ai.example.com",
  ogImage: "/og-ai.png",
  contact: {
    email: "ai@codeweek.org",
    phone: "+90 212 555 00 00",
  },
  socials: [
    { label: "Twitter", href: "https://twitter.com/codeweekai" },
    { label: "LinkedIn", href: "https://linkedin.com/company/codeweek-ai" },
    { label: "GitHub", href: "https://github.com/codeweek-ai" },
  ],
  navLinks: [
    { label: "Anasayfa", href: "/" },
    { label: "Etkinlik Takvimi", href: "/schedule" },
    { label: "Atölyeler", href: "/workshops" },
    { label: "Konuşmacılar", href: "/speakers" },
    { label: "Yarışmacılar&Maratonlar", href: "/competitions" },
    { label: "Veli Katılımı", href: "/community" },
    { label: "İletişim", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
