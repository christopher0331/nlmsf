/**
 * "LMS Research Updates - Oct 2026 - current and future directions",
 * sent by Annie Achee (Oct 23, 2026). Text is verbatim from her document.
 */
export type ResearchUpdateBlock =
  | { type: "h2" | "h3" | "h4" | "p" | "li" | "note"; text: string }
  | { type: "link"; text: string; href: string };

export const RESEARCH_UPDATES_OCT_2026_PATH = "/lms-research-updates-oct-2026/";
export const RESEARCH_UPDATES_OCT_2026_LABEL =
  "LMS Research Updates - Oct 2026 - current and future directions";
export const RESEARCH_UPDATES_OCT_2026_HEADING = "2025–2026 Leiomyosarcoma (LMS): Research and Clinical Trial Updates";

export const RESEARCH_UPDATES_OCT_2026_BLOCKS: ResearchUpdateBlock[] = [
  {
    "type": "h2",
    "text": "Immunotherapy for Leiomyosarcoma: Current Status and Emerging Directions"
  },
  {
    "type": "p",
    "text": "Immunotherapy is an active area of research in leiomyosarcoma (LMS), an aggressive form of soft-tissue sarcoma. Researchers are investigating ways to stimulate the immune system to recognize and attack cancer cells, including combinations of immunotherapy with chemotherapy and other targeted treatments."
  },
  {
    "type": "p",
    "text": "Although immunotherapy has demonstrated meaningful benefits in some cancers, its effectiveness in LMS remains limited and variable. Current research is focused on identifying more effective treatment combinations, understanding the tumor immune microenvironment, and discovering biomarkers that may help predict which patients are most likely to benefit."
  },
  {
    "type": "h2",
    "text": "Featured Research Publication"
  },
  {
    "type": "h3",
    "text": "Immunotherapy for Leiomyosarcoma: Current Status and Perspectives"
  },
  {
    "type": "p",
    "text": "This 2026 review examines the current state of immunotherapy research in LMS, including immune checkpoint inhibitors, combination therapies, cellular immunotherapy, the tumor immune microenvironment, and emerging personalized treatment approaches."
  },
  {
    "type": "p",
    "text": "Read the full research article:"
  },
  {
    "type": "link",
    "text": "Immunotherapy for Leiomyosarcoma: Current Status and Perspectives — Journal of Immunology Research (2026)",
    "href": "https://onlinelibrary.wiley.com/doi/10.1155/jimr/6614578"
  },
  {
    "type": "h2",
    "text": "1. Key Developments in LMS Immunotherapy Research"
  },
  {
    "type": "h3",
    "text": "Combination Therapies"
  },
  {
    "type": "p",
    "text": "Researchers are evaluating whether combining immune checkpoint inhibitors (ICIs) with chemotherapy or other anticancer agents can improve treatment outcomes. Combinations involving doxorubicin, pembrolizumab, nivolumab, and other investigational agents have been studied in soft-tissue sarcomas, including LMS."
  },
  {
    "type": "p",
    "text": "Early findings from selected studies are encouraging, but results vary by tumor type and treatment regimen. Larger clinical trials are needed to establish the safety, effectiveness, and long-term benefits of these approaches specifically for LMS."
  },
  {
    "type": "h3",
    "text": "Immune Checkpoint Inhibitors"
  },
  {
    "type": "p",
    "text": "Immune checkpoint inhibitors work by helping the immune system overcome signals that suppress its ability to attack cancer cells. Researchers are investigating these agents alone and in combination with other therapies."
  },
  {
    "type": "p",
    "text": "To date, checkpoint inhibitor monotherapy has shown limited activity in most LMS studies. Combination approaches are an important area of ongoing investigation."
  },
  {
    "type": "h3",
    "text": "Biomarkers and Liquid Biopsy Research"
  },
  {
    "type": "p",
    "text": "Researchers are studying tumor characteristics, immune-related biomarkers, and blood-based testing approaches to better understand treatment response and disease progression. Liquid biopsy technologies may eventually help identify molecular changes and provide information about a patient's cancer over time."
  },
  {
    "type": "p",
    "text": "Further validation is needed before these approaches can reliably guide treatment decisions in routine LMS care."
  },
  {
    "type": "h3",
    "text": "Understanding the Tumor Immune Microenvironment"
  },
  {
    "type": "p",
    "text": "LMS tumors can have biological characteristics that limit immune recognition and response. Researchers are investigating how immune cells, tumor cells, and the surrounding tumor environment interact, with the goal of developing more effective and individualized immunotherapy strategies."
  },
  {
    "type": "h2",
    "text": "2. Clinical Trial Directions and Emerging Treatment Strategies"
  },
  {
    "type": "p",
    "text": "Clinical trials are evaluating a range of investigational approaches for patients with locally advanced, unresectable, recurrent, or metastatic LMS."
  },
  {
    "type": "p",
    "text": "Areas of investigation include:"
  },
  {
    "type": "li",
    "text": "Immunotherapy plus chemotherapy: Evaluating whether combining immune checkpoint inhibitors with chemotherapy can improve tumor response and disease control."
  },
  {
    "type": "li",
    "text": "Immunotherapy plus targeted agents: Studying combinations designed to affect tumor growth, blood vessel formation, and immune suppression."
  },
  {
    "type": "li",
    "text": "Cellular immunotherapy: Exploring ways to use or engineer immune cells to recognize and attack cancer cells."
  },
  {
    "type": "li",
    "text": "Biomarker-guided treatment: Identifying biological features that may help predict which patients are most likely to respond to specific therapies."
  },
  {
    "type": "li",
    "text": "Novel therapeutic combinations: Investigating new drug combinations and treatment strategies for patients whose disease has progressed despite previous treatment."
  },
  {
    "type": "p",
    "text": "Clinical trial eligibility, treatment availability, and study status vary. Patients and caregivers should consult their sarcoma specialists when considering investigational therapies."
  },
  {
    "type": "h2",
    "text": "3. Research Spotlight: Dr. Nicholas Llosa and CD4+ T Cells"
  },
  {
    "type": "p",
    "text": "Research involving Dr. Nicholas Llosa has focused on the role of CD4+ T cells in the immune response to leiomyosarcoma and the potential implications for immunotherapy."
  },
  {
    "type": "p",
    "text": "CD4+ T cells, often called helper T cells, play important roles in coordinating immune responses. Depending on their subtype and biological environment, they may help activate other immune cells, support antitumor activity, or contribute to immune regulation."
  },
  {
    "type": "p",
    "text": "Understanding how CD4+ T cells interact with LMS tumors may help researchers identify new ways to strengthen the immune system's response to cancer."
  },
  {
    "type": "h3",
    "text": "Why CD4+ T-Cell Research Matters"
  },
  {
    "type": "h4",
    "text": "Understanding Immune–Tumor Interactions"
  },
  {
    "type": "p",
    "text": "Researchers are studying how CD4+ T cells recognize tumor-associated signals and interact with other immune cells within the tumor microenvironment."
  },
  {
    "type": "h4",
    "text": "Developing Immunotherapy Strategies"
  },
  {
    "type": "p",
    "text": "A better understanding of CD4+ T-cell function may help inform approaches designed to strengthen antitumor immunity and improve the effectiveness of existing treatments."
  },
  {
    "type": "h4",
    "text": "Exploring Combination Approaches"
  },
  {
    "type": "p",
    "text": "Researchers are investigating how immune-cell activity may complement other treatment strategies. The potential benefits of combining approaches must be established through appropriate preclinical and clinical studies."
  },
  {
    "type": "h4",
    "text": "Translating Research into Patient Benefit"
  },
  {
    "type": "p",
    "text": "Continued investigation is needed to determine how discoveries involving CD4+ T cells can be translated into safe and effective treatments for people living with LMS."
  },
  {
    "type": "note",
    "text": "Research note: Specific clinical trial status, study results, and the availability of CD4+ T-cell-based therapies should be confirmed through the relevant research publications and trial registries."
  },
  {
    "type": "h2",
    "text": "4. Challenges and Future Research Priorities"
  },
  {
    "type": "p",
    "text": "Despite advances in sarcoma research, significant challenges remain in treating advanced and metastatic LMS. Many patients experience disease progression after available treatments, highlighting the need for more effective and durable therapeutic options."
  },
  {
    "type": "p",
    "text": "Important research priorities include:"
  },
  {
    "type": "li",
    "text": "Identifying reliable biomarkers to predict treatment response."
  },
  {
    "type": "li",
    "text": "Understanding why many LMS tumors respond poorly to checkpoint inhibitor monotherapy."
  },
  {
    "type": "li",
    "text": "Developing more effective combinations of immunotherapy, chemotherapy, and targeted agents."
  },
  {
    "type": "li",
    "text": "Advancing cellular immunotherapy and other individualized treatment approaches."
  },
  {
    "type": "li",
    "text": "Conducting larger, well-designed clinical trials to confirm promising early findings."
  },
  {
    "type": "li",
    "text": "Improving access to clinical trial information and opportunities for patients with LMS."
  },
  {
    "type": "h2",
    "text": "The National Leiomyosarcoma Foundation: Advancing Research and Hope"
  },
  {
    "type": "p",
    "text": "The National Leiomyosarcoma Foundation remains committed to advancing scientific research, increasing awareness of emerging treatment approaches, and helping patients and caregivers access credible information about leiomyosarcoma."
  },
  {
    "type": "p",
    "text": "Continued collaboration among researchers, clinicians, patients, caregivers, and advocates is essential to accelerating discoveries and translating promising scientific findings into better treatment options."
  },
  {
    "type": "note",
    "text": "Important patient information: Research findings and investigational therapies do not necessarily represent established standards of care. This information is provided for educational purposes and is not a substitute for individualized medical advice from a qualified sarcoma specialist."
  }
];
