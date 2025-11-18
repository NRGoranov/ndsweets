const faqs = [
  {
    question: "How far in advance should I order?",
    answer: "Signature cakes: 72h, weddings & custom: minimum 14 days, macarons: 48h.",
  },
  {
    question: "Do you offer delivery?",
    answer: "Yes, we deliver across Sofia with climate-controlled vehicles or coordinate pickup.",
  },
  {
    question: "Can I customise flavours?",
    answer:
      "Absolutely. Each cake has suggested pairings but you can request seasonal fillings or dietary adjustments.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Stripe-powered cards, Apple Pay, Google Pay and on-site POS for pickup orders.",
  },
];

export default function FAQPage() {
  return (
    <div className="container space-y-6 py-12">
      <p className="text-sm uppercase tracking-[0.4em] text-primary/50">FAQ</p>
      <h1 className="font-display text-4xl text-primary">Plan with confidence</h1>
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

