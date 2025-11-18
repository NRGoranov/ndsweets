"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";
import { Card } from "@/components/ui/card";

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="container mt-24">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Social proof</p>
        <h2 className="mt-2 font-display text-3xl text-primary">Guests who celebrated with us</h2>
        <p className="mt-3 text-primary/70">4.8 average score based on atelier reviews.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full rounded-[2rem] border-primary/10 bg-white/90 p-6 text-primary">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(testimonial.rating) ? "fill-current" : "opacity-30"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-primary/80">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-6 font-semibold">{testimonial.name}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

