export type PubType = "Clinical Trial" | "Research Article" | "Review" | "Case Report" | "Video" | "Press Release";

export interface Publication {
  title: string;
  authors?: string;
  journal?: string;
  date?: string;
  url: string;
  type: PubType;
  note?: string;
}

export interface YearSection {
  year: string;
  pubs: Publication[];
}

export const YEARS: YearSection[] = [
  {
    year: "2025",
    pubs: [
      { title: "Clinical Outcomes Following Stereotactic Radiosurgery for Brain Metastases from Sarcoma Primaries", journal: "Cancer, Jul 2025;131(13):e35931", url: "https://pubmed.ncbi.nlm.nih.gov/40543045/", type: "Research Article" },
      { title: "Leiomyosarcoma Therapeutic Approaches and Future Directions", journal: "Hematology/Oncology Clinics of North America", date: "Apr 7, 2025", url: "https://www.sciencedirect.com/science/article/abs/pii/S0889858825000450?via%3Dihub", type: "Review" },
      { title: "Emerging Role of Blood-based Biomarkers in Sarcomas", journal: "Hematology/Oncology Clinics of North America", date: "Apr 2, 2025", url: "https://www.sciencedirect.com/science/article/abs/pii/S0889858825000401?via%3Dihub", type: "Review" },
      { title: "Phase II Multi-Center Trial of Trabectedin in Combination with Olaparib in Patients with Advanced Unresectable or Metastatic Sarcoma", authors: "Siontis BL, Rice JD, Schuetze SM et al.", journal: "Clin Cancer Res. May 2025", url: "https://pubmed.ncbi.nlm.nih.gov/40358615/", type: "Clinical Trial" },
      { title: "Histology-Driven Tailoring of Surgical Approaches in Retroperitoneal Soft Tissue Sarcoma", authors: "Musa J, Willis F, Rompen IF et al.", journal: "BJS Open. 2025;9(3):zraf050", url: "https://pubmed.ncbi.nlm.nih.gov/40357995/", type: "Research Article" },
      { title: "Myxoid Leiomyosarcoma of the Uterus – A Case Report", journal: "Oncology Letters", date: "Apr 2, 2025", url: "https://pubmed.ncbi.nlm.nih.gov/40230424/", type: "Case Report" },
      { title: "Comprehensive Mutational Profiling Identifies New Driver Events in Cutaneous Leiomyosarcoma", journal: "British Journal of Dermatology", url: "https://academic.oup.com/bjd/article-abstract/192/2/335/7818451", type: "Research Article" },
      { title: "Exploration of the Mutational Landscape of Cutaneous Leiomyoma Confirms FH as a Driver Gene and Identifies Targeting Purine Metabolism as a Therapeutic Strategy", journal: "British Journal of Dermatology", url: "https://doi.org/10.1093/bjd/ljae432", type: "Research Article" },
    ],
  },
  {
    year: "2024",
    pubs: [
      { title: "Doxorubicin–Trabectedin in Leiomyosarcoma", authors: "Dr. Patricia Pautier", journal: "N Engl J Med 2024;391:2057-2058", date: "Nov 27, 2024", url: "https://www.nejm.org/doi/full/10.1056/NEJMc2412479", type: "Research Article" },
      { title: "Randomized Phase IIb/III Study: Lurbinectedin + Doxorubicin vs. Doxorubicin Alone as First-Line Treatment in Metastatic LMS", journal: "J Clin Oncology (ASCO 2024)", url: "https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.TPS11590", type: "Clinical Trial", note: "NCT06088290" },
      { title: "ARGSARC: ADI-PEG 20 or Placebo Plus Gemcitabine and Docetaxel in Previously Treated LMS — Phase 3 RCT", journal: "MSKCC", date: "Jul 25, 2024", url: "http://www.mskcc.org/cancer-care/clinical-trials/24-147", type: "Clinical Trial" },
      { title: "Leiomyosarcoma of the Abdomen and Retroperitoneum: A Systematic Review", journal: "Frontiers in Surgery", url: "https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2024.1375483/full", type: "Review" },
      { title: "Phase Ib: Doxorubicin, Dacarbazine, and Nivolumab as Upfront Treatment in Advanced LMS (GEIS)", authors: "PI: Dr. Javier Martín-Broto (NLMSF International Research Roundtable)", journal: "JCO doi:10.1200/JCO.24.00358", url: "https://pubmed.ncbi.nlm.nih.gov/39356980", type: "Clinical Trial" },
      { title: "Immunotherapy in Sarcoma: Current Data and Promising Strategies", authors: "Wood GE, Meyer C, Petitprez F, D'Angelo SP", journal: "ASCO Educational Book", date: "May 2024", url: "https://ascopubs.org/doi/10.1200/EDBK_432234", type: "Review" },
      { title: "Developing Novel Genomic Risk Stratification Models in Soft Tissue and Uterine Leiomyosarcoma", authors: "Josephine K. Dermawan", journal: "Clin Cancer Res (2024) 30(10): 2260–2271", date: "May 15, 2024", url: "https://doi.org/10.1158/1078-0432.CCR-24-0148", type: "Research Article" },
      { title: "Leiomyosarcoma – Continuing Education Activity", journal: "NIH National Library of Medicine", date: "Feb 28, 2024", url: "https://www.ncbi.nlm.nih.gov/books/NBK551667/", type: "Review" },
    ],
  },
  {
    year: "2023",
    pubs: [
      { title: "New Therapeutics for Soft Tissue Sarcomas: Overview of Current Immunotherapy and Future Directions", authors: "Gyuhee Seong, Sandra D'Angelo", journal: "Frontiers in Oncology", date: "May 14, 2023", url: "https://www.frontiersin.org/articles/10.3389/fonc.2023.1150765/full", type: "Review" },
      { title: "High Grade Sarcomas with Myogenic Differentiation Harboring Hotspot PDGFRB Mutations", journal: "Cancer Genetics", date: "May 2023", url: "https://www.sciencedirect.com/science/article/abs/pii/S089339522300008X", type: "Research Article", note: "LMS discussed" },
      { title: "The Biology and Treatment of Leiomyosarcoma", authors: "Kerrison WGJ, Thway K, Jones RL, Huang PH", date: "Apr 2023", url: "https://www.sciencedirect.com/science/article/pii/S1040842823000434", type: "Review" },
      { title: "Targeting the Molecular and Immunologic Features of Leiomyosarcoma", journal: "Cancers (MDPI)", date: "Mar 31, 2023", url: "https://www.mdpi.com/2072-6694/15/7/2099", type: "Review" },
      { title: "Sequential Targeting of Retinoblastoma and DNA Synthesis Pathways Is a Therapeutic Strategy for Sarcomas", journal: "Clin Cancer Res", date: "Mar 15, 2023", url: "https://pubmed.ncbi.nlm.nih.gov/36603130/", type: "Research Article", note: "NLMSF-funded — MD Anderson Cancer Center" },
      { title: "Not All Leiomyosarcomas Are the Same: How to Best Classify LMS", date: "Mar 8, 2023", url: "https://link.springer.com/article/10.1007/s11864-023-01067-2", type: "Review" },
      { title: "Therapeutic Advances in Leiomyosarcoma", authors: "Lacuna K, Bose S, Ingham M, Schwartz G", journal: "Frontiers in Oncology", date: "Mar 8, 2023", url: "https://www.frontiersin.org/articles/10.3389/fonc.2023.1149106/full", type: "Review" },
      { title: "Clinical Characteristics of Sarcoma Cases With Long-Term Disease Control With Trabectedin", date: "Mar 1, 2023", url: "https://pubmed.ncbi.nlm.nih.gov/36857355/", type: "Research Article" },
      { title: "Emerging Trends in Immunotherapy for Adult Sarcomas", authors: "Husain M, Chen L, Liebner D et al.", journal: "The Oncologist", date: "Mar 1, 2023", url: "https://doi.org/10.1093/oncolo/oyad052", type: "Review" },
      { title: "Use of Trabectedin in the Treatment of LMS — Video Presentation (Dr. Jonathan Trent)", date: "Jan 29, 2023", url: "https://youtu.be/efuZXkaRncQ", type: "Video", note: "Hosted by NLMSF — Patient-Family Advocacy Network" },
    ],
  },
  {
    year: "2022",
    pubs: [
      { title: "Molecular Subtypes of Leiomyosarcoma: Moving Toward a Consensus", date: "Nov 2, 2022", url: "https://onlinelibrary.wiley.com/doi/full/10.1002/ctd2.149", type: "Research Article" },
      { title: "Landmark Series: Review of Landmark Studies in Treatment of Primary Localized Retroperitoneal Sarcoma", date: "Nov 2, 2022", url: "https://link.springer.com/article/10.1245/s10434-022-12517-w", type: "Review" },
      { title: "Phase II Clinical Trial of Eribulin–Gemcitabine in Advanced Liposarcoma or Leiomyosarcoma", journal: "Clin Cancer Res", date: "Aug 2, 2022", url: "https://aacrjournals.org/clincancerres/article-abstract/28/15/3225/707113/", type: "Clinical Trial" },
      { title: "Phase Ib/II Study of Lenvatinib + Eribulin in Advanced LPS and LMS (LEADER): Efficacy Updates", journal: "J Clin Oncology", date: "Aug 2022", url: "https://ascopubs.org/doi/abs/10.1200/JCO.2022.40.16_suppl.11506", type: "Clinical Trial" },
      { title: "Retroperitoneal Leiomyosarcoma Nomogram Model", journal: "Scientific Reports (Nature)", date: "Jul 3, 2022", url: "https://www.nature.com/articles/s41598-022-16055-z", type: "Research Article" },
      { title: "Sounding the Alarm on Leiomyosarcoma Recurrence: Role of Circulating Tumor DNA", authors: "Kasper B, Wilky BA — NLMSF-SPAEN IRR", journal: "Clin Cancer Res", date: "Jun 13, 2022", url: "https://aacrjournals.org/clincancerres/article/doi/10.1158/1078-0432.CCR-22-0738/694390/", type: "Research Article" },
      { title: "Preclinical Modeling of Leiomyosarcoma Identifies Susceptibility to Transcriptional CDK Inhibitors (Dr. Matthew Hemming)", journal: "Clin Cancer Res", date: "Jun 1, 2022", url: "https://aacrjournals.org/clincancerres/article-abstract/28/11/2397/698931/", type: "Research Article", note: "NLMSF-funded research" },
      { title: "Preoperative Differentiation of Uterine Leiomyomas and Leiomyosarcomas: Current Possibilities and Future Directions", date: "Apr 13, 2022", url: "https://pubmed.ncbi.nlm.nih.gov/35454875/", type: "Review" },
      { title: "What Clinical Trials Are Needed for Treatment of Leiomyosarcoma?", date: "Mar 11, 2022", url: "https://leiomyosarcoma.info/wp-content/uploads/2022/03/Kasper2022_Article.pdf", type: "Review" },
      { title: "Proteomic and Metabolomic Profiling in Soft Tissue Sarcomas", journal: "Current Treatment Options in Oncology", date: "Feb 16, 2022", url: "https://link.springer.com/article/10.1007/s11864-022-00947-3", type: "Research Article" },
    ],
  },
  {
    year: "2021",
    pubs: [
      { title: "Large Scale Multiomic Analysis Suggests Mechanisms of Resistance to Immunotherapy in LMS", journal: "ASCO Annual Meeting 2021", url: "https://ascopubs.org/doi/abs/10.1200/JCO.2021.39.15_suppl.11512", type: "Research Article" },
      { title: "Multiomic Analysis to Reveal Distinct Molecular Profiles of Uterine and Nonuterine Leiomyosarcoma", journal: "ASCO Annual Meeting 2021", url: "https://ascopubs.org/doi/abs/10.1200/JCO.2021.39.15_suppl.11555", type: "Research Article" },
      { title: "Prognostic Relevance of the Hexosamine Biosynthesis Pathway in Leiomyosarcoma", url: "https://pubmed.ncbi.nlm.nih.gov/33941787/", type: "Research Article" },
      { title: "Surgical Resection of LMS of the Inferior Vena Cava: A Case Series and Literature Review", url: "https://pubmed.ncbi.nlm.nih.gov/34710646/", date: "Dec 2021", type: "Research Article" },
      { title: "Relationships Between Highly Recurrent Tumor Suppressor Alterations in 489 Leiomyosarcomas", url: "https://pubmed.ncbi.nlm.nih.gov/33788262/", date: "Aug 1, 2021", type: "Research Article" },
    ],
  },
  {
    year: "2020",
    pubs: [
      { title: "LMS-02 Study: Doxorubicin in Combination with Trabectedin as First-Line Treatment for Advanced LMS — Final Results (ASCO 2020)", authors: "Patricia Pautier, MD — Institut Gustave Roussy", journal: "ASCO Annual Meeting 2020", date: "Jun 1, 2020", url: "https://www.asco.org", type: "Clinical Trial", note: "Median PFS: 10.1 months; Median OS: 34.4 months" },
      { title: "Preliminary Results Presented at ASCO: Promising Clinical Efficacy with Unesbulin in LMS", date: "Jun 3, 2020", url: "https://ir.ptcbio.com/news-releases/news-release-details/preliminary-results-presented-asco-demonstrated-promising", type: "Press Release" },
    ],
  },
  {
    year: "2019",
    pubs: [
      { title: "Genomic Evolutionary Patterns of Leiomyosarcoma and Liposarcoma", authors: "Amin-Mansour A, George S, Sioletic S et al.", journal: "Clin Cancer Res", date: "Jun 4, 2019", url: "https://pubmed.ncbi.nlm.nih.gov/31164371/", type: "Research Article" },
      { title: "BRCA 1/2 Functional Loss Defines a Targetable Subset in Leiomyosarcoma", url: "https://pubmed.ncbi.nlm.nih.gov/30541756/", type: "Research Article" },
      { title: "Overall Survival from Phase 3 RCT: Trabectedin or Dacarbazine in Advanced LPS or LMS", journal: "Cancer", url: "https://onlinelibrary.wiley.com/doi/full/10.1002/cncr.32117", type: "Clinical Trial" },
      { title: "CT Imaging Improves Histopathological Grading of Retroperitoneal Leiomyosarcomas", url: "https://www.ejso.com/article/S0748-7983(19)30888-1/fulltext", type: "Research Article" },
      { title: "Effect of Adjuvant Therapy on the Risk of Recurrence in Early-Stage Leiomyosarcoma: A Meta-Analysis", url: "https://www.ncbi.nlm.nih.gov/pubmed/31307664", type: "Review" },
      { title: "Identifying and Targeting Cancer Stem Cells in Leiomyosarcoma: Prognostic Impact and Role to Overcome Secondary Resistance", journal: "J Hematology & Oncology", url: "https://jhoonline.biomedcentral.com/articles/10.1186/s13045-018-0694-1", type: "Research Article" },
      { title: "Discovery and Characterization of Novel, Recurrent, Targetable ALK Fusions in Leiomyosarcoma (Dr. Lara Davis, OHSU)", url: "http://mcr.aacrjournals.org/content/early/2018/12/05/1541-7786.MCR-18-1075", type: "Research Article" },
    ],
  },
  {
    year: "2018",
    pubs: [
      { title: "Soft Tissue and Uterine Leiomyosarcoma", authors: "George S, Serrano C, Hensley ML, Ray-Coquard I", journal: "J Clin Oncology", date: "Jan 10, 2018", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5759317/", type: "Review" },
      { title: "Pembrolizumab in Advanced Soft-Tissue Sarcoma and Bone Sarcoma (SARC028): Multicentre Phase 2 Trial", journal: "The Lancet Oncology", url: "http://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(17)30624-1/fulltext", type: "Clinical Trial" },
      { title: "Gemcitabine and Docetaxel vs. Doxorubicin as First-Line Treatment in Advanced Unresectable STS", journal: "The Lancet Oncology", url: "http://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(17)30622-8/abstract", type: "Clinical Trial" },
      { title: "Nivolumab With Ipilimumab for Pretreated Metastatic Sarcoma", url: "https://www.cancertherapyadvisor.com/sarcoma/sarcoma-nivolumab-ipilimumab-promising-treatment-risk/article/738448/", type: "Clinical Trial" },
      { title: "Use of PD-1 Targeting, Macrophage Infiltration, and IDO Pathway Activation in Sarcomas: Phase 2 Trial", url: "https://www.ncbi.nlm.nih.gov/pubmed/28662235", type: "Clinical Trial" },
      { title: "Expression and Role of TYRO3 and AXL as Potential Therapeutic Targets in Leiomyosarcoma", journal: "British Journal of Cancer", url: "https://www.nature.com/articles/bjc2017354", type: "Research Article" },
      { title: "A Vimentin Binding Small Molecule Leads to Mitotic Disruption in Mesenchymal Cancers", journal: "PNAS", url: "http://www.pnas.org/content/114/46/E9903.abstract", type: "Research Article" },
      { title: "Machine Learning Analysis of Gene Expression Data Reveals Novel Diagnostic and Prognostic Biomarkers for Soft Tissue Sarcomas", url: "https://www.ncbi.nlm.nih.gov/pubmed/30785874", type: "Research Article" },
      { title: "Analysis of the CDK4/6 Cell Cycle Pathway in Leiomyosarcomas as a Potential Target for Inhibition by Palbociclib", journal: "Sarcoma", url: "https://www.hindawi.com/journals/sarcoma/2019/3914232/", type: "Research Article" },
      { title: "External Beam Radiation Therapy for Resectable Soft Tissue Sarcoma: A Systematic Review and Meta-Analysis", url: "https://www.ncbi.nlm.nih.gov/pubmed/28895107", type: "Review" },
      { title: "Mocetinostat Combined with Gemcitabine for the Treatment of Leiomyosarcoma: Preclinical Correlates", url: "https://leiomyosarcoma.info/wp-content/uploads/2017/12/G.Lopez-et-al.-2017.pdf", type: "Research Article" },
    ],
  },
];

export const TYPE_STYLES: Record<PubType, string> = {
  "Clinical Trial":   "bg-blue-100 text-blue-800 border border-blue-200",
  "Research Article": "bg-indigo-100 text-indigo-800 border border-indigo-200",
  "Review":           "bg-purple-100 text-purple-800 border border-purple-200",
  "Case Report":      "bg-amber-100 text-amber-800 border border-amber-200",
  "Video":            "bg-green-100 text-green-800 border border-green-200",
  "Press Release":    "bg-orange-100 text-orange-800 border border-orange-200",
};
