"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Добавете име"),
  email: z.string().email("Въведете валиден имейл"),
  phone: z.string().optional(),
  message: z.string().min(10, "Разкажете ни малко повече за запитването"),
});

type ContactValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const form = useForm<ContactValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: ContactValues) => {
    console.info("Contact form submitted", values);
    setStatus("success");
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-soft">
      <div>
        <label className="text-sm text-primary">Име</label>
        <Input {...form.register("name")} placeholder="Мария Иванова" />
        {form.formState.errors.name && (
          <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="text-sm text-primary">Имейл</label>
        <Input type="email" {...form.register("email")} placeholder="hello@example.com" />
        {form.formState.errors.email && (
          <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="text-sm text-primary">Телефон (по желание)</label>
        <Input {...form.register("phone")} placeholder="+359..." />
      </div>
      <div>
        <label className="text-sm text-primary">Разкажете ни повече</label>
        <Textarea
          {...form.register("message")}
          rows={5}
          placeholder="Напр. Торта за 18-ти рожден ден в пастелни тонове..."
        />
        {form.formState.errors.message && (
          <p className="text-xs text-red-500">{form.formState.errors.message.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full">
        Изпрати запитване
      </Button>
      {status === "success" && (
        <p className="text-center text-sm text-primary">
          Благодарим! Ще се свържем с вас в рамките на работния ден.
        </p>
      )}
    </form>
  );
}

