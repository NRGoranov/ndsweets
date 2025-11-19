import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheckoutCancelPage() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Процесът е прекъснат</p>
      <h1 className="font-display text-4xl text-primary">Нужда от корекция?</h1>
      <p className="max-w-xl text-primary/70">
        Количката ви е запазена. Можете да коригирате вкусове или размери и да изпратите заявката
        отново – плащането остава в брой при получаване.
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

