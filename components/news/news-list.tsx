"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { allNews } from "@/lib/data-news";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function NewsList() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="w-full bg-[#f8fafc] py-20 lg:py-28 relative">
      <div className="max-w-[1240px] px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 flex items-center justify-between"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#eb0064]" />
              <span className="text-[#eb0064] font-bold text-[12px] tracking-widest uppercase">Cập Nhật Mới</span>
            </div>
            <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 tracking-tight leading-tight">
              Tin Tức Chuyên Ngành
            </h2>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-gray-500 hover:text-[#eb0064] text-[15px] font-medium group transition-colors">
            Xem tất cả 
            <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {allNews.map((news) => (
            <Link href={`/news/${news.id}`} key={news.id}>
              <motion.article 
                variants={itemVariants}
                className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 hover:border-transparent transition-all duration-500 ease-[0.16,1,0.3,1] group cursor-pointer flex flex-col h-full"
              >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                <div className="absolute inset-x-0 top-5 z-20 flex flex-wrap gap-2 px-6">
                  {news.tags.slice(0, 2).map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white/90 backdrop-blur-md text-gray-900 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Image quality={100}
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transform transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                
                {/* Subtle gradient overlay at bottom of image for contrast if needed */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white z-20">
                <span className="text-gray-400 text-[13px] font-medium mb-3 block tracking-wide">
                  {news.date}
                </span>
                <h3 className="text-[20px] md:text-[22px] text-gray-900 font-bold leading-[1.4] mb-4 group-hover:text-[#eb0064] transition-colors duration-300 line-clamp-3">
                  {news.title}
                </h3>
                <p className="text-[#64748b] text-[15px] leading-[1.65] mb-8 flex-grow line-clamp-3">
                  {news.excerpt}
                </p>
                
                <div className="mt-auto pt-5 border-t border-gray-100/80 flex items-center justify-between">
                  <span className="text-[#eb0064] text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                    ĐỌC BÀI VIẾT
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.article>
            </Link>
          ))}
        </motion.div>
        
        <div className="mt-12 sm:hidden flex justify-center">
          <button className="flex items-center gap-2 text-gray-900 font-bold uppercase tracking-widest text-sm bg-white border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
            Xem tất cả
          </button>
        </div>
      </div>
    </section>
  );
}
