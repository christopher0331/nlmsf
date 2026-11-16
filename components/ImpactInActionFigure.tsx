import "./impact-in-action.css";
import Image from "next/image";

type Program = {
  id: string;
  title: string;
  description: string[];
  logo: string;
  logoAlt: string;
  color: string;
  /** Segment center, degrees clockwise from 12 o'clock. */
  angle: number;
};

const LOGO_DIR = "/images/impact-in-action";
const SEGMENT = 360 / 7;

/** Left column, top to bottom (matches the wheel, counter-clockwise from top-left). */
const LEFT: Program[] = [
  {
    id: "advancing-research",
    title: "Advancing Research & Treatment Innovation",
    description: [
      "Accelerating and advancing global research initiatives focused on precision clinical trial development to expand treatment options for patients with leiomyosarcoma (LMS).",
      "Each year, NLMSF funds researchers pursuing LMS-specific research projects, advancing the science toward better treatments and outcomes.",
    ],
    logo: `${LOGO_DIR}/advancing-research.webp`,
    logoAlt: "LMS Sarcoma Research in Review logo",
    color: "#805891",
    angle: 360 - SEGMENT * 0.75,
  },
  {
    id: "family-community-roundtable",
    title: "Patient, Caregiver & Family Community Roundtable",
    description: [
      "A collaborative think tank network focused on identifying and addressing the common challenges faced by patients, caregivers, and families.",
    ],
    logo: `${LOGO_DIR}/family-community-roundtable.webp`,
    logoAlt: "LMS/Sarcoma Community Roundtable, The Circle of Hope logo",
    color: "#a2a459",
    angle: 270,
  },
  {
    id: "community-empowerment",
    title: "Community Empowerment Initiatives",
    description: [
      "Education, Support & Connection",
      "Awareness programs, education forums, resource support, research information and opportunities, live support network.",
    ],
    logo: `${LOGO_DIR}/community-empowerment.webp`,
    logoAlt: "National Leiomyosarcoma Foundation logo",
    color: "#de9d66",
    angle: 270 - SEGMENT,
  },
];

/** Right column, top to bottom (clockwise from top-right). */
const RIGHT: Program[] = [
  {
    id: "international-roundtable",
    title: "International Leiomyosarcoma Research Roundtable",
    description: [
      "Annual meetings bringing together global physician-scientists and research leaders to address unmet needs. Virtual CONNECTION with Research Clinicians & Sarcoma Specialists.",
    ],
    logo: `${LOGO_DIR}/international-roundtable.webp`,
    logoAlt: "NLMSF–SPAGN International Leiomyosarcoma Research Roundtable logo",
    color: "#6f7346",
    angle: 90 - SEGMENT * 1.5,
  },
  {
    id: "patient-perspectives-clinical-trials",
    title: "Patient Perspectives in Clinical Trials",
    description: [
      "Patients and families share their views/experiences in considering participation in a trial, those currently in a trial, and those who have completed a trial - what we can learn from each other and how the Foundation can help.",
    ],
    logo: `${LOGO_DIR}/patient-perspectives-clinical-trials.webp`,
    logoAlt: "Clinical Trials Patient-Caregiver Perspectives Network logo",
    color: "#b49fbd",
    angle: 90 - SEGMENT * 0.5,
  },
  {
    id: "caregiving-counts",
    title: "Caregiving Counts Program",
    description: [
      "A virtual program for new patients with their families/caregivers to interface with experienced caregivers and for support and new information from the NLMSF",
    ],
    logo: `${LOGO_DIR}/caregiving-counts.webp`,
    logoAlt: "NLMSF Caregiving Counts Program logo",
    color: "#d4ad4f",
    angle: 90 + SEGMENT * 0.5,
  },
  {
    id: "early-career-awards",
    title: "Annual Early Career Awards",
    description: [
      "Recognizing and encouraging the next generation of physician-scientists dedicated to LMS research.",
    ],
    logo: `${LOGO_DIR}/early-career-awards.webp`,
    logoAlt: "NLMSF Early Career Researcher Recognition Awards logo",
    color: "#c1b9af",
    angle: 90 + SEGMENT * 1.5,
  },
];

const ALL = [...RIGHT, ...LEFT];

/* ---- wheel geometry (SVG viewBox 0 0 600 600) ---- */
const C = 300;
const R_OUT = 228;
const R_IN = 118;
const R_LOGO = 230;
const LOGO_D = 118;

function polar(r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [C + r * Math.cos(rad), C + r * Math.sin(rad)];
}

function segmentPath(center: number) {
  const a0 = center - SEGMENT / 2;
  const a1 = center + SEGMENT / 2;
  const [x0, y0] = polar(R_OUT, a0);
  const [x1, y1] = polar(R_OUT, a1);
  const [x2, y2] = polar(R_IN, a1);
  const [x3, y3] = polar(R_IN, a0);
  const f = (n: number) => n.toFixed(2);
  return `M${f(x0)} ${f(y0)} A${R_OUT} ${R_OUT} 0 0 1 ${f(x1)} ${f(y1)} L${f(x2)} ${f(y2)} A${R_IN} ${R_IN} 0 0 0 ${f(x3)} ${f(y3)} Z`;
}

function ProgramItem({ p, side }: { p: Program; side: "left" | "right" }) {
  return (
    <li className={`impact-item impact-item--${side}`} id={`impact-${p.id}`}>
      <span className="impact-item-logo" aria-hidden>
        <Image src={p.logo} alt="" width={120} height={120} sizes="56px" />
      </span>
      <div className="impact-item-text">
        <span className="impact-item-swatch" style={{ backgroundColor: p.color }} aria-hidden />
        <h3 className="impact-item-title">{p.title}</h3>
        {p.description.map((line) => (
          <p key={line} className="impact-item-desc">
            {line}
          </p>
        ))}
      </div>
    </li>
  );
}

export default function ImpactInActionFigure() {
  return (
    <figure className="impact-board" aria-label="NLMSF Impact in Action: seven foundation programs">
      <ul className="impact-col impact-col--left">
        {LEFT.map((p) => (
          <ProgramItem key={p.id} p={p} side="left" />
        ))}
      </ul>

      <div className="impact-wheel" aria-hidden>
        <svg viewBox="0 0 600 600" className="impact-wheel-svg" role="presentation">
          <defs>
            <filter id="impact-disk-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#3b2a4a" floodOpacity="0.18" />
            </filter>
          </defs>
          {ALL.map((p) => (
            <path key={p.id} d={segmentPath(p.angle)} fill={p.color} stroke="#f4f2f6" strokeWidth="3" />
          ))}
          <circle cx={C} cy={C} r={R_IN + 14} fill="#fff" filter="url(#impact-disk-shadow)" />
          <g className="impact-wheel-center" textAnchor="middle">
            <text x={C} y={C - 44} className="impact-wheel-name">NATIONAL</text>
            <text x={C} y={C - 14} className="impact-wheel-name">LEIOMYOSARCOMA</text>
            <text x={C} y={C + 16} className="impact-wheel-name">FOUNDATION</text>
            <text x={C} y={C + 46} className="impact-wheel-tag">IMPACT IN ACTION</text>
            <text x={C} y={C + 82} className="impact-wheel-url">NLMSF.ORG</text>
          </g>
        </svg>
        {ALL.map((p) => {
          const [x, y] = polar(R_LOGO, p.angle);
          return (
            <span
              key={p.id}
              className="impact-wheel-logo"
              style={{
                left: `${((x - LOGO_D / 2) / 600) * 100}%`,
                top: `${((y - LOGO_D / 2) / 600) * 100}%`,
                width: `${(LOGO_D / 600) * 100}%`,
              }}
            >
              <Image src={p.logo} alt={p.logoAlt} width={240} height={240} sizes="(min-width: 960px) 90px, 18vw" />
            </span>
          );
        })}
      </div>

      <ul className="impact-col impact-col--right">
        {RIGHT.map((p) => (
          <ProgramItem key={p.id} p={p} side="right" />
        ))}
      </ul>
    </figure>
  );
}
