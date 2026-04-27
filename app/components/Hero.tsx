"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "TerminalVoid_Resume.pdf";
    link.click();
    alert("Resume download started!");
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden relative"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-headline uppercase tracking-[0.3em] text-primary text-sm">
              System Protocol: Active
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold tracking-tighter mb-8 leading-[0.9] text-on-surface">
            TERMINAL
            <br />
            <span className="text-gradient">VOID_STUDIO</span>
          </h1>

          <div className="max-w-xl text-on-surface-variant font-light mb-12 leading-relaxed">
            <TypewriterText
              texts={[
                "A digital architect specializing in Ethereal Terminal interfaces.",
                "Building high-fidelity digital ecosystems where brutalist logic meets neon-infused minimalist aesthetics.",
                "SYSTEM_TYPEWRITER: INITIALIZING CREATIVE PROTOCOLS...",
              ]}
            />
          </div>

          <div className="flex flex-wrap gap-6">
            <button
              onClick={downloadResume}
              className="magnetic-button bg-primary text-on-primary font-headline uppercase tracking-widest px-8 md:px-10 py-4 md:py-5 text-sm font-bold transition-all hover:shadow-[0_0_25px_rgba(168,255,225,0.5)] active:scale-95 flex items-center gap-3"
            >
              DOWNLOAD_RESUME
              <span className="material-symbols-outlined text-sm">
                download
              </span>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="magnetic-button border border-outline-variant/30 text-primary font-headline uppercase tracking-widest px-8 md:px-10 py-4 md:py-5 text-sm font-bold hover:bg-primary/5 transition-all"
            >
              VIEW_PROCESS
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center md:justify-end group"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute -inset-1 border border-primary/30 blur-[2px] opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -inset-2 border border-secondary/20 blur-[4px] opacity-30 group-hover:opacity-70 transition-opacity" />

            <div className="relative h-full w-full overflow-hidden border border-outline-variant/20 bg-surface-container">
              <img
                alt="Creative developer portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                src="https://picsum.photos/id/100/800/800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
        <span className="font-headline text-[10px] tracking-[0.4em] uppercase text-outline">
          Scroll_to_explore
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
