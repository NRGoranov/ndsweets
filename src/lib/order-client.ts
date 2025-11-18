const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const USE_MOCK_PAYMENT = process.env.NEXT_PUBLIC_USE_MOCK_PAYMENT === "true";

type OrderPayload = {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryMethod: "PICKUP" | "DELIVERY";
  pickupLocation?: string | null;
  deliveryAddress?: Record<string, unknown> | null;
  notes?: string;
  items: Array<{
    productId: string;
    name: string;
    variantLabel: string;
    quantity: number;
    unitPrice: number;
    extras: Array<{ name: string; price: number }>;
  }>;
  totalAmount: number;
};

export async function submitOrder(payload: OrderPayload) {
  if (!API_BASE_URL) {
    console.info("[order-client] mock order submitted", payload);
    return { id: "mock-order-id", status: "PENDING" };
  }

  const response = await fetch(`${API_BASE_URL}/api/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Unable to create order");
  }

  return response.json();
}

export async function createCheckoutSession(orderId: string) {
  if (!API_BASE_URL || USE_MOCK_PAYMENT) {
    console.info("[order-client] mock payment triggered", orderId);
    return { url: `/checkout/success?mock=true&orderId=${orderId}` };
  }

  const response = await fetch(`${API_BASE_URL}/api/payment/checkout-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderId }),
  });

  if (!response.ok) {
    throw new Error("Unable to initiate payment");
  }

  return response.json();
}

