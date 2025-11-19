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
        <p className="text-primary/70">Количката ви е толкова лека, колкото и нашият мус.</p>
        <Button asChild className="mt-4">
          <Link href="/menu">Разгледайте менюто</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {items.map((item) => {
        const params = new URLSearchParams();
        if (item.variantId) params.set("variant", item.variantId);
        if (item.flavourId) params.set("flavour", item.flavourId);
        const query = params.toString();
        const productHref = `/products/${item.slug}${query ? `?${query}` : ""}`;
        const variantRef = item.variantId ?? item.variantLabel;

        return (
          <div
            key={`${item.productId}-${item.variantLabel}-${item.flavourId ?? "default"}`}
            className="flex flex-col gap-4 rounded-3xl border border-primary/10 bg-white/90 p-4 md:flex-row md:items-center"
          >
            <Link
              href={productHref}
              className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-cream-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                sizes="96px"
                className="object-cover transition-transform duration-300 hover:scale-105"
                quality={85}
              />
            </Link>
          <div className="flex-1">
            <p className="font-display text-xl text-primary">{item.name}</p>
            <p className="text-sm text-primary/70">{item.variantLabel}</p>
            {item.extras.length > 0 && (
              <p className="text-xs text-primary/50">
                Допълнения: {item.extras.map((extra) => extra.name).join(", ")}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              className="h-8 w-8 rounded-full border border-primary/20"
              onClick={() =>
                updateQuantity(item.productId, variantRef, item.flavourId ?? null, Math.max(1, item.quantity - 1))
              }
              aria-label="Намали количеството"
            >
              -
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              className="h-8 w-8 rounded-full border border-primary/20"
              onClick={() =>
                updateQuantity(item.productId, variantRef, item.flavourId ?? null, item.quantity + 1)
              }
              aria-label="Увеличи количеството"
            >
              +
            </button>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-primary">
              {(item.price * item.quantity).toFixed(2)} лв.
            </p>
            <button
              className="text-sm text-primary/60 underline"
              onClick={() => removeItem(item.productId, variantRef, item.flavourId ?? null)}
            >
              Премахни
            </button>
          </div>
        </div>
        );
      })}
    </div>
  );
}

