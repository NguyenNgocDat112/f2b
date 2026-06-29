"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { categories } from "@/lib/data";
import { staggerContainer, fadeInUp, revealLeft, revealRight, scaleUp } from "@/lib/animations";

export function ProductCategories() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState({ scrollLeft: 0, maxScroll: 0 });
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleCategoryClick = (name: string) => {
    const term = name.trim();
    if (term === "Gạch Ốp Lát") {
      router.push("/products?category=Nguyên vật liệu&subCategory=Gạch - Đá ốp lát - Gốm sứ");
    } else if (term === "Sơn & Chống Thấm") {
      router.push("/products?category=Nguyên vật liệu&subCategory=Chống thấm - Màng kỹ thuật");
    } else if (term === "Sắt Thép & Xi Măng") {
      router.push("/products?category=Nguyên vật liệu&subCategory=Sắt - Thép - Tôn - Kim loại");
    } else if (term === "Thiết Bị Vệ Sinh") {
      router.push("/products?category=Nguyên vật liệu&query=thiết bị vệ sinh");
    } else {
      router.push(`/products?query=${encodeURIComponent(term)}`);
    }
  };

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setScrollRange({
      scrollLeft: el.scrollLeft,
      maxScroll: el.scrollWidth - el.clientWidth,
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    // Recalculate on mount/resize
    window.addEventListener("resize", handleScroll);
    const timer = setTimeout(handleScroll, 500); // safety fallback

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Mouse drag-to-scroll handlers
  const onMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    setIsDown(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  const onMouseLeaveOrUp = () => {
    setIsDown(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const el = containerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.6; // Scroll speed modifier
    el.scrollLeft = scrollLeftState - walk;
  };

  const percentage = scrollRange.maxScroll > 0 
    ? scrollRange.scrollLeft / scrollRange.maxScroll 
    : 0;

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      {/* Top Wide Banner */}
      <motion.div
        variants={scaleUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full relative aspect-[21/9] sm:aspect-[3.5/1] lg:aspect-[4.5/1] bg-gray-100 rounded-[4px] overflow-hidden mb-8 sm:mb-12 md:mb-14 shadow-sm"
      >
        <Image quality={100}
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=100&w=3840"
          alt="Thiết kế nội thất hiện đại"
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </motion.div>

      {/* Heading Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-10 items-end">
        <motion.div
          variants={revealLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-[#1e1e24] tracking-tight leading-[1.2]">
            Đa Dạng Danh Mục<br className="hidden sm:block" /> Sản Phẩm
          </h2>
        </motion.div>
        
        <motion.div
          variants={revealRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-6"
        >
          <p className="text-gray-500 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed md:leading-[1.6] max-w-lg md:ml-auto">
            Chúng tôi cung cấp đầy đủ các loại vật liệu xây dựng từ cơ bản đến hoàn thiện, 
            đảm bảo chất lượng cao nhất cho mọi công trình của bạn.
          </p>
        </motion.div>
      </div>

      {/* Categories Grid with horizontal scrolling on mobile and drag on desktop */}
      <div className="relative group/scroll-container">
        <motion.div 
          ref={containerRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeaveOrUp}
          onMouseUp={onMouseLeaveOrUp}
          onMouseMove={onMouseMove}
          className={`flex overflow-x-auto pb-3 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 no-scrollbar snap-x snap-mandatory scroll-smooth touch-pan-x select-none ${
            isDown ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id} 
              variants={fadeInUp}
              onClick={() => handleCategoryClick(category.name)}
              className="flex flex-col group cursor-pointer w-[38vw] xs:w-[28vw] sm:w-auto shrink-0 snap-start"
            >
              <div className="relative aspect-[4/4.5] w-full rounded-[4px] overflow-hidden mb-2.5 sm:mb-3.5 bg-gray-100 shadow-sm transition-shadow duration-700 ease-[0.16,1,0.3,1] group-hover:shadow-[0_12px_24px_rgb(0,0,0,0.08)] pointer-events-none">
                <Image quality={100}
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-[0.16,1,0.3,1] group-hover:scale-103 pointer-events-none"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 ease-[0.16,1,0.3,1]" />
                {/* Inner ring for refinement */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[4px] z-10" />
              </div>
              <h3 className="text-center font-bold text-[#1e1e24] text-[12.5px] sm:text-[15px] md:text-[16px] lg:text-[17.5px] group-hover:text-[#1ca894] transition-colors duration-300 px-1 truncate pointer-events-none">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand Accent Colored Scroll Progress Bar (Only visible on mobile and small tablet views) */}
        {scrollRange.maxScroll > 0 && (
          <div className="sm:hidden flex justify-center items-center mt-3 pb-2">
            <div className="relative w-20 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 bottom-0 left-0 bg-[#1ca894] rounded-full transition-all duration-100 ease-out"
                style={{ 
                  width: "40%", 
                  transform: `translateX(${percentage * 150}%)` 
                }} 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

