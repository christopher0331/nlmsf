"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

type GiftShopOrderFormProps = {
  itemName: string;
  itemPrice: string;
  formId: string;
};

export default function GiftShopOrderForm({
  itemName,
  itemPrice,
  formId,
}: GiftShopOrderFormProps) {
  const [formStatus, setFormStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setFormStatus("");

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken) {
      setFormStatus("Please complete the security check.");
      setSending(false);
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const quantity = String(data.get("quantity") ?? "").trim();
    const address = String(data.get("address") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();

    const message = [
      `Gift Shop Order Request`,
      ``,
      `Item: ${itemName}`,
      `Price: ${itemPrice}`,
      `Quantity: ${quantity}`,
      ``,
      `Shipping / mailing address:`,
      address,
      ``,
      notes ? `Notes:\n${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          subject: `Gift Shop Order: ${itemName}`,
          message,
          newsletter: false,
          turnstileToken,
        }),
      });

      if (!res.ok) {
        const err = (await res.json().catch(() => null)) as { error?: string } | null;
        setFormStatus(err?.error || "Failed to send order request. Please try again.");
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        setSending(false);
        return;
      }

      setFormStatus("Thank you! Your order request was sent. Annie will follow up by email.");
      form.reset();
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } catch {
      setFormStatus("Failed to send order request. Please try again.");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      id={formId}
      className="gift-order-form"
      onSubmit={handleSubmit}
      aria-label={`Order form for ${itemName}`}
    >
      <p className="gift-order-form-intro">
        Request an order below. Your request is emailed to Annie Achee, who will follow up to
        complete your purchase.
      </p>

      <div className="gift-order-form-grid">
        <div className="gift-order-field">
          <label htmlFor={`${formId}-name`}>Full Name *</label>
          <input id={`${formId}-name`} name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="gift-order-field">
          <label htmlFor={`${formId}-email`}>Email *</label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            placeholder="Your email"
          />
        </div>
        <div className="gift-order-field">
          <label htmlFor={`${formId}-phone`}>Phone</label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            placeholder="Optional"
          />
        </div>
        <div className="gift-order-field">
          <label htmlFor={`${formId}-quantity`}>Quantity *</label>
          <input
            id={`${formId}-quantity`}
            name="quantity"
            type="number"
            min={1}
            defaultValue={1}
            required
          />
        </div>
        <div className="gift-order-field gift-order-field-full">
          <label htmlFor={`${formId}-address`}>Shipping Address *</label>
          <textarea
            id={`${formId}-address`}
            name="address"
            required
            rows={3}
            placeholder="Street, city, state, ZIP"
          />
        </div>
        <div className="gift-order-field gift-order-field-full">
          <label htmlFor={`${formId}-notes`}>Notes</label>
          <textarea
            id={`${formId}-notes`}
            name="notes"
            rows={2}
            placeholder="Optional notes for Annie"
          />
        </div>
      </div>

      {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? (
        <div className="gift-order-turnstile">
          <Turnstile
            ref={turnstileRef}
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onSuccess={setTurnstileToken}
            onExpire={() => setTurnstileToken(null)}
            onError={() => setTurnstileToken(null)}
          />
        </div>
      ) : null}

      <button type="submit" className="shop-button gift-order-submit" disabled={sending}>
        {sending ? "Sending…" : "Submit Order Request"}
      </button>

      {formStatus ? (
        <p
          className={`gift-order-status${
            formStatus.startsWith("Thank you") ? " is-success" : " is-error"
          }`}
          role="status"
        >
          {formStatus}
        </p>
      ) : null}
    </form>
  );
}
