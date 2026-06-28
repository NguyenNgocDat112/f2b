"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { staggerContainer } from "@/lib/animations";
import { ebooks } from "@/lib/data-ebooks";
import { EbookCard } from "./ebook-card";
import { EbookViewer } from "./ebook-viewer";

export function EbookList() {
  const [activeEbook, setActiveEbook] = useState<any>(null);

  return (
    <>
      <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-black mb-5 tracking-tight">
            Thư Viện Vật Liệu Xây Dựng
          </h2>
          <div className="w-20 h-[3px] bg-black mx-auto mb-6"></div>
          <p className="text-[15px] md:text-[16px] text-[#2d2d2d] max-w-3xl mx-auto leading-relaxed md:leading-[1.7] px-4 font-medium">
            Phân tích chuyên sâu về vật liệu xây dựng dân dụng & công nghiệp: từ bê tông, thép kết cấu đến các vật liệu xanh, xu hướng hoàn thiện nội thất hiện đại.
          </p>
        </motion.div>

        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {ebooks.map((ebook) => (
            <EbookCard
              key={ebook.id}
              title={ebook.title}
              category={ebook.category}
              description={ebook.description}
              image={ebook.image}
              onClick={() => setActiveEbook(ebook)}
            />
          ))}
        </motion.div>
      </div>
    </section>

    <EbookViewer 
      isOpen={!!activeEbook} 
      onClose={() => setActiveEbook(null)} 
      ebookData={activeEbook} 
    />
    </>
  );
}
