import { InteractiveMedia } from "@/components/InteractiveMedia";
import { ResearchVisual } from "@/components/Visuals";

export function HomeResearch() {
  return (
    <section className="home-research" id="research" data-nav-theme="light" aria-labelledby="research-heading">
      <div className="home-research__light home-research__light--far" data-parallax="" data-parallax-speed="100" aria-hidden="true" />
      <div className="home-research__light home-research__light--near" data-parallax="" data-parallax-speed="-68" aria-hidden="true" />
      <div className="frame home-research__inner">
        <div className="section-label micro"><span>[03] / RESEARCH</span><span>CARDIOVASCULAR FLUID MECHANICS LABORATORY</span></div>
        <div className="home-research__heading" data-reveal="headline">
          <p className="micro" data-parallax="" data-parallax-speed="-22">UNDERGRADUATE RESEARCHER<br />GEORGIA TECH · 2025–PRESENT</p>
          <h2 id="research-heading" data-parallax="" data-parallax-speed="36">Coronary plaque<br /><em>radiomics.</em></h2>
        </div>
        <div className="home-research__body">
          <div className="home-research__visual" data-parallax="" data-parallax-speed="38" data-reveal="media">
            <InteractiveMedia label="Conceptual coronary plaque visual"><ResearchVisual /></InteractiveMedia>
          </div>
          <div className="home-research__copy" data-frost-light="" data-parallax="" data-parallax-speed="-27" data-reveal="section">
            <span className="micro">THE WORK / IN BRIEF</span>
            <p>Radiomic phenotyping of coronary atherosclerotic plaques, benchmarking unsupervised clustering pipelines against FFR and clinical outcomes.</p>
            <details className="home-research__method">
              <summary><span>Method &amp; scope</span><span aria-hidden="true">+</span></summary>
              <div>
                <p>My current work spans medical imaging, radiomic feature extraction with PyRadiomics, and computational analysis in Python.</p>
                <p className="micro">IMAGING → FEATURES → CLUSTERING → FFR / OUTCOMES</p>
                <p className="home-research__caveat">This is the research workflow. Results, posters, and publications can be added when available.</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
