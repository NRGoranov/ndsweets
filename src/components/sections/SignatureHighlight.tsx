"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SignatureHighlight() {
  return (
    <section className="container mt-24 grid gap-10 rounded-[2.5rem] border border-primary/10 bg-cream-100/60 p-10 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-80 overflow-hidden rounded-[2rem]"
      >
        <Image
          src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=80"
          alt="Подписова торта с елегантна декорация"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Подпис колекция</p>
        <h2 className="font-display text-4xl text-primary">Класика ndsweets</h2>
        <p className="text-primary/80">
          Вдъхновена от модерните парижки патисерии, колекцията ни обединява леки мусове, кадифени
          глазури и детайли с ръчно рисуван финес.
        </p>
        <ul className="space-y-3 text-primary/80">
          <li>• Карусел от шампанско и пралине</li>
          <li>• Ванилов облак от Таити</li>
          <li>• Шарлот с шамфъстък и маракуя</li>
        </ul>
        <Button asChild>
          <Link href="/menu?featured=true">Разгледай колекцията</Link>
        </Button>
      </motion.div>
    </section>
  );
}

