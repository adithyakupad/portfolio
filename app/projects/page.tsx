import type { Metadata } from "next";
import Link from "next/link";
import { ProjectVisual } from "@/components/Visuals";

export const metadata: Metadata = { title: "Projects", description: "Experiments, active technical directions, and unfinished investigations." };

const entries = [
  { number: "01", type: "SIGNAL", title: "EMG processing", state: "ACTIVE / PROJECT LIMBO", body: "Real-time acquisition, filtering, normalization, and control processing for prosthetic response.", href: "/case-studies/limbo", visual: "limbo" },
  { number: "02", type: "PERCEPTION", title: "Spatial haptics", state: "CONCEPT / INSTINCT", body: "A proposed path from wearable vision and tracking to haptic feedback for first responders.", href: "/case-studies/instinct", visual: "instinct" },
  { number: "03", type: "LIVING SYSTEMS", title: "Biological computing", state: "OPEN DIRECTION", body: "Exploring engineered biological systems as substrates for sensing and computation.", visual: null },
  { number: "04", type: "DOCUMENTATION", title: "JARVIS", state: "FORTHCOMING", body: "A project entry awaiting a documented technical case study.", href: "/case-studies/jarvis", visual: "jarvis" },
] as const;

export default function ProjectsPage() {
  return (
    <main className="index-page projects-page lab-page">
      <section className="index-hero lab-page__hero" data-nav-theme="light">
        <div className="frame">
          <div className="section-label micro"><span>INDEX / 02</span><span>BUILDS / TESTS / OPEN QUESTIONS</span></div>
          <div className="index-hero__body"><span className="micro">EXPERIMENTS / OPEN BUILDS</span><h1>PROJECTS<span className="red-period">.</span></h1><p>Build / test / break / repeat.</p></div>
        </div>
      </section>
      <section className="lab-page__entries" data-nav-theme="light">
        <div className="frame">
          <div className="section-label micro"><span>FIELD NOTES</span><span>SELECT AN ENTRY TO EXPAND</span></div>
          {entries.map((entry) => (
            <details className="lab-entry" data-reveal="row" key={entry.number}>
              <summary className="lab-entry__summary">
                <span className="lab-entry__index micro">[{entry.number}] / {entry.type}</span>
                <span className="lab-entry__title"><span className="lab-entry__state micro">{entry.state}</span><h2>{entry.title}</h2></span>
                <span className="lab-entry__open micro" aria-hidden="true">EXPLORE <span>+</span></span>
              </summary>
              <div className="lab-entry__reveal">
                <div className={`lab-entry__media ${entry.visual ? "" : "lab-entry__media--direction"}`}>
                  {entry.visual ? <ProjectVisual kind={entry.visual} idPrefix={`index-${entry.number}`} /> : <><span className="micro">DIRECTION / 03</span><strong>LIVING<br />SYSTEMS<span>.</span></strong><span className="micro">EXPLORATION, NOT A COMPLETED PROJECT</span></>}
                </div>
                <div className="lab-entry__copy"><span className="micro">{entry.state}</span><p>{entry.body}</p>{"href" in entry && entry.href && <Link className="text-link" href={entry.href}>Open case study <span aria-hidden="true">↗</span></Link>}</div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
