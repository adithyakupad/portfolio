import { notFound, permanentRedirect } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export default async function LegacyCaseStudy({ params }: Props) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();
  permanentRedirect(`/work/${slug}`);
}
