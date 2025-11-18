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
  firstName: z.string().min(2, "Please add your first name"),
  lastName: z.string().min(2, "Please add your last name"),
  email: z.string().email(),
  phone: z.string().min(6),
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
      alert("We could not start the payment flow just now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-soft">
      <h2 className="font-display text-3xl text-primary">Checkout</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-primary">First name</label>
          <Input {...form.register("firstName")} />
          {form.formState.errors.firstName && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-primary">Last name</label>
          <Input {...form.register("lastName")} />
          {form.formState.errors.lastName && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.lastName.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-primary">Email</label>
          <Input type="email" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm text-primary">Phone</label>
          <Input {...form.register("phone")} />
          {form.formState.errors.phone && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-sm text-primary">Delivery method</label>
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
              {method === "PICKUP" ? "Pickup" : "Delivery"}
            </button>
          ))}
        </div>
      </div>

  {form.watch("method") === "PICKUP" ? (
        <div>
          <label className="text-sm text-primary">Preferred atelier</label>
          <select
            {...form.register("location")}
            defaultValue="Atelier Vitosha"
            className="h-11 w-full rounded-2xl border border-primary/20 bg-white/80 px-4"
          >
            <option value="Atelier Vitosha">Atelier Vitosha</option>
            <option value="Production Kitchen">Production Kitchen</option>
          </select>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="text-sm text-primary">City</label>
            <Input {...form.register("city")} />
          </div>
          <div>
            <label className="text-sm text-primary">Street</label>
            <Input {...form.register("street")} />
          </div>
          <div>
            <label className="text-sm text-primary">Building / Entrance</label>
            <Input {...form.register("building")} />
          </div>
        </div>
      )}

      <div>
        <label className="text-sm text-primary">Message on cake / special instructions</label>
        <Textarea {...form.register("notes")} placeholder="Gold leaf on top, please add “Happy Anniversary”" />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Processing..." : "Proceed to secure payment"}
      </Button>
      <p className="text-xs text-primary/60">
        Payments are powered by Stripe. In demo mode, this button will simulate a successful payment.
      </p>
    </form>
  );
}

