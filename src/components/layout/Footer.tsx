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
      toast.error("Please enter a valid email address");
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

    toast.success("Successfully subscribed!", {
      description: "You'll receive our newsletter with exclusive recipes and updates. It's completely free!",
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
              Luxurious yet heartfelt sweets handcrafted in Sofia with sustainably sourced
              ingredients.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-primary">Newsletter</h3>
            <p className="mt-2 text-sm text-primary/70">
              Subscribe for free recipes, exclusive offers, and bakery updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" disabled={isSubmitting} size="sm">
                {isSubmitting ? "..." : "Subscribe"}
              </Button>
            </form>
          </div>

          <div className="flex flex-col gap-2 text-sm text-primary/70">
            <Link href="tel:+359000000" className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" />
              +359 000 000
            </Link>
            <Link href="mailto:orders@ndsweets.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" />
              orders@ndsweets.com
            </Link>
            <p className="mt-4">© {new Date().getFullYear()} ndsweets. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

