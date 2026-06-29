import { motion } from "motion/react";
import React from "react";
import Image from "next/image";

export const BrandLogo = React.memo(({ imageUrl, name }: { imageUrl: string; name?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
      whileHover="hover"
      className="w-[110px] h-[110px] lg:w-[130px] lg:h-[130px] bg-white border border-gray-200/90 p-1 relative flex items-center justify-center mx-auto lg:mx-0 group/brandlogo rounded-[4px] shadow-[0_3px_12px_rgba(0,0,0,0.04)] overflow-hidden"
    >
      {/* Outer subtle decorative frame */}
      <div className="absolute inset-0.5 border border-black/[0.03] pointer-events-none rounded-[4px] z-10" />
      
      {/* Shimmer glossy sweep effect */}
      <motion.div
        className="absolute inset-0 w-[60%] h-[200%] -top-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none z-20"
        initial={{ left: "-120%" }}
        animate={{
          left: ["-120%", "220%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.8,
          repeatDelay: 2.5,
          ease: "easeInOut",
        }}
      />

      <div className="relative w-[105px] h-[98px] rounded-[6px] overflow-hidden scale-[1.02] transition-transform duration-500">
        <Image
          src={imageUrl}
          alt={name || "Supplier Logo"}
          fill
          sizes="(max-width: 1024px) 110px, 130px"
          className="object-cover w-full h-fit"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
  );
});
BrandLogo.displayName = "BrandLogo";
