"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useCartStore } from "@/hooks/useCartStore";
import { CartPreview } from "./CartPreview";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Начало" },
  { href: "/menu", label: "Меню" },
  { href: "/custom-cakes", label: "Торти по поръчка" },
  { href: "/about", label: "За нас" },
  { href: "/faq", label: "Въпроси" },
  { href: "/contact", label: "Контакт" },
  { href: "/vouchers", label: "Ваучери" },
];

export function Header() {
  const pathname = usePathname();
  const items = useCartStore((state) => state.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-primary/10 bg-white/95 backdrop-blur-xl shadow-sm"
          : "border-b border-primary/5 bg-cream-50/95 backdrop-blur-md",
      )}
    >
      <div className="container flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <Image
              src="/Asset%201.png"
              alt="ndsweets"
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </div>
          <span className="sr-only">ndsweets</span>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium text-primary/80 md:gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition hover:text-primary",
                pathname === link.href ? "text-primary" : "text-primary/70",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CartPreview>
            <Link href="/cart" className="relative">
              <span className="sr-only">Количка</span>
              <ShoppingBag className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                  {count}
                </span>
              )}
            </Link>
          </CartPreview>
          <Button asChild size="sm" className="hidden xl:inline-flex">
            <Link href="/menu">Поръчай</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/cart" className="relative">
            <span className="sr-only">Количка</span>
            <ShoppingBag className="h-5 w-5 text-primary" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                {count}
              </span>
            )}
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <button className="rounded-full border border-primary/20 p-2">
                <Menu className="h-5 w-5 text-primary" />
                <span className="sr-only">Меню</span>
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Навигация</SheetTitle>
              <div className="mt-10 flex flex-col gap-6">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/cart" className="flex items-center gap-3 text-primary">
                  <ShoppingBag className="h-5 w-5" />
                  Количка ({count})
                </Link>
                <Button asChild size="lg" className="w-full">
                  <Link href="/menu">Поръчай</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

