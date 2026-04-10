"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import MagneticButton from "@/components/MagneticButton";
import HeroVisual from "@/components/HeroVisual";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated dot grid background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(52,211,153,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/90 to-zinc-950" />
        {/* Animated Glow spot */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[120px] pointer-events-none" 
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start text-balance">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-mono text-accent-400 text-sm mb-4 tracking-wider uppercase">
              Hello, I&apos;m
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight mb-6"
          >
            {personalInfo.name}
          </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-mono text-zinc-400 text-base sm:text-lg mb-10 tracking-wide"
        >
          {/* TODO: Replace tagline */}
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 relative z-20 w-full lg:w-auto"
        >
          <MagneticButton
            onClick={scrollToProjects}
            className="group relative px-8 py-3.5 rounded-xl bg-accent-500 text-zinc-950 font-semibold text-sm transition-all duration-300 hover:bg-accent-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
          >
            View Projects
          </MagneticButton>
          <a
            href={`${personalInfo.resumeUrl}?v=${Date.now()}`}
            download
            className="px-8 py-3.5 rounded-xl border border-zinc-700 text-zinc-300 font-semibold text-sm hover:border-accent-500/50 hover:text-accent-400 transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>
        </div>
        
        {/* Right Column: Hero Visual Terminal */}
        <div className="hidden lg:block">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
