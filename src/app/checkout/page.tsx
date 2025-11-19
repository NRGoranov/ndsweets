import { CheckoutForm } from "@/components/sections/CheckoutForm";
import { OrderSummary } from "@/components/sections/OrderSummary";

export default function CheckoutPage() {
  return (
    <div className="container pb-20 pt-12">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Плащане</p>
        <h1 className="font-display text-4xl text-primary">Финализирайте поръчката</h1>
        <p className="mt-4 text-primary/70">
          За момента приемаме плащане само в брой при лично получаване в ателието – работим по
          старта на собствена доставка и онлайн разплащания.
        </p>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr,0.7fr]">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </div>
  );
}

