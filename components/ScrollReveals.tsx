"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => { element.dataset.revealState = "visible"; });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.revealState = "visible";
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.04 });

    elements.forEach((element) => {
      // Initial and deep-linked content stays visible while the page hydrates.
      const top = element.getBoundingClientRect().top;
      element.dataset.revealState = top > window.innerHeight * 0.92 ? "pending" : "visible";
      if (top > window.innerHeight * 0.92) observer.observe(element);
    });

    const updateVisibility = () => {
      document.documentElement.dataset.motionVisibility = document.hidden ? "hidden" : "visible";
    };
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
      elements.forEach((element) => { if (element.dataset.revealState === "pending") element.dataset.revealState = "visible"; });
    };
  }, [pathname]);

  return null;
}
