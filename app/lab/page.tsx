import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Lab", description: "Experiments, active technical directions, and unfinished investigations." };

const entries = [
  { number: "01", type: "SIGNAL", title: "EMG processing", state: "ACTIVE / PROJECT LIMBO", body: "Real-time acquisition, filtering, normalization, and control processing for prosthetic response.", href: "/work/limbo" },
  { number: "02", type: "PERCEPTION", title: "Spatial haptics", state: "CONCEPT / INSTINCT", body: "A proposed path from wearable vision and tracking to haptic feedback for first responders.", href: "/work/instinct" },
  { number: "03", type: "LIVING SYSTEMS", title: "Biological computing", state: "OPEN DIRECTION", body: "Exploring engineered biological systems as substrates for sensing and computation." },
  { number: "04", type: "DOCUMENTATION", title: "JARVIS", state: "FORTHCOMING", body: "A project entry awaiting a documented technical case study.", href: "/work/jarvis" },
];

export default function LabPage() {
  return <main className="index-page lab-page"><section className="index-hero lab-page__hero" data-nav-theme="dark"><div className="frame"><div className="section-label micro"><span>INDEX / 02</span><span>BUILDS / TESTS / OPEN QUESTIONS</span></div><div className="index-hero__body"><span className="micro">THE WORKING SURFACE</span><h1>LAB<span className="red-period">.</span></h1><p>Build / test / break / repeat.</p></div></div></section><section className="lab-page__entries" data-nav-theme="light"><div className="frame"><div className="section-label micro"><span>FIELD NOTES</span><span>NOT SCIENTIFIC RESULTS</span></div>{entries.map((entry) => <article className="lab-entry" key={entry.number}><div className="lab-entry__meta micro"><span>[{entry.number}] / {entry.type}</span><span>{entry.state}</span></div><div><h2>{entry.title}</h2><p>{entry.body}</p></div>{entry.href && <Link className="text-link" href={entry.href}>Open entry <span aria-hidden="true">↗</span></Link>}</article>)}</div></section></main>;
}
