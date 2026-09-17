"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clearCart } from "@/lib/merch/cart";

type OrderView = {
  id: string;
  name: string;
  email: string;
  status: string;
  totalLabel: string;
  printifyStatus: string | null;
};

export default function OrderConfirmationClient() {
  const [order, setOrder] = useState<OrderView | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    const orderId = params.get("order");
    const qs = new URLSearchParams();
    if (sessionId) qs.set("session_id", sessionId);
    if (orderId) qs.set("order", orderId);
    fetch(`/api/merch/verify?${qs.toString()}`)
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Could not load order");
        setOrder(json);
        clearCart();
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Could not load order");
      });
  }, []);

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <Link href="/gift-shop">Return to the gift shop</Link>
      </div>
    );
  }

  if (!order) return <p>Confirming your order…</p>;

  const sent = order.status === "submitted_to_print" || order.status === "paid";

  return (
    <div className="custom-confirm">
      <h1>Thank you, {order.name}</h1>
      <p>
        Your payment of {order.totalLabel} supports LMS research. Keep this page as a receipt.
      </p>
      <p>
        Status: <strong>{sent ? "Paid" : order.status}</strong>
        {order.printifyStatus ? ` · Fulfillment: ${order.printifyStatus}` : ""}
      </p>
      <p>
        Printify prints your custom NLMSF merch and ships it to the address you entered at checkout. Standard delivery
        is about 7–14 business days.
      </p>
      <p>
        <Link href="/gift-shop#custom-merch">Continue shopping</Link>
      </p>
    </div>
  );
}
