export type ProjectSection = {
  label: string;
  heading: string;
  body?: string;
  points?: string[];
  note?: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  status: string;
  year?: string;
  description: string;
  thesis: string;
  role?: string;
  technologies?: string[];
  visual: "limbo" | "instinct" | "jarvis";
  heroMedia?: { src: string; alt: string };
  sections: ProjectSection[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "limbo",
    number: "01",
    title: "Project LIMBO",
    category: "Medical Robotics / Neuroengineering",
    status: "In progress",
    year: "2026–present",
    description: "Real-time EMG processing and prosthetic control.",
    thesis: "From muscle signal to machine response.",
    role: "Software / DSP · GT Medical Robotics Club",
    technologies: [
      "Python",
      "EMG",
      "Digital signal processing",
      "Embedded acquisition",
      "Filtering",
      "Normalization",
      "Machine learning",
    ],
    visual: "limbo",
    sections: [
      {
        label: "01 / Context",
        heading: "The problem",
        body: "Project LIMBO works at the interface between human muscle activity and prosthetic control. My current work focuses on processing EMG signals in real time so they can inform a responsive physical system.",
      },
      {
        label: "02 / System",
        heading: "Signal to action",
        body: "The software and DSP work spans embedded acquisition, filtering, normalization, and machine learning. These are the areas being developed for the prosthetic control pipeline.",
        points: [
          "EMG acquisition",
          "Signal filtering",
          "Normalization",
          "Control processing",
          "Prosthetic response",
        ],
        note: "Pipeline areas shown here describe the current technical focus; performance results are not yet published.",
      },
      {
        label: "03 / Role",
        heading: "What I am working on",
        body: "Software and digital signal processing for GT Medical Robotics Club’s Project LIMBO.",
      },
    ],
  },
  {
    slug: "instinct",
    number: "02",
    title: "INSTINCT",
    category: "Computer Vision / Embedded Systems / Haptics",
    status: "Concept",
    description:
      "A wearable perception system for first responders, translating potential threats into spatial haptic feedback.",
    thesis: "An extra sense for the moments that matter.",
    technologies: [
      "Computer vision",
      "Tracking",
      "Trajectory estimation",
      "Embedded systems",
      "Spatial haptics",
    ],
    visual: "instinct",
    sections: [
      {
        label: "01 / Question",
        heading: "Can perception become touch?",
        body: "INSTINCT is conceived as a wearable system that monitors a first responder’s surroundings and communicates potential threats through spatial haptic feedback.",
      },
      {
        label: "02 / Proposed architecture",
        heading: "A path from scene to signal",
        points: [
          "Camera",
          "Person detection",
          "Tracking",
          "Trajectory estimation",
          "Threat model",
          "Embedded system",
          "Haptic feedback",
        ],
        note: "This is a proposed architecture, not a claim of a completed or validated system.",
      },
      {
        label: "03 / Next",
        heading: "Case study in development",
        body: "The detailed build process, tests, and evidence will be added as the project develops.",
      },
    ],
  },
  {
    slug: "jarvis",
    number: "03",
    title: "JARVIS",
    category: "Project / Documentation forthcoming",
    status: "Case study forthcoming",
    description: "Documentation forthcoming.",
    thesis: "Technical case study forthcoming.",
    visual: "jarvis",
    sections: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
