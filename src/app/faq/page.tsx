const faqs = [
  {
    question: "Колко по-рано трябва да поръчам?",
    answer: "Подписови торти: 72 часа, сватбени и персонализирани: минимум 14 дни, макарони: 48 часа.",
  },
  {
    question: "Предлагате ли доставка?",
    answer:
      "Все още довършваме логистиката за доставка. Засега всички поръчки се получават лично от ателието, а при готовност ще обявим новата услуга.",
  },
  {
    question: "Мога ли да персонализирам вкусовете?",
    answer:
      "Разбира се. Предлагаме препоръчани комбинации, но можем да включим сезонни кремове или безглутенови алтернативи.",
  },
  {
    question: "Какви методи на плащане приемате?",
    answer: "В момента приемаме плащане в брой при получаване от ателието. Онлайн плащанията са в подготовка.",
  },
];

export default function FAQPage() {
  return (
    <div className="container space-y-6 py-12">
      <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Въпроси</p>
      <h1 className="font-display text-4xl text-primary">Планирайте спокойно</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-soft">
            <p className="font-display text-2xl text-primary">{faq.question}</p>
            <p className="mt-3 text-primary/70">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

