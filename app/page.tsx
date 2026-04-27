"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <ProjectsGrid />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
