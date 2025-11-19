"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useCartStore } from "@/hooks/useCartStore";

export function OrderSummary() {
  const { items } = useCartStore();

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) =>
        sum +
        item.quantity *
          (item.price + item.extras.reduce((extraSum, extra) => extraSum + extra.price, 0)),
      0,
    );
    const delivery = items.length > 0 ? 8 : 0;
    return { subtotal, delivery, total: subtotal + delivery };
  }, [items]);

  return (
    <div className="rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-soft">
      <h3 className="font-display text-2xl text-primary">Резюме на поръчката</h3>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={`${item.productId}-${item.variantLabel}`} className="flex gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl bg-cream-100">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                sizes="64px"
                className="object-cover"
                quality={85}
              />
            </div>
            <div className="flex-1 text-sm text-primary/80">
              <p className="font-semibold text-primary">{item.name}</p>
              <p>{item.variantLabel}</p>
              {item.extras.length > 0 && (
                <p className="text-xs text-primary/60">
                  Допълнения: {item.extras.map((extra) => extra.name).join(", ")}
                </p>
              )}
            </div>
            <p className="text-sm font-semibold text-primary">
              {(item.quantity * item.price).toFixed(2)} лв.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-2 text-sm text-primary/70">
        <div className="flex justify-between">
          <span>Междинна сума</span>
          <span>{totals.subtotal.toFixed(2)} лв.</span>
        </div>
        <div className="flex justify-between">
          <span>Доставка</span>
          <span>{totals.delivery.toFixed(2)} лв.</span>
        </div>
        <div className="flex justify-between border-t border-primary/10 pt-3 text-base font-semibold text-primary">
          <span>Общо</span>
          <span>{totals.total.toFixed(2)} лв.</span>
        </div>
      </div>
    </div>
  );
}

