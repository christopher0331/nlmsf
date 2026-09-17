import type { MerchMediumId } from "@/lib/merch/catalog";
import "./merch-mockup.css";

type Props = {
  imageUrl: string;
  colorHex: string;
  mediumId: MerchMediumId;
  title: string;
  className?: string;
  photoUrl?: string | null;
};

export default function MerchMockup({ imageUrl, colorHex, mediumId, title, className = "", photoUrl }: Props) {
  if (photoUrl) {
    return (
      <div className={`merch-mockup merch-mockup-photo ${className}`}>
        <img src={photoUrl} alt={title} className="merch-photo" />
      </div>
    );
  }

  const isLight = colorHex.toLowerCase() === "#f8f7f4" || colorHex.toLowerCase() === "#ffffff";
  const stitch = isLight ? "rgba(17,24,39,0.12)" : "rgba(255,255,255,0.18)";

  if (mediumId === "hat") {
    return (
      <div className={`merch-mockup merch-mockup-hat ${className}`}>
        <div className="merch-hat-crown" style={{ backgroundColor: colorHex, borderColor: stitch }}>
          <img src={imageUrl} alt="" className="merch-hat-art" />
        </div>
        <div className="merch-hat-brim" style={{ backgroundColor: colorHex, borderColor: stitch }} />
        <span className="sr-only">{title} hat mockup</span>
      </div>
    );
  }

  return (
    <div className={`merch-mockup merch-mockup-apparel merch-mockup-${mediumId} ${className}`}>
      <div className="merch-sleeve merch-sleeve-left" style={{ backgroundColor: colorHex, borderColor: stitch }} />
      <div className="merch-body" style={{ backgroundColor: colorHex, borderColor: stitch }}>
        {mediumId === "hoodie" ? <div className="merch-hood" style={{ backgroundColor: colorHex, borderColor: stitch }} /> : null}
        <img src={imageUrl} alt="" className="merch-chest-art" />
      </div>
      <div className="merch-sleeve merch-sleeve-right" style={{ backgroundColor: colorHex, borderColor: stitch }} />
      <span className="sr-only">{title} mockup</span>
    </div>
  );
}
