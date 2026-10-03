import Image from "next/image";
import { ProjectVisual } from "@/components/Visuals";
import type { Project } from "@/lib/projects";

export function ProjectMedia({ project, idPrefix }: { project: Project; idPrefix: string }) {
  if (project.heroMedia) return <div className="project-visual project-photo"><Image src={project.heroMedia.src} alt={project.heroMedia.alt} fill sizes="(max-width: 700px) 100vw, 60vw" /></div>;
  return <ProjectVisual kind={project.visual} idPrefix={idPrefix} />;
}
