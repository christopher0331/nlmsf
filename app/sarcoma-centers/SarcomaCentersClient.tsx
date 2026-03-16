"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data types                                                         */
/* ------------------------------------------------------------------ */

type CenterLink = { label: string; url: string };

type SarcomaCenter = {
  name: string;
  city: string;
  state: string;
  stateFull: string;
  links: CenterLink[];
  isResource?: boolean;
};

/* ------------------------------------------------------------------ */
/*  Static directory — curated by NLMSF                                */
/* ------------------------------------------------------------------ */

const CENTERS: SarcomaCenter[] = [
  {
    name: "University of Arizona Cancer Center",
    city: "Tucson / Phoenix",
    state: "AZ",
    stateFull: "Arizona",
    links: [
      { label: "Clinical Trials", url: "https://uacc.arizona.edu/research/clinical-trials" },
    ],
  },
  {
    name: "Abramson Cancer Center",
    city: "Philadelphia",
    state: "PA",
    stateFull: "Pennsylvania",
    links: [
      { label: "Clinical Trials", url: "https://app.emergingmed.com/acc-upenn/trials/" },
    ],
  },
  {
    name: "Aurora Health Center",
    city: "Milwaukee",
    state: "WI",
    stateFull: "Wisconsin",
    links: [
      { label: "Clinical Trials", url: "https://www.aurorahealthcare.org/aurora-research-institute/clinical-trials" },
    ],
  },
  {
    name: "Baylor University Medical Center / Scott & White Cancer Center",
    city: "Dallas",
    state: "TX",
    stateFull: "Texas",
    links: [
      { label: "Clinical Trials GPS", url: "https://www.clinicaltrialsgps.com/texas/dallas/baylor-university-medical-center/facility-358/" },
      { label: "BRI Trials", url: "https://britrials.bswsites.com/#" },
    ],
  },
  {
    name: "Cleveland Clinic – Taussig Cancer Center",
    city: "Cleveland",
    state: "OH",
    stateFull: "Ohio",
    links: [
      { label: "Search Cancer Trials", url: "https://my.clevelandclinic.org/departments/cancer/research-innovations/search-cancer-clinical-trials" },
    ],
  },
  {
    name: "Dana-Farber Cancer Institute",
    city: "Boston",
    state: "MA",
    stateFull: "Massachusetts",
    links: [
      { label: "Clinical Trials", url: "https://www.dana-farber.org/research/clinical-trials/" },
      { label: "Find a Trial", url: "https://www.dana-farber.org/research/clinical-trials/find-a-clinical-trial/" },
    ],
  },
  {
    name: "Dartmouth–Hitchcock Norris Cotton Cancer Center",
    city: "Lebanon",
    state: "NH",
    stateFull: "New Hampshire",
    links: [
      { label: "Clinical Trials", url: "https://cancer.dartmouth.edu/health-care-professionals/clinical-trials" },
    ],
  },
  {
    name: "Duke Cancer Institute",
    city: "Durham",
    state: "NC",
    stateFull: "North Carolina",
    links: [
      { label: "Adult Trials", url: "http://www.dukecancerinstitute.org/clinical-trials/adult/2200" },
    ],
  },
  {
    name: "Emory Winship Cancer Institute",
    city: "Atlanta",
    state: "GA",
    stateFull: "Georgia",
    links: [
      { label: "Clinical Trials", url: "https://winshipcancer.emory.edu/patient-care/clinical-trials/index.html" },
    ],
  },
  {
    name: "Fox Chase Cancer Center",
    city: "Philadelphia",
    state: "PA",
    stateFull: "Pennsylvania",
    links: [
      { label: "Search Trials", url: "https://www.foxchase.org/clinical-care/search-clinical-trials" },
    ],
  },
  {
    name: "Fred Hutchinson Cancer Center",
    city: "Seattle",
    state: "WA",
    stateFull: "Washington",
    links: [
      { label: "Clinical Trials", url: "https://www.fredhutch.org/en/treatment/clinical-trials.html" },
    ],
  },
  {
    name: "Froedtert & Medical College of Wisconsin",
    city: "Milwaukee",
    state: "WI",
    stateFull: "Wisconsin",
    links: [
      { label: "Search Trials", url: "https://www.froedtert.com/research/clinical-trials/search" },
    ],
  },
  {
    name: "Hackensack University Medical Center / Sarcoma Center",
    city: "Hackensack",
    state: "NJ",
    stateFull: "New Jersey",
    links: [
      { label: "Clinical Trials", url: "https://www.hackensackumc.org/health-professionals/clinical-trials/" },
    ],
  },
  {
    name: "Hoag Hospital & Sarcoma Program",
    city: "Newport Beach",
    state: "CA",
    stateFull: "California",
    links: [
      { label: "Sarcoma Trials", url: "https://www.hoag.org/specialties-services/cancer/conditions/bone-soft-tissue-sarcoma/clinical-trials-research/" },
    ],
  },
  {
    name: "Holden Comprehensive Cancer Center",
    city: "Iowa City",
    state: "IA",
    stateFull: "Iowa",
    links: [
      { label: "Trial Search", url: "https://smrs.healthcare.uiowa.edu/sip-mobile/flowchart.html" },
      { label: "Iowa Trials (GPS)", url: "https://www.clinicaltrialsgps.com/iowa/" },
    ],
  },
  {
    name: "Hollings Cancer Center",
    city: "Charleston",
    state: "SC",
    stateFull: "South Carolina",
    links: [
      { label: "Clinical Trials", url: "https://www.hollingscancercenter.org/clinical-trials/" },
    ],
  },
  {
    name: "Herbert Irving Comprehensive Cancer Center (Columbia University)",
    city: "New York",
    state: "NY",
    stateFull: "New York",
    links: [
      { label: "Clinical Trials", url: "http://cancer.columbia.edu/clinical-trials/" },
    ],
  },
  {
    name: "James Cancer Center (Ohio State)",
    city: "Columbus",
    state: "OH",
    stateFull: "Ohio",
    links: [
      { label: "Find a Trial", url: "https://cancer.osu.edu/cancer-specialties/clinical-trials/find-a-clinical-trial" },
    ],
  },
  {
    name: "Johns Hopkins Sidney Kimmel Cancer Center",
    city: "Baltimore",
    state: "MD",
    stateFull: "Maryland",
    links: [
      { label: "Clinical Trials", url: "https://trials.johnshopkins.edu/" },
    ],
  },
  {
    name: "Knight Cancer Institute – OHSU",
    city: "Portland",
    state: "OR",
    stateFull: "Oregon",
    links: [
      { label: "Sarcoma Trials", url: "https://apps.ohsu.edu/research/study-participation-opportunities-system/listing.php?hcat=Adult+Cancers&cat=Sarcoma" },
    ],
  },
  {
    name: "Levine Cancer Institute",
    city: "Charlotte",
    state: "NC",
    stateFull: "North Carolina",
    links: [
      { label: "Clinical Trials GPS", url: "https://www.clinicaltrialsgps.com/north-carolina/charlotte/levine-cancer-institute/facility-58831/" },
    ],
  },
  {
    name: "LifeBridge Health – Alvin & Lois Lapidus Cancer Institute (Sinai Hospital)",
    city: "Baltimore",
    state: "MD",
    stateFull: "Maryland",
    links: [
      { label: "Clinical Trials GPS", url: "https://www.clinicaltrialsgps.com/maryland/baltimore/alvin-and-lois-lapidus-cancer-institute-sinai-hospital-of-baltimore/fac" },
    ],
  },
  {
    name: "Loma Linda University Cancer Center / Sarcoma Center",
    city: "Loma Linda",
    state: "CA",
    stateFull: "California",
    links: [
      { label: "Clinical Trials", url: "https://news.llu.edu/research/clinical-trials-loma-linda-university-cancer-center-seek-new-treatments" },
    ],
  },
  {
    name: "Huntsman Cancer Institute (University of Utah)",
    city: "Salt Lake City",
    state: "UT",
    stateFull: "Utah",
    links: [
      { label: "Clinical Trials", url: "https://healthcare.utah.edu/huntsmancancerinstitute/clinical-trials/" },
    ],
  },
  {
    name: "Massachusetts General Hospital",
    city: "Boston",
    state: "MA",
    stateFull: "Massachusetts",
    links: [
      { label: "Clinical Trials", url: "https://www.massgeneral.org/research/clinicaltrials/" },
    ],
  },
  {
    name: "MD Anderson Cancer Center",
    city: "Houston",
    state: "TX",
    stateFull: "Texas",
    links: [
      { label: "Clinical Trials", url: "https://www.mdanderson.org/patients-family/diagnosis-treatment/clinical-trials.html" },
    ],
  },
  {
    name: "Mayo Clinic",
    city: "Rochester",
    state: "MN",
    stateFull: "Minnesota",
    links: [
      { label: "Soft Tissue Sarcoma Trials", url: "https://www.mayo.edu/research/clinical-trials/search-results?keyword=soft%20tissue%20sarcoma" },
    ],
  },
  {
    name: "Memorial Sloan Kettering Cancer Center",
    city: "New York",
    state: "NY",
    stateFull: "New York",
    links: [
      { label: "Clinical Trials GPS", url: "https://www.clinicaltrialsgps.com/new-york/new-york/memorial-sloan-kettering-cancer-center/facility-3576/" },
    ],
  },
  {
    name: "Moffitt Cancer Center",
    city: "Tampa",
    state: "FL",
    stateFull: "Florida",
    links: [
      { label: "Sarcoma Trials", url: "https://www.moffitt.org/cancers/sarcoma/clinical-trials/" },
      { label: "Soft Tissue Search", url: "https://moffitt.org/clinicaltrialssearch?cancerType=Soft+Tissue&q=" },
    ],
  },
  {
    name: "Monter Cancer Center",
    city: "Lake Success",
    state: "NY",
    stateFull: "New York",
    links: [
      { label: "Clinical Trials GPS", url: "https://www.clinicaltrialsgps.com/new-york/lake-success/monter-cancer-center/facility-33278/" },
    ],
  },
  {
    name: "Montefiore Medical Center",
    city: "Bronx",
    state: "NY",
    stateFull: "New York",
    links: [
      { label: "Cancer Trials", url: "https://www.montefiore.org/cancer-clinical-trials" },
    ],
  },
  {
    name: "Nebraska Methodist Hospital Cancer Center",
    city: "Omaha",
    state: "NE",
    stateFull: "Nebraska",
    links: [
      { label: "Clinical Trials GPS", url: "https://www.clinicaltrialsgps.com/nebraska/omaha/nebraska-methodist-hospital-cancer-center/facility-160988/" },
      { label: "Sarcoma Trials", url: "http://www.methodistclinicaltrials.com/trial-categories/sarcoma/" },
    ],
  },
  {
    name: "Northside Hospital",
    city: "Atlanta",
    state: "GA",
    stateFull: "Georgia",
    links: [
      { label: "Email: clinicaltrials@northside.com", url: "mailto:clinicaltrials@northside.com" },
    ],
  },
  {
    name: "Northwestern University – Robert H. Lurie Comprehensive Cancer Center",
    city: "Chicago",
    state: "IL",
    stateFull: "Illinois",
    links: [
      { label: "Clinical Trials", url: "https://www.cancer.northwestern.edu/clinical-trials/index.html" },
    ],
  },
  {
    name: "Roswell Park Comprehensive Cancer Center",
    city: "Buffalo",
    state: "NY",
    stateFull: "New York",
    links: [
      { label: "Clinical Trials", url: "https://forms.roswellpark.org/clinical-trials" },
    ],
  },
  {
    name: "Sarcoma Oncology Center",
    city: "Santa Monica",
    state: "CA",
    stateFull: "California",
    links: [
      { label: "Clinical Trials", url: "https://sarcomaoncology.com/cancer-clinical-trials/" },
    ],
  },
  {
    name: "Siteman Cancer Center",
    city: "St. Louis",
    state: "MO",
    stateFull: "Missouri",
    links: [
      { label: "Clinical Trials GPS", url: "https://www.clinicaltrialsgps.com/missouri/st-louis/siteman-cancer-center/facility-14121/" },
    ],
  },
  {
    name: "Stanford Cancer Institute",
    city: "Palo Alto",
    state: "CA",
    stateFull: "California",
    links: [
      { label: "Clinical Trials", url: "http://med.stanford.edu/cancer/trials.html" },
    ],
  },
  {
    name: "Sylvester Comprehensive Cancer Center",
    city: "Miami",
    state: "FL",
    stateFull: "Florida",
    links: [
      { label: "Clinical Trials", url: "https://clinicaltrials.sylvester.org/index.htm" },
    ],
  },
  {
    name: "Tisch Cancer Institute (Icahn School of Medicine at Mt. Sinai)",
    city: "New York",
    state: "NY",
    stateFull: "New York",
    links: [
      { label: "Clinical Trials", url: "https://icahn.mssm.edu/research/tisch/clinical-trials/patients" },
    ],
  },
  {
    name: "UCLA Jonsson Comprehensive Cancer Center",
    city: "Los Angeles",
    state: "CA",
    stateFull: "California",
    links: [
      { label: "Find a Trial", url: "https://cancer.ucla.edu/patient-care/enroll-in-a-clinical-trial/find-a-ucla-clinical-trial" },
    ],
  },
  {
    name: "University of Alabama at Birmingham Cancer Center",
    city: "Birmingham",
    state: "AL",
    stateFull: "Alabama",
    links: [
      { label: "Clinical Trials", url: "https://www.mesothelioma.com/treatment/clinical-trials/" },
    ],
  },
  {
    name: "University of Colorado Cancer Center",
    city: "Aurora",
    state: "CO",
    stateFull: "Colorado",
    links: [
      { label: "Clinical Trials", url: "http://www.ucdenver.edu/academics/colleges/medicalschool/centers/cancercenter/clinicaltrials/Pages/ClinicalTrials.aspx" },
    ],
  },
  {
    name: "University of Kansas Cancer Center",
    city: "Kansas City",
    state: "KS",
    stateFull: "Kansas",
    links: [
      { label: "Clinical Trials", url: "https://www.kucancercenter.org/cancer-clinical-trials" },
    ],
  },
  {
    name: "University of Maryland Greenebaum Comprehensive Cancer Center",
    city: "Baltimore",
    state: "MD",
    stateFull: "Maryland",
    links: [
      { label: "Clinical Trials", url: "https://www.umms.org/umgccc/cancer-services/cancer-care/research-clinical-trials/clinical-trials" },
    ],
  },
  {
    name: "University of Michigan Rogel Cancer Center",
    city: "Ann Arbor",
    state: "MI",
    stateFull: "Michigan",
    links: [
      { label: "Clinical Trials", url: "https://www.rogelcancercenter.org/clinical-trials" },
    ],
  },
  {
    name: "University of Minnesota Masonic Cancer Center",
    city: "Minneapolis",
    state: "MN",
    stateFull: "Minnesota",
    links: [
      { label: "Clinical Trials", url: "https://omis.cancer.umn.edu/research/clinicaltrials/" },
    ],
  },
  {
    name: "University of New Mexico Comprehensive Cancer Center",
    city: "Albuquerque",
    state: "NM",
    stateFull: "New Mexico",
    links: [
      { label: "Clinical Trials", url: "https://cancer.unm.edu/clinical-trials" },
    ],
  },
  {
    name: "UNC Lineberger Comprehensive Cancer Center",
    city: "Chapel Hill",
    state: "NC",
    stateFull: "North Carolina",
    links: [
      { label: "Clinical Trials", url: "https://unclineberger.org/patientcare/clinical-trials" },
      { label: "UNC Research Trials", url: "https://research.unc.edu/clinical-trials/" },
    ],
  },
  {
    name: "UPMC Hillman Cancer Center",
    city: "Pittsburgh",
    state: "PA",
    stateFull: "Pennsylvania",
    links: [
      { label: "Clinical Trials", url: "http://hillman.upmc.com/research/clinical-trials" },
    ],
  },
  {
    name: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    stateFull: "Texas",
    links: [
      { label: "Clinical Trials", url: "https://clinicaltrials.utswmed.org/" },
    ],
  },
  {
    name: "University of Vermont Cancer Center",
    city: "Burlington",
    state: "VT",
    stateFull: "Vermont",
    links: [
      { label: "Clinical Trials", url: "http://www.med.uvm.edu/uvmcancercenter/clinicaltrialsgroup/cancer-trials" },
    ],
  },
  {
    name: "Vanderbilt-Ingram Cancer Center",
    city: "Nashville",
    state: "TN",
    stateFull: "Tennessee",
    links: [
      { label: "Cancer Center", url: "https://www.vanderbilthealth.com/cancer/51428" },
      { label: "Sarcoma Trials", url: "https://www.vicc.org/clinical-trials/search?f%5B0%5D=disease_site%3ASarcoma" },
    ],
  },
  {
    name: "Virginia Commonwealth University – Massey Cancer Center",
    city: "Richmond",
    state: "VA",
    stateFull: "Virginia",
    links: [
      { label: "Massey Cancer Center", url: "https://www.massey.vcu.edu" },
      { label: "Trial Search", url: "https://oncoreapp.mcvh-vcu.edu/SIPMassey.html" },
    ],
  },
  {
    name: "Wake Forest Baptist Comprehensive Cancer Center",
    city: "Winston-Salem",
    state: "NC",
    stateFull: "North Carolina",
    links: [
      { label: "Clinical Trials GPS", url: "https://www.clinicaltrialsgps.com/north-carolina/winston-salem/comprehensive-cancer-center-of-wake-forest-university/fac" },
    ],
  },
  {
    name: "WVU Cancer Institute – Mary Babb Randolph Cancer Center",
    city: "Morgantown",
    state: "WV",
    stateFull: "West Virginia",
    links: [
      { label: "Clinical Research", url: "http://wvucancer.org/clinical-research/" },
    ],
  },
  // ---- Resources (not treatment centers) ----
  {
    name: "FDA: Patient-Friendly Language for Cancer Clinical Trials",
    city: "National",
    state: "",
    stateFull: "National Resource",
    links: [
      { label: "FDA Resource", url: "https://www.fda.gov/about-fda/oncology-center-excellence/patient-friendly-language-cancer-clinical-trials" },
    ],
    isResource: true,
  },
  {
    name: "National Cancer Institute — Sarcoma Clinical Trials",
    city: "National",
    state: "",
    stateFull: "National Resource",
    links: [
      { label: "NCI Sarcoma Research", url: "https://www.cancer.gov/types/soft-tissue-sarcoma/research" },
    ],
    isResource: true,
  },
  {
    name: "Sarcoma Alliance for Research through Collaboration (SARC)",
    city: "Ann Arbor",
    state: "MI",
    stateFull: "Michigan",
    links: [
      { label: "SARC Trials", url: "http://www.sarctrials.org" },
    ],
    isResource: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Derived helpers                                                    */
/* ------------------------------------------------------------------ */

const STATES = Array.from(
  new Set(CENTERS.filter((c) => c.state).map((c) => c.state)),
).sort();

const STATE_LABELS: Record<string, string> = {};
CENTERS.forEach((c) => {
  if (c.state && !STATE_LABELS[c.state]) STATE_LABELS[c.state] = c.stateFull;
});

type SortKey = "name" | "state";

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SarcomaCentersClient() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [sort, setSort] = useState<SortKey>("name");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    let list = CENTERS;

    if (stateFilter) {
      list = list.filter((c) => c.state === stateFilter);
    }

    if (q) {
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.city.toLowerCase().includes(q) ||
          c.stateFull.toLowerCase().includes(q) ||
          c.state.toLowerCase() === q,
      );
    }

    const sorted = [...list];
    if (sort === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sorted.sort(
        (a, b) => a.stateFull.localeCompare(b.stateFull) || a.name.localeCompare(b.name),
      );
    }
    return sorted;
  }, [query, stateFilter, sort]);

  return (
    <main>
      {/* Hero */}
      <section
        className="mx-auto mb-8 max-w-[1400px] rounded-xl border border-blue-200 px-6 py-12 text-center shadow-md md:px-8"
        style={{ background: "linear-gradient(135deg, #eff6ff, #eef2ff)" }}
      >
        <div className="mb-6 inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm">
          <i className="fas fa-hospital-alt mr-2 text-[#7e22ce]" aria-hidden />
          <span className="font-medium text-gray-700">Sarcoma Centers</span>
        </div>
        <h1
          className="mb-4 text-2xl font-extrabold md:text-4xl"
          style={{
            background: "linear-gradient(to right, #7e22ce, #4338ca)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Clinical Trial Links by Sarcoma Center
        </h1>
        <div
          className="mx-auto my-6 h-1 w-16 rounded"
          style={{ background: "linear-gradient(to right, #7e22ce, #4338ca)" }}
          aria-hidden
        />
        <p className="mx-auto mb-0 max-w-[700px] text-lg text-gray-600">
          Direct access to clinical trial search pages at major sarcoma and cancer
          centers across the United States.
        </p>
      </section>

      <div className="mx-auto max-w-[1400px] px-4 pb-16 md:px-6">
        {/* Controls */}
        <div className="mb-8 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-end sm:gap-5">
          {/* Search */}
          <div className="flex-1">
            <label htmlFor="sc-search" className="mb-1 block text-sm font-semibold text-gray-700">
              Search
            </label>
            <div className="relative">
              <i className="fas fa-search pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" aria-hidden />
              <input
                id="sc-search"
                type="text"
                placeholder="Center name, city, or state…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2.5 pl-9 pr-3 text-sm focus:border-[#7e22ce] focus:outline-none focus:ring-2 focus:ring-[#7e22ce]/20"
              />
            </div>
          </div>

          {/* State filter */}
          <div className="w-full sm:w-48">
            <label htmlFor="sc-state" className="mb-1 block text-sm font-semibold text-gray-700">
              State
            </label>
            <select
              id="sc-state"
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-[#7e22ce] focus:outline-none focus:ring-2 focus:ring-[#7e22ce]/20"
            >
              <option value="">All States</option>
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {STATE_LABELS[s]} ({s})
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="w-full sm:w-44">
            <label htmlFor="sc-sort" className="mb-1 block text-sm font-semibold text-gray-700">
              Sort by
            </label>
            <select
              id="sc-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-[#7e22ce] focus:outline-none focus:ring-2 focus:ring-[#7e22ce]/20"
            >
              <option value="name">Center Name</option>
              <option value="state">State</option>
            </select>
          </div>
        </div>

        {/* Result count */}
        <p className="mb-4 text-sm text-gray-500">
          Showing <strong className="text-gray-700">{filtered.length}</strong> of{" "}
          {CENTERS.length} centers
          {stateFilter ? ` in ${STATE_LABELS[stateFilter]}` : ""}
          {query ? ` matching "${query}"` : ""}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 py-16 text-center">
            <i className="fas fa-search mb-3 text-3xl text-gray-300" aria-hidden />
            <p className="text-gray-500">No centers found. Try adjusting your search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className={`group relative rounded-xl border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  c.isResource
                    ? "border-amber-200 bg-amber-50/30"
                    : "border-gray-200"
                }`}
              >
                {c.isResource && (
                  <span className="absolute right-3 top-3 rounded-full bg-amber-100 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-amber-700">
                    Resource
                  </span>
                )}
                <h3 className="mb-1 pr-16 text-[0.95rem] font-bold leading-snug text-gray-900">
                  {c.name}
                </h3>
                <p className="mb-3 flex items-center gap-1.5 text-sm text-gray-500">
                  <i className="fas fa-map-marker-alt text-[#7e22ce] text-xs" aria-hidden />
                  {c.city}
                  {c.state ? `, ${c.state}` : ""}
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="inline-flex items-center gap-1.5 rounded-md border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 no-underline transition-colors hover:border-violet-400 hover:bg-violet-100"
                    >
                      <i
                        className={`fas ${link.url.startsWith("mailto:") ? "fa-envelope" : "fa-external-link-alt"} text-[0.6rem]`}
                        aria-hidden
                      />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            href="/clinical-trials-research-information"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 no-underline shadow-sm transition-colors hover:border-violet-500 hover:bg-violet-50 hover:text-violet-700"
          >
            <i className="fas fa-arrow-left text-sm" aria-hidden />
            Back to Clinical Trials & Research Information
          </Link>
        </div>
      </div>
    </main>
  );
}
