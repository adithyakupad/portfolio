"use client";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { awards } from "@/lib/data";

export default function Awards() {
  return (
    <section id="awards" className="section border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <span className="eyebrow">Recognition</span>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-[var(--text-1)] mb-12">Awards & honors.</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((a, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
                className="group glass rounded-2xl p-5 border border-[var(--glass-border)] hover:border-[var(--red-border)] transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[var(--red-soft)] border border-[var(--red-border)] flex items-center justify-center flex-shrink-0">
                    <Trophy size={12} className="text-[var(--red)] opacity-80" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text-1)] mb-1">{a.title}</h3>
                    <p className="font-mono text-[10px] text-[var(--red)] opacity-70 mb-1.5 tracking-wide">{a.org}</p>
                    <p className="text-xs font-light text-[var(--text-3)] leading-relaxed">{a.detail}</p>
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
