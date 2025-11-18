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
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative h-80 overflow-hidden rounded-[2rem]"
        style={{ willChange: "transform, opacity" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=80"
          alt="Luxury signature cake with elegant decoration"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="space-y-4"
        style={{ willChange: "transform, opacity" }}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Signature collection</p>
        <h2 className="font-display text-4xl text-primary">Classic ndsweets</h2>
        <p className="text-primary/80">
          Inspired by Mishka’s famed FATCARON yet evolved into our own couture pastries—airy
          mousseline layers, jewel-tone glazes and delicate textures designed for celebration.
        </p>
        <ul className="space-y-3 text-primary/80">
          <li>• Champagne praline carrousel</li>
          <li>• Tahitian vanilla cloud cake</li>
          <li>• Pistachio passionfruit charlotte</li>
        </ul>
        <Button asChild>
          <Link href="/menu?featured=true">See signature collection</Link>
        </Button>
      </motion.div>
    </section>
  );
}

