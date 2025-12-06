"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Mic, ChevronLeft, ChevronRight } from "lucide-react";
import { scheduleDays, speakerSlides } from "@/data/mockData";
import { EventCard } from "@/components/cards/event-card";
import { SpeakerSlide } from "@/components/cards/speaker-slide";

export default function SchedulePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === speakerSlides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds
    
    return () => clearInterval(interval);
  }, [speakerSlides.length]);
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
            <Calendar className="w-5 h-5 text-codeweek-purple-400" />
            <span className="text-sm font-bold uppercase tracking-widest text-codeweek-purple-300">
              5 Günlük Program
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="gradient-text">Etkinlik</span>
            <br />
            <span className="text-white">Takvimi</span>
          </h1>
          
          <p className="text-xl text-codeweek-purple-200 max-w-3xl mx-auto leading-relaxed">
            8-12 Aralık tarihleri arasında Eyüboğlu Eğitim Kurumları'nda gerçekleşecek
            tüm etkinliklerin detaylı programı. Her gün için farklı temalar ve odak alanları.
          </p>
        </motion.div>
      </section>

      {/* Speaker Slides Section */}
      <section className="mx-auto w-[min(1400px,95%)] mb-20">
        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <SpeakerSlide
                  speakerName={speakerSlides[currentSlide].speakerName}
                  speakerImage={speakerSlides[currentSlide].speakerImage}
                  speakerRole={speakerSlides[currentSlide].speakerRole}
                  talkDate={speakerSlides[currentSlide].talkDate}
                  talkTime={speakerSlides[currentSlide].talkTime}
                  talkTopic={speakerSlides[currentSlide].talkTopic}
                  location={speakerSlides[currentSlide].location}
                  participants={speakerSlides[currentSlide].participants}
                  multipleSessions={speakerSlides[currentSlide].multipleSessions}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Navigation Buttons - Outside the slide container */}
        <div className="flex justify-between items-center mt-6 relative">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? speakerSlides.length - 1 : prev - 1))}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Slide Indicators */}
          <div className="flex justify-center gap-2">
            {speakerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-codeweek-purple-500 to-codeweek-pink-500 w-8"
                    : "bg-codeweek-purple-500/30 hover:bg-codeweek-purple-500/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev === speakerSlides.length - 1 ? 0 : prev + 1))}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Schedule Days */}
      <section className="mx-auto w-[min(1400px,95%)] space-y-16">
        {scheduleDays.map((day, dayIndex) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: dayIndex * 0.1 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold gradient-text">Gün {dayIndex + 1}</h2>
                <p className="text-lg text-codeweek-purple-200">{day.day} • {day.date}</p>
              </div>
              <div className="ml-auto">
                <div className="ai-card rounded-full px-6 py-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-codeweek-purple-400" />
                  <span className="text-codeweek-purple-200 font-medium">{day.events.length} etkinlik</span>
                </div>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {day.events.map((event, eventIndex) => (
                <motion.div
                  key={`${event.title}-${event.time}-${event.track}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: dayIndex * 0.1 + eventIndex * 0.05 }}
                >
                  <EventCard
                    title={event.title}
                    time={event.time}
                    track={event.track}
                    speaker={event.speaker}
                    participants={event.participants}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

    </div>
  );
}

