import { ImageResponse } from "next/og";

type Variant = 0 | 1 | 2 | 3;

function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function StudioLayout({
  variant,
  title,
  line,
  accent,
}: {
  variant: Variant;
  title: string;
  line: string;
  accent: string;
}) {
  const hero = title.toUpperCase().slice(0, 42);
  if (variant === 1) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #2E1064 0%, #5B21B6 55%, #6D28D9 100%)",
          color: "white",
          fontFamily: "Georgia, serif",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, fontWeight: 700, marginBottom: 28 }}>NLMSF</div>
        <div
          style={{
            width: 120,
            height: 160,
            borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
            background: accent,
            boxShadow: "0 0 0 10px rgba(255,255,255,0.15)",
            marginBottom: 32,
          }}
        />
        <div style={{ fontSize: 64, fontWeight: 800, textAlign: "center", lineHeight: 1.05 }}>{hero}</div>
        <div style={{ marginTop: 24, fontSize: 26, letterSpacing: 4, opacity: 0.9 }}>{line}</div>
        <div style={{ marginTop: 48, fontSize: 22, letterSpacing: 3 }}>CHAMPION OF HOPE</div>
      </div>
    );
  }

  if (variant === 2) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#111827",
          color: "white",
          fontFamily: "Georgia, serif",
          padding: 72,
        }}
      >
        <div
          style={{
            width: 920,
            height: 920,
            borderRadius: 40,
            border: "8px solid #C4B5FD",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(160deg, #1E1B4B 0%, #4C1D95 100%)",
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: 10, color: "#DDD6FE" }}>JULY 15</div>
          <div style={{ fontSize: 70, fontWeight: 800, textAlign: "center", marginTop: 18, lineHeight: 1.05 }}>
            {hero}
          </div>
          <div
            style={{
              marginTop: 28,
              width: 90,
              height: 90,
              borderRadius: 45,
              background: accent,
            }}
          />
          <div style={{ marginTop: 28, fontSize: 24, letterSpacing: 4 }}>{line}</div>
          <div style={{ marginTop: 16, fontSize: 28, fontWeight: 700 }}>NLMSF</div>
        </div>
      </div>
    );
  }

  if (variant === 3) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F8F5FF",
          color: "#4C1D95",
          fontFamily: "Georgia, serif",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 6, color: "#7C3AED" }}>NATIONAL LEIOMYOSARCOMA FOUNDATION</div>
        <div style={{ fontSize: 72, fontWeight: 800, textAlign: "center", marginTop: 36, lineHeight: 0.95 }}>
          {hero}
        </div>
        <div
          style={{
            marginTop: 36,
            display: "flex",
          }}
        >
          {["HOPE", "COURAGE", "STRENGTH"].map((word) => (
            <div
              key={word}
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                background: "#6D28D9",
                color: "white",
                fontSize: 20,
                letterSpacing: 2,
                fontWeight: 700,
                marginRight: 12,
              }}
            >
              {word}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 48,
            width: 140,
            height: 140,
            borderRadius: 28,
            background: accent,
            transform: "rotate(12deg)",
          }}
        />
        <div style={{ marginTop: 40, fontSize: 28, letterSpacing: 5 }}>NLMSF.ORG</div>
        <div style={{ marginTop: 12, fontSize: 22, color: "#6B21A8" }}>{line}</div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 50% 40%, #7C3AED 0%, #4C1D95 55%, #2E1064 100%)",
        color: "white",
        fontFamily: "Georgia, serif",
        padding: 80,
      }}
    >
      <div
        style={{
          width: 280,
          height: 280,
          borderRadius: 140,
          border: "12px solid #F5D0FE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: accent,
          marginBottom: 36,
          fontSize: 42,
          fontWeight: 800,
          letterSpacing: 2,
        }}
      >
        NLMSF
      </div>
      <div style={{ fontSize: 62, fontWeight: 800, textAlign: "center", lineHeight: 1.05 }}>{hero}</div>
      <div style={{ marginTop: 22, fontSize: 26, letterSpacing: 5, opacity: 0.92 }}>{line}</div>
      <div style={{ marginTop: 40, fontSize: 22, letterSpacing: 6 }}>HOPE · COURAGE · RESILIENCE</div>
    </div>
  );
}

export async function renderStudioArtwork(input: {
  title: string;
  prompt: string;
  themeId: string;
  seed: string;
}): Promise<Buffer> {
  const n = hashSeed(`${input.themeId}:${input.seed}:${input.prompt}`);
  const variant = (n % 4) as Variant;
  const accents = ["#F5D0FE", "#C4B5FD", "#FDE68A", "#F9A8D4"];
  const accent = accents[n % accents.length];
  const line = input.themeId === "awareness-day" ? "LMS AWARENESS DAY" : "PROCEEDS SUPPORT RESEARCH";

  const image = new ImageResponse(
    <StudioLayout variant={variant} title={input.title} line={line} accent={accent} />,
    { width: 1200, height: 1200 },
  );
  return Buffer.from(await image.arrayBuffer());
}
