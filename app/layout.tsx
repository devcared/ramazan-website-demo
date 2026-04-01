import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CareHaven – Pflege, die sich wie Familie anfühlt",
  description:
    "Mitfühlende, geprüfte Pflegekräfte für Ihre Liebsten zu Hause. Häusliche Pflege für Senioren und Menschen mit Behinderungen.",
  keywords: [
    "häusliche Pflege",
    "Seniorenpflege",
    "Pflegekraft",
    "ambulante Pflege",
    "persönliche Pflege",
    "24/7 Pflege",
    "Altenpflege",
  ],
  openGraph: {
    title: "CareHaven – Pflege, die sich wie Familie anfühlt",
    description:
      "Mitfühlende, geprüfte Pflegekräfte für Ihre Liebsten — sicher, glücklich und täglich umsorgt.",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareHaven – Pflege, die sich wie Familie anfühlt",
    description: "Mitfühlende, geprüfte Pflegekräfte für Ihre Liebsten.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
