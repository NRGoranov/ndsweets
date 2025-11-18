import { getCategories, getFeaturedProducts, getTestimonials, getLocations, getSteps } from "@/lib/data-client";
import { HeroSection } from "@/components/sections/Hero";
import { FeaturedCategoriesSection } from "@/components/sections/FeaturedCategories";
import { SignatureHighlight } from "@/components/sections/SignatureHighlight";
import { HowItWorksSection } from "@/components/sections/HowItWorks";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProducts";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { LocationsSection } from "@/components/sections/Locations";

export default async function Home() {
  const [categories, products, testimonials, locations, steps] = await Promise.all([
    getCategories(),
    getFeaturedProducts(),
    getTestimonials(),
    getLocations(),
    getSteps(),
  ]);

  return (
    <div className="space-y-20 pb-20">
      <div className="container pt-10">
        <HeroSection />
      </div>
      <FeaturedCategoriesSection categories={categories} />
      <SignatureHighlight />
      <HowItWorksSection steps={steps} />
      <FeaturedProductsSection products={products} />
      <TestimonialsSection testimonials={testimonials} />
      <LocationsSection locations={locations} />
    </div>
  );
}
