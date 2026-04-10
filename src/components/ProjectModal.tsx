"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm cursor-pointer"
        aria-hidden="true"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto cursor-auto"
      >
        {/* Header Image Pattern / Background */}
        <div className="h-32 sm:h-48 w-full bg-zinc-800 relative overflow-hidden">
          {project.image ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top opacity-50"
            />
          ) : (
            <div
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: "radial-gradient(circle, #34d399 1px, transparent 1px)", backgroundSize: "16px 16px" }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-zinc-950/50 text-zinc-400 hover:text-white hover:bg-zinc-950 transition-colors z-10"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 relative -mt-16 sm:-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-accent-400 text-xs uppercase tracking-widest mb-1 shadow-sm drop-shadow-md">CASE STUDY</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">{project.name}</h2>
            </div>
            <div className="flex items-center gap-3">
               <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm transition-colors border border-zinc-700"
                >
                  <GithubIcon /> Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-500 hover:bg-accent-400 text-zinc-950 font-bold text-sm transition-colors shadow-lg shadow-accent-500/20"
                >
                  <ExternalLinkIcon /> Live App
                </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-accent-500" /> Executive Summary
                </h3>
                <p className="text-zinc-400 leading-relaxed text-[15px]">{project.description}</p>
              </section>

              {project.problem && project.solution && (
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-zinc-950/50 p-5 rounded-xl border border-zinc-800/80">
                      <h4 className="font-mono text-sm text-zinc-300 mb-2">// The Challenge</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="bg-accent-500/5 p-5 rounded-xl border border-accent-500/20">
                      <h4 className="font-mono text-sm text-accent-400 mb-2">// The Solution</h4>
                      <p className="text-zinc-300 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6 md:border-l md:border-zinc-800 md:pl-8">
               <div>
                  <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1.5 rounded-md bg-zinc-800 border border-zinc-700/50 text-zinc-300 font-mono text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>
               
               <div>
                 <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Key Features</h4>
                 <ul className="space-y-2">
                   {project.features?.map((feature, i) => (
                      <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                        <span className="text-accent-500 mt-0.5">▹</span> {feature}
                      </li>
                   )) || <p className="text-zinc-600 text-sm italic">Standard feature set.</p>}
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
