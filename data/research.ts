export type ResearchRecord = {
  slug: string;
  title: string;
  organization: string;
  institution: string;
  role: string;
  year: string;
  description: string;
  technicalThemes: string[];
};

export const cardiovascularResearch: ResearchRecord = {
  slug: "cardiovascular-research",
  title: "Cardiovascular Research",
  organization: "Cardiovascular Fluid Mechanics Laboratory",
  institution: "Georgia Institute of Technology",
  role: "Undergraduate Researcher",
  year: "2025–present",
  description:
    "Radiomic phenotyping of coronary atherosclerotic plaques, benchmarking unsupervised clustering pipelines against FFR and clinical outcomes.",
  technicalThemes: [
    "Radiomics",
    "Medical imaging",
    "Python",
    "PyRadiomics",
    "Unsupervised learning",
    "Cardiovascular engineering",
  ],
};
