import type { Project } from "@/data/projects";

export function ProjectArchitecture({ architecture }: { architecture: NonNullable<Project["architecture"]> }) {
  return (
    <section className="project-architecture" aria-labelledby="architecture-heading">
      <h2 id="architecture-heading">Conceptual architecture</h2>
      <ol>{architecture.steps.map((step, index) => <li key={`${index}-${step}`}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
      <p>{architecture.note}</p>
    </section>
  );
}
