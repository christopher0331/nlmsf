"use client";

import BonfireProductCard from "./BonfireProductCard";
import { bonfireProducts } from "./bonfire-products";

export default function BonfireProductGrid() {
  return (
    <div className="bonfire-grid">
      {bonfireProducts.map((product) => (
        <BonfireProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
