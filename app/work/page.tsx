import { ProjectMedia } from "@/components/ProjectMedia";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Work", description: "Medical robotics, perception systems, and exploratory engineering work by Adithya Upadhyayula." };

export default function WorkPage() {
  return <main className="index-page work-index">
    <section className="index-hero" data-nav-theme="dark"><div className="frame"><div className="section-label micro"><span>INDEX / 01</span><span>BIOLOGY × MACHINES</span></div><div className="index-hero__body"><span className="micro">SELECTED SYSTEMS / 2026</span><h1>WORK<span className="red-period">.</span></h1><p>LIMBO / INSTINCT / JARVIS</p></div></div></section>
    <section className="index-content" data-nav-theme="light"><div className="frame"><div className="section-label micro"><span>OPEN CASE STUDIES</span><span>{String(projects.length).padStart(2,"0")} ENTRIES</span></div><div className="project-list">{projects.map((project) => <article className={`project-row project-row--${project.visual}`} key={project.slug}><div className="project-row__media"><ProjectMedia project={project} idPrefix={`index-${project.slug}`} /></div><div className="project-row__content"><div className="project-row__top micro"><span>[{project.number}] / {project.category}</span><span>STATUS / {project.status}</span></div><div><h2>{project.title}</h2><p>{project.description}</p></div><Link className="project-row__link" href={`/work/${project.slug}`}>Open case study <span aria-hidden="true">↗</span></Link></div></article>)}</div><div className="index-research"><span className="micro">ALSO / RESEARCH</span><Link href="/research">Cardiovascular Research <span aria-hidden="true">↗</span></Link></div></div></section>
  </main>;
}
