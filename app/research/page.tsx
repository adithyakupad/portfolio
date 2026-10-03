import type { Metadata } from "next";
import Link from "next/link";
import { DetailSection } from "@/components/DetailSection";
import { ResearchVisual } from "@/components/Visuals";

export const metadata: Metadata = {
  title: "Cardiovascular Research",
  description:
    "Radiomic phenotyping of coronary atherosclerotic plaques at Georgia Tech’s Cardiovascular Fluid Mechanics Laboratory.",
};

const researchSections = [
  {
    label: "01 / RESEARCH QUESTION",
    heading: "What can plaque morphology reveal?",
    body: "This work studies radiomic phenotypes of coronary atherosclerotic plaques and asks how patterns found by unsupervised analysis relate to functional disease severity and clinical outcomes.",
  },
  {
    label: "02 / CLINICAL CONTEXT",
    heading: "An image holds more than a measurement.",
    body: "The project examines plaque structure in the context of coronary disease. Fractional flow reserve (FFR) and clinical outcomes provide reference points for evaluating whether computational phenotypes carry useful signal.",
  },
  {
    label: "03 / COMPUTATIONAL WORK",
    heading: "From imaging to phenotypes.",
    body: "My current work focuses on radiomic phenotyping and benchmarking unsupervised clustering pipelines.",
    points: [
      "Medical imaging workflow",
      "Radiomic feature extraction with PyRadiomics",
      "Computational analysis in Python",
      "Unsupervised clustering",
      "Benchmarking against FFR and clinical outcomes",
    ],
    note: "This describes the research workflow. Results, publications, and posters will be added when available.",
  },
];

export default function ResearchPage() {
  return (
    <main className="detail-page research-page">
      <section className="detail-hero research-page__hero">
        <div className="frame">
          <div className="detail-hero__top micro">
            <Link href="/#research">← HOME / RESEARCH</Link>
            <span>GEORGIA INSTITUTE OF TECHNOLOGY</span>
          </div>
          <div className="detail-hero__headline">
            <span className="micro">CARDIOVASCULAR FLUID MECHANICS LABORATORY</span>
            <h1>Research at<br />the edge of <em>evidence.</em></h1>
            <p>Radiomic phenotyping of coronary atherosclerotic plaques.</p>
          </div>
          <div className="detail-hero__bottom micro">
            <span>UNDERGRADUATE RESEARCHER</span>
            <span>2025 – PRESENT · ATLANTA, GA</span>
          </div>
        </div>
      </section>
      <section className="detail-media frame" aria-label="Conceptual illustration of plaque morphology">
        <ResearchVisual />
      </section>
      <div className="frame detail-overview">
        <div className="micro">THE WORK / IN BRIEF</div>
        <div>
          <p className="detail-overview__lead">
            Radiomic phenotyping of coronary atherosclerotic plaques,
            benchmarking unsupervised clustering pipelines against FFR
            and clinical outcomes.
          </p>
          <p className="detail-overview__tech micro">
            RADIOMICS · MEDICAL IMAGING · PYTHON · PYRADIOMICS · UNSUPERVISED LEARNING
          </p>
        </div>
      </div>
      <div className="frame detail-sections">
        {researchSections.map((section) => <DetailSection key={section.label} {...section} />)}
      </div>
      <div className="frame detail-next">
        <span className="micro">CONTINUE</span>
        <Link href="/#work">Selected work<span aria-hidden="true">↗</span></Link>
      </div>
    </main>
  );
}
