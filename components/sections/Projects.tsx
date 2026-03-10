"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="eyebrow">Projects</span>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-[var(--text-1)] mb-3">What I&apos;ve built.</h2>
          <p className="text-[var(--text-2)] font-light max-w-lg mb-12">
            The technical implementation side of my research — pipelines, analysis scripts, and operational systems.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.22 }}
                className="group glass rounded-2xl overflow-hidden border border-[var(--glass-border)] hover:border-[rgba(255,255,255,0.13)] transition-all h-full flex flex-col"
              >
                {/* Image */}
                <div className="aspect-video img-placeholder relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-2)] to-transparent" />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-[var(--text-1)] mb-0.5">{p.title}</h3>
                  <p className="text-xs font-mono text-[var(--red)] opacity-70 mb-3">{p.subtitle}</p>
                  <p className="text-xs font-light text-[var(--text-2)] leading-relaxed mb-4">{p.description}</p>

                  <ul className="space-y-1.5 mb-4 flex-1">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 size={11} className="text-[var(--red)] mt-0.5 flex-shrink-0 opacity-60" />
                        <span className="text-xs font-light text-[var(--text-2)]">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
