import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Etkinlik Takvimi - CodeWeek",
  description: "8-12 Aralık tarihleri arasında Eyüboğlu Eğitim Kurumları'nda gerçekleşecek tüm etkinliklerin detaylı programı. Her gün için farklı temalar ve odak alanları.",
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}