'use client';

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Extra, Product, ProductVariant } from "@/lib/types";

type AddItemOptions = {
  imageUrl?: string;
  flavourId?: string;
};

type CartState = {
  items: CartItem[];
  addItem: (
    product: Product,
    variant: ProductVariant,
    extras: Extra[],
    quantity: number,
    options?: AddItemOptions,
  ) => void;
  removeItem: (productId: string, variantRef: string, flavourId?: string | null) => void;
  updateQuantity: (
    productId: string,
    variantRef: string,
    flavourId: string | null,
    quantity: number,
  ) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, variant, extras, quantity, options) =>
        set(() => {
          const resolvedImageUrl = options?.imageUrl ?? product.imageUrl;
          const flavourId = options?.flavourId ?? null;
          const variantRef = variant.id || variant.label;
          const existing = get().items.find(
            (item) =>
              item.productId === product.id &&
              (item.variantId ?? item.variantLabel) === variantRef &&
              (item.flavourId ?? null) === flavourId,
          );
          if (existing) {
            return {
              items: get().items.map((item) =>
                item.productId === product.id &&
                (item.variantId ?? item.variantLabel) === variantRef &&
                (item.flavourId ?? null) === flavourId
                  ? {
                      ...item,
                      quantity: item.quantity + quantity,
                      extras,
                      imageUrl: resolvedImageUrl,
                      variantLabel: variant.label,
                    }
                  : item,
              ),
            };
          }
          const newItem: CartItem = {
            productId: product.id,
            slug: product.slug,
            name: product.name,
            variantLabel: variant.label,
            variantId: variant.id,
            flavourId: flavourId ?? undefined,
            quantity,
            price: variant.price,
            extras,
            imageUrl: resolvedImageUrl,
          };
          return { items: [...get().items, newItem] };
        }),
      removeItem: (productId, variantRef, flavourId = null) =>
        set(() => ({
          items: get().items.filter(
            (item) =>
              !(
                item.productId === productId &&
                (item.variantId ?? item.variantLabel) === variantRef &&
                (item.flavourId ?? null) === flavourId
              ),
          ),
        })),
      updateQuantity: (productId, variantRef, flavourId, quantity) =>
        set(() => ({
          items: get().items.map((item) =>
            item.productId === productId &&
            (item.variantId ?? item.variantLabel) === variantRef &&
            (item.flavourId ?? null) === flavourId
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

