"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter as useNextRouter } from "next/navigation";
import {  Building2, Search, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import LOGO from "@/assets/images/LOGO MATHUB/Logo MATHUB FINAL-03.png"


export function Footer() {
  const router = useNextRouter();
  const [footerSearchVal, setFooterSearchVal] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (footerSearchVal.trim()) {
      router.push(`/products?query=${encodeURIComponent(footerSearchVal.trim())}`);
    }
  };

  return (
    <footer className="w-full bg-[#fafafa] border-t border-gray-100 pt-12 pb-8">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8 mb-8">
          {/* Brand & Logo Column */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71a1d4] rounded-lg w-fit"
            >
              <div className=" w-[140px] h-12  overflow-hidden ">
                <Image 
                  src={LOGO.src}
                  width={160}
                  height={160}
                  alt="MatHub Logo"
                  className="object-cover w-full h-full"
                />
              </div>
       
            </Link>
            <p className="text-gray-400 text-[13px] leading-relaxed max-w-[240px] font-normal">
              Nền tảng giải pháp vật liệu xây dựng toàn diện, kết nối nhà cung cấp uy tín với mọi công trình.
            </p>

            {/* Premium Compact Search with 8px Border Radius */}
            <div className="mt-2 max-w-[220px] w-full">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center group">
                <input
                  type="text"
                  placeholder="Tìm vật liệu..."
                  value={footerSearchVal}
                  onChange={(e) => setFooterSearchVal(e.target.value)}
                  className="w-full pl-3.5 pr-10 py-2 text-[12.5px] bg-white border border-gray-200 rounded-[4px] focus:outline-none focus:border-[#cc1a26] focus:ring-4 focus:ring-[#cc1a26]/10 transition-all duration-300 text-gray-800 placeholder:text-gray-400 font-normal shadow-sm hover:border-gray-300"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-1 p-1.5 text-gray-400 hover:text-[#cc1a26] transition-colors duration-200 focus:outline-none cursor-pointer group-hover:scale-105"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* PRODUCT Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-gray-900 text-[12px] tracking-[0.12em] uppercase mb-3.5 font-sans">
              Sản Phẩm
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="inline-block text-gray-500 hover:text-gray-900 hover:translate-x-1 text-[13px] transition-all duration-300 font-normal">
                  Gạch Lát Nền
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-gray-500 hover:text-gray-900 hover:translate-x-1 text-[13px] transition-all duration-300 font-normal">
                  Cửa Cao Cấp
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-gray-500 hover:text-gray-900 hover:translate-x-1 text-[13px] transition-all duration-300 font-normal">
                  Hàng Rào Thiết Kế
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-gray-500 hover:text-gray-900 hover:translate-x-1 text-[13px] transition-all duration-300 font-normal">
                  Gạch Bóng Kiếng
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* PAYMENT Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-gray-900 text-[12px] tracking-[0.12em] uppercase mb-3.5 font-sans">
              Thanh Toán
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <span className="text-gray-400 text-[13px] font-normal">Chuyển Khoản Ngân Hàng</span>
              </li>
              <li>
                <span className="text-gray-400 text-[13px] font-normal">Ví Điện Tử MoMo / ZaloPay</span>
              </li>
              <li>
                <span className="text-gray-400 text-[13px] font-normal">Thanh Toán Khi Nhận Hàng (COD)</span>
              </li>
              <li>
                <span className="text-gray-400 text-[13px] font-normal">Thẻ Visa / Mastercard</span>
              </li>
            </ul>
          </motion.div>

          {/* COMPANY Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-gray-900 text-[12px] tracking-[0.12em] uppercase mb-3.5 font-sans">
              Về Chúng Tôi
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="inline-block text-gray-500 hover:text-gray-900 hover:translate-x-1 text-[13px] transition-all duration-300 font-normal">
                  Giới thiệu doanh nghiệp
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-gray-500 hover:text-gray-900 hover:translate-x-1 text-[13px] transition-all duration-300 font-normal">
                  Tin tức & Xu hướng
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-gray-500 hover:text-gray-900 hover:translate-x-1 text-[13px] transition-all duration-300 font-normal">
                  Hỏi đáp thường gặp (FAQ)
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* CONTACT Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-gray-900 text-[12px] tracking-[0.12em] uppercase mb-3.5 font-sans">
              Liên Hệ
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:admin@vatlieuxaydung.com" className="text-gray-500 hover:text-gray-900 text-[13px] transition-colors duration-300 break-all font-normal">
                admin@vatlieuxaydung.com
              </a>
              <a href="tel:+84822123456" className="text-gray-500 hover:text-gray-900 text-[13px] transition-colors duration-300 font-normal">
                +84 822 123 456
              </a>
              <button className="bg-gray-900 hover:bg-black text-white font-medium text-[11.5px] tracking-wider px-4 py-2 rounded-[4px] w-fit transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 mt-1 uppercase font-semibold flex items-center gap-1.5 cursor-pointer">
                <span>Liên Hệ Tư Vấn</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={fadeInUp} className="pt-5 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-[12px] font-normal">
            © {new Date().getFullYear()} Vật Liệu Xây Dựng Cao Cấp. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-gray-700 text-[12.5px] transition-colors font-normal">
              Chính Sách Bảo Mật
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-700 text-[12.5px] transition-colors font-normal">
              Điều Khoản Sử Dụng
            </Link>
            
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
