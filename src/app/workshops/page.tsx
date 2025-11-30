"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Target, Baby } from "lucide-react";
import { workshops } from "@/data/mockData";
import { WorkshopCard } from "@/components/cards/workshop-card";

export default function WorkshopsPage() {
  const preschoolWorkshops = workshops.filter((w) => w.level === "Anaokulu");
  const primarySchoolWorkshops = workshops.filter((w) => w.level === "İlkokul");
  const middleSchoolWorkshops = workshops.filter((w) => w.level === "Ortaokul");
  const highSchoolWorkshops = workshops.filter((w) => w.level === "Lise");

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
          
 
          
        </motion.div>
      </section>

      {/* Workshop Categories */}
      <section className="mx-auto w-[min(1400px,95%)] space-y-16">
        {/* Preschool Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
              <Baby className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold gradient-text">Anaokulu Atölyeleri</h2>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {preschoolWorkshops.map((workshop, index) => (
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

        {/* Beginner Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold gradient-text">İlkokul Atölyeleri</h2>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {primarySchoolWorkshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
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
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold gradient-text">Ortaokul Atölyeleri</h2>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {middleSchoolWorkshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
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
          transition={{ delay: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold gradient-text">Lise Atölyeleri</h2>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {highSchoolWorkshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <WorkshopCard {...workshop} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
