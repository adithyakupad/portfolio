"use client";
import { motion } from "framer-motion";
import { Microscope, Terminal, Heart, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { lanes } from "@/lib/data";

const icons: Record<string, React.ElementType> = { Microscope, Terminal, Heart };

export default function Lanes() {
  return (
    <section className="section border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="eyebrow">What I Do</span>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-[var(--text-1)] mb-3">Three areas of work.</h2>
          <p className="text-[var(--text-2)] font-light max-w-lg mb-12">
            Each lane is a distinct mode of contribution. All three point toward the same question: how do we make healthcare better at finding and fixing problems early?
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-4">
          {lanes.map((lane, i) => {
            const Icon = icons[lane.icon] || Microscope;
            return (
              <FadeIn key={lane.id} delay={i * 0.1}>
                <motion.a
                  href={lane.anchor}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.22 }}
                  className="group block glass rounded-2xl p-6 h-full border border-[var(--glass-border)] hover:border-[var(--red-border)] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-[var(--red-soft)] border border-[var(--red-border)] flex items-center justify-center mb-4 group-hover:bg-[rgba(191,26,47,0.18)] transition-colors">
                    <Icon size={16} className="text-[var(--red)]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--text-1)] mb-2">{lane.title}</h3>
                  <p className="text-sm font-light text-[var(--text-2)] leading-relaxed mb-4">{lane.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {lane.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-[var(--text-3)] group-hover:text-[var(--red)] transition-colors">
                    See more <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
