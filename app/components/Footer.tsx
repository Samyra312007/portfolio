"use client";

export default function Footer() {
  const socialLinks = ["GITHUB", "LINKEDIN", "TWITTER", "DRIBBBLE"];

  return (
    <footer className="w-full py-12 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-surface-container-low border-t border-outline-variant/5">
      <div className="flex gap-6 md:gap-8 flex-wrap justify-center">
        {socialLinks.map((link) => (
          <button
            key={link}
            onClick={() => alert(`Navigate to ${link}`)}
            className="font-headline text-[10px] tracking-[0.2em] uppercase text-slate-600 hover:text-secondary transition-all duration-200 hover:tracking-[0.3em]"
          >
            {link}
          </button>
        ))}
      </div>
    </footer>
  );
}
