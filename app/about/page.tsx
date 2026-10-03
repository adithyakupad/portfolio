import type { Metadata } from "next";
import Link from "next/link";
import { DisplayText } from "@/components/typography/DisplayText";
import { SectionLabel } from "@/components/typography/SectionLabel";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="route-page route-page--paper">
      <div className="editorial-container route-page__intro"><SectionLabel>ABOUT / ATLANTA, GEORGIA</SectionLabel><DisplayText scale="large">Adithya<span className="accent-dot">.</span></DisplayText><p>{site.degree} at {site.school}. Interested in medical robotics and biological computing.</p><Link className="text-action" href="mailto:aupadhyayula6@gatech.edu">Get in touch ↗</Link></div>
    </main>
  );
}
