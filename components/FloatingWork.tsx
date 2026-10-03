"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ProjectMedia } from "@/components/ProjectMedia";
import { ResearchVisual } from "@/components/Visuals";
import { projects, type Project } from "@/lib/projects";

type WorkItem = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  status: string;
  href: string;
  role?: string;
  thesis?: string;
  project?: Project;
};

const items: WorkItem[] = [
  ...projects.map((project) => ({
    slug: project.slug,
    number: project.number,
    title: project.title,
    category: project.category,
    description: project.description,
    status: project.status,
    href: `/work/${project.slug}`,
    role: project.role,
    thesis: project.thesis,
    project,
  })),
  {
    slug: "research",
    number: "04",
    title: "Coronary plaque radiomics",
    category: "Cardiovascular Research / Georgia Tech",
    description: "Radiomic phenotyping of coronary atherosclerotic plaques, benchmarking unsupervised clustering pipelines against FFR and clinical outcomes.",
    status: "2025–present",
    href: "/research",
    role: "Undergraduate Researcher · Cardiovascular Fluid Mechanics Laboratory",
  },
];

function WorkVisual({ item, prefix }: { item: WorkItem; prefix: string }) {
  return item.project ? <ProjectMedia project={item.project} idPrefix={prefix} /> : <ResearchVisual />;
}

export function FloatingWork() {
  const [selected, setSelected] = useState<WorkItem | null>(null);
  const [closing, setClosing] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!selected) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const oldOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = oldOverflow; };
  }, [selected]);

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  const closePreview = () => {
    if (closing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialogRef.current?.close();
      return;
    }
    setClosing(true);
    timeoutRef.current = setTimeout(() => dialogRef.current?.close(), 260);
  };

  return <>
    <div className="orbit-stage" aria-label="Select a project or research tile to inspect it">
      <div className="orbit-stage__field" aria-hidden="true" />
      {items.map((item) => (
        <button
          className={`orbit-tile orbit-tile--${item.slug} ${selected?.slug === item.slug ? "orbit-tile--selected" : ""}`}
          type="button"
          key={item.slug}
          aria-haspopup="dialog"
          aria-label={`Inspect ${item.title}`}
          onClick={(event) => { triggerRef.current = event.currentTarget; setSelected(item); }}
        >
          <span className="orbit-tile__float">
            <span className="orbit-tile__visual"><WorkVisual item={item} prefix={`orbit-${item.slug}`} /></span>
            <span className="orbit-tile__shade" />
            <span className="orbit-tile__content">
              <span className="orbit-tile__number micro">[{item.number}] / {item.category}</span>
              <span className="orbit-tile__bottom"><strong>{item.title}</strong><span className="orbit-tile__cue micro">PULL TO INSPECT <span aria-hidden="true">↗</span></span></span>
            </span>
          </span>
        </button>
      ))}
      <div className="orbit-stage__annotation micro" aria-hidden="true">SELECT / LIFT / INSPECT</div>
    </div>

    {selected && <dialog
      ref={dialogRef}
      className={`work-preview ${closing ? "work-preview--closing" : ""}`}
      aria-labelledby="work-preview-title"
      onCancel={(event) => { event.preventDefault(); closePreview(); }}
      onClose={() => { setSelected(null); setClosing(false); triggerRef.current?.focus(); }}
      onClick={(event) => { if (event.target === event.currentTarget) closePreview(); }}
    >
      <div className="work-preview__shell">
        <button className="work-preview__close micro" type="button" onClick={closePreview} aria-label="Close project preview">CLOSE <span aria-hidden="true">×</span></button>
        <div className="work-preview__visual"><WorkVisual item={selected} prefix={`preview-${selected.slug}`} /></div>
        <div className="work-preview__copy">
          <span className="micro">[{selected.number}] / {selected.category}</span>
          <h3 id="work-preview-title">{selected.title}</h3>
          <p className="work-preview__lead">{selected.thesis ?? selected.description}</p>
          {selected.thesis && <p className="work-preview__description">{selected.description}</p>}
          <dl>
            <div><dt>STATUS</dt><dd>{selected.status}</dd></div>
            {selected.role && <div><dt>ROLE</dt><dd>{selected.role}</dd></div>}
          </dl>
          <Link className="work-preview__link" href={selected.href}>SEE FULL DETAILS <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </dialog>}
  </>;
}
