import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheckoutCancelPage() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Плащането е отменено</p>
      <h1 className="font-display text-4xl text-primary">Искате да направите промяна?</h1>
      <p className="max-w-xl text-primary/70">
        Количката ви е запазена. Можете да коригирате вкусове или допълнения и да опитате отново.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/cart">Назад към количката</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/contact">Свържете се с нас</Link>
        </Button>
      </div>
    </div>
  );
}

