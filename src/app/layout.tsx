import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yudis Aditya - Pengembang Perangkat Lunak Berpengalaman dan Pengajar Koding Online",
  description: "Temui Yudis Aditya, seorang pengembang perangkat lunak dengan lebih dari lima tahun pengalaman dan dua tahun sebagai pengajar koding online paruh waktu. Lihat portofolio, keterampilan, dan proyek terbaru saya di situs ini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
