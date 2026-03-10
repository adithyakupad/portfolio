"use client";
import FadeIn from "@/components/ui/FadeIn";
import { experience } from "@/lib/data";

const typeColors: Record<string, string> = {
  Research: "text-[#7cb8e8] bg-[rgba(124,184,232,0.08)] border-[rgba(124,184,232,0.2)]",
  Leadership: "text-[var(--red)] bg-[var(--red-soft)] border-[var(--red-border)]",
  Academic: "text-[#a8e8a0] bg-[rgba(168,232,160,0.08)] border-[rgba(168,232,160,0.2)]",
  Service: "text-[#e8c87c] bg-[rgba(232,200,124,0.08)] border-[rgba(232,200,124,0.2)]",
  Personal: "text-[var(--text-2)] bg-[rgba(255,255,255,0.04)] border-[var(--border)]",
};

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="eyebrow">Experience</span>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-[var(--text-1)] mb-12">Where I&apos;ve worked.</h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />

          <div className="space-y-4">
            {experience.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.06}>
                <div className="flex gap-6 items-start">
                  {/* Dot */}
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-[var(--bg-2)] border border-[var(--border)] items-center justify-center flex-shrink-0 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-[var(--red)] opacity-70" />
                  </div>
                  {/* Card */}
                  <div className="flex-1 glass rounded-2xl p-5 border border-[var(--glass-border)] hover:border-[rgba(255,255,255,0.12)] transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-sm font-semibold text-[var(--text-1)]">{item.role}</h3>
                        <p className="text-xs text-[var(--text-3)] font-mono mt-0.5">{item.org}</p>
                      </div>
                      <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border tracking-wide ${typeColors[item.type] || typeColors.Personal}`}>
                        {item.type}
                      </span>
                    </div>
                    <p className="text-sm font-light text-[var(--text-2)] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
