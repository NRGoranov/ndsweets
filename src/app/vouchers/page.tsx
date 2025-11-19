import { VoucherForm } from "@/components/sections/VoucherForm";

export const metadata = {
  title: "Ваучери | ndsweets",
};

export default function VouchersPage() {
  return (
    <div className="container space-y-8 py-12">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Ваучери</p>
        <h1 className="font-display text-4xl text-primary">Подари сладко преживяване</h1>
        <p className="text-primary/70">
          Изберете стойност, добавете лично послание и решете дали ваучерът да бъде дигитален или
          отпечатан с восъчен печат.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <VoucherForm />
        <div className="rounded-[2rem] border border-primary/10 bg-cream-50/70 p-6">
          <h2 className="font-display text-2xl text-primary">Как работи</h2>
          <ul className="mt-4 space-y-3 text-primary/70">
            <li>• Ваучерите са валидни 12 месеца от датата на издаване.</li>
            <li>• Могат да се използват за торти, бенто десерти и макарони.</li>
            <li>• При стойност над 200 лв. подаръкът идва с комплимент – мини кутия макарони.</li>
          </ul>
          <p className="mt-4 text-sm text-primary/60">
            Ако желаете корпоративни ваучери или персонализиран дизайн, свържете се с нас на
            studio@ndsweets.com.
          </p>
        </div>
      </div>
    </div>
  );
}

