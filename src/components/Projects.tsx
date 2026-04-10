"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/portfolio";
import ProjectModal from "@/components/ProjectModal";
import TiltWrapper from "@/components/TiltWrapper";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative py-24 sm:py-32 bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="font-mono text-accent-400 text-sm mb-2 tracking-wider">// case studies</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Things I&apos;ve built</h2>
            <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent-500 to-transparent" />
          </motion.div>

          {/* Project stack */}
          <div className="flex flex-col gap-24 relative mt-20 pb-32">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="sticky w-full"
                style={{
                  top: `calc(100px + ${i * 30}px)`
                }}
              >
                <TiltWrapper enableHoverGlow={true} className="w-full">
                  <article
                    onClick={() => setSelectedProject(project)}
                    className="group relative rounded-3xl border border-zinc-800/60 bg-zinc-900 shadow-2xl p-8 sm:p-12 transition-all duration-500 hover:border-accent-500/30 cursor-pointer w-full overflow-hidden"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        {/* Header row */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-accent-400 font-mono text-sm group-hover:border-accent-500/30 transition-colors duration-300 shadow-inner">
                            {String(i + 1).padStart(2, "0")}
                          </div>
                        </div>

                        {/* Project info */}
                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-accent-400 transition-colors duration-300">
                          {project.name}
                        </h3>
                        <p className="text-zinc-400 text-base leading-relaxed mb-8">
                          {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-[11px] tracking-wide"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <button
                            onClick={(e) => { e.stopPropagation(); window.open(project.githubUrl, '_blank'); }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 hover:border-accent-500/50 hover:text-accent-400 transition-all duration-300 text-sm font-medium relative z-20"
                            aria-label={`View ${project.name} on GitHub`}
                          >
                            <GithubIcon /> Source
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); window.open(project.liveUrl, '_blank'); }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-500 text-zinc-950 hover:bg-accent-400 transition-colors shadow-lg hover:shadow-accent-500/25 duration-300 text-sm font-bold relative z-20"
                            aria-label={`View ${project.name} live demo`}
                          >
                            <ExternalLinkIcon /> Live Demo
                          </button>
                        </div>
                      </div>

                      {/* Project Image / Abstract Visual */}
                      <div className="hidden md:flex relative h-64 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden group-hover:border-accent-500/30 transition-colors duration-500 flex-col">
                        {project.image ? (
                          <>
                            {/* Browser Chrome Header */}
                            <div className="w-full h-10 bg-zinc-950 flex items-center px-4 gap-2 z-20 border-b border-zinc-800/80 shrink-0">
                              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                            </div>
                            
                            <div className="relative w-full flex-1 overflow-hidden bg-zinc-900 border-x border-zinc-800/80">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 pointer-events-none" />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.1)_0,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-full flex-1 border border-zinc-800/50 rounded-xl relative flex flex-col pt-3 px-3 m-6 bg-zinc-900/50">
                              {/* Faux Browser Chrome */}
                              <div className="flex gap-1.5 mb-3 px-1">
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                              </div>
                              <div className="flex-1 bg-zinc-950 rounded-t-lg flex flex-col gap-3 p-4">
                                <div className="w-1/3 h-4 rounded bg-zinc-800" />
                                <div className="flex flex-col gap-2">
                                  <div className="w-full h-2 rounded bg-zinc-800" />
                                  <div className="w-5/6 h-2 rounded bg-zinc-800" />
                                  <div className="w-4/6 h-2 rounded bg-zinc-800" />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </article>
                </TiltWrapper>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
