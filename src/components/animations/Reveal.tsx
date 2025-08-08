import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Delay in seconds */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** Initial vertical offset in pixels */
  y?: number;
  /** Whether the animation should only play once when coming into view */
  once?: boolean;
  className?: string;
};

/**
 * Simple fade-and-rise reveal animation that plays when the element enters the viewport.
 * Respects the user's reduced motion preference by disabling motion.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  y = 24,
  once = true,
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
