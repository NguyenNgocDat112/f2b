"use client";

import { useState, Suspense, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowLeft, Building2, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import LOGO from "@/assets/images/LOGO MATHUB/Logo MATHUB FINAL-02.png"
function SearchForm({
  isMobileSearchOpen,
  setIsMobileSearchOpen,
}: {
  isMobileSearchOpen: boolean;
  setIsMobileSearchOpen: (val: boolean) => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const qVal = searchParams.get("q") || "";
  const [searchVal, setSearchVal] = useState(qVal);
  const [prevQVal, setPrevQVal] = useState(qVal);

  if (qVal !== prevQVal) {
    setPrevQVal(qVal);
    setSearchVal(qVal);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/products?q=${encodeURIComponent(searchVal)}`);
    setIsMobileSearchOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isMobileSearchOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsMobileSearchOpen(false)}
            className="sm:hidden p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
            aria-label="Đóng tìm kiếm"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
      <form 
        onSubmit={handleSubmit}
        className="relative group flex items-center w-full bg-gray-100 rounded-[4px] h-10 md:h-11 px-4 hover:bg-gray-200/70 focus-within:bg-white focus-within:shadow-[0_2px_12px_rgb(0,0,0,0.06)] focus-within:ring-1 focus-within:ring-gray-200 transition-all duration-300 text-gray-500 focus-within:text-gray-900"
      >
        <Search className="w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 transition-colors" strokeWidth={2.5} />
        <input
          type="search"
          placeholder="Tìm vật liệu..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="w-full bg-transparent border-none outline-none focus:ring-0 px-3 md:px-3 text-[14px] md:text-[15px] text-gray-900 placeholder-gray-400 overflow-hidden text-ellipsis whitespace-nowrap hidden sm:block font-medium"
        />
        <input
          type="search"
          autoFocus={isMobileSearchOpen}
          placeholder="Tìm vật liệu..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="w-full bg-transparent border-none outline-none focus:ring-0 px-2 text-[14px] text-gray-900 placeholder-gray-400 overflow-hidden text-ellipsis whitespace-nowrap sm:hidden font-medium"
        />
      </form>
    </>
  );
}

function SearchFormFallback() {
  return (
    <div className="relative group flex items-center w-full bg-gray-100 rounded-full h-10 md:h-11 px-4 text-gray-500">
      <Search className="w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 transition-colors" strokeWidth={2.5} />
      <span className="px-3 md:px-3 text-[14px] md:text-[15px] font-medium text-gray-400">Tìm vật liệu...</span>
    </div>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto h-[56px] md:h-[80px] px-2 md:px-4 lg:px-6 flex items-center justify-between w-full gap-2 md:gap-4 lg:gap-6 relative z-50 bg-white">
        
        {/* Left Section: Logo & Primary Nav */}
        <div className={`items-center w-[90px] h-[90px] shrink-0 ${isMobileSearchOpen ? 'hidden sm:flex' : 'flex'}`}>
          <Link
            href="/"
            className="flex items-center gap-0.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71a1d4] rounded-lg pr-1"
            aria-label="MatHub Home"
          >
           <Image src={LOGO.src} height={140} width={140} className="w-full h-full object-cover" alt="logo Mathub"/>
          </Link>
        </div>

        {/* Center Section: Search Bar */}
        <div className={`flex-1 min-w-0 ${isMobileSearchOpen ? 'flex' : 'hidden sm:flex'} items-center gap-2`}>
          <Suspense fallback={<SearchFormFallback />}>
            <SearchForm isMobileSearchOpen={isMobileSearchOpen} setIsMobileSearchOpen={setIsMobileSearchOpen} />
          </Suspense>
        </div>

        {/* Right Section: Nav & Auth Buttons */}
        <div className={`items-center shrink-0 gap-2 md:gap-4 ${isMobileSearchOpen ? 'hidden sm:flex' : 'flex'}`}>
          <button
            onClick={() => setIsMobileSearchOpen(true)}
            className="sm:hidden p-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
            aria-label="Mở tìm kiếm"
          >
            <Search className="w-5 h-5" />
          </button>

          <nav className="hidden lg:flex items-center font-semibold text-gray-900 text-[15px]">
            <Link
              href="/products"
              className="h-10 px-3 lg:px-4 flex items-center rounded-[4px] hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc1a26]/20"
            >
              Danh Mục Sản Phẩm
            </Link>
            <Link
              href="/advertising"
              className="h-10 px-3 lg:px-4 flex items-center rounded-[4px] hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc1a26]/20"
            >
              Quảng Cáo Doanh Nghiệp
            </Link>
            <Link
              href="/partner"
              className="group/partner h-9 px-4.5 flex items-center justify-center rounded-[4px] border border-[#cc1a26]/30 hover:border-[#cc1a26]/80 text-[#cc1a26] font-bold text-[13.5px] bg-white hover:bg-[#cc1a26]/[0.03] transition-all duration-300 mx-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc1a26]/20 shadow-[0_1px_2px_rgba(204,26,38,0.02)] hover:shadow-[0_4px_12px_rgba(204,26,38,0.08)] shrink-0 gap-1.5"
            >
              <span>Tham Gia MatHub</span>
              <ArrowUpRight className="w-4 h-4 text-[#cc1a26]/80 group-hover/partner:text-[#cc1a26] group-hover/partner:translate-x-0.5 group-hover/partner:-translate-y-0.5 transition-all duration-300" />
            </Link>
            <Link
              href="/news"
              className="h-10 px-3 lg:px-4 flex items-center rounded-[4px] hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc1a26]/20"
            >
              Tin Tức
            </Link>
            <Link
              href="/ebook"
              className="h-10 px-3 lg:px-4 flex items-center rounded-[4px] hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc1a26]/20"
            >
              E-book
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/login" className="flex items-center justify-center bg-[#cc1a26] text-white font-semibold rounded-[4px] px-3 md:px-4 h-9 md:h-10 hover:bg-[#b0131e] transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc1a26] focus-visible:ring-offset-2 whitespace-nowrap">
              Đăng Nhập
            </Link>
            <Link href="/signup" className="hidden sm:flex items-center justify-center bg-[#e9e9e9] text-gray-900 font-semibold rounded-[4px] px-3 md:px-4 h-9 md:h-10 hover:bg-[#e1e1e1] transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 whitespace-nowrap">
              Đăng Ký
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 ml-1 text-gray-900 rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-[56px] md:top-[64px] left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-4 px-6 gap-2 z-40 max-h-[calc(100vh-56px)] overflow-y-auto"
          >
            <Link
              href="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-semibold text-gray-900 text-lg py-3 hover:bg-gray-50 rounded-xl px-4 transition-colors"
            >
              Danh Mục Sản Phẩm
            </Link>
            <Link
              href="/partner"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-semibold text-gray-900 text-lg py-3 hover:bg-gray-50 rounded-xl px-4 transition-colors"
            >
              Tham Gia MatHub
            </Link>
            <Link
              href="/news"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-semibold text-gray-900 text-lg py-3 hover:bg-gray-50 rounded-xl px-4 transition-colors"
            >
              Tin Tức
            </Link>
            <Link
              href="/ebook"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-semibold text-gray-900 text-lg py-3 hover:bg-gray-50 rounded-xl px-4 transition-colors"
            >
              E-book
            </Link>
            
            <div className="sm:hidden mt-4 pt-4 border-t border-gray-100">
              <Link href="/signup" className="flex items-center justify-center w-full bg-[#e9e9e9] text-gray-900 font-semibold rounded-full px-4 h-12 hover:bg-[#e1e1e1] transition-colors text-base text-center">
                Đăng Ký
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
