"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, User, Phone, MessageSquare, 
  MapPin, CheckCircle2, Clock
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      // Sends silently to your email
      await fetch("https://formsubmit.co/ajax/parampateltechsunset@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: data.name,
          WhatsApp: data.whatsapp,
          Message: data.message,
          _subject: "New Portfolio Lead: " + data.name 
        })
      });
      
      // Trigger the popup and clear the form
      setIsSubmitted(true);
      form.reset();
      
      // Hide the popup automatically after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);

    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full scroll-mt-24 relative">
      
      {/* Floating Success Popup (Toast Notification) */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-50 flex w-[90%] max-w-sm items-center gap-3 rounded-full border border-green-500/30 bg-[#0a0a0a]/95 px-6 py-4 shadow-[0_0_40px_rgba(74,222,128,0.2)] backdrop-blur-xl md:w-auto md:max-w-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-400">
              <CheckCircle2 size={18} />
            </div>
            <span className="text-sm font-medium text-white">Your message has sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -z-10 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-16 flex flex-col gap-2 text-center md:text-left"
      >
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          Let's <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-gray-400">Ready to build something scalable? Drop me a message.</p>
      </motion.div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-1 flex-col justify-center gap-8"
        >
          <div className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Got an idea? <br />
            <span className="text-gray-500">I've got the skills.</span>
          </div>
          
          <div className="mt-4 flex flex-col gap-6">
            {/* Replaced Email with Response Time */}
            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-800 bg-gray-900/50 text-green-400 transition-colors group-hover:border-green-500/50 group-hover:bg-green-500/10">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Response Time</p>
                <p className="text-lg font-semibold text-gray-200">Usually within hours</p>
              </div>
            </div>

            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-800 bg-gray-900/50 text-yellow-400 transition-colors group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Location</p>
                <p className="text-lg font-semibold text-gray-200">India (Available Worldwide)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <div className="relative rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-2xl">
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Input 1: Name */}
              <div className="group relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 transition-colors group-focus-within:text-yellow-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-gray-800 bg-black/40 py-4 pl-12 pr-4 text-sm text-white outline-none transition-all duration-300 focus:border-yellow-400/50 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(250,204,21,0.1)]"
                />
              </div>

              {/* Input 2: WhatsApp */}
              <div className="group relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 transition-colors group-focus-within:text-green-400">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="Your WhatsApp Number"
                  className="w-full rounded-xl border border-gray-800 bg-black/40 py-4 pl-12 pr-4 text-sm text-white outline-none transition-all duration-300 focus:border-green-400/50 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(74,222,128,0.1)]"
                />
              </div>

              {/* Input 3: Message */}
              <div className="group relative">
                <div className="absolute left-0 top-4 flex items-start pl-4 text-gray-500 transition-colors group-focus-within:text-white">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project or role..."
                  className="w-full resize-none rounded-xl border border-gray-800 bg-black/40 py-4 pl-12 pr-4 text-sm text-white outline-none transition-all duration-300 focus:border-gray-500 focus:bg-black/60"
                />
              </div>

              {/* Ultra-Premium Transparent Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent py-4 font-bold text-gray-300 transition-all duration-300 hover:border-green-400/50 hover:bg-green-400/10 hover:text-white hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-green-400 border-t-transparent" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-400" />
                  </>
                )}
              </button>
            </form>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}