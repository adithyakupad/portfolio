"use client";

import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { motionTiming, revealVariants, staggerVariants } from "@/lib/motion";
import { cx } from "@/lib/utils";

type Props = {
  children: ReactNode;
  kind?: "fade" | "rise" | "mask";
  stagger?: boolean;
  className?: string;
  once?: boolean;
};

export function Reveal({ children, kind = "rise", stagger = false, className, once = true }: Props) {
  const reduceMotion = useReducedMotion();
  const viewport: MotionProps["viewport"] = { once, amount: 0.2 };
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={cx("reveal", className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger ? staggerVariants : revealVariants[kind]}
      transition={{ duration: motionTiming.medium }}
    >{children}</motion.div>
  );
}

export function RevealItem({ children, kind = "rise", className }: Omit<Props, "stagger" | "once">) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return <motion.div className={className} variants={revealVariants[kind]}>{children}</motion.div>;
}
