"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.documentElement.classList.add("dark");
      document.body.classList.remove("light");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-6 transition-all duration-300
        ${scrolled ? "bg-surface/80 backdrop-blur-xl border-b border-primary/20" : "bg-transparent"}`}
    >
      <div
        className="text-xl md:text-2xl font-bold tracking-tighter text-primary font-headline cursor-pointer glitch-hover"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        CREATIVE_OS
      </div>

      <div className="hidden md:flex gap-8 lg:gap-12">
        {["PROJECTS", "SKILLS", "CONTACT"].map((item, index) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="font-headline uppercase tracking-[0.1em] text-xs text-slate-500 hover:text-primary transition-all duration-300 hover:tracking-[0.15em]"
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => scrollToSection("about")}
          className="font-headline uppercase tracking-[0.1em] text-xs text-primary border-b-2 border-primary pb-1"
        >
          ABOUT
        </button>
      </div>

      <div className="flex gap-4 items-center">
        <button
          onClick={toggleTheme}
          className="relative w-12 h-6 rounded-full bg-surface-container-highest transition-all duration-300"
        >
          <span className="material-symbols-outlined text-primary text-sm absolute left-1 top-1/2 -translate-y-1/2 transition-all dark:opacity-100 opacity-0">
            dark_mode
          </span>
          <span className="material-symbols-outlined text-yellow-400 text-sm absolute right-1 top-1/2 -translate-y-1/2 transition-all dark:opacity-0 opacity-100">
            light_mode
          </span>
          <div
            className={`absolute w-4 h-4 bg-primary rounded-full top-1/2 -translate-y-1/2 transition-all duration-300 ${isDark ? "left-1" : "left-7"}`}
          />
        </button>

        <button
          onClick={() => alert("QR Scanner would open here")}
          className="material-symbols-outlined text-primary hover:scale-110 transition-transform"
        >
          qr_code_scanner
        </button>
      </div>
    </motion.nav>
  );
}
