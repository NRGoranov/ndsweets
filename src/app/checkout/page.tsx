import { CheckoutForm } from "@/components/sections/CheckoutForm";
import { OrderSummary } from "@/components/sections/OrderSummary";

export default function CheckoutPage() {
  return (
    <div className="container pb-20 pt-12">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Плащане</p>
        <h1 className="font-display text-4xl text-primary">Финализирайте поръчката</h1>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr,0.7fr]">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </div>
  );
}

