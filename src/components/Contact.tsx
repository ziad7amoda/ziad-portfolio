"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { emailjsConfig, personalInfo } from "@/data/portfolio";
import MagneticButton from "@/components/MagneticButton";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Atmospheric radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent-500/5 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-2xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-accent-400 text-sm mb-2 tracking-wider">
            04
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Open <span className="text-accent-400 font-accent text-4xl sm:text-5xl">Channel</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base">
            Have a project in mind or just want to chat? Send me a message!
          </p>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent-500 to-transparent mx-auto" />

          {/* Direct contact links */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 font-mono text-sm text-zinc-400 hover:text-accent-400 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {personalInfo.email}
            </a>
            {personalInfo.whatsapp.map((number) => (
              <a
                key={number}
                href={`https://wa.me/${number.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm text-zinc-400 hover:text-accent-400 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {number}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="contact-name"
                className="block font-mono text-xs text-zinc-500 mb-2 uppercase tracking-widest"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="user_name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-mono text-sm focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block font-mono text-xs text-zinc-500 mb-2 uppercase tracking-widest"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="user_email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-mono text-sm focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block font-mono text-xs text-zinc-500 mb-2 uppercase tracking-widest"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-mono text-sm focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <MagneticButton
            type="submit"
            disabled={status === "sending"}
            className="group relative w-full py-3.5 rounded-xl bg-accent-500 text-zinc-950 font-semibold text-sm transition-all duration-300 hover:bg-accent-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "idle" && "Send Message"}
            {status === "sending" && (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </span>
            )}
            {status === "success" && "✓ Message Sent!"}
            {status === "error" && "✕ Failed — Try Again"}
          </MagneticButton>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center font-mono text-sm text-accent-400"
            >
              Thanks! I&apos;ll get back to you soon.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center font-mono text-sm text-red-400"
            >
              Something went wrong. Please try again or email me directly.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
