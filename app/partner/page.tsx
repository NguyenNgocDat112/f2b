import { Metadata } from "next";
import { PartnerHero } from "@/components/partner/partner-hero";
import { PartnerPricing } from "@/components/partner/partner-pricing";
import { PartnerFaq } from "@/components/partner/partner-faq";
import { PartnerTestimonials } from "@/components/partner/partner-testimonials";

export const metadata: Metadata = {
  title: "Đăng Ký Đối Tác Phân Phối Sỉ - Chiết Khấu Hấp Dẫn | VLXD Nguyễn Vinh",
  description: "Trở thành đối tác chính thức phân phối vật liệu xây dựng cao cấp của Nguyễn Vinh. Chính sách chiết khấu vượt trội từ 15% - 35%, vận chuyển tận công trình 24/7.",
  keywords: [
    "đăng ký đối tác",
    "đại lý vật liệu xây dựng",
    "chiết khấu sơn chống thấm",
    "sỉ gạch ốp lát",
    "nhà thầu xây dựng hợp tác",
    "vật tư giá sỉ"
  ].join(", ")
};

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <PartnerHero />
      <PartnerPricing />
      <PartnerFaq />
      <PartnerTestimonials />
    </main>
  );
}
