"use client";

import { useMemo, useState } from "react";
import { Filter } from "lucide-react";
import type { Category, Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "./ProductCard";

type Props = {
  categories: Category[];
  products: Product[];
  initialCategorySlug?: string;
};

const sortOptions = [
  { label: "Препоръчани", value: "recommended" },
  { label: "Цена: възходящо", value: "price-asc" },
  { label: "Цена: низходящо", value: "price-desc" },
];

const EXCLUDED_CATEGORY_SLUG = "gift-vouchers";

export function MenuFilters({ categories, products, initialCategorySlug }: Props) {
  const normalizedInitialSlug =
    initialCategorySlug && initialCategorySlug !== EXCLUDED_CATEGORY_SLUG
      ? initialCategorySlug
      : null;
  const [activeCategorySlug, setActiveCategorySlug] = useState<string | null>(normalizedInitialSlug);
  const [sort, setSort] = useState(sortOptions[0].value);
  const [query, setQuery] = useState("");

  const displayCategories = categories.filter(
    (category) => category.slug !== EXCLUDED_CATEGORY_SLUG,
  );
  const voucherCategoryId =
    categories.find((category) => category.slug === EXCLUDED_CATEGORY_SLUG)?.id ?? null;

  const activeCategoryId = useMemo(() => {
    if (!activeCategorySlug) return null;
    return displayCategories.find((category) => category.slug === activeCategorySlug)?.id ?? null;
  }, [activeCategorySlug, displayCategories]);

  const filteredProducts = useMemo(() => {
    let result = voucherCategoryId
      ? products.filter((product) => product.categoryId !== voucherCategoryId)
      : products;
    if (activeCategoryId) {
      result = result.filter((p) => p.categoryId === activeCategoryId);
    }
    if (query) {
      result = result.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
    }
    if (sort === "price-asc") {
      result = [...result].sort((a, b) => a.basePrice - b.basePrice);
    }
    if (sort === "price-desc") {
      result = [...result].sort((a, b) => b.basePrice - a.basePrice);
    }
    return result;
  }, [activeCategoryId, products, query, sort, voucherCategoryId]);

  return (
    <section className="container mt-8">
      <div className="rounded-[2rem] border border-primary/10 bg-white/90 p-6 shadow-soft">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeCategorySlug ? "ghost" : "default"}
              onClick={() => setActiveCategorySlug(null)}
            >
              Всичко
            </Button>
            {displayCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategorySlug === category.slug ? "default" : "ghost"}
                onClick={() => setActiveCategorySlug(category.slug)}
              >
                {category.name}
              </Button>
            ))}
          </div>
          <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto">
            <div className="flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm text-primary/70">
              <Filter className="h-4 w-4" />
              {filteredProducts.length} предложения
            </div>
            <select
              className="rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm text-primary"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Input
              placeholder="Търси десерт..."
              className="w-full rounded-full sm:w-64"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="mt-10 text-center text-primary/60">Няма резултати за тази комбинация.</p>
      )}
    </section>
  );
}

