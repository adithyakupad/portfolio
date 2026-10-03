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
    thesis: "From muscle signal to machine response.",
    contentSections: [
      { id: "Context", heading: "The problem", body: "Project LIMBO works at the interface between human muscle activity and prosthetic control. My current work focuses on processing EMG signals in real time so they can inform a responsive physical system." },
      { id: "System", heading: "Signal to action", body: "The software and DSP work spans embedded acquisition, filtering, normalization, and machine learning. These are the areas being developed for the prosthetic control pipeline.", points: ["EMG acquisition", "Signal filtering", "Normalization", "Control processing", "Prosthetic response"], note: "Pipeline areas shown here describe the current technical focus; performance results are not yet published." },
      { id: "Role", heading: "What I am working on", body: "Software and digital signal processing for GT Medical Robotics Club’s Project LIMBO." },
    ],
  },
  {
    slug: "instinct",
    title: "INSTINCT",
    category: "Computer Vision / Embedded Systems / Haptics",
    status: "Concept",
    description:
      "A wearable perception system designed to monitor a first responder’s surroundings and communicate potential threats through spatial haptic feedback.",
    visual: "tracking",
    thesis: "An extra sense for the moments that matter.",
    contentSections: [
      { id: "Question", heading: "Can perception become touch?", body: "INSTINCT is conceived as a wearable system that monitors a first responder’s surroundings and communicates potential threats through spatial haptic feedback." },
      { id: "Proposed architecture", heading: "A path from scene to signal", points: ["Camera", "Person detection", "Tracking", "Trajectory estimation", "Threat model", "Embedded system", "Haptic feedback"], note: "This is a proposed architecture, not a claim of a completed or validated system." },
      { id: "Next", heading: "Case study in development", body: "The detailed build process, tests, and evidence will be added as the project develops." },
    ],
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
