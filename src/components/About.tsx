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
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-accent-400 text-sm mb-2 tracking-wider">
            // about me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get to know me
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

            {personalInfo.openToWork && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500" />
                </span>
                <span className="font-mono text-xs text-accent-400 tracking-wide">
                  Currently open to opportunities
                </span>
              </div>
            )}
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
