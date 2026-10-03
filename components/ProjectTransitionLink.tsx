"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type MouseEvent, type ReactNode } from "react";

type Props = {
  href: string;
  slug: string;
  className: string;
  ariaLabel: string;
  children: ReactNode;
};

export function ProjectTransitionLink({ href, slug, className, ariaLabel, children }: Props) {
  const router = useRouter();

  const open = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
      event.shiftKey || event.altKey || window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;
    event.preventDefault();

    const link = event.currentTarget;
    const rect = link.getBoundingClientRect();
    const overlay = document.createElement("div");
    overlay.className = "case-transition";
    overlay.setAttribute("aria-hidden", "true");
    overlay.style.left = `${rect.left}px`;
    overlay.style.top = `${rect.top}px`;
    overlay.style.width = `${rect.width}px`;
    overlay.style.height = `${rect.height}px`;
    const tile = link.cloneNode(true) as HTMLElement;
    tile.removeAttribute("href");
    tile.removeAttribute("aria-label");
    tile.tabIndex = -1;
    tile.classList.add("case-transition__tile");
    overlay.appendChild(tile);
    document.body.appendChild(overlay);

    const animation = overlay.animate(
      [
        { left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`, borderRadius: "1.55rem" },
        { left: "0px", top: "0px", width: `${window.innerWidth}px`, height: `${window.innerHeight}px`, borderRadius: "0px" },
      ],
      { duration: 620, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" },
    );

    void animation.finished.then(async () => {
      overlay.style.left = "0px";
      overlay.style.top = "0px";
      overlay.style.width = "100vw";
      overlay.style.height = "100dvh";
      overlay.style.borderRadius = "0";
      animation.cancel();

      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      const arrival = new Promise<void>((resolve) => {
        const matches = () => document.querySelector(`.detail-hero[data-project="${slug}"]`);
        if (matches()) { resolve(); return; }
        const observer = new MutationObserver(() => {
          if (!matches()) return;
          observer.disconnect();
          window.clearTimeout(timeout);
          resolve();
        });
        observer.observe(document.getElementById("main-content") ?? document.body, { childList: true, subtree: true });
        const timeout = window.setTimeout(() => { observer.disconnect(); resolve(); }, 4000);
      });
      router.push(href);
      await arrival;
      window.scrollTo(0, 0);
      const fade = overlay.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 390, easing: "ease-out", fill: "forwards" });
      await fade.finished.catch(() => undefined);
      overlay.remove();
      root.style.scrollBehavior = previousScrollBehavior;
      document.querySelector<HTMLElement>(`.detail-hero[data-project="${slug}"] h1`)?.focus({ preventScroll: true });
    }).catch(() => {
      overlay.remove();
      router.push(href);
    });
  };

  return <Link href={href} className={className} aria-label={ariaLabel} onClick={open}>{children}</Link>;
}
