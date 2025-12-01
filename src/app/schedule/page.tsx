"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { scheduleDays } from "@/data/mockData";
import { EventCard } from "@/components/cards/event-card";

export default function SchedulePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="mx-auto w-[min(1400px,95%)] mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-codeweek-purple-500/20 to-codeweek-pink-500/20 border border-codeweek-purple-500/30 px-6 py-3">
            <Calendar className="w-5 h-5 text-codeweek-purple-400" />
            <span className="text-sm font-bold uppercase tracking-widest text-codeweek-purple-300">
              5 Günlük Program
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="gradient-text">Etkinlik</span>
            <br />
            <span className="text-white">Takvimi</span>
          </h1>
          
          <p className="text-xl text-codeweek-purple-200 max-w-3xl mx-auto leading-relaxed">
            8-12 Aralık tarihleri arasında Eyüboğlu Eğitim Kurumları'nda gerçekleşecek
            tüm etkinliklerin detaylı programı. Her gün için farklı temalar ve odak alanları.
          </p>
        </motion.div>
      </section>

      {/* Schedule Days */}
      <section className="mx-auto w-[min(1400px,95%)] space-y-16">
        {scheduleDays.map((day, dayIndex) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: dayIndex * 0.1 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold gradient-text">Gün {dayIndex + 1}</h2>
                <p className="text-lg text-codeweek-purple-200">{day.day} • {day.date}</p>
              </div>
              <div className="ml-auto">
                <div className="ai-card rounded-full px-6 py-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-codeweek-purple-400" />
                  <span className="text-codeweek-purple-200 font-medium">{day.events.length} etkinlik</span>
                </div>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {day.events.map((event, eventIndex) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: dayIndex * 0.1 + eventIndex * 0.05 }}
                >
                  <EventCard
                    title={event.title}
                    time={event.time}
                    track={event.track}
                    speaker={event.speaker}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

    </div>
  );
}

