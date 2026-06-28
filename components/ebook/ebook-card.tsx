"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";

interface EbookCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export function EbookCard({ title, category, description, image, onClick }: EbookCardProps) {
  return (
    <motion.div 
      variants={fadeInUp}
      onClick={onClick}
      className="flex flex-col h-full bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
    >
      <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
        <div className="relative w-full h-full transform transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105">
           <Image quality={100}
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </div>
      
      <div className="p-6 md:p-7 flex flex-col flex-grow bg-white">
        <h3 className="text-[#a41a27] font-bold text-[18px] md:text-[20px] leading-[1.3] mb-4 min-h-[52px]">
          {title}
        </h3>
        
        <div className="mb-4">
          <p className="font-bold text-[#5c6873] text-[14px] leading-snug">{category}</p>
          <p className="text-gray-400 font-bold tracking-[0.1em] text-[15px] leading-none mt-1">***</p>
        </div>
        
        <p className="text-[#5b6670] text-[14px] leading-[1.65] mb-8 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto">
          <button className="bg-[#e91459] hover:bg-[#d1104e] text-white font-bold text-[13px] px-6 py-2.5 rounded-full uppercase tracking-wide transition-colors duration-300 inline-block w-max">
            NHẬN EBOOK NGAY
          </button>
        </div>
      </div>
    </motion.div>
  );
}
