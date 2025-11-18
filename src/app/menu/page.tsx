import { getCategories, getProducts } from "@/lib/data-client";
import { MenuFilters } from "@/components/sections/MenuFilters";

export const metadata = {
  title: "Menu | ndsweets",
};

export default async function MenuPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);

  return (
    <div className="pb-20 pt-12">
      <div className="container space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/50">The menu</p>
        <h1 className="font-display text-4xl text-primary">Curated pastries & cakes</h1>
        <p className="text-primary/70">
          Filter by vibe, sort by price or search for your favourite creation.
        </p>
      </div>
      <MenuFilters
        categories={categories}
        products={products}
        initialCategorySlug={params?.category}
      />
    </div>
  );
}

