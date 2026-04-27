"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillsData = {
  runtime: [
    { name: "JAVASCRIPT_TYPESCRIPT", level: 95, color: "primary" },
    { name: "REACT_NEXT_VUE", level: 90, color: "primary" },
    { name: "PYTHON_NODE", level: 85, color: "primary" },
    { name: "RUST_WEBASSEMBLY", level: 75, color: "primary" },
  ],
  visual: [
    { name: "UI_UX_ARCHITECTURE", level: 98, color: "secondary" },
    { name: "THREE_WEBGL", level: 88, color: "secondary" },
    { name: "MOTION_DESIGN", level: 85, color: "secondary" },
    { name: "FIGMA_CREATIVE", level: 92, color: "secondary" },
  ],
};

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-32 px-6 md:px-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-headline font-bold tracking-tighter mb-4">
            TECHNICAL_STACK
          </h2>
          <div className="w-20 h-[1px] bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <h3 className="font-headline text-lg tracking-[0.2em] text-primary mb-8 border-l-2 border-primary pl-4 uppercase">
              System_Runtime
            </h3>
            <div className="space-y-8">
              {skillsData.runtime.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-headline text-xs tracking-widest">
                      {skill.name}
                    </span>
                    <span
                      className={`font-headline text-xs text-${skill.color}`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-[4px] bg-surface-container-highest overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-${skill.color} shadow-[0_0_10px_rgba(168,255,225,0.6)]`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <h3 className="font-headline text-lg tracking-[0.2em] text-secondary mb-8 border-l-2 border-secondary pl-4 uppercase">
              Visual_Kernel
            </h3>
            <div className="space-y-8">
              {skillsData.visual.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-headline text-xs tracking-widest">
                      {skill.name}
                    </span>
                    <span
                      className={`font-headline text-xs text-${skill.color}`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-[4px] bg-surface-container-highest overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-${skill.color} shadow-[0_0_10px_rgba(255,81,250,0.6)]`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
