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
      { label: "Clinical Trials", url: "https://cancercenter.arizona.edu/patients/clinical-trials" },
      { label: "Backup Link", url: "https://tinyurl.com/ycz6q9z8" },
    ],
  },
  {
    name: "Abramson Cancer Center",
    city: "Philadelphia",
    state: "PA",
    stateFull: "Pennsylvania",
    links: [
      { label: "Clinical Trials", url: "https://app.emergingmed.com/acc-upenn/trials/" },
      { label: "Backup Link", url: "https://tinyurl.com/ycezedz8" },
    ],
  },
  {
    name: "Aurora Health Center",
    city: "Milwaukee",
    state: "WI",
    stateFull: "Wisconsin",
    links: [
      { label: "Cancer Research Studies", url: "https://www.advocatehealth.org/research/advocate-aurora/participate-in-research/cancer" },
      { label: "Participate in Research", url: "https://www.advocatehealth.org/research/advocate-aurora/participate-in-research" },
    ],
  },
  {
    name: "Baylor University Medical Center / Scott & White Cancer Center",
    city: "Dallas",
    state: "TX",
    stateFull: "Texas",
    links: [
      { label: "Cancer Research", url: "https://www.bswhealth.com/specialties/cancer-care/cancer-research" },
      { label: "Research Institute", url: "https://www.bswhealth.com/research" },
      { label: "BRI Trials", url: "https://britrials.bswsites.com/#" },
    ],
  },
  {
    name: "Cleveland Clinic – Taussig Cancer Center",
    city: "Cleveland",
    state: "OH",
    stateFull: "Ohio",
    links: [
      { label: "Search Cancer Clinical Trials", url: "https://my.clevelandclinic.org/departments/cancer/clinical-trials" },
      { label: "Clinical Trials Search", url: "https://my.clevelandclinic.org/departments/cancer/research-innovations/search-cancer-clinical-trials" },
      { label: "Backup Link", url: "https://tinyurl.com/ybd5vwne" },
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
      { label: "Adult Trials", url: "https://www.dukecancerinstitute.org/clinical-trials" },
    ],
  },
  {
    name: "Emory Winship Cancer Institute",
    city: "Atlanta",
    state: "GA",
    stateFull: "Georgia",
    links: [
      { label: "Clinical Trials", url: "https://winshipcancer.emory.edu/patient-care/clinical-trials/index.html" },
      { label: "Backup Link", url: "https://tinyurl.com/ycr55kza" },
    ],
  },
  {
    name: "Fox Chase Cancer Center",
    city: "Philadelphia",
    state: "PA",
    stateFull: "Pennsylvania",
    links: [
      { label: "Search Trials", url: "https://www.foxchase.org/clinical-care/search-clinical-trials" },
      { label: "Backup Link", url: "https://tinyurl.com/y8bqfk89" },
    ],
  },
  {
    name: "Fred Hutchinson Cancer Center",
    city: "Seattle",
    state: "WA",
    stateFull: "Washington",
    links: [
      { label: "Clinical Trials", url: "https://www.fredhutch.org/en/research/clinical-trials.html" },
      { label: "Backup Link", url: "https://tinyurl.com/y8zxclkz" },
    ],
  },
  {
    name: "Froedtert & Medical College of Wisconsin",
    city: "Milwaukee",
    state: "WI",
    stateFull: "Wisconsin",
    links: [
      { label: "Search Trials", url: "https://www.froedtert.com/research/clinical-trials/search" },
      { label: "Backup Link", url: "https://tinyurl.com/yadkzsgo" },
    ],
  },
  {
    name: "Hackensack University Medical Center / Sarcoma Center",
    city: "Hackensack",
    state: "NJ",
    stateFull: "New Jersey",
    links: [
      { label: "Cancer Research", url: "https://www.hackensackmeridianhealth.org/en/services/cancer-care/our-cancer-research" },
      { label: "Bone Tumor & Sarcoma Care", url: "https://www.hackensackmeridianhealth.org/en/services/cancer-care/bone-tumor-sarcoma" },
      { label: "Backup Link", url: "https://tinyurl.com/y9lrnypn" },
    ],
  },
  {
    name: "Hoag Hospital & Sarcoma Program",
    city: "Newport Beach",
    state: "CA",
    stateFull: "California",
    links: [
      { label: "Available Clinical Trials", url: "https://www.hoag.org/specialties-services/other-programs-services/clinical-research/available-clinical-trials/" },
      { label: "Hoag Cancer Program", url: "https://www.hoag.org/specialties-services/cancer/" },
    ],
  },
  {
    name: "Holden Comprehensive Cancer Center",
    city: "Iowa City",
    state: "IA",
    stateFull: "Iowa",
    links: [
      { label: "Holden Clinical Research Services", url: "https://holden.uihealthcare.org/research/clinical-research-services" },
      { label: "University of Iowa Cancer Center", url: "https://cancer.uiowa.edu/" },
    ],
  },
  {
    name: "Hollings Cancer Center",
    city: "Charleston",
    state: "SC",
    stateFull: "South Carolina",
    links: [
      { label: "Clinical Trials", url: "https://www.hollingscancercenter.org/clinical-trials/" },
      { label: "Backup Link", url: "https://tinyurl.com/ycq9ql5u" },
    ],
  },
  {
    name: "Herbert Irving Comprehensive Cancer Center (Columbia University)",
    city: "New York",
    state: "NY",
    stateFull: "New York",
    links: [
      { label: "Cancer Clinical Trials", url: "https://www.cancer.columbia.edu/cancer-types-and-care/clinical-trials" },
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
      { label: "Backup Link", url: "https://tinyurl.com/y9ybtboc" },
    ],
  },
  {
    name: "Levine Cancer Institute",
    city: "Charlotte",
    state: "NC",
    stateFull: "North Carolina",
    links: [
      { label: "Clinical Trials", url: "https://atriumhealth.org/research-clinical-trials/cancer-clinical-trials" },
      { label: "Backup Link", url: "https://tinyurl.com/y9uk6kln" },
    ],
  },
  {
    name: "LifeBridge Health – Alvin & Lois Lapidus Cancer Institute (Sinai Hospital)",
    city: "Baltimore",
    state: "MD",
    stateFull: "Maryland",
    links: [
      { label: "Oncology Research", url: "https://www.lifebridgehealth.org/research/oncology-research" },
      { label: "Active Clinical Trials", url: "https://www.lifebridgehealth.org/research/active-clinical-trials" },
      { label: "Backup Link", url: "https://tinyurl.com/y9lrnypn" },
    ],
  },
  {
    name: "Loma Linda University Cancer Center / Sarcoma Center",
    city: "Loma Linda",
    state: "CA",
    stateFull: "California",
    links: [
      { label: "Clinical Trials", url: "https://news.llu.edu/research/clinical-trials-loma-linda-university-cancer-center-seek-new-treatments" },
      { label: "Backup Link", url: "https://tinyurl.com/ya4rhyrb" },
    ],
  },
  {
    name: "Huntsman Cancer Institute (University of Utah)",
    city: "Salt Lake City",
    state: "UT",
    stateFull: "Utah",
    links: [
      { label: "Clinical Trials", url: "https://healthcare.utah.edu/huntsmancancerinstitute/clinical-trials/search.php" },
      { label: "Backup Link", url: "https://tinyurl.com/y6uswwyx" },
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
      { label: "Clinical Trials", url: "https://www.mdanderson.org/patients-family/search-results.html?q=Sarcoma&searchType=clinical%20trials#filter|enrollment_status:open" },
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
      { label: "Sarcoma Trials at MSK", url: "https://www.mskcc.org/research-programs/sarcoma-center-msk/sarcoma-trials-msk" },
      { label: "Soft Tissue Sarcoma Clinical Trials", url: "https://www.mskcc.org/cancer-care/types/soft-tissue-sarcoma/clinical-trials" },
      { label: "Backup Link", url: "https://tinyurl.com/y8e7tf5j" },
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
      { label: "Northwell Clinical Trials", url: "https://cancer.northwell.edu/clinical-trials" },
      { label: "Monter Cancer Center", url: "https://www.northwell.edu/cancer-institute" },
      { label: "Backup Link", url: "https://tinyurl.com/y9vpu2o8" },
    ],
  },
  {
    name: "Montefiore Medical Center",
    city: "Bronx",
    state: "NY",
    stateFull: "New York",
    links: [
      { label: "Cancer Trials", url: "https://www.montefiore.org/cancer-clinical-trials" },
      { label: "Backup Link", url: "https://tinyurl.com/y8o84god" },
    ],
  },
  {
    name: "Nebraska Methodist Hospital Cancer Center",
    city: "Omaha",
    state: "NE",
    stateFull: "Nebraska",
    links: [
      { label: "Methodist Clinical Trials", url: "https://bestcare.org/specialties/clinical-trials" },
      { label: "Nebraska Medicine Cancer Clinical Trials", url: "https://www.nebraskamed.com/clinical-trials/cancer-clinical-trials" },
    ],
  },
  {
    name: "Northside Hospital",
    city: "Atlanta",
    state: "GA",
    stateFull: "Georgia",
    links: [
      { label: "Research and Clinical Trials", url: "https://www.northside.com/services/cancer-institute/cancer-treatment-options/research-and-clinical-trials" },
      { label: "Northside Trial Finder", url: "https://northsidetrials.com/" },
      { label: "Email: clinicaltrials@northside.com", url: "mailto:clinicaltrials@northside.com" },
      { label: "Backup Link", url: "https://tinyurl.com/yaxx8b4x" },
    ],
  },
  {
    name: "Northwestern University – Robert H. Lurie Comprehensive Cancer Center",
    city: "Chicago",
    state: "IL",
    stateFull: "Illinois",
    links: [
      { label: "Clinical Trials", url: "https://www.cancer.northwestern.edu/clinical-trials/index.html" },
      { label: "Backup Link", url: "https://tinyurl.com/ybdazqmt" },
    ],
  },
  {
    name: "Roswell Park Comprehensive Cancer Center",
    city: "Buffalo",
    state: "NY",
    stateFull: "New York",
    links: [
      { label: "Clinical Trials", url: "https://forms.roswellpark.org/clinical-trials" },
      { label: "Backup Link", url: "https://tinyurl.com/gt2hmb6" },
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
      { label: "Clinical Trials Search", url: "https://siteman.wustl.edu/treatment/clinical-trials/" },
      { label: "Backup Link", url: "https://tinyurl.com/ycwrqaly" },
    ],
  },
  {
    name: "Stanford Cancer Institute",
    city: "Palo Alto",
    state: "CA",
    stateFull: "California",
    links: [
      { label: "Clinical Trials", url: "https://med.stanford.edu/cancer/clinical-trials.html" },
    ],
  },
  {
    name: "Sylvester Comprehensive Cancer Center",
    city: "Miami",
    state: "FL",
    stateFull: "Florida",
    links: [
      { label: "Clinical Trials", url: "https://clinicaltrials.sylvester.org/index.htm" },
      { label: "Backup Link", url: "https://tinyurl.com/ycggxyjy" },
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
      { label: "Backup Link", url: "https://tinyurl.com/ydc7o7gz" },
    ],
  },
  {
    name: "University of Alabama at Birmingham Cancer Center",
    city: "Birmingham",
    state: "AL",
    stateFull: "Alabama",
    links: [
      { label: "Clinical Trials", url: "https://www.onealcanceruab.org/patients-caregivers/clinical-trials/" },
    ],
  },
  {
    name: "University of Colorado Cancer Center",
    city: "Aurora",
    state: "CO",
    stateFull: "Colorado",
    links: [
      { label: "Clinical Trials", url: "https://medschool.cuanschutz.edu/colorado-cancer-center/clinical-trials" },
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
      { label: "Clinical Trials Database", url: "https://www.umms.org/umgccc/cancer-services/cancer-care/clinical-trials/database" },
    ],
  },
  {
    name: "University of Michigan Rogel Cancer Center",
    city: "Ann Arbor",
    state: "MI",
    stateFull: "Michigan",
    links: [
      { label: "Find Clinical Trials", url: "https://www.rogelcancercenter.org/clinical-trials/find-clinical-trials" },
      { label: "Backup Link", url: "https://tinyurl.com/ybsgr375" },
    ],
  },
  {
    name: "University of Minnesota Masonic Cancer Center",
    city: "Minneapolis",
    state: "MN",
    stateFull: "Minnesota",
    links: [
      { label: "Clinical Trials", url: "https://omis.cancer.umn.edu/research/clinicaltrials/" },
      { label: "Backup Link", url: "https://tinyurl.com/ycpwmu8x" },
    ],
  },
  {
    name: "University of New Mexico Comprehensive Cancer Center",
    city: "Albuquerque",
    state: "NM",
    stateFull: "New Mexico",
    links: [
      { label: "Clinical Trials", url: "https://cancer.unm.edu" },
      { label: "Backup Link", url: "https://tinyurl.com/y8dcoaff" },
    ],
  },
  {
    name: "UNC Lineberger Comprehensive Cancer Center",
    city: "Chapel Hill",
    state: "NC",
    stateFull: "North Carolina",
    links: [
      { label: "Clinical Trials", url: "https://unclineberger.org/patientcare/clinical-trials/" },
      { label: "Find a Clinical Trial", url: "https://unclineberger.org/clinical-trials/find-a-clinical-trial/" },
      { label: "Backup Link", url: "https://tinyurl.com/y8kukw3g" },
    ],
  },
  {
    name: "UPMC Hillman Cancer Center",
    city: "Pittsburgh",
    state: "PA",
    stateFull: "Pennsylvania",
    links: [
      { label: "Clinical Research", url: "https://upci.upmc.edu/research/clinical/" },
      { label: "Clinical Trials", url: "https://hillman.upmc.com/research/clinical-trials" },
      { label: "Backup Link", url: "https://tinyurl.com/y9th3q49" },
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
      { label: "Clinical Trials (UVM Health)", url: "https://www.uvmhealth.org/medcenter/Pages/Clinical-Trials-and-Research.aspx" },
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
      { label: "Sarcoma Trials", url: "https://www.vicc.org/clinical-trials/search" },
    ],
  },
  {
    name: "Virginia Commonwealth University – Massey Cancer Center",
    city: "Richmond",
    state: "VA",
    stateFull: "Virginia",
    links: [
      { label: "Massey Cancer Center", url: "https://www.massey.vcu.edu" },
      { label: "Trial Search", url: "https://www.massey.vcu.edu/research/clinical-trials/" },
    ],
  },
  {
    name: "Wake Forest Baptist Comprehensive Cancer Center",
    city: "Winston-Salem",
    state: "NC",
    stateFull: "North Carolina",
    links: [
      { label: "Cancer Research Studies", url: "https://beinvolved.atriumhealth.org/study-areas/cancer-research-studies" },
      { label: "WakeHealth Clinical Trials", url: "https://www.wakehealth.edu/locations/facilities/comprehensive-cancer-center/clinical-trials-health-minute" },
    ],
  },
  {
    name: "WVU Cancer Institute – Mary Babb Randolph Cancer Center",
    city: "Morgantown",
    state: "WV",
    stateFull: "West Virginia",
    links: [
      { label: "Clinical Research", url: "https://wvumedicine.org/our-care/institutes/cancer/" },
      { label: "WVU Cancer Institute", url: "https://cancer.wvumedicine.org/" },
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
      { label: "SARC Trials", url: "https://sarctrials.org" },
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
type KindFilter = "all" | "center" | "resource";
type ViewMode = "grid" | "list";

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SarcomaCentersClient() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [sort, setSort] = useState<SortKey>("name");
  const [kindFilter, setKindFilter] = useState<KindFilter>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [showBackupLinks, setShowBackupLinks] = useState(false);

  const totalResources = useMemo(() => CENTERS.filter((c) => c.isResource).length, []);
  const totalCenters = CENTERS.length - totalResources;

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    let list = CENTERS;

    if (kindFilter === "center") {
      list = list.filter((c) => !c.isResource);
    } else if (kindFilter === "resource") {
      list = list.filter((c) => c.isResource);
    }

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
  }, [query, stateFilter, sort, kindFilter]);

  const hasActiveFilters = query || stateFilter || kindFilter !== "all" || sort !== "name";

  const displayed = useMemo(
    () =>
      filtered.map((center) => ({
        ...center,
        links: showBackupLinks
          ? center.links
          : center.links.filter((link) => !link.label.toLowerCase().includes("backup")),
      })),
    [filtered, showBackupLinks],
  );

  const resetFilters = () => {
    setQuery("");
    setStateFilter("");
    setSort("name");
    setKindFilter("all");
  };

  return (
    <main className="pb-16">
      <section className="mx-auto mb-8 max-w-[1400px] overflow-hidden rounded-2xl border border-violet-200 shadow-xl">
        <div className="relative bg-[radial-gradient(circle_at_top_right,_rgba(196,181,253,0.45),_transparent_55%),radial-gradient(circle_at_10%_80%,_rgba(147,197,253,0.35),_transparent_55%),linear-gradient(135deg,_#eef2ff_0%,_#f8fafc_45%,_#fdf4ff_100%)] px-6 py-12 md:px-10 md:py-14">
          <div className="mb-5 inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm backdrop-blur">
            <i className="fas fa-hospital-alt mr-2" aria-hidden />
            Sarcoma Clinical Trial Directory
          </div>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Direct Access to Clinical Trial Site Links by Sarcoma Centers
          </h1>
          <p className="mt-4 max-w-3xl text-base text-slate-600 md:text-lg">
            A curated national directory to help patients and families quickly find active clinical
            trial search pages, backup links, and trusted sarcoma research resources.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">Searchable</span>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Filter by State</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">Backup Links Included</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
            <p className="m-0 text-xs font-semibold uppercase tracking-wider text-violet-700">Treatment Centers</p>
            <p className="m-0 mt-1 text-2xl font-extrabold text-violet-900">{totalCenters}</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="m-0 text-xs font-semibold uppercase tracking-wider text-amber-700">National Resources</p>
            <p className="m-0 mt-1 text-2xl font-extrabold text-amber-900">{totalResources}</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="m-0 text-xs font-semibold uppercase tracking-wider text-blue-700">Showing</p>
            <p className="m-0 mt-1 text-2xl font-extrabold text-blue-900">{displayed.length}</p>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="sm:col-span-2">
              <label htmlFor="sc-search" className="mb-1 block text-sm font-semibold text-slate-700">
                Search
              </label>
              <div className="relative">
                <i className="fas fa-search pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" aria-hidden />
                <input
                  id="sc-search"
                  type="text"
                  placeholder="Center name, city, or state..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 py-2.5 pl-9 pr-3 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="sc-state" className="mb-1 block text-sm font-semibold text-slate-700">
                State
              </label>
              <select
                id="sc-state"
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white py-2.5 px-3 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
              >
                <option value="">All States</option>
                {STATES.map((s) => (
                  <option key={s} value={s}>
                    {STATE_LABELS[s]} ({s})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="sc-kind" className="mb-1 block text-sm font-semibold text-slate-700">
                Type
              </label>
              <select
                id="sc-kind"
                value={kindFilter}
                onChange={(e) => setKindFilter(e.target.value as KindFilter)}
                className="w-full rounded-lg border border-slate-300 bg-white py-2.5 px-3 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
              >
                <option value="all">All Entries</option>
                <option value="center">Centers Only</option>
                <option value="resource">Resources Only</option>
              </select>
            </div>

            <div>
              <label htmlFor="sc-sort" className="mb-1 block text-sm font-semibold text-slate-700">
                Sort by
              </label>
              <select
                id="sc-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="w-full rounded-lg border border-slate-300 bg-white py-2.5 px-3 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
              >
                <option value="name">Center Name</option>
                <option value="state">State</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                  viewMode === "grid"
                    ? "bg-white text-violet-700 shadow"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <i className="fas fa-th mr-1" aria-hidden /> Grid
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                  viewMode === "list"
                    ? "bg-white text-violet-700 shadow"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <i className="fas fa-list mr-1" aria-hidden /> List
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowBackupLinks((prev) => !prev)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                showBackupLinks
                  ? "border-amber-300 bg-amber-50 text-amber-800"
                  : "border-slate-300 bg-white text-slate-700"
              }`}
            >
              <i className="fas fa-link mr-1" aria-hidden />
              {showBackupLinks ? "Backup Links: On" : "Backup Links: Off"}
            </button>

            <button
              type="button"
              onClick={resetFilters}
              disabled={!hasActiveFilters}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-violet-400 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <p className="mb-4 text-sm text-slate-500">
          Showing <strong className="text-slate-700">{displayed.length}</strong> of {CENTERS.length}
          {stateFilter ? ` in ${STATE_LABELS[stateFilter]}` : ""}
          {query ? ` matching "${query}"` : ""}
        </p>

        {displayed.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 py-16 text-center">
            <i className="fas fa-search mb-3 text-3xl text-slate-300" aria-hidden />
            <p className="text-slate-500">No centers found. Try a different search or filter.</p>
          </div>
        ) : (
          <div className={viewMode === "grid" ? "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" : "flex flex-col gap-4"}>
            {displayed.map((c, i) => (
              <article
                key={`${c.name}-${i}`}
                className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                  c.isResource ? "border-amber-200" : "border-slate-200"
                } ${viewMode === "list" ? "p-5" : "p-5"}`}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="m-0 text-base font-bold leading-snug text-slate-900">{c.name}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                      <i className="fas fa-map-marker-alt text-violet-600 text-xs" aria-hidden />
                      {c.city}
                      {c.state ? `, ${c.state}` : ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {c.state && (
                      <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[0.65rem] font-bold tracking-wide text-slate-600">
                        {c.state}
                      </span>
                    )}
                    {c.isResource && (
                      <span className="rounded-md border border-amber-300 bg-amber-50 px-2 py-0.5 text-[0.65rem] font-bold tracking-wide text-amber-700">
                        RESOURCE
                      </span>
                    )}
                  </div>
                </div>

                {c.links.length === 0 ? (
                  <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-500">
                    No primary links visible with current settings.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {c.links.map((link, j) => {
                      const isBackup = link.label.toLowerCase().includes("backup");
                      const isEmail = link.url.startsWith("mailto:");

                      return (
                        <a
                          key={j}
                          href={link.url}
                          target={isEmail ? undefined : "_blank"}
                          rel={isEmail ? undefined : "noopener noreferrer"}
                          className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-semibold no-underline transition ${
                            isBackup
                              ? "border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-300"
                              : "border-violet-200 bg-violet-50 text-violet-700 hover:border-violet-400"
                          }`}
                        >
                          <i
                            className={`fas ${
                              isEmail ? "fa-envelope" : isBackup ? "fa-life-ring" : "fa-external-link-alt"
                            } text-[0.65rem]`}
                            aria-hidden
                          />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/clinical-trials-research-information"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 no-underline shadow-sm transition-colors hover:border-violet-500 hover:bg-violet-50 hover:text-violet-700"
          >
            <i className="fas fa-arrow-left text-sm" aria-hidden />
            Back to Clinical Trials & Research Information
          </Link>
        </div>
      </div>
    </main>
  );
}
