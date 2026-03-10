"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { research } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="section border-t border-[var(--border)]">
      <div className="relative">
        <div className="glow-red w-[600px] h-[300px] top-0 left-1/2 -translate-x-1/2" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="eyebrow">Research</span>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-[var(--text-1)] mb-3">
            The scientific questions.
          </h2>
          <p className="text-[var(--text-2)] font-light max-w-lg mb-14">
            I&apos;m interested in how biological systems fail in ways that are detectable earlier than we currently detect them. These are the two threads I&apos;m actively pulling on.
          </p>
        </FadeIn>

        <div className="space-y-6">
          {research.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.1}>
              <div className="rounded-3xl border border-[var(--glass-border)] overflow-hidden bg-[rgba(255,255,255,0.02)]">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(191,26,47,0.5)] to-transparent" />
                <div className="grid lg:grid-cols-[1fr_320px] gap-0">
                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-7 h-7 rounded-lg bg-[var(--red-soft)] border border-[var(--red-border)] flex items-center justify-center font-mono text-xs text-[var(--red)]">
                        {item.label}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-medium text-[var(--text-1)]">{item.title}</h3>
                        <p className="text-xs font-mono text-[var(--text-3)] mt-0.5">{item.org}</p>
                      </div>
                    </div>

                    <div className="mb-4 p-4 rounded-xl bg-[rgba(191,26,47,0.05)] border border-[var(--red-border)]">
                      <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--red)] opacity-70 mb-1">Core Question</p>
                      <p className="text-sm italic text-[var(--text-1)] font-light">{item.question}</p>
                    </div>

                    <p className="text-sm font-light text-[var(--text-2)] leading-relaxed mb-5">{item.body}</p>

                    <ul className="space-y-2">
                      {item.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[var(--red)] flex-shrink-0 opacity-70" />
                          <span className="text-sm font-light text-[var(--text-2)]">{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {item.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="lg:border-l border-[var(--border)]">
                    <div className="h-full min-h-[240px] img-placeholder relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent lg:bg-gradient-to-r" />
                      <span className="absolute bottom-3 left-3 font-mono text-[10px] text-[var(--text-3)] z-10">{item.image.split("/").pop()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
