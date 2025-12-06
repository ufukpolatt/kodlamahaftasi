"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, UserRound, ChevronDown } from "lucide-react";
import { useState } from "react";

type Session = {
  time: string;
  location: string;
  participants: string;
};

type SpeakerSlideProps = {
  speakerName: string;
  speakerImage?: string;
  speakerRole?: string;
  talkDate: string;
  talkTime: string;
  talkTopic: string;
  location: string;
  participants: string;
  multipleSessions?: Session[];
};

export function SpeakerSlide({
  speakerName,
  speakerImage,
  speakerRole,
  talkDate,
  talkTime,
  talkTopic,
  location,
  participants,
  multipleSessions,
}: SpeakerSlideProps) {
  const [showAllSessions, setShowAllSessions] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="ai-card rounded-2xl overflow-hidden relative min-h-[400px] md:min-h-[350px]"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-codeweek-purple-600/10 to-codeweek-pink-600/10"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row">
        {/* Left Content Section */}
        <div className="flex-1 p-6 md:p-8">
          {/* Speaker Info */}
          <h2 className="text-2xl md:text-3xl font-black gradient-text mb-2">
            {speakerName}
          </h2>
          {speakerRole && (
            <p className="text-base md:text-lg text-codeweek-purple-300 mb-3">
              {speakerRole}
            </p>
          )}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            {talkTopic}
          </h3>
          
          {/* Details Grid */}
          {multipleSessions && multipleSessions.length > 0 ? (
            <div className="space-y-4">
              <div className="ai-card rounded-xl p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400">
                      Tarih
                    </p>
                    <p className="text-sm font-medium text-white">{talkDate}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-codeweek-purple-300 uppercase tracking-wider">
                    {multipleSessions.length} Oturum
                  </p>
                  
                  {/* Show first session by default */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-codeweek-pink-400" />
                      <span className="text-sm text-white">{multipleSessions[0].time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-codeweek-pink-400" />
                      <span className="text-sm text-white">{multipleSessions[0].location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-codeweek-pink-400" />
                      <span className="text-sm text-white">{multipleSessions[0].participants}</span>
                    </div>
                  </div>
                  
                  {/* Button to show/hide all sessions */}
                  {multipleSessions.length > 1 && (
                    <button
                      onClick={() => setShowAllSessions(!showAllSessions)}
                      className="flex items-center gap-2 mt-3 text-codeweek-purple-300 hover:text-codeweek-purple-200 transition-colors"
                    >
                      <span className="text-sm font-medium">
                        {showAllSessions ? 'Daha az göster' : `Tüm ${multipleSessions.length} oturumu göster`}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${showAllSessions ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                  
                  {/* Show all sessions when expanded */}
                  {showAllSessions && (
                    <div className="space-y-3 mt-3 pt-3 border-t border-codeweek-purple-500/20">
                      {multipleSessions.slice(1).map((session, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-codeweek-pink-400" />
                            <span className="text-sm text-white">{session.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-codeweek-pink-400" />
                            <span className="text-sm text-white">{session.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-codeweek-pink-400" />
                            <span className="text-sm text-white">{session.participants}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Date & Time */}
              <div className="ai-card rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400">
                      Tarih
                    </p>
                    <p className="text-sm font-medium text-white">{talkDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400">
                      Saat
                    </p>
                    <p className="text-sm font-medium text-white">{talkTime}</p>
                  </div>
                </div>
              </div>
              
              {/* Location & Participants */}
              <div className="ai-card rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400">
                      Konum
                    </p>
                    <p className="text-sm font-medium text-white">{location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-codeweek-purple-500 to-codeweek-pink-500 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-purple-400">
                      Katılımcılar
                    </p>
                    <p className="text-sm font-medium text-white">{participants}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Right Image Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex items-center justify-center bg-gradient-to-br from-codeweek-purple-600/5 to-codeweek-pink-600/5">
          {speakerImage ? (
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 p-0.5">
              <img
                src={speakerImage}
                alt={speakerName}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          ) : (
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-codeweek-dark flex items-center justify-center">
              <UserRound className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-codeweek-purple-300" />
            </div>
          )}
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-codeweek-purple-600/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}