"use client";

import Image from "next/image";
import { motion } from "motion/react";
// import Tag from "./_components/Tag"
// import DataAnalysisSection from "./_components/DataAnalysisSection";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-[linear-gradient(-45deg,rgba(217,45,119,0.95)_0%,rgba(217,57,45,0.95)_100%)] px-3 py-1 text-[10px] sm:text-[11px] rounded-[2px] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 inline-block">
    {children}
  </span>
);

const featuredPost = {
  title:
    "Chiến lược vận hành và tăng doanh số Shopee mà Marketer cần biết (Phần 1)",
  desc: "Bạn đang chạy Shopee, hay Shopee đang chạy bạn? Nhiều team e-commerce bỏ ra hàng chục triệu mỗi tháng cho...",
  image:
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
  tags: [
    "CHIẾN LƯỢC",
    "DIGITAL MARKETING",
    "KIẾN THỨC",
    "TRADE MARKETING",
  ],
};

const posts = [
  {
    title: "Chiến lược Digital Marketing cho doanh nghiệp B2B",
    tags: ["CHIẾN LƯỢC", "DIGITAL MARKETING", "KIẾN THỨC"],
  },
  {
    title:
      "Brand Growth Model là gì? Ứng dụng Brand Growth Model trong việc xây dựng kế hoạch Marketing",
    tags: ["BRAND MARKETING", "CHIẾN LƯỢC", "KIẾN THỨC"],
  },
  {
    title:
      "AI đang tái định nghĩa chiến lược Go-to-Market của doanh nghiệp như thế nào?",
    tags: ["CHIẾN LƯỢC", "DIGITAL MARKETING", "KIẾN THỨC"],
  },
];

export function NewsHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <main className="w-full max-w-[1420px] mx-auto overflow-hidden bg-[#1f1624] text-white rounded-b-[16px] md:rounded-b-[24px]">
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        {/* BG IMAGE WITH SMOOTH IMMERSIVE ZOOM */}
        <motion.div 
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="absolute inset-0"
        >
          <Image
            src={featuredPost.image}
            alt="hero"
            fill
            priority
            className="object-cover filter brightness-[0.9]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ELEGANT GRADIENT OVERLAY */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,0,20,0.9)_0%,rgba(35,0,25,0.78)_50%,rgba(80,0,40,0.95)_100%)]" 
        />

        {/* BLUR ACCENTS */}
        <div className="absolute right-[-120px] top-[-80px] h-[260px] w-[260px] rounded-full bg-pink-700/30 blur-3xl sm:h-[500px] sm:w-[500px] pointer-events-none" />
        <div className="absolute left-[-100px] bottom-[-100px] h-[240px] w-[240px] rounded-full bg-fuchsia-500/20 blur-3xl sm:h-[400px] sm:w-[400px] pointer-events-none" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex pt-12 pb-8 sm:pt-16 sm:pb-12 max-w-[1500px] flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-[850px]"
          >
            {/* TAGS STAGGERED */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 sm:gap-3">
              {featuredPost.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </motion.div>

            {/* TITLE REVEAL */}
            <motion.h1 
              variants={itemVariants}
              className="mt-5 max-w-[680px] text-[26px] leading-[1.25] text-white drop-shadow-2xl sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold tracking-tight"
            >
              {featuredPost.title}
            </motion.h1>

            {/* DESC REVEAL */}
            <motion.p 
              variants={itemVariants}
              className="mt-4 max-w-[780px] text-sm leading-relaxed text-white/80 sm:text-base font-light"
            >
              {featuredPost.desc}
            </motion.p>
          </motion.div>

          {/* BOTTOM CARDS STAGGERED & ELEVATED */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative mt-12 grid gap-5 rounded-[12px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:mt-16 sm:p-6 md:grid-cols-2 xl:grid-cols-3 shadow-none"
          >
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + index * 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                whileHover={{
                  y: -6,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(219, 39, 119, 0.35)",
                }}
                className="group cursor-pointer rounded-xl border border-transparent p-4 transition-all duration-300 hover:shadow-none flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[14px] leading-snug text-white/90 transition-colors duration-300 group-hover:text-pink-300 sm:text-[16px] font-medium">
                    {post.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

