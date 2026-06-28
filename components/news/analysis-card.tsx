"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

interface AnalysisCardProps {
  data: {
    id: number;
    title: string;
    tags: string[];
    image: string;
  };
  priority?: boolean;
  index?: number;
}

export function AnalysisCard({ data, priority = false, index = 0 }: AnalysisCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <Link href={`/news/${data.id}`}>
      <motion.article 
        variants={itemVariants}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        }}
        className="flex flex-col group cursor-pointer h-full"
      >
        <div className="relative w-full aspect-[1.58] overflow-hidden rounded-[8px] mb-4 shadow-none border border-gray-100 transition-all duration-500 bg-gray-100">
          
          {/* Top Tab Overlay exactly like the user image */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            <div className="bg-white h-[26px] px-3.5 flex items-center justify-center rounded-b-[10px] relative">
              {/* Smooth inverted corners using box-shadow */}
              <div className="absolute top-0 -left-[10px] w-[10px] h-[10px] bg-transparent shadow-[4px_-4px_0_white] rounded-tr-[10px]" />
              <div className="absolute top-0 -right-[10px] w-[10px] h-[10px] bg-transparent shadow-[-4px_-4px_0_white] rounded-tl-[10px]" />
              
              {/* Logo Content */}
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1.5 border-r border-[#d4d4d4] pr-1.5">
                  {/* T Icon */}
                  <div className="flex flex-col items-center justify-center w-[15px] h-[15px] border-[1.5px] border-[#1a1a1a] rounded-[3px] relative overflow-hidden">
                     <div className="w-[8px] h-[2px] bg-[#1a1a1a] absolute top-[2px]"></div>
                     <div className="w-[2.5px] h-[7px] bg-[#1a1a1a] absolute top-[4px]"></div>
                  </div>
                  {/* Text */}
                  <div className="text-[6.5px] font-black leading-[1.1] tracking-tighter text-[#1a1a1a] uppercase">
                    <div>NGUYEN</div>
                    <div>VINH</div>
                  </div>
                </div>
                <div className="text-[#a10e6d] flex flex-col items-center justify-center pt-[1px]">
                  <span className="font-black text-[13px] italic tracking-tighter leading-[0.8] mb-[1px]">1</span>
                  <span className="text-[4px] uppercase font-bold tracking-[0.05em] leading-none">Năm</span>
                </div>
              </div>
            </div>
          </div>

          <Image quality={100}
            src={data.image}
            alt={data.title}
            fill
            priority={priority}
            className="object-cover transform transition-transform duration-[1200ms] ease-[0.16,1,0.3,1] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-500 z-10" />
        </div>
        
        <div className="flex flex-col flex-grow">
          <h3 className="text-[15.5px] md:text-[16.5px] text-[#2c2c2c] font-light leading-[1.4] mb-3 group-hover:text-[#eb0064] transition-colors duration-300 pr-1">
            {data.title}
          </h3>
          
          <div className="mt-auto flex flex-wrap gap-x-2 gap-y-1">
            {data.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="text-[#e23075] text-[10.5px] md:text-[11.5px] font-bold uppercase tracking-[0.06em]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
