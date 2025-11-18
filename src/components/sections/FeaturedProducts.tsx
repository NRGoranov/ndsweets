"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Check } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/hooks/useCartStore";

export function FeaturedProductsSection({ products }: { products: Product[] }) {
  const addItem = useCartStore((state) => state.addItem);
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleAddToCart = (product: Product) => {
    addItem(product, product.variants[0], [], 1);
    setAddedItems((prev) => new Set(prev).add(product.id));
    toast.success("Added to cart!", {
      description: `${product.name} has been added to your cart`,
      duration: 2000,
    });
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 2000);
  };

  return (
    <section className="container mt-16 space-y-6 sm:mt-24">
      <div className="flex flex-col gap-2 text-center sm:gap-4">
        <p className="text-xs uppercase tracking-[0.4em] text-primary/50 sm:text-sm">Bestsellers</p>
        <h2 className="font-display text-2xl text-primary sm:text-3xl">Loved this month</h2>
      </div>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.slice(0, 6).map((product, index) => {
          const justAdded = addedItems.has(product.id);
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full">
                <CardHeader className="space-y-4 p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-3xl bg-cream-100 sm:h-64">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition duration-500 hover:scale-105"
                      quality={90}
                      loading="lazy"
                    />
                  </div>
                  <div className="px-4 pt-4 sm:px-6 sm:pt-6">
                    <CardTitle className="text-lg sm:text-xl">{product.name}</CardTitle>
                    <p className="mt-2 line-clamp-2 text-xs text-primary/70 sm:text-sm">
                      {product.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-base font-semibold text-primary sm:text-lg">
                      from {product.basePrice.toFixed(2)} BGN
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Button asChild variant="ghost" size="sm" className="flex-1 sm:flex-initial">
                        <Link href={`/products/${product.slug}`}>View</Link>
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        onClick={() => handleAddToCart(product)}
                        className={justAdded ? "bg-primary text-white" : ""}
                        aria-label="Add to cart"
                      >
                        {justAdded ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <ShoppingCart className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

