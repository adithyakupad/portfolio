import type { Metadata } from "next";
import Link from "next/link";
import { FrostedPanel } from "@/components/glass/FrostedPanel";
import { DisplayText } from "@/components/typography/DisplayText";
import { SectionLabel } from "@/components/typography/SectionLabel";
import { RadiomicsVisual } from "@/components/visuals/RadiomicsVisual";
import { cardiovascularResearch } from "@/data/research";

export const metadata: Metadata = { title: "Research", description: cardiovascularResearch.description };

export default function ResearchPage() {
  return (
    <main className="route-page route-page--red">
      <div className="editorial-container route-page__intro"><SectionLabel>RESEARCH / CARDIOVASCULAR FLUID MECHANICS LABORATORY</SectionLabel><DisplayText scale="large">Research<span className="accent-dot">.</span></DisplayText><p>{cardiovascularResearch.description}</p></div>
      <div className="editorial-container research-scaffold">
        <RadiomicsVisual />
        <FrostedPanel tone="red" as="aside"><span className="type-meta">CURRENT ROLE</span><h2>{cardiovascularResearch.role}</h2><p>{cardiovascularResearch.organization}<br />{cardiovascularResearch.institution}<br />{cardiovascularResearch.year}</p><Link className="text-action" href="/work/cardiovascular-research">Project record ↗</Link></FrostedPanel>
      </div>
    </main>
  );
}
