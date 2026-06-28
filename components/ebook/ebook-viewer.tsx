"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import HTMLFlipBook from "react-pageflip";
import { 
  X, Crop, Printer, FileText, Share2, SkipBack, ChevronLeft, 
  ChevronRight, SkipForward, LayoutGrid, Download, Search, 
  Edit3, Bookmark, Heart, FolderArchive, RotateCcw, 
  HelpCircle, Maximize, Minimize
} from "lucide-react";
import Image from "next/image";

interface EbookViewerProps {
  isOpen: boolean;
  onClose: () => void;
  ebookData: any;
}

// Internal page designs for the magazine feel
const PageContent = ({ pageNum, ebookData }: { pageNum: number, ebookData: any }) => {
  if (pageNum === 1) {
    // Cover Page
    return (
      <div className="w-full h-full relative bg-white" style={{ containerType: 'inline-size' }}>
        {/* Full Image */}
        <div className="absolute top-0 w-full h-[60%]">
            <Image 
              src={ebookData?.image || "https://picsum.photos/seed/100/800/1131"} 
              alt="Cover" 
              fill 
              className="object-cover"
              unoptimized
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/5"></div>
        </div>
        
        {/* Logo tag */}
        <div className="absolute top-0 left-[10%] w-[12cqw] h-[14cqw] bg-[#cc1a26] text-white flex items-center justify-center font-bold text-[6cqw] shadow-md z-10 rounded-b-[2cqw]">
          nv
        </div>
        
        {/* Bottom Content Area */}
        <div className="absolute bottom-0 w-full h-[40%] bg-white px-[8cqw] py-[6cqw] flex flex-col justify-center border-t-[1cqw] border-[#cc1a26]">
          <div className="mt-auto">
            <span className="text-[#cc1a26] text-[2.5cqw] font-black tracking-[0.2em] uppercase mb-[2cqw] inline-block">
              {ebookData?.category || "Vật Liệu Khuyên Dùng"}
            </span>
            <h1 className="text-[7cqw] lg:text-[8cqw] font-black font-serif leading-[1.05] text-gray-900 uppercase tracking-[-0.02em] line-clamp-3">
              {ebookData?.title || "GẠCH ỐP LÁT HIỆN ĐẠI"}
            </h1>
          </div>
          <div className="mt-auto flex justify-between items-end border-t border-gray-100 pt-[4cqw]">
            <p className="text-gray-500 font-sans font-semibold text-[2.2cqw] tracking-[0.1em] uppercase">NGUYỄN VINH</p>
            <p className="text-gray-300 font-mono text-[3cqw] font-bold">{pageNum < 10 ? `0${pageNum}` : pageNum}</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (pageNum === 2) {
    // Inside Cover - Editorial Intro
    return (
      <div className="w-full h-full bg-[#f8f9fa] flex flex-col justify-center p-[10cqw] relative overflow-hidden" style={{ containerType: 'inline-size' }}>
        <div className="absolute top-[-10cqw] left-[-5cqw] text-[#ee5433]/5 font-serif text-[40cqw] font-black tracking-tighter">
          GIỚI THIỆU
        </div>
        
        <div className="relative z-10">
          <h2 className="text-[#cc1a26] font-bold text-[3cqw] tracking-[0.2em] uppercase mb-[6cqw]">
            Lời Tựa
          </h2>
          
          <h3 className="font-serif text-[8cqw] leading-[1.1] text-gray-900 mb-[4cqw] italic font-medium">
            &ldquo;Không gian sống là tấm phản chiếu chân thực nhất của bản ngã.&rdquo;
          </h3>
          
          <div className="w-[10cqw] h-[0.5cqw] bg-gray-300 mb-[6cqw]"></div>
          
          <p className="text-[3cqw] text-gray-600 leading-[1.8] text-justify mb-[4cqw]">
            Trong ấn bản đặc biệt Vol. 01 này, Nguyễn Vinh tự hào giới thiệu bộ sưu tập vật liệu ốp lát mang tính thời đại. Chúng tôi tập trung vào sự cân bằng giữa tính thẩm mỹ nguyên bản và công năng siêu việt, kiến tạo nên những công trình không chỉ bền vững mà còn đầy chất thơ.
          </p>
          <p className="text-[3cqw] text-gray-600 leading-[1.8] text-justify">
            Từng viên gạch, từng hệ thống thi công đều là thanh âm của sự hoàn mỹ mà chúng tôi khát khao mang đến cho dự án của bạn.
          </p>
          
          <div className="mt-[8cqw] flex items-center gap-[4cqw]">
            <div className="w-[12cqw] h-[12cqw] rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm">
              <span className="font-bold text-[4cqw] text-[#cc1a26]">nv</span>
            </div>
            <div>
              <p className="font-bold text-[3cqw] text-gray-900 uppercase tracking-widest">Ban Biên Tập</p>
              <p className="text-[2.5cqw] font-serif italic text-gray-500">Tháng 06, 2026</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (pageNum === 3) {
    // Table of Contents
    return (
      <div className="w-full h-full bg-white px-[10cqw] py-[12cqw] font-sans" style={{ containerType: 'inline-size' }}>
        <h2 className="text-[7cqw] font-black text-gray-900 mb-[2cqw] uppercase tracking-wide">Mục Lục</h2>
        <div className="w-[12cqw] h-[0.5cqw] bg-[#cc1a26] mb-[10cqw]"></div>
        
        <div className="space-y-[6cqw]">
          {[
            { title: "Tổng Quan Thị Trường", page: "04" },
            { title: "Năng Lực Cung Ứng Vật Liệu", page: "08" },
            { title: "Thi Công Lắp Đặt Tiên Tiến", page: "12" },
            { title: "Kiểm Định Chất Lượng Quốc Tế", page: "18" },
            { title: "Chiến Lược Tối Ưu Chi Phí", page: "24" },
            { title: "Tầm Nhìn & Kế Hoạch 2030", page: "30" }
          ].map((item, i) => (
            <div key={i} className="flex items-center group cursor-pointer hover:text-[#cc1a26] transition-colors">
              <span className="text-[3.5cqw] font-semibold flex-1 border-b-[0.3cqw] border-dotted border-gray-300 group-hover:border-[#cc1a26] pb-[1cqw] mr-[4cqw] line-clamp-1">
                {item.title}
              </span>
              <span className="font-bold text-[4cqw] font-serif text-gray-400 group-hover:text-[#cc1a26]">{item.page}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Regular Content Pages
  const images = [
    "https://picsum.photos/seed/factory/800/1131",
    "https://picsum.photos/seed/materials/800/1131",
    "https://picsum.photos/seed/worker/800/1131",
    "https://picsum.photos/seed/living/800/1131",
    "https://picsum.photos/seed/bathroom/800/1131",
    "https://picsum.photos/seed/kitchen/800/1131",
    "https://picsum.photos/seed/outdoor/800/1131"
  ];

  const img = images[pageNum % images.length];

  if (pageNum % 2 === 0) {
    // Left Page (Even) - TEXT CONTENT
    return (
      <div className="w-full h-full bg-[#fcfcfc] flex flex-col font-sans text-gray-800 relative" style={{ containerType: 'inline-size' }}>
        
        {/* Header */}
        <div className="w-full shrink-0 flex justify-between items-center px-[6cqw] py-[4cqw] border-b border-gray-100 z-10 bg-white/80 backdrop-blur-sm">
           <span className="text-[#cc1a26] font-bold text-[2cqw] tracking-[0.2em] uppercase">Khám Phá Vật Liệu</span>
           <span className="text-gray-400 font-mono text-[2cqw]">{pageNum < 10 ? `0${pageNum}` : pageNum}</span>
        </div>
        
        {/* Content Flow */}
        <div className="flex-1 flex flex-col px-[6cqw] py-[4cqw] z-10 justify-center relative">
          {/* Large Decorative Number */}
          <div className="absolute top-[0cqw] left-[6cqw] opacity-[0.03] pointer-events-none font-sans text-[35cqw] font-black leading-none text-black overflow-hidden z-[-1]">
            {pageNum < 10 ? `0${pageNum}` : pageNum}
          </div>
          
          <div className="shrink-0 mb-[4cqw]">
            <h2 className="text-[5.5cqw] font-black tracking-tight text-gray-900 leading-[1.1] mb-[2cqw] uppercase">
              KIẾN TẠO DẤU ẤN<br/><span className="text-[#cc1a26]">ĐƯƠNG ĐẠI</span>
            </h2>
            <div className="w-[12cqw] h-[0.5cqw] bg-[#cc1a26]"></div>
          </div>

          <div className="text-[2.5cqw] font-serif italic text-gray-700 leading-[1.6] mb-[4cqw] border-l-[0.4cqw] border-[#cc1a26] pl-[3cqw] py-[0.5cqw] shrink-0">
            &ldquo;Sự kết hợp hoàn hảo giữa thiên nhiên và kiến trúc, mang đến trải nghiệm không gian sống vượt thời gian.&rdquo;
          </div>

          <div className="flex-1 min-h-[0] overflow-y-auto pr-[2cqw] custom-scrollbar scrollbar-hide">
              <p className="text-[2.2cqw] leading-[1.7] text-gray-600 mb-[4cqw] font-medium text-justify">
                Vật liệu ốp lát không chỉ là nền tảng của một công trình vững chắc, mà còn là linh hồn của kiến trúc hiện đại. Được chọn lọc từ những nguồn nguyên liệu tốt nhất trên thế giới, sản phẩm của chúng tôi mang đến vẻ đẹp vĩnh cửu và đặc tính kỹ thuật vượt trội.
              </p>
              
              <div className="space-y-[3cqw]">
                <div className="bg-white p-[3cqw] rounded-lg border border-gray-100 shadow-sm flex items-start gap-[2.5cqw]">
                  <div className="w-[5cqw] h-[5cqw] bg-red-50 text-[#cc1a26] rounded flex items-center justify-center shrink-0 font-bold text-[2.2cqw]">01</div>
                  <div className="flex-1 pt-[0.2cqw]">
                    <h4 className="font-bold text-[2.4cqw] text-gray-900 uppercase mb-[0.8cqw] tracking-tight">Độ Bền Kéo Dài</h4>
                    <p className="text-[2cqw] text-gray-500 leading-relaxed text-justify">Chống mài mòn cao cấp (Cấp V), giữ màu sắc tự nhiên không rạn nứt hay ố màu theo năm tháng.</p>
                  </div>
                </div>
                
                <div className="bg-white p-[3cqw] rounded-lg border border-gray-100 shadow-sm flex items-start gap-[2.5cqw]">
                   <div className="w-[5cqw] h-[5cqw] bg-red-50 text-[#cc1a26] rounded flex items-center justify-center shrink-0 font-bold text-[2.2cqw]">02</div>
                  <div className="flex-1 pt-[0.2cqw]">
                    <h4 className="font-bold text-[2.4cqw] text-gray-900 uppercase mb-[0.8cqw] tracking-tight">Thi Công Dễ Dàng</h4>
                    <p className="text-[2cqw] text-gray-500 leading-relaxed text-justify">Kích thước chuẩn xác, bề mặt tối ưu giúp tiết kiệm thời gian thi công thực tế cho công trình lớn.</p>
                  </div>
                </div>
                
                <div className="bg-white p-[3cqw] rounded-lg border border-gray-100 shadow-sm flex items-start gap-[2.5cqw]">
                   <div className="w-[5cqw] h-[5cqw] bg-red-50 text-[#cc1a26] rounded flex items-center justify-center shrink-0 font-bold text-[2.2cqw]">03</div>
                  <div className="flex-1 pt-[0.2cqw]">
                    <h4 className="font-bold text-[2.4cqw] text-gray-900 uppercase mb-[0.8cqw] tracking-tight">Mã & Quy Cách</h4>
                    <p className="text-[2cqw] text-gray-500 leading-relaxed font-mono">PK-SERIES-{pageNum} | 120 × 240 × 1.2 cm</p>
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full shrink-0 flex justify-between items-center px-[6cqw] py-[3cqw] border-t border-gray-100 bg-white z-10 mt-auto">
           <div className="flex gap-[4cqw] text-[1.8cqw] text-[#cc1a26] font-semibold tracking-widest uppercase">
              <span>nguyenvinhvlxd.com</span>
           </div>
           <div className="flex items-center font-black text-[1.8cqw] uppercase text-gray-800 tracking-widest">
              Nguyễn Vinh
           </div>
        </div>
      </div>
    );
  } else {
    // Right Page (Odd) - FULL IMAGE CONTENT
    return (
      <div className="w-full h-full bg-gray-100 flex flex-col relative" style={{ containerType: 'inline-size' }}>
        <div className="absolute inset-0 z-0">
          <Image src={img} fill className="object-cover" alt="Detail view" unoptimized />
          {/* Gradient overlays for cinematic effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>
        </div>
        
        {/* Top Header info matching left page for consistency */}
        <div className="w-full shrink-0 flex justify-between items-center px-[6cqw] py-[4cqw] z-20">
           <span className="text-white/90 font-bold text-[2cqw] tracking-[0.2em] uppercase drop-shadow-md">Tầm Nhìn Mới</span>
           <span className="text-white/60 font-mono text-[2cqw] drop-shadow-md">{pageNum < 10 ? `0${pageNum}` : pageNum}</span>
        </div>

        <div className="flex-1"></div>

        {/* Image Caption at bottom right */}
        <div className="p-[6cqw] z-20 flex flex-col items-end text-right">
          <div className="bg-[#cc1a26] text-white text-[1.8cqw] font-bold px-[2cqw] py-[0.8cqw] uppercase tracking-widest mb-[2cqw]">
            VẬT LIỆU BỀN VỮNG
          </div>
          <h3 className="text-white font-serif italic text-[5cqw] leading-[1.1] drop-shadow-lg mb-[1cqw]">
            Nội Thất <br /> Tiện Nghi
          </h3>
          <p className="text-white/80 font-sans text-[2.2cqw] max-w-[60%] drop-shadow-md leading-relaxed">
            Kiến trúc xanh trong từ hạt vật liệu nhỏ nhất, tôn vinh chuẩn mực an toàn cho mọi gia đình.
          </p>
        </div>
      </div>
    );
  }
};

// Page wrapper for react-pageflip
const Page = React.forwardRef<HTMLDivElement, { number: number, ebookData: any }>((props, ref) => {
  return (
    <div className={`bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] overflow-hidden relative ${props.number === 1 || props.number === 16 ? '' : 'border border-gray-100'}`} ref={ref}>
      
      {/* Book spine inner shadow for realistic bending */}
      <div className={`absolute top-0 bottom-0 w-10 z-50 pointer-events-none ${props.number % 2 === 0 ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} from-black/10 via-black/5 to-transparent mix-blend-multiply`}></div>

      {props.number === 16 ? (
        // Back Cover
        <div className="w-full h-full bg-[#111111] text-white flex flex-col items-center justify-center p-[10cqw]" style={{ containerType: 'inline-size' }}>
            <div className="w-[15cqw] h-[15cqw] rounded-full bg-[#cc1a26] flex items-center justify-center font-bold text-[6cqw] text-white mb-[6cqw]">
              nv
            </div>
            <h3 className="text-[6cqw] font-serif font-black tracking-tight mb-[2cqw] text-center">Nguyễn Vinh</h3>
            <p className="text-gray-400 text-[3.5cqw] mb-[12cqw] text-center">Dẫn đầu giải pháp vật liệu & thi công</p>
            <p className="text-[#888] text-[2.5cqw] uppercase tracking-widest text-center">www.nguyenvinhvlxd.com</p>
        </div>
      ) : (
        <PageContent pageNum={props.number} ebookData={props.ebookData} />
      )}
      
      {/* Overlay gradient for page fold effect */}
    </div>
  );
});
Page.displayName = "Page";

// Use 16 pages total
const TOTAL_PAGES = 16;
const MOCK_PAGES_ARRAY = Array.from({ length: TOTAL_PAGES });

export function EbookViewer({ isOpen, onClose, ebookData }: EbookViewerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const flipBookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  if (!isOpen || !ebookData) return null;

  const handleNext = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const handlePrev = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const handleFirst = () => {
    if (flipBookRef.current) {
      // Nhảy lùi 2 trang (2 indices)
      const targetPage = Math.max(0, currentPage - 1 - 2);
      flipBookRef.current.pageFlip().flip(targetPage);
    }
  };

  const handleLast = () => {
    if (flipBookRef.current) {
      // Nhảy tới 2 trang (2 indices)
      const targetPage = Math.min(TOTAL_PAGES - 1, currentPage - 1 + 2);
      flipBookRef.current.pageFlip().flip(targetPage);
    }
  };

  const onPage = (e: any) => {
    setCurrentPage(e.data + 1);
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex flex-col font-sans bg-white"
      >
        {/* Top Premium Toolbar - Light Theme */}
        <div className="h-[56px] bg-white border-b border-gray-200 flex items-center justify-between px-3 md:px-6 shadow-sm z-20 shrink-0">
          
          {/* Left: Branding & Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#cc1a26] text-white flex items-center justify-center font-bold text-sm shadow-[0_2px_8px_rgba(204,26,38,0.3)] rounded-lg">
              nv
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-gray-900 font-bold text-[14px] tracking-tight leading-tight line-clamp-1 max-w-[300px]">
                {ebookData.title}
              </span>
              <span className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase mt-0.5">
                Nguyễn Vinh E-Reader
              </span>
            </div>
          </div>

          {/* Center: Controls Toolbar */}
          <div className="flex items-center gap-0.5 md:gap-1.5">
            <div className="hidden lg:flex items-center gap-1 mr-2">
              <button className="p-2 text-gray-500 hover:text-[#cc1a26] hover:bg-red-50 rounded transition-colors" title="Export PDF">
                <FileText size={18} strokeWidth={2.5}/>
              </button>
              <button className="p-2 text-gray-500 hover:text-[#cc1a26] hover:bg-red-50 rounded transition-colors" title="Share">
                <Share2 size={18} strokeWidth={2.5}/>
              </button>
            </div>
            
            <div className="w-px h-5 bg-gray-200 mx-1 hidden lg:block"></div>

            {/* Pagination Controls */}
            <button onClick={handleFirst} className="p-1.5 md:p-2 text-gray-600 hover:text-[#cc1a26] hover:bg-red-50 rounded disabled:opacity-30 disabled:hover:bg-transparent transition-colors" disabled={currentPage <= 2} title="Trang đầu">
              <SkipBack size={18} strokeWidth={2.5}/>
            </button>
            <button onClick={handlePrev} className="p-1.5 md:p-2 text-gray-600 hover:text-[#cc1a26] hover:bg-red-50 rounded disabled:opacity-30 disabled:hover:bg-transparent transition-colors" disabled={currentPage <= 1} title="Trang trước">
              <ChevronLeft size={22} strokeWidth={2.5}/>
            </button>
            
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded px-4 py-1.5 shadow-inner min-w-[70px] md:min-w-[90px] justify-center mx-1">
              <span className="text-[13px] text-gray-800 font-semibold font-mono">{currentPage} <span className="text-gray-400 mx-1">/</span> {TOTAL_PAGES}</span>
            </div>

            <button onClick={handleNext} className="p-1.5 md:p-2 text-gray-600 hover:text-[#cc1a26] hover:bg-red-50 rounded disabled:opacity-30 disabled:hover:bg-transparent transition-colors" disabled={currentPage >= TOTAL_PAGES - 1} title="Trang sau">
              <ChevronRight size={22} strokeWidth={2.5}/>
            </button>
            <button onClick={handleLast} className="p-1.5 md:p-2 text-gray-600 hover:text-[#cc1a26] hover:bg-red-50 rounded disabled:opacity-30 disabled:hover:bg-transparent transition-colors" disabled={currentPage >= TOTAL_PAGES - 1} title="Trang cuối">
              <SkipForward size={18} strokeWidth={2.5}/>
            </button>

            <div className="w-px h-5 bg-gray-200 mx-1 hidden xl:block"></div>

            <div className="hidden xl:flex items-center gap-1 ml-2">
              <button className="p-2 text-gray-500 hover:text-[#cc1a26] hover:bg-red-50 rounded transition-colors" title="Thumbnails">
                <LayoutGrid size={18} strokeWidth={2.5}/>
              </button>
              <button className="p-2 text-gray-500 hover:text-[#cc1a26] hover:bg-red-50 rounded transition-colors" title="Search">
                <Search size={18} strokeWidth={2.5}/>
              </button>
            </div>
          </div>

          {/* Right: Close & Maximize */}
          <div className="flex items-center gap-2">
            <button onClick={toggleFullscreen} className="p-2 text-gray-500 hover:text-[#cc1a26] hover:bg-red-50 rounded hidden sm:block transition-colors" title="Fullscreen">
              {isFullscreen ? <Minimize size={18} strokeWidth={2.5}/> : <Maximize size={18} strokeWidth={2.5}/>}
            </button>
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 hover:bg-[#cc1a26] text-gray-700 hover:text-white text-[12px] font-bold tracking-wide rounded-md transition-all ml-2 flex items-center gap-1.5"
            >
              <X size={16} strokeWidth={2.5} className="hidden sm:block"/>
              ĐÓNG
            </button>
          </div>
        </div>

        {/* Flipbook Container with Light Texture Background */}
        <div 
          className="flex-1 relative flex items-center justify-center overflow-hidden bg-[#f3f5f8] px-2 md:px-6 w-full h-full" 
          style={{ 
            backgroundImage: "radial-gradient(circle at center, #ffffff 0%, #eef1f5 100%)"
          }}
        >
          <style>{`
            .flipbook-wrapper {
              width: 100%;
              max-width: 1800px;
              aspect-ratio: 1.9 / 1;
              width: min(100%, calc((100vh - 80px) * 1.9));
            }
            @media (orientation: portrait) {
              .flipbook-wrapper {
                aspect-ratio: 0.95 / 1;
                width: min(100%, calc((100vh - 80px) * 0.95));
              }
            }
          `}</style>
          {/* Subtle glow effect behind the book */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[80vh] bg-white blur-[120px] rounded-full pointer-events-none"></div>

          <div 
            className="flipbook-wrapper relative z-10 mx-auto flex items-center justify-center"
          >
            {/* @ts-ignore - react-pageflip typing issues are common */}
            <HTMLFlipBook 
              width={739} 
              height={778} 
              size="stretch"
              minWidth={150} 
              maxWidth={1000} 
              minHeight={212} 
              maxHeight={1131} 
              maxShadowOpacity={0.4} 
              showCover={true} 
              mobileScrollSupport={true}
              usePortrait={true}
              flippingTime={600}
              onFlip={onPage}
              className="magazine-book drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] bg-transparent"
              ref={flipBookRef}
              style={{ margin: "0 auto" }}
            >
              {MOCK_PAGES_ARRAY.map((_, index) => (
                <Page key={index} number={index + 1} ebookData={ebookData} />
              ))}
            </HTMLFlipBook>
          </div>
          
          {/* Enhanced Navigation Buttons at the Very Edges */}
          <button 
            onClick={handlePrev} 
            disabled={currentPage <= 1}
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 disabled:text-gray-300 transition-all hover:bg-[#cc1a26] hover:text-white hover:scale-105 group border border-gray-100"
          >
            <ChevronLeft size={28} strokeWidth={2.5} className="-ml-0.5 group-hover:-ml-1.5 transition-all" />
          </button>
          
          <button 
            onClick={handleNext} 
            disabled={currentPage >= TOTAL_PAGES}
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 disabled:text-gray-300 transition-all hover:bg-[#cc1a26] hover:text-white hover:scale-105 group border border-gray-100"
          >
            <ChevronRight size={28} strokeWidth={2.5} className="-mr-0.5 group-hover:-mr-1.5 transition-all" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
