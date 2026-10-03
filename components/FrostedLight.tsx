"use client";

import { useEffect } from "react";

export function FrostedLight() {
  useEffect(() => {
    let previous: HTMLElement | null = null;
    const move = (event: PointerEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-frost-light]")
        : null;
      if (previous && previous !== target) previous.style.removeProperty("--frost-presence");
      previous = target;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--frost-x", `${event.clientX - rect.left}px`);
      target.style.setProperty("--frost-y", `${event.clientY - rect.top}px`);
      target.style.setProperty("--frost-presence", "1");
    };
    const leave = () => {
      previous?.style.removeProperty("--frost-presence");
      previous = null;
    };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return null;
}
