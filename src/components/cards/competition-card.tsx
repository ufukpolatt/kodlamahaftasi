"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Clock, Trophy, Target, ArrowRight } from "lucide-react";
import Image from "next/image";
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
  image?: string;
  level?: string;
};

export function CompetitionCard({
  title,
  desc,
  fullDesc,
  requirements,
  duration,
  judging,
  image,
  level,
}: CompetitionCardProps) {
  // Determine if this is a high school competition (should show "Yarışma")
  const isHighSchool = level === "Lise";
  const competitionType = isHighSchool ? "Yarışma" : "Maraton";
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
                onError={(e) => {
                  console.error(`Image failed to load: ${image}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-codeweek-dark/80 to-transparent"></div>
              
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col p-6 -mt-20">

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
                <Trophy className="w-4 h-4 text-codeweek-pink-400" />
                <span className="text-xs font-semibold text-codeweek-pink-400 uppercase tracking-wider">
                  {competitionType}
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
                onError={(e) => {
                  console.error(`Image failed to load: ${image}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-codeweek-dark via-codeweek-dark/50 to-transparent"></div>
              
            </div>
          )}

          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400 mb-2">
                <Trophy className="w-4 h-4 text-codeweek-pink-400" />
                <span>AI {competitionType}</span>
              </div>
              <DialogTitle className="text-3xl font-black gradient-text">{title}</DialogTitle>
            </div>
          </div>
          <DialogDescription className="text-base text-codeweek-purple-200">{desc}</DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-6">
          {fullDesc && (
            <div>
              <h4 className="mb-3 text-lg font-bold gradient-text">Etkinlik Detayları</h4>
              <div className="text-sm leading-relaxed text-codeweek-purple-200">
                {fullDesc.split('\n\n').map((paragraph, index) => {
                  if (paragraph.includes(':')) {
                    const [title, ...contentParts] = paragraph.split(':');
                    const content = contentParts.join(':').trim();
                    return (
                      <div key={index} className="mb-4">
                        <h5 className="text-base font-semibold text-codeweek-pink-400 mb-2">{title}:</h5>
                        <p className="pl-4">{content}</p>
                      </div>
                    );
                  }
                  return <p key={index} className="mb-4">{paragraph}</p>;
                })}
              </div>
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
            {isHighSchool && (
              <div className="ai-card rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400 mb-2">
                  Kayıt Linki
                </p>
                <a
                  href="https://forms.gle/6d6sgsTotG9BYFcc8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-codeweek-purple-600 to-codeweek-pink-600 rounded-md hover:from-codeweek-purple-700 hover:to-codeweek-pink-700 transition-all duration-200"
                >
                  Kayıt Ol
                </a>
              </div>
            )}
            {!isHighSchool && requirements && (
              <div className="ai-card rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400 mb-2">
                  Gereksinimler
                </p>
                <p className="text-sm font-medium text-white">{requirements}</p>
              </div>
            )}
            {!isHighSchool && judging && (
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