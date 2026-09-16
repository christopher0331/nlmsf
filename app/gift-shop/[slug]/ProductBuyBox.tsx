"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import MerchMockup from "@/components/merch/MerchMockup";
import { addToCart } from "@/lib/merch/cart";
import type { MerchMediumId } from "@/lib/merch/catalog";
import type { ShopListing } from "../CustomMerchGrid";

export default function ProductBuyBox({ listing }: { listing: ShopListing }) {
  const [colorId, setColorId] = useState(listing.colorOptions[0]?.id ?? "purple");
  const [size, setSize] = useState(listing.sizes[0] ?? "M");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const color = useMemo(
    () => listing.colorOptions.find((option) => option.id === colorId) ?? listing.colorOptions[0],
    [listing.colorOptions, colorId],
  );

  if (!color) return null;

  return (
    <div className="custom-product-layout">
      <div className="custom-product-preview">
        <MerchMockup
          imageUrl={listing.imageUrl}
          colorHex={color.hex}
          mediumId={listing.mediumId as MerchMediumId}
          title={listing.title}
        />
      </div>
      <div className="custom-product-info">
        <p className="custom-merch-type">{listing.mediumName}</p>
        <h1>{listing.title}</h1>
        <p>{listing.description}</p>
        <p className="custom-product-note">
          Checkout stays on NLMSF.org. After your payment, Printify prints this design and ships it to you. After
          printing and shipping costs, proceeds support LMS research.
        </p>
        <div className="bonfire-color-picker">
          <p className="bonfire-picker-label">
            Color: <span>{color.name}</span>
          </p>
          <div className="bonfire-color-options">
            {listing.colorOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`bonfire-swatch${option.id === color.id ? " is-active" : ""}`}
                style={{ backgroundColor: option.hex }}
                aria-label={option.name}
                onClick={() => setColorId(option.id)}
              />
            ))}
          </div>
        </div>
        <label className="custom-merch-size">
          Size
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            {listing.sizes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="custom-merch-size">
          Quantity
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <p className="bonfire-card-price">
          <span>Price</span> {listing.priceLabel}
        </p>
        <button
          type="button"
          className="shop-button"
          onClick={() => {
            addToCart({
              listingId: listing.id,
              slug: listing.slug,
              title: listing.title,
              mediumId: listing.mediumId,
              mediumName: listing.mediumName,
              colorId: color.id,
              colorName: color.name,
              colorHex: color.hex,
              size,
              quantity,
              priceCents: listing.priceCents,
              imageUrl: listing.imageUrl,
            });
            setAdded(true);
          }}
        >
          {added ? "Added to cart" : "Add to cart"}
        </button>
        <p>
          <Link href="/gift-shop/cart">Go to cart</Link>
          {" · "}
          <Link href="/gift-shop#custom-merch">Back to shop</Link>
        </p>
      </div>
    </div>
  );
}
