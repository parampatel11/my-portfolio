"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MotionWrapper({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.6 
}: { 
  children: ReactNode; 
  className?: string; 
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}