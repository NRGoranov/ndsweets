"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Моля, въведете валиден имейл");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Store subscription in localStorage for demo
    const subscriptions = JSON.parse(localStorage.getItem("ndsweets-newsletter") || "[]");
    if (!subscriptions.includes(email)) {
      subscriptions.push(email);
      localStorage.setItem("ndsweets-newsletter", JSON.stringify(subscriptions));
    }

    toast.success("Успешно се абонирахте!", {
      description: "Ще получавате рецепти, предложения и новини – абонаментът е безплатен.",
      duration: 4000,
    });

    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <footer className="mt-20 border-t border-primary/10 bg-cream-100/60">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-primary">ndsweets</p>
            <p className="mt-2 max-w-sm text-sm text-primary/70">
              Луксозни, но топли десерти, ръчно изработени в София с подбрани български продукти.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-primary">Бюлетин</h3>
            <p className="mt-2 text-sm text-primary/70">
              Абонирайте се за рецепти, специални предложения и новини от ателието.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Вашият имейл"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" disabled={isSubmitting} size="sm">
                {isSubmitting ? "..." : "Абонирай се"}
              </Button>
            </form>
          </div>

          <div className="flex flex-col gap-2 text-sm text-primary/70">
            <Link href="tel:+359885721860" className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" />
              +359 88 572 18 60
            </Link>
            <Link href="mailto:orders@ndsweets.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" />
              orders@ndsweets.com
            </Link>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-primary/60">
              ndsweets <span className="ml-2 text-[11px] normal-case">by <a href="https://www.nrgtrw.com" target="_blank" rel="noreferrer" className="underline">Nadya Dimitrova</a></span>
            </p>
            <p className="text-xs text-primary/60">© {new Date().getFullYear()} ndsweets. Всички права запазени. <a href="https://www.nrgtrw.com" target="_blank" rel="noreferrer" className="underline">nrgtrw.com</a></p>
          </div>
          <p className="mt-6 text-center text-xs text-primary/50 md:text-left">
            Създаден от{" "}
            <Link href="https://www.nrgtrw.com" target="_blank" rel="noreferrer" className="underline transition hover:text-primary">
              nrgtrw
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

