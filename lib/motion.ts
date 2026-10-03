import type { Variants } from "framer-motion";

export const motionTiming = {
  short: 0.3,
  medium: 0.62,
  long: 1.05,
  stagger: 0.09,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const revealVariants: Record<"fade" | "rise" | "mask", Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: motionTiming.medium, ease: motionTiming.ease } },
  },
  rise: {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: motionTiming.medium, ease: motionTiming.ease } },
  },
  mask: {
    hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)", y: 18 },
    visible: { opacity: 1, clipPath: "inset(0 0 0% 0)", y: 0, transition: { duration: motionTiming.long, ease: motionTiming.ease } },
  },
};

export const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: motionTiming.stagger } },
};

export const imageHover = { scale: 1.035, transition: { duration: motionTiming.medium, ease: motionTiming.ease } };
