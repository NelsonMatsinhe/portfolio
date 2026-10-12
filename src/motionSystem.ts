import type { Variants } from "motion/react";

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionTime = {
  quick: 0.2,
  standard: 0.48,
  entrance: 0.68,
} as const;

export type RevealEffect = "up" | "left" | "right" | "scale";

export function revealVariants(effect: RevealEffect = "up"): Variants {
  const from = {
    up: { y: 22 },
    left: { x: -24 },
    right: { x: 24 },
    scale: { scale: 0.96, y: 10 },
  }[effect];

  return {
    hidden: { opacity: 0, ...from },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: motionTime.standard, ease: motionEase },
    },
  };
}

export const hoverFrameVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.55, ease: motionEase } },
};

export const projectFrameVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -5, transition: { duration: motionTime.quick, ease: motionEase } },
};
