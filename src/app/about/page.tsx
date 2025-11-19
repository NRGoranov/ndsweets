export const metadata = {
  title: "За нас | ndsweets",
};

export default function AboutPage() {
  return (
    <div className="container space-y-6 py-12">
      <p className="text-sm uppercase tracking-[0.4em] text-primary/50">За нас</p>
      <h1 className="font-display text-4xl text-primary">Ателиe за съвременни десерти в София</h1>
      <p className="max-w-3xl text-lg text-primary/80">
        ndsweets е бутиково сладкарско студио, където висшата сладкарска техника среща уютна
        атмосфера. Работим с българска сметана от пасищни стопанства, шоколад с проследим произход и
        брашна от малки мелници. Всеки детайл се изработва на ръка – от рисуваните темперирани
        шоколади до финалните флорални акценти.
      </p>
      <p className="max-w-3xl text-primary/70">
        Екипът ни от сладкари, декоратори и координатори се грижи процесът да бъде лек – от първото
        запитване през дегустацията до доставката на празника ви. Вярваме, че луксът може да бъде
        топъл и персонален, и всяка нова торта го доказва.
      </p>
    </div>
  );
}

