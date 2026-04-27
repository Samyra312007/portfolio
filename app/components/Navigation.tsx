"use client";

import { useState, useEffect } from "react";

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-6 transition-all duration-300
      ${scrolled ? "bg-[#0e0e13]/80 backdrop-blur-xl border-b border-[#a8ffe1]/20" : "bg-transparent"}`}
    >
      <div
        className="text-xl md:text-2xl font-bold tracking-tighter text-[#a8ffe1] font-headline cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        CREATIVE_OS
      </div>

      <div className="hidden md:flex gap-8 lg:gap-12">
        {["PROJECTS", "SKILLS", "CONTACT"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="font-headline uppercase tracking-[0.1em] text-xs text-slate-500 hover:text-[#a8ffe1] transition-all duration-300"
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => scrollToSection("about")}
          className="font-headline uppercase tracking-[0.1em] text-xs text-[#a8ffe1] border-b-2 border-[#a8ffe1] pb-1"
        >
          ABOUT
        </button>
      </div>

      <div className="flex gap-4 items-center">
        <button
          onClick={toggleTheme}
          className="relative w-12 h-6 rounded-full bg-[#1f1f26] transition-all duration-300"
        >
          <span className="text-[#a8ffe1] text-sm absolute left-1 top-1/2 -translate-y-1/2 transition-all dark:opacity-100 opacity-0">
            🌙
          </span>
          <span className="text-yellow-400 text-sm absolute right-1 top-1/2 -translate-y-1/2 transition-all dark:opacity-0 opacity-100">
            ☀️
          </span>
          <div
            className={`absolute w-4 h-4 bg-[#a8ffe1] rounded-full top-1/2 -translate-y-1/2 transition-all duration-300 ${isDark ? "left-1" : "left-7"}`}
          />
        </button>
      </div>
    </nav>
  );
}
