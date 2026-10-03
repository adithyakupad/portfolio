import { projects as records, type Project as ProjectRecord } from "@/data/projects";

export type Project = Omit<ProjectRecord, "visual" | "links"> & {
  number: string;
  status: string;
  thesis: string;
  visual: "limbo" | "instinct" | "jarvis";
  sections: { label: string; heading: string; body?: string; points?: string[]; note?: string }[];
  links?: { label: string; href: string }[];
};

const visuals = { signal: "limbo", tracking: "instinct", radiomics: "jarvis", typographic: "jarvis" } as const;

export const projects: Project[] = records.map((record, index) => ({
  ...record,
  number: String(index + 1).padStart(2, "0"),
  status: record.status ?? "In progress",
  thesis: record.thesis ?? record.description,
  visual: visuals[record.visual],
  sections: (record.contentSections ?? []).map((section, sectionIndex) => ({
    label: `${String(sectionIndex + 1).padStart(2, "0")} / ${section.id}`,
    heading: section.heading,
    body: section.body,
    points: section.points,
    note: section.note,
  })),
  links: Object.entries(record.links ?? {}).filter((entry): entry is [string, string] => typeof entry[1] === "string").map(([label, href]) => ({ label, href })),
}));

export const featuredProjects = projects.filter(({ slug }) => slug !== "cardiovascular-research");
export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
