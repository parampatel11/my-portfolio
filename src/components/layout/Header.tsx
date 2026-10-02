"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

// 1. TypeScript Interface for the SVG Icon
interface WhatsAppIconProps {
  className?: string;
}

const WhatsAppIcon = ({ className }: WhatsAppIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const hoverPhrases = [
  "Let's talk.",
  "Got an idea?",
  "Need a dev?",
  "Let's create.",
  "Have a role?",
  "Build together?",
  "Let's connect.",
  "Start something?",
];

// 5 Specific Transparent Glassmorphism Themes
const tooltipThemes = [
  { box: "border-emerald-500/40 bg-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.25)]", pointer: "border-emerald-500/40" },
  { box: "border-amber-500/40 bg-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.25)]", pointer: "border-amber-500/40" },
  { box: "border-blue-500/40 bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.25)]", pointer: "border-blue-500/40" },
  { box: "border-orange-500/40 bg-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.25)]", pointer: "border-orange-500/40" },
  { box: "border-red-500/40 bg-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.25)]", pointer: "border-red-500/40" },
  { box: "border-violet-500/40 bg-violet-500/20 shadow-[0_0_20px_rgba(139,92,246,0.25)]", pointer: "border-violet-500/40" },
  { box: "border-rose-500/40 bg-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.25)]", pointer: "border-rose-500/40" },
];

// 2. TypeScript Interface for the Button
interface HireMeBtnProps {
  whatsappLink: string;
  isMobile?: boolean;
  onClick?: () => void;
}

// 3. Reusable Button Component
const HireMeBtn = ({ whatsappLink, isMobile, onClick }: HireMeBtnProps) => {
  const [phrase, setPhrase] = useState(hoverPhrases[0]);
  const [theme, setTheme] = useState(tooltipThemes[0]);

  // Pools to track which items haven't been shown yet in the current cycle
  const availablePhrases = useRef<string[]>([...hoverPhrases]);
  const availableThemes = useRef<typeof tooltipThemes>([...tooltipThemes]);

  useEffect(() => {
    // Remove the default initial phrase & theme from the first cycle 
    // so they don't repeat on the very first hover
    availablePhrases.current = hoverPhrases.filter((p) => p !== hoverPhrases[0]);
    availableThemes.current = tooltipThemes.filter((t) => t !== tooltipThemes[0]);
  }, []);

  const handleHover = () => {
    // Refill the pool if everything has been used
    if (availablePhrases.current.length === 0) {
      // Filter out the currently displayed phrase so it doesn't immediately repeat on refill
      availablePhrases.current = hoverPhrases.filter((p) => p !== phrase);
    }
    if (availableThemes.current.length === 0) {
      availableThemes.current = tooltipThemes.filter((t) => t !== theme);
    }

    // Pick a random phrase from the remaining pool and remove it
    const pIndex = Math.floor(Math.random() * availablePhrases.current.length);
    const selectedPhrase = availablePhrases.current[pIndex];
    availablePhrases.current.splice(pIndex, 1);

    // Pick a random theme from the remaining pool and remove it
    const tIndex = Math.floor(Math.random() * availableThemes.current.length);
    const selectedTheme = availableThemes.current[tIndex];
    availableThemes.current.splice(tIndex, 1);

    setPhrase(selectedPhrase);
    setTheme(selectedTheme);
  };

  return (
    <div
      className={`group/hire-btn relative ${
        isMobile ? "mt-1 flex w-full" : "hidden shrink-0 md:inline-flex"
      }`}
      onMouseEnter={handleHover}
    >
      {/* Quick Dynamic Colorful Tooltip Popup */}
      <div className="pointer-events-none absolute -bottom-14 left-1/2 z-[100] flex -translate-x-1/2 -translate-y-2 items-center justify-center opacity-0 transition-all duration-300 ease-out delay-0 group-hover/hire-btn:translate-y-0 group-hover/hire-btn:opacity-100 group-hover/hire-btn:delay-150">
        
        {/* Colorful Glassmorphism Box */}
        <div className={`relative whitespace-nowrap rounded-lg border px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md transition-colors duration-300 ${theme.box}`}>
          {phrase}
          
          {/* Matching Glassmorphism Top Pointer */}
          <div className={`absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm border-l border-t bg-[#0a0a0a] backdrop-blur-md transition-colors duration-300 ${theme.pointer}`} />
        </div>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`group/btn relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full p-[2px] transition-transform active:scale-95 ${
          isMobile ? "h-12 w-full" : "h-11 w-32"
        }`}
      >
        {/* Custom Animated Spin Border: 2s Fast, 2s Slow */}
        <span className="absolute inset-[-1000%] animate-spin-custom bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#4ade80_50%,#facc15_100%)] opacity-80 transition-opacity group-hover/btn:opacity-100" />

        {/* Inner Black Pill */}
        <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#0a0a0a] px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-colors group-hover/btn:bg-[#111111]">
          {/* Primary Text */}
          <span className="absolute flex h-full w-full items-center justify-center transition-all duration-300 ease-out group-hover/btn:-translate-y-full group-hover/btn:opacity-0">
            Hire Me
          </span>

          {/* Icons Wrapper (Only WhatsApp icon now, perfectly centered) */}
          <span className="absolute flex h-full w-full translate-y-full items-center justify-center opacity-0 transition-all duration-300 ease-out group-hover/btn:translate-y-0 group-hover/btn:opacity-100">
            
            {/* WhatsApp Icon */}
            <WhatsAppIcon className="h-[22px] w-[22px] text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.4)] transition-all duration-300 ease-out delay-0 group-hover/hire-btn:scale-110 group-hover/hire-btn:drop-shadow-[0_0_16px_rgba(74,222,128,0.9)] group-hover/hire-btn:delay-150" />
            
          </span>
        </span>
      </a>
    </div>
  );
};

// 4. Main Header Component
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  // WhatsApp Link Config
  const whatsappNumber = "917016263077";
  const prefilledMessage = encodeURIComponent(
    "Hi Param, I checked out your portfolio and I am interested in hiring you!"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  return (
    <>
      {/* Inject custom fast-slow keyframe animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin-fast-slow {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(300deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-custom {
            animation: spin-fast-slow 4s linear infinite;
          }
        `
      }} />

      <motion.header
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
        }}
        className={`fixed left-1/2 top-4 z-50 flex w-[90%] max-w-5xl flex-col rounded-2xl border border-white/5 transition-all duration-500 md:top-6 md:w-[95%] ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#0a0a0a]/30 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        {/* TOP BAR */}
        <div className="flex w-full items-center justify-between px-5 py-2.5 md:px-6 md:py-3">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="group relative z-10 shrink-0 text-lg font-bold tracking-tight text-white transition-colors md:text-xl"
          >
            Param
            <span className="text-yellow-400 transition-colors group-hover:text-green-400">
              .
            </span>
          </Link>

          {/* Desktop Navigation Links */}
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

          {/* Right Side Actions */}
          <div className="relative z-10 flex items-center gap-3">
            {/* Desktop Hire Me Button */}
            <HireMeBtn whatsappLink={whatsappLink} isMobile={false} />

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full overflow-hidden md:hidden"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col gap-3 border-t border-white/10 px-4 pb-5 pt-3"
              >
                {/* Navigation Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-2.5 text-center text-sm font-medium text-gray-200 transition-colors hover:bg-green-500/20 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Hire Me Button */}
                <HireMeBtn
                  whatsappLink={whatsappLink}
                  isMobile={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}