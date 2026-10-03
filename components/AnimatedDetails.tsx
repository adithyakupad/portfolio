"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef, type MouseEvent, type ReactNode } from "react";

type Props = Omit<ComponentPropsWithoutRef<"details">, "children"> & {
  summary: ReactNode;
  contentClassName?: string;
  children: ReactNode;
};

export function AnimatedDetails({ summary, contentClassName = "", children, ...props }: Props) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const directionRef = useRef<"opening" | "closing" | null>(null);

  useEffect(() => () => animationRef.current?.cancel(), []);

  const toggle = (event: MouseEvent<HTMLDetailsElement>) => {
    const details = detailsRef.current;
    const target = event.target;
    if (!details || !(target instanceof Node) || !details.querySelector(":scope > summary")?.contains(target)) return;
    event.preventDefault();

    const content = details.querySelector<HTMLElement>(":scope > .animated-details__content");
    if (!content) { details.open = !details.open; return; }
    const opening = directionRef.current === "closing" || (!details.open && directionRef.current !== "opening");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animationRef.current?.cancel();
      animationRef.current = null;
      directionRef.current = null;
      delete details.dataset.disclosureState;
      details.open = opening;
      return;
    }

    const startHeight = content.getBoundingClientRect().height;
    animationRef.current?.cancel();
    if (opening) details.open = true;
    directionRef.current = opening ? "opening" : "closing";
    details.dataset.disclosureState = directionRef.current;
    const endHeight = opening ? content.scrollHeight : 0;
    content.style.overflow = "hidden";
    const animation = content.animate(
      [
        { height: `${startHeight}px`, opacity: opening ? 0 : 1, transform: opening ? "translateY(-8px)" : "translateY(0)" },
        { height: `${endHeight}px`, opacity: opening ? 1 : 0, transform: opening ? "translateY(0)" : "translateY(-8px)" },
      ],
      { duration: opening ? 460 : 330, easing: "cubic-bezier(.22,1,.36,1)", fill: "both" },
    );
    animationRef.current = animation;
    animation.onfinish = () => {
      if (animationRef.current !== animation) return;
      details.open = opening;
      directionRef.current = null;
      delete details.dataset.disclosureState;
      content.style.removeProperty("overflow");
      animation.cancel();
      animationRef.current = null;
    };
  };

  return (
    <details {...props} ref={detailsRef} onClick={toggle}>
      <summary>{summary}</summary>
      <div className={`animated-details__content ${contentClassName}`}>{children}</div>
    </details>
  );
}
