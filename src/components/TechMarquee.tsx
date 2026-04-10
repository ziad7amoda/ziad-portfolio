"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function TechMarquee() {
  // Duplicate skills to create a seamless infinite loop
  // We make it long enough to cover an ultra-wide screen
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  // Split into two arrays to have two rows going opposite directions
  // If array is small, we just use the same array.
  const firstRow = [...duplicatedSkills].sort(() => 0.5 - Math.random());
  const secondRow = [...duplicatedSkills].sort(() => 0.5 - Math.random());

  return (
    <div className="relative py-12 overflow-hidden bg-zinc-950/50 border-y border-zinc-900 shadow-2xl flex flex-col gap-6 w-full">
      
      {/* Edge gradient masks for seamless fade-out effect */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      {/* Row 1: Moves Left */}
      <div className="flex w-max min-w-full animate-marquee gap-4">
        {firstRow.map((skill, i) => (
          <div
            key={`row1-${skill}-${i}`}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-sm shadow-lg whitespace-nowrap group hover:border-accent-500/50 hover:text-accent-400 transition-colors duration-300"
          >
            <span className="text-accent-500/50 group-hover:text-accent-400 transition-colors">▹</span>
            {skill}
          </div>
        ))}
      </div>

      {/* Row 2: Moves Right */}
      <div className="flex w-max min-w-full animate-marquee-reverse gap-4">
        {secondRow.map((skill, i) => (
          <div
            key={`row2-${skill}-${i}`}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-sm shadow-lg whitespace-nowrap group hover:border-accent-500/50 hover:text-accent-400 transition-colors duration-300"
          >
             <span className="text-accent-500/50 group-hover:text-accent-400 transition-colors">▹</span>
            {skill}
          </div>
        ))}
      </div>
      
    </div>
  );
}
