"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      initial={{ x: "-50%", y: -100, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }}
      // CHANGED: Replaced the morphing rounded-full/3xl with a permanent rounded-2xl
      className={`fixed left-1/2 top-4 z-50 flex w-[90%] max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/5 transition-all duration-500 md:top-6 md:w-[95%] ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#0a0a0a]/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
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
          <a
            href="#contact"
            className="group relative hidden h-11 w-32 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full p-[2px] transition-transform active:scale-95 md:inline-flex"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#4ade80_50%,#facc15_100%)] opacity-80 transition-opacity group-hover:opacity-100" />

            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#0a0a0a] px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-colors group-hover:bg-[#111111]">
              Hire Me
            </span>
          </a>

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
            className="w-full md:hidden"
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
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative mt-1 flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-full p-[2px] transition-transform active:scale-95"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#4ade80_50%,#facc15_100%)] opacity-80" />

                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#0a0a0a] px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl">
                  Hire Me
                </span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}