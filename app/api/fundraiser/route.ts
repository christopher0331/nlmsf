import { NextResponse } from "next/server";

const CAMPAIGN_ID = "FUNRBJGPJSK";
const API_BASE = "https://api.fundraiseup.com/v1";
const CAMPAIGN_START = "2026-03-08T00:00:00Z";

type Donation = {
  id: string;
  status: string;
  amount: string;
  campaign: { id: string } | null;
};

type ListResponse = {
  data: Donation[];
  has_more: boolean;
};

async function fetchCampaignTotal(): Promise<{ raised: number; donors: number }> {
  const apiKey = process.env.DONATION_API_KEY;
  if (!apiKey) return { raised: 0, donors: 0 };

  let raised = 0;
  let donors = 0;
  let lastId: string | undefined;

  try {
    let page = 0;
    const MAX_PAGES = 20;

    do {
      const params = new URLSearchParams({
        livemode: "true",
        limit: "100",
        "created[gte]": CAMPAIGN_START,
      });
      if (lastId) params.set("starting_after", lastId);

      const res = await fetch(`${API_BASE}/donations?${params}`, {
        headers: { Authorization: `Bearer ${apiKey}` },
        next: { revalidate: 300 },
      });

      if (!res.ok) {
        console.error("Fundraise Up API error:", res.status);
        break;
      }

      const json: ListResponse = await res.json();

      for (const d of json.data) {
        if (d.campaign?.id === CAMPAIGN_ID && d.status === "succeeded") {
          raised += parseFloat(d.amount) || 0;
          donors += 1;
        }
        lastId = d.id;
      }

      page += 1;
      if (!json.has_more || page >= MAX_PAGES) break;
    } while (true);
  } catch (err) {
    console.error("Fundraise Up fetch error:", err);
  }

  return {
    raised: Math.round(raised * 100) / 100,
    donors,
  };
}

export async function GET() {
  const { raised, donors } = await fetchCampaignTotal();

  return NextResponse.json(
    { raised, goal: 5000, donors },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
      },
    }
  );
}
