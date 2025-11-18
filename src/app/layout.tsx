import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailPopup } from "@/components/layout/EmailPopup";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ndsweets | Handcrafted sweets for your sweetest moments",
  description:
    "Luxurious yet welcoming bakery experience inspired by Mishka Bakery—crafted in Sofia.",
  metadataBase: new URL("https://ndsweets-demo.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} data-scroll-behavior="smooth">
      <body className="bg-cream-50 antialiased text-foreground">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <EmailPopup />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
