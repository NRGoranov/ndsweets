import { cache } from "react";
import {
  getMockCategories,
  getMockFeaturedProducts,
  getMockProductBySlug,
  getMockProducts,
  getMockLocations,
  getMockTestimonials,
  getMockSteps,
} from "./mock-data";
import { Category, Product } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const withErrorHandling = async <T>(promise: Promise<T>, fallback: () => Promise<T>) => {
  try {
    return await promise;
  } catch (err) {
    console.warn("[dataClient] Falling back to mock data:", err);
    return fallback();
  }
};

const fetchJSON = async <T>(path: string) => {
  const res = await fetch(`${BASE_URL}${path}`, {
    // Revalidate server components every minute to keep demo snappy
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}`);
  }
  return (await res.json()) as T;
};

export const getCategories = cache(async (): Promise<Category[]> => {
  if (!BASE_URL) return getMockCategories();
  return withErrorHandling(fetchJSON<Category[]>("/api/categories"), getMockCategories);
});

export const getProducts = cache(
  async (params?: { category?: string; featured?: boolean }): Promise<Product[]> => {
    if (!BASE_URL) return getMockProducts();
    const search = new URLSearchParams();
    if (params?.category) search.set("category", params.category);
    if (params?.featured) search.set("featured", String(params.featured));
    const qs = search.toString();
    return withErrorHandling(
      fetchJSON<Product[]>(`/api/products${qs ? `?${qs}` : ""}`),
      getMockProducts,
    );
  },
);

export const getFeaturedProducts = cache(async () => {
  if (!BASE_URL) return getMockFeaturedProducts();
  return withErrorHandling(
    fetchJSON<Product[]>("/api/products?featured=true"),
    getMockFeaturedProducts,
  );
});

export const getProductBySlug = cache(async (slug: string) => {
  if (!BASE_URL) return getMockProductBySlug(slug);
  return withErrorHandling(fetchJSON<Product>(`/api/products/${slug}`), () =>
    getMockProductBySlug(slug),
  );
});

export const getTestimonials = cache(async () => getMockTestimonials());
export const getLocations = cache(async () => getMockLocations());
export const getSteps = cache(async () => getMockSteps());

