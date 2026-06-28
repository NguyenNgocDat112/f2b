"use client";

import Image from "next/image";
import { ReactNode, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Vật liệu xây dựng Nguyễn Vinh luôn là đối tác tin cậy của chúng tôi. Chất lượng cốt thép và xi măng vượt trội, đảm bảo sự kiên cố cho mọi công trình trọng điểm.",
    name: "Lê Hoàng Phước",
    company: "Hòa Bình Group",
    title: "Giám đốc Dự án",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
  },
  {
    id: 2,
    quote: "Từ gạch ngói đến vật tư hoàn thiện, Nguyễn Vinh cung cấp giải pháp toàn diện với tiến độ giao hàng chuẩn xác. Đây là yếu tố then chốt giúp chúng tôi luôn hoàn thành đúng hạn.",
    name: "Trần Minh Tuấn",
    company: "Coteccons",
    title: "Trưởng phòng Vật tư",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    quote: "Kiến tạo di sản qua từng viên gạch. Nguyễn Vinh không chỉ cung cấp vật liệu xây dựng uy tín, mà còn mang đến những giải pháp vững chắc cho công trình trường tồn cùng thời gian.",
    name: "Phạm Thu Hà",
    company: "Vinaconex",
    title: "Kiến trúc sư Trưởng",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  }
];

export function AuthLayout({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 1.05,
      filter: "blur(4px)"
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = TESTIMONIALS.length - 1;
      if (nextIndex >= TESTIMONIALS.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <div className="min-h-screen bg-[#F6F4F0] p-3 sm:p-5 md:p-8 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1200px] bg-white rounded-[20px] shadow-sm border border-gray-100 flex flex-col lg:flex-row h-full max-h-[900px] lg:h-[max(560px,min(85vh,720px))] mx-auto overflow-hidden">
        {/* Left Image Section */}
        <div className="relative w-full lg:w-[45%] p-3 hidden md:flex flex-col flex-shrink-0">
          <div className="relative w-full h-full min-h-[400px] rounded-[16px] overflow-hidden group">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={currentTestimonial.image}
                  alt="Luxury Real Estate"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

            {/* Full-area Swipeable Overlay */}
            <motion.div
              className="absolute inset-0 z-[5] cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />

            {/* Pagination dots (Top) */}
            <div className="absolute top-6 left-6 flex gap-1.5 z-10">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? "w-6 bg-white" 
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            {/* Glassmorphism Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-5 md:p-6 rounded-[14px] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                
                <div className="relative overflow-hidden w-full" style={{ minHeight: '120px' }}>
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                        filter: { duration: 0.2 }
                      }}
                      className="absolute inset-0 flex flex-col justify-between w-full h-full pointer-events-none"
                    >
                      <p className="text-[12.5px] md:text-[13.5px] font-medium leading-[1.6] text-white/95 text-shadow-sm select-none line-clamp-3 mb-4">
                        &ldquo;{currentTestimonial.quote}&rdquo;
                      </p>
                      
                      <div className="flex items-end justify-between mt-auto">
                        <div>
                          <h4 className="text-[14px] font-bold mb-0.5 tracking-wide text-white">{currentTestimonial.name}</h4>
                          <div className="flex items-center gap-1.5 opacity-90 text-[11px] font-medium">
                            <span>{currentTestimonial.company}</span>
                            <span className="w-1 h-1 rounded-full bg-white/50" />
                            <span className="opacity-80 font-normal truncate max-w-[120px] sm:max-w-none">{currentTestimonial.title}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                  
                {/* Fixed controls layer (Overlay on top of swipeable area but aligned right) */}
                <div className="absolute bottom-5 md:bottom-6 right-5 md:right-6 flex gap-2 pointer-events-auto">
                  <button 
                    onClick={() => paginate(-1)}
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors text-white backdrop-blur-md z-10"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => paginate(1)}
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors text-white backdrop-blur-md z-10"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-[55%] flex flex-col p-5 sm:p-8 lg:p-10 overflow-y-auto custom-scrollbar">
          <div className="w-full max-w-[380px] mx-auto my-auto py-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
