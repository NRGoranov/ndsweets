"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollHint } from "@/components/layout/ScrollHint";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden rounded-[2.5rem] bg-[#f8efe4] px-6 py-16 md:px-16">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1500&q=80"
          alt="Витрина с ръчно изработени десерти"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f0f09]/85 via-[#421e13]/60 to-[#f8efe4]/40" />
      </div>

      <div className="relative z-10 grid gap-12 text-white md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: "transform, opacity" }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-rose-100">
            Ателиe за сладкарство в София
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-[0.02em] sm:text-5xl lg:text-6xl">
            Стандартни и премиум торти, бенто десерти, дребни сладки и кетъринг сетове
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-rose-100/90">
            Работим ръчно с подбрани български продукти. В момента приемаме поръчки за лично
            получаване от ателието, а новата ни услуга за доставка е в разработка.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/menu">Виж менютата</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/custom-cakes">Създай торта по поръчка</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-[2rem] border border-white/20 bg-white/25 p-6 backdrop-blur-md"
          style={{ willChange: "transform, opacity" }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Акценти тази седмица</p>
          <ul className="mt-6 space-y-4 text-white/90">
            <li>
              <p className="font-display text-xl">Кадифено малиново бенто</p>
              <p className="text-sm text-white/75">Сицилиански шамфъстък и алено кадифе</p>
            </li>
            <li>
              <p className="font-display text-xl">Шампанско и пралине</p>
              <p className="text-sm text-white/75">Слоест мус с бадемов блат и карамелизиран топинг</p>
            </li>
            <li>
              <p className="font-display text-xl">Кутия Макарон Ателиe</p>
              <p className="text-sm text-white/75">12 флорални и плодови вкуса, сменящи се всеки сезон</p>
            </li>
          </ul>
        </motion.div>
      </div>
      <ScrollHint />
    </section>
  );
}

