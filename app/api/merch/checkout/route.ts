import { NextRequest, NextResponse } from "next/server";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import {
  STANDARD_SHIPPING_CENTS,
  colorsForMedium,
  getColor,
  getMedium,
  isValidSize,
  normalizeQuantity,
  parseColorIds,
  type MerchMediumId,
} from "@/lib/merch/catalog";
import { listingVariantForCart } from "@/lib/merch/dto";
import { parsePrintifyMockups } from "@/lib/merch/printify-map";
import { getStripe, merchIntegrationIdentifier } from "@/lib/stripe";
import type { StoredOrderItem } from "@/lib/merch/fulfill";

type CheckoutItem = {
  listingId: string;
  colorId: string;
  size: string;
  quantity: number;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim() || null;
    const items = Array.isArray(body?.items) ? (body.items as CheckoutItem[]) : [];

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }
    if (!items.length) {
      return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
    }

    const prisma = await getMerchPrisma();
    const listingIds = [...new Set(items.map((item) => item.listingId))];
    const listings = await prisma.merchListing.findMany({
      where: { id: { in: listingIds }, published: true },
      include: { design: true },
    });
    const listingMap = new Map(listings.map((listing) => [listing.id, listing]));

    const orderItems: StoredOrderItem[] = [];
    let amountCents = 0;

    for (const raw of items) {
      const listing = listingMap.get(raw.listingId);
      if (!listing) {
        return NextResponse.json({ error: "One of the items is no longer available." }, { status: 400 });
      }
      const mediumId = listing.mediumId as MerchMediumId;
      const quantity = normalizeQuantity(raw.quantity);
      const printifyMatch = listingVariantForCart(listing, raw.colorId, raw.size);
      if (listing.printifyProductId) {
        if (!printifyMatch) {
          return NextResponse.json({ error: "Choose a valid color and size for this Printify item." }, { status: 400 });
        }
      } else {
        const allowedColors = parseColorIds(listing.colorsJson);
        if (!allowedColors.includes(raw.colorId) || !getColor(raw.colorId)) {
          return NextResponse.json({ error: "Choose a valid color." }, { status: 400 });
        }
        if (!colorsForMedium(mediumId).some((c) => c.id === raw.colorId)) {
          return NextResponse.json({ error: "That color is not available on this item." }, { status: 400 });
        }
        if (!isValidSize(mediumId, raw.size)) {
          return NextResponse.json({ error: "Choose a valid size." }, { status: 400 });
        }
      }
      orderItems.push({
        listingId: listing.id,
        designId: listing.designId,
        title: listing.title,
        mediumId,
        colorId: raw.colorId,
        size: raw.size,
        quantity,
        priceCents: listing.priceCents,
        printifyProductId: printifyMatch?.productId ?? null,
        printifyVariantId: printifyMatch?.variant.id ?? null,
      });
      amountCents += listing.priceCents * quantity;
    }

    const shippingCents = STANDARD_SHIPPING_CENTS;
    const totalCents = amountCents + shippingCents;

    const order = await prisma.merchOrder.create({
      data: {
        name,
        email,
        phone,
        status: "pending",
        itemsJson: JSON.stringify(orderItems),
        amountCents,
        shippingCents,
        totalCents,
      },
    });

    const stripe = getStripe();
    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      phone_number_collection: { enabled: true },
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: shippingCents, currency: "usd" },
            display_name: "Standard shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 7 },
              maximum: { unit: "business_day", value: 14 },
            },
          },
        },
      ],
      line_items: orderItems.map((item) => {
        const listing = listingMap.get(item.listingId)!;
        const printifyMatch = listingVariantForCart(listing, item.colorId, item.size);
        const colorName = printifyMatch?.variant.colorName ?? getColor(item.colorId)?.name ?? item.colorId;
        const medium = getMedium(item.mediumId);
        const mockups = parsePrintifyMockups(listing.printifyVariantsJson);
        const photoUrl =
          mockups.mockupsByColor[item.colorId] || mockups.mockupUrl || null;
        const image = photoUrl || `${origin.replace(/\/$/, "")}/api/merch/designs/${item.designId}/image/`;
        return {
          price_data: {
            currency: "usd",
            unit_amount: item.priceCents,
            product_data: {
              name: `${listing.title} — ${medium?.shortName ?? item.mediumId}`,
              description: `${colorName} / ${item.size}. Proceeds support LMS research.`,
              images: [image],
            },
          },
          quantity: item.quantity,
        };
      }),
      metadata: {
        kind: "merch",
        orderId: order.id,
      },
      client_reference_id: order.id,
      success_url: `${origin.replace(/\/$/, "")}/gift-shop/order-confirmation/?session_id={CHECKOUT_SESSION_ID}&order=${order.id}`,
      cancel_url: `${origin.replace(/\/$/, "")}/gift-shop/cart/?cancelled=1`,
      integration_identifier: merchIntegrationIdentifier(),
    });

    await prisma.merchOrder.update({
      where: { id: order.id },
      data: { stripeSessionId: session.id },
    });

    return NextResponse.json({ url: session.url, orderId: order.id });
  } catch (err) {
    console.error("Merch checkout error:", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: process.env.NODE_ENV === "development" ? message : "Failed to start checkout." },
      { status: 500 },
    );
  }
}
