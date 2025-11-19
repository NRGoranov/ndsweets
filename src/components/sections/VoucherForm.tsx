"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  recipient: z.string().min(2, "Въведете име на получателя"),
  email: z.string().email("Имейл адресът е невалиден"),
  amount: z.string(),
  delivery: z.enum(["DIGITAL", "PHYSICAL"]),
  message: z.string().optional(),
});

type VoucherValues = z.infer<typeof schema>;

export function VoucherForm() {
  const [submitted, setSubmitted] = useState(false);
  const [deliveryPreview, setDeliveryPreview] = useState<"DIGITAL" | "PHYSICAL">("DIGITAL");
  const form = useForm<VoucherValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      amount: "100",
      delivery: "DIGITAL",
    },
  });

  const onSubmit = (values: VoucherValues) => {
    console.info("Voucher request", values);
    setSubmitted(true);
    form.reset({ amount: "100", delivery: "DIGITAL" });
    setDeliveryPreview("DIGITAL");
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4 rounded-[2rem] border border-primary/10 bg-white/95 p-6 shadow-soft"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-primary">Име на получателя</label>
          <Input {...form.register("recipient")} placeholder="напр. Мария Иванова" />
          {form.formState.errors.recipient && (
            <p className="text-xs text-red-500">{form.formState.errors.recipient.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-primary">Имейл за изпращане</label>
          <Input type="email" {...form.register("email")} placeholder="gift@example.com" />
          {form.formState.errors.email && (
            <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-primary">Стойност на ваучера</label>
          <select
            {...form.register("amount")}
            className="h-11 w-full rounded-2xl border border-primary/20 bg-white/80 px-4"
          >
            {["50", "100", "150", "200"].map((value) => (
              <option key={value} value={value}>
                {value} лв.
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-primary">Метод на доставка</label>
          <div className="mt-2 flex gap-3">
            {[
              { value: "DIGITAL", label: "Дигитален PDF" },
              { value: "PHYSICAL", label: "Печатен ваучер" },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  const nextValue = option.value as "DIGITAL" | "PHYSICAL";
                  form.setValue("delivery", nextValue);
                  setDeliveryPreview(nextValue);
                }}
                className={`flex-1 rounded-2xl border px-4 py-3 text-sm font-semibold ${
                  deliveryPreview === option.value
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-primary/20 text-primary/70"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <label className="text-sm text-primary">Лично послание (по желание)</label>
        <Textarea
          {...form.register("message")}
          rows={4}
          placeholder="Ще празнуваме с теб – избери любим десерт!"
        />
      </div>
      <Button type="submit" className="w-full">
        Изпрати заявка за ваучер
      </Button>
      {submitted && (
        <p className="text-center text-sm text-primary">
          Благодарим! Ще изпратим ваучера на посочения имейл до 2 часа.
        </p>
      )}
    </form>
  );
}

