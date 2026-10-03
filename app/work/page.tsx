import type { Metadata } from "next";
import { ProjectCorridor } from "@/components/ProjectCorridor";
export const metadata: Metadata = { title: "Projects" };
export default function WorkPage() { return <main className="standalone-section"><ProjectCorridor /></main>; }
