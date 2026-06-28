"use client";

import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function PartnerHero() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-14 pb-1 sm:pt-8 sm:pb-3 md:pt-10 md:pb-4 text-center px-4">
      {/* Decorative radial ambient light for soft depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-gray-100/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto flex flex-col items-center"
      >
        {/* Precise pill badge matching the reference design */}
        <motion.div variants={fadeInUp} className="mb-5 sm:mb-6">
          <span className="inline-block px-3.5 py-1 bg-white text-[#cc2424] text-[10px] sm:text-[11px] font-bold rounded-lg tracking-[0.14em] uppercase border border-gray-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] select-none">
            HỢP TÁC PHÁT TRIỂN
          </span>
        </motion.div>

        {/* Big elegant typography title matching the reference image layout */}
        <motion.h1 
          variants={fadeInUp} 
          className="text-[25px] sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-[-0.035em] leading-[1.12] text-[#111111] max-w-[100%] sm:max-w-3xl lg:max-w-4xl px-2"
        >
          Hợp tác kinh doanh <span className="whitespace-nowrap">bền vững,</span>
          <span className="text-[#8e8e93] font-bold block mt-1.5 sm:mt-2">
            đồng hành bứt phá <span className="whitespace-nowrap">doanh thu!</span>
          </span>
        </motion.h1>

        {/* Subtitle/Description paragraph styled elegantly */}
        <motion.p 
          variants={fadeInUp} 
          className="text-gray-500 text-[12.5px] sm:text-sm md:text-[15px] leading-relaxed max-w-2xl mt-8 sm:mt-8 px-2 sm:px-8 font-medium selection:bg-[#cc2424]/10"
        >
          Trở thành đối tác chính thức của Nguyễn Vinh để tiếp cận nguồn hàng cao cấp, 
          mức chiết khấu đặc quyền tốt nhất thị trường cùng hạ tầng giao nhận xuất sắc tại công trình.
        </motion.p>

        {/* Dynamic CTA anchor button to scroll directly to the form */}
        <motion.div variants={fadeInUp} className="mt-10 sm:mt-10 w-auto mb-6 sm:mb-0">
          <button 
            type="button"
            onClick={() => {
              const element = document.getElementById("registration-form-section");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="inline-flex justify-center items-center bg-gray-900 hover:bg-[#cc2424] text-white font-bold text-[12px] sm:text-[13px] tracking-wider px-8 py-3.5 sm:px-7 sm:py-3.5 rounded-[14px] sm:rounded-xl transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:translate-y-0 select-none uppercase"
          >
            Đăng Ký Đối Tác Ngay
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
