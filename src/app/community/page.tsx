"use client";

import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
          <h2 className="text-3xl font-bold gradient-text mb-4">Aile Etkinlikleri</h2>
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
                <h3 className="text-2xl font-bold gradient-text">4. Sınıflar İçin Yüz Yüze Aile Etkinliği</h3>
              </div>
              
              <p className="text-base text-codeweek-purple-200 leading-relaxed mb-6">
                Eyüboğlu Okulları olarak Aralık ayında tüm kampüslerimizde eğlenceli ve öğretici kodlama etkinlikleri düzenliyoruz! <br /> <br />
                8–12 Aralık tarihleri arasında Burçak Eyüboğlu, Çamlıca Eyüboğlu, Kemerburgaz Eyüboğlu ve Doğu Ataşehir Eyüboğlu kampüslerimizde gerçekleşecek bu özel aile - öğrenci atölye buluşmalarımızda; velilerimiz ve öğrencilerimiz birlikte kodlamanın keyfini yaşayacak, algoritma mantığını oyunlarla keşfedecek ve yapay zekâyı basit deneyimler ile tanıyacaklardır. <br /> <br />
                Hep birlikte öğrenmeyi güçlendireceğimiz bu etkinliklerde, hem eğlenecek hem de geleceğin teknolojilerine adım atacağız. Sizi de bu keyifli yolculuğa davet ediyoruz! <br /> <br />
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 rounded-full"></div>
                  <span className="text-sm text-codeweek-purple-200">Kodlamayı eğlenceli bir şekilde deneyimleyeceğiz.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 rounded-full"></div>
                  <span className="text-sm text-codeweek-purple-200">Aile katılımı ile öğrenmeyi güçlendireceğiz.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 rounded-full"></div>
                  <span className="text-sm text-codeweek-purple-200">Algoritma, yapay zekâ ve blok kodlama etkinliklerini keşfedeceğiz.</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Etkinliklerimiz:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 rounded-full"></div>
                    <span className="text-sm text-codeweek-purple-200">Hanoi Kuleleri – Algoritma ve Problem Çözme</span>
                  </div>
                  <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 rounded-full"></div>
                    <span className="text-sm text-codeweek-purple-200">Teachable Machine – Makine Öğrenmesi Deneyi</span>
                  </div>
                  <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 rounded-full"></div>
                    <span className="text-sm text-codeweek-purple-200">Code.org Dans Partisi – Blok Kodlama Eğlencesi</span>
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
                Kodlama Haftası'na Hoş Geldiniz! <br /> 
      
                Ailelerin çocuklarıyla birlikte hem eğlenip hem de öğrenebileceği özel bir içerik hazırladık. Kodlama Haftası boyunca, teknolojiyi keşfetmeyi keyifli ve ulaşılabilir hâle getiren birbirinden eğlenceli etkinliklerle sizleri buluşturuyoruz. <br /> <br />
                
                Bu hafta boyunca her gün, çocukların dijital dünyayı daha iyi anlamasına yardımcı olacak farklı bir etkinlik önerisi sunuyoruz. Etkinlikler; problem çözme, yaratıcılık, mantıksal düşünme ve iş birliği gibi önemli becerileri destekleyecek şekilde tasarlanmıştır. Aynı zamanda ailelerin öğrenme yolculuğuna aktif olarak katılması, çocukların motivasyonunu güçlendirmeyi ve birlikte kaliteli zaman geçirmeyi amaçlamaktadır. <br /> <br />
                
                Çocuklarınızla birlikte kod yazarken, dijital araçları keşfederken ve mini projeler oluştururken hem eğlenecek hem de yeni deneyimler edineceksiniz. Bu süreçte yalnızca teknolojiyi değil, birlikte üretmenin verdiği mutluluğu da keşfedeceksiniz. <br /> <br />
                
                Tüm etkinliklerimiz Classroom üzerinden paylaşılmıştır. Aile katılımını teşvik eden bu içeriklere dilediğiniz zaman ulaşabilir, etkinlikleri evinizde kolaylıkla uygulayabilirsiniz. <br /> <br />
                
                Hazırsanız, teknoloji ve yaratıcılıkla dolu bu özel haftaya birlikte adım atalım!
              </p>
              
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-codeweek-pink-400">
                  Evde Yapılabilecek Etkinlikler
                </h4>
                
                <Accordion type="multiple" className="w-full space-y-3">
                  {/* Anaokulu Section */}
                  <AccordionItem value="anaokulu" className="border-codeweek-purple-500/30">
                    <AccordionTrigger className="text-codeweek-purple-200 hover:text-white">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center text-sm font-bold">A</span>
                        <span>Anaokulu</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <a href="https://docs.google.com/presentation/d/192ph4Tdi6tfKHAUp9pThwN35MF8F7-F6/edit?slide=id.p1#slide=id.p1" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🏠
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">DEENO'YU EVİNE ULAŞTIRIN!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Deeno'nun evine heyecan verici bir yolculuk için hazır mısınız? Ailecek bir araya gelip evin yolunu kodlayarak belirleyin. Engelleri aşarken eğlenmek için birbirinize yardımcı olun!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://game.rodocodo.com/hour-of-code/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🐒
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">RODOCODO İLE KODLAMAYA YOLCULUK!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Rodocodo'nun muhteşem ''KodSaati'' oyunuyla birlikte, ailenizle bir araya gelip birlikte kodlama dünyasına adım atın. Beraber öğrenmek ve eğlenmek için harika bir fırsat!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://www.youtube.com/watch?v=JoKTqHCni0M" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                💃
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">DANS EDEREK DÖNGÜLERİ ÖĞRENİN!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Ailenle birlikte, basit dans hareketlerini tekrar ederek programlamadaki döngü kavramını keşfedebilirsin!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://app.codemonkey.com/junior/chapters/sequencing/challenges/1" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🐵
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">CODE MONKEY JR İLE EĞLENCELİ KODLAMA SERÜVENİ!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Code Monkey ile hem öğrenip hem eğlenerek, evinizde keyifli bir kodlama macerasına başlayabilirsiniz!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://videos.code.org/csf/my-robotic-friends-activity.mp4" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🤖
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">ROBOT ARKADAŞIM!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Bu bağlantısız etkinliği ailecek oynayabilir, "robot" olarak görev alarak bardakları farklı desenlerde dizme talimatları verip, algoritmanın gücünü deneyimleyebilirsiniz.
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* 1. Sınıf Section */}
                  <AccordionItem value="sinif-1" className="border-codeweek-purple-500/30">
                    <AccordionTrigger className="text-codeweek-purple-200 hover:text-white">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center text-sm font-bold">1</span>
                        <span>1. Sınıf</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <a href="https://drive.google.com/drive/u/5/folders/1N5pOlE20U6P4IMYgj_ifLjvuyY3_o_qS" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🐟
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">BALIĞIN MACERA YOLU!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Balığımızın yavrularına kavuşması için yön kartlarını kullanarak yolu kodlayın! Engelleri birlikte aşın, ailece eğlenceli bir keşif yolculuğuna çıkın!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://codejr.org/scratchjr/index.html" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🐱
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">SCRATCH JR İLE MİNİ KODLAMA MACERASI</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Renkli blokları birleştirerek kendi hikâyeni canlandırmaya hazır mısın? ScratchJr ile karakterlere hareket ver, ses ekle, sahneleri değiştir ve hayal gücünü kod satırlarına dönüştür!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://studio.code.org/courses/courseb-2025/units/1/lessons/3/levels/1" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                💻
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">CODE.ORG İLE KODLA, KEŞFET, EĞLEN</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Blokları birleştir, karakterleri hareket ettir, oyun ve hikâyeni kendin yarat! Code.org ile eğlenceli ve kolay bir şekilde kodlama dünyasına adım at!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://lightbot.lu" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🤖
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">LIGHT BOT İLE ÖĞRENMEYE BAŞLA</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Robotu doğru yola yönlendir, blokları birleştir ve mini görevleri tamamla! Lightbot ile eğlenceli bir şekilde kodlama mantığını öğren.
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://www.kodable.com" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🎮
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">KODABLE İLE OYNA VE ÖĞREN</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Labirentleri çöz, karakterleri yönlendir ve kendi mini oyunlarını yarat! Kodable ile blokları birleştirerek eğlenceli ve kolay bir şekilde kodlama dünyasına adım at.
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* 2. Sınıf Section */}
                  <AccordionItem value="sinif-2" className="border-codeweek-purple-500/30">
                    <AccordionTrigger className="text-codeweek-purple-200 hover:text-white">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center text-sm font-bold">2</span>
                        <span>2. Sınıf</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <a href="https://code.org/curriculum/course2/14/Activity14-BinaryBracelets.pdf" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                📿
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">BINARY BILEZİK TASARLAYIN!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Binary bileziklerle, harf ve sayıları sıfırlar(0) ve birler (1) le temsil ederek, kendi özel bileziklerinizi yaratabilirsiniz. Bu eğlenceli etkinlikte ailenizle bir araya gelerek kodlamayı keşfedin ve birlikte unutulmaz anılar biriktirin!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://studio.code.org/courses/oceans/units/1/lessons/1/levels/1" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🌊
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">YAPAY ZEKA İLE OKYANUSLARI KORUYUN!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Okyanuslar İç n Yapay Zeka ders , kodlama becerileriniz geliştirirken etik sorunlara ve dünya sorunlarına nasıl çöüm getirebileceğinizi keşfetmeniz için muhteşem bir fırsat Sunuyor!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://www.youtube.com/watch?v=JoKTqHCni0M&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                💃
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">DANS EDEREK DÖNGÜLERİ ÖĞRENİN!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Ailenle birlikte, basit dans hareketlerini tekrar ederek programlamadaki döngü kavramını keşfedebilirsin!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://app.codemonkey.com/challenges/0" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🐵
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">CODE MONKEY İLE EĞLENCELİ KODLAMA SERÜVENİ!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  CodeMonkey ile hem öğrenip hem eğlenerek, evinizde keyifli bir kodlama macerasına başlayabilirsiniz!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://www.hedy.org/hedy#print_command" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🚀
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">HEDY İLE KODLAMA</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Hadi, gerçek bir kod sihirbazı gibi eğlenceli kodlar yazmaya başla! 🚀 💻 Ailenle beraber programcı gibi satır kodları yazabilirsiniz!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* 3. Sınıf Section */}
                  <AccordionItem value="sinif-3" className="border-codeweek-purple-500/30">
                    <AccordionTrigger className="text-codeweek-purple-200 hover:text-white">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center text-sm font-bold">3</span>
                        <span>3. Sınıf</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <a href="https://runmarco.com" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🏃‍♂️
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">RUN MARCO- MARCO İLE MACERA BAŞLASIN!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Ailenle birlikte Marco'yu yönlendirerek basit komutlarla programlamayı keşfet! Eğlenerek öğren, adım adım kodlama dünyasına koş!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://studio.code.org/courses/dance-2019/units/1/lessons/1/levels/1" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🕺
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">DANCE PARTY-KODLA, DANS ET, ŞEKİLLENDİR!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Kod bloklarını sürükle‐bırak yaparak kendi dans partisinin koreografisini oluştur! Müzik aç, karakteri sahneye çıkar ve kodla dans ettir hem eğlen hem de kodlama temellerini keşfet!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://www.codeforlife.education/rapidrouter/" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🚚
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">CODE FOR LIFE- ADIM ADIM KODLAMA</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Ailenle birlikte basit dans adımlarını tekrar ederek, programlamadaki döngüleri keşfet!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://blockly.games" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🧩
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">BLOKLARI BİRLEŞTİR, KODUNU YARAT</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Sürükle-bırak bloklarla kendi oyunlarını ailenle birlikte oluştur!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://little-dot.toxicode.fr" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="bg-gradient-to-br from-codeweek-purple-500/10 to-codeweek-pink-500/10 border border-codeweek-purple-500/20 rounded-xl p-4 hover:border-codeweek-purple-500/40 hover:from-codeweek-purple-500/20 hover:to-codeweek-pink-500/20 transition-all duration-300 group">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                🎯
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-2 group-hover:gradient-text transition-colors">KARTINI SEÇ, YOLUNU KODLA!</h4>
                                <p className="text-sm text-codeweek-purple-200 leading-relaxed">
                                  Her seviyede kartlardan doğru kodları seç, beyaz noktayı turuncu kareye ulaştır. Algoritma, döngü ve şartları keşfederek adım adım ilerle!
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
            <h2 className="text-3xl font-bold gradient-text mb-4">4. Sınıf Yüz Yüze Veli Etkinliği Takvimi</h2>
            <p className="text-lg text-codeweek-purple-200 max-w-2xl mx-auto">
              Hafta boyunca devam edecek veli katılım etkinlikleri
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                day: "ÇAMLICA EYÜBOĞLU",
                title: "Salı",
                date: "10.12.2025",
                time: "16:15 - 17:15",
                description: ["Hanoi Kuleleri – Algoritma ve Problem Çözme", "Teachable Machine – Makine Öğrenmesi Deneyi", "Code.org Dans Partisi – Blok Kodlama Eğlencesi"]
              },
              {
                day: "ÇAMLICA EYÜBOĞLU",
                title: "Çarşamba",
                date: "11.12.2025",
                time: "16:15 - 17:15",
                description: ["Hanoi Kuleleri – Algoritma ve Problem Çözme", "Teachable Machine – Makine Öğrenmesi Deneyi", "Code.org Dans Partisi – Blok Kodlama Eğlencesi"]
              },
              {
                day: "BURÇAK EYÜBOĞLU",
                title: "Pazar",
                date: "08.12.2025",
                time: "16:15 - 17:15",
                description: ["Hanoi Kuleleri – Algoritma ve Problem Çözme", "Teachable Machine – Makine Öğrenmesi Deneyi", "Code.org Dans Partisi – Blok Kodlama Eğlencesi"]
              },
              {
                day: "BURÇAK EYÜBOĞLU",
                title: "Salı",
                date: "10.12.2025",
                time: "16:15 - 17:15",
                description: ["Hanoi Kuleleri – Algoritma ve Problem Çözme", "Teachable Machine – Makine Öğrenmesi Deneyi", "Code.org Dans Partisi – Blok Kodlama Eğlencesi"]
              },
              {
                day: "KEMERBURGAZ EYÜBOĞLU",
                title: "Salı",
                date: "10.12.2025",
                time: "16:15 - 17:15",
                description: ["Hanoi Kuleleri – Algoritma ve Problem Çözme", "Teachable Machine – Makine Öğrenmesi Deneyi", "Code.org Dans Partisi – Blok Kodlama Eğlencesi"]
              },
              {
                day: "KEMERBURGAZ EYÜBOĞLU",
                title: "Çarşamba",
                date: "11.12.2025",
                time: "16:15 - 17:15",
                description: ["Hanoi Kuleleri – Algoritma ve Problem Çözme", "Teachable Machine – Makine Öğrenmesi Deneyi", "Code.org Dans Partisi – Blok Kodlama Eğlencesi"]
              },
              {
                day: "DOĞU ATAŞEHİR EYÜBOĞLU",
                title: "Pazartesi",
                date: "09.12.2025",
                time: "16:15 - 17:15",
                description: ["Hanoi Kuleleri – Algoritma ve Problem Çözme", "Teachable Machine – Makine Öğrenmesi Deneyi", "Code.org Dans Partisi – Blok Kodlama Eğlencesi"]
              },
              {
                day: "DOĞU ATAŞEHİR EYÜBOĞLU",
                title: "Çarşamba",
                date: "11.12.2025",
                time: "16:15 - 17:15",
                description: ["Hanoi Kuleleri – Algoritma ve Problem Çözme", "Teachable Machine – Makine Öğrenmesi Deneyi", "Code.org Dans Partisi – Blok Kodlama Eğlencesi"]
              }
            ].map((event, index) => (
              <motion.div
                key={`${event.day}-${event.title}`}
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
                  
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:gradient-text transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-xs text-codeweek-pink-400 mb-3">
                    {event.date}
                  </p>
                  
                  <div className="space-y-2">
                    {event.description.map((activity, idx) => (
                      <p key={idx} className="text-sm text-codeweek-purple-200 leading-relaxed flex items-start gap-2">
                        <span className="w-2 h-2 bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        {activity}
                      </p>
                    ))}
                  </div>
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
