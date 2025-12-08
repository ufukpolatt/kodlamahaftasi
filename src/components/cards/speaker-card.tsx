"use client";

import { motion } from "framer-motion";
import { UserRound, Sparkles, ArrowRight, Calendar, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type SpeakerCardProps = {
  name: string;
  role: string;
  topic: string;
  image?: string;
  bio?: string;
  experience?: string;
  achievements?: string;
  session?: string;
  sessionTime?: string;
  sessionLocation?: string;
};

export function SpeakerCard({
  name,
  role,
  topic,
  image,
  bio,
  experience,
  achievements,
  session,
  sessionTime,
  sessionLocation
}: SpeakerCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="ai-card group cursor-pointer rounded-2xl p-6 h-full flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Neural Network Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-light"></div>
          </div>
          
          {/* Avatar */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative z-10 mb-4"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 p-0.5">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-codeweek-purple-500/20 to-codeweek-pink-500/20 backdrop-blur-sm border border-codeweek-purple-500/30 flex items-center justify-center">
                  <UserRound className="w-10 h-10 text-codeweek-purple-300" />
                </div>
              )}
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-codeweek-pink-500 to-codeweek-purple-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </motion.div>
          
          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
              {name}
            </h3>
            <p className="text-sm text-codeweek-purple-300 mb-3 font-medium">
              {role}
            </p>
            <p className="text-sm text-codeweek-purple-200 leading-relaxed">
              {topic}
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex items-center justify-end w-full mt-4 pt-4 border-t border-codeweek-purple-500/20">
            <div className="flex items-center gap-1 text-codeweek-purple-300 group-hover:text-codeweek-purple-200 transition-colors">
              <span className="text-xs font-medium">Detaylar</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-codeweek-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-codeweek-dark border-codeweek-purple-500/20">
        <DialogHeader className="flex flex-col items-center text-center">
          {image && (
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 p-0.5 mb-4">
              <img
                src={image}
                alt={name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          )}
          <DialogTitle className="text-3xl font-black gradient-text mb-2">{name}</DialogTitle>
          <DialogDescription className="text-base text-codeweek-purple-200">{role}</DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-6">
          {/* Hakkında Bölümü */}
          <div className="ai-card rounded-xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400 mb-4">
              Hakkında
            </p>
            <div className="space-y-4">
              {bio && (
                <div>
                  <p className="text-sm text-codeweek-purple-200 leading-relaxed">{bio}</p>
                </div>
              )}
              
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {session && (
              <div className="ai-card rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400 mb-2">
                  Konu
                </p>
                <p className="text-sm font-medium text-white">{session}</p>
              </div>
            )}
            {sessionTime && (
              <div className="ai-card rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-codeweek-pink-400" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400">
                    Tarih & Saat
                  </p>
                </div>
                <div className="text-sm font-medium text-white">
                  {sessionTime.split(',').map((time, index) => (
                    <div key={index} className="mb-1">
                      {time.trim()}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {sessionLocation && (
              <div className="md:col-span-2 ai-card rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-codeweek-pink-400" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400">
                    Konum
                  </p>
                </div>
                <div className="text-sm font-medium text-white">
                  {sessionLocation.split(',').map((location, index) => (
                    <div key={index} className="mb-1">
                      {location.trim()}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
