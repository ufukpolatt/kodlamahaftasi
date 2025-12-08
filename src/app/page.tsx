"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Cpu, Sparkles, Zap, Network, Code2, Shield, Heart } from "lucide-react";

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
    <div className="space-y-32 relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-96 h-96 top-10 -left-48 opacity-20"></div>
        <div className="floating-orb w-64 h-64 top-1/2 -right-32 opacity-15" style={{ animationDelay: '2s' }}></div>
        <div className="floating-orb w-80 h-80 bottom-20 left-1/3 opacity-10" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Video Showcase at Top */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="relative mx-auto w-[min(1400px,95%)] mb-2"
      >
        <div className="relative rounded-3xl overflow-hidden ai-card">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 object-cover"
          >
            <source src="/homepage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-900/20 via-transparent to-codeweek-pink-900/20"></div>
          
          {/* Overlay Text */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm font-medium text-codeweek-purple-200 drop-shadow-lg"
            >
              Yapay Zeka • Etik • İnovasyon
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Hero Section - AI Themed */}
      <section className="relative mx-auto w-[min(1400px,95%)] -mt-2">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-8 mb-8"
          >
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
              <img src="/e_Logosu.png" alt="Logo" className="h-48 md:h-64 lg:h-72 w-auto opacity-90" />
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-center px-8">
                <span className="gradient-text">Yapay Zeka</span>
                <br />
                <span className="text-white">ve Etik</span>
              </h1>
              <img src="/e_Logosu.png" alt="Logo" className="h-48 md:h-64 lg:h-72 w-auto opacity-90" />
            </div>
            <p className="text-xl md:text-2xl text-codeweek-purple-200 max-w-3xl mx-auto leading-relaxed">
              Bu yıl Kodlama Haftası'nın odağında, yapay zekânın gücü ile etik kararların sorumluluğu arasındaki dengeyi keşfetmek var;
              <span className="gradient-text font-semibold"> yapay zekâ geliştirirken etik düşünmeyi, 
              etik düşünürken de teknolojiyi</span> doğru kullanmayı öğreniyoruz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-codeweek-purple-500/20 to-codeweek-pink-500/20 border border-codeweek-purple-500/30 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-codeweek-purple-300 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              8-12 Aralık • Eyüboğlu Eğitim Kurumları
              <Zap className="w-4 h-4" />
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-20"
          >
          </motion.div>

          {/* AI Ethics Quick Links - Hidden */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {quickLinks.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="ai-card group rounded-2xl p-6 block h-full data-stream"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center">
                      {index === 0 && <Network className="w-5 h-5 text-white" />}
                      {index === 1 && <Brain className="w-5 h-5 text-white" />}
                      {index === 2 && <Shield className="w-5 h-5 text-white" />}
                      {index === 3 && <Heart className="w-5 h-5 text-white" />}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400">
                      AI {index === 0 ? "Network" : index === 1 ? "Labs" : index === 2 ? "Ethics" : "Impact"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-sm text-codeweek-purple-300">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </section>

      {/* AI Stats Section - Hidden Participant, Workshop, and Mentor cards */}
      <section className="mx-auto w-[min(1400px,95%)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-1"
        >
          {heroStats.filter(stat => !["Katılımcı", "Atölye", "Mentor"].includes(stat.label)).map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="ai-card neural-bg rounded-2xl p-8 text-center group cursor-pointer max-w-md mx-auto"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-codeweek-purple-400 uppercase tracking-wider">{stat.label}</p>
              <p className="mt-2 text-4xl font-black gradient-text">{stat.value}</p>
              <p className="text-xs text-codeweek-purple-300 mt-2">{stat.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* AI Events Section */}
      <section className="mx-auto w-[min(1400px,95%)] space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mt-4 text-4xl md:text-5xl font-black">
            Takvim
          </h2>
          <p className="mt-4 text-lg text-codeweek-purple-300 max-w-2xl mx-auto">
            Machine learning'den etik yapay zekaya, hafta boyunca sürecek AI odaklı etkinlikler
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {scheduleDays.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="ai-card rounded-3xl p-8 neural-connection"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-codeweek-purple-400 font-bold">
                    {day.day}
                  </div>
                  <div className="text-sm text-codeweek-pink-400">
                    {day.date}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {day.events.map((event, index) => (
                  <EventCard
                    key={`${event.title}-${event.time}-${index}`}
                    title={event.title}
                    time={event.time}
                    track={event.track}
                    speaker={event.speaker}
                    participants={event.participants}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Workshops Section - Hidden */}
      {/* <section className="mx-auto w-[min(1400px,95%)] space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 className="mt-2 text-4xl md:text-5xl font-black">
              Atölyeler
            </h2>
            <p className="mt-4 text-lg text-codeweek-purple-300">
              Hands-on AI deneyimleri ve pratik uygulamalar
            </p>
          </div>
          <Button className="bg-gradient-to-r from-codeweek-purple-600 to-codeweek-pink-600 hover:from-codeweek-purple-700 hover:to-codeweek-pink-700 text-white border-0" asChild>
            <Link href="/workshops">Tüm Atölyeler</Link>
          </Button>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {workshops.slice(0, 4).map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <WorkshopCard {...workshop} />
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* AI Speakers Section - Hidden */}
      {/* <section className="mx-auto w-[min(1400px,95%)] space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h2 className="mt-2 text-4xl md:text-5xl font-black">
              Konuşmacılar
            </h2>
            <p className="mt-4 text-lg text-codeweek-purple-300">
              Sektörün önde gelen AI uzmanları ve etik düşünürler
            </p>
          </div>
          <Button variant="outline" className="border-codeweek-purple-500 text-codeweek-purple-300 hover:bg-codeweek-purple-500/10" asChild>
            <Link href="/speakers">Tüm Konuşmacılar</Link>
          </Button>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-4">
          {speakers.slice(0, 8).map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <SpeakerCard {...speaker} />
            </motion.div>
          ))}
        </div>
      </section> */}

    </div>
  );
}
