import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Etkinlik Takvimi - KodlamaHaftası",
  description: "8–12 Aralık tarihleri arasında Eyüboğlu Eğitim Kurumları'nda gerçekleşecek Kodlama Haftası'nın günlük etkinlik programını bu sayfada bulabilirsiniz.",
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}