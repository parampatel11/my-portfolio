"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { 
      name: "GitHub", 
      icon: <FiGithub size={18} />, 
      href: "#", 
      baseClass: "text-gray-200 bg-white/5 border-white/10",
      hoverStyle: "hover:border-white/50 hover:bg-white/20 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
    },
    { 
      name: "LinkedIn", 
      icon: <FiLinkedin size={18} />, 
      href: "#", 
      baseClass: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      hoverStyle: "hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]" 
    },
    { 
      name: "Twitter", 
      icon: <FiTwitter size={18} />, 
      href: "#", 
      baseClass: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      hoverStyle: "hover:border-sky-400/50 hover:bg-sky-500/20 hover:text-sky-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]" 
    },
    { 
      name: "Instagram", 
      icon: <FiInstagram size={18} />, 
      href: "#", 
      baseClass: "text-pink-500 bg-pink-500/10 border-pink-500/20",
      hoverStyle: "hover:border-pink-500/50 hover:bg-pink-500/20 hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]" 
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // UPGRADED: Added bg-white/[0.02], backdrop-blur-xl, and rounded-3xl to create the "Glass Dock" effect
      className="mb-8 flex w-full flex-col items-center justify-between gap-6 rounded-3xl border border-white/5 bg-white/[0.02] px-8 py-6 backdrop-blur-xl md:flex-row"
    >
      {/* Logo */}
      <Link href="#home" className="text-2xl font-bold tracking-tight text-white transition-colors hover:text-gray-300">
        Param<span className="text-yellow-400">.</span>
      </Link>

      {/* Copyright */}
      <p className="text-sm font-medium text-gray-500">
        © {currentYear} Param Patel. All rights reserved.
      </p>

      {/* Colorful Social Links */}
      <div className="flex items-center gap-3">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${social.baseClass} ${social.hoverStyle}`}
            aria-label={social.name}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.footer>
  );
}