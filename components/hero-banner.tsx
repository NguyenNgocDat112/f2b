"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { slides } from "@/lib/data";

const playfair = Playfair_Display({ subsets: ["latin", "vietnamese"] });

export function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 6000); // Slower, more elegant timing
    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div 
        className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-[10px] overflow-hidden bg-gray-50 group shadow-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing select-none"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(_, info) => {
              const swipeThreshold = 55;
              if (info.offset.x < -swipeThreshold) {
                nextSlide();
              } else if (info.offset.x > swipeThreshold) {
                prevSlide();
              }
            }}
          >
            <Image quality={100}
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            {/* Elegant refined dark architectural gradient overlays */}
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/75 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(204,26,38,0.15)_0%,transparent_60%)] z-10 pointer-events-none" />
            
            <div className="absolute inset-0 p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-between z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="max-w-2xl select-none"
              >
                <h2 className={`${playfair.className} text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.08] tracking-tight whitespace-pre-line font-medium drop-shadow-md`}>
                  {slides[current].title}
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.35 }}
                className="self-end text-right mt-auto mb-6 sm:mb-0 select-none group/text cursor-pointer"
                onClick={nextSlide}
              >
                <p className={`${playfair.className} text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-1.5 drop-shadow-md font-medium tracking-wide`}>
                  {slides[current].subtitleMain}
                </p>
                <p className={`${playfair.className} text-xs sm:text-sm lg:text-base text-white/80 tracking-wider flex items-center justify-end gap-2 group-hover/text:text-[#cc1a26] transition-colors duration-300`}>
                  {slides[current].subtitleSub}
                  <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover/text:translate-x-1 group-hover/text:text-[#cc1a26] transition-all duration-300" />
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Improved hover effects */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 sm:pl-8 z-20">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/40 hover:bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-800 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 shadow-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 ml-auto mr-auto" strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-8 z-20">
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/40 hover:bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-800 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 shadow-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 ml-auto mr-auto" strokeWidth={1.5} />
          </button>
        </div>

        {/* Pagination Dots - Smoother transitions */}
        <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex justify-center items-center gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-500 ease-[0.22,1,0.36,1] rounded-full h-1.5 sm:h-2 ${
                index === current
                  ? "w-8 sm:w-10 bg-white shadow-md shadow-black/10"
                  : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
