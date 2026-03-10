"use client";
import FadeIn from "@/components/ui/FadeIn";
import { Music } from "lucide-react";

export default function Personal() {
  return (
    <section className="section border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="eyebrow">Personal</span>
            <h2 className="font-display text-4xl lg:text-5xl font-medium text-[var(--text-1)] mb-5">
              Outside the lab,<br />
              <span className="italic font-normal text-[var(--text-2)]">I make music.</span>
            </h2>
            <p className="text-[var(--text-2)] font-light leading-relaxed mb-6">
              Outside of research, music has been a big part of my life. I&apos;ve trained in Carnatic music for over a decade and earned a diploma from the University of Silicon Andhra. I&apos;ve also stayed involved in violin and orchestral performance.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Carnatic Vocals", "10+ Years Training", "USiA Diploma", "Violin", "Orchestral Performance"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl img-placeholder border border-[var(--glass-border)] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/music.jpg"
                  alt="Music"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[var(--red-soft)] border border-[var(--red-border)] flex items-center justify-center">
                    <Music size={13} className="text-[var(--red)]" />
                  </div>
                  <span className="text-xs font-mono text-[var(--text-2)]">music.jpg</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
