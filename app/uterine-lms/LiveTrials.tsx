type Study = {
  protocolSection: {
    identificationModule: {
      nctId: string;
      briefTitle: string;
    };
    statusModule: {
      overallStatus: string;
      startDateStruct?: { date: string };
    };
    sponsorCollaboratorsModule?: {
      leadSponsor?: { name: string };
    };
    designModule?: {
      phases?: string[];
    };
    conditionsModule?: {
      conditions?: string[];
    };
    descriptionModule?: {
      briefSummary?: string;
    };
    contactsLocationsModule?: {
      locations?: { facility?: string; city?: string; state?: string; country?: string }[];
    };
  };
};

type ApiResponse = {
  studies: Study[];
  totalCount: number;
};

const API_URL =
  "https://clinicaltrials.gov/api/v2/studies?" +
  "query.cond=uterine+leiomyosarcoma&" +
  "filter.overallStatus=RECRUITING,NOT_YET_RECRUITING,ENROLLING_BY_INVITATION&" +
  "pageSize=20&" +
  "countTotal=true&" +
  "sort=LastUpdatePostDate:desc";

async function fetchTrials(): Promise<{ studies: Study[]; total: number }> {
  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return { studies: [], total: 0 };
    const data: ApiResponse = await res.json();
    return { studies: data.studies ?? [], total: data.totalCount ?? 0 };
  } catch {
    return { studies: [], total: 0 };
  }
}

function phaseLabel(phases?: string[]): string {
  if (!phases || phases.length === 0) return "N/A";
  const map: Record<string, string> = {
    EARLY_PHASE1: "Early Phase 1",
    PHASE1: "Phase 1",
    PHASE2: "Phase 2",
    PHASE3: "Phase 3",
    PHASE4: "Phase 4",
    NA: "N/A",
  };
  return phases.map((p) => map[p] ?? p).join(" / ");
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

export default async function LiveTrials() {
  const { studies, total } = await fetchTrials();

  if (studies.length === 0) {
    return (
      <div className="ulms-live-empty">
        <p>
          Unable to load live trial data. Browse recruiting uterine LMS trials
          directly on{" "}
          <a
            href="https://clinicaltrials.gov/search?cond=uterine+leiomyosarcoma&aggFilters=status:rec"
            target="_blank"
            rel="noopener noreferrer"
          >
            ClinicalTrials.gov
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <>
      <p className="ulms-live-count">
        <strong>{total}</strong> trial{total !== 1 ? "s" : ""} currently
        recruiting or enrolling · Data from{" "}
        <a
          href="https://clinicaltrials.gov/search?cond=uterine+leiomyosarcoma&aggFilters=status:rec"
          target="_blank"
          rel="noopener noreferrer"
        >
          ClinicalTrials.gov
        </a>{" "}
        · Updated daily
      </p>
      <div className="ulms-live-grid">
        {studies.map((s) => {
          const id = s.protocolSection.identificationModule.nctId;
          const title = s.protocolSection.identificationModule.briefTitle;
          const sponsor =
            s.protocolSection.sponsorCollaboratorsModule?.leadSponsor?.name ??
            "—";
          const phases = phaseLabel(s.protocolSection.designModule?.phases);
          const status = s.protocolSection.statusModule.overallStatus
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
          const summary = truncate(
            s.protocolSection.descriptionModule?.briefSummary ?? "",
            180
          );
          const locs =
            s.protocolSection.contactsLocationsModule?.locations ?? [];
          const locCount = locs.length;
          const firstLoc = locs[0];
          const locLabel = firstLoc
            ? [firstLoc.city, firstLoc.state, firstLoc.country]
                .filter(Boolean)
                .join(", ")
            : null;

          return (
            <a
              key={id}
              href={`https://clinicaltrials.gov/study/${id}`}
              className="ulms-live-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ulms-live-card-top">
                <span className="ulms-live-status">{status}</span>
                <span className="ulms-live-phase">{phases}</span>
              </div>
              <h4>{title}</h4>
              {summary && <p className="ulms-live-summary">{summary}</p>}
              <div className="ulms-live-meta">
                <span>
                  <i className="fas fa-building" aria-hidden /> {sponsor}
                </span>
                {locLabel && (
                  <span>
                    <i className="fas fa-map-marker-alt" aria-hidden />{" "}
                    {locLabel}
                    {locCount > 1 ? ` +${locCount - 1} more` : ""}
                  </span>
                )}
              </div>
              <span className="ulms-live-nct">{id}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
