import type { Metadata } from "next";
import { DisplayText } from "@/components/typography/DisplayText";
import { SectionLabel } from "@/components/typography/SectionLabel";

export const metadata: Metadata = { title: "Lab" };

export default function LabPage() {
  return <main className="route-page route-page--paper"><div className="editorial-container route-page__intro"><SectionLabel>LAB / EXPERIMENTS</SectionLabel><DisplayText scale="large">Lab<span className="accent-dot">.</span></DisplayText><p>Small builds and experiments will appear here as they are documented.</p></div></main>;
}
