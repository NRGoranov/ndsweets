"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup (stored in localStorage)
    const hasSeenPopup = localStorage.getItem("ndsweets-email-popup-seen");
    if (!hasSeenPopup) {
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("ndsweets-email-popup-seen", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    toast.success("Благодарим за доверието!", {
      description: "Получавате 15% отстъпка за първа поръчка и безплатен достъп до нашия бюлетин.",
      duration: 5000,
    });

    setEmail("");
    setIsSubmitting(false);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 z-[101] w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-primary/10 bg-white p-6 shadow-2xl sm:p-8">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-1 text-primary/60 transition hover:bg-primary/10 hover:text-primary"
          aria-label="Затвори"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <h2 className="font-display text-2xl text-primary sm:text-3xl">
            Добре дошли в ndsweets!
          </h2>
          <p className="mt-3 text-base text-primary/70 sm:text-lg">
            Абонирайте се и получите <span className="font-semibold text-primary">15% отстъпка</span> за първа поръчка.
          </p>
          <p className="mt-1 text-xs text-primary/50 sm:text-sm">
            Ще изпращаме рецепти, вдъхновения и ранни покани – без такса.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Input
              type="email"
              placeholder="Въведете имейл"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                type="submit"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Абонирам..." : "Вземи 15%"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="sm:flex-initial"
              >
                Може би по-късно
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

