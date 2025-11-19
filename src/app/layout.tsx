import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailPopup } from "@/components/layout/EmailPopup";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
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
  title: "ndsweets | Ръчно изработени десерти",
  description:
    "Луксозно, но уютно сладкарско изживяване в София – торти, бенто десерти и макарони по авторски рецепти.",
  metadataBase: new URL("https://ndsweets-demo.vercel.app"),
  icons: {
    icon: "/icon/favicon.ico",
    shortcut: "/icon/favicon-32x32.png",
    apple: "/icon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} data-scroll-behavior="smooth">
      <body className="bg-cream-50 antialiased text-foreground">
        <Header />
        <main className="min-h-screen pt-20 sm:pt-24">{children}</main>
        <Footer />
        <EmailPopup />
        <ScrollToTop />
        <Toaster
          position="top-center"
          richColors={false}
          closeButton
          toastOptions={{
            className:
              "rounded-2xl border border-primary/10 bg-white/95 px-6 py-4 text-primary shadow-xl backdrop-blur",
            descriptionClassName: "text-primary/70",
            style: {
              borderRadius: "1.5rem",
            },
            success: {
              className:
                "rounded-2xl border border-primary/15 bg-cream-50/95 px-6 py-4 text-primary shadow-xl",
              descriptionClassName: "text-primary/70",
            },
          }}
        />
      </body>
    </html>
  );
}
