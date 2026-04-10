"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Matter from "matter-js";
import { skills } from "@/data/portfolio";

export default function GravityOverlay({ onClose }: { onClose: () => void }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  
  // Refs for mapping DOM elements to Matter bodies
  const domRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sceneRef.current) return;

    // 1. Setup Matter.js Engine
    const engine = Matter.Engine.create();
    const world = engine.world;
    engineRef.current = engine;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create a hidden renderer just for physics calculations (we won't append the canvas)
    const render = Matter.Render.create({
      element: document.createElement("div"), // invisible
      engine: engine,
      options: { width, height, wireframes: false }
    });
    renderRef.current = render;

    // 2. Create Boundaries (Floor, Left Wall, Right Wall)
    const wallOptions = { isStatic: true, friction: 0.1, restitution: 0.8 };
    const ground = Matter.Bodies.rectangle(width / 2, height + 50, width * 2, 100, wallOptions);
    const leftWall = Matter.Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions);
    const rightWall = Matter.Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions);
    const ceiling = Matter.Bodies.rectangle(width / 2, -50, width * 2, 100, wallOptions);

    Matter.World.add(world, [ground, leftWall, rightWall, ceiling]);

    // 3. Create Bodies for Skills
    const skillBodies = skills.map((skill, i) => {
      // Approximate width based on character count. A bit hacky but works for DOM syncing.
      const charWidth = 10; 
      const padding = 40;
      const bodyWidth = skill.length * charWidth + padding;
      const bodyHeight = 40;

      const randomX = Math.random() * (width - 100) + 50;
      const randomY = 100 + Math.random() * 200; // Spawn clearly ON SCREEN to avoid tunneling

      return Matter.Bodies.rectangle(randomX, randomY, bodyWidth, bodyHeight, {
        restitution: 0.8,
        friction: 0.1,
        frictionAir: 0.02,
        // Give elements a tiny random rotation start
        angle: (Math.random() - 0.5) * 0.5,
        render: { visible: false } // Using DOM instead
      });
    });

    Matter.World.add(world, skillBodies);

    // 4. Mouse Interactivity (Drag & Drop)
    const mouse = Matter.Mouse.create(sceneRef.current);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    Matter.World.add(world, mouseConstraint);

    // 5. Sync Loop - Update DOM element positions to match Matter bodies
    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    let animationFrameId: number;
    let isMounted = true;
    const updateDOM = () => {
      if (!isMounted) return;
      
      skillBodies.forEach((body, i) => {
        const domElement = domRefs.current[i];
        if (domElement && isFinite(body.position.x) && isFinite(body.position.y)) {
          domElement.style.transform = `translate(${body.position.x - domElement.offsetWidth / 2}px, ${body.position.y - domElement.offsetHeight / 2}px) rotate(${body.angle}rad)`;
        }
      });
      animationFrameId = requestAnimationFrame(updateDOM);
    };

    updateDOM();

    // 6. Cleanup
    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      if (engineRef.current) Matter.Engine.clear(engineRef.current);
      if (render.canvas) render.canvas.remove();
      render.canvas = null as any;
      render.context = null as any;
      render.textures = {};
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] bg-zinc-950/90 backdrop-blur-sm overflow-hidden touch-none"
      ref={sceneRef}
    >
      <div className="absolute top-8 left-0 right-0 flex justify-center pointer-events-none">
        <h2 className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Gravity Enabled // Drag to Throw</h2>
      </div>

      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-[310] px-4 py-2 border border-accent-500/50 bg-accent-500/10 text-accent-400 rounded-lg hover:bg-accent-500 hover:text-zinc-950 transition-colors font-mono text-sm cursor-pointer"
      >
        Restore Gravity
      </button>

      {/* The DOM elements that represent the physics bodies */}
      {skills.map((skill, i) => (
        <div
          key={skill}
          ref={(el) => {
            domRefs.current[i] = el;
          }}
          className="absolute top-0 left-0 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 shadow-xl font-mono text-sm text-zinc-300 pointer-events-none select-none"
          // We set an initial transform offscreen so it doesn't flash in top-left before physics loop starts
          style={{ transform: "translate(-1000px, -1000px)" }}
        >
          {skill}
        </div>
      ))}
    </motion.div>
  );
}
