import { Metadata } from 'next';
import { HeroBanner } from "@/components/hero-banner";
import { BestSellers } from "@/components/best-sellers";
import { Services } from "@/components/services";
import { ProductCategories } from "@/components/product-categories";

export const metadata: Metadata = {
  title: 'VLXD Nguyễn Vinh - Vật Liệu Xây Dựng Uy Tín',
  description: 'Cung cấp vật liệu xây dựng cao cấp: gạch ốp lát, sơn chống thấm, sắt thép, xi măng và thiết bị vệ sinh. Cam kết giá sỉ cạnh tranh, vận chuyển tận nơi.',
  keywords: "vật liệu xây dựng, gạch ốp lát, sơn chống thấm, thiết bị vệ sinh, sắt thép công trình, nguyễn vinh, vlxd nguyễn vinh",
};

export default function HomePage() {
  return (
    <main className="min-h-screen pb-16">
      <HeroBanner />
      <BestSellers />
      <Services />
      <ProductCategories />
    </main>
  );
}
