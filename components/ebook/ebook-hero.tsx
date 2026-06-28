"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function EbookHero() {
  return (
    <section className="w-full bg-[#282d38] flex flex-col items-center pt-16 md:pt-24 pb-0 overflow-hidden relative">
      {/* Background Concentric Circles */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-0 flex justify-center items-end hidden md:flex">
        <div className="absolute w-[2200px] h-[2200px] bg-[#222731] rounded-full translate-y-[60%]" />
        <div className="absolute w-[1600px] h-[1600px] bg-[#252a34] rounded-full translate-y-[55%]" />
        <div className="absolute w-[1100px] h-[1100px] bg-[#292e3a] rounded-full translate-y-[50%]" />
        <div className="absolute w-[700px] h-[700px] bg-[#2d323e] rounded-full translate-y-[45%]" />
      </div>

      <div className="max-w-[1000px] px-4 sm:px-6 lg:px-8 mx-auto w-full flex flex-col items-center relative z-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-[36px] sm:text-[44px] md:text-[56px] font-bold tracking-tight mb-4 text-center leading-[1.2]"
        >
          Construction Materials
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-white/90 text-[15px] sm:text-[17px] md:text-[19px] text-center max-w-[700px] leading-[1.6] mb-8 font-medium px-4"
        >
          Nắm vững kiến thức về các loại vật liệu xây dựng tiên tiến, cập nhật xu hướng và tiêu chuẩn áp dụng trong các công trình hiện đại
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="bg-[#eb0064] hover:bg-[#d10058] text-white font-bold text-[13px] md:text-[14px] px-7 py-3.5 rounded-full uppercase tracking-wide transition-colors duration-300"
        >
          NHẬN CẬP NHẬT MỚI NHẤT
        </motion.button>
        
        {/* Book Mockup Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-12 md:mt-16 w-full flex justify-center relative z-20"
        >
           <div className="relative w-full max-w-[600px] aspect-[4/3] flex justify-center items-end">
             <div className="relative w-[320px] md:w-[480px] h-[320px] md:h-[480px]">
                <Image quality={100} 
                  src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=100&w=1600&h=1600" 
                  alt="Construction Materials Ebook"
                  fill
                  sizes="(max-width: 768px) 320px, 480px"
                  className="object-contain"
                  priority
                />
             </div>
           </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 pointer-events-none transform translate-y-[2px]">
        <svg 
          viewBox="0 0 1440 160" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none" 
          className="w-full h-[80px] md:h-[120px] lg:h-[160px] min-w-[1000px]"
        >
          <path 
            fill="#ffffff" 
            d="M0,96C120,96,240,32,360,42.7C480,53,600,139,720,149.3C840,160,960,96,1080,74.7C1200,53,1320,75,1380,85.3L1440,96L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,0,160Z"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-0 w-full h-[5px] bg-white z-30" />
    </section>
  );
}
