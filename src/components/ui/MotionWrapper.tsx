"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

// 1. Extend HTMLMotionProps to include all standard framer-motion props
// along with your custom delay and duration props.
interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function MotionWrapper({ 
  children, 
  className, 
  delay, 
  duration, 
  ...props // 2. Collect the rest of the props (initial, whileInView, etc.)
}: MotionWrapperProps) {
  return (
    <motion.div 
      className={className} 
      {...props} // 3. Spread them onto the motion.div
    >
      {children}
    </motion.div>
  );
}