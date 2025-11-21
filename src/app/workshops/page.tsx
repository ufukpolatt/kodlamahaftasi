"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Users, Calendar, Sparkles, Target } from "lucide-react";
import { workshops } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { WorkshopCard } from "@/components/cards/workshop-card";

export default function WorkshopsPage() {
  const beginnerWorkshops = workshops.filter((w) => w.level === "Başlangıç");
  const intermediateWorkshops = workshops.filter((w) => w.level === "Orta");
  const advancedWorkshops = workshops.filter((w) => w.level === "İleri");

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
              Atölyeler
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="gradient-text">Atölyeler</span>
          </h1>
          
          <p className="text-xl text-codeweek-purple-200 max-w-3xl mx-auto leading-relaxed">
            8-12 Aralık tarihleri arasında hands-on AI deneyimleri. Machine learning'den 
            generative AI'ye farklı seviyelerde pratik yapma fırsatı.
          </p>
        </motion.div>
      </section>

      {/* Workshop Categories */}
      <section className="mx-auto w-[min(1400px,95%)] space-y-16">
        {/* Beginner Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold gradient-text">Başlangıç Seviyesi</h2>
              <p className="text-lg text-codeweek-purple-200">AI'ye ilk adım</p>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {beginnerWorkshops.map((workshop, index) => (
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
        </motion.div>

        {/* Intermediate Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold gradient-text">Orta Seviye</h2>
              <p className="text-lg text-codeweek-purple-200">Pratik AI uygulamaları</p>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {intermediateWorkshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <WorkshopCard {...workshop} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advanced Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold gradient-text">İleri Seviye</h2>
              <p className="text-lg text-codeweek-purple-200">Derin AI ve uzmanlık</p>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {advancedWorkshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <WorkshopCard {...workshop} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto w-[min(1400px,95%)] mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ai-card rounded-3xl p-12 neural-bg relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">
              AI Atölye İstatistikleri
            </h2>
            
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-black gradient-text">{workshops.length}</p>
                <p className="text-sm text-codeweek-purple-300">Toplam Atölye</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-black gradient-text">500+</p>
                <p className="text-sm text-codeweek-purple-300">Katılımcı Kapasitesi</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-black gradient-text">5 Gün</p>
                <p className="text-sm text-codeweek-purple-300">Eğitim Süresi</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-black gradient-text">100%</p>
                <p className="text-sm text-codeweek-purple-300">Hands-on</p>
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
            <h2 className="text-4xl font-bold gradient-text">
              AI Atölyelerine Kaydolun
            </h2>
            
            <p className="text-xl text-codeweek-purple-200 max-w-2xl mx-auto leading-relaxed">
              Sınırlı kontenjanlı AI atölyelerimize erken kaydolun, yerinizi garanti edin. 
              Hands-on deneyimlerle yapay zeka becerilerinizi geliştirin.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-gradient-to-r from-codeweek-purple-600 to-codeweek-pink-600 hover:from-codeweek-purple-700 hover:to-codeweek-pink-700 text-white border-0">
                Şimdi Kaydol
              </Button>
              <Button variant="outline" size="lg" className="border-codeweek-purple-500 text-codeweek-purple-300 hover:bg-codeweek-purple-500/10">
                Atölye Programı
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
