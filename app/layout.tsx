import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZANGX · XƯỞNG SÁNG TẠO SỐ | Trương Hoàng Lam",
  description: "ZANGX · Trương Hoàng Lam. Sáng tạo, quản lý sản phẩm và nghiên cứu phát triển (Creator · Product Manager · R&D).",
  keywords: ["ZANGX", "Trương Hoàng Lam", "Xưởng Sáng Tạo Số", "Creator", "Product Manager", "R&D"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-brand-bg text-brand-text antialiased selection:bg-brand-accent selection:text-brand-bg">
        {children}
      </body>
    </html>
  );
}
