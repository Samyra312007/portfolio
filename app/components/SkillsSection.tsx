"use client";

const skillsData = {
  runtime: [
    { name: "JAVASCRIPT_TYPESCRIPT", level: 95 },
    { name: "REACT_NEXT_VUE", level: 90 },
    { name: "PYTHON_NODE", level: 85 },
    { name: "RUST_WEBASSEMBLY", level: 75 },
  ],
  visual: [
    { name: "UI_UX_ARCHITECTURE", level: 98 },
    { name: "THREE_WEBGL", level: 88 },
    { name: "MOTION_DESIGN", level: 85 },
    { name: "FIGMA_CREATIVE", level: 92 },
  ],
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 md:px-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-headline font-bold tracking-tighter mb-4">
            TECHNICAL_STACK
          </h2>
          <div className="w-20 h-[1px] bg-[#a8ffe1] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* System Runtime */}
          <div className="space-y-12">
            <h3 className="font-headline text-lg tracking-[0.2em] text-[#a8ffe1] mb-8 border-l-2 border-[#a8ffe1] pl-4 uppercase">
              System_Runtime
            </h3>
            <div className="space-y-8">
              {skillsData.runtime.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-3">
                    <span className="font-headline text-xs tracking-widest">
                      {skill.name}
                    </span>
                    <span className="font-headline text-xs text-[#a8ffe1]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-[4px] bg-[#1f1f26] overflow-hidden">
                    <div
                      className="h-full bg-[#a8ffe1] shadow-[0_0_10px_rgba(168,255,225,0.6)] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Kernel */}
          <div className="space-y-12">
            <h3 className="font-headline text-lg tracking-[0.2em] text-[#ff51fa] mb-8 border-l-2 border-[#ff51fa] pl-4 uppercase">
              Visual_Kernel
            </h3>
            <div className="space-y-8">
              {skillsData.visual.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-3">
                    <span className="font-headline text-xs tracking-widest">
                      {skill.name}
                    </span>
                    <span className="font-headline text-xs text-[#ff51fa]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-[4px] bg-[#1f1f26] overflow-hidden">
                    <div
                      className="h-full bg-[#ff51fa] shadow-[0_0_10px_rgba(255,81,250,0.6)] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
