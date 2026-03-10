"use client";
import FadeIn from "@/components/ui/FadeIn";

export default function Reflection() {
  return (
    <section id="reflection" className="section border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[280px_1fr] gap-16">
          <FadeIn>
            <span className="eyebrow">Reflection</span>
            <h2 className="font-display text-4xl lg:text-5xl font-medium text-[var(--text-1)]">
              Why this<br />
              <span className="italic font-normal text-[var(--text-2)]">matters to me.</span>
            </h2>
          </FadeIn>

          <div className="space-y-5">
            <FadeIn delay={0.1}>
              <p className="text-[var(--text-2)] text-lg font-light leading-relaxed">
                A lot of my interest in medicine started with a simple question: why do some diseases progress silently until it&apos;s too late to intervene?
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-[var(--text-2)] text-lg font-light leading-relaxed">
                After my uncle&apos;s heart attack, I started thinking much more seriously about timing and risk in healthcare. What stayed with me was the realization that by the time a patient reaches the hospital, the disease process may have already been unfolding for years.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[var(--text-2)] text-lg font-light leading-relaxed">
                That experience pushed me toward research. I became interested in how we detect disease earlier, how biological signals emerge before symptoms appear, and why systems sometimes act too late even when those signals exist.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-[var(--text-2)] text-lg font-light leading-relaxed">
                Working on community projects added another layer to that perspective. Through Medipolitan, I learned that health access depends not only on good ideas but also on affordability, logistics, and implementation.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
