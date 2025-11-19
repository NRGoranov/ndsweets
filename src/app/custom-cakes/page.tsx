import { CustomCakeForm } from "@/components/sections/CustomCakeForm";

export default function CustomCakesPage() {
  return (
    <div className="container space-y-6 py-12">
      <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Торти по поръчка</p>
      <h1 className="font-display text-4xl text-primary">Дизайн консултации</h1>
      <p className="max-w-3xl text-primary/70">
        Опишете повода, споделете цветова палитра и вдъхновения, а ние ще създадем индивидуална концепция.
        Отговаряме до 24 часа със скица, дегустационни варианти и план за логистика.
      </p>
      <CustomCakeForm />
    </div>
  );
}

