import Image from "next/image";
import Link from "next/link";
import { BiologicalVisual, HeroAtmosphere, ProjectVisual, ResearchVisual } from "@/components/Visuals";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <section className="hero" id="top" aria-labelledby="hero-heading">
        <HeroAtmosphere />
        <div className="frame hero__content">
          <div className="hero__eyebrow micro">
            <span>ADITHYA UPADHYAYULA</span>
            <span>BIOMEDICAL ENGINEERING / GT</span>
          </div>
          <h1 className="hero__title" id="hero-heading">
            <span>BIOLOGY.</span>
            <span>MACHINES.</span>
            <em>Everything between.</em>
          </h1>
          <div className="hero__floor">
            <p>
              Adithya Upadhyayula is a biomedical engineer working across medical
              robotics and biological computing.
            </p>
            <div className="hero__floor-aside micro">
              <span>ATLANTA, GEORGIA</span>
              <a href="#thesis">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="thesis paper-section" id="thesis" aria-labelledby="thesis-heading">
        <div className="frame">
          <div className="section-label micro"><span>01 / THESIS</span><span>BIOLOGY × MACHINES</span></div>
          <div className="thesis__statement">
            <h2 id="thesis-heading">I build systems that<br /><em>interact with life.</em></h2>
            <p>
              My work follows the point where living signals become information,
              and engineered systems turn that information into action.
            </p>
          </div>
          <div className="thesis__directions">
            <div>
              <span className="micro">DIRECTION / 01</span>
              <h3>Medical Robotics</h3>
              <p>Physical systems that perceive, assist, and interact with people.</p>
            </div>
            <div>
              <span className="micro">DIRECTION / 02</span>
              <h3>Biological Computing</h3>
              <p>Exploring engineered biology and computation beyond silicon.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter chapter--robotics" id="robotics" aria-labelledby="robotics-heading">
        <div className="frame chapter__inner">
          <div className="section-label micro"><span>02 / MEDICAL ROBOTICS</span><span>HUMAN SIGNAL → PHYSICAL RESPONSE</span></div>
          <div className="chapter__heading">
            <h2 id="robotics-heading">Medical<br />Robotics<span className="red-period">.</span></h2>
            <p>Building intelligent physical systems that perceive, assist, and interact with people.</p>
          </div>
          <div className="chapter__feature">
            <div className="chapter__media"><ProjectVisual kind="limbo" idPrefix="limbo-feature" /></div>
            <div className="chapter__feature-copy">
              <span className="micro">CURRENT WORK / GT MEDICAL ROBOTICS CLUB</span>
              <h3>Project LIMBO</h3>
              <p>Real-time EMG processing and prosthetic control.</p>
              <Link className="text-link text-link--light" href="/projects/limbo">
                Explore the project <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter chapter--biology" id="biological-computing" aria-labelledby="biology-heading">
        <BiologicalVisual />
        <div className="frame chapter__inner">
          <div className="section-label micro"><span>03 / BIOLOGICAL COMPUTING</span><span>BEYOND SILICON</span></div>
          <div className="chapter--biology__copy">
            <h2 id="biology-heading">Biological<br />Computing<span className="warm-period">.</span></h2>
            <p>
              What changes when biology becomes part of the system itself?
              I am interested in synthetic biology and engineered biological
              systems as new substrates for sensing and computation.
            </p>
            <span className="micro chapter--biology__status">AN AREA OF EXPLORATION / WORK TO COME</span>
          </div>
        </div>
      </section>

      <section className="intersection paper-section" aria-labelledby="intersection-heading">
        <div className="frame">
          <div className="section-label micro"><span>04 / THE INTERSECTION</span><span>ONE CONTINUOUS QUESTION</span></div>
          <div className="intersection__grid">
            <div className="intersection__side micro">
              <span>MEDICAL ROBOTICS</span>
              <span className="intersection__line" />
              <span>BIOLOGICAL COMPUTING</span>
            </div>
            <div>
              <h2 id="intersection-heading">The interface<br />is the <em>work.</em></h2>
              <p>
                Neurotechnology sits at the meeting point: systems that read
                from living tissue, interpret its signals, and respond with
                engineered precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-heading">
        <div className="frame">
          <div className="section-label micro"><span>05 / SELECTED WORK</span><span>PROJECTS & SYSTEMS</span></div>
          <div className="work-section__intro">
            <h2 id="work-heading">Built around<br /><em>a question.</em></h2>
            <p>Selected projects, from living signals to perception and physical feedback.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-row project-row--${project.visual}`} key={project.slug}>
                <div className="project-row__media"><ProjectVisual kind={project.visual} idPrefix={`work-${project.slug}`} /></div>
                <div className="project-row__content">
                  <div className="project-row__top micro"><span>{project.number} / {project.category}</span><span>{project.status}</span></div>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <Link className="project-row__link" href={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}>
                    Explore project <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="research-section" id="research" aria-labelledby="research-heading">
        <div className="frame">
          <div className="section-label micro"><span>06 / RESEARCH</span><span>2025 – PRESENT / GEORGIA TECH</span></div>
          <div className="research-section__intro">
            <span className="micro">CARDIOVASCULAR FLUID MECHANICS LABORATORY</span>
            <h2 id="research-heading">Reading disease<br />in the <em>shape</em> of a plaque.</h2>
            <p>
              Radiomic phenotyping of coronary atherosclerotic plaques,
              benchmarking unsupervised clustering pipelines against FFR
              and clinical outcomes.
            </p>
          </div>
          <div className="research-section__visual"><ResearchVisual /></div>
          <div className="research-section__foot">
            <div className="micro">UNDERGRADUATE RESEARCHER · ATLANTA, GA</div>
            <Link className="text-link" href="/research">Explore the research <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="lab-section" id="lab" aria-labelledby="lab-heading">
        <div className="frame">
          <div className="section-label micro"><span>LAB / OPEN QUESTIONS</span><span>EXPERIMENTS IN PROGRESS</span></div>
          <div className="lab-section__head">
            <h2 id="lab-heading">LAB<span className="red-period">.</span></h2>
            <p>Space for prototypes, unfinished ideas, and questions that might become the next system.</p>
          </div>
          <div className="lab-list">
            <div><span className="micro">01 / EXPLORATION</span><h3>Biosensing</h3><span className="micro">NOTES FORTHCOMING</span></div>
            <div><span className="micro">02 / EXPLORATION</span><h3>Engineered biological systems</h3><span className="micro">NOTES FORTHCOMING</span></div>
            <Link href="/projects/jarvis"><span className="micro">03 / PROJECT ENTRY</span><h3>JARVIS</h3><span className="micro">CASE STUDY FORTHCOMING ↗</span></Link>
          </div>
        </div>
      </section>

      <section className="about-teaser paper-section" aria-labelledby="about-heading">
        <div className="frame about-teaser__grid">
          <div className="about-teaser__image">
            <Image src="/portrait.jpg" alt="Portrait of Adithya Upadhyayula" width={400} height={500} sizes="(max-width: 700px) 76vw, 360px" />
          </div>
          <div className="about-teaser__copy">
            <span className="micro">ABOUT / THE PERSON BEHIND THE WORK</span>
            <h2 id="about-heading">Adithya<br />Upadhyayula<span className="red-period">.</span></h2>
            <p>{site.degree} at Georgia Tech. Based in Atlanta, working across medical robotics, computational medicine, and engineered biological systems.</p>
            <Link className="text-link" href="/about">More about me <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
