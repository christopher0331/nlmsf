import { NextRequest, NextResponse } from "next/server";

async function fetchPubMedAbstract(url: string): Promise<string> {
  const pmid = url.match(/\/(\d{6,})\/?/)?.[1];
  if (!pmid) return "";
  try {
    const res = await fetch(
      `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${pmid}&rettype=abstract&retmode=text`,
      { next: { revalidate: 3600 } },
    );
    return await res.text();
  } catch {
    return "";
  }
}

async function fetchClinicalTrialsSummary(url: string): Promise<string> {
  const nctId = url.match(/NCT\d+/i)?.[0];
  if (!nctId) return "";
  try {
    const res = await fetch(
      `https://clinicaltrials.gov/api/v2/studies/${nctId}?fields=BriefSummary,DetailedDescription,OfficialTitle,EligibilityCriteria`,
      { next: { revalidate: 3600 } },
    );
    const data = await res.json();
    const desc = data?.protocolSection?.descriptionModule;
    const eligibility = data?.protocolSection?.eligibilityModule?.eligibilityCriteria ?? "";
    return [desc?.briefSummary, desc?.detailedDescription, eligibility]
      .filter(Boolean)
      .join("\n\n")
      .slice(0, 4000);
  } catch {
    return "";
  }
}

async function fetchPMCAbstract(url: string): Promise<string> {
  const pmcId = url.match(/PMC(\d+)/i)?.[1];
  if (!pmcId) return "";
  try {
    const res = await fetch(
      `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pmc&id=${pmcId}&rettype=abstract&retmode=text`,
      { next: { revalidate: 3600 } },
    );
    return (await res.text()).slice(0, 4000);
  } catch {
    return "";
  }
}

export async function POST(req: NextRequest) {
  const { url, title } = await req.json() as { url: string; title: string };

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey.startsWith("PASTE_")) {
    return NextResponse.json(
      { error: "AI summary service is not yet configured. Please add your GEMINI_API_KEY." },
      { status: 503 },
    );
  }

  let content = "";
  const isPubMed = url.includes("pubmed.ncbi.nlm.nih.gov") || url.includes("ncbi.nlm.nih.gov/pubmed");
  if (isPubMed) {
    content = await fetchPubMedAbstract(url);
  } else if (url.includes("clinicaltrials.gov")) {
    content = await fetchClinicalTrialsSummary(url);
  } else if (url.includes("ncbi.nlm.nih.gov/pmc") || url.includes("ncbi.nlm.nih.gov/books")) {
    content = await fetchPMCAbstract(url);
  }

  const prompt = `You are an expert medical translator helping leiomyosarcoma (LMS) cancer patients and caregivers understand research.

STRICT RULES:
- Do NOT greet the user. Start your response IMMEDIATELY with the first bold header.
- Use plain, everyday language. Define any medical term in parentheses the first time you use it.
- Be specific — pull actual details from the abstract/content provided below. Do not be vague.
- COMPLETE ALL FOUR SECTIONS FULLY before stopping. Never cut off mid-sentence.
- Do NOT pad with filler. Every sentence must add value.

Write exactly these four sections with bold headers:

**What is this research about?**
3–4 sentences explaining the topic, the drug or treatment being studied, how it works, and who it targets.

**What did researchers find or what is the trial testing?**
3–5 sentences. For trials: explain the goals, eligibility, what patients will receive, and what the trial hopes to prove. For studies: explain the specific findings, numbers, and outcomes.

**Why does this matter for LMS patients?**
2–4 sentences. Be direct about the real-world patient impact — what this could change, why it is different from current treatments, and what hope it offers.

**Bottom line**
2 clear sentences a patient could read and immediately understand and share with their family.

---
Publication title: ${title}
URL: ${url}
Abstract/Content:
${content || "(No abstract available — base your summary on the publication title and established knowledge about this research area.)"}`;


  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 8192,
            thinkingConfig: { thinkingBudget: 0 },
          },
        }),
      },
    );
    if (!geminiRes.ok) {
      const errBody = await geminiRes.text();
      console.error("Gemini API error:", errBody);
      return NextResponse.json({ error: "Failed to generate summary. Please try again." }, { status: 500 });
    }
    const geminiData = await geminiRes.json();
    const summary: string = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    if (!summary) {
      return NextResponse.json({ error: "No summary returned from AI. Please try again." }, { status: 500 });
    }
    return NextResponse.json({ summary });
  } catch (err) {
    console.error("Gemini API error:", err);
    return NextResponse.json({ error: "Failed to generate summary. Please try again." }, { status: 500 });
  }
}
