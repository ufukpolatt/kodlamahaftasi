import { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { EventCard } from "@/components/cards/event-card";
import { scheduleDays } from "@/data/mockData";

export const metadata: Metadata = {
  title: "Etkinlik Takvimi",
  description: "CodeWeek haftasının günlere göre planlanmış placeholder takvimi.",
};

export default function SchedulePage() {
  return (
    <div className="space-y-12 pb-20">
      <PageHeader
        badge="7 Günlük Program"
        title="Etkinlik Takvimi"
        description="13-19 Ekim tarihleri arasında gerçekleşecek tüm etkinliklerin detaylı programı. Her gün için farklı temalar ve odak alanları."
      />

      <section className="mx-auto w-[min(1100px,95%)] space-y-10">
        {scheduleDays.map((day, dayIndex) => (
          <div
            key={day.day}
            className="rounded-3xl border border-white/70 bg-white/90 p-8 shadow-soft"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-secondary">
                  Gün {dayIndex + 1} • {day.day} • {day.date}
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">{day.summary}</h2>
              </div>
              <div className="mt-2 text-sm text-slate-600 md:mt-0">
                {day.events.length} etkinlik
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {day.events.map((event) => (
                <EventCard key={event.title} {...event} />
              ))}
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

