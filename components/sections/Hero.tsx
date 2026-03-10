"use client";
import { motion } from "framer-motion";
import { ArrowDown, FileText, ChevronRight } from "lucide-react";
import { siteData } from "@/lib/data";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="glow-red w-[700px] h-[500px] top-1/4 left-1/4" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)", backgroundSize: "80px 80px" }}
      />
      <div className="relative max-w-6xl mx-auto px-6 w-full pt-36 pb-28">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.span variants={item} className="eyebrow">
              Student Researcher · Builder · Community Founder
            </motion.span>
            <motion.h1 variants={item} className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-[var(--text-1)] leading-[1.08] mb-5">
              Hi, I&apos;m<br />
              <span className="italic font-normal text-[var(--text-2)]">Adithya.</span>
            </motion.h1>
            <motion.p variants={item} className="text-[var(--text-2)] text-base font-light max-w-lg leading-relaxed mb-4">
              {siteData.heroText}
            </motion.p>
            <motion.p variants={item} className="text-[var(--text-2)] text-base font-light max-w-lg leading-relaxed mb-10">
              {siteData.heroVision}
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a href={siteData.resume} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--red)] text-white text-sm font-medium hover:bg-[#a01528] transition-all hover:shadow-[0_4px_20px_rgba(191,26,47,0.4)]">
                <FileText size={14} />
                View Resume
              </a>
              <a href="#research"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-light border border-[var(--glass-border)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.16)] transition-all">
                Explore Work
                <ChevronRight size={14} className="opacity-60" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden img-placeholder border border-[var(--glass-border)]">
              <img
                src={siteData.profileImage}
                alt="Adithya Upadhyayula"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-display text-lg font-medium text-[var(--text-1)]">Adithya Upadhyayula</p>
                <p className="text-xs font-mono text-[var(--text-2)] mt-0.5">Northview HS · Class of 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--text-3)]"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}
