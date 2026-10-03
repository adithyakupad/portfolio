"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="site-nav__mark" href="/" onClick={() => setOpen(false)} aria-label="Adithya Upadhyayula, home">
          AU<span className="site-nav__mark-dot">.</span>
        </Link>
        <div className="site-nav__links">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="site-nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
          <span className="site-nav__toggle-icon" aria-hidden="true">{open ? "×" : "+"}</span>
        </button>
      </nav>
      <div className={`mobile-navigation ${open ? "mobile-navigation--open" : ""}`} id="mobile-navigation" inert={!open}>
        {links.map((link, index) => (
          <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>
            <span className="micro">{String(index + 1).padStart(2, "0")}</span>
            {link.label}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </header>
  );
}
