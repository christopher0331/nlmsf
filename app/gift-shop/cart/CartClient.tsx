"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import MerchMockup from "@/components/merch/MerchMockup";
import {
  cartSubtotal,
  clearCart,
  readCart,
  removeFromCart,
  updateCartQuantity,
  type StoredCartItem,
} from "@/lib/merch/cart";
import { STANDARD_SHIPPING_CENTS, formatUsd, type MerchMediumId } from "@/lib/merch/catalog";

export default function CartClient() {
  const [items, setItems] = useState<StoredCartItem[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    setItems(readCart());
    const params = new URLSearchParams(window.location.search);
    setCancelled(params.get("cancelled") === "1");
    const onChange = () => setItems(readCart());
    window.addEventListener("nlmsf-merch-cart", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("nlmsf-merch-cart", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const subtotal = useMemo(() => cartSubtotal(items), [items]);
  const total = subtotal + (items.length ? STANDARD_SHIPPING_CENTS : 0);

  async function checkout(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/merch/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          items: items.map((item) => ({
            listingId: item.listingId,
            colorId: item.colorId,
            size: item.size,
            quantity: item.quantity,
          })),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.url) throw new Error(json.error || "Checkout failed");
      window.location.href = json.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
      setSubmitting(false);
    }
  }

  if (!items.length) {
    return (
      <div className="custom-cart-empty">
        {cancelled ? <p>Checkout was cancelled. Your cart is still here when you add items again.</p> : null}
        <p>Your cart is empty.</p>
        <Link href="/gift-shop#custom-merch" className="shop-button">
          Browse custom merch
        </Link>
      </div>
    );
  }

  return (
    <div className="custom-cart">
      {cancelled ? <p className="custom-cart-note">Checkout was cancelled. You can try again below.</p> : null}
      <ul className="custom-cart-list">
        {items.map((item) => (
          <li key={`${item.listingId}-${item.colorId}-${item.size}`} className="custom-cart-item">
            <div className="custom-cart-thumb">
              <MerchMockup
                imageUrl={item.imageUrl}
                colorHex={item.colorHex}
                mediumId={item.mediumId as MerchMediumId}
                title={item.title}
              />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>
                {item.mediumName} · {item.colorName} · {item.size}
              </p>
              <p>{formatUsd(item.priceCents)}</p>
              <label>
                Qty{" "}
                <select
                  value={item.quantity}
                  onChange={(e) => setItems(updateCartQuantity(item.listingId, item.colorId, item.size, Number(e.target.value)))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              <button type="button" className="custom-cart-remove" onClick={() => setItems(removeFromCart(item.listingId, item.colorId, item.size))}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <aside className="custom-cart-summary">
        <p>Subtotal {formatUsd(subtotal)}</p>
        <p>Standard shipping {formatUsd(STANDARD_SHIPPING_CENTS)}</p>
        <p className="custom-cart-total">Total {formatUsd(total)}</p>
        <p className="custom-cart-note">
          You pay NLMSF. Printify prints and ships the order. After those costs, proceeds support LMS research.
        </p>
        <form onSubmit={checkout} className="custom-cart-form">
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Phone (optional)
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          {error ? <p className="custom-cart-error">{error}</p> : null}
          <button type="submit" className="shop-button" disabled={submitting}>
            {submitting ? "Starting checkout…" : "Checkout on NLMSF"}
          </button>
        </form>
        <button type="button" className="custom-cart-remove" onClick={() => { clearCart(); setItems([]); }}>
          Empty cart
        </button>
      </aside>
    </div>
  );
}
