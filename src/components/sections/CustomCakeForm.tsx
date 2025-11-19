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
  eventDate: z.string().min(1, "Изберете дата"),
  servings: z.string().min(1, "Посочете ориентировъчен брой гости"),
  inspiration: z.string().min(10, "Споделете идея или насоки"),
});

type CustomCakeValues = z.infer<typeof schema>;

export function CustomCakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<CustomCakeValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: CustomCakeValues) => {
    console.info("Custom cake request", values);
    setSubmitted(true);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 rounded-[2rem] border border-primary/10 bg-white/95 p-6 shadow-soft">
      <div>
        <label className="text-sm text-primary">Име и фамилия</label>
        <Input {...form.register("name")} placeholder="Александра Георгиева" />
        {form.formState.errors.name && (
          <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="text-sm text-primary">Имейл</label>
        <Input type="email" {...form.register("email")} placeholder="studio@example.com" />
        {form.formState.errors.email && (
          <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-primary">Дата на събитието</label>
          <Input type="date" {...form.register("eventDate")} />
          {form.formState.errors.eventDate && (
            <p className="text-xs text-red-500">{form.formState.errors.eventDate.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-primary">Брой гости</label>
          <Input {...form.register("servings")} placeholder="напр. 25 души" />
          {form.formState.errors.servings && (
            <p className="text-xs text-red-500">{form.formState.errors.servings.message}</p>
          )}
        </div>
      </div>
      <div>
        <label className="text-sm text-primary">Вдъхновение / moodboard линкове</label>
        <Textarea
          {...form.register("inspiration")}
          rows={4}
          placeholder="Pinterest борд, цветова палитра, послание..."
        />
        {form.formState.errors.inspiration && (
          <p className="text-xs text-red-500">{form.formState.errors.inspiration.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full">
        Изпрати запитване
      </Button>
      {submitted && (
        <p className="text-center text-sm text-primary">
          Ще се свържем в рамките на 24 часа със скица и оферта.
        </p>
      )}
    </form>
  );
}

