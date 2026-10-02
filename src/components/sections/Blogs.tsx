"use client";

import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import {
  Code2,
  Server,
  Info,
  X,
  FastForward,
  Brain,
  Camera,
  GitCommit,
  GitBranch, 
  FileCode2,
  Box,
  Wind,
  Settings,
  Workflow,
  Database,
  HardDrive,
  Layers,
  Cloud,
  Zap,
  Repeat,
  Terminal,
  Network,  
  Cpu,      
  Aperture  
} from "lucide-react";

// Tech stack configurations with AI, Python, Git, and Github included
const techConfig: Record<string, { icon: ReactNode; color: string }> = {
  "Gen AI": { icon: <Brain size={14} />, color: "text-purple-400" },
  "Python": { icon: <Terminal size={14} />, color: "text-blue-400" },
  "PyTorch": { icon: <Network size={14} />, color: "text-orange-500" },
  "TensorFlow": { icon: <Cpu size={14} />, color: "text-orange-400" },
  "OpenCV": { icon: <Aperture size={14} />, color: "text-green-400" },
  "Javascript": { icon: <FileCode2 size={14} />, color: "text-yellow-400" },
  "React": { icon: <Code2 size={14} />, color: "text-blue-400" },
  "Next JS": { icon: <Box size={14} />, color: "text-white" },
  "Tailwind": { icon: <Wind size={14} />, color: "text-cyan-400" },
  "Node": { icon: <Server size={14} />, color: "text-green-500" },
  "Express": { icon: <Settings size={14} />, color: "text-gray-300" },
  "CI/CD": { icon: <Workflow size={14} />, color: "text-orange-400" },
  "MongoDB": { icon: <Database size={14} />, color: "text-green-400" },
  "Postgresql": { icon: <HardDrive size={14} />, color: "text-blue-500" },
  "ORM Prisma": { icon: <Layers size={14} />, color: "text-indigo-400" },
  "Docker": { icon: <Box size={14} />, color: "text-blue-400" },
  "AWS Cloud": { icon: <Cloud size={14} />, color: "text-orange-500" },
  "Redis": { icon: <Zap size={14} />, color: "text-red-500" },
  "Kafka": { icon: <FastForward size={14} />, color: "text-gray-100" },
  "RabbitMQ": { icon: <Repeat size={14} />, color: "text-orange-400" },
  "BullMQ": { icon: <Layers size={14} />, color: "text-red-400" },
  "Framer Motion": { icon: <Zap size={14} />, color: "text-pink-400" },
  "OpenAI API": { icon: <Brain size={14} />, color: "text-green-300" },
  "Git": { icon: <GitBranch size={14} />, color: "text-orange-500" },
  "Github": { icon: <GitCommit size={14} />, color: "text-white" },
};

// Theme definitions mapping colors to Tailwind classes
const themeMap: Record<string, {
  frontHover: string;
  barGradient: string;
  backBg: string;
  backBorder: string;
  accentText: string;
}> = {
  gray: {
    frontHover: "group-hover:border-gray-500/50 group-hover:shadow-[0_15px_40px_-15px_rgba(156,163,175,0.2)]",
    barGradient: "from-gray-600 to-gray-300",
    backBg: "bg-gray-950/80",
    backBorder: "border-gray-500/30",
    accentText: "text-gray-300"
  },
  green: {
    frontHover: "group-hover:border-green-500/50 group-hover:shadow-[0_15px_40px_-15px_rgba(74,222,128,0.2)]",
    barGradient: "from-green-600 to-green-400",
    backBg: "bg-green-950/80",
    backBorder: "border-green-500/30",
    accentText: "text-green-400"
  },
  orange: {
    frontHover: "group-hover:border-orange-500/50 group-hover:shadow-[0_15px_40px_-15px_rgba(251,146,60,0.2)]",
    barGradient: "from-orange-600 to-orange-400",
    backBg: "bg-orange-950/80",
    backBorder: "border-orange-500/30",
    accentText: "text-orange-400"
  },
  yellow: {
    frontHover: "group-hover:border-yellow-500/50 group-hover:shadow-[0_15px_40px_-15px_rgba(250,204,21,0.2)]",
    barGradient: "from-yellow-600 to-yellow-300",
    backBg: "bg-yellow-950/80",
    backBorder: "border-yellow-500/30",
    accentText: "text-yellow-400"
  },
};

type BlogType = {
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  themeKey: string;
  tech: string[];
  icon: ReactNode;
  content: ReactNode;
};

export default function Blogs() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const blogs: BlogType[] = [
    {
      title: "Scaling Node.js: When to Use BullMQ, RabbitMQ, and Kafka",
      description: "A deep dive into background jobs and messaging systems. Discover how to handle high-throughput microservices, queuing, and background tasks in backend systems.",
      image: "/blog1.png",
      date: "Sep 2026",
      readTime: "6 min read",
      themeKey: "green",
      tech: ["Node", "BullMQ", "RabbitMQ", "Kafka", "Redis"],
      icon: <Server size={14} />,
      content: (
        <div className="space-y-4 text-sm text-gray-200 leading-relaxed">
          <p>
            As Node.js applications scale, synchronous request-response cycles eventually hit a bottleneck. Offloading heavy computational work or third-party API calls to background workers becomes essential for maintaining a snappy user experience.
          </p>
          <p>
            In my recent architectures, I evaluate three main tools depending on the system's needs. For simple, Redis-backed job queues with built-in retry logic, <strong className="text-green-400">BullMQ</strong> is often the most efficient choice, especially when working within a Next.js and Node environment. 
          </p>
          <p>
            However, when dealing with complex routing protocols or high-throughput event streaming—where multiple microservices need to react to the same data independently—I transition to <strong className="text-green-400">RabbitMQ</strong> or <strong className="text-green-400">Kafka</strong>. Pairing these with MongoDB ensures that data is stored resiliently while events are processed asynchronously.
          </p>
        </div>
      )
    },
    {
      title: "Building a Dynamic GitHub Contribution Calendar from Scratch",
      description: "A tutorial-style blog on how to fetch live commit statistics and render a dynamic, interactive contribution graph using React, Tailwind CSS, and Framer Motion.",
      image: "/blog2.png",
      date: "Aug 2026",
      readTime: "5 min read",
      themeKey: "gray",
      tech: ["React", "Tailwind", "Framer Motion", "Git", "Github"],
      icon: <GitCommit size={14} />,
      content: (
        <div className="space-y-4 text-sm text-gray-200 leading-relaxed">
          <p>
            Tracking software development activity visually adds a great layer of interactivity to any developer portfolio. Instead of using a standard embedded widget, building a custom GitHub contribution calendar allows for complete styling control.
          </p>
          <p>
            The process starts with a Node.js backend route fetching commit data dynamically from the GitHub GraphQL API. Once the raw contribution data is formatted, it is passed to a <strong className="text-gray-300">React and TypeScript</strong> frontend.
          </p>
          <p>
            Using <strong className="text-gray-300">Tailwind CSS</strong>, we can map over the monthly contributions, rendering the grid of commit squares. To bring it to life, wrapping the grid rendering in <strong className="text-gray-300">Framer Motion</strong> allows the squares to cascade into view smoothly on page load, creating a highly polished, interactive code activity section.
          </p>
        </div>
      )
    },
    {
      title: "The Developer’s Guide to AI Image Generation",
      description: "Exploring the intersection of coding and AI art. Learn techniques for crafting photorealistic prompts and how to integrate these assets into web apps.",
      image: "/blog3.png",
      date: "Jul 2026",
      readTime: "7 min read",
      themeKey: "yellow",
      tech: ["Python", "PyTorch", "OpenCV", "Next JS", "AWS Cloud"],
      icon: <Camera size={14} />,
      content: (
        <div className="space-y-4 text-sm text-gray-200 leading-relaxed">
          <p>
            The gap between software engineering and digital photography has shrunk dramatically with the rise of AI image generation. Building prompts for generative models is a lot like writing structured code—specificity is everything.
          </p>
          <p>
            When I engineer pipelines using <strong className="text-yellow-400">Python</strong> and <strong className="text-yellow-400">PyTorch</strong>, I focus heavily on technical camera specifications. By explicitly dictating lens types (like fisheye lenses), aspect ratios like 9:16 for mobile-first UI designs, and precise focal lengths, the AI output becomes much more predictable.
          </p>
          <p>
            Integrating tools like <strong className="text-yellow-400">OpenCV</strong> allows developers to process and refine these generated assets programmatically. Adding environmental variables to the prompt—such as "night-flash lighting" or "cinematic studio lighting"—allows us to generate cohesive backgrounds matching a website's color palette without ever opening Photoshop.
          </p>
        </div>
      )
    },
    {
      title: "Integrating Generative AI into Full-Stack Web Apps",
      description: "Discussing the architecture of an AI-powered content engine, managing API limits, and seamlessly blending AI outputs into a React frontend.",
      image: "/blog4.png",
      date: "Jun 2026",
      readTime: "8 min read",
      themeKey: "orange",
      tech: ["Python", "TensorFlow", "Node", "OpenAI API", "MongoDB"],
      icon: <Brain size={14} />,
      content: (
        <div className="space-y-4 text-sm text-gray-200 leading-relaxed">
          <p>
            Building full-stack applications that utilize Large Language Models (LLMs) requires careful architectural planning to handle stream latency, API rate limits, and token constraints.
          </p>
          <p>
            In a typical architecture, <strong className="text-orange-400">Python</strong> microservices handling <strong className="text-orange-400">TensorFlow</strong> models or external API calls should be isolated. The frontend should never call the AI provider's API directly. Instead, requests flow through a secure <strong className="text-orange-400">Node.js</strong> backend where API keys are hidden, and rate-limiting middleware is applied to prevent abuse.
          </p>
          <p>
            For a seamless user experience, utilizing Server-Sent Events (SSE) allows the backend to stream the generated AI response chunk-by-chunk back to the React frontend. This prevents the UI from hanging on long queries, providing the user with real-time feedback while the results are saved securely to <strong className="text-orange-400">MongoDB</strong>.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="blogs" className="w-full scroll-mt-24 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-14 flex flex-col gap-2"
      >
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          My <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Blogs</span>
        </h2>
        <p className="text-gray-400">Technical insights on full-stack architecture, system scaling, and creative tech.</p>
      </motion.div>

      {/* 2x2 Grid Layout for 4 Blogs */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {blogs.map((blog, index) => {
          const isFlipped = flippedIndex === index;
          const currentTheme = themeMap[blog.themeKey];

          return (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="relative h-[460px] w-full perspective-[1000px] group"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative h-full w-full rounded-3xl"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* ==================== FRONT FACE ==================== */}
                <div
                  className={`absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-[#141414] to-[#0a0a0a] transition-all duration-300 ${currentTheme.frontHover} ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Blog Image Container - Synced with group/img for isolated hover effects */}
                  <div className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-gray-900 shrink-0 group/img">
                    <div className="absolute inset-0 z-10 bg-black/20 transition-colors duration-500 group-hover/img:bg-transparent pointer-events-none" />
                    
                    {/* Normal Static Image with clean zoom transition matching Projects.tsx */}
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-105"
                    />

                    {/* Badge */}
                    <div className="absolute left-4 top-4 z-20">
                       <span className="flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white shadow-lg border border-white/10">
                          <span className={currentTheme.accentText}>{blog.icon}</span>
                          {blog.readTime}
                       </span>
                    </div>

                    {/* Floating Action Button - Read Blog */}
                    <div className="absolute right-4 top-4 z-20 flex items-center">
                      <button
                        onClick={() => setFlippedIndex(index)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-yellow-400 hover:text-black"
                        title="Read Blog"
                      >
                        <Info size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Blog Details */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                       <span>{blog.date}</span>
                    </div>
                    <h3 className={`text-xl font-bold text-white transition-colors group-hover:${currentTheme.accentText}`}>
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-400 line-clamp-3">
                      {blog.description}
                    </p>

                    {/* Colorful Animated Tech Stack Pills */}
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      {blog.tech.map((tech) => {
                        const techData = techConfig[tech];
                        return (
                          <motion.div
                            key={tech}
                            whileHover="hover"
                            variants={{
                              hover: { y: -3, scale: 1.05 }
                            }}
                            className="flex cursor-default items-center gap-1.5 rounded-full border border-gray-800 bg-gray-900/50 px-2.5 py-1 text-[10px] font-medium text-gray-400 transition-colors duration-300 hover:border-gray-500 hover:bg-gray-800 hover:text-white hover:shadow-md"
                          >
                            {techData && (
                              <motion.span
                                variants={{
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
                            )}
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
                  <div className={`absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r ${currentTheme.barGradient} transition-all duration-500 group-hover:w-full`} />
                </div>

                {/* ==================== BACK FACE (BLURRED BLOG READER) ==================== */}
                <div
                  className={`absolute inset-0 flex flex-col rounded-3xl border ${currentTheme.backBorder} ${currentTheme.backBg} p-6 shadow-2xl backdrop-blur-2xl`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {/* Top Header & Close Button */}
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4 shrink-0">
                    <h3 className={`text-sm font-bold uppercase tracking-wider ${currentTheme.accentText} flex items-center gap-2`}>
                      {blog.icon} Article Viewer
                    </h3>
                    <button
                      onClick={() => setFlippedIndex(null)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 hover:text-white"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Scrollable Blog Content */}
                  <div className="flex-1 overflow-y-auto pr-3 pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40">
                    <h2 className="text-xl font-bold text-white mb-4 leading-snug">
                      {blog.title}
                    </h2>
                    
                    {/* The Blog Content */}
                    {blog.content}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}