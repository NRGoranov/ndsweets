"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/hooks/useCartStore";

export function CartPreview({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { items } = useCartStore();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce(
    (sum, item) =>
      sum +
      item.quantity *
        (item.price + item.extras.reduce((extraSum, extra) => extraSum + extra.price, 0)),
    0,
  );

  const openPanel = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setIsOpen(true);
  };

  const closePanel = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setIsOpen(false), 120);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  if (count === 0) {
    return <>{children}</>;
  }

  return (
    <div className="relative" onMouseEnter={openPanel} onMouseLeave={closePanel}>
      {children}
      {isOpen && (
        <div
          className="absolute right-0 top-full z-50 mt-2 w-80 rounded-2xl border border-primary/10 bg-white/95 shadow-2xl backdrop-blur"
          onMouseEnter={openPanel}
          onMouseLeave={closePanel}
        >
          <div className="max-h-80 space-y-4 overflow-y-auto p-4">
            <h3 className="font-display text-lg text-primary">Количка ({count})</h3>
            {items.map((item) => {
              const params = new URLSearchParams();
              if (item.variantId) params.set("variant", item.variantId);
              if (item.flavourId) params.set("flavour", item.flavourId);
              const query = params.toString();
              const href = `/products/${item.slug}${query ? `?${query}` : ""}`;

              return (
                <Link
                  href={href}
                  key={`${item.productId}-${item.variantLabel}-${item.flavourId ?? "default"}`}
                  className="flex gap-3 rounded-2xl border border-primary/5 p-2 transition hover:border-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-cream-100">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm font-semibold text-primary">{item.name}</p>
                    <p className="text-xs text-primary/60">{item.variantLabel}</p>
                    <p className="text-sm font-semibold text-primary">
                      {item.quantity} × {item.price.toFixed(2)} лв.
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="border-t border-primary/10 p-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-primary/70">Междинна сума</span>
              <span className="font-semibold text-primary">{total.toFixed(2)} лв.</span>
            </div>
            <Button asChild className="w-full" size="sm">
              <Link href="/cart" onClick={() => setIsOpen(false)}>
                Към количката
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

