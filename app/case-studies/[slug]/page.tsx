import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { getProject } from "@/data/projects";
type Props = { params: Promise<{slug: string}> };
export default async function LegacyCaseStudy({ params }: Props) { const {slug}=await params; if (!getProject(slug)) notFound(); redirect(`/work/${slug}`); }
