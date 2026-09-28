"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Database, Box, Layers, FastForward, Copy, CheckCircle2 
} from "lucide-react";
import type { ReactNode } from "react";

// Import Syntax Highlighter and the VS Code Dark theme
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { snippetPool, type SnippetItem } from "../data/SnippetData"; 

const techConfig: Record<string, { icon: ReactNode; color: string; borderHover: string; language: string }> = {
  "MongoDB": { icon: <Database size={14} />, color: "text-green-400", borderHover: "hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]", language: "javascript" },
  "Next JS": { icon: <Box size={14} />, color: "text-white", borderHover: "hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]", language: "tsx" },
  "BullMQ": { icon: <Layers size={14} />, color: "text-red-400", borderHover: "hover:border-red-400/50 hover:shadow-[0_0_30px_rgba(248,113,113,0.15)]", language: "typescript" },
  "RabbitMQ": { icon: <FastForward size={14} />, color: "text-orange-400", borderHover: "hover:border-orange-400/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]", language: "javascript" },
  "Kafka": { icon: <FastForward size={14} />, color: "text-gray-100", borderHover: "hover:border-gray-100/50 hover:shadow-[0_0_30px_rgba(243,244,246,0.1)]", language: "javascript" },
  "ORM Prisma": { icon: <Layers size={14} />, color: "text-purple-400", borderHover: "hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]", language: "typescript" },
};

const filterKeys = Object.keys(techConfig);

export default function Snippet() {
  const [activeFilter, setActiveFilter] = useState("MongoDB");
  const [displayedSnippets, setDisplayedSnippets] = useState<SnippetItem[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const unseenPools = useRef<Record<string, SnippetItem[]>>({});

  const loadRandomSnippets = (tech: string) => {
    if (!unseenPools.current[tech] || unseenPools.current[tech].length < 3) {
      unseenPools.current[tech] = [...(snippetPool[tech] || [])];
    }

    const pool = unseenPools.current[tech];
    const shuffled = pool.sort(() => 0.5 - Math.random());
    
    const selected = shuffled.splice(0, 3);
    unseenPools.current[tech] = shuffled; 
    
    setDisplayedSnippets(selected);
  };

  useEffect(() => {
    loadRandomSnippets(activeFilter);
  }, []);

  const handleFilterClick = (tech: string) => {
    setActiveFilter(tech);
    loadRandomSnippets(tech);
  };

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const activeTechData = techConfig[activeFilter];

  return (
    <section id="snippets" className="w-full scroll-mt-24 relative pb-8">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-green-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-yellow-500/5 blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-12 flex flex-col gap-2 text-left"
      >
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          Code <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Snippets</span>
        </h2>
        <p className="text-gray-400">Select a stack to generate configurations.</p>
      </motion.div>

      <div className="flex flex-col items-start gap-10 w-full max-w-7xl mx-auto">
        
        {/* Horizontal Filter Tags with Hover Animations */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-start gap-3 w-full"
        >
          {filterKeys.map((tech) => {
            const techData = techConfig[tech];
            const isActive = activeFilter === tech;
            return (
              <motion.button
                key={tech}
                onClick={() => handleFilterClick(tech)}
                whileHover="hover"
                variants={{ hover: { y: -2, scale: 1.05 } }}
                className={`group flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium backdrop-blur-md transition-all duration-300 ${
                  isActive
                    ? `bg-white/[0.08] text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] border-white/20`
                    : "border-white/5 bg-white/[0.02] text-gray-400 hover:border-gray-500 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {/* Wiggle Animation for Icon */}
                <motion.span 
                  variants={{ hover: { scale: 1.2, rotate: [0, -10, 10, -5, 5, 0] } }}
                  transition={{ duration: 0.4 }}
                  className={`${techData.color} transition-transform duration-300 group-active:scale-90`}
                >
                  {techData.icon}
                </motion.span>
                
                {/* Slide Right Animation for Text */}
                <motion.span variants={{ hover: { x: 2 } }}>
                  {tech}
                </motion.span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* 3 Snippet Cards in 1 ROW */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {displayedSnippets.map((snippet, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15, transition: { duration: 0.15 } }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                key={snippet.id}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#111] ${activeTechData.borderHover}`}
              >
                
                {/* Premium macOS Terminal Style Header */}
                <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.03] px-5 py-4">
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                      <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                      <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={activeTechData.color}>{activeTechData.icon}</span>
                      <h4 className="font-sans text-sm font-bold tracking-wide text-gray-100 line-clamp-1">{snippet.title}</h4>
                    </div>
                  </div>
                  
                  {/* Interactive Copy Action */}
                  <button 
                    onClick={() => handleCopy(snippet.id, snippet.code)}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] text-gray-400 transition-all duration-300 hover:scale-105 hover:bg-white/[0.15] hover:text-white hover:border-white/20 hover:shadow-md active:scale-95"
                    title="Copy to clipboard"
                  >
                    {copiedId === snippet.id ? <CheckCircle2 size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Code Body */}
                <div className="flex h-full flex-col gap-4 p-5">
                  <p className="text-sm font-medium text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors min-h-[40px]">
                    {snippet.desc}
                  </p>
                  
                  {/* VS Code Styled Colorful Code Block */}
                  <div className="relative flex-1 rounded-xl border border-white/5 bg-black/50 p-2 shadow-inner transition-colors duration-500 group-hover:border-white/10 group-hover:bg-black/60 overflow-hidden">
                    <SyntaxHighlighter
                      language={activeTechData.language}
                      style={vscDarkPlus}
                      customStyle={{
                        background: "transparent",
                        padding: "1rem",
                        margin: 0,
                        fontSize: "0.85rem",
                        lineHeight: "1.6",
                      }}
                      wrapLines={true}
                      wrapLongLines={true} 
                    >
                      {snippet.code}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}