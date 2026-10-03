"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Parallax({ children, distance = 32, axis = "y", className }: {
  children: ReactNode;
  distance?: number;
  axis?: "x" | "y";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const position = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const reduceMotion = useReducedMotion();

  return <motion.div ref={ref} className={className} style={reduceMotion ? undefined : axis === "x" ? { x: position } : { y: position }}>{children}</motion.div>;
}
