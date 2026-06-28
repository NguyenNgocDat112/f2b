"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { products } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function BestSellers() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState({ scrollLeft: 0, maxScroll: 0 });
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleProductClick = (name: string) => {
    const term = name.trim();
    if (term === "Nội ngoại thất") {
      router.push("/products?category=Nội ngoại thất");
    } else if (term === "Dịch vụ nhà ở") {
      router.push("/products?category=Dịch vụ nhà ở");
    } else if (term === "Công trình dự án") {
      router.push("/products?category=Công trình - Dự án");
    } else if (term === "Nguyên vật liệu") {
      router.push("/products?category=Nguyên vật liệu");
    } else if (term === "Kiểm định - Giám sát - Pháp lý") {
      router.push("/products?category=Kiểm định - Giám sát - Pháp lý");
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
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 md:py-16">
      <div className="flex items-center justify-between mb-5 sm:mb-8 md:mb-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight"
        >
          Danh Mục Sản Phẩm
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        >
          <Link 
            href="/best-sellers" 
            className="flex items-center gap-1 text-[13px] sm:text-[15px] md:text-base text-[#1ca894] font-semibold hover:text-[#158979] transition-colors group"
          >
            Xem Tất Cả
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

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
          className={`flex overflow-x-auto pb-4 sm:pb-6 gap-3 sm:gap-4 no-scrollbar touch-pan-x select-none ${
            isDown ? "cursor-grabbing" : "cursor-grab snap-x snap-proximity"
          }`}
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={fadeInUp}
              onClick={() => handleProductClick(product.name)}
              className="group flex flex-col bg-white rounded-[10px] overflow-hidden border border-gray-100/80 hover:border-transparent hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-500 ease-[0.16,1,0.3,1] w-[160px] xs:w-[200px] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-13px)] shrink-0 snap-start cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full bg-[#f8f9fa] overflow-hidden border-b border-gray-50/50 pointer-events-none">
                <Image quality={100}
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-[0.16,1,0.3,1] group-hover:scale-[1.07] pointer-events-none"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle inner shadow for depth */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-t-[10px] z-10 pointer-events-none" />
              </div>
              
              {/* Content Container */}
              <div className="px-3 py-2.5 sm:px-4 sm:py-3 flex flex-col flex-1 bg-white pointer-events-none justify-center">
                <div className="mb-1">
                  <span className="inline-block px-1.5 py-0.5 bg-[#1ca894]/10 text-[#1ca894] text-[9px] sm:text-[10px] font-bold rounded-md tracking-wider uppercase">
                    {product.promo}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 text-[13px] sm:text-[14px] md:text-[15px] leading-snug line-clamp-2 group-hover:text-[#1ca894] transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
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
