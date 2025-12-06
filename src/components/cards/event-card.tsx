"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Zap } from "lucide-react";

type EventCardProps = {
  title: string;
  time: string;
  track: string;
  speaker?: string;
  participants?: string;
};

export function EventCard({ title, time, track, speaker, participants }: EventCardProps) {
  return (
    <motion.div
      whileHover={{ x: 5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="ai-card group cursor-pointer rounded-xl p-4 relative overflow-hidden"
    >
      {/* Data Stream Effect */}
      <div className="absolute inset-0 data-stream opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-codeweek-purple-400">
            {track}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-codeweek-pink-400" />
          <span className="text-xs font-bold text-codeweek-pink-400">
            {time}
          </span>
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-sm font-bold text-white mb-2 relative z-10 group-hover:gradient-text transition-all duration-300">
        {title}
      </h3>
      
      {/* Speaker/Participants */}
      {speaker && speaker.trim() !== "" && (
        <p className="text-xs text-codeweek-purple-300 mb-2 relative z-10">
          {speaker.startsWith("Konuşmacı:") ? speaker : `Katılımcılar: ${speaker}`}
        </p>
      )}
      
      {/* Participants displayed vertically */}
      {participants && participants.trim() !== "" && (
        <div className="text-xs text-codeweek-purple-300 mb-2 relative z-10">
          <span className="font-semibold">Katılımcılar:</span>
          <div className="mt-1 space-y-1">
            {participants.split('\n').map((participant, index) => (
              <div key={index} className="ml-2">• {participant}</div>
            ))}
          </div>
        </div>
      )}
      
      {/* AI Badge */}
      <div className="flex items-center gap-2 relative z-10">
        <div className="w-2 h-2 bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-codeweek-purple-300 uppercase tracking-wider">
          AI Powered
        </span>
      </div>
      
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-codeweek-purple-600/5 to-codeweek-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}
