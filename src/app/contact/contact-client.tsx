"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

import { siteConfig } from "@/lib/siteConfig";
import { faqs } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/faq-accordion";

export function ContactClient() {
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
            <MessageCircle className="w-5 h-5 text-codeweek-purple-400" />
            <span className="text-sm font-bold uppercase tracking-widest text-codeweek-purple-300">
              İletişim
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="gradient-text">Bize</span>
            <br />
            <span className="text-white">Ulaşın</span>
          </h1>
          
          <p className="text-xl text-codeweek-purple-200 max-w-3xl mx-auto leading-relaxed">
            Sorularınız, önerileriniz veya iş birliği teklifleriniz için bizimle iletişime geçin. 
            AI ve teknoloji dünyasında birlikte yenilikler yaratalım.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto w-[min(1400px,95%)]">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="ai-card rounded-3xl p-8 neural-bg relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">İletişim Formu</h3>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-codeweek-purple-300">
                    Ad Soyad
                  </label>
                  <Input 
                    placeholder="Adınız ve soyadınız" 
                    className="bg-codeweek-muted/30 border-codeweek-purple-500/30 text-white placeholder:text-codeweek-purple-400/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-codeweek-purple-300">
                    E-posta Adresi
                  </label>
                  <Input 
                    type="email" 
                    placeholder="ornek@email.com" 
                    className="bg-codeweek-muted/30 border-codeweek-purple-500/30 text-white placeholder:text-codeweek-purple-400/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-codeweek-purple-300">
                    Konu
                  </label>
                  <Input 
                    placeholder="Mesajınızın konusu" 
                    className="bg-codeweek-muted/30 border-codeweek-purple-500/30 text-white placeholder:text-codeweek-purple-400/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-codeweek-purple-300">
                    Mesajınız
                  </label>
                  <Textarea
                    placeholder="Mesajınızı buraya yazın..."
                    className="min-h-[120px] bg-codeweek-muted/30 border-codeweek-purple-500/30 text-white placeholder:text-codeweek-purple-400/50"
                  />
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-codeweek-purple-600 to-codeweek-pink-600 hover:from-codeweek-purple-700 hover:to-codeweek-pink-700 text-white border-0" 
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Mesajı Gönder
                </Button>
              </form>
            </div>
            
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-grid-light"></div>
            </div>
          </motion.div>
          
          {/* Contact Info & FAQ */}
          <div className="space-y-6">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="ai-card rounded-3xl p-6 neural-bg relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">İletişim Bilgileri</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-codeweek-muted/20 border border-codeweek-purple-500/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-4 h-4 text-codeweek-purple-400" />
                      <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400">
                        E-posta
                      </p>
                    </div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="block text-sm text-codeweek-purple-200 hover:text-white transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-codeweek-muted/20 border border-codeweek-purple-500/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="w-4 h-4 text-codeweek-purple-400" />
                      <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400">
                        Telefon
                      </p>
                    </div>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="block text-sm text-codeweek-purple-200 hover:text-white transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Background Effects */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-grid-light"></div>
              </div>
            </motion.div>
            
            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="ai-card rounded-3xl p-6 neural-bg relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">Sıkça Sorulan Sorular</h3>
                </div>
                
                <FAQAccordion items={faqs} />
              </div>
              
              {/* Background Effects */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-grid-light"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}