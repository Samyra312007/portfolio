"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  fullDescription: string;
  color: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[1000] flex justify-center items-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`bg-surface-container-highest max-w-2xl w-full p-8 border border-${project.color}/30`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              className={`text-3xl font-headline font-bold mb-4 text-${project.color}`}
            >
              {project.title}
            </h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              {project.fullDescription}
            </p>
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className={`bg-${project.color} text-on-primary px-6 py-3 font-headline uppercase tracking-widest text-sm hover:shadow-glow transition-all`}
              >
                CLOSE
              </button>
              <button
                onClick={() => alert("Case study coming soon!")}
                className="border border-outline-variant/30 text-primary px-6 py-3 font-headline uppercase tracking-widest text-sm hover:bg-primary/5 transition-all"
              >
                VIEW CASE STUDY
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
