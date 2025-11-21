"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Clock, Trophy, Target, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CompetitionCardProps = {
  title: string;
  desc: string;
  fullDesc?: string;
  requirements?: string;
  duration?: string;
  judging?: string;
};

export function CompetitionCard({
  title,
  desc,
  fullDesc,
  requirements,
  duration,
  judging,
}: CompetitionCardProps) {
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

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col p-8">
            {/* Icon */}
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-codeweek-purple-200 leading-relaxed mb-6">
              {desc}
            </p>

            {/* Call to Action */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-codeweek-purple-500/20">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-codeweek-pink-400" />
                <span className="text-xs font-semibold text-codeweek-pink-400 uppercase tracking-wider">
                  Yarışma
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
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400 mb-2">
                <Trophy className="w-4 h-4 text-codeweek-pink-400" />
                <span>AI Yarışması</span>
              </div>
              <DialogTitle className="text-3xl font-black gradient-text">{title}</DialogTitle>
            </div>
          </div>
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
            {requirements && (
              <div className="ai-card rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400 mb-2">
                  Gereksinimler
                </p>
                <p className="text-sm font-medium text-white">{requirements}</p>
              </div>
            )}
            {judging && (
              <div className="md:col-span-2 ai-card rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400 mb-2">
                  Değerlendirme
                </p>
                <p className="text-sm font-medium text-white">{judging}</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}