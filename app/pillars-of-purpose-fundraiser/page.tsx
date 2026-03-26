import type { Metadata } from "next";
import { Suspense } from "react";
import PillarsClient from "./PillarsClient";

export const metadata: Metadata = {
  title:
    "Impact in Action: Pillars of Purpose Fundraiser | National Leiomyosarcoma Foundation",
  description:
    "Support the NLMSF Pillars of Purpose fundraiser. Purchase event tickets, raffle tickets, and sponsorship packages to advance leiomyosarcoma research and patient support.",
};

export default function PillarsOfPurposeFundraiserPage() {
  return (
    <Suspense>
      <PillarsClient />
    </Suspense>
  );
}
