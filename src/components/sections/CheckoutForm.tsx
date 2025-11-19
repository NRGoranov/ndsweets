"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/hooks/useCartStore";
import { submitOrder, createCheckoutSession } from "@/lib/order-client";

const schema = z.object({
  firstName: z.string().min(2, "Въведете име"),
  lastName: z.string().min(2, "Въведете фамилия"),
  email: z.string().email("Въведете валиден имейл"),
  phone: z.string().min(6, "Моля, оставете телефон за контакт"),
  method: z.enum(["PICKUP", "DELIVERY"]),
  location: z.string().optional(),
  city: z.string().optional(),
  street: z.string().optional(),
  building: z.string().optional(),
  notes: z.string().optional(),
});

type CheckoutValues = z.infer<typeof schema>;

export function CheckoutForm() {
  const router = useRouter();
  const { items, clear } = useCartStore();
  const [loading, setLoading] = useState(false);
  const form = useForm<CheckoutValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      method: "PICKUP",
    },
  });

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) =>
        sum +
        item.quantity *
          (item.price + item.extras.reduce((extraSum, extra) => extraSum + extra.price, 0)),
      0,
    );
    return { subtotal, total: subtotal + 8 };
  }, [items]);

  const onSubmit = async (values: CheckoutValues) => {
    if (items.length === 0) return;
    try {
      setLoading(true);
      const payload = {
        customerName: `${values.firstName} ${values.lastName}`,
        customerEmail: values.email,
        customerPhone: values.phone,
        deliveryMethod: values.method,
        pickupLocation: values.method === "PICKUP" ? values.location ?? "Atelier Vitosha" : null,
        deliveryAddress:
          values.method === "DELIVERY"
            ? { city: values.city, street: values.street, building: values.building }
            : null,
        notes: values.notes,
        items: items.map((item) => ({
          productId: item.productId,
          name: item.name,
          variantLabel: item.variantLabel,
          quantity: item.quantity,
          unitPrice: item.price,
          extras: item.extras,
        })),
        totalAmount: totals.total,
      };

      const order = await submitOrder(payload);
      const session = await createCheckoutSession(order.id);
      clear();
      router.push(session.url);
    } catch (error) {
      console.error(error);
      alert("Възникна затруднение при плащането. Опитайте отново след малко.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-soft">
      <h2 className="font-display text-3xl text-primary">Детайли за поръчката</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-primary">Име</label>
          <Input {...form.register("firstName")} placeholder="Ана" />
          {form.formState.errors.firstName && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-primary">Фамилия</label>
          <Input {...form.register("lastName")} placeholder="Иванова" />
          {form.formState.errors.lastName && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.lastName.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-primary">Имейл</label>
          <Input type="email" {...form.register("email")} placeholder="studio@example.com" />
          {form.formState.errors.email && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-primary">Телефон</label>
          <Input {...form.register("phone")} placeholder="+359..." />
          {form.formState.errors.phone && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-sm text-primary">Метод на получаване</label>
        <div className="flex gap-3">
          {["PICKUP", "DELIVERY"].map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => form.setValue("method", method as "PICKUP" | "DELIVERY")}
              className={`flex-1 rounded-2xl border px-4 py-3 text-sm font-semibold ${
                form.watch("method") === method ? "border-primary bg-primary/10 text-primary" : "border-primary/20 text-primary/70"
              }`}
            >
              {method === "PICKUP" ? "Вземане от ателие" : "Доставка"}
            </button>
          ))}
        </div>
      </div>

  {form.watch("method") === "PICKUP" ? (
        <div>
          <label className="text-sm text-primary">Предпочитано ателие</label>
          <select
            {...form.register("location")}
            defaultValue="Ателие „Витоша“"
            className="h-11 w-full rounded-2xl border border-primary/20 bg-white/80 px-4"
          >
            <option value="Ателие „Витоша“">Ателие „Витоша“</option>
            <option value="Производствена кухня">Производствена кухня</option>
          </select>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="text-sm text-primary">Град</label>
            <Input {...form.register("city")} placeholder="София" />
          </div>
          <div>
            <label className="text-sm text-primary">Улица</label>
            <Input {...form.register("street")} placeholder="ул. ... №..." />
          </div>
          <div>
            <label className="text-sm text-primary">Сграда / вход</label>
            <Input {...form.register("building")} placeholder="етаж, апартамент" />
          </div>
        </div>
      )}

      <div>
        <label className="text-sm text-primary">Послание върху десерта / Бележки</label>
        <Textarea
          {...form.register("notes")}
          placeholder="Златен лист отгоре, надпис „Честит юбилей“..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Обработваме..." : "Продължи към плащане"}
      </Button>
      <p className="text-xs text-primary/60">
        Плащанията се обработват от Stripe. В демо режим бутонът симулира успешна транзакция.
      </p>
    </form>
  );
}

