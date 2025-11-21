"use client";

import { motion } from "framer-motion";
import { Brain, Github, Twitter, Linkedin, Mail, Heart, Sparkles } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-codeweek-purple-500/20 bg-codeweek-dark/50 backdrop-blur-xl">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-light"></div>
      </div>

      <div className="relative z-10 mx-auto w-[min(1400px,95%)] flex flex-col gap-12 py-16">
        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <motion.img
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src="/logo.webp"
                alt="CodeWeek Logo"
                className="w-12 h-12 rounded-xl"
              />
            </div>
            <p className="text-sm text-codeweek-purple-300 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2 text-codeweek-pink-400">
              <Heart className="w-4 h-4" />
              <span className="text-xs font-medium">AI & Ethics Powered</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold gradient-text">Hızlı Linkler</h3>
            <nav className="space-y-2">
              {siteConfig.navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-codeweek-purple-300 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold gradient-text">İletişim</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-sm text-codeweek-purple-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 text-sm text-codeweek-purple-300 hover:text-white transition-colors"
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                {siteConfig.contact.phone}
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-codeweek-purple-500/20 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs text-codeweek-purple-400"
            >
              <span>© {new Date().getFullYear()} CodeWeek Topluluğu.</span>
              <span className="text-codeweek-pink-400">Tüm hakları saklıdır.</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-codeweek-pink-400" />
              <span className="text-xs text-codeweek-purple-400">
                Yapay zeka ve etik ile güçlendirildi
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-codeweek-purple-600/20 to-codeweek-pink-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-codeweek-pink-600/20 to-codeweek-purple-600/20 rounded-full blur-3xl"></div>
    </footer>
  );
}
