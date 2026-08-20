export type BonfireColor = {
  name: string;
  hex: string;
  price: string;
  image: string;
  imageBack?: string;
};

export type BonfireStyle = {
  name: string;
  colors: BonfireColor[];
};

export type BonfireProduct = {
  id: string;
  name: string;
  productType: string;
  description: string;
  priceFrom: string;
  checkoutUrl: string;
  styles: BonfireStyle[];
};

export const BONFIRE_STORE_URL = "https://www.bonfire.com/store/nlmsf/";
export const BONFIRE_ORG_URL =
  "https://www.bonfire.com/org/national-leiomyosarcoma-foundation-141834266/";

export const bonfireProducts: BonfireProduct[] = [
  {
    id: "champion-cap-white",
    name: "Champion of Hope for Leiomyosarcoma Research",
    productType: "Printed Classic Baseball Cap",
    description: "Buy Champion of Hope for Leiomyosarcoma Research merchandise that supports National Leiomyosarcoma Foundation. Featuring White Printed Classic Baseball Caps, professionally printed in the USA. Hope, Courage, Resilience, Strength — NLMSF.Org.",
    priceFrom: "$24.99",
    checkoutUrl: "https://www.bonfire.com/champion-of-hope-for-leiomyosarcoma-research-/",
    styles: [
      {
        name: "Printed Classic Baseball Cap",
        colors: [
        {
          name: "White",
          hex: "#ffffff",
          price: "$24.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/a3d9c552-7b0f-4e45-ab28-33e827855552/db80c949-4d14-43f3-9d82-1817a6d2d606/900/",
        }
        ],
      }
    ],
  },
  {
    id: "champion-cap-logo",
    name: "Champion of Hope for Leiomyosarcoma Research",
    productType: "Printed Classic Baseball Cap",
    description: "Check out our website at www.nlmsf.org to learn more about this rare cancer. National Leiomyosarcoma Foundation cap with Support, Education, Advocacy, and Research branding. Professionally printed in the USA.",
    priceFrom: "$24.99",
    checkoutUrl: "https://www.bonfire.com/champion-of-hope-for-leiomyosarcoma-research-4/",
    styles: [
      {
        name: "Printed Classic Baseball Cap",
        colors: [
        {
          name: "Black",
          hex: "#000000",
          price: "$24.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/0795eebf-3047-4cdc-b74c-4b36fac66a77/fda804b1-70c1-4911-aa26-9ff43286ed49/900/",
        },
        {
          name: "Pink",
          hex: "#f1b6c0",
          price: "$24.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/0795eebf-3047-4cdc-b74c-4b36fac66a77/12d7dbe6-3844-4ed7-b78c-c2f3bef71ad7/900/",
        },
        {
          name: "White",
          hex: "#ffffff",
          price: "$24.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/0795eebf-3047-4cdc-b74c-4b36fac66a77/db80c949-4d14-43f3-9d82-1817a6d2d606/900/",
        }
        ],
      }
    ],
  },
  {
    id: "champion-tote",
    name: "Champion of Hope for Leiomyosarcoma Research",
    productType: "Tote Bag",
    description: "Check out our website at www.nlmsf.org to learn more about this rare cancer. A Champion of Hope for Survival — Courage, Strength, and Resilience. Professionally printed in the USA.",
    priceFrom: "$26.00",
    checkoutUrl: "https://www.bonfire.com/champion-of-hope-for-leiomyosarcoma-research-1/",
    styles: [
      {
        name: "Recycled Cotton Tote Bag",
        colors: [
        {
          name: "Natural",
          hex: "#e3e4d4",
          price: "$26.00",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/06072df7-5616-4a81-a4b8-c7b3f2d084af/9aa361fc-996e-4109-8db4-2504ac555332/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/ca9f50e0-ba14-443c-8cf4-bde0c616f051/9aa361fc-996e-4109-8db4-2504ac555332/900/",
        }
        ],
      },
      {
        name: "Organic Cotton Tote Bag",
        colors: [
        {
          name: "Oyster",
          hex: "#e4cea9",
          price: "$27.00",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/06072df7-5616-4a81-a4b8-c7b3f2d084af/291a496a-a643-4f02-bdb0-4a20bf5398e4/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/ca9f50e0-ba14-443c-8cf4-bde0c616f051/291a496a-a643-4f02-bdb0-4a20bf5398e4/900/",
        }
        ],
      },
      {
        name: "Large Organic Cotton Tote Bag",
        colors: [
        {
          name: "Oyster",
          hex: "#e4cea9",
          price: "$29.00",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/06072df7-5616-4a81-a4b8-c7b3f2d084af/dd4b1505-bda6-4caf-9cd4-a2f2b6e8c905/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/ca9f50e0-ba14-443c-8cf4-bde0c616f051/dd4b1505-bda6-4caf-9cd4-a2f2b6e8c905/900/",
        }
        ],
      }
    ],
  },
  {
    id: "champion-apparel",
    name: "Champion of Hope for Leiomyosarcoma Research",
    productType: "Tees & Long Sleeve",
    description: "Check out our website at www.nlmsf.org to learn more about this rare cancer. A Champion of Hope for Survival — Courage, Strength, and Resilience. Professionally printed in the USA.",
    priceFrom: "$27.50",
    checkoutUrl: "https://www.bonfire.com/champion-of-hope-for-leiomyosarcoma-research/",
    styles: [
      {
        name: "Classic Long Sleeve Tee",
        colors: [
        {
          name: "White",
          hex: "#ffffff",
          price: "$27.50",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/1aadc4d6-dff9-49ea-9513-72c8a2d077b5/a830a0c0-848d-47a2-a6ba-fc653905d57b/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/35a750a1-705e-42e2-8d38-c9d9e675c78b/a830a0c0-848d-47a2-a6ba-fc653905d57b/900/",
        }
        ],
      },
      {
        name: "Classic Unisex Tee",
        colors: [
        {
          name: "White",
          hex: "#ffffff",
          price: "$27.50",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/1aadc4d6-dff9-49ea-9513-72c8a2d077b5/4e26df23-1a6b-467e-8955-7862cc38a48b/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/35a750a1-705e-42e2-8d38-c9d9e675c78b/4e26df23-1a6b-467e-8955-7862cc38a48b/900/",
        }
        ],
      },
      {
        name: "Allmade Organic Cotton Unisex Tee",
        colors: [
        {
          name: "Bright White",
          hex: "#ffffff",
          price: "$29.50",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/1aadc4d6-dff9-49ea-9513-72c8a2d077b5/b52145c0-5554-46a9-b8a4-330e61d3caf6/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/35a750a1-705e-42e2-8d38-c9d9e675c78b/b52145c0-5554-46a9-b8a4-330e61d3caf6/900/",
        }
        ],
      }
    ],
  },
  {
    id: "nlmsf-tote",
    name: "NLMSF Tote",
    productType: "Tote Bag",
    description: "Check out our website at www.nlmsf.org to learn more about this rare cancer. Butterfly design with Hope, Courage, Resilience, Strength. Professionally printed in the USA.",
    priceFrom: "$26.99",
    checkoutUrl: "https://www.bonfire.com/nlmsf-tote/",
    styles: [
      {
        name: "Recycled Cotton Tote Bag",
        colors: [
        {
          name: "Natural",
          hex: "#e3e4d4",
          price: "$26.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/6634e9df-64bb-40d7-b6d5-8aa67455a048/9aa361fc-996e-4109-8db4-2504ac555332/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/55650d0e-fbc1-4511-a72e-8f7998f8d51e/9aa361fc-996e-4109-8db4-2504ac555332/900/",
        }
        ],
      },
      {
        name: "Organic Cotton Tote Bag",
        colors: [
        {
          name: "Oyster",
          hex: "#e4cea9",
          price: "$28.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/6634e9df-64bb-40d7-b6d5-8aa67455a048/291a496a-a643-4f02-bdb0-4a20bf5398e4/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/55650d0e-fbc1-4511-a72e-8f7998f8d51e/291a496a-a643-4f02-bdb0-4a20bf5398e4/900/",
        }
        ],
      },
      {
        name: "Large Organic Cotton Tote Bag",
        colors: [
        {
          name: "Oyster",
          hex: "#e4cea9",
          price: "$30.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/6634e9df-64bb-40d7-b6d5-8aa67455a048/dd4b1505-bda6-4caf-9cd4-a2f2b6e8c905/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/55650d0e-fbc1-4511-a72e-8f7998f8d51e/dd4b1505-bda6-4caf-9cd4-a2f2b6e8c905/900/",
        }
        ],
      }
    ],
  },
  {
    id: "nlmsf-butterfly",
    name: "NLMSF",
    productType: "Tees, Hoodies & Sweatshirts",
    description: "Proceeds go to NLMSF. Super Bowl of Survivorship — each year we are all gracefully facing and handling the challenges before us to survive this disease — let's get together. Butterfly design with Hope, Courage, Resilience, Strength.",
    priceFrom: "$27.49",
    checkoutUrl: "https://www.bonfire.com/nlmsf-1/",
    styles: [
      {
        name: "Premium Unisex Tee",
        colors: [
        {
          name: "Athletic Heather",
          hex: "#acb1a6",
          price: "$28.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/5205a469-427b-4aac-8455-556ef3ed63da/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/5205a469-427b-4aac-8455-556ef3ed63da/900/",
        },
        {
          name: "Heather Ice Blue",
          hex: "#bdddd9",
          price: "$28.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/28411c04-3187-4333-b4a7-99c06f26c0f2/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/28411c04-3187-4333-b4a7-99c06f26c0f2/900/",
        },
        {
          name: "Heather Yellow Gold",
          hex: "#fdd26e",
          price: "$28.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/87c80c0e-7b1a-420a-81a9-654f101f643e/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/87c80c0e-7b1a-420a-81a9-654f101f643e/900/",
        },
        {
          name: "Solid White Blend",
          hex: "#ffffff",
          price: "$28.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/e4213c53-8052-4c44-ad64-9d06f2cda5e3/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/e4213c53-8052-4c44-ad64-9d06f2cda5e3/900/",
        }
        ],
      },
      {
        name: "Pullover Hoodie",
        colors: [
        {
          name: "Sport Grey",
          hex: "#bbbbbb",
          price: "$41.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/e3c67090-1516-4e66-91be-0012bd4a5e2d/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/e3c67090-1516-4e66-91be-0012bd4a5e2d/900/",
        },
        {
          name: "Light Blue",
          hex: "#b6cae8",
          price: "$41.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/43a2b2d0-bf80-4c26-866f-e65afacf03a6/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/43a2b2d0-bf80-4c26-866f-e65afacf03a6/900/",
        },
        {
          name: "Light Pink",
          hex: "#ebb6ca",
          price: "$41.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/aafbf332-4442-4c7d-8ab6-3f40ce636262/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/aafbf332-4442-4c7d-8ab6-3f40ce636262/900/",
        },
        {
          name: "White",
          hex: "#ffffff",
          price: "$41.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/84c4b3aa-dc52-4b45-b087-f5eb7d086542/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/84c4b3aa-dc52-4b45-b087-f5eb7d086542/900/",
        }
        ],
      },
      {
        name: "Classic Long Sleeve Tee",
        colors: [
        {
          name: "Sport Grey",
          hex: "#bbbbbb",
          price: "$30.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/ffad5e2d-af54-4b6f-ac51-795a48579a54/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/ffad5e2d-af54-4b6f-ac51-795a48579a54/900/",
        },
        {
          name: "Light Blue",
          hex: "#b6cae8",
          price: "$30.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/618b6c29-3dcb-48b0-8833-02433e47f224/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/618b6c29-3dcb-48b0-8833-02433e47f224/900/",
        },
        {
          name: "Light Pink",
          hex: "#ebb6ca",
          price: "$30.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/9fffa26d-2827-4ca5-8864-8f460e8ba93c/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/9fffa26d-2827-4ca5-8864-8f460e8ba93c/900/",
        },
        {
          name: "White",
          hex: "#ffffff",
          price: "$30.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/a830a0c0-848d-47a2-a6ba-fc653905d57b/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/a830a0c0-848d-47a2-a6ba-fc653905d57b/900/",
        }
        ],
      },
      {
        name: "Crewneck Sweatshirt",
        colors: [
        {
          name: "Sport Grey",
          hex: "#bbbbbb",
          price: "$38.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/cd9b5836-3f2e-4d4b-9367-e794df948681/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/cd9b5836-3f2e-4d4b-9367-e794df948681/900/",
        },
        {
          name: "White",
          hex: "#ffffff",
          price: "$38.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/86ab96af-137c-4cc5-9720-e668c8f8e3c6/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/86ab96af-137c-4cc5-9720-e668c8f8e3c6/900/",
        }
        ],
      },
      {
        name: "Youth Unisex Tee",
        colors: [
        {
          name: "Sport Grey",
          hex: "#bbbbbb",
          price: "$27.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/f6f07731-c3f4-48cd-a61b-d6647f836899/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/f6f07731-c3f4-48cd-a61b-d6647f836899/900/",
        },
        {
          name: "Daisy",
          hex: "#f2ce46",
          price: "$27.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/400f9b64-5a3e-49cf-a52b-d162f7bfe42a/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/400f9b64-5a3e-49cf-a52b-d162f7bfe42a/900/",
        },
        {
          name: "Light Pink",
          hex: "#ebb6ca",
          price: "$27.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/86305e90-6b0e-4cad-993e-34e463434783/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/86305e90-6b0e-4cad-993e-34e463434783/900/",
        },
        {
          name: "White",
          hex: "#ffffff",
          price: "$27.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/28eb9238-b6d7-45a0-ac70-282463de5534/aa65ce15-1e6e-49ad-9c1e-12c340f9ac93/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/56eef1e0-1672-4d5f-901a-d2fc581e7fde/aa65ce15-1e6e-49ad-9c1e-12c340f9ac93/900/",
        }
        ],
      }
    ],
  },
  {
    id: "nlmsf-eagle",
    name: "NLMSF",
    productType: "Tees, Long Sleeves & Sweatshirts",
    description: "Proceeds go to NLMSF. Super Bowl of Survivorship — each year we are all gracefully facing and handling the challenges before us to survive this disease — let's get together. Eagle design: Education / Advocacy / Support / Research. Moving FORWARD in the Quest for the Cure!",
    priceFrom: "$26.49",
    checkoutUrl: "https://www.bonfire.com/nlmsf/",
    styles: [
      {
        name: "Premium Unisex Tee",
        colors: [
        {
          name: "Heather Stone",
          hex: "#908878",
          price: "$28.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/6cca75b3-42e8-4ecc-b994-57005db2a1c6/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/6cca75b3-42e8-4ecc-b994-57005db2a1c6/900/",
        },
        {
          name: "Heather Ice Blue",
          hex: "#bdddd9",
          price: "$28.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/28411c04-3187-4333-b4a7-99c06f26c0f2/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/28411c04-3187-4333-b4a7-99c06f26c0f2/900/",
        },
        {
          name: "Solid White Blend",
          hex: "#ffffff",
          price: "$28.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/e4213c53-8052-4c44-ad64-9d06f2cda5e3/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/e4213c53-8052-4c44-ad64-9d06f2cda5e3/900/",
        }
        ],
      },
      {
        name: "Classic Long Sleeve Tee",
        colors: [
        {
          name: "Sport Grey",
          hex: "#bbbbbb",
          price: "$30.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/ffad5e2d-af54-4b6f-ac51-795a48579a54/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/ffad5e2d-af54-4b6f-ac51-795a48579a54/900/",
        },
        {
          name: "Light Blue",
          hex: "#b6cae8",
          price: "$30.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/618b6c29-3dcb-48b0-8833-02433e47f224/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/618b6c29-3dcb-48b0-8833-02433e47f224/900/",
        },
        {
          name: "Gold",
          hex: "#eead1a",
          price: "$30.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/d71b08d9-075e-4819-985b-31e8c031af65/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/d71b08d9-075e-4819-985b-31e8c031af65/900/",
        },
        {
          name: "White",
          hex: "#ffffff",
          price: "$30.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/a830a0c0-848d-47a2-a6ba-fc653905d57b/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/a830a0c0-848d-47a2-a6ba-fc653905d57b/900/",
        }
        ],
      },
      {
        name: "Crewneck Sweatshirt",
        colors: [
        {
          name: "Sport Grey",
          hex: "#bbbbbb",
          price: "$38.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/cd9b5836-3f2e-4d4b-9367-e794df948681/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/cd9b5836-3f2e-4d4b-9367-e794df948681/900/",
        },
        {
          name: "Charcoal",
          hex: "#5d5d5d",
          price: "$38.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/0570bb08-1942-4eeb-9462-04c36c292aff/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/0570bb08-1942-4eeb-9462-04c36c292aff/900/",
        },
        {
          name: "Gold",
          hex: "#ffb109",
          price: "$38.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/016fa746-3769-491a-85e4-46b0aebffb92/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/016fa746-3769-491a-85e4-46b0aebffb92/900/",
        },
        {
          name: "White",
          hex: "#ffffff",
          price: "$38.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/86ab96af-137c-4cc5-9720-e668c8f8e3c6/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/86ab96af-137c-4cc5-9720-e668c8f8e3c6/900/",
        }
        ],
      },
      {
        name: "Premium Youth Tee",
        colors: [
        {
          name: "Athletic Heather",
          hex: "#acb1a6",
          price: "$26.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/48e5d8ba-9f42-4f4f-bcbd-4232d093b8c5/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/48e5d8ba-9f42-4f4f-bcbd-4232d093b8c5/900/",
        },
        {
          name: "Heather Yellow Gold",
          hex: "#fdd26e",
          price: "$26.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/1c77d83d-a46a-4388-9685-b7786e7239c7/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/1c77d83d-a46a-4388-9685-b7786e7239c7/900/",
        },
        {
          name: "Solid White Blend",
          hex: "#ffffff",
          price: "$26.49",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/60577a9d-69f6-4147-b6f3-3f6c12976cc2/dae7e163-31c4-4268-93bc-b854b816b9a2/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/85530b07-06b5-43be-93d7-9c071c915a29/dae7e163-31c4-4268-93bc-b854b816b9a2/900/",
        }
        ],
      }
    ],
  },
  {
    id: "champion-hoodie-eagle",
    name: "Champion of Hope for Leiomyosarcoma Research",
    productType: "Zip Up Hoodie — Eagle",
    description: "Check out our website at www.nlmsf.org to learn more about this rare cancer. Eagle design with Hope, Courage, Resilience, Strength. Professionally printed in the USA.",
    priceFrom: "$55.99",
    checkoutUrl: "https://www.bonfire.com/champion-of-hope-for-leiomyosarcoma-research-3/",
    styles: [
      {
        name: "Zip Up Hoodie",
        colors: [
        {
          name: "Deep Heather",
          hex: "#696969",
          price: "$55.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/d720bf71-68bf-4662-8b15-87c4e92cc5d9/bf3b1fdd-c0ae-4884-be8d-65d5351537e1/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/5228fa05-557f-40ad-8ce1-ea9860b5acba/bf3b1fdd-c0ae-4884-be8d-65d5351537e1/900/",
        },
        {
          name: "Heather Deep Teal",
          hex: "#587d83",
          price: "$55.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/d720bf71-68bf-4662-8b15-87c4e92cc5d9/b8c0e7b9-ed44-45dd-9b16-c5122ab0d815/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/5228fa05-557f-40ad-8ce1-ea9860b5acba/b8c0e7b9-ed44-45dd-9b16-c5122ab0d815/900/",
        }
        ],
      }
    ],
  },
  {
    id: "champion-hoodie-butterfly",
    name: "Champion of Hope for Leiomyosarcoma Research",
    productType: "Zip Up Hoodie — Butterfly",
    description: "Check out our website at www.nlmsf.org to learn more about this rare cancer. Butterfly design with Hope, Courage, Resilience, Strength. Professionally printed in the USA.",
    priceFrom: "$55.99",
    checkoutUrl: "https://www.bonfire.com/champion-of-hope-for-leiomyosarcoma-research-2/",
    styles: [
      {
        name: "Zip Up Hoodie",
        colors: [
        {
          name: "Deep Heather",
          hex: "#696969",
          price: "$55.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/93fddbb1-dade-4ac8-893d-838ef87e0975/bf3b1fdd-c0ae-4884-be8d-65d5351537e1/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/bb9ec181-e2b2-4575-931d-42a001b30db7/bf3b1fdd-c0ae-4884-be8d-65d5351537e1/900/",
        },
        {
          name: "Heather Deep Teal",
          hex: "#587d83",
          price: "$55.99",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/93fddbb1-dade-4ac8-893d-838ef87e0975/b8c0e7b9-ed44-45dd-9b16-c5122ab0d815/900/",
          imageBack: "https://dynamic.bonfireassets.com/thumb/design-image/bb9ec181-e2b2-4575-931d-42a001b30db7/b8c0e7b9-ed44-45dd-9b16-c5122ab0d815/900/",
        }
        ],
      }
    ],
  },
  {
    id: "nlmsf-hat",
    name: "NLMSF Hat",
    productType: "Classic Baseball Cap",
    description: "All proceeds benefit the National Leiomyosarcoma Foundation. To accompany the great T-shirts or Hoodies also featured through Bonfire. A set to show your support would look sharp at fundraisers and just to build awareness in your community about rare cancer — Leiomyosarcoma — and start a conversation based on the messaging of what you are wearing. Build LMS research momentum through the National Leiomyosarcoma Foundation (NLMSF). You are CHAMPION of HOPE for Patients and their families!",
    priceFrom: "$32.50",
    checkoutUrl: "https://www.bonfire.com/nlmsf-hat/",
    styles: [
      {
        name: "Classic Baseball Cap",
        colors: [
        {
          name: "Black",
          hex: "#000000",
          price: "$32.50",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/3cd172d7-9f97-42b1-bb16-39f2d1380e72/7faa22d3-2901-4edd-8586-d754e400939b/900/",
        },
        {
          name: "Pink",
          hex: "#f1b6c0",
          price: "$32.50",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/3cd172d7-9f97-42b1-bb16-39f2d1380e72/c2ac23cc-6b8f-4708-babf-75ac556b86e3/900/",
        },
        {
          name: "Khaki",
          hex: "#a89a80",
          price: "$32.50",
          image: "https://dynamic.bonfireassets.com/thumb/design-image/3cd172d7-9f97-42b1-bb16-39f2d1380e72/81931312-b94d-4084-8ff0-3c1f9a2d5970/900/",
        }
        ],
      }
    ],
  }
];
