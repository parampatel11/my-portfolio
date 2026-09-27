"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
  // Step 1: Initial Icon | Step 2: Expanded | Step 3: Final Icon + Ping
  const [step, setStep] = useState(1);

  useEffect(() => {
    // After 2 seconds, expand the button to show the text
    const expandTimer = setTimeout(() => {
      setStep(2);
    }, 1000);

    // After 5 seconds total (3 seconds of showing text), collapse it and add the ping
    const collapseTimer = setTimeout(() => {
      setStep(3);
    }, 4000);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(collapseTimer);
    };
  }, []);

  const dummyWhatsAppNumber = "919876543210"; 
  const prefilledMessage = encodeURIComponent("Hi Param, I checked out your portfolio and I am interested in hiring you!");
  const whatsappLink = `https://wa.me/${dummyWhatsAppNumber}?text=${prefilledMessage}`;

  const isExpanded = step === 2;
  const showPing = step === 3;

  return (
    <>
      {/* DESKTOP: Floating Button with 3-Phase Animation Sequence */}
      <motion.a
        layout // Framer Motion handles the smooth width transitions
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`fixed bottom-8 right-8 z-50 hidden items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-colors hover:bg-green-400 hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] md:flex ${
          isExpanded ? "h-14 px-6" : "h-14 w-14 px-0"
        }`}
        aria-label="Contact on WhatsApp"
      >
        <motion.div layout className="flex shrink-0 items-center">
          <FaWhatsapp size={isExpanded ? 24 : 30} />
        </motion.div>
        
        {/* Text slides in during Step 2 */}
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
              exit={{ width: 0, opacity: 0, marginLeft: 0 }}
              className="overflow-hidden whitespace-nowrap font-bold tracking-wide"
            >
              Text me on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>

        {/* Ping animation activates permanently during Step 3 */}
        {showPing && (
          <span className="absolute -z-10 inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40"></span>
        )}
      </motion.a>

      {/* MOBILE: Fixed Full-Width "Hire Me" Button (Remains exactly the same) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col justify-end bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent p-4 pb-6 pt-10 md:hidden">
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-green-500 py-4 text-base font-bold text-black shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-transform active:scale-95"
        >
          <FaWhatsapp size={22} className="transition-transform group-hover:scale-110" />
          Hire Me
          
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
             <div className="absolute -left-[100%] top-0 h-full w-1/2 -skew-x-12 animate-[shine_3s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
        </motion.a>
      </div>
    </>
  );
}