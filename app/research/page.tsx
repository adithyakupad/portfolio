import type { Metadata } from "next";
import { HomeResearch } from "@/components/HomeResearch";
import { cardiovascularResearch } from "@/data/research";
export const metadata: Metadata = { title: "Research", description: cardiovascularResearch.description };
export default function ResearchPage() { return <main className="standalone-section"><HomeResearch /></main>; }
