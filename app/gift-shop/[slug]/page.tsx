import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMerchPrisma } from "@/lib/merch/ensure-schema";
import { toListingDto } from "@/lib/merch/dto";
import { colorsForMedium, getMedium, parseColorIds, type MerchMediumId } from "@/lib/merch/catalog";
import ProductBuyBox from "./ProductBuyBox";
import "../gift-shop.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prisma = await getMerchPrisma();
  const listing = await prisma.merchListing.findUnique({ where: { slug } });
  if (!listing || !listing.published) {
    return { title: "Gift Shop | NLMSF" };
  }
  return {
    title: `${listing.title} | NLMSF Gift Shop`,
    description: listing.description,
  };
}

export default async function MerchProductPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "cart" || slug === "order-confirmation") notFound();
  const prisma = await getMerchPrisma();
  const listing = await prisma.merchListing.findUnique({
    where: { slug },
    include: { design: { select: { id: true, title: true } } },
  });
  if (!listing || !listing.published) notFound();
  const mediumId = listing.mediumId as MerchMediumId;
  const selected = parseColorIds(listing.colorsJson);
  const shopListing = {
    ...toListingDto(listing),
    sizes: getMedium(mediumId)?.sizes ?? ["M"],
    colorOptions: colorsForMedium(mediumId).filter((color) => selected.includes(color.id)),
  };

  return (
    <div className="gift-shop-page">
      <div className="content-container custom-product-page">
        <ProductBuyBox listing={shopListing} />
      </div>
    </div>
  );
}
