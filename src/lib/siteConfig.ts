export const siteConfig = {
  name: "CodeWeek Haftası",
  description:
    "CodeWeek topluluğu için atölyeler, konuşmalar ve hackathonlarla dolu, enerjik ve katılımcı bir etkinlik haftası.",
  url: "https://codeweek.example.com",
  ogImage: "/og.png",
  contact: {
    email: "info@codeweek.org",
    phone: "+90 212 000 00 00",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com/codeweek" },
    { label: "LinkedIn", href: "https://linkedin.com/company/codeweek" },
    { label: "YouTube", href: "https://youtube.com/@codeweek" },
  ],
  navLinks: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Takvim", href: "/schedule" },
    { label: "Atölyeler", href: "/workshops" },
    { label: "Konuşmacılar", href: "/speakers" },
    { label: "İletişim", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;

