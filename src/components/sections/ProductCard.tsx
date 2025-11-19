"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Check } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCartStore } from "@/hooks/useCartStore";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, product.variants[0], [], 1, { imageUrl: product.imageUrl });
    setJustAdded(true);
    toast.success("Добавено в количката!", {
      description: `${product.name} очаква финалната ви поръчка.`,
      duration: 2000,
    });
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <Card className="h-full rounded-[2rem] border-primary/10 bg-white/90 p-0">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative h-48 overflow-hidden rounded-[2rem] bg-cream-100 sm:h-60">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            quality={90}
            loading="lazy"
          />
        </div>
      </Link>
      <div className="space-y-3 p-4 sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg text-primary sm:text-xl">{product.name}</p>
          <span className="text-xs text-primary/60 sm:text-sm">от {product.basePrice.toFixed(2)} лв.</span>
        </div>
        <p className="line-clamp-2 text-xs text-primary/70 sm:text-sm">{product.description}</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <Button asChild variant="outline" className="flex-1 text-sm sm:text-base">
            <Link href={`/products/${product.slug}`}>Виж детайли</Link>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleAddToCart}
            className={justAdded ? "bg-primary text-white" : ""}
            aria-label="Добави в количката"
          >
            {justAdded ? (
              <Check className="h-4 w-4" />
            ) : (
              <ShoppingCart className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
}

