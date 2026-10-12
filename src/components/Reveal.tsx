import { m, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";
import { motionEase, motionTime, revealVariants, type RevealEffect } from "../motionSystem";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  effect?: RevealEffect;
}

export default function Reveal({ children, className = "", delayMs = 0, effect = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08, margin: "0px 0px -8% 0px" });
  const reducedMotion = useReducedMotion();
  const visible = Boolean(isInView || reducedMotion);
  const variants = reducedMotion
    ? { hidden: { opacity: 1, x: 0, y: 0, scale: 1 }, visible: { opacity: 1, x: 0, y: 0, scale: 1 } }
    : revealVariants(effect);

  return (
    <m.div
      ref={ref}
      className={className.trim()}
      variants={variants}
      initial={reducedMotion ? false : "hidden"}
      animate={visible ? "visible" : "hidden"}
      transition={{ duration: reducedMotion ? 0 : motionTime.standard, delay: reducedMotion ? 0 : delayMs / 1000, ease: motionEase }}
    >
      {children}
    </m.div>
  );
}
