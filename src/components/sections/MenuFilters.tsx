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
  { label: "Recommended", value: "recommended" },
  { label: "Price: low to high", value: "price-asc" },
  { label: "Price: high to low", value: "price-desc" },
];

export function MenuFilters({ categories, products, initialCategorySlug }: Props) {
  const [activeCategorySlug, setActiveCategorySlug] = useState<string | null>(
    initialCategorySlug ?? null,
  );
  const [sort, setSort] = useState(sortOptions[0].value);
  const [query, setQuery] = useState("");

  const activeCategoryId = useMemo(() => {
    if (!activeCategorySlug) return null;
    return categories.find((category) => category.slug === activeCategorySlug)?.id ?? null;
  }, [activeCategorySlug, categories]);

  const filteredProducts = useMemo(() => {
    let result = products;
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
  }, [activeCategoryId, products, query, sort]);

  return (
    <section className="container mt-8">
      <div className="rounded-[2rem] border border-primary/10 bg-white/90 p-6 shadow-soft">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3">
          <Button
            variant={activeCategorySlug ? "ghost" : "default"}
            onClick={() => setActiveCategorySlug(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategorySlug === category.slug ? "default" : "ghost"}
              onClick={() => setActiveCategorySlug(category.slug)}
            >
              {category.name}
            </Button>
          ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm text-primary/70">
              <Filter className="h-4 w-4" />
              {filteredProducts.length} items
            </div>
            <select
              className="rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm"
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
              placeholder="Search desserts..."
              className="w-56 rounded-full"
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
        <p className="mt-10 text-center text-primary/60">No items match your search yet.</p>
      )}
    </section>
  );
}

