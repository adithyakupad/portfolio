import Link from "next/link";
import { HomeMotion } from "@/components/HomeMotion";
import { FloatingWork } from "@/components/FloatingWork";
import { WaveField } from "@/components/WaveField";

export default function Home() {
  return (
    <main className="home">
      <HomeMotion />
      <section className="intro-hero" id="top" data-nav-theme="light" aria-labelledby="hero-heading">
        <div className="frame intro-hero__copy">
          <div className="section-label micro"><span>ADITHYA UPADHYAYULA</span><span>BIOMEDICAL ENGINEERING / GEORGIA TECH</span></div>
          <div className="intro-hero__message">
            <span className="micro">ATLANTA, GEORGIA / BIOLOGY × MACHINES</span>
            <h1 id="hero-heading">hey, i&apos;m<br />adithya<span>.</span></h1>
            <p>i like to build things.<br />i study <strong>biomedical engineering</strong> at georgia tech.</p>
          </div>
          <div className="intro-hero__floor micro"><span>MEDICAL ROBOTICS / BIOLOGICAL COMPUTING</span><a href="#work">SEE THE WORK <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="wave-field" data-nav-theme="dark" aria-label="Interactive abstract wave field inspired by engineered and organic forms">
          <WaveField />
          <div className="wave-field__horizon" aria-hidden="true" />
          <div className="wave-field__caption micro"><span>FORM / SIGNAL / RESPONSE</span><span className="wave-field__desktop-note">MOVE YOUR CURSOR TO DISTURB THE FIELD</span><span className="wave-field__mobile-note">ABSTRACT INTERACTIVE FIELD</span></div>
        </div>
      </section>

      <section className="home-focus" id="focus" data-nav-theme="light" aria-labelledby="focus-heading">
        <div className="frame">
          <div className="section-label micro"><span>[01] / INTERESTS</span><span>BIOMEDICAL ENGINEERING / ATLANTA</span></div>
          <div className="home-focus__content">
            <p className="micro">I&apos;M INTERESTED IN</p>
            <h2 id="focus-heading"><span>Medical robotics.</span><span>Biological computing.</span></h2>
          </div>
        </div>
      </section>

      <section className="home-work" id="work" data-nav-theme="dark" aria-labelledby="work-heading">
        <div className="frame">
          <div className="section-label micro"><span>[02] / WORK</span><span>SELECT / LIFT / INSPECT</span></div>
          <div className="home-work__heading"><h2 id="work-heading">The work<span className="red-period">.</span></h2><span className="micro">PROJECTS + RESEARCH / 2025—NOW</span></div>
          <FloatingWork />
          <div className="home-work__links micro"><Link href="/work">ALL WORK <span aria-hidden="true">↗</span></Link><Link href="/lab">LAB / EXPERIMENTS <span aria-hidden="true">↗</span></Link><Link href="/about">ABOUT ME <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </main>
  );
}
