"use client";

import TypewriterText from "./TypewriterText";

export default function Hero() {
  const downloadResume = () => {
    alert(
      "Resume download started! (Add your resume PDF to /public/resume.pdf)",
    );
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden relative"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#a8ffe1]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#a8ffe1]" />
            <span className="font-headline uppercase tracking-[0.3em] text-[#a8ffe1] text-sm">
              System Protocol: Active
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold tracking-tighter mb-8 leading-[0.9]">
            TERMINAL
            <br />
            <span className="text-gradient">VOID_STUDIO</span>
          </h1>

          <div className="max-w-xl text-[#acaab1] font-light mb-12 leading-relaxed">
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
              className="bg-[#a8ffe1] text-[#00654f] font-headline uppercase tracking-widest px-8 md:px-10 py-4 md:py-5 text-sm font-bold transition-all hover:shadow-[0_0_25px_rgba(168,255,225,0.5)] active:scale-95 flex items-center gap-3"
            >
              DOWNLOAD_RESUME
              <span>📥</span>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-[#48474d]/30 text-[#a8ffe1] font-headline uppercase tracking-widest px-8 md:px-10 py-4 md:py-5 text-sm font-bold hover:bg-[#a8ffe1]/5 transition-all"
            >
              VIEW_PROCESS
            </button>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end group">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute -inset-1 border border-[#a8ffe1]/30 blur-[2px] opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -inset-2 border border-[#ff51fa]/20 blur-[4px] opacity-30 group-hover:opacity-70 transition-opacity" />

            <div className="relative h-full w-full overflow-hidden border border-[#48474d]/20 bg-[#1f1f26]">
              <img
                alt="Creative developer portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                src="https://picsum.photos/id/100/800/800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent opacity-60" />
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#a8ffe1]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff51fa]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
        <span className="font-headline text-[10px] tracking-[0.4em] uppercase text-[#76747b]">
          Scroll_to_explore
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#a8ffe1] to-transparent" />
      </div>
    </section>
  );
}
