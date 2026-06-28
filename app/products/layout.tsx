import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh Mục Nhà Cung Cấp Vật Liệu Xây Dựng & Nội Thất",
  description: "Bộ lọc và tìm kiếm danh mục các nhà cung cấp vật liệu xây dựng, trang trí nội thất hàng đầu Việt Nam. Liên hệ trực tiếp lấy báo giá sỉ tốt nhất từ nhà máy Viglacera, Hòa Phát, Dulux, Inax, An Cường.",
  keywords: [
    "bộ lọc nhà cung cấp",
    "danh mục vật liệu",
    "gạch ốp lát",
    "thiết bị vệ sinh",
    "sơn chống thấm",
    "sắt thép xi măng",
    "nội thất an cường",
    "viglacera",
    "inax"
  ].join(", "),
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
