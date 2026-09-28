"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedCounter({ target }: { target: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  
  // Create a ref to track the element and check if it's in the viewport
  const ref = useRef(null);
  // once: true ensures it only animates the first time you scroll to it
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // Only start the animation if the element is in view
    if (isInView) {
      const animation = animate(count, target, {
        duration: 2,
        ease: "easeOut",
      });

      return animation.stop;
    }
  }, [count, target, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}