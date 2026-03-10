"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteData } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`transition-all duration-400 ${
            scrolled
              ? "bg-[rgba(10,10,11,0.88)] backdrop-blur-2xl border-b border-[var(--border)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
              : "bg-transparent"
          }`}
        >
          <nav className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
            <a
              href="#home"
              className="font-display text-xl font-medium text-[var(--text-1)] hover:text-white transition-colors"
            >
              Adithya<span className="text-[var(--red)]">.</span>
            </a>

            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href === siteData.resume ? "_blank" : undefined}
                  rel={link.href === siteData.resume ? "noopener noreferrer" : undefined}
                  className="px-3 py-1.5 text-sm font-light text-[var(--text-2)] hover:text-[var(--text-1)] rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-[var(--text-2)] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-lg" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              className="absolute top-[72px] left-4 right-4 rounded-2xl bg-[var(--bg-2)] border border-[var(--border)] p-4 shadow-2xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-light text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.05)] rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
