"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  heroStats,
  quickLinks,
  scheduleDays,
  speakers,
  workshops,
} from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/cards/event-card";
import { SpeakerCard } from "@/components/cards/speaker-card";
import { WorkshopCard } from "@/components/cards/workshop-card";

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="mx-auto flex w-[min(1200px,95%)] flex-col gap-10 rounded-[40px] border border-codeweek-blue-100/30 bg-gradient-to-br from-codeweek-blue-50/90 to-white/80 p-10 shadow-soft md:flex-row">
        <div className="flex-1 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex w-fit rounded-full bg-codeweek-secondary px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white"
          >
            Eyüboğlu Eğitim Kurumları
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
          >
            CodeWeek Haftası ile yaratıcı teknolojiyi, toplumsal faydaya dönüştür.
          </motion.h1>
          <p className="text-base text-slate-600 md:text-lg">
            Bir hafta boyunca hackathonlar, atölyeler, konuşmalar ve veli etkinlikleriyle
            teknolojiyi herkes için erişilebilir kılıyoruz. Tüm içerikler şimdilik
            placeholder ama yapı hazır.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/schedule">Takvimi keşfet</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/workshops">Atölye taslakları</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-3xl bg-gradient-to-br from-codeweek-blue-100 to-codeweek-red-50 p-6 border border-codeweek-blue-200/30">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-600">
            Hızlı Linkler
          </p>
          <div className="grid gap-4">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-codeweek-blue-200/50 bg-white/80 px-5 py-4 transition hover:-translate-y-1 hover:border-codeweek-primary/60 hover:shadow-lg hover:bg-codeweek-blue-50/90"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="text-xs text-slate-500">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1200px,95%)]">
        <div className="grid gap-6 md:grid-cols-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-codeweek-blue-200/40 bg-gradient-to-br from-codeweek-blue-50/80 to-white/70 p-6 text-center shadow-soft hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-codeweek-blue-600 font-medium">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-codeweek-primary">{stat.value}</p>
              <p className="text-xs text-codeweek-blue-500">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1200px,95%)] space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-codeweek-secondary">
              Günün öne çıkanları
            </p>
            <h2 className="mt-2 text-3xl font-bold text-codeweek-primary">
              Etkinlik Takviminden seçmeler
            </h2>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/schedule">Tüm takvimi gör</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {scheduleDays.map((day) => (
            <div key={day.day} className="rounded-3xl border border-codeweek-blue-200/40 bg-gradient-to-br from-codeweek-blue-50/80 to-white/70 p-6 shadow-soft hover:shadow-lg transition-shadow">
              <div className="text-xs uppercase tracking-widest text-codeweek-blue-600 font-medium">
                {day.day} • {day.date}
              </div>
              <p className="mt-2 text-lg font-semibold text-codeweek-primary">{day.summary}</p>
              <div className="mt-4 space-y-4">
                {day.events.map((event) => (
                  <EventCard key={event.title} {...event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1200px,95%)] space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-codeweek-secondary">
              Atölye taslakları
            </p>
            <h2 className="mt-2 text-3xl font-bold text-codeweek-primary">
              Eller kirlenmeden önce plan hazır
            </h2>
          </div>
          <Button asChild>
            <Link href="/workshops">Atölyeleri incele</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {workshops.slice(0, 4).map((workshop) => (
            <WorkshopCard key={workshop.title} {...workshop} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1200px,95%)] space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-codeweek-secondary">
              Konuşmacılar
            </p>
            <h2 className="mt-2 text-3xl font-bold text-codeweek-primary">
              Mentorluk için örnek kartlar
            </h2>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/speakers">Tam liste</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </section>
    </div>
  );
}
