import type { Metadata } from "next";
import Link from "next/link";
import CartClient from "./CartClient";
import "../gift-shop.css";

export const metadata: Metadata = {
  title: "Cart | NLMSF Gift Shop",
  description: "Review your NLMSF custom merchandise and checkout. Proceeds support LMS research.",
};

export default function GiftShopCartPage() {
  return (
    <div className="gift-shop-page">
      <div className="content-container custom-product-page">
        <p>
          <Link href="/gift-shop#custom-merch">← Custom collection</Link>
        </p>
        <h1>Your cart</h1>
        <CartClient />
      </div>
    </div>
  );
}
