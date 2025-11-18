"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollHint } from "@/components/layout/ScrollHint";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroSection() {
  const { shouldReduceMotion } = useReducedMotion();

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden rounded-[2.5rem] bg-[#f8efe4] px-6 py-16 md:px-16">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1500&q=80"
          alt="Luxury pastry and cake display in elegant bakery"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f0f09]/85 via-[#421e13]/60 to-[#f8efe4]/40" />
      </div>

      <div className="relative z-10 grid gap-12 text-white md:grid-cols-2">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? {} : { duration: 0.4, ease: "easeOut" }}
          style={shouldReduceMotion ? {} : { willChange: "transform, opacity" }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-rose-100">
            Artisanal bakery in Sofia
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Handcrafted sweets for your sweetest moments
          </h1>
          <p className="mt-6 max-w-xl text-lg text-rose-100/90">
            Boutique desserts rooted in European pastry traditions, layered with Bulgarian soul and
            impeccable hospitality.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/menu">View menu</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/custom-cakes">Design a custom cake</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? {} : { delay: 0.05, duration: 0.4, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md"
          style={shouldReduceMotion ? {} : { willChange: "transform, opacity" }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">This week’s highlights</p>
          <ul className="mt-6 space-y-4 text-white/90">
            <li>
              <p className="font-display text-xl">Velvet raspberry bento</p>
              <p className="text-sm text-white/75">Limited edition with Sicilian pistachio lace</p>
            </li>
            <li>
              <p className="font-display text-xl">Champagne praline cake</p>
              <p className="text-sm text-white/75">Layered mousse with almond sponge & brûléed top</p>
            </li>
            <li>
              <p className="font-display text-xl">Macaron atelier box</p>
              <p className="text-sm text-white/75">12-piece palette of fruit-forward classics</p>
            </li>
          </ul>
        </motion.div>
      </div>
      <ScrollHint />
    </section>
  );
}

