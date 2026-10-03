import { ProjectMedia } from "@/components/ProjectMedia";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DetailSection } from "@/components/DetailSection";
import { getProject, projects } from "@/lib/projects";
import { InteractiveMedia } from "@/components/InteractiveMedia";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];

  return (
    <main className="detail-page">
      <section className="detail-hero" data-nav-theme="dark">
        <div className="frame">
          <div className="detail-hero__top micro">
            <Link href="/projects">← ALL PROJECTS</Link>
            <span>{project.number} / {project.category}</span>
          </div>
          <div className="detail-hero__headline">
            <h1>{project.title}<span className="red-period">.</span></h1>
            <p>{project.thesis}</p>
          </div>
          <div className="detail-hero__bottom micro">
            <span>{project.status}</span>
            {project.year && <span>{project.year}</span>}
          </div>
        </div>
      </section>

      <section className="detail-media frame" data-nav-theme="light" aria-label={`Conceptual visual for ${project.title}`}>
        <InteractiveMedia label={`${project.title} visual`}><ProjectMedia project={project} idPrefix={`detail-${project.slug}`} /></InteractiveMedia>
        <p className="micro">ILLUSTRATIVE SYSTEM VISUAL · PROJECT MEDIA CAN BE ADDED HERE</p>
      </section>

      <div className="frame detail-overview" data-reveal="section">
        <div className="micro">OVERVIEW / {project.number}</div>
        <div>
          <p className="detail-overview__lead">{project.description}</p>
          {project.role && <p className="detail-overview__role">{project.role}</p>}
          {project.technologies && (
            <p className="detail-overview__tech micro">WORKING AREAS / {project.technologies.join(" · ")}</p>
          )}
        </div>
      </div>

      {project.sections.length > 0 ? (
        <div className="frame detail-sections">
          {project.sections.map((section) => <DetailSection key={section.label} {...section} />)}
        </div>
      ) : (
        <div className="frame detail-pending" data-reveal="section">
          <span className="micro">THE CASE STUDY</span>
          <p>Technical details will be added when they are ready to share.</p>
        </div>
      )}

      {project.links && project.links.length > 0 && (
        <div className="frame detail-links">
          <span className="micro">LINKS</span>
          {project.links.map((link) => <a href={link.href} key={link.href}>{link.label} ↗</a>)}
        </div>
      )}

      <div className="frame detail-next" data-reveal="section">
        <span className="micro">NEXT PROJECT</span>
        <Link href={`/case-studies/${nextProject.slug}`}>{nextProject.title}<span aria-hidden="true">↗</span></Link>
      </div>
    </main>
  );
}
