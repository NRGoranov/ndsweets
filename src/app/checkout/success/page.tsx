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
      <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Благодарим</p>
      <h1 className="font-display text-4xl text-primary">Поръчката е потвърдена</h1>
      <p className="max-w-2xl text-primary/70">
        {isMock
          ? "Това беше демонстрационен режим. Поръчката е записана и очаква потвърждение – плащането се извършва в брой при получаване."
          : "Поръчката е запазена. Нашият екип ще се свърже с вас за уточнения, а плащането се извършва в брой при получаване в ателието."}
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/">Към началната страница</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/menu">Продължи да разглеждаш</Link>
        </Button>
      </div>
    </div>
  );
}

