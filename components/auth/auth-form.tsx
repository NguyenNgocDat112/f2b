"use client";

import { useState } from "react";
import { User, LogIn, Eye, EyeOff, Check } from "lucide-react";
import { SocialButtons } from "./social-buttons";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export function AuthForm({ 
  type = "login" 
}: { 
  type?: "login" | "signup";
}) {
  const isLogin = type === "login";
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Toggle */}
      <div className="flex items-center gap-1 bg-gray-50/80 border border-gray-100 p-[3px] rounded-full mb-8 w-fit relative">
        <Link 
          href="/login"
          className={`flex items-center justify-center min-w-[110px] gap-2 px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 ${
            isLogin ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-gray-900" : "text-gray-500 hover:text-gray-800 hover:bg-gray-100/50"
          }`}
        >
          <LogIn className="w-[15px] h-[15px]" />
          Đăng nhập
        </Link>
        <Link 
          href="/signup"
          className={`flex items-center justify-center min-w-[110px] gap-2 px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 ${
            !isLogin ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-gray-900" : "text-gray-500 hover:text-gray-800 hover:bg-gray-100/50"
          }`}
        >
          <User className="w-[15px] h-[15px]" />
          Đăng ký
        </Link>
      </div>

      <div className="w-full text-center mb-6">
        <h2 className="text-[26px] font-bold text-gray-900 mb-2 mt-0 tracking-tight">
          {isLogin ? "Chào mừng trở lại" : "Tạo tài khoản"}
        </h2>
        <p className="text-gray-500 text-[14px]">
          {isLogin 
            ? "Vui lòng nhập thông tin để đăng nhập." 
            : "Vui lòng nhập thông tin để tạo tài khoản."}
        </p>
      </div>

      <SocialButtons />

      <div className="w-full flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-100"></div>
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em]">hoặc</span>
        <div className="flex-1 h-px bg-gray-100"></div>
      </div>

      <form className="w-full flex flex-col gap-3.5" onSubmit={(e) => e.preventDefault()}>
        <AnimatePresence>
          {!isLogin && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 0 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="flex flex-col gap-1.5 overflow-hidden"
            >
              <label className="text-[13px] font-semibold text-gray-700">Số điện thoại</label>
              <input 
                type="tel" 
                placeholder="Nhập số điện thoại"
                className="w-full px-4 py-3 rounded-[10px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all placeholder:text-gray-400 text-[14.5px]"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-700">Địa chỉ Email</label>
          <input 
            type="email" 
            placeholder="Nhập email của bạn"
            className="w-full px-4 py-3 rounded-[10px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all placeholder:text-gray-400 text-[14.5px]"
          />
        </div>

        <AnimatePresence>
          {!isLogin && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 0 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="flex flex-col gap-1.5 overflow-hidden"
            >
              <label className="text-[13px] font-semibold text-gray-700">Mã xác thực</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Nhập mã gửi về email"
                  className="flex-1 px-4 py-3 rounded-[10px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all placeholder:text-gray-400 text-[14.5px]"
                />
                <button type="button" className="px-4 py-3 rounded-[10px] bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-[13px] transition-colors whitespace-nowrap">
                  Gửi mã
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-700">Mật khẩu</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              className="w-full px-4 py-3 rounded-[10px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all placeholder:text-gray-400 pr-10 text-[14.5px]"
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {!isLogin && (
            <motion.label 
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 4 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <div className="relative flex items-center justify-center w-[18px] h-[18px] mt-0.5 rounded-[4px] border border-gray-300 group-hover:border-gray-400 transition-colors shrink-0 bg-white">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-full h-full rounded-[4px] bg-[#111111] scale-0 peer-checked:scale-100 transition-transform absolute flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
              </div>
              <span className="text-[12.5px] text-gray-500 leading-[1.6]">
                Cập nhật cho tôi các tin tức, chương trình khuyến mãi và sự kiện mới nhất qua email.
              </span>
            </motion.label>
          )}
        </AnimatePresence>

        <button 
          type="submit"
          className="w-full bg-[#18181b] hover:bg-[#27272a] text-white font-semibold py-[13px] rounded-[10px] mt-2 transition-all active:scale-[0.98] shadow-[0_4px_14px_rgba(0,0,0,0.15)] text-[14px]"
        >
          {isLogin ? "Đăng nhập" : "Tạo tài khoản"}
        </button>

        <p className="text-center text-[13.5px] text-gray-500 mt-4">
          {isLogin ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
          <Link 
            href={isLogin ? "/signup" : "/login"}
            className="text-gray-900 font-bold hover:underline"
          >
            {isLogin ? "Đăng ký" : "Đăng nhập"}
          </Link>
        </p>
      </form>
    </div>
  );
}
