"use client";

import { useEffect, useRef, useState, type FocusEvent } from "react";
import { ProjectVisual } from "@/components/Visuals";
import { ProjectTransitionLink } from "@/components/ProjectTransitionLink";
import { featuredProjects as projects } from "@/lib/projects";

const rays = Array.from({ length: 54 }, (_, index) => {
  const angle = ((index * 137.508) * Math.PI) / 180;
  const near = 95 + ((index * 41) % 210);
  const far = 600 + ((index * 67) % 470);
  return {
    x1: Number((800 + Math.cos(angle) * near).toFixed(3)),
    y1: Number((450 + Math.sin(angle) * near).toFixed(3)),
    x2: Number((800 + Math.cos(angle) * far).toFixed(3)),
    y2: Number((450 + Math.sin(angle) * far).toFixed(3)),
    opacity: .08 + ((index * 7) % 9) * .025,
    width: index % 9 === 0 ? 1.5 : .8,
  };
});

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export function ProjectCorridor() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const travelRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !stage || !viewport || !track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>(".corridor-card"));
    const compact = window.matchMedia("(max-width: 760px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (section.dataset.mode !== "scroll") return;
      const verticalTravel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-section.getBoundingClientRect().top / verticalTravel, 0, 1);
      const x = progress * travelRef.current;
      track.style.transform = `translate3d(${-x.toFixed(1)}px,0,0)`;
      stage.style.setProperty("--warp-scale", (1 + progress * .43).toFixed(3));
      stage.style.setProperty("--warp-shift", `${(progress * -7).toFixed(2)}%`);
      stage.style.setProperty("--corridor-progress", progress.toFixed(4));

      let closest = 0;
      let distance = Number.POSITIVE_INFINITY;
      cards.forEach((card, index) => {
        const offset = (card.offsetLeft + card.offsetWidth / 2 - x - viewport.clientWidth / 2) / (viewport.clientWidth / 2);
        const nearness = Math.abs(offset);
        card.style.setProperty("--card-tilt", `${clamp(-offset * 7, -9, 9).toFixed(2)}deg`);
        card.style.setProperty("--card-lift", `${clamp((1 - nearness) * 13, 0, 13).toFixed(1)}px`);
        if (nearness < distance) { distance = nearness; closest = index; }
      });
      setActive((current) => current === closest ? current : closest);
    };

    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const updateNative = () => {
      if (section.dataset.mode !== "native") return;
      const center = viewport.scrollLeft + viewport.clientWidth / 2;
      stage.style.setProperty("--corridor-progress", (viewport.scrollLeft / Math.max(1, viewport.scrollWidth - viewport.clientWidth)).toFixed(4));
      let closest = 0;
      let distance = Number.POSITIVE_INFINITY;
      cards.forEach((card, index) => {
        const delta = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
        if (delta < distance) { distance = delta; closest = index; }
      });
      setActive((current) => current === closest ? current : closest);
    };

    const measure = () => {
      const native = compact.matches || reduced.matches;
      section.dataset.mode = native ? "native" : "scroll";
      if (native) {
        section.style.removeProperty("--corridor-height");
        track.style.removeProperty("transform");
        cards.forEach((card) => { card.style.removeProperty("--card-tilt"); card.style.removeProperty("--card-lift"); });
        updateNative();
      } else {
        const travel = Math.max(0, track.scrollWidth - viewport.clientWidth);
        travelRef.current = travel;
        section.style.setProperty("--corridor-height", `${window.innerHeight + Math.max(window.innerHeight * .7, travel * .82)}px`);
        schedule();
      }
    };

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    observer.observe(viewport);
    compact.addEventListener("change", measure);
    reduced.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", schedule, { passive: true });
    viewport.addEventListener("scroll", updateNative, { passive: true });
    measure();
    return () => {
      observer.disconnect();
      compact.removeEventListener("change", measure);
      reduced.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", schedule);
      viewport.removeEventListener("scroll", updateNative);
      cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = (index: number) => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const card = track?.querySelectorAll<HTMLElement>(".corridor-card")[index];
    if (!section || !viewport || !card) return;
    const targetX = card.offsetLeft + card.offsetWidth / 2 - viewport.clientWidth / 2;
    if (section.dataset.mode === "scroll") {
      const ratio = clamp(targetX / Math.max(1, travelRef.current), 0, 1);
      const top = window.scrollY + section.getBoundingClientRect().top;
      const y = top + ratio * (section.offsetHeight - window.innerHeight);
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      viewport.scrollTo({ left: targetX, behavior: "smooth" });
    }
  };

  const focusCard = (event: FocusEvent<HTMLDivElement>) => {
    if (!(event.target as HTMLElement).matches(":focus-visible")) return;
    const card = (event.target as HTMLElement).closest<HTMLElement>(".corridor-card");
    if (card) goTo(Number(card.dataset.index));
  };

  return (
    <section className="project-corridor" id="projects" data-mode="native" data-nav-theme="dark" aria-labelledby="projects-heading" ref={sectionRef}>
      <div className="project-corridor__stage" ref={stageRef}>
        <div className="project-corridor__field" aria-hidden="true">
          <svg className="project-corridor__rays" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
            <g stroke="#D5E6EA" strokeLinecap="round">
              {rays.map((ray, index) => <line key={index} x1={ray.x1} y1={ray.y1} x2={ray.x2} y2={ray.y2} strokeOpacity={ray.opacity} strokeWidth={ray.width} />)}
            </g>
          </svg>
          <span className="project-corridor__aperture" />
        </div>
        <div className="frame project-corridor__mast">
          <div className="section-label micro"><span>[04] / PROJECTS</span><span className="project-corridor__desktop-instruction">SCROLL TO TRAVEL / SELECT TO OPEN</span><span className="project-corridor__mobile-instruction">SWIPE TO EXPLORE</span></div>
          <div className="project-corridor__title"><h2 id="projects-heading">Projects<span>.</span></h2><p className="micro">SIGNAL → PERCEPTION → SYSTEM</p></div>
        </div>
        <div className="corridor-viewport" ref={viewportRef} tabIndex={0} aria-label="Projects, horizontally scrollable">
          <div className="corridor-track" ref={trackRef} onFocusCapture={focusCard}>
            {projects.map((project, index) => (
              <article className={`corridor-card corridor-card--${project.slug}`} data-index={index} key={project.slug}>
                <ProjectTransitionLink href={`/work/${project.slug}`} slug={project.slug} className="corridor-card__surface" ariaLabel={`${project.title}: ${project.description} Open case study`}>
                  <div className="corridor-card__visual"><ProjectVisual kind={project.visual} idPrefix={`corridor-${project.slug}`} /></div>
                  <div className="corridor-card__shade" />
                  <div className="corridor-card__top micro"><span>[{project.number}] / {project.category}</span><span>{project.status}</span></div>
                  <div className="corridor-card__copy" data-frost-light=""><h3>{project.title}</h3><p>{project.description}</p></div>
                  <span className="corridor-card__action micro">OPEN CASE STUDY <span aria-hidden="true">↗</span></span>
                </ProjectTransitionLink>
              </article>
            ))}
          </div>
        </div>
        <div className="frame project-corridor__footer">
          <div className="project-corridor__meter"><span className="micro">{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span><span className="project-corridor__meter-track"><span /></span></div>
          <div className="project-corridor__controls"><button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous project">←</button><button type="button" onClick={() => goTo(active + 1)} disabled={active === projects.length - 1} aria-label="Next project">→</button></div>
        </div>
      </div>
    </section>
  );
}
