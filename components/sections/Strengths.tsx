"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { strengths } from "@/lib/data";

export default function Strengths() {
  return (
    <section id="strengths" className="section border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="eyebrow">CliftonStrengths</span>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-[var(--text-1)] mb-3">My Top 5 Strengths.</h2>
          <p className="text-[var(--text-2)] font-light max-w-xl mb-12">
            I did Strengths training and found these five things that really shape how I work and learn. They&apos;ve helped me understand myself better and see what I naturally lean toward — especially in research, leadership, and building.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {strengths.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.08}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
                className="glass rounded-2xl p-5 h-full border border-[var(--glass-border)] hover:border-[var(--red-border)] transition-all">
                <span className="font-mono text-[10px] text-[var(--red)] opacity-50 mb-2 block">0{i + 1}</span>
                <h3 className="text-sm font-semibold text-[var(--text-1)] mb-2">{s.name}</h3>
                <p className="text-xs italic text-[var(--text-2)] font-light mb-3 leading-relaxed">&ldquo;{s.tagline}&rdquo;</p>
                <div className="pt-3 border-t border-[var(--border)]">
                  <p className="font-mono text-[10px] text-[var(--red)] opacity-60 uppercase tracking-wider mb-1.5">How it relates to me</p>
                  <p className="text-xs font-light text-[var(--text-2)] leading-relaxed">{s.reflection}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
