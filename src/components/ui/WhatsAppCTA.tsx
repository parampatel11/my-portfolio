"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
  // Step 1: Initial Icon | Step 2: Expanded | Step 3: Final Icon + Ping
  const [step, setStep] = useState(1);

  useEffect(() => {
    // After 1 second, expand the button to show the text
    const expandTimer = setTimeout(() => {
      setStep(2);
    }, 2000);

    // After 4 seconds total (3 seconds of showing text), collapse it and add the ping
    const collapseTimer = setTimeout(() => {
      setStep(3);
    }, 4000);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(collapseTimer);
    };
  }, []);

  const dummyWhatsAppNumber = "917016263077"; 
  const prefilledMessage = encodeURIComponent("Hi Param, I checked out your portfolio and I am interested in hiring you!");
  const whatsappLink = `https://wa.me/${dummyWhatsAppNumber}?text=${prefilledMessage}`;

  const isExpanded = step === 2;
  const showPing = step === 3;

  return (
    <motion.a
      layout // Framer Motion handles the smooth width transitions
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      // THE FIX: Changed to `flex` so it shows on all devices. Adjusted sizing for mobile (h-12) vs desktop (h-14).
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-colors hover:bg-green-400 hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] md:bottom-8 md:right-8 ${
        isExpanded ? "h-12 px-5 md:h-14 md:px-6" : "h-12 w-12 px-0 md:h-14 md:w-14"
      }`}
      aria-label="Contact on WhatsApp"
    >
      <motion.div layout className="flex shrink-0 items-center">
        <FaWhatsapp size={isExpanded ? 22 : 28} />
      </motion.div>
      
      {/* Text slides in during Step 2 */}
      <AnimatePresence>
        {isExpanded && (
          <motion.span
            initial={{ width: 0, opacity: 0, marginLeft: 0 }}
            animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
            exit={{ width: 0, opacity: 0, marginLeft: 0 }}
            className="overflow-hidden whitespace-nowrap text-sm font-bold tracking-wide md:text-base"
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
  );
}