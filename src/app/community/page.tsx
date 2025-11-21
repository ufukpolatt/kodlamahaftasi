"use client";

import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CommunityPage() {
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
            <Heart className="w-5 h-5 text-codeweek-purple-400" />
            <span className="text-sm font-bold uppercase tracking-widest text-codeweek-purple-300">
              Veli Katılımı
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="gradient-text">Aile</span>
            <br />
            <span className="text-white">İçin Teknoloji</span>
          </h1>
          
          <p className="text-xl text-codeweek-purple-200 max-w-3xl mx-auto leading-relaxed">
            Velilerimiz için özel tasarlanmış etkinliklerle, çocuklarımızın teknoloji dünyasına 
            adım atarken onlara destek olabilecek bilgi ve becerileri kazanın.
          </p>
        </motion.div>
      </section>

      {/* 4th Grade Family Activities Section */}
      <section className="mx-auto w-[min(1400px,95%)] mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">4. Sınıflar İçin Aile Etkinlikleri</h2>
          <p className="text-lg text-codeweek-purple-200 max-w-2xl mx-auto">
            Çocuklarınızla birlikte teknolojiyi keşfedin, öğrenin ve eğlenin
          </p>
        </motion.div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Face-to-Face Activities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="ai-card rounded-3xl p-8 neural-bg relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Yüz Yüze Aile Etkinliği</h3>
              </div>
              
              <p className="text-base text-codeweek-purple-200 leading-relaxed mb-6">
                Okulumuzda düzenlenecek olan interaktif aile etkinliğinde, çocuklarınızla birlikte
                teknoloji projeleri geliştirecek, kodlama temellerini öğrenecek ve eğlenceli
                problem çözme aktivitelerine katılacaksınız.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 rounded-full"></div>
                  <span className="text-sm text-codeweek-purple-200">Robotik ve kodlama atölyesi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 rounded-full"></div>
                  <span className="text-sm text-codeweek-purple-200">Ailecek problem çözme oyunları</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 rounded-full"></div>
                  <span className="text-sm text-codeweek-purple-200">Yaratıcı teknoloji projeleri</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-codeweek-purple-400" />
                  <span className="text-sm font-medium text-codeweek-purple-300">Cumartesi, 10:00 - 14:00</span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-codeweek-purple-600 to-codeweek-pink-600 hover:from-codeweek-purple-700 hover:to-codeweek-pink-700 text-white border-0">
                Yüz Yüze Etkinliğe Kaydol
              </Button>
            </div>
            
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-grid-light"></div>
            </div>
          </motion.div>
          
          {/* Asynchronous Activities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="ai-card rounded-3xl p-8 neural-bg relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Asenkron Aile Etkinliği</h3>
              </div>
              
              <p className="text-base text-codeweek-purple-200 leading-relaxed mb-6">
                Evde kendi hızınızda tamamlayabileceğiniz teknoloji etkinlikleri ile
                çocuklarınızın dijital yetkinliklerini geliştirin. Bu etkinlikler
                herhangi bir zamanda yapabilirsiniz.
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-codeweek-pink-400 mb-3">
                  Evde Yapılabilecek Etkinlikler
                </h4>
                <Button variant="outline" className="w-full justify-start border-codeweek-purple-500/30 text-codeweek-purple-200 hover:bg-codeweek-purple-500/10">
                  <span className="mr-2">🎮</span> Kodlama Oyunları
                </Button>
                <Button variant="outline" className="w-full justify-start border-codeweek-purple-500/30 text-codeweek-purple-200 hover:bg-codeweek-purple-500/10">
                  <span className="mr-2">🤖</span> Basit Robot Projesi
                </Button>
                <Button variant="outline" className="w-full justify-start border-codeweek-purple-500/30 text-codeweek-purple-200 hover:bg-codeweek-purple-500/10">
                  <span className="mr-2">🎨</span> Dijital Sanat Atölyesi
                </Button>
                <Button variant="outline" className="w-full justify-start border-codeweek-purple-500/30 text-codeweek-purple-200 hover:bg-codeweek-purple-500/10">
                  <span className="mr-2">🔍</span> Problem Çözme Aktiviteleri
                </Button>
              </div>
              
              <p className="text-xs text-codeweek-purple-300 italic">
                Etkinlik linkleri yakında eklenecektir
              </p>
            </div>
            
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-grid-light"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="mx-auto w-[min(1400px,95%)] mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold gradient-text mb-4">Veli Program Takvimi</h2>
            <p className="text-lg text-codeweek-purple-200 max-w-2xl mx-auto">
              Hafta boyunca devam edecek veli katılım etkinlikleri
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                day: "Pazartesi",
                title: "Teknolojiye Giriş",
                time: "14:00 - 16:00",
                description: "Veliler için temel teknoloji kavramları ve güvenlik önlemleri"
              },
              {
                day: "Salı",
                title: "AI ve Eğitim",
                time: "15:00 - 17:00",
                description: "Yapay zekanın eğitimdeki rolü ve veliler için rehberlik"
              },
              {
                day: "Çarşamba",
                title: "Dijital Vatandaşlık",
                time: "14:00 - 16:00",
                description: "Çocuklarınızın dijital dünyada güvenli gezinmesi için ipuçları"
              },
              {
                day: "Perşembe",
                title: "Kodlama Atölyesi",
                time: "15:00 - 17:00",
                description: "Çocuklarınızla birlikte katılabileceğiniz pratik kodlama seansı"
              },
              {
                day: "Cuma",
                title: "Gelecek Teknolojiler",
                time: "14:00 - 16:00",
                description: "Eğitimde gelecek trendler ve velilerin rolü"
              },
              {
                day: "Cumartesi",
                title: "Aile Hackathon'u",
                time: "10:00 - 16:00",
                description: "Ailecek birlikte teknoloji projeleri geliştirme yarışması"
              }
            ].map((event, index) => (
              <motion.div
                key={event.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="ai-card group rounded-2xl p-6 relative overflow-hidden cursor-pointer"
              >
                {/* Data Stream Effect */}
                <div className="absolute inset-0 data-stream opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-codeweek-purple-400">
                      {event.day}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-codeweek-pink-400" />
                      <span className="text-xs text-codeweek-pink-400">{event.time}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-codeweek-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
