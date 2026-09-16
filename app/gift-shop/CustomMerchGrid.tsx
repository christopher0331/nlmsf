"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import MerchMockup from "@/components/merch/MerchMockup";
import { addToCart } from "@/lib/merch/cart";
import type { MerchMediumId } from "@/lib/merch/catalog";

export type ShopListing = {
  id: string;
  slug: string;
  title: string;
  description: string;
  mediumId: string;
  mediumName: string;
  priceCents: number;
  priceLabel: string;
  imageUrl: string;
  sizes: string[];
  colorOptions: { id: string; name: string; hex: string }[];
};

export default function CustomMerchGrid({ listings }: { listings: ShopListing[] }) {
  if (!listings.length) {
    return (
      <div className="custom-merch-empty">
        <p>
          The first staff-approved custom designs are being prepared. Bonfire apparel below remains available, and this
          collection will appear here as soon as a design is published from Merch Studio.
        </p>
      </div>
    );
  }

  return (
    <div className="custom-merch-grid">
      {listings.map((listing) => (
        <ShopCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}

function ShopCard({ listing }: { listing: ShopListing }) {
  const [colorId, setColorId] = useState(listing.colorOptions[0]?.id ?? "purple");
  const [size, setSize] = useState(listing.sizes[0] ?? "M");
  const [added, setAdded] = useState(false);
  const color = useMemo(
    () => listing.colorOptions.find((option) => option.id === colorId) ?? listing.colorOptions[0],
    [listing.colorOptions, colorId],
  );

  if (!color) return null;

  return (
    <article className="custom-merch-card">
      <Link href={`/gift-shop/${listing.slug}`} className="custom-merch-media">
        <MerchMockup
          imageUrl={listing.imageUrl}
          colorHex={color.hex}
          mediumId={listing.mediumId as MerchMediumId}
          title={listing.title}
        />
      </Link>
      <div className="custom-merch-body">
        <p className="custom-merch-type">{listing.mediumName}</p>
        <h3>
          <Link href={`/gift-shop/${listing.slug}`}>{listing.title}</Link>
        </h3>
        <p className="custom-merch-desc">{listing.description}</p>
        <div className="bonfire-color-picker">
          <p className="bonfire-picker-label">
            Color: <span>{color.name}</span>
          </p>
          <div className="bonfire-color-options" role="listbox" aria-label="Select a color">
            {listing.colorOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                role="option"
                aria-selected={option.id === color.id}
                aria-label={option.name}
                title={option.name}
                className={`bonfire-swatch${option.id === color.id ? " is-active" : ""}`}
                style={{ backgroundColor: option.hex }}
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
        <div className="bonfire-card-footer">
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
                quantity: 1,
                priceCents: listing.priceCents,
                imageUrl: listing.imageUrl,
              });
              setAdded(true);
            }}
          >
            {added ? "Added to cart" : "Add to cart"}
          </button>
          <Link href="/gift-shop/cart" className="custom-merch-cart-link">
            View cart
          </Link>
        </div>
      </div>
    </article>
  );
}
