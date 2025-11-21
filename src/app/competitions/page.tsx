"use client";

import { motion } from "framer-motion";
import { Trophy, Zap, Target, Users, Calendar, Award } from "lucide-react";
import { competitions, hackathon } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { CompetitionCard } from "@/components/cards/competition-card";

export default function CompetitionsPage() {
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
            <Trophy className="w-5 h-5 text-codeweek-purple-400" />
            <span className="text-sm font-bold uppercase tracking-widest text-codeweek-purple-300">
              Yarışmalar & Maratonlar
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="gradient-text">Yarışmalar & Maratonlar</span>
          </h1>
          
          <p className="text-xl text-codeweek-purple-200 max-w-3xl mx-auto leading-relaxed">
            Yarışma ve maratonlarda katılım sağlayarak, inovasyonun sınırlarını zorlayın ve
            toplumsal fayda sağlayan projeler geliştirin.
          </p>
        </motion.div>
      </section>

      {/* Hackathon Section */}
      <section className="mx-auto w-[min(1400px,95%)] mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ai-card rounded-3xl p-12 neural-bg relative overflow-hidden"
        >
          <div className="relative z-10 grid gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">{hackathon.title}</h2>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-codeweek-purple-400" />
                  <span className="text-sm font-medium text-codeweek-purple-300">{hackathon.duration}</span>
                </div>
              </div>
              
              <p className="text-lg text-codeweek-purple-200 mb-8 leading-relaxed">
                {hackathon.focus}
              </p>
              
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-codeweek-pink-400 mb-4">
                  Hackathon Avantajları
                </h3>
                {hackathon.perks.map((perk, index) => (
                  <div key={perk} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 rounded-full"></div>
                    <span className="text-sm text-codeweek-purple-200">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-64 h-64 rounded-full bg-gradient-to-br from-codeweek-purple-600/20 to-codeweek-pink-600/20 flex items-center justify-center border border-codeweek-purple-500/30"
              >
                <Trophy className="w-24 h-24 text-codeweek-purple-400" />
              </motion.div>
            </div>
          </div>
          
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-light"></div>
          </div>
        </motion.div>
      </section>

      {/* Competitions Grid */}
      <section className="mx-auto w-[min(1400px,95%)] space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-6 h-6 text-codeweek-pink-400" />
            <h2 className="text-3xl font-bold gradient-text">AI Yarışma Kategorileri</h2>
          </div>
          <p className="text-lg text-codeweek-purple-200 max-w-2xl mx-auto">
            Farklı AI alanlarında uzmanlaşarak, inovasyonun farklı boyutlarını keşfedin
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CompetitionCard {...competition} />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
