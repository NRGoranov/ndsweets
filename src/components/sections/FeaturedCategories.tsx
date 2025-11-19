"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Category } from "@/lib/types";

const categoryImages: Record<string, string> = {
  "standard-cakes": "/sweets gallery/birthday_cake (1).jpg",
  "premium-cakes": "/sweets gallery/choco_cake (1).jpg",
  "bento-cakes": "/sweets gallery/purple_cake (1).jpg",
  "petit-fours": "/sweets gallery/macaroons.jpg",
  catering: "/sweets gallery/donuts (1).jpg",
  others: "/sweets gallery/pie (1).jpg",
};

const EXCLUDED_CATEGORY_SLUG = "gift-vouchers";

export function FeaturedCategoriesSection({ categories }: { categories: Category[] }) {
  const displayCategories = categories.filter((category) => category.slug !== EXCLUDED_CATEGORY_SLUG);

  return (
    <section className="container mt-16 space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Категории</p>
          <h2 className="font-display text-3xl text-primary">Селекция десерти</h2>
        </div>
        <Button variant="outline" asChild>
          <Link href="/menu">Виж цялото меню</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {displayCategories.slice(0, 4).map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white/80 p-6"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-2xl">
              <Image
                src={categoryImages[category.slug] || categoryImages["standard-cakes"]}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="font-display text-2xl text-primary">{category.name}</h3>
              <p className="text-sm text-primary/70">{category.description}</p>
            </div>
            <Button asChild variant="ghost" className="mt-4 px-0 font-semibold text-primary">
              <Link href={`/menu?category=${category.slug}`}>Разгледай</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

