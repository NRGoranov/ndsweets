import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheckoutCancelPage() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Payment cancelled</p>
      <h1 className="font-display text-4xl text-primary">Need to tweak your order?</h1>
      <p className="max-w-xl text-primary/70">
        Your cart is still saved. You can adjust flavours or extras and try checkout again.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/cart">Return to cart</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/contact">Talk to us</Link>
        </Button>
      </div>
    </div>
  );
}

