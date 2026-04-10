"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData, educationData } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-accent-400 text-sm mb-2 tracking-wider">
            // experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Where I&apos;ve Worked
          </h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent-500 to-transparent" />
        </motion.div>

        <div className="space-y-20">
          {/* Work Experience */}
          <div>
            <div className="relative border-l border-zinc-800/80 ml-3 md:ml-0 md:border-none space-y-12">
              {experienceData.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="relative pl-8 md:pl-0 md:grid md:grid-cols-4 md:gap-8 group"
                >
                  {/* Timeline dot (Mobile mainly, hidden on desktop layout below) */}
                  <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-800 border-2 border-zinc-950 md:hidden group-hover:bg-accent-400 transition-colors duration-300" />

                  {/* Left Col: Period (Desktop) */}
                  <div className="hidden md:block col-span-1 pt-1">
                    <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest group-hover:text-accent-400/80 transition-colors duration-300">
                      {job.period}
                    </p>
                  </div>

                  {/* Right Col: Content */}
                  <div className="md:col-span-3">
                    <div className="flex flex-col md:hidden mb-2">
                      <p className="font-mono text-xs text-accent-400/80 uppercase tracking-widest">
                        {job.period}
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-white flex items-center gap-2 group-hover:text-accent-400 transition-colors duration-300">
                      {job.role}
                      <span className="text-accent-500/50 hidden md:inline">@</span>
                      <span className="text-zinc-300 hidden md:inline">{job.company}</span>
                    </h3>
                    <p className="text-zinc-300 md:hidden mt-0.5 text-lg font-medium">{job.company}</p>

                    <ul className="mt-4 space-y-3">
                      {job.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start text-zinc-400 text-sm leading-relaxed">
                          <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500/50" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-accent-500/5 border border-accent-500/10 text-accent-300/80 font-mono text-[11px] tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="font-mono text-zinc-500 text-sm uppercase tracking-widest mb-8">Education / Academics</h3>
            <div className="relative border-l border-zinc-800/80 ml-3 md:ml-0 md:border-none space-y-8">
              {educationData.map((edu, i) => (
                <div key={edu.id} className="relative pl-8 md:pl-0 md:grid md:grid-cols-4 md:gap-8 group">
                   <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-800 border-2 border-zinc-950 md:hidden group-hover:bg-zinc-500 transition-colors duration-300" />
                   <div className="hidden md:block col-span-1 pt-1">
                    <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                      {edu.period}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex flex-col md:hidden mb-2">
                      <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                        {edu.period}
                      </p>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-zinc-200 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-zinc-400 text-sm font-medium mb-3">{edu.institution}</p>
                    {edu.details && (
                       <p className="text-zinc-500 text-sm leading-relaxed">{edu.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
