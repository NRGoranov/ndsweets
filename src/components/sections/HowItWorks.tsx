"use client";

import { motion } from "framer-motion";
import { LucideIcon, Sparkles, PenSquare, CreditCard, PartyPopper } from "lucide-react";
import type { HowItWorksStep } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  pen: PenSquare,
  "credit-card": CreditCard,
  party: PartyPopper,
};

export function HowItWorksSection({ steps }: { steps: HowItWorksStep[] }) {
  return (
    <section className="container mt-24">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/50">How ordering works</p>
        <h2 className="mt-2 font-display text-3xl text-primary">Effortless four-step ritual</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => {
          const Icon = iconMap[step.icon] ?? Sparkles;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: step.id * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-primary/60">
                Step {step.id}
              </p>
              <h3 className="mt-2 font-display text-2xl text-primary">{step.title}</h3>
              <p className="mt-2 text-primary/70">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

