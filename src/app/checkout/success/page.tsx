import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; mock?: string }>;
}) {
  const params = await searchParams;
  const isMock = params.mock === "true";
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Thank you</p>
      <h1 className="font-display text-4xl text-primary">Your order is confirmed</h1>
      <p className="max-w-2xl text-primary/70">
        {isMock
          ? "This was a simulated payment so you can experience the flow without connecting the backend."
          : "Stripe has confirmed your payment. We will email you the order timeline shortly."}
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/menu">Keep browsing</Link>
        </Button>
      </div>
    </div>
  );
}

