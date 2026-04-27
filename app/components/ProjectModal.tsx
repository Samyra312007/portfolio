"use client";

import { useEffect } from "react";

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

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[1000] flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#1f1f26] max-w-2xl w-full p-8 border border-[#a8ffe1]/30"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-3xl font-headline font-bold mb-4 text-[#a8ffe1]">
          {project.title}
        </h3>
        <p className="text-[#acaab1] mb-6 leading-relaxed">
          {project.fullDescription}
        </p>
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="bg-[#a8ffe1] text-[#00654f] px-6 py-3 font-headline uppercase tracking-widest text-sm hover:shadow-glow transition-all"
          >
            CLOSE
          </button>
          <button
            onClick={() => alert("Case study coming soon!")}
            className="border border-[#48474d]/30 text-[#a8ffe1] px-6 py-3 font-headline uppercase tracking-widest text-sm hover:bg-[#a8ffe1]/5 transition-all"
          >
            VIEW CASE STUDY
          </button>
        </div>
      </div>
    </div>
  );
}
