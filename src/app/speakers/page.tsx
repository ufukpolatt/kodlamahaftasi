"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { speakers } from "@/data/mockData";
import { SpeakerCard } from "@/components/cards/speaker-card";

export default function SpeakersPage() {
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
            <Brain className="w-5 h-5 text-codeweek-purple-400" />
            <span className="text-sm font-bold uppercase tracking-widest text-codeweek-purple-300">
              Konuşmacılar
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="gradient-text">Konuşmacılar</span>
          </h1>
          
          <p className="text-xl text-codeweek-purple-200 max-w-3xl mx-auto leading-relaxed">
            8-12 Aralık tarihleri arasında Eyüboğlu Eğitim Kurumları'nda ağırlayacak 
            global ve yerel  uzmanlarıyla tanışın, bilgi ve deneyim paylaşın.
          </p>
        </motion.div>
      </section>

      {/* Speakers Grid */}
      <section className="mx-auto w-[min(1400px,95%)] space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <SpeakerCard
                name={speaker.name}
                role={speaker.role}
                topic={speaker.topic}
                image={speaker.image}
                bio={speaker.bio}
                experience={speaker.experience}
                achievements={speaker.achievements}
                session={speaker.session}
                sessionTime={speaker.sessionTime}
                sessionLocation={speaker.sessionLocation}
              />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
