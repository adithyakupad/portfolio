import type { Project } from "@/data/projects";
import { RadiomicsVisual } from "@/components/visuals/RadiomicsVisual";
import { SignalVisual } from "@/components/visuals/SignalVisual";
import { TrackingVisual } from "@/components/visuals/TrackingVisual";

export function ProjectVisual({ visual, title }: Pick<Project, "visual" | "title">) {
  if (visual === "signal") return <SignalVisual />;
  if (visual === "tracking") return <TrackingVisual />;
  if (visual === "radiomics") return <RadiomicsVisual />;
  return <div className="visual visual--typographic" role="img" aria-label={`Typographic placeholder for ${title}; project media has not been added`}><span>{title}</span><small>MEDIA PENDING</small></div>;
}
