"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduceMotion = motionPreference.matches;
    let frame = 0;
    const previous = new WeakMap<HTMLElement, { x: number; y: number }>();

    const updateParallax = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const scale = window.innerWidth < 700 ? .38 : 1;
      const updates: { element: HTMLElement; x: number; y: number }[] = [];

      // Read geometry first, then write CSS variables to avoid repeated layout work.
      for (const element of parallaxElements) {
        const last = previous.get(element) ?? { x: 0, y: 0 };
        if (motionPreference.matches) {
          updates.push({ element, x: 0, y: 0 });
          continue;
        }
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -viewportHeight || rect.top > viewportHeight * 2) continue;
        const center = rect.top - last.y + rect.height / 2;
        const distance = Math.max(-1.5, Math.min(1.5, (center - viewportHeight / 2) / viewportHeight));
        const shift = -distance * Number(element.dataset.parallaxSpeed ?? 60) * scale;
        updates.push({ element, x: element.dataset.parallaxAxis === "x" ? shift : 0, y: element.dataset.parallaxAxis === "x" ? 0 : shift });
      }
      for (const { element, x, y } of updates) {
        previous.set(element, { x, y });
        element.style.setProperty("--parallax-x", `${x.toFixed(1)}px`);
        element.style.setProperty("--parallax-y", `${y.toFixed(1)}px`);
      }
    };
    const scheduleParallax = () => { if (!frame) frame = requestAnimationFrame(updateParallax); };
    const onPreferenceChange = () => {
      if (motionPreference.matches) elements.forEach((element) => { element.dataset.revealState = "visible"; });
      scheduleParallax();
    };
    scheduleParallax();
    window.addEventListener("scroll", scheduleParallax, { passive: true });
    window.addEventListener("resize", scheduleParallax);
    motionPreference.addEventListener("change", onPreferenceChange);

    let observer: IntersectionObserver | null = null;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => { element.dataset.revealState = "visible"; });
    } else {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.revealState = "visible";
          observer?.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.04 });

      elements.forEach((element) => {
        // Initial and deep-linked content stays visible while the page hydrates.
        const top = element.getBoundingClientRect().top;
        element.dataset.revealState = top > window.innerHeight * 0.92 ? "pending" : "visible";
        if (top > window.innerHeight * 0.92) observer?.observe(element);
      });
    }

    const updateVisibility = () => {
      document.documentElement.dataset.motionVisibility = document.hidden ? "hidden" : "visible";
    };
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
      window.removeEventListener("scroll", scheduleParallax);
      window.removeEventListener("resize", scheduleParallax);
      motionPreference.removeEventListener("change", onPreferenceChange);
      cancelAnimationFrame(frame);
      elements.forEach((element) => { if (element.dataset.revealState === "pending") element.dataset.revealState = "visible"; });
    };
  }, [pathname]);

  return null;
}
