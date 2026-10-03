import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/projects/ProjectVisual";

export function ProjectFeature({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-feature">
      <div className="project-feature__copy">
        <span className="type-meta">[{String(index + 1).padStart(2, "0")}] / {project.category}</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <Link className="text-action" href={`/work/${project.slug}`}>Open project <span aria-hidden="true">↗</span></Link>
      </div>
      <ProjectVisual visual={project.visual} title={project.title} />
    </article>
  );
}
