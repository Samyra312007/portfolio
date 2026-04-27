"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectModal from "./ProjectModal";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  color: string;
  span: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "NEON_PULSE_DASHBOARD",
    category: "UI/UX • DEVELOPMENT",
    description: "Automated infrastructure management for decentralized nodes.",
    fullDescription:
      "A real-time dashboard for monitoring decentralized node infrastructure with predictive analytics and automated alert systems. Built with React, D3.js, and WebSocket connections. Features include real-time data visualization, anomaly detection, and automated incident response.",
    image: "https://picsum.photos/id/0/800/600",
    color: "primary",
    span: "md:col-span-8",
  },
  {
    id: 2,
    title: "VOID_GEOMETRY",
    category: "RESEARCH",
    description: "Exploratory 3D shader work for volumetric interface depth.",
    fullDescription:
      "Exploratory 3D shader work using Three.js and custom GLSL shaders. Real-time volumetric rendering with dynamic lighting and particle systems. Pushed the boundaries of web-based 3D graphics.",
    image: "https://picsum.photos/id/1/800/1000",
    color: "secondary",
    span: "md:col-span-4",
  },
  {
    id: 3,
    title: "SIGNAL_TRACKER",
    category: "DATA VIZ",
    description: "Geospatial data visualization for encrypted packet routing.",
    fullDescription:
      "Geospatial data visualization platform for tracking encrypted packet routing across global networks. Features real-time updates, interactive 3D maps, and advanced filtering capabilities.",
    image: "https://picsum.photos/id/2/800/600",
    color: "tertiary",
    span: "md:col-span-6",
  },
  {
    id: 4,
    title: "KINETIC_CORE",
    category: "MOTION",
    description: "Web-based visual synthesizer for algorithmic motion design.",
    fullDescription:
      "Web-based visual synthesizer for algorithmic motion design. Create generative animations using mouse input and audio reactivity. Built with Canvas API and Web Audio.",
    image: "https://picsum.photos/id/3/800/600",
    color: "primary",
    span: "md:col-span-6",
  },
];

export default function ProjectsGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="py-32 px-6 md:px-20 bg-surface-container-low"
      >
        <div className="flex justify-between items-end mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <h2 className="text-4xl font-headline font-bold tracking-tighter mb-4">
              SELECTED_WORKS
            </h2>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed">
              A curated collection of visual architectures and functional
              digital prototypes.
            </p>
          </motion.div>
          <div className="hidden md:block font-headline text-[10px] tracking-[0.2em] text-outline">
            [ COLLECTION_01 ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${project.span} group relative overflow-hidden border border-outline-variant/10 bg-surface-container-high transition-all hover:border-${project.color}/40 cursor-pointer glitch-hover`}
              onClick={() => setSelectedProject(project)}
            >
              <div
                className={`absolute top-4 left-4 z-20 px-3 py-1 glass-panel text-[10px] font-headline text-${project.color} tracking-[0.1em] border border-${project.color}/20`}
              >
                {project.category}
              </div>

              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-surface/40 group-hover:bg-transparent transition-all duration-500" />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className={`text-2xl font-headline font-bold mb-2 text-${project.color}`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm">
                      {project.description}
                    </p>
                  </div>
                  <span
                    className={`material-symbols-outlined text-${project.color}`}
                  >
                    north_east
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
