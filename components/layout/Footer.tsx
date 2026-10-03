import Link from "next/link";
import { site, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="editorial-container site-footer__inner">
        <div><Link href="/">{site.displayName}</Link><p>{site.location}</p></div>
        <div className="site-footer__links">{socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>{link.label}</a>)}</div>
        <span className="type-meta">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
