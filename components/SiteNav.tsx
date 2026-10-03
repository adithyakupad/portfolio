"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Research", href: "/research" },
  { label: "Lab", href: "/lab" },
  { label: "About", href: "/about" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const sections = document.querySelectorAll<HTMLElement>("[data-nav-theme]");
        let current: "dark" | "light" = "dark";
        for (const section of sections) {
          const box = section.getBoundingClientRect();
          if (box.top <= 76) current = section.dataset.navTheme === "light" ? "light" : "dark";
        }
        setTheme(current);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return <header className="site-header" data-theme={theme}>
    <nav className="site-nav liquid-surface" aria-label="Primary navigation" onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`); }}>
      <Link className="site-nav__mark" href="/" onClick={() => setOpen(false)} aria-label="Adithya Upadhyayula, home">AU<span className="site-nav__mark-dot">.</span></Link>
      <div className="site-nav__links">{links.map((link) => <Link key={link.label} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}</div>
      <a className="site-nav__contact" href="mailto:aupadhyayula6@gatech.edu">CONTACT ↗</a>
      <button className="site-nav__toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}<span className="site-nav__toggle-icon" aria-hidden="true">{open ? "×" : "+"}</span></button>
    </nav>
    <div className={`mobile-navigation liquid-surface ${open ? "mobile-navigation--open" : ""}`} id="mobile-navigation" inert={!open}>
      {links.map((link, index) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)}><span className="micro">{String(index + 1).padStart(2, "0")}</span>{link.label}<span aria-hidden="true">↗</span></Link>)}
      <a href="mailto:aupadhyayula6@gatech.edu" onClick={() => setOpen(false)}><span className="micro">05</span>Contact<span aria-hidden="true">↗</span></a>
    </div>
  </header>;
}
