"use client";
import { Github, Mail, FileText } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { siteData } from "@/lib/data";

export default function QuickProfile() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-1)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <FadeIn>
          <div className="grid lg:grid-cols-[1fr_200px] gap-8 items-start">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-3)] mb-3">Quick Profile</p>
              <p className="text-[var(--text-2)] font-light leading-relaxed text-sm max-w-2xl">
                {siteData.quickBio}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-3)] mb-1">Links</p>
              <a href={siteData.resume} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--red)] text-white text-xs font-medium hover:bg-[#a01528] transition-all justify-center">
                <FileText size={12} /> Resume
              </a>
              <a href={siteData.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg glass border border-[var(--glass-border)] text-[var(--text-2)] hover:text-[var(--text-1)] text-xs transition-all justify-center">
                <Github size={12} /> GitHub
              </a>
              <a href={`mailto:${siteData.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg glass border border-[var(--glass-border)] text-[var(--text-2)] hover:text-[var(--text-1)] text-xs transition-all justify-center">
                <Mail size={12} /> Email
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
