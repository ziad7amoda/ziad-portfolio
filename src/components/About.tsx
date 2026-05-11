"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/portfolio";
import GithubStats from "@/components/GithubStats";
import TechMarquee from "@/components/TechMarquee";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(var(--theme-accent-500) 1px, transparent 1px), linear-gradient(90deg, var(--theme-accent-500) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-accent-400 text-sm mb-2 tracking-wider">
            01
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About <span className="text-accent-400 font-accent text-4xl sm:text-5xl">Me</span>
          </h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent-500 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
              {/* TODO: Replace with your real about text */}
              {personalInfo.about}
            </p>

          </motion.div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 flex flex-col justify-center"
          >
            <GithubStats />
          </motion.div>
        </div>
      </div>

      {/* Full-width continuous tech stack marquee */}
      <div className="mt-20">
        <TechMarquee />
      </div>
    </section>
  );
}
