"use client";

import Link from "next/link";
import { useCartStore } from "@/hooks/useCartStore";
import { CartItems } from "@/components/sections/CartItems";
import { OrderSummary } from "@/components/sections/OrderSummary";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const hasItems = items.length > 0;

  return (
    <div className="container pb-20 pt-12">
      <div className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Вашата количка</p>
        <h1 className="font-display text-4xl text-primary">Остават само няколко щриха</h1>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr,0.6fr]">
        <CartItems />
        <div className="space-y-4">
          <OrderSummary />
          <Button asChild disabled={!hasItems} className="w-full">
            <Link href="/checkout">Завърши поръчката</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

