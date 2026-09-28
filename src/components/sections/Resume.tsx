"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  Briefcase, GraduationCap, Layout, ServerCog, Cloud, Layers,
  Brain, Box, Server, Database, FastForward, Zap, Code2,
  Settings, HardDrive, Wind, Workflow, BookOpen
} from "lucide-react";

// Tech dictionary for icons and colors
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
  "Javascript": { icon: <Code2 size={14} />, color: "text-yellow-400" },
  "Express": { icon: <Settings size={14} />, color: "text-gray-300" },
  "Postgresql": { icon: <HardDrive size={14} />, color: "text-blue-500" },
  "ORM Prisma": { icon: <Layers size={14} />, color: "text-indigo-400" },
  "Tailwind": { icon: <Wind size={14} />, color: "text-cyan-400" },
  "BullMQ": { icon: <Layers size={14} />, color: "text-red-400" },
  "RabitMQ": { icon: <FastForward size={14} />, color: "text-orange-400" },
  "CI/CD": { icon: <Workflow size={14} />, color: "text-orange-400" },
};

export default function Resume() {
  // Categorized Skills
  const skillCategories = [
    { title: "Frontend", icon: <Layout size={20} className="text-blue-400" />, skills: ["Javascript", "React", "Next JS", "Tailwind"] },
    { title: "Backend", icon: <ServerCog size={20} className="text-green-400" />, skills: ["Node", "Express", "MongoDB", "Postgresql", "ORM Prisma"] },
    { title: "Cloud & DevOps", icon: <Cloud size={20} className="text-orange-400" />, skills: ["AWS Cloud", "Docker", "CI/CD"] },
    { title: "Architecture & Others", icon: <Layers size={20} className="text-purple-400" />, skills: ["Gen AI", "Redis", "Kafka", "RabitMQ", "BullMQ"] },
  ];

  // Background Timeline Data (Strictly 1-Line Descriptions)
  const timeline = [
    {
      title: "Full Stack Developer",
      place: "Techsunset Company",
      date: "1.5 Years (Present)",
      type: "work",
      desc: "Architecting scalable web applications and leading enterprise cloud integrations.",
      icon: <Briefcase size={20} className="text-yellow-400" />
    },
    {
      title: "B.Tech Graduation",
      place: "Marwadi University",
      date: "2021 - 2025",
      type: "edu",
      desc: "Specialized in Computer Science with a core focus on full-stack web technologies.",
      icon: <GraduationCap size={20} className="text-green-400" />
    },
    {
      title: "Higher Education",
      place: "Nalanda Vidhyalaya",
      date: "2019 - 2021",
      type: "edu",
      desc: "Completed higher secondary education with a strong foundation in computer sciences.",
      icon: <BookOpen size={20} className="text-gray-400" />
    }
  ];

  return (
    <section id="resume" className="w-full scroll-mt-24 relative">

      {/* Background ambient glow for ultra-transparency effect */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-green-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-yellow-500/5 blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-16 flex flex-col gap-2 text-center md:text-left"
      >
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          Resume & <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <p className="text-gray-400">My technical arsenal and professional journey.</p>
      </motion.div>

      <div className="flex flex-col gap-20 lg:flex-row lg:gap-12">

        {/* PART 1: SKILL SETS */}
        <div className="flex-1">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-3 text-2xl font-bold text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-800 bg-transparent text-yellow-400 backdrop-blur-md">
              <Code2 size={20} />
            </span>
            Skill Sets
          </motion.h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                // ULTRA TRANSPARENT GLASSMORPHISM HERE
                className="group relative flex flex-col rounded-3xl border border-white/5 bg-white/[0.02] p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-green-500/30 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg border border-white/5 bg-white/[0.05] p-2.5 backdrop-blur-md transition-colors group-hover:bg-white/[0.1]">
                    {category.icon}
                  </div>
                  <h4 className="font-semibold tracking-wide text-white">{category.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((tech) => {
                    const techData = techConfig[tech];
                    return (
                      <motion.div
                        key={tech}
                        whileHover="hover"
                        variants={{ hover: { y: -2, scale: 1.05 } }}
                        className="flex cursor-default items-center gap-1.5 rounded-full border border-white/10 bg-transparent px-3 py-1.5 text-xs font-medium text-gray-400 transition-all duration-300 hover:border-gray-500 hover:bg-white/[0.05] hover:text-white"
                      >
                        {techData ? (
                          <motion.span
                            variants={{ hover: { scale: 1.2, rotate: [0, -10, 10, -5, 5, 0] } }}
                            transition={{ duration: 0.4 }}
                            className={techData.color}
                          >
                            {techData.icon}
                          </motion.span>
                        ) : null}
                        <motion.span variants={{ hover: { x: 1 } }}>
                          {tech}
                        </motion.span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PART 2: MY BACKGROUND (TIMELINE) */}
        <div className="flex-1">
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-3 text-2xl font-bold text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-800 bg-transparent text-green-400 backdrop-blur-md">
              <Briefcase size={20} />
            </span>
            My Background
          </motion.h3>

          <div className="relative ml-4 space-y-8 border-l border-white/10 pb-4 md:ml-6">

            {/* Glowing line overlay */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-yellow-400 via-green-400 to-transparent"
            />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative pl-8"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[21px] top-2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#0a0a0a] bg-[#111] transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-400/30 group-hover:bg-black group-hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                  {item.icon}
                </div>

                {/* Content Card (Ultra Clean & Transparent) */}
                <div className="relative flex flex-col rounded-2xl border border-transparent bg-transparent p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/10 group-hover:bg-white/[0.02] group-hover:backdrop-blur-md">

                  {/* Date Badge */}
                  <span className="mb-3 inline-flex w-fit items-center rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs font-semibold tracking-wide text-gray-400 transition-colors group-hover:text-gray-200">
                    {item.date}
                  </span>

                  <h4 className="text-xl font-bold text-white transition-colors group-hover:text-yellow-400">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-sm font-medium text-green-400/80">
                    {item.place}
                  </p>

                  {/* 1-Line Description */}
                  <p className="mt-3 text-sm text-gray-500 transition-colors group-hover:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}