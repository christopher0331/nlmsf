export type BonfireProduct = {
  id: string;
  name: string;
  productType: string;
  description: string;
  priceFrom: string;
  styles: string[];
  image: string;
  imageBack?: string;
  alt: string;
  checkoutUrl: string;
};

export const BONFIRE_STORE_URL = "https://www.bonfire.com/store/nlmsf/";
export const BONFIRE_ORG_URL =
  "https://www.bonfire.com/org/national-leiomyosarcoma-foundation-141834266/";

export const bonfireProducts: BonfireProduct[] = [
  {
    id: "champion-cap-white",
    name: "Champion of Hope for Leiomyosarcoma Research",
    productType: "White Printed Classic Baseball Cap",
    description:
      "Buy Champion of Hope for Leiomyosarcoma Research merchandise that supports National Leiomyosarcoma Foundation. Featuring White Printed Classic Baseball Caps, professionally printed in the USA. Hope, Courage, Resilience, Strength — NLMSF.Org.",
    priceFrom: "$24.99",
    styles: ["White Printed Classic Baseball Cap"],
    image: "/images/gift-shop/bonfire/cap-white.jpg",
    alt: "Champion of Hope for Leiomyosarcoma Research, a White Printed Classic Baseball Cap",
    checkoutUrl: "https://www.bonfire.com/champion-of-hope-for-leiomyosarcoma-research-/",
  },
  {
    id: "champion-cap-logo",
    name: "Champion of Hope for Leiomyosarcoma Research",
    productType: "Printed Classic Baseball Cap",
    description:
      "Check out our website at www.nlmsf.org to learn more about this rare cancer. National Leiomyosarcoma Foundation cap with Support, Education, Advocacy, and Research branding. Professionally printed in the USA.",
    priceFrom: "$24.99",
    styles: [
      "White Printed Classic Baseball Cap",
      "Black Printed Classic Baseball Cap",
      "Pink Printed Classic Baseball Cap",
    ],
    image: "/images/gift-shop/bonfire/cap-black.jpg",
    alt: "Champion of Hope for Leiomyosarcoma Research, a Black Printed Classic Baseball Cap",
    checkoutUrl: "https://www.bonfire.com/champion-of-hope-for-leiomyosarcoma-research-4/",
  },
  {
    id: "champion-tote",
    name: "Champion of Hope for Leiomyosarcoma Research",
    productType: "Tote Bag",
    description:
      "Check out our website at www.nlmsf.org to learn more about this rare cancer. A Champion of Hope for Survival — Courage, Strength, and Resilience. Professionally printed in the USA.",
    priceFrom: "$26.00",
    styles: [
      "Natural Recycled Cotton Tote Bag — $26.00",
      "Oyster Organic Cotton Tote Bag — $27.00",
      "Oyster Large Organic Cotton Tote Bag — $29.00",
    ],
    image: "/images/gift-shop/bonfire/champion-tote.jpg",
    alt: "Champion of Hope for Leiomyosarcoma Research, a Natural Recycled Cotton Tote Bag",
    checkoutUrl: "https://www.bonfire.com/champion-of-hope-for-leiomyosarcoma-research-1/",
  },
  {
    id: "champion-apparel",
    name: "Champion of Hope for Leiomyosarcoma Research",
    productType: "Tees & Long Sleeve",
    description:
      "Check out our website at www.nlmsf.org to learn more about this rare cancer. A Champion of Hope for Survival — Courage, Strength, and Resilience. Professionally printed in the USA.",
    priceFrom: "$27.50",
    styles: [
      "White Classic Unisex Tee — $27.50",
      "White Classic Long Sleeve Tee — $27.50",
      "Bright White Allmade Organic Cotton Unisex Tee — $29.50",
    ],
    image: "/images/gift-shop/bonfire/champion-longsleeve.jpg",
    alt: "Champion of Hope for Leiomyosarcoma Research, a White Classic Long Sleeve Tee",
    checkoutUrl: "https://www.bonfire.com/champion-of-hope-for-leiomyosarcoma-research/",
  },
  {
    id: "nlmsf-tote",
    name: "NLMSF Tote",
    productType: "Tote Bag",
    description:
      "Check out our website at www.nlmsf.org to learn more about this rare cancer. Butterfly design with Hope, Courage, Resilience, Strength. Professionally printed in the USA.",
    priceFrom: "$26.99",
    styles: [
      "Natural Recycled Cotton Tote Bag — $26.99",
      "Oyster Organic Cotton Tote Bag — $28.99",
      "Oyster Large Organic Cotton Tote Bag — $30.99",
    ],
    image: "/images/gift-shop/bonfire/nlmsf-tote-front.jpg",
    imageBack: "/images/gift-shop/bonfire/nlmsf-tote-back.jpg",
    alt: "NLMSF Tote, a Natural Recycled Cotton Tote Bag",
    checkoutUrl: "https://www.bonfire.com/nlmsf-tote/",
  },
  {
    id: "nlmsf-butterfly",
    name: "NLMSF",
    productType: "Tees, Hoodies & Sweatshirts",
    description:
      "Proceeds go to NLMSF. Super Bowl of Survivorship — each year we are all gracefully facing and handling the challenges before us to survive this disease — let's get together. Butterfly design with Hope, Courage, Resilience, Strength.",
    priceFrom: "$27.49",
    styles: [
      "Youth Unisex Tee — from $27.49",
      "Premium Unisex Tee — from $28.49",
      "Classic Long Sleeve Tee — from $30.99",
      "Crewneck Sweatshirt — from $38.49",
      "Pullover Hoodie — from $41.49",
    ],
    image: "/images/gift-shop/bonfire/nlmsf-tee-front.jpg",
    imageBack: "/images/gift-shop/bonfire/nlmsf-tee-back.jpg",
    alt: "NLMSF, an Athletic Heather Premium Unisex Tee",
    checkoutUrl: "https://www.bonfire.com/nlmsf-1/",
  },
  {
    id: "nlmsf-eagle",
    name: "NLMSF",
    productType: "Tees, Long Sleeves & Sweatshirts",
    description:
      "Proceeds go to NLMSF. Super Bowl of Survivorship — each year we are all gracefully facing and handling the challenges before us to survive this disease — let's get together. Eagle design: Education / Advocacy / Support / Research. Moving FORWARD in the Quest for the Cure!",
    priceFrom: "$26.49",
    styles: [
      "Premium Youth Tee — from $26.49",
      "Premium Unisex Tee — from $28.49",
      "Classic Long Sleeve Tee — from $30.99",
      "Crewneck Sweatshirt — from $38.49",
    ],
    image: "/images/gift-shop/bonfire/nlmsf-eagle-front.jpg",
    imageBack: "/images/gift-shop/bonfire/nlmsf-eagle-back.jpg",
    alt: "NLMSF, a Heather Stone Premium Unisex Tee",
    checkoutUrl: "https://www.bonfire.com/nlmsf/",
  },
  {
    id: "champion-hoodie-eagle",
    name: "Champion of Hope for Leiomyosarcoma Research",
    productType: "Zip Up Hoodie — Eagle",
    description:
      "Check out our website at www.nlmsf.org to learn more about this rare cancer. Eagle design with Hope, Courage, Resilience, Strength. Professionally printed in the USA.",
    priceFrom: "$55.99",
    styles: ["Deep Heather Zip Up Hoodie", "Heather Deep Teal Zip Up Hoodie"],
    image: "/images/gift-shop/bonfire/hoodie-eagle-front.jpg",
    imageBack: "/images/gift-shop/bonfire/hoodie-eagle-back.jpg",
    alt: "Champion of Hope for Leiomyosarcoma Research, a Deep Heather Zip Up Hoodie with eagle design",
    checkoutUrl: "https://www.bonfire.com/champion-of-hope-for-leiomyosarcoma-research-3/",
  },
  {
    id: "champion-hoodie-butterfly",
    name: "Champion of Hope for Leiomyosarcoma Research",
    productType: "Zip Up Hoodie — Butterfly",
    description:
      "Check out our website at www.nlmsf.org to learn more about this rare cancer. Butterfly design with Hope, Courage, Resilience, Strength. Professionally printed in the USA.",
    priceFrom: "$55.99",
    styles: ["Deep Heather Zip Up Hoodie", "Heather Deep Teal Zip Up Hoodie"],
    image: "/images/gift-shop/bonfire/hoodie-butterfly-front.jpg",
    imageBack: "/images/gift-shop/bonfire/hoodie-butterfly-back.jpg",
    alt: "Champion of Hope for Leiomyosarcoma Research, a Deep Heather Zip Up Hoodie with butterfly design",
    checkoutUrl: "https://www.bonfire.com/champion-of-hope-for-leiomyosarcoma-research-2/",
  },
  {
    id: "nlmsf-hat",
    name: "NLMSF Hat",
    productType: "Classic Baseball Cap",
    description:
      "All proceeds benefit the National Leiomyosarcoma Foundation. To accompany the great T-shirts or Hoodies also featured through Bonfire. A set to show your support would look sharp at fundraisers and just to build awareness in your community about rare cancer — Leiomyosarcoma — and start a conversation based on the messaging of what you are wearing. Build LMS research momentum through the National Leiomyosarcoma Foundation (NLMSF). You are CHAMPION of HOPE for Patients and their families!",
    priceFrom: "$32.50",
    styles: ["Black Classic Baseball Cap", "Pink Classic Baseball Cap", "Khaki Classic Baseball Cap"],
    image: "/images/gift-shop/bonfire/nlmsf-hat.jpg",
    alt: "NLMSF Hat, a Black Classic Baseball Cap",
    checkoutUrl: "https://www.bonfire.com/nlmsf-hat/",
  },
];
