import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectArchitecture } from "@/components/projects/ProjectArchitecture";
import { ProjectMetadata } from "@/components/projects/ProjectMetadata";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { DisplayText } from "@/components/typography/DisplayText";
import { SectionLabel } from "@/components/typography/SectionLabel";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.description } : { title: "Project not found" };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <main className="route-page route-page--paper project-detail">
      <div className="editorial-container route-page__intro">
        <Link className="type-meta back-link" href="/work">← ALL WORK</Link>
        <SectionLabel>{project.category}</SectionLabel>
        <DisplayText scale="large">{project.title}<span className="accent-dot">.</span></DisplayText>
        <p>{project.description}</p>
      </div>
      <div className="editorial-container project-detail__visual">
        {project.heroMedia ? <Image src={project.heroMedia.src} alt={project.heroMedia.alt} width={1600} height={900} sizes="(max-width: 760px) 100vw, 80vw" /> : <ProjectVisual visual={project.visual} title={project.title} />}
      </div>
      <div className="editorial-container project-detail__body">
        <ProjectMetadata project={project} />
        {project.architecture && <ProjectArchitecture architecture={project.architecture} />}
        {project.contentSections?.map((section) => <section className="project-detail__section" key={section.id}><span className="type-meta">{section.id}</span><div><h2>{section.heading}</h2>{section.body && <p>{section.body}</p>}{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}{section.note && <small>{section.note}</small>}</div></section>)}
        {!project.contentSections?.length && <p className="project-detail__pending">More project documentation will be added as it becomes available.</p>}
      </div>
    </main>
  );
}
