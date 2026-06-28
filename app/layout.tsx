import type {Metadata} from 'next';
import { Inter, Noto_Serif } from 'next/font/google';
import './globals.css'; // Global styles
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { OpeningLoader } from '@/components/opening-loader';
import { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
});

const notoSerif = Noto_Serif({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '700', '900'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: {
    template: '%s | MatHub',
    default: 'MatHub - Vật Liệu Xây Dựng & Giải Pháp Cung Ứng Cao Cấp',
  },
  description: 'Nhà cung ứng vật liệu xây dựng thông minh hàng đầu: Gạch ốp lát, thiết bị vệ sinh, sơn chống thấm, sắt thép, xi măng nội ngoại nhập.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" className={`${inter.variable} ${notoSerif.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-gray-900 flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
