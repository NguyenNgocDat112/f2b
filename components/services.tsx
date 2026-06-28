"use client";

import { motion } from "motion/react";
import { services } from "@/lib/data";
import { staggerContainer, fadeInUp, revealLeft, revealRight } from "@/lib/animations";

export function Services() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-24 items-center">
        <motion.div
          variants={revealLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-5"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#1e1e24] tracking-tight leading-[1.15]">
            Dịch Vụ Tốt Nhất <br className="hidden lg:block"/> Dành Cho Bạn
          </h2>
        </motion.div>
        
        <motion.div
          variants={revealRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-7"
        >
          <p className="text-gray-500 text-[16px] md:text-[17px] leading-relaxed md:leading-[1.8] max-w-2xl">
            Chúng tôi cam kết mang đến trải nghiệm tuyệt vời nhất cho khách hàng thông qua 
            sản phẩm chất lượng, tư vấn chuyên sâu cùng dịch vụ giao hàng nhanh chóng, chuyên nghiệp. 
            Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi.
          </p>
        </motion.div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-12"
      >
        {services.map((feature) => (
          <motion.div 
            key={feature.id} 
            variants={fadeInUp}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 md:w-[96px] md:h-[96px] rounded-full bg-[#f4f5f9] flex items-center justify-center mb-6 md:mb-8 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:bg-white group-hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] group-hover:-translate-y-2">
              <feature.icon className="w-9 h-9 md:w-[42px] md:h-[42px] text-[#2d2d3a] transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110" strokeWidth={1.5} />
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#1e1e24] mb-3 md:mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed max-w-[260px]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
