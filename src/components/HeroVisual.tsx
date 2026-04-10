"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import TiltWrapper from "@/components/TiltWrapper";

const codeLines = [
  `const developer = {`,
  `  name: "${personalInfo.name}",`,
  `  role: "Full Stack Engineer",`,
  `  skills: ["React", "Node.js", "TypeScript"],`,
  `  status: "Building awesome things",`,
  `};`,
  ``,
  `export default function App() {`,
  `  return (`,
  `    <main>`,
  `      <Hero data={developer} />`,
  `    </main>`,
  `  );`,
  `}`,
];

export default function HeroVisual() {
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) return;

    const currentLine = codeLines[currentLineIndex];

    const typeChar = () => {
      setDisplayedCode((prev) => {
        const newCode = [...prev];
        if (newCode[currentLineIndex] === undefined) {
          newCode[currentLineIndex] = "";
        }
        newCode[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
        return newCode;
      });

      if (currentCharIndex < currentLine.length - 1) {
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 300); // Wait before starting next line
      }
    };

    const typingSpeed = 30; // ms per character
    const timeoutId = setTimeout(typeChar, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [currentLineIndex, currentCharIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className="relative w-full max-w-lg mx-auto perspective-1000"
    >
      <TiltWrapper enableHoverGlow={true} className="group">
        {/* Background glowing blobs */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent-500/30 to-teal-500/30 blur-2xl opacity-50 animate-pulse" />

        <div
          className="relative rounded-xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-md shadow-2xl overflow-hidden"
        >
          {/* Window Header */}
          <div className="flex items-center px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-accent-500/80" />
            </div>
            <div className="mx-auto flex items-center pr-10">
              <p className="font-mono text-xs text-zinc-500">developer.ts</p>
            </div>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto min-h-[320px]">
            {displayedCode.map((line, i) => (
              <div key={i} className="flex">
                <span className="text-zinc-600 mr-4 select-none w-4 text-right">
                  {i + 1}
                </span>
                <span className="text-accent-400 whitespace-pre">
                  {line}
                </span>
              </div>
            ))}
            {/* Blinking cursor */}
            {currentLineIndex < codeLines.length && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-2.5 h-4 bg-accent-400 ml-1 translate-y-1"
              />
            )}
          </div>
        </div>
      </TiltWrapper>


    </motion.div>
  );
}
