"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function OpeningLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShouldRender(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Simulate progress counting up to provide a premium 4-second experience
    const startTime = Date.now();
    const duration = 3400; // 3.4s of progress count, combined with a slide wipe transition for a perfect 4-second brand showcase

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      
      setProgress(calculatedProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        // Add a slight delay before triggering the exit animation
        setTimeout(() => {
          setIsVisible(false);
        }, 150);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Determine current loading phase text with specialized construction materials and civil engineering stages
  let loadingPhaseText = "ĐANG KIỂM ĐỊNH MÁC THÉP CUỘN & THÉP THANH VẰN...";
  if (progress > 15 && progress <= 35) {
    loadingPhaseText = "KIỂM TRA CHỈ TIÊU CƠ LÝ XI MĂNG PCB40 CAO CẤP...";
  } else if (progress > 35 && progress <= 55) {
    loadingPhaseText = "PHÂN TÍCH ĐỘ SỤT BÊ TÔNG TƯƠI MÁC PHÁT TRIỂN M350...";
  } else if (progress > 55 && progress <= 72) {
    loadingPhaseText = "PHÂN LOẠI CÁT ĐÁ ĐÁP ỨNG TIÊU CHUẨN XÂY DỰNG BỀN VỮNG...";
  } else if (progress > 72 && progress <= 88) {
    loadingPhaseText = "THIẾT LẬP DANH MỤC GẠCH ỐP LÁT & NGÓI LỢP CHÍNH HÃNG...";
  } else if (progress > 88 && progress <= 97) {
    loadingPhaseText = "KIỂM DUYỆT CHẤT LƯỢNG MẪU VẬT LIỆU TRƯỚC KHI XUẤT XƯỞNG...";
  } else if (progress > 97) {
    loadingPhaseText = "MATHUB SẴN SÀNG BỀN VỮNG CÙNG CÔNG TRÌNH!";
  }

  if (!shouldRender) return null;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { 
              duration: 0.85, 
              ease: [0.76, 0, 0.24, 1], // Luxury cubic-bezier slide transition
            }
          }}
          className="fixed inset-0 z-[9999] bg-white text-[#171717] flex flex-col items-center justify-between p-8 md:p-12 select-none overflow-hidden"
          id="opening-loader-screen"
        >
          {/* Subtle architectural grid guidelines */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
            <div className="w-full h-full bg-[linear-gradient(to_right,#cc1a26_1px,transparent_1px),linear-gradient(to_bottom,#cc1a26_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          {/* Premium Radial Glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(204,26,38,0.05)_0%,transparent_65%)]" />

          {/* Luxury Technical Frame */}
          <div className="absolute inset-4 md:inset-6 border border-[#cc1a26]/10 pointer-events-none z-20 flex flex-col justify-between p-3">
            <div className="flex justify-between w-full">
              <span className="w-3 h-3 border-t-2 border-l-2 border-[#cc1a26]" />
              <span className="w-3 h-3 border-t-2 border-r-2 border-[#cc1a26]" />
            </div>
            <div className="flex justify-between w-full">
              <span className="w-3 h-3 border-b-2 border-l-2 border-[#cc1a26]" />
              <span className="w-3 h-3 border-b-2 border-r-2 border-[#cc1a26]" />
            </div>
          </div>

          {/* Top header corner indicators */}
          <div className="w-full flex justify-between items-center z-10 font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-[#555] px-2">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <span className="inline-block w-1.5 h-1.5 bg-[#cc1a26]" />
              MATHUB / HỆ THỐNG CUNG ỨNG VẬT LIỆU
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#cc1a26] font-bold flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cc1a26]/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cc1a26]"></span>
              </span>
              NHÀ PHÂN PHỐI SỐ 1
            </motion.div>
          </div>

          {/* Core Animation Group */}
          <div className="flex flex-col items-center justify-center gap-8 z-10 my-auto">
            {/* Architectural Abstract Monogram Symbol */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-28 h-28 flex items-center justify-center"
            >
              {/* Outer circle progress tracker */}
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  stroke="#f3f4f6"
                  strokeWidth="2"
                  fill="none"
                />
                <motion.circle
                  cx="56"
                  cy="56"
                  r="50"
                  stroke="#cc1a26"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="314"
                  strokeDashoffset={314 - (314 * progress) / 100}
                  transition={{ ease: "easeOut" }}
                />
              </svg>

              {/* Slow turning technical drafting diamond symbol inside */}
              <motion.svg
                viewBox="0 0 100 100"
                className="w-14 h-14 text-[#cc1a26] fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              >
                {/* Structure layer - Building/Foundation box */}
                <motion.path 
                  d="M50 15 L85 35 L85 75 L50 95 L15 75 L15 35 Z" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                />
                
                {/* Structural line vertical */}
                <motion.path 
                  d="M50 15 L50 95" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                />

                {/* Isometric roof rafters/beams */}
                <motion.path 
                  d="M15 35 L50 55 L85 35" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                />

                <motion.path 
                  d="M15 75 L50 55 L85 75" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
                />

                {/* Inside core point pivot */}
                <circle
                  cx="50"
                  cy="55"
                  r="4"
                  fill="#cc1a26"
                />
              </motion.svg>
            </motion.div>

            {/* Title / brand reveal */}
            <div className="flex flex-col items-center text-center gap-3 max-w-md px-4">
              <h1 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-[#cc1a26] overflow-hidden flex flex-wrap justify-center gap-x-[0.2em] gap-y-1">
                {"MATHUB".split(" ").map((word, wordIdx) => (
                  <span key={wordIdx} className="inline-flex overflow-hidden">
                    {word.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.215, 0.61, 0.355, 1],
                          delay: 0.15 + (wordIdx * 4 + index) * 0.04,
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>

              <div className="flex flex-col items-center gap-1.5 mt-1">
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="font-sans text-[11px] font-extrabold tracking-[0.28em] text-[#333] uppercase pl-[0.28em]"
                >
                  VẬT LIỆU XÂY DỰNG CAO CẤP
                </motion.p>
                
                <div className="h-[2px] w-12 bg-[#cc1a26]/20 relative overflow-hidden mt-1">
                  <motion.div 
                    className="absolute inset-y-0 h-full bg-[#cc1a26]"
                    initial={{ left: "-100%", width: "50%" }}
                    animate={{ left: "100%" }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Dynamic premium loader phase log has been removed for a cleaner visual look */}
            </div>
          </div>

          {/* Progress Indicators & Core Coordinates */}
          <div className="w-full flex flex-col gap-4 z-10 max-w-5xl mx-auto px-2">
            {/* Dynamic architect progress bar */}
            <div className="w-full h-px bg-gray-100 flex overflow-hidden relative">
              <motion.div 
                className="h-full bg-[#cc1a26]" 
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
              <motion.div 
                className="absolute w-1 h-3 -top-1 bg-[#cc1a26]"
                style={{ left: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="w-full h-4 flex justify-between items-end">
              {/* Technical indicators removed for cleaner UI */}
              <div className="hidden sm:block" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
