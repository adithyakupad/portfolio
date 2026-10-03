import Link from "next/link";
import Image from "next/image";
import { WaveField } from "@/components/WaveField";
import { honors, site } from "@/lib/site";

export default function Home() {
  return (
    <main className="home">
      <section className="intro-hero" id="top" data-nav-theme="dark" aria-labelledby="hero-heading">
        <Image className="intro-hero__sunset" src="/dusk-horizon.jpg" alt="" fill priority sizes="100vw" />
        <div className="frame intro-hero__copy">
          <div className="section-label micro"><span>ADITHYA UPADHYAYULA</span><span>BIOMEDICAL ENGINEERING / GEORGIA TECH</span></div>
          <div className="intro-hero__message">
            <span className="micro">ATLANTA, GEORGIA / BIOLOGY × MACHINES</span>
            <h1 id="hero-heading">hey, i&apos;m<br />adithya<span>.</span></h1>
            <p>i like to build things.<br />i study <strong>biomedical engineering</strong> at georgia tech.</p>
          </div>
          <div className="intro-hero__floor micro"><span>MEDICAL ROBOTICS / BIOLOGICAL COMPUTING</span><Link href="/projects">EXPLORE PROJECTS <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="home-focus" id="focus" data-nav-theme="dark" aria-labelledby="focus-heading">
        <WaveField />
        <div className="frame home-focus__inner">
          <div className="section-label micro"><span>[01] / INTERESTS</span><span>BIOMEDICAL ENGINEERING / ATLANTA</span></div>
          <div className="home-focus__content">
            <p className="micro">I&apos;M INTERESTED IN</p>
            <h2 id="focus-heading"><span>Medical robotics.</span><span>Biological computing.</span></h2>
          </div>
          <div className="home-focus__field-caption micro"><span>SIGNALS / SYSTEMS</span><span>MOVE TO DISTURB THE FIELD</span></div>
        </div>
      </section>

      <section className="home-about" id="about" data-nav-theme="light" aria-labelledby="about-heading">
        <div className="frame">
          <div className="section-label micro"><span>[02] / ABOUT</span><span>ADITHYA KARTHIK UPADHYAYULA</span></div>
          <div className="home-about__intro">
            <h2 id="about-heading">Right now<span>.</span></h2>
            <p>I study biomedical engineering at Georgia Tech. Outside class, I work on coronary plaque radiomics and build real-time EMG processing for prosthetic control.</p>
          </div>
          <div className="home-about__work">
            <article>
              <span className="micro">01 / RESEARCH · 2025–PRESENT</span>
              <h3>Coronary plaque radiomics.</h3>
              <p>Undergraduate Researcher · Cardiovascular Fluid Mechanics Laboratory</p>
              <Link href="/research">Explore the research <span aria-hidden="true">↗</span></Link>
            </article>
            <article>
              <span className="micro">02 / BUILDING · 2026–PRESENT</span>
              <h3>Project LIMBO.</h3>
              <p>Software / DSP · GT Medical Robotics Club</p>
              <Link href="/case-studies/limbo">Explore the project <span aria-hidden="true">↗</span></Link>
            </article>
          </div>
          <details className="home-about__background">
            <summary><span>Background &amp; recognition</span><span className="micro">OPEN NOTES <span aria-hidden="true">+</span></span></summary>
            <div className="home-about__background-content">
              <div>
                <span className="micro">EDUCATION</span>
                <p>{site.school}<br />{site.degree} · {site.years}</p>
                <p>Undergraduate Research · GT Medical Robotics, LIMBO · Aarohi</p>
                <p>Northview High School · 2022–2026<br />GT Distance Math · Multivariable Calculus · Linear Algebra</p>
              </div>
              <div>
                <span className="micro">SELECTED RECOGNITION</span>
                <ul>{honors.map((honor) => <li key={honor}>{honor}</li>)}</ul>
              </div>
            </div>
          </details>
        </div>
      </section>

    </main>
  );
}
