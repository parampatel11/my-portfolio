"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Works", href: "#works" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
      className={`fixed left-1/2 top-6 z-50 flex w-[95%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-white/5 px-4 py-3 transition-all duration-500 md:px-6 ${
        isScrolled 
          ? "bg-[#0a0a0a]/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-2xl" 
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      {/* Logo */}
      <Link href="#home" className="group relative z-10 text-xl font-bold tracking-tight text-white transition-colors">
        Param<span className="text-yellow-400 transition-colors group-hover:text-green-400">.</span>
      </Link>

      {/* Desktop Navigation Links - Individual Green Glass Pills */}
      <nav className="hidden items-center gap-3 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="group relative rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-gray-200 backdrop-blur-md transition-all duration-300 hover:border-green-400/50 hover:bg-green-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Upgraded "Hire Me" Button with Flowing Comet Border */}
      <div className="relative z-10 flex shrink-0 items-center gap-4">
        <a 
          href="#contact" 
          className="group relative inline-flex h-11 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-full p-[2px] transition-transform active:scale-95"
        >
          {/* The Flowing Border Animation (Transparent to Green to Yellow tail) */}
          <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#4ade80_50%,#facc15_100%)] opacity-80 transition-opacity group-hover:opacity-100" />
          
          {/* Inner Dark Pill */}
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#0a0a0a] px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-colors group-hover:bg-[#111111]">
            Hire Me
          </span>
        </a>
      </div>
    </motion.header>
  );
}