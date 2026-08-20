"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { BonfireProduct } from "./bonfire-products";

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function BonfireProductCard({ product }: { product: BonfireProduct }) {
  const [styleIndex, setStyleIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const style = product.styles[styleIndex] ?? product.styles[0];
  const color = style?.colors[colorIndex] ?? style?.colors[0];

  const alt = useMemo(() => {
    if (!style || !color) return product.name;
    return `${product.name}, a ${color.name} ${style.name}`;
  }, [product.name, style, color]);

  if (!style || !color) return null;

  const showStyles = product.styles.length > 1;
  const showColors = style.colors.length > 1;

  return (
    <article className="bonfire-card">
      <a
        href={product.checkoutUrl}
        className="bonfire-card-media"
        {...ext}
        aria-label={`Checkout ${alt} on Bonfire`}
      >
        <span className="bonfire-card-badge">Bonfire</span>
        <Image
          key={color.image}
          src={color.image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
          className="bonfire-card-img bonfire-card-img-front"
        />
        {color.imageBack ? (
          <Image
            key={color.imageBack}
            src={color.imageBack}
            alt={`${alt} (back view)`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
            className="bonfire-card-img bonfire-card-img-back"
          />
        ) : null}
      </a>
      <div className="bonfire-card-body">
        <p className="bonfire-card-type">{style.name}</p>
        <h3>{product.name}</h3>
        <p className="bonfire-card-desc">{product.description}</p>

        {showStyles ? (
          <div className="bonfire-style-picker">
            <p className="bonfire-picker-label">Style</p>
            <div className="bonfire-style-options" role="listbox" aria-label="Select a style">
              {product.styles.map((option, index) => (
                <button
                  key={option.name}
                  type="button"
                  role="option"
                  aria-selected={index === styleIndex}
                  className={`bonfire-style-chip${index === styleIndex ? " is-active" : ""}`}
                  onClick={() => {
                    setStyleIndex(index);
                    setColorIndex(0);
                  }}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {showColors ? (
          <div className="bonfire-color-picker">
            <p className="bonfire-picker-label">
              Color: <span>{color.name}</span>
            </p>
            <div className="bonfire-color-options" role="listbox" aria-label="Select a color">
              {style.colors.map((option, index) => (
                <button
                  key={`${style.name}-${option.name}`}
                  type="button"
                  role="option"
                  aria-selected={index === colorIndex}
                  aria-label={option.name}
                  title={option.name}
                  className={`bonfire-swatch${index === colorIndex ? " is-active" : ""}`}
                  style={{ backgroundColor: option.hex }}
                  onClick={() => setColorIndex(index)}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="bonfire-color-name">Color: {color.name}</p>
        )}

        <div className="bonfire-card-footer">
          <p className="bonfire-card-price">
            <span>{showColors || showStyles ? "Price" : "From"}</span> {color.price}
          </p>
          <a href={product.checkoutUrl} className="shop-button external-link" {...ext}>
            Checkout on Bonfire
          </a>
        </div>
      </div>
    </article>
  );
}
