import { NextResponse } from "next/server";

const CAMPAIGN_ID = "FUNRBJGPJSK";
const API_BASE = "https://api.fundraiseup.com/v1";
const CAMPAIGN_START = "2026-03-08T00:00:00Z";

type Supporter = {
  first_name: string;
  last_name: string;
};

type Donation = {
  id: string;
  status: string;
  amount: string;
  anonymous: boolean;
  campaign: { id: string } | null;
  supporter: Supporter | null;
};

type ListResponse = {
  data: Donation[];
  has_more: boolean;
};

type DonorEntry = { name: string; amount: number };

async function fetchCampaignData(): Promise<{
  raised: number;
  donors: number;
  topDonors: DonorEntry[];
}> {
  const apiKey = process.env.DONATION_API_KEY;
  if (!apiKey) return { raised: 0, donors: 0, topDonors: [] };

  let raised = 0;
  let donors = 0;
  const donorMap = new Map<string, number>();
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
          const amt = parseFloat(d.amount) || 0;
          raised += amt;
          donors += 1;

          const name = d.anonymous
            ? "Anonymous"
            : [d.supporter?.first_name, d.supporter?.last_name]
                .filter(Boolean)
                .join(" ") || "Supporter";

          donorMap.set(name, (donorMap.get(name) ?? 0) + amt);
        }
        lastId = d.id;
      }

      page += 1;
      if (!json.has_more || page >= MAX_PAGES) break;
    } while (true);
  } catch (err) {
    console.error("Fundraise Up fetch error:", err);
  }

  const topDonors = [...donorMap.entries()]
    .map(([name, amount]) => ({ name, amount: Math.round(amount * 100) / 100 }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 10);

  return {
    raised: Math.round(raised * 100) / 100,
    donors,
    topDonors,
  };
}

export async function GET() {
  const { raised, donors, topDonors } = await fetchCampaignData();

  return NextResponse.json(
    { raised, goal: 5000, donors, topDonors },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
      },
    }
  );
}
