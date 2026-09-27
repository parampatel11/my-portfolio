"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, FileCode2, Code2, Wind, Box, Server, Settings, 
  Workflow, Database, HardDrive, Layers, Cloud, Zap, 
  FastForward, Repeat 
} from "lucide-react";

export default function Hero() {
  const titles = [
    "MERN Stack Developer", 
    "Full Stack Developer", 
    "Cloud Architect"
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(titleInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/1.png"; 
      link.download = "1.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 3000);
    return () => clearTimeout(timer); 
  }, []);

  const skills = [
    { name: "Gen AI", icon: <Brain size={16} />, color: "text-purple-400", border: "border-purple-500/30", hoverBg: "hover:bg-purple-500/10" },
    { name: "Javascript", icon: <FileCode2 size={16} />, color: "text-yellow-400", border: "border-yellow-400/30", hoverBg: "hover:bg-yellow-400/10" },
    { name: "React", icon: <Code2 size={16} />, color: "text-blue-400", border: "border-blue-400/30", hoverBg: "hover:bg-blue-400/10" },
    { name: "Next JS", icon: <Box size={16} />, color: "text-white", border: "border-gray-400/30", hoverBg: "hover:bg-gray-400/10" },
    { name: "Tailwind", icon: <Wind size={16} />, color: "text-cyan-400", border: "border-cyan-400/30", hoverBg: "hover:bg-cyan-400/10" },
    { name: "Node", icon: <Server size={16} />, color: "text-green-500", border: "border-green-500/30", hoverBg: "hover:bg-green-500/10" },
    { name: "Express", icon: <Settings size={16} />, color: "text-gray-300", border: "border-gray-500/30", hoverBg: "hover:bg-gray-500/10" },
    { name: "CI/CD", icon: <Workflow size={16} />, color: "text-orange-400", border: "border-orange-400/30", hoverBg: "hover:bg-orange-400/10" },
    { name: "MongoDB", icon: <Database size={16} />, color: "text-green-400", border: "border-green-400/30", hoverBg: "hover:bg-green-400/10" },
    { name: "Postgresql", icon: <HardDrive size={16} />, color: "text-blue-500", border: "border-blue-500/30", hoverBg: "hover:bg-blue-500/10" },
    { name: "ORM Prisma", icon: <Layers size={16} />, color: "text-indigo-400", border: "border-indigo-400/30", hoverBg: "hover:bg-indigo-400/10" },
    { name: "Docker", icon: <Box size={16} />, color: "text-blue-400", border: "border-blue-400/30", hoverBg: "hover:bg-blue-400/10" },
    { name: "AWS Cloud", icon: <Cloud size={16} />, color: "text-orange-500", border: "border-orange-500/30", hoverBg: "hover:bg-orange-500/10" },
    { name: "Redis", icon: <Zap size={16} />, color: "text-red-500", border: "border-red-500/30", hoverBg: "hover:bg-red-500/10" },
    { name: "Kafka", icon: <FastForward size={16} />, color: "text-gray-100", border: "border-gray-400/30", hoverBg: "hover:bg-gray-400/10" },
    { name: "RabitMQ", icon: <Repeat size={16} />, color: "text-orange-400", border: "border-orange-400/30", hoverBg: "hover:bg-orange-400/10" },
    { name: "BullMQ", icon: <Layers size={16} />, color: "text-red-400", border: "border-red-400/30", hoverBg: "hover:bg-red-400/10" },
  ];

  return (
    <section id="home" className="relative flex w-full flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-8 pt-10">
      
      {/* Left Content Area (Text & Skills) */}
      <motion.div 
        className="flex flex-1 flex-col items-start gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Availability Badge - Now with backdrop-blur */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-yellow-400 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Available for new opportunities
        </div>

        {/* Name & Animated Titles */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              Param Patel.
            </span>
          </h1>
          
          <div className="mt-2 flex h-10 items-center overflow-hidden md:h-12">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-2xl font-semibold text-gray-300 md:text-3xl"
              >
                {titles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Skill Buttons - UPGRADED TO PURE GLASSMORPHISM */}
        <div className="mt-4 flex flex-wrap gap-2.5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.03 * index, duration: 0.4 }}
              // ADDED: bg-white/[0.03] and backdrop-blur-md to create the frosted glass window
              className={`group flex cursor-pointer items-center gap-2 rounded-lg border bg-white/[0.03] backdrop-blur-md px-3 py-1.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 ${skill.border} ${skill.hoverBg}`}
            >
              <motion.span 
                className={`${skill.color}`}
                animate={{ y: [0, -3, 1, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3 + (index % 3), 
                  ease: "easeInOut", 
                  delay: index * 0.15 
                }}
              >
                {skill.icon}
              </motion.span>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image Area */}
      <motion.div 
        className="relative flex flex-1 items-center justify-center lg:justify-end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-yellow-500/15 to-green-500/15 blur-[80px]" />
        
        <div className="group relative h-[320px] w-[260px] md:h-[420px] md:w-[320px]">
          
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition-all duration-500 group-hover:border-green-500/30 group-hover:shadow-[0_0_40px_rgba(74,222,128,0.2)]">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              alt="Param Patel"
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
          </div>

          {/* Hidden Floating Skills - These already have backdrop-blur-md! */}
          <div className="pointer-events-none absolute inset-[-30px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute top-8 left-0 flex animate-[bounce_3s_infinite] items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-md px-3 py-1.5">
              <Code2 size={14} className="text-blue-400" />
              <span className="text-xs font-bold text-white">React</span>
            </div>
            <div className="absolute top-16 -right-6 flex animate-[bounce_4s_infinite_reverse] items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-md px-3 py-1.5">
              <Cloud size={14} className="text-orange-400" />
              <span className="text-xs font-bold text-white">AWS</span>
            </div>
            <div className="absolute bottom-28 -left-8 flex animate-[bounce_3.5s_infinite] items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-md px-3 py-1.5">
              <Database size={14} className="text-green-400" />
              <span className="text-xs font-bold text-white">MongoDB</span>
            </div>
            <div className="absolute bottom-12 right-0 flex animate-[bounce_4.5s_infinite_reverse] items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-md px-3 py-1.5">
              <Brain size={14} className="text-purple-400" />
              <span className="text-xs font-bold text-white">Gen AI</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}