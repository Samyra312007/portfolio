"use client";

import { useState } from "react";
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
      "A real-time dashboard for monitoring decentralized node infrastructure with predictive analytics and automated alert systems. Built with React, D3.js, and WebSocket connections.",
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
      "Exploratory 3D shader work using Three.js and custom GLSL shaders. Real-time volumetric rendering with dynamic lighting.",
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
      "Geospatial data visualization platform for tracking encrypted packet routing across global networks.",
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
      "Web-based visual synthesizer for algorithmic motion design. Create generative animations using mouse input.",
    image: "https://picsum.photos/id/3/800/600",
    color: "primary",
    span: "md:col-span-6",
  },
];

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-32 px-6 md:px-20 bg-[#131319]">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-md">
            <h2 className="text-4xl font-headline font-bold tracking-tighter mb-4">
              SELECTED_WORKS
            </h2>
            <p className="text-[#acaab1] font-body text-sm leading-relaxed">
              A curated collection of visual architectures and functional
              digital prototypes.
            </p>
          </div>
          <div className="hidden md:block font-headline text-[10px] tracking-[0.2em] text-[#76747b]">
            [ COLLECTION_01 ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.span} group relative overflow-hidden border border-[#48474d]/10 bg-[#1f1f26] transition-all hover:border-[#a8ffe1]/40 cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute top-4 left-4 z-20 px-3 py-1 glass-panel text-[10px] font-headline text-[#a8ffe1] tracking-[0.1em] border border-[#a8ffe1]/20">
                {project.category}
              </div>

              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-[#0e0e13]/40 group-hover:bg-transparent transition-all duration-500" />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-headline font-bold mb-2 text-[#a8ffe1]">
                      {project.title}
                    </h3>
                    <p className="text-[#acaab1] text-sm">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-[#a8ffe1]">↗</span>
                </div>
              </div>
            </div>
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
