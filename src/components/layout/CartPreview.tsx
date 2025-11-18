"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/hooks/useCartStore";

export function CartPreview({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCartStore();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce(
    (sum, item) =>
      sum +
      item.quantity *
        (item.price + item.extras.reduce((extraSum, extra) => extraSum + extra.price, 0)),
    0,
  );

  if (count === 0) {
    return <>{children}</>;
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-2xl border border-primary/10 bg-white shadow-2xl">
          <div className="max-h-96 space-y-4 overflow-y-auto p-4">
            <h3 className="font-display text-lg text-primary">Cart ({count})</h3>
            {items.map((item) => (
              <div key={`${item.productId}-${item.variantLabel}`} className="flex gap-3">
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
                    {item.quantity} × {item.price.toFixed(2)} BGN
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-primary/10 p-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-primary/70">Subtotal</span>
              <span className="font-semibold text-primary">{total.toFixed(2)} BGN</span>
            </div>
            <Button asChild className="w-full" size="sm">
              <Link href="/cart" onClick={() => setIsOpen(false)}>
                View cart
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

