import Link from "next/link";
import { site, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer" id="contact" data-nav-theme="dark">
      <div className="frame site-footer__top">
        <div>
          <p className="micro">CONTACT / ATLANTA</p>
          <h2>Have a question<br />worth building around?</h2>
          <a className="site-footer__email" href={`mailto:${site.email}`}>
            {site.email}<span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="site-footer__links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>
              {link.label}<span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
      <div className="frame site-footer__bottom">
        <Link href="/" aria-label="Back to homepage">AU<span>.</span></Link>
        <span>Adithya Upadhyayula · Atlanta, GA</span>
        <span>2026</span>
      </div>
    </footer>
  );
}
