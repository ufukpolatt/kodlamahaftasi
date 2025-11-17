import { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { speakers } from "@/data/mockData";
import { SpeakerCard } from "@/components/cards/speaker-card";

export const metadata: Metadata = {
  title: "Konuşmacılar",
  description: "Konuşmacı kartları placeholder foto ve bilgilerle hazır.",
};

export default function SpeakersPage() {
  return (
    <div className="space-y-12 pb-20">
      <PageHeader
        badge="12+ Konuşmacı"
        title="Konuşmacılar ve Mentorlar"
        description="Teknoloji dünyasının önde gelen isimleri CodeWeek'te. Her konuşmacı kendi alanında uzman ve deneyimli profesyoneller."
      />

      <section className="mx-auto w-[min(1100px,95%)]">
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1100px,95%)] rounded-3xl border border-white/70 bg-gradient-to-br from-codeweek-primary/5 to-codeweek-secondary/5 p-8 shadow-soft">
        <h3 className="text-xl font-bold text-slate-900">Konuşmacı Programı</h3>
        <p className="mt-2 text-sm text-slate-600">
          Tüm konuşmacıların detaylı programı ve oturum saatleri etkinlik takvimi sayfasında yer almaktadır. 
          Keynote konuşmaları ana sahnede, workshop&apos;lar ise farklı salonlarda gerçekleşecektir.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/70 bg-white/90 p-4">
            <p className="text-sm font-semibold text-slate-900">Keynote Konuşmaları</p>
            <p className="mt-1 text-xs text-slate-600">Ana sahne • Her gün 10:00-11:00</p>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white/90 p-4">
            <p className="text-sm font-semibold text-slate-900">Mentor Office Hours</p>
            <p className="mt-1 text-xs text-slate-600">Atölye alanları • Gün boyu</p>
          </div>
        </div>
      </section>
    </div>
  );
}

