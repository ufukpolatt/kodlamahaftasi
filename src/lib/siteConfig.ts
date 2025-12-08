export const siteConfig = {
  name: "KodlamaHaftası AI",
  description:
    "Yapay zeka ve etik temalı KodlamaHaftası haftası. Machine learning, AI ethics ve sorumlu inovasyon için bir araya geliyoruz.",
  url: "https://kodlamahaftasi-ai.example.com",
  ogImage: "/og-ai.png",
  contact: {
    email: "bilgisayar@eyuboglu.k12.tr",
    phone: "+90 212 555 00 00",
  },
  socials: [
    { label: "Twitter", href: "https://twitter.com/codeweekai" },
    { label: "LinkedIn", href: "https://linkedin.com/company/codeweek-ai" },
    { label: "GitHub", href: "https://github.com/ufukpolatt/kodlamahaftasi" },
  ],
  navLinks: [
    { label: "Anasayfa", href: "/" },
    { label: "Etkinlik Takvimi", href: "/schedule" },
    { label: "Atölyeler", href: "/workshops" },
    { label: "Konuşmacılar", href: "/speakers" },
    { label: "Yarışmalar&Maratonlar", href: "/competitions" },
    { label: "Aile Katılımı", href: "/community" },
    { label: "Öğrenci Mentörleri", href: "/mentors" },
    { label: "İletişim", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
