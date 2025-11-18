"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/hooks/useCartStore";

export function CartItems() {
  const { items, updateQuantity, removeItem } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-primary/10 bg-white/90 p-8 text-center">
        <p className="text-primary/70">Your cart is as airy as our mousse.</p>
        <Button asChild className="mt-4">
          <Link href="/menu">Browse the menu</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={`${item.productId}-${item.variantLabel}`}
          className="flex flex-col gap-4 rounded-3xl border border-primary/10 bg-white/90 p-4 md:flex-row md:items-center"
        >
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-cream-100">
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              sizes="96px"
              className="object-cover"
              quality={85}
            />
          </div>
          <div className="flex-1">
            <p className="font-display text-xl text-primary">{item.name}</p>
            <p className="text-sm text-primary/70">{item.variantLabel}</p>
            {item.extras.length > 0 && (
              <p className="text-xs text-primary/50">
                Extras: {item.extras.map((extra) => extra.name).join(", ")}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              className="h-8 w-8 rounded-full border border-primary/20"
              onClick={() =>
                updateQuantity(item.productId, item.variantLabel, Math.max(1, item.quantity - 1))
              }
            >
              -
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              className="h-8 w-8 rounded-full border border-primary/20"
              onClick={() =>
                updateQuantity(item.productId, item.variantLabel, item.quantity + 1)
              }
            >
              +
            </button>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-primary">
              {(item.price * item.quantity).toFixed(2)} BGN
            </p>
            <button
              className="text-sm text-primary/60 underline"
              onClick={() => removeItem(item.productId, item.variantLabel)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

