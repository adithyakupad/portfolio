import type { Project } from "@/data/projects";

export function ProjectMetadata({ project }: { project: Project }) {
  const items = [
    ["Category", project.category],
    ["Status", project.status],
    ["Role", project.role],
    ["Organization", project.organization],
    ["Year", project.year],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return <dl className="project-metadata">{items.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}
