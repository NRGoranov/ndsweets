export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  order: number;
};

export type ProductVariant = {
  id: string;
  label: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  basePrice: number;
  categoryId: string;
  imageUrl: string;
  isFeatured?: boolean;
  variants: ProductVariant[];
  fillings: string[];
  extras: Extra[];
};

export type Extra = {
  id: string;
  name: string;
  description?: string;
  price: number;
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  rating: number;
};

export type Location = {
  id: string;
  title: string;
  address: string;
  hours: string[];
  mapsUrl: string;
};

export type HowItWorksStep = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  variantLabel: string;
  quantity: number;
  price: number;
  extras: Extra[];
  imageUrl: string;
};

