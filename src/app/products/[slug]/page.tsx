import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/lib/data-client";
import { ProductConfigurator } from "@/components/sections/ProductConfigurator";
import { ProductCard } from "@/components/sections/ProductCard";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ variant?: string; flavour?: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  return {
    title: product ? `${product.name} | ndsweets` : "Product | ndsweets",
  };
}

export default async function ProductPage({ params, searchParams }: Props) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  const products = await getProducts();
  const suggestions = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="container pb-20">
      <ProductConfigurator
        product={product}
        initialVariantId={query.variant}
        initialFlavourId={query.flavour}
      />
      <div className="mt-20 space-y-6">
        <h2 className="font-display text-3xl text-primary">Комбинирай с още</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {suggestions.map((suggestion) => (
            <ProductCard key={suggestion.id} product={suggestion} />
          ))}
        </div>
      </div>
    </div>
  );
}

