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
  phone: z.string().optional(),
  message: z.string().min(10, "Tell us a little more about your request"),
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
        <label className="text-sm text-primary">Name</label>
        <Input {...form.register("name")} />
        {form.formState.errors.name && (
          <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="text-sm text-primary">Email</label>
        <Input type="email" {...form.register("email")} />
        {form.formState.errors.email && (
          <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="text-sm text-primary">Phone (optional)</label>
        <Input {...form.register("phone")} />
      </div>
      <div>
        <label className="text-sm text-primary">Tell us everything</label>
        <Textarea {...form.register("message")} rows={5} />
        {form.formState.errors.message && (
          <p className="text-xs text-red-500">{form.formState.errors.message.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full">
        Send message
      </Button>
      {status === "success" && (
        <p className="text-center text-sm text-primary">
          Thank you! Our pastry concierge will reply shortly.
        </p>
      )}
    </form>
  );
}

