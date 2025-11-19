"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { Product, ProductVariant } from "@/lib/types";
import { useCartStore } from "@/hooks/useCartStore";

type ProductConfiguratorProps = {
  product: Product;
  initialVariantId?: string;
  initialFlavourId?: string;
};

export function ProductConfigurator({ product, initialVariantId, initialFlavourId }: ProductConfiguratorProps) {
  const addItem = useCartStore((state) => state.addItem);
  const resolvedVariant = useMemo(() => {
    return product.variants.find((v) => v.id === initialVariantId) ?? product.variants[0];
  }, [product.variants, initialVariantId]);
  const resolvedFlavour = useMemo(() => {
    if (!product.flavours.length) return null;
    return product.flavours.find((flavourOption) => flavourOption.id === initialFlavourId) ?? product.flavours[0];
  }, [product.flavours, initialFlavourId]);

  const [variant, setVariant] = useState<ProductVariant>(resolvedVariant);
  const [quantity, setQuantity] = useState(1);
  const [flavour, setFlavour] = useState(resolvedFlavour);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setVariant(resolvedVariant);
  }, [resolvedVariant]);

  useEffect(() => {
    setFlavour(resolvedFlavour);
  }, [resolvedFlavour]);

  const galleryImages = useMemo(() => {
    if (flavour?.images?.length) return flavour.images;
    return [product.imageUrl];
  }, [flavour, product.imageUrl]);

  const total = variant.price * quantity;

  const handleAdd = () => {
    const selectedImage = galleryImages[activeImageIndex] ?? product.imageUrl;
    const selectionVariant = flavour
      ? { ...variant, label: `${variant.label} · ${flavour.name}` }
      : variant;
    addItem(product, selectionVariant, [], quantity, {
      imageUrl: selectedImage,
      flavourId: flavour?.id,
    });
    toast.success("Добавено в количката!", {
      description: `${quantity} × ${product.name} (${selectionVariant.label}) бяха добавени към поръчката`,
      duration: 3000,
    });
  };

  return (
    <div className="grid gap-6 pt-8 sm:gap-10 sm:pt-12 lg:grid-cols-[1.2fr,1fr]">
      <div className="space-y-3 sm:space-y-4">
        <div className="relative h-64 overflow-hidden rounded-[2rem] bg-cream-100 sm:h-[500px]">
          <Image
            src={galleryImages[activeImageIndex]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            quality={95}
            priority
          />
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {galleryImages.map((src, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImageIndex(index)}
              className={`relative h-20 overflow-hidden rounded-2xl border bg-cream-100 sm:h-32 ${
                activeImageIndex === index ? "border-primary" : "border-primary/10"
              }`}
            >
              <Image
                src={src}
                alt={`${product.name} изглед ${index + 1}`}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-opacity hover:opacity-80"
                quality={85}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-[2рем] border border-primary/10 bg-white/90 p-4 shadow-soft sm:p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-primary/50 sm:text-sm">Продукт</p>
        <h1 className="mt-2 font-display text-2xl text-primary sm:mt-3 sm:text-4xl">
          {product.name}
        </h1>
        <p className="mt-2 text-sm text-primary/70 sm:text-base">{product.description}</p>

        <div className="mt-4 sm:mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/60 sm:text-sm">Размер и порции</p>
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
                <span>{v.price.toFixed(2)} лв.</span>
              </button>
            ))}
          </div>
        </div>

        {product.flavours.length > 0 && (
          <div className="mt-4 sm:mt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/60 sm:text-sm">Избор на вкус</p>
            <div className="mt-2 grid gap-2 sm:mt-3 sm:gap-3">
              {product.flavours.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    setFlavour(option);
                    setActiveImageIndex(0);
                  }}
                  className={`rounded-2xl border px-4 py-3 text-left ${
                    flavour?.id === option.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-primary/20 text-primary/70"
                  }`}
                >
                  <p className="font-semibold">{option.name}</p>
                  <p className="text-sm text-primary/60">{option.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/*
        Допълненията са изключени към момента по изискване на клиента. Когато тази секция се върне,
        тук ще се визуализират бутоните за избор.
        */}

        <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-primary/20 p-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <div className="flex items-center justify-between sm:justify-start sm:gap-3">
            <button
              className="h-9 w-9 rounded-full border border-primary/20 text-primary transition hover:bg-primary/10 sm:h-10 sm:w-10"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              type="button"
              aria-label="Намали количеството"
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
              aria-label="Увеличи количеството"
            >
              +
            </button>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xs text-primary/60 sm:text-sm">Сума</p>
            <p className="text-xl font-semibold text-primary sm:text-2xl">
              {total.toFixed(2)} лв.
            </p>
          </div>
        </div>

        <Button className="mt-4 w-full sm:mt-6" size="lg" onClick={handleAdd}>
          Изпрати поръчка
        </Button>
      </div>
    </div>
  );
}

