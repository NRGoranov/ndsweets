import { getCategories, getProducts } from "@/lib/data-client";
import { MenuFilters } from "@/components/sections/MenuFilters";

export const metadata = {
  title: "Меню | ndsweets",
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
        <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Меню</p>
        <h1 className="font-display text-4xl text-primary">Подбрани десерти и торти</h1>
        <p className="text-primary/70">
          Открийте стандартни, премиум и бенто торти, дребни сладки и кетъринг сетове. Получаването е на място в ателието – работим по старта на собствена доставка.
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

