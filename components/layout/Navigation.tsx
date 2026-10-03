"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LiquidGlass } from "@/components/glass/LiquidGlass";

const links = [
  { href: "/work", label: "WORK" },
  { href: "/research", label: "RESEARCH" },
  { href: "/lab", label: "LAB" },
  { href: "/about", label: "ABOUT" },
];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const tone = pathname === "/research" ? "red" : pathname.startsWith("/work") ? "dark" : "light";

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="site-nav-wrap">
        <LiquidGlass tone={tone} className="site-nav">
          <Link className="site-nav__mark" href="/" aria-label="Adithya Upadhyayula, home" onClick={() => setMenuOpen(false)}>AU<span>.</span></Link>
          <div className="site-nav__links">
            {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
          </div>
          <a className="site-nav__contact" href="mailto:aupadhyayula6@gatech.edu">CONTACT ↗</a>
          <button className="site-nav__menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((current) => !current)}>{menuOpen ? "CLOSE" : "MENU"}</button>
        </LiquidGlass>
        {menuOpen && <LiquidGlass tone={tone} className="site-nav__mobile" >
          <div id="mobile-navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}<a href="mailto:aupadhyayula6@gatech.edu" onClick={() => setMenuOpen(false)}>CONTACT ↗</a></div>
        </LiquidGlass>}
      </nav>
    </header>
  );
}
