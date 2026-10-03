import { cardiovascularResearch } from "@/data/research";

export type ProjectSection = {
  id: string;
  heading: string;
  body?: string;
  points?: string[];
  note?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year?: string;
  status?: string;
  role?: string;
  organization?: string;
  thesis?: string;
  description: string;
  technologies?: string[];
  heroMedia?: { src: string; alt: string };
  visual: "signal" | "tracking" | "radiomics" | "typographic";
  architecture?: { steps: string[]; note: string };
  contentSections?: ProjectSection[];
  links?: { github?: string; demo?: string; video?: string };
};

export const projects: Project[] = [
  {
    slug: "limbo",
    title: "Project LIMBO",
    category: "Medical Robotics / Neuroengineering",
    year: "2026–present",
    status: "In progress",
    role: "Software / DSP",
    organization: "GT Medical Robotics Club",
    description: "Real-time EMG processing and prosthetic control.",
    technologies: ["Python", "Machine learning", "Digital signal processing", "Embedded acquisition", "Filtering", "Normalization", "EMG", "Prosthetic control"],
    visual: "signal",
  },
  {
    slug: "instinct",
    title: "INSTINCT",
    category: "Computer Vision / Embedded Systems / Haptics",
    status: "Concept",
    description:
      "A wearable perception system designed to monitor a first responder’s surroundings and communicate potential threats through spatial haptic feedback.",
    visual: "tracking",
    architecture: {
      steps: ["Vision", "Detection", "Tracking", "Trajectory", "Threat model", "Haptics"],
      note: "Conceptual pipeline; no performance or implementation results are claimed.",
    },
  },
  {
    slug: "jarvis",
    title: "JARVIS",
    category: "Project",
    status: "Documentation pending",
    description: "Technical project documentation coming soon.",
    visual: "typographic",
  },
  {
    slug: cardiovascularResearch.slug,
    title: cardiovascularResearch.title,
    category: "Cardiovascular Engineering / Computational Analysis",
    year: cardiovascularResearch.year,
    status: "In progress",
    role: cardiovascularResearch.role,
    organization: cardiovascularResearch.organization,
    description: cardiovascularResearch.description,
    technologies: cardiovascularResearch.technicalThemes,
    visual: "radiomics",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
