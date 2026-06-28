import { motion } from "motion/react";
import React from "react";

export const BrandLogo = React.memo(({ logo, brandLogoText, brandSubText }: { logo: string, brandLogoText: string, brandSubText: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
      whileHover="hover"
      className="w-[110px] h-[110px] lg:w-[130px] lg:h-[130px] bg-white border border-[#d4af37]/60 p-2 relative flex flex-col items-center justify-center text-center mx-auto lg:mx-0 group/brandlogo bg-gradient-to-br from-[#fffefc] to-[#faf9f5] rounded-[10px] shadow-[0_2px_10px_rgba(212,175,55,0.1)] overflow-hidden"
    >
      <div className="absolute inset-1 border border-[#d4af37]/30 pointer-events-none rounded-[8px]" />
      
      {/* Shimmer glossy sweep effect - auto-repeating for high-end feel */}
      <motion.div
        className="absolute inset-0 w-[60%] h-[200%] -top-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 pointer-events-none z-20"
        initial={{ left: "-120%" }}
        animate={{
          left: ["-120%", "220%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.6,
          repeatDelay: 3.0,
          ease: "easeInOut",
        }}
      />

      <div className="text-center z-10 w-full flex flex-col items-center justify-center group-hover/brandlogo:scale-[1.05] transition-transform duration-500 mt-1">
        <span className="text-[#99155d] font-sans font-black text-[45px] lg:text-[50px] leading-[0.8] tracking-widest flex items-center justify-center">
          <span className="inline-block scale-y-125 font-bold font-sans text-[#99155d] select-none pr-1">!</span>{logo}
        </span>
        <div className="text-[#99155d] text-[11px] lg:text-[12px] font-black tracking-widest mt-3 select-none leading-none z-10 w-full px-1 uppercase whitespace-nowrap">
          {brandLogoText}
        </div>
      </div>
    </motion.div>
  );
});
BrandLogo.displayName = "BrandLogo";
