"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function MentorsPage() {
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
            <GraduationCap className="w-5 h-5 text-codeweek-purple-400" />
            <span className="text-sm font-bold uppercase tracking-widest text-codeweek-purple-300">
              Lise Gönüllüleri
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="gradient-text">Öğrenci</span>
            <br />
            <span className="text-white">Mentörleri</span>
          </h1>
          
          <p className="text-xl text-codeweek-purple-200 max-w-3xl mx-auto leading-relaxed">
            Kodlama Haftası boyunca anaokulu atölyelerinde, lise düzeyindeki 11.Sınıf DP Öğrencileri 
            ile FRC Kulübünden öğrencilerimiz gönüllü olarak görev alacak ve anaokulu 4 ve 5 yaştaki öğrencilerimize rehberlik edeceklerdir.
          </p>
        </motion.div>
      </section>

      {/* Gönüllü Öğrenci Listesi */}
      <section className="mx-auto w-[min(1400px,95%)] mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">Gönüllü Öğrencilerimiz</h2>
          <p className="text-lg text-codeweek-purple-200 max-w-2xl mx-auto">
            Kodlama Haftası'nda anaokulu öğrencilerimize rehberlik edecek lise öğrencilerimiz
          </p>
        </motion.div>
        
        <div className="ai-card rounded-3xl p-8 neural-bg relative overflow-hidden">
          <div className="relative z-10">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "CAN BÜYÜKUĞUR", class: "11 FI" },
                { name: "KAAN AYIRTMAN", class: "11 FI" },
                { name: "BORATUN ÇERDOĞU", class: "11 FI" },
                { name: "EGE ŞİMŞEK", class: "11 FI" },
                { name: "ZEYNEP MİNE DEMİRCİ", class: "11 FI" },
                { name: "ASYA TAKATAŞ", class: "11 FI" },
                { name: "ELİF DİLA BÜYÜKATLI", class: "11 MI" },
                { name: "KAAN RÜZGAR ÖDÜL", class: "11 MI" },
                { name: "ELVİN GÖÇ", class: "11 MJ" },
                { name: "ZEYNEP HAFSA YILDIZ", class: "11 MJ" },
                { name: "CANSU CAN", class: "11 MJ" },
                { name: "İDA DERİNDEMİRTAŞ", class: "10 AF" },
                { name: "MELİS GÜNEŞ", class: "10 AF" },
                { name: "ALYA SUTEZCAN", class: "10 AF" },
                { name: "KUZEY BAYDEMİR", class: "10 AF" },
                { name: "ALİ BURAK BERBER", class: "10 BF" },
                { name: "ATEŞ EREN KARADAĞ", class: "10 BF" },
                { name: "ALİ KAAN GÜMRÜKÇÜ", class: "10 BF" },
                { name: "ONUR ATEŞ ÜNVERDİ", class: "10 BF" },
                { name: "ASYA SEYHAN", class: "10 BF" },
                { name: "AYŞE ECE MALÇOK", class: "10 BF" }
              ].map((student, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-white font-semibold">{student.name}</h3>
                    <p className="text-sm text-codeweek-purple-300">{student.class}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-r from-codeweek-purple-600/20 to-codeweek-pink-600/20 border border-codeweek-purple-400/40 rounded-2xl shadow-glow">
              <div className="text-center mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-codeweek-purple-500/30 to-codeweek-pink-500/30 border border-codeweek-purple-400/50 px-4 py-2">
                  <span className="text-sm font-bold uppercase tracking-wider text-codeweek-pink-300">
                    Teşekkürler
                  </span>
                </span>
              </div>
              <p className="text-lg text-white leading-relaxed text-center font-medium">
                Bu atölyeler sayesinde öğrencilerimizin bilgi ve becerilerini anaokulu öğrencilerimizle paylaşırken; aynı zamanda
                organizasyon, liderlik, sorumluluk alma, toplumsal bilinç geliştirme ve iş birliği içinde çalışma gibi alanlarda da
                kendilerini geliştireceklerine inanıyor ve hepsine teşekkür ediyoruz.
              </p>
            </div>
          </div>
          
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-light"></div>
          </div>
        </div>
      </section>
    </div>
  );
}