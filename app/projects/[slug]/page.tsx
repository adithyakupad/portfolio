import { notFound, redirect } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export default async function LegacyProjectRoute({ params }: Props) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();
  redirect(`/case-studies/${slug}`);
}
