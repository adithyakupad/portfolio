import Link from "next/link";
import { DisplayText } from "@/components/typography/DisplayText";
import { SectionLabel } from "@/components/typography/SectionLabel";

export default function Home() {
  return (
    <main className="foundation-home editorial-container">
      <SectionLabel>ADITHYA UPADHYAYULA / ATLANTA, GEORGIA</SectionLabel>
      <DisplayText scale="hero">Biology<span className="accent-dot">.</span><br />Machines<span className="accent-dot">.</span></DisplayText>
      <p>Biomedical Engineering at Georgia Tech.<br />Medical robotics and biological computing.</p>
      <div className="foundation-home__links"><Link className="text-action" href="/work">Work ↗</Link><Link className="text-action" href="/research">Research ↗</Link></div>
    </main>
  );
}
