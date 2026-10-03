"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    const tiles = Array.from(document.querySelectorAll<HTMLElement>(".orbit-tile"));
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".orbit-tile, .home-focus__content"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !window.IntersectionObserver) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.motion = "visible";
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.13, rootMargin: "0px 0px -30px 0px" });

    const cleanups: Array<() => void> = [];
    reveals.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight * 0.95) {
        element.dataset.motion = "pending";
        observer.observe(element);
      }
    });
    tiles.forEach((tile) => {
      if (!window.matchMedia("(hover: hover)").matches) return;
      let frame = 0;
      const move = (event: PointerEvent) => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = tile.getBoundingClientRect();
          tile.style.setProperty("--tile-x", `${event.clientX - rect.left}px`);
          tile.style.setProperty("--tile-y", `${event.clientY - rect.top}px`);
        });
      };
      const leave = () => {
        cancelAnimationFrame(frame);
        tile.style.setProperty("--tile-x", "50%");
        tile.style.setProperty("--tile-y", "50%");
      };
      tile.addEventListener("pointermove", move);
      tile.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        cancelAnimationFrame(frame);
        tile.removeEventListener("pointermove", move);
        tile.removeEventListener("pointerleave", leave);
      });
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
