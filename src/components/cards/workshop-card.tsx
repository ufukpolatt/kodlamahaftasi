"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Clock, Brain, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type WorkshopCardProps = {
  title: string;
  desc: string;
  level: string;
  capacity: string;
  image?: string;
  fullDesc?: string;
  instructor?: string;
  duration?: string;
  prerequisites?: string;
};

export function WorkshopCard({
  title,
  desc,
  level,
  capacity,
  image,
  fullDesc,
  instructor,
  duration,
  prerequisites,
}: WorkshopCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="ai-card group cursor-pointer rounded-2xl overflow-hidden h-full flex flex-col relative"
        >
          {/* Neural Network Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-light"></div>
          </div>

          {/* Image Section */}
          {image && (
            <div className="relative -mx-6 -mt-6 mb-4 h-40 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-codeweek-dark/80 to-transparent"></div>
              
              {/* AI Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-codeweek-dark/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-codeweek-purple-500/30">
                <Brain className="w-3 h-3 text-codeweek-purple-400" />
                <span className="text-xs font-bold text-codeweek-purple-300">AI Lab</span>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col p-6 -mt-20">
            {/* Meta Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 text-xs font-semibold">
                <div className="flex items-center gap-1.5 bg-codeweek-purple-500/20 rounded-full px-3 py-1.5 border border-codeweek-purple-500/30">
                  <Calendar className="w-3 h-3 text-codeweek-purple-400" />
                  <span className="text-codeweek-purple-300">{level}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-codeweek-pink-500/20 rounded-full px-3 py-1.5 border border-codeweek-pink-500/30">
                  <Users className="w-3 h-3 text-codeweek-pink-400" />
                  <span className="text-codeweek-pink-300">{capacity}</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-codeweek-purple-200 mb-4 line-clamp-2 leading-relaxed">
              {desc}
            </p>

            {/* Call to Action */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-codeweek-purple-500/20">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-codeweek-pink-400" />
                <span className="text-xs font-semibold text-codeweek-pink-400 uppercase tracking-wider">
                  Interactive
                </span>
              </div>
              <div className="flex items-center gap-1 text-codeweek-purple-300 group-hover:text-codeweek-purple-200 transition-colors">
                <span className="text-xs font-medium">Detaylar</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Hover Effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-codeweek-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 data-stream opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-codeweek-dark border-codeweek-purple-500/20">
        <DialogHeader>
          {image && (
            <div className="relative -mx-8 -mt-8 mb-6 h-64 overflow-hidden rounded-t-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-codeweek-dark via-codeweek-dark/50 to-transparent"></div>
              
              {/* AI Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2 bg-codeweek-dark/80 backdrop-blur-sm rounded-full px-4 py-2 border border-codeweek-purple-500/30">
                <Brain className="w-4 h-4 text-codeweek-purple-400" />
                <span className="text-sm font-bold text-codeweek-purple-300">AI Workshop</span>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400 mb-4">
            <div className="flex items-center gap-2 bg-codeweek-purple-500/20 rounded-full px-3 py-1.5 border border-codeweek-purple-500/30">
              <Calendar className="w-3 h-3 text-codeweek-purple-400" />
              <span className="text-codeweek-purple-300">{level}</span>
            </div>
            <div className="flex items-center gap-2 bg-codeweek-pink-500/20 rounded-full px-3 py-1.5 border border-codeweek-pink-500/30">
              <Users className="w-3 h-3 text-codeweek-pink-400" />
              <span className="text-codeweek-pink-300">{capacity}</span>
            </div>
          </div>

          <DialogTitle className="text-3xl font-black gradient-text mb-2">{title}</DialogTitle>
          <DialogDescription className="text-base text-codeweek-purple-200">{desc}</DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-6">
          {fullDesc && (
            <div>
              <h4 className="mb-3 text-lg font-bold gradient-text">Açıklama</h4>
              <p className="text-sm leading-relaxed text-codeweek-purple-200">{fullDesc}</p>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {instructor && (
              <div className="ai-card rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400 mb-2">
                  AI Mentor
                </p>
                <p className="text-sm font-medium text-white">{instructor}</p>
              </div>
            )}
            {duration && (
              <div className="ai-card rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-codeweek-pink-400" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400">
                    Süre
                  </p>
                </div>
                <p className="text-sm font-medium text-white">{duration}</p>
              </div>
            )}
            {prerequisites && (
              <div className="md:col-span-2 ai-card rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400 mb-2">
                  Ön Gereksinimler
                </p>
                <p className="text-sm font-medium text-white">{prerequisites}</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
