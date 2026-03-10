"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { siteData } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden border border-[var(--glass-border)] bg-[rgba(255,255,255,0.02)] p-10 lg:p-14 mb-14">
            <div className="glow-red w-[500px] h-[200px] bottom-0 left-1/2 -translate-x-1/2" />
            <div className="h-px w-full absolute top-0 left-0 bg-gradient-to-r from-transparent via-[rgba(191,26,47,0.5)] to-transparent" />

            <div className="max-w-lg">
              <span className="eyebrow">Contact</span>
              <h2 className="font-display text-4xl lg:text-5xl font-medium text-[var(--text-1)] mb-4">
                Let&apos;s connect.
              </h2>
              <p className="text-[var(--text-2)] font-light leading-relaxed mb-8">
                I&apos;m open to research conversations, collaboration, and opportunities in biomedical systems and health tech. Feel free to reach out directly.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={`mailto:${siteData.email}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--red)] text-white text-sm font-medium hover:bg-[#a01528] transition-colors hover:shadow-[0_4px_20px_rgba(191,26,47,0.4)]"
                >
                  <Mail size={14} />
                  {siteData.email}
                </motion.a>
                <a href={siteData.resume} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-[var(--glass-border)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.05)] transition-all">
                  <FileText size={14} /> Resume <ArrowUpRight size={12} className="opacity-50" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-display text-lg font-medium text-[var(--text-1)]">Adithya<span className="text-[var(--red)]">.</span></p>
              <p className="text-xs text-[var(--text-3)] mt-1">Building at the intersection of medicine, computation, and community.</p>
            </div>
            <div className="flex gap-2">
              {[
                { icon: Github, href: siteData.github, label: "GitHub" },
                { icon: Linkedin, href: siteData.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${siteData.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl glass border border-[var(--glass-border)] text-[var(--text-2)] hover:text-[var(--text-1)] hover:border-[rgba(255,255,255,0.15)] transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-[var(--border)]">
            <p className="text-xs text-[var(--text-3)]">© {new Date().getFullYear()} Adithya Upadhyayula. All rights reserved.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
