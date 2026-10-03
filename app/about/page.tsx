import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { honors, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Biomedical Engineering at Georgia Tech. Medical robotics, biological computing, and cardiovascular research.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page__hero" data-nav-theme="dark">
        <div className="frame">
          <div className="detail-hero__top micro"><Link href="/">← HOME</Link><span>ATLANTA, GEORGIA</span></div>
          <div className="about-page__hero-grid">
            <div>
              <span className="micro">ADITHYA KARTHIK UPADHYAYULA</span>
              <h1>Curious about<br />the space <em>between.</em></h1>
              <p>
                I study biomedical engineering at Georgia Tech. My work and
                interests move between medical robotics, biological computing,
                computational medicine, and the interfaces that connect them.
              </p>
            </div>
            <div className="about-page__portrait">
              <Image src="/portrait.jpg" alt="Adithya Upadhyayula" width={400} height={500} sizes="(max-width: 800px) 74vw, 380px" priority />
            </div>
          </div>
        </div>
      </section>
      <section className="about-page__facts frame" data-nav-theme="light">
        <div className="section-label micro"><span>BACKGROUND</span><span>THE WORK SO FAR</span></div>
        <div className="about-page__fact">
          <span className="micro">01 / EDUCATION</span>
          <div>
            <h2>{site.school}</h2>
            <p>{site.degree} · {site.years}</p>
            <p>Undergraduate Research · GT Medical Robotics, LIMBO · Aarohi</p>
          </div>
        </div>
        <div className="about-page__fact">
          <span className="micro">02 / RESEARCH</span>
          <div>
            <h2>Cardiovascular Fluid Mechanics Laboratory</h2>
            <p>Undergraduate Researcher · 2025–present</p>
            <p>Radiomic phenotyping of coronary atherosclerotic plaques, benchmarking unsupervised clustering pipelines against FFR and clinical outcomes.</p>
            <Link className="text-link" href="/research">Read the research story <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="about-page__fact">
          <span className="micro">03 / BUILDING</span>
          <div>
            <h2>GT Medical Robotics Club</h2>
            <p>Project LIMBO · Software / DSP · 2026–present</p>
            <p>Real-time EMG processing and prosthetic control.</p>
            <Link className="text-link" href="/work/limbo">Explore LIMBO <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="about-page__fact">
          <span className="micro">04 / EARLIER</span>
          <div>
            <h2>Northview High School</h2>
            <p>2022–2026 · GT Distance Math, Multivariable Calculus, Linear Algebra</p>
          </div>
        </div>
      </section>
      <section className="about-page__honors" data-nav-theme="light">
        <div className="frame">
          <div className="section-label micro"><span>SELECTED RECOGNITION</span><span>DETAILS, NOT THE WHOLE STORY</span></div>
          <details>
            <summary>Recognition & academic notes <span>{honors.length} entries <span aria-hidden="true">+</span></span></summary>
            <ul>{honors.map((honor) => <li key={honor}>{honor}</li>)}</ul>
          </details>
        </div>
      </section>
    </main>
  );
}
