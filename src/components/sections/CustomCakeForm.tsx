"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  eventDate: z.string(),
  servings: z.string(),
  inspiration: z.string().min(10),
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
        <label className="text-sm text-primary">Name</label>
        <Input {...form.register("name")} />
      </div>
      <div>
        <label className="text-sm text-primary">Email</label>
        <Input type="email" {...form.register("email")} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-primary">Event date</label>
          <Input type="date" {...form.register("eventDate")} />
        </div>
        <div>
          <label className="text-sm text-primary">Servings</label>
          <Input {...form.register("servings")} placeholder="E.g. 25 guests" />
        </div>
      </div>
      <div>
        <label className="text-sm text-primary">Inspiration / moodboard links</label>
        <Textarea {...form.register("inspiration")} rows={4} />
      </div>
      <Button type="submit" className="w-full">
        Request design call
      </Button>
      {submitted && (
        <p className="text-center text-sm text-primary">
          We’ll reply within 24 hours with sketches & pricing.
        </p>
      )}
    </form>
  );
}

