import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Building, Factory, Briefcase, Users, Award, Calendar } from "lucide-react";
import { Supplier } from "@/lib/data-suppliers";
import { BrandLogo } from "./BrandLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

export const SupplierCard = React.memo(({ supplier, idx }: { supplier: Supplier; idx: number }) => {
  const hasGenericRep = !supplier.representative || 
    /bộ phận|phòng|ban|cskh|đại diện|kinh doanh/i.test(supplier.representative) ||
    supplier.representative.includes("@");
  const representativeClean = hasGenericRep ? "" : supplier.representative;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1], delay: (idx % 4) * 0.08 }}
      className="bg-white border border-gray-200/90 p-5 shadow-none md:shadow-[0_2px_12px_rgba(0,0,0,0.02)] md:hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:border-gray-300 transition-all duration-300 flex flex-col gap-1 rounded-[6px] relative group/card"
      id={`supplier-card-${supplier.id}`}
    >
      <div className="flex flex-col lg:flex-row gap-4 w-full">
      {/* Left Column Component: Trademark Logo square */}
      <div className="flex flex-col w-full lg:w-[130px] shrink-0 items-center justify-start gap-2 mt-1">
        <div className="w-full flex items-center justify-center">
          <BrandLogo 
            logo={supplier.logo} 
            brandLogoText={supplier.brandLogoText} 
            brandSubText={supplier.brandSubText} 
          />
        </div>
      </div>

      {/* Right Details Column Component */}
      <div className="flex-grow flex flex-col min-w-0 pr-1">
        {/* Title */}
        <h3 className="text-[16px] font-serif font-black text-[#cc1a26] hover:text-[#b81722] mb-2 leading-snug pr-4 transition-colors">
          {supplier.name}
        </h3>

        {/* Divider Line under Title */}
        <div className="w-full h-[1px] bg-gray-200/80 mb-1" />

        {/* 2-Column Info Table with matching row heights on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 text-[11.5px] sm:text-[12px] font-sans">
          
          {/* Row 1: Khu Vực & Mô Hình */}
          <div className="flex flex-row items-start group/info lg:border-r border-gray-200/85 lg:pr-3 py-0.5">
            <div className="w-[85px] lg:w-[90px] shrink-0 font-bold flex items-center gap-1.5 text-black uppercase tracking-wider text-[10px] min-h-[20px]">
              <MapPin className="w-[13px] h-[13px] shrink-0" strokeWidth={2.5}/>
              <span className="mt-[1px]">Khu Vực</span>
            </div>
            <div className="font-normal text-black leading-5 break-words flex-1 pl-2">{supplier.location}</div>
          </div>
          <div className="flex flex-row items-start group/info lg:pl-3 py-0.5">
            <div className="w-[85px] lg:w-[90px] shrink-0 font-bold flex items-center gap-1.5 text-black uppercase tracking-wider text-[10px] min-h-[20px]">
              <Briefcase className="w-[13px] h-[13px] shrink-0" strokeWidth={2.5}/>
              <span className="mt-[1px]">Mô Hình</span>
            </div>
            <div className="font-normal text-black leading-5 break-words flex-1 pl-2">{supplier.productsScale}</div>
          </div>

          {/* Row 2: Địa Chỉ & Quy Mô */}
          <div className="flex flex-row items-start group/info lg:border-r border-gray-200/85 lg:pr-3 py-0.5">
            <div className="w-[85px] lg:w-[90px] shrink-0 font-bold flex items-center gap-1.5 text-black uppercase tracking-wider text-[10px] min-h-[20px]">
              <Building className="w-[13px] h-[13px] shrink-0" strokeWidth={2.5}/>
              <span className="mt-[1px]">Địa Chỉ</span>
            </div>
            <div className="font-normal text-black leading-5 break-words flex-1 pl-2" title={supplier.address}>
              {supplier.address}
            </div>
          </div>
          <div className="flex flex-row items-start group/info lg:pl-3 py-0.5">
            <div className="w-[85px] lg:w-[90px] shrink-0 font-bold flex items-center gap-1.5 text-black uppercase tracking-wider text-[10px] min-h-[20px]">
              <Factory className="w-[13px] h-[13px] shrink-0" strokeWidth={2.5}/>
              <span className="mt-[1px]">Quy Mô</span>
            </div>
            <div className="font-normal text-black leading-5 whitespace-pre-line break-words flex-1 pl-2">
              {supplier.scaleDetails}
            </div>
          </div>

          {/* Row 3: SĐT & Vai Trò */}
          <div className="flex flex-row items-start group/info lg:border-r border-gray-200/85 lg:pr-3 py-0.5">
            <div className="w-[85px] lg:w-[90px] shrink-0 font-bold flex items-center gap-1.5 text-black uppercase tracking-wider text-[10px] min-h-[20px]">
              <Phone className="w-[13px] h-[13px] shrink-0" strokeWidth={2.5}/>
              <span className="mt-[1px]">SĐT</span>
            </div>
            <div className="font-normal text-black leading-5 break-words flex-1 pl-2">
              {supplier.phone}{representativeClean ? ` - ${representativeClean}` : ""}
            </div>
          </div>
          <div className="flex flex-row items-start group/info lg:pl-3 py-0.5">
            <div className="w-[85px] lg:w-[90px] shrink-0 font-bold flex items-center gap-1.5 text-black uppercase tracking-wider text-[10px] min-h-[20px]">
              <Award className="w-[13px] h-[13px] shrink-0" strokeWidth={2.5}/>
              <span className="mt-[1px]">Vai Trò</span>
            </div>
            <div className="font-normal text-black leading-5 break-words flex-1 pl-2">{supplier.badge}</div>
          </div>

          {/* Row 4: Gmail & Thành Lập */}
          <div className="flex flex-row items-start group/info lg:border-r border-gray-200/85 lg:pr-3 py-0.5">
            <div className="w-[85px] lg:w-[90px] shrink-0 font-bold flex items-center gap-1.5 text-black uppercase tracking-wider text-[10px] min-h-[20px]">
              <Mail className="w-[13px] h-[13px] shrink-0" strokeWidth={2.5}/>
              <span className="mt-[1px]">Gmail</span>
            </div>
            <div className="font-normal text-black leading-5 break-all flex-1 pl-2 hover:text-[#cc1a26] transition-colors cursor-pointer" title={supplier.email}>
              {supplier.email}
            </div>
          </div>
          <div className="flex flex-row items-start group/info lg:pl-3 py-0.5">
            <div className="w-[85px] lg:w-[90px] shrink-0 font-bold flex items-center gap-1.5 text-black uppercase tracking-wider text-[10px] min-h-[20px]">
              <Calendar className="w-[13px] h-[13px] shrink-0" strokeWidth={2.5}/>
              <span className="mt-[1px]">Thành Lập</span>
            </div>
            <div className="font-normal text-black leading-5 break-words flex-1 pl-2">
              {typeof supplier.established === "number" ? `Năm ${supplier.established}` : supplier.established}
            </div>
          </div>

        </div>
      </div>
      </div>

      {/* Bottom section: Action buttons and Image Slider */}
      <div className="flex flex-col lg:flex-row gap-4 w-full lg:mt-0">
        {/* Action Buttons (Left) */}
        <div className="flex flex-col gap-2 w-full lg:w-[130px] shrink-0 justify-center lg:justify-start mt-2">
          <motion.a
            href={supplier.zaloUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#cc1a26] hover:bg-[#b81722] text-white font-black text-[10px] xl:text-[10.5px] py-3 px-1 rounded-[4px] transition-all shadow-none md:shadow-sm truncate text-center"
          >
            Liên Hệ Zalo
          </motion.a>
          <motion.a 
            href={supplier.websiteUrl ? `https://${supplier.websiteUrl}` : "#"}
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#cc1a26] hover:bg-[#b81722] text-white font-black text-[10px] xl:text-[10.5px] py-3 px-1 rounded-[4px] transition-all shadow-none md:shadow-sm truncate text-center"
            title={supplier.websiteUrl || "Website"}
          >
            Website
          </motion.a>
        </div>

        {/* Image Slider & Divider (Right) */}
        <div className="flex-grow flex flex-col min-w-0">
          {/* Bottom Horizontal Image List with Swiper */}
          <div className="relative group/slider-container w-full h-[120px]">
            <Swiper
              modules={[FreeMode, Scrollbar, Mousewheel]}
              spaceBetween={15}
              slidesPerView={2.2}
              breakpoints={{
                450: { slidesPerView: 2.8, spaceBetween: 15 },
                640: { slidesPerView: 3.5, spaceBetween: 15 },
                768: { slidesPerView: 4.2, spaceBetween: 15 },
                1024: { slidesPerView: 5, spaceBetween: 15 },
              }}
              freeMode={true}
              scrollbar={{ 
                draggable: true,
                hide: false,
              }}
              mousewheel={{
                forceToAxis: true,
              }}
              className="w-full h-full !pt-[8px]"
            >
              {supplier.productShowcase.map((p, pIdx) => (
                <SwiperSlide key={pIdx}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: 0.1 + pIdx * 0.05, duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <div className="group/thumb cursor-pointer w-full flex flex-col h-full hover:opacity-90 transition-opacity">
                      <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-200/80 rounded-[4px] group-hover/thumb:border-gray-300 group-hover/thumb:shadow-md transition-all duration-300">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          unoptimized
                          draggable={false}
                          className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-[11.5px] text-gray-800 font-medium font-serif text-center mt-1 w-full block leading-snug px-1 group-hover/thumb:text-[#cc1a26] transition-colors truncate" title={p.name}>
                        {pIdx + 1}. {p.name}
                      </span>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
SupplierCard.displayName = "SupplierCard";
