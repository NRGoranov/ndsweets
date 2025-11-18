"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { Product, ProductVariant, Extra } from "@/lib/types";
import { useCartStore } from "@/hooks/useCartStore";

export function ProductConfigurator({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const [variant, setVariant] = useState<ProductVariant>(product.variants[0]);
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);
  const [quantity, setQuantity] = useState(1);

  const toggleExtra = (extra: Extra) => {
    setSelectedExtras((prev) =>
      prev.find((e) => e.id === extra.id) ? prev.filter((e) => e.id !== extra.id) : [...prev, extra],
    );
  };

  const total =
    variant.price * quantity +
    selectedExtras.reduce((sum, extra) => sum + extra.price * quantity, 0);

  const handleAdd = () => {
    addItem(product, variant, selectedExtras, quantity);
    toast.success("Added to cart!", {
      description: `${quantity} × ${product.name} (${variant.label}) has been added to your cart`,
      duration: 3000,
    });
  };

  return (
    <div className="grid gap-6 pt-8 sm:gap-10 sm:pt-12 lg:grid-cols-[1.2fr,1fr]">
      <div className="space-y-3 sm:space-y-4">
        <div className="relative h-64 overflow-hidden rounded-[2rem] bg-cream-100 sm:h-[500px]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            quality={95}
            priority
          />
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {[product.imageUrl, product.imageUrl, product.imageUrl].map((src, index) => (
            <div
              key={index}
              className="relative h-20 overflow-hidden rounded-2xl border border-primary/10 bg-cream-100 sm:h-32"
            >
              <Image
                src={src}
                alt={`${product.name} view ${index + 1}`}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-opacity hover:opacity-80 cursor-pointer"
                quality={85}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[2rem] border border-primary/10 bg-white/90 p-4 shadow-soft sm:p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-primary/50 sm:text-sm">Product</p>
        <h1 className="mt-2 font-display text-2xl text-primary sm:mt-3 sm:text-4xl">
          {product.name}
        </h1>
        <p className="mt-2 text-sm text-primary/70 sm:text-base">{product.description}</p>

        <div className="mt-4 sm:mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/60 sm:text-sm">
            Sizes & servings
          </p>
          <div className="mt-2 grid gap-2 sm:mt-3 sm:gap-3">
            {product.variants.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVariant(v)}
                className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left ${
                  variant.id === v.id ? "border-primary bg-primary/10 text-primary" : "border-primary/20 text-primary/70"
                }`}
              >
                <span>{v.label}</span>
                <span>{v.price.toFixed(2)} BGN</span>
              </button>
            ))}
          </div>
        </div>

        {product.fillings.length > 0 && (
          <div className="mt-4 sm:mt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/60 sm:text-sm">
              Flavour palette
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-primary/70 sm:mt-3 sm:text-sm">
              {product.fillings.map((filling) => (
                <span key={filling} className="rounded-full bg-primary/10 px-4 py-2">
                  {filling}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 sm:mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/60 sm:text-sm">Extras</p>
          <div className="mt-2 grid gap-2 sm:mt-3 sm:gap-3">
            {product.extras.map((extra) => {
              const active = selectedExtras.some((e) => e.id === extra.id);
              return (
                <button
                  key={extra.id}
                  type="button"
                  onClick={() => toggleExtra(extra)}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left ${
                    active ? "border-primary bg-primary/10 text-primary" : "border-primary/20 text-primary/70"
                  }`}
                >
                  <span>
                    <p className="font-semibold">{extra.name}</p>
                    {extra.description && <p className="text-sm text-primary/60">{extra.description}</p>}
                  </span>
                  <span>+{extra.price.toFixed(2)} BGN</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-primary/20 p-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <div className="flex items-center justify-between sm:justify-start sm:gap-3">
            <button
              className="h-9 w-9 rounded-full border border-primary/20 text-primary transition hover:bg-primary/10 sm:h-10 sm:w-10"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              type="button"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-12 text-center text-base font-semibold text-primary sm:w-10 sm:text-lg">
              {quantity}
            </span>
            <button
              className="h-9 w-9 rounded-full border border-primary/20 text-primary transition hover:bg-primary/10 sm:h-10 sm:w-10"
              onClick={() => setQuantity(quantity + 1)}
              type="button"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xs text-primary/60 sm:text-sm">Total</p>
            <p className="text-xl font-semibold text-primary sm:text-2xl">
              {total.toFixed(2)} BGN
            </p>
          </div>
        </div>

        <Button className="mt-4 w-full sm:mt-6" size="lg" onClick={handleAdd}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}

