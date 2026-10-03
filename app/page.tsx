import Link from "next/link";
import Image from "next/image";
import { WaveField } from "@/components/WaveField";

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

    </main>
  );
}
