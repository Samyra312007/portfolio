"use client";

export default function Footer() {
  const socialLinks = ["GITHUB", "LINKEDIN", "TWITTER", "DRIBBBLE"];

  return (
    <footer className="w-full py-12 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#0e0e13] border-t border-[#48474d]/5">
      <div className="text-[#a8ffe1] font-black font-headline tracking-tighter text-xl">
        TERMINAL_VOID
      </div>

      <div className="font-headline text-[10px] tracking-[0.2em] uppercase text-slate-600 text-center">
        ©2024 TERMINAL_VOID. ALL_RIGHTS_RESERVED.
      </div>

      <div className="flex gap-6 md:gap-8 flex-wrap justify-center">
        {socialLinks.map((link) => (
          <button
            key={link}
            onClick={() => alert(`Navigate to ${link}`)}
            className="font-headline text-[10px] tracking-[0.2em] uppercase text-slate-600 hover:text-[#ff51fa] transition-all duration-200"
          >
            {link}
          </button>
        ))}
      </div>
    </footer>
  );
}
