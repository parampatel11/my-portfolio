"use client";

import { motion } from "framer-motion";
import { 
  Brain, Box, Server, Database, Cloud, 
  Code2, Layers, Wind, Workflow, Zap 
} from "lucide-react";

export default function FloatingBackground() {
  // Sizes reduced for a more elegant, subtle look
  const floatingIcons = [
    { Icon: Code2, color: "text-blue-500", size: 30, startX: "10vw", startY: "20vh", duration: 25 },
    { Icon: Server, color: "text-green-500", size: 35, startX: "80vw", startY: "15vh", duration: 35 },
    { Icon: Cloud, color: "text-orange-500", size: 40, startX: "25vw", startY: "70vh", duration: 30 },
    { Icon: Database, color: "text-green-400", size: 32, startX: "70vw", startY: "80vh", duration: 28 },
    { Icon: Brain, color: "text-purple-500", size: 38, startX: "50vw", startY: "40vh", duration: 40 },
    { Icon: Box, color: "text-white", size: 28, startX: "15vw", startY: "85vh", duration: 22 },
    { Icon: Layers, color: "text-indigo-400", size: 30, startX: "85vw", startY: "50vh", duration: 32 },
    { Icon: Wind, color: "text-cyan-400", size: 35, startX: "40vw", startY: "10vh", duration: 26 },
    { Icon: Workflow, color: "text-orange-400", size: 35, startX: "5vw", startY: "55vh", duration: 38 },
    { Icon: Zap, color: "text-red-500", size: 28, startX: "60vw", startY: "90vh", duration: 24 },
  ];

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[#0a0a0a]">
      
      {/* Ambient glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] h-[40vw] w-[40vw] rounded-full bg-green-500/5 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[40vw] w-[40vw] rounded-full bg-yellow-500/5 blur-[120px]" />

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => {
        const { Icon, color, size, startX, startY, duration } = item;
        
        return (
          <motion.div
            key={index}
            // Opacity increased slightly so they are crisp. 
            // The transparent cards in the foreground will organically blur them as they pass behind!
            className={`absolute ${color} opacity-35`}
            style={{ left: startX, top: startY }}
            animate={{
              y: [0, -100, 100, 0],
              x: [0, 50, -50, 0],
              rotate: [0, 90, -90, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon size={size} />
          </motion.div>
        );
      })}
    </div>
  );
}