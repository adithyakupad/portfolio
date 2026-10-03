import { ProjectMedia } from "@/components/ProjectMedia";
import Image from "next/image";
import Link from "next/link";
import { BiologicalVisual, HeroAtmosphere, ProjectVisual, ResearchVisual } from "@/components/Visuals";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <section className="hero" id="top" data-nav-theme="dark" aria-labelledby="hero-heading">
        <HeroAtmosphere />
        <div className="frame hero__content">
          <div className="hero__eyebrow micro"><span>ADITHYA UPADHYAYULA</span><span>BIOMEDICAL ENGINEERING / GEORGIA TECH</span></div>
          <div className="hero__title-wrap">
            <span className="hero__index micro">AU / 2026<br />ATLANTA, GA</span>
            <h1 className="hero__title" id="hero-heading"><span>BIOLOGY.</span><span>MACHINES.</span><em>Everything between.</em></h1>
          </div>
          <div className="hero__floor micro"><span>MEDICAL ROBOTICS<br />BIOLOGICAL COMPUTING</span><a href="#thesis">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero__side-note micro" aria-hidden="true">[ HUMAN SIGNAL / ENGINEERED RESPONSE ]</div>
      </section>

      <section className="thesis paper-section" id="thesis" data-nav-theme="light" aria-labelledby="thesis-heading">
        <div className="frame">
          <div className="section-label micro"><span>[01] / THE TERRITORY</span><span>BIOLOGY × MACHINES</span></div>
          <div className="thesis__statement"><h2 id="thesis-heading">I build systems<br />that interact with <em>life.</em></h2><p>Signals become information. Information becomes action.</p></div>
          <div className="thesis__directions"><div><span className="micro">DIRECTION / 01</span><h3>Medical<br />Robotics</h3><p>Human signals → physical response.</p></div><div><span className="micro">DIRECTION / 02</span><h3>Biological<br />Computing</h3><p>Living systems as engineered systems.</p></div></div>
        </div>
      </section>

      <section className="chapter chapter--robotics" id="robotics" data-nav-theme="dark" aria-labelledby="robotics-heading">
        <div className="frame chapter__inner">
          <div className="section-label micro"><span>[02] / MEDICAL ROBOTICS</span><span>INPUT / EMG &nbsp;→&nbsp; OUTPUT / CONTROL</span></div>
          <div className="chapter__heading"><h2 id="robotics-heading">Medical<br />Robotics<span className="red-period">.</span></h2><p>Signals → models → machines.</p></div>
          <div className="chapter__feature">
            <div className="chapter__media"><ProjectVisual kind="limbo" idPrefix="limbo-feature" /></div>
            <div className="chapter__feature-copy frost-surface"><span className="micro">CURRENT WORK / GT MEDICAL ROBOTICS CLUB</span><h3>Project LIMBO</h3><p>Real-time EMG processing and prosthetic control.</p><div className="signal-pipeline micro" aria-label="EMG processing areas: acquisition, filtering, normalization, DSP and machine learning, prosthetic control"><span>EMG</span><span>ACQUISITION</span><span>FILTERING</span><span>NORMALIZATION</span><span>DSP / ML</span><span>CONTROL</span></div><Link className="text-link text-link--light" href="/work/limbo">Explore the system <span aria-hidden="true">↗</span></Link></div>
          </div>
        </div>
      </section>

      <section className="chapter chapter--biology" id="biological-computing" data-nav-theme="light" aria-labelledby="biology-heading">
        <BiologicalVisual />
        <div className="frame chapter__inner"><div className="section-label micro"><span>[03] / BIOLOGICAL COMPUTING</span><span>AN ACTIVE DIRECTION OF EXPLORATION</span></div><div className="chapter--biology__copy"><h2 id="biology-heading">Biological<br />Computing<span className="red-period">.</span></h2><p>What changes when the material doing the computation is alive?</p><span className="micro chapter--biology__status">SYNTHETIC BIOLOGY / ENGINEERED SYSTEMS / WORK IN PROGRESS</span></div></div>
      </section>

      <section className="intersection paper-section" data-nav-theme="light" aria-labelledby="intersection-heading"><div className="frame"><div className="section-label micro"><span>[04] / THE INTERFACE</span><span>ONE CONTINUOUS QUESTION</span></div><div className="intersection__grid"><div className="intersection__side micro"><span>MEDICAL ROBOTICS</span><span className="intersection__line" /><span>BIOLOGICAL COMPUTING</span></div><div><h2 id="intersection-heading">The interface<br />is the <em>work.</em></h2><p>Neurotechnology lives where biological signals and engineered response meet.</p></div></div><div className="intersection__registration micro" aria-hidden="true">[ LIFE ] <span>×</span> [ MACHINE ] <span>→</span> [ INTERFACE ]</div></div></section>

      <section className="work-section" id="work" data-nav-theme="light" aria-labelledby="work-heading"><div className="frame"><div className="section-label micro"><span>[05] / SELECTED WORK</span><span>BUILD / TEST / BREAK / REPEAT</span></div><div className="work-section__intro"><h2 id="work-heading">Work in<br /><em>motion.</em></h2><Link className="text-link" href="/work">All work <span aria-hidden="true">↗</span></Link></div><div className="project-list">{projects.map((project) => <article className={`project-row project-row--${project.visual}`} key={project.slug}><div className="project-row__media"><ProjectMedia project={project} idPrefix={`work-${project.slug}`} /></div><div className="project-row__content"><div className="project-row__top micro"><span>[{project.number}] / {project.category}</span><span>STATUS / {project.status}</span></div><div><h3>{project.title}</h3><p>{project.description}</p></div><Link className="project-row__link" href={`/work/${project.slug}`} aria-label={`Explore ${project.title}`}>Open case study <span aria-hidden="true">↗</span></Link></div></article>)}</div></div></section>

      <section className="research-section" id="research" data-nav-theme="dark" aria-labelledby="research-heading"><div className="frame"><div className="section-label micro"><span>[06] / RESEARCH</span><span>2025 – PRESENT / GEORGIA TECH</span></div><div className="research-section__intro"><span className="micro">CARDIOVASCULAR FLUID MECHANICS LABORATORY</span><h2 id="research-heading">Reading disease<br />in the <em>shape</em> of a plaque.</h2><p>Radiomic phenotyping of coronary atherosclerotic plaques. Benchmarking unsupervised clustering pipelines against FFR and clinical outcomes.</p></div><div className="research-section__visual"><ResearchVisual /></div><div className="research-section__foot"><div className="micro frost-surface">UNDERGRADUATE RESEARCHER · ATLANTA, GA</div><Link className="text-link text-link--light" href="/research">Explore the research <span aria-hidden="true">↗</span></Link></div></div></section>

      <section className="lab-section" id="lab" data-nav-theme="dark" aria-labelledby="lab-heading"><div className="frame"><div className="section-label micro"><span>[07] / LAB</span><span>EXPERIMENTS / OPEN QUESTIONS</span></div><div className="lab-section__head"><h2 id="lab-heading">LAB<span className="red-period">.</span></h2><p>Prototypes, tests, and unfinished investigations. The working surface is open.</p></div><div className="lab-list"><Link href="/work/limbo"><span className="micro">01 / SIGNAL</span><h3>EMG processing</h3><span className="micro">PROJECT LIMBO ↗</span></Link><Link href="/work/instinct"><span className="micro">02 / PERCEPTION</span><h3>Spatial haptics</h3><span className="micro">INSTINCT / CONCEPT ↗</span></Link><Link href="/work/jarvis"><span className="micro">03 / ENTRY</span><h3>JARVIS</h3><span className="micro">DOCUMENTATION FORTHCOMING ↗</span></Link></div><Link className="text-link text-link--light lab-section__all" href="/lab">Enter the lab <span aria-hidden="true">↗</span></Link></div></section>

      <section className="about-teaser paper-section" data-nav-theme="light" aria-labelledby="about-heading"><div className="frame about-teaser__grid"><div className="about-teaser__image"><Image src="/portrait.jpg" alt="Portrait of Adithya Upadhyayula" width={400} height={500} sizes="(max-width: 700px) 76vw, 360px" /></div><div className="about-teaser__copy"><span className="micro">[08] / THE PERSON</span><h2 id="about-heading">Adithya<br />Upadhyayula<span className="red-period">.</span></h2><p>Biomedical Engineering @ Georgia Tech.<br />Atlanta, Georgia.</p><Link className="text-link" href="/about">More about me <span aria-hidden="true">↗</span></Link></div></div></section>
    </main>
  );
}
