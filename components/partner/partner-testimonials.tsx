"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// Mock data for testimonials
const TESTIMONIALS_DATA = {
  topRow: [
    {
      text: "Từ khi hợp tác với Nguyễn Vinh, tiến độ công trình của chúng tôi luôn được đảm bảo. Nguồn cung ổn định và chất lượng gạch ốp lát tuyệt vời.",
      author: "Nguyễn Văn Tuấn",
      role: "Giám đốc dự án, Kiến Trúc Việt",
      rating: "5.0",
      avatarUrl: "https://picsum.photos/seed/tuan/100/100"
    },
    {
      text: "Mức chiết khấu hấp dẫn và chính sách hỗ trợ đại lý rất chuyên nghiệp. Đội ngũ giao vận luôn đúng cam kết dù là những công trình ở tỉnh.",
      author: "Trần Thị Mai",
      role: "Chủ cửa hàng VLXD Mai Tuấn",
      rating: "5.0",
      avatarUrl: "https://picsum.photos/seed/mai/100/100"
    }
  ],
  bottomRow: [
    {
      text: "Các mẫu sơn và gạch luôn được cập nhật xu hướng mới nhất. Khách hàng của tôi rất hài lòng với chất lượng hoàn thiện từ sản phẩm của Nguyễn Vinh.",
      author: "Lê Hoàng Tách",
      role: "Thầu xây dựng dân dụng",
      rating: "5.0",
      avatarUrl: "https://picsum.photos/seed/tach/100/100"
    },
    {
      text: "Hệ thống đặt hàng trực tuyến tiện lợi, minh bạch mọi thông tin công nợ. Nguyễn Vinh thực sự là người bạn đồng hành đáng tin cậy.",
      author: "Phạm Hữu Phát",
      role: "CEO, Xây Dựng Phát Đạt",
      rating: "4.8",
      avatarUrl: "https://picsum.photos/seed/phat/100/100"
    },
    {
      text: "Chúng tôi đã tối ưu được 20% chi phí vật tư nhờ chính sách đại lý cấp 1. Giao hàng bằng xe cẩu chuyên dụng tận chân công trình rất chuyên nghiệp.",
      author: "Đặng Khoa",
      role: "Quản lý mua hàng, Delta Group",
      rating: "4.9",
      avatarUrl: "https://picsum.photos/seed/khoa/100/100"
    }
  ]
};

// Duplicate arrays to ensure Swiper loop works perfectly
const TOP_ROW = [...TESTIMONIALS_DATA.topRow, ...TESTIMONIALS_DATA.topRow, ...TESTIMONIALS_DATA.topRow];
const BOTTOM_ROW = [...TESTIMONIALS_DATA.bottomRow, ...TESTIMONIALS_DATA.bottomRow];

const QuoteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 group-hover:scale-110 transition-transform duration-500">
    <path d="M10 11L8.5 16H5.5L7 11V8H10V11ZM17 11L15.5 16H12.5L14 11V8H17V11Z" fill="#cc2424" />
  </svg>
);

const BranchLeft = () => (
  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 18.5C10.5 18.5 7.5 15.5 6 12C4.5 8.5 5 4 5 4C5 4 2.5 5.5 2 9C1.5 12.5 3 16 4.5 18C6 20 10.5 18.5 10.5 18.5Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M8 12.5C8 12.5 5.5 10.5 4.5 8C3.5 5.5 4 2 4 2C4 2 2 3.5 1.5 6C1 8.5 2 11.5 3 13C4 14.5 8 12.5 8 12.5Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 15C12 15 9.5 13 8.5 10.5C7.5 8 8 4.5 8 4.5C8 4.5 6 6 5.5 8.5C5 11 6 14 7 15.5C8 17 12 15 12 15Z" fill="currentColor"/>
  </svg>
);

const BranchRight = () => (
  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 18.5C1.5 18.5 4.5 15.5 6 12C7.5 8.5 7 4 7 4C7 4 9.5 5.5 10 9C10.5 12.5 9 16 7.5 18C6 20 1.5 18.5 1.5 18.5Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M4 12.5C4 12.5 6.5 10.5 7.5 8C8.5 5.5 8 2 8 2C8 2 10 3.5 10.5 6C11 8.5 10 11.5 9 13C8 14.5 4 12.5 4 12.5Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 15C0 15 2.5 13 3.5 10.5C4.5 8 4 4.5 4 4.5C4 4.5 6 6 6.5 8.5C7 11 6 14 5 15.5C4 17 0 15 0 15Z" fill="currentColor"/>
  </svg>
);


const RatingBadge = ({ rating }: { rating: string }) => (
  <div className="flex items-center gap-1.5 shrink-0">
    <BranchLeft />
    <span className="font-bold text-[15px] text-[#111111]">{rating}</span>
    <BranchRight />
  </div>
);

export function PartnerTestimonials() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <section className="relative w-full bg-white overflow-hidden py-12 sm:py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header section */}
        <motion.div 
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 bg-white border border-gray-100/60 rounded-md text-[9px] sm:text-[10px] font-extrabold text-[#cc2424] tracking-[0.2em] uppercase font-mono shadow-[0_2px_10px_rgba(204,36,36,0.06)] select-none mb-6">
            Ý KIẾN ĐỐI TÁC
          </span>
          <h2 className="text-[28px] sm:text-4xl md:text-[44px] font-bold tracking-[-0.035em] leading-[1.15] text-[#111111] max-w-3xl mx-auto mb-4 font-sans">
            Được tin tưởng bởi hàng trăm <br className="hidden sm:block" />
            <span className="text-[#8e8e93]">đại lý và nhà thầu</span>
          </h2>
          <p className="text-gray-500 text-[14px] sm:text-[15px] font-medium max-w-xl mx-auto leading-relaxed px-4">
            Hệ sinh thái đối tác vững mạnh trên toàn quốc. Chúng tôi luôn đồng hành cùng sự phát triển của bạn.
          </p>
        </motion.div>

        {/* Testimonials Grid Work */}
        <div className="flex flex-col gap-4 sm:gap-6">
          
          <div className="relative flex flex-col gap-4 sm:gap-6 w-full">
            {/* Edge blur/fade gradients for desktop/mobile */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Top Row Swiper */}
            <div className="w-full cursor-grab active:cursor-grabbing relative z-0">
            <Swiper
              loop={true}
              slidesPerView="auto"
              spaceBetween={16}
              freeMode={true}
              speed={7000}
              modules={[FreeMode, Mousewheel, Autoplay]}
              mousewheel={{ forceToAxis: true }}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              className="w-full !px-1 [&_.swiper-slide]:!w-[85vw] sm:[&_.swiper-slide]:!w-[48%] md:[&_.swiper-slide]:!w-[calc(50%-12px)] [&>.swiper-wrapper]:!ease-linear"
              breakpoints={{
                640: { spaceBetween: 24 }
              }}
            >
              {TOP_ROW.map((testimonial, idx) => (
                <SwiperSlide key={`top-${idx}`} className="!h-auto flex">
                  <motion.div
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 sm:pb-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col h-full hover:shadow-[0_12px_48px_rgba(204,36,36,0.08)] hover:border-[#cc2424]/10 transition-all duration-300 group"
                  >
                    <QuoteIcon />
                    <p className="text-[15px] sm:text-[16px] text-[#111111] font-medium leading-[1.6] mb-8 sm:mb-12 font-sans grow">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50/50">
                      <div className="flex items-center gap-3">
                        <Image
                          src={testimonial.avatarUrl}
                          alt={testimonial.author}
                          width={36}
                          height={36}
                          className="rounded-full bg-gray-100 min-w-[36px]"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="text-[13px] font-bold text-[#111111] leading-tight mb-0.5 whitespace-nowrap">{testimonial.author}</div>
                          <div className="text-[11px] text-gray-500 font-medium tracking-tight leading-tight line-clamp-1">{testimonial.role}</div>
                        </div>
                      </div>
                      <RatingBadge rating={testimonial.rating} />
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bottom Row Swiper */}
          <div className="w-full cursor-grab active:cursor-grabbing relative z-0">
            <Swiper
              loop={true}
              slidesPerView="auto"
              spaceBetween={16}
              freeMode={true}
              speed={8000}
              modules={[FreeMode, Mousewheel, Autoplay]}
              mousewheel={{ forceToAxis: true }}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              className="w-full !px-1 [&_.swiper-slide]:!w-[85vw] sm:[&_.swiper-slide]:!w-[30%] md:[&_.swiper-slide]:!w-[calc(33.333%-16px)] [&>.swiper-wrapper]:!ease-linear"
              breakpoints={{
                640: { spaceBetween: 24 }
              }}
            >
              {BOTTOM_ROW.map((testimonial, idx) => (
                <SwiperSlide key={`bottom-${idx}`} className="!h-auto flex">
                  <motion.div
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full bg-white border border-gray-100 rounded-3xl p-6 sm:px-8 sm:pt-8 sm:pb-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col h-full hover:shadow-[0_12px_48px_rgba(204,36,36,0.08)] hover:border-[#cc2424]/10 transition-all duration-300 group"
                  >
                    <QuoteIcon />
                    <p className="text-[14px] sm:text-[15px] text-[#111111] font-medium leading-[1.65] mb-8 sm:mb-10 font-sans grow">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50/50">
                      <div className="flex items-center gap-3">
                        <Image
                          src={testimonial.avatarUrl}
                          alt={testimonial.author}
                          width={32}
                          height={32}
                          className="rounded-full bg-gray-100 min-w-[32px]"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="text-[12px] font-bold text-[#111111] leading-tight mb-0.5 whitespace-nowrap">{testimonial.author}</div>
                          <div className="text-[10.5px] text-gray-500 font-medium tracking-tight leading-tight line-clamp-1">{testimonial.role}</div>
                        </div>
                      </div>
                      <RatingBadge rating={testimonial.rating} />
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </div>
          
          {/* Bottom Bar: Clutch Rating */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="w-full mt-2 bg-white border border-gray-100 rounded-[20px] p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-center justify-between gap-4 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/60 flex items-center justify-center font-bold text-[18px] text-[#cc2424] font-sans shadow-inner group-hover:scale-105 transition-transform duration-500">
                P
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="flex text-[#cc2424]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={13} fill="currentColor" className="stroke-none" />
                    ))}
                  </div>
                  <span className="text-[12px] font-bold text-gray-600">(hơn 2.000+)</span>
                </div>
                <div className="text-[12px] text-gray-500 font-medium">Đánh giá từ đối tác thực tế</div>
              </div>
            </div>
            
            <button className="px-5 py-2 sm:py-2.5 bg-white border border-gray-200 hover:border-[#cc2424] hover:text-[#cc2424] text-[#111111] text-xs font-semibold rounded-full tracking-wide transition-all duration-300 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.02)] active:scale-95 w-full sm:w-auto mt-2 sm:mt-0">
              Xem Tất Cả Đánh Giá
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
