import type { Metadata } from "next";
import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { DisplayText } from "@/components/typography/DisplayText";
import { SectionLabel } from "@/components/typography/SectionLabel";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main className="route-page route-page--dark">
      <div className="editorial-container route-page__intro"><SectionLabel>INDEX / WORK</SectionLabel><DisplayText scale="large">Work<span className="accent-dot">.</span></DisplayText><p>Projects and research in development.</p></div>
      <div className="editorial-container project-list">{projects.map((project, index) => <ProjectFeature key={project.slug} project={project} index={index} />)}</div>
    </main>
  );
}
