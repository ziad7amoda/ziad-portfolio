"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { name: "accent", class: "theme-accent", color: "bg-[#34d399]" },
  { name: "Neon Pink", class: "theme-neon", color: "bg-[#f472b6]" },
  { name: "Cyber Yellow", class: "theme-cyber", color: "bg-[#facc15]" },
  { name: "Ocean Blue", class: "theme-ocean", color: "bg-[#38bdf8]" },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(themes[0].class);

  // Initialize theme from localStorage or default
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setActiveTheme(savedTheme);
      document.documentElement.className = document.documentElement.className.replace(/theme-\w+/g, "");
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const handleThemeChange = (themeClass: string) => {
    setActiveTheme(themeClass);
    localStorage.setItem("portfolio-theme", themeClass);
    
    // Replace existing theme class, or add if none exists
    document.documentElement.className = document.documentElement.className.replace(/theme-\w+/g, "");
    document.documentElement.classList.add(themeClass);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      <motion.div
        className="relative flex items-center justify-center"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-14 flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-2 rounded-full shadow-xl backdrop-blur-md"
            >
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme.class)}
                  className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${theme.color} ${activeTheme === theme.class ? "ring-2 ring-white ring-offset-2 ring-offset-zinc-900" : ""}`}
                  aria-label={`Switch to ${theme.name} theme`}
                  title={theme.name}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 shadow-xl flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent-400 transition-colors z-10"
          aria-label="Toggle theme picker"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}
