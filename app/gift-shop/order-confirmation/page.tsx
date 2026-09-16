import type { Metadata } from "next";
import OrderConfirmationClient from "./OrderConfirmationClient";
import "../gift-shop.css";

export const metadata: Metadata = {
  title: "Order confirmation | NLMSF Gift Shop",
  robots: { index: false, follow: false },
};

export default function OrderConfirmationPage() {
  return (
    <div className="gift-shop-page">
      <div className="content-container custom-product-page">
        <OrderConfirmationClient />
      </div>
    </div>
  );
}
