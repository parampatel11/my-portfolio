"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedCounter({ target }: { target: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    // Locks the animation to exactly 2 seconds, adjusting speed based on the target number
    const animation = animate(count, target, {
      duration: 2,
      ease: "easeOut",
    });

    return animation.stop;
  }, [count, target]);

  return <motion.span>{rounded}</motion.span>;
}