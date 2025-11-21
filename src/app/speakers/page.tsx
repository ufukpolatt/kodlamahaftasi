"use client";

import { motion } from "framer-motion";
import { Brain, Users, Calendar, Award, MapPin, Sparkles } from "lucide-react";
import { speakers } from "@/data/mockData";
import { Button } from "@/components/ui/button";
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
            global ve yerel AI uzmanlarıyla tanışın, bilgi ve deneyim paylaşın.
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold gradient-text">AI Konuşmacıları</h2>
          </div>
          <p className="text-lg text-codeweek-purple-200 max-w-2xl mx-auto">
            Machine learning'den AI ethics'e farklı alanlarda önde gelen isimler
          </p>
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

      {/* Featured Sessions */}
      <section className="mx-auto w-[min(1400px,95%)] mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ai-card rounded-3xl p-12 neural-bg relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">
              Özel Oturumlar
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Keynote Konuşmaları</h3>
                    <p className="text-sm text-codeweek-purple-300">Ana sahne • Her gün 10:00-11:00</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">AI Panel Oturumları</h3>
                    <p className="text-sm text-codeweek-purple-300">Forum salonu • Gün boyu</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Mentor Office Hours</h3>
                    <p className="text-sm text-codeweek-purple-300">Atölye alanları • 14:00-17:00</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">AI Demo Sessions</h3>
                    <p className="text-sm text-codeweek-purple-300">Showcase alanı • 17:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-light"></div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-[min(1400px,95%)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ai-card rounded-3xl p-12 text-center neural-bg relative overflow-hidden"
        >
          <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-codeweek-pink-400" />
              <h2 className="text-4xl font-bold gradient-text">
                AI Liderleriyle Tanışın
              </h2>
            </div>
            
            <p className="text-xl text-codeweek-purple-200 max-w-2xl mx-auto leading-relaxed">
              Yapay zeka alanındaki önde gelen isimlerle networking yapın, 
              kariyer fırsatları yakalayın ve AI geleceğini şekillendirin.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-gradient-to-r from-codeweek-purple-600 to-codeweek-pink-600 hover:from-codeweek-purple-700 hover:to-codeweek-pink-700 text-white border-0">
                Konuşmacı Programı
              </Button>
              <Button variant="outline" size="lg" className="border-codeweek-purple-500 text-codeweek-purple-300 hover:bg-codeweek-purple-500/10">
                Birebir Görüşme
              </Button>
            </div>
          </div>
          
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-light"></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
