"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ExternalLink, Brain, Box, Server, Database,
  FastForward, Zap, Cloud, Code2, Settings, HardDrive,
  Layers, Wind, Workflow
} from "lucide-react";

// Helper dictionary to map tech names to their colorful icons
const techConfig: Record<string, { icon: ReactNode; color: string }> = {
  "Gen AI": { icon: <Brain size={14} />, color: "text-purple-400" },
  "Next JS": { icon: <Box size={14} />, color: "text-white" },
  "Node": { icon: <Server size={14} />, color: "text-green-500" },
  "MongoDB": { icon: <Database size={14} />, color: "text-green-400" },
  "Kafka": { icon: <FastForward size={14} />, color: "text-gray-100" },
  "Redis": { icon: <Zap size={14} />, color: "text-red-500" },
  "Docker": { icon: <Box size={14} />, color: "text-blue-400" },
  "AWS Cloud": { icon: <Cloud size={14} />, color: "text-orange-500" },
  "React": { icon: <Code2 size={14} />, color: "text-blue-400" },
  "Express": { icon: <Settings size={14} />, color: "text-gray-300" },
  "Postgresql": { icon: <HardDrive size={14} />, color: "text-blue-500" },
  "ORM Prisma": { icon: <Layers size={14} />, color: "text-indigo-400" },
  "Tailwind": { icon: <Wind size={14} />, color: "text-cyan-400" },
  "BullMQ": { icon: <Layers size={14} />, color: "text-red-400" },
  "CI/CD": { icon: <Workflow size={14} />, color: "text-orange-400" },
};

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Content Engine",
      description: "A generative AI platform that creates SEO-optimized articles with automated publishing pipelines.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      tech: ["Gen AI", "Next JS", "Node", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Distributed Order System",
      description: "High-throughput microservices architecture processing 10k+ concurrent transactions seamlessly.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      tech: ["Kafka", "Redis", "Docker", "AWS Cloud"],
      github: "#",
      live: "#"
    },
    {
      title: "Real-Time Dev Workspace",
      description: "Collaborative code editor with live presence, chat, and instant cloud execution environments.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      tech: ["React", "Express", "Postgresql", "ORM Prisma"],
      github: "#",
      live: "#"
    },
    {
      title: "Cloud Infrastructure Monitor",
      description: "Centralized dashboard tracking server health, queue metrics, and CI/CD deployment statuses.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      tech: ["Next JS", "Tailwind", "BullMQ", "CI/CD"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="w-full scroll-mt-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-14 flex flex-col gap-2"
      >
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          My <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-gray-400">A selection of my recent full-stack and cloud architecture projects.</p>
      </motion.div>

      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-[#141414] to-[#0a0a0a] transition-all duration-500 hover:-translate-y-2 hover:border-green-500/30 hover:shadow-[0_15px_40px_-15px_rgba(74,222,128,0.15)]"
          >
            {/* Project Image Container */}
            <div className="relative h-60 w-full overflow-hidden border-b border-white/5">
              <div className="absolute inset-0 z-10 bg-black/40 transition-colors duration-500 group-hover:bg-black/0" />
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Floating Action Buttons */}
              <div className="absolute right-4 top-4 z-20 flex translate-y-[-20px] items-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <a
                  href={project.github}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-yellow-400 hover:text-black"
                >
                  <Code2 size={18} />
                </a>
                <a
                  href={project.live}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-green-400 hover:text-black"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-1 flex-col p-8">
              <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-green-400">
                {project.title}
              </h3>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              {/* Colorful Tech Stack Pills with Micro-Interactions */}
              <div className="mt-auto flex flex-wrap gap-2.5 pt-8">
                {project.tech.map((tech) => {
                  const techData = techConfig[tech];

                  return (
                    <motion.div
                      key={tech}
                      // Propagate hover state to child elements
                      whileHover="hover" 
                      variants={{
                        hover: { y: -3, scale: 1.05 }
                      }}
                      className="flex cursor-pointer items-center gap-1.5 rounded-full border border-gray-800 bg-gray-900/50 px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors duration-300 hover:border-gray-500 hover:bg-gray-800 hover:text-white hover:shadow-md"
                    >
                      {techData ? (
                        <motion.span 
                          variants={{
                            // Icon scales up and wiggles back and forth on hover
                            hover: { 
                              scale: 1.2, 
                              rotate: [0, -15, 15, -5, 5, 0],
                              transition: { duration: 0.5, ease: "easeInOut" }
                            }
                          }}
                          className={techData.color}
                        >
                          {techData.icon}
                        </motion.span>
                      ) : null}
                      
                      {/* Text slides slightly right to make room for the glowing icon */}
                      <motion.span
                        variants={{ hover: { x: 2 } }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Animated Bottom Glow Bar */}
            <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-green-400 transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}