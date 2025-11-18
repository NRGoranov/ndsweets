'use client';

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Extra, Product, ProductVariant } from "@/lib/types";

type CartState = {
  items: CartItem[];
  addItem: (product: Product, variant: ProductVariant, extras: Extra[], quantity: number) => void;
  removeItem: (productId: string, variantLabel: string) => void;
  updateQuantity: (productId: string, variantLabel: string, quantity: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, variant, extras, quantity) =>
        set(() => {
          const existing = get().items.find(
            (item) => item.productId === product.id && item.variantLabel === variant.label,
          );
          if (existing) {
            return {
              items: get().items.map((item) =>
                item.productId === product.id && item.variantLabel === variant.label
                  ? { ...item, quantity: item.quantity + quantity, extras }
                  : item,
              ),
            };
          }
          const newItem: CartItem = {
            productId: product.id,
            slug: product.slug,
            name: product.name,
            variantLabel: variant.label,
            quantity,
            price: variant.price,
            extras,
            imageUrl: product.imageUrl,
          };
          return { items: [...get().items, newItem] };
        }),
      removeItem: (productId, variantLabel) =>
        set(() => ({
          items: get().items.filter(
            (item) => !(item.productId === productId && item.variantLabel === variantLabel),
          ),
        })),
      updateQuantity: (productId, variantLabel, quantity) =>
        set(() => ({
          items: get().items.map((item) =>
            item.productId === productId && item.variantLabel === variantLabel
              ? { ...item, quantity }
              : item,
          ),
        })),
      clear: () => set({ items: [] }),
    }),
    {
      name: "ndsweets-cart",
    },
  ),
);

