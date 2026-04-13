"use client";

import SideShapes from "@/components/bgShapes";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#020205] text-white flex items-center justify-center px-6 relative overflow-x-hidden">
      
      {/* 1. BACKGROUND NEON BLURS */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full animate-pulse-slow" />
        
        {/* Subtle Scanline Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(transparent_50%,#fff_50%)] bg-[length:100%_4px]" />
      </div>

      {/* 2. GRID LAYOUT */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-[1fr_2.5fr_1fr] gap-6 items-center relative z-10">

        {/* LEFT HUD DECORATION */}
        <div className="hidden md:block h-[450px] border-l border-cyan-500/20 relative">
          <div className="absolute top-0 left-0 w-4 h-[2px] bg-cyan-400" />
          <div className="absolute bottom-0 left-0 w-4 h-[2px] bg-cyan-400" />
          <div className="h-full flex items-center justify-center opacity-40">
            <SideShapes />
          </div>
        </div>

        {/* CENTER CONTENT: THE PILOT DOSSIER */}
        <div className="relative group">
          {/* Animated Glow Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-b from-cyan-500 via-transparent to-purple-500 rounded-[32px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          
          <div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-14 shadow-2xl overflow-hidden">
            
            {/* HUD Header */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <p className="text-cyan-400 tracking-[0.5em] text-[10px] md:text-xs font-black uppercase mb-2">
                  Pilot Biography // ID: 828-AR
                </p>
                <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
                  Aishraj <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Bamoriya</span>
                </h1>
              </div>
              <div className="hidden sm:block text-right font-mono text-[9px] text-gray-500 uppercase">
                Status: <span className="text-cyan-400">Ready for Launch</span><br />
                Class: <span className="text-purple-400">Full-Stack Dev</span>
              </div>
            </div>

            {/* BIO TEXT WITH DECORATIVE LINE */}
            <div className="relative border-l-2 border-cyan-500/30 pl-6 md:pl-10">
              <p className="text-gray-300 leading-relaxed text-sm md:text-lg font-medium">
                Passionate Full-Stack Web Developer specialized in building 
                <span className="text-white font-bold italic"> high-performance engines </span> 
                for the digital web. I thrive on the thrill of solving complex problems, from the visual aesthetics of the 
                <span className="text-cyan-400"> frontend chassis </span> 
                to the raw power of the 
                <span className="text-purple-400"> backend drivetrain</span>.
              </p>
              
              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

              <p className="text-gray-400 leading-relaxed text-sm md:text-base italic">
                I don’t just write code; I tune it for speed, scalability, and impact. 
                Whether it's crafting responsive UI components or designing efficient database 
                architectures, my goal is always a 
                <span className="text-white"> podium finish </span> 
                for every user experience.
              </p>
            </div>

            {/* ACTION BUTTONS: THE CONTROLS */}
            <div className="mt-12 flex flex-wrap gap-6">
              <a
                href="/Aishraj_Bamoriya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-transparent border border-cyan-500/50 text-cyan-400 font-black italic tracking-widest text-sm overflow-hidden transition-all hover:border-cyan-400"
              >
                <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-[-1]" />
                <span className="relative z-10 group-hover:text-black">DOWNLOAD_CV</span>
              </a>

              <button
                type="button"
                onClick={() => router.push("/drive")}
                className="group relative px-8 py-4 bg-transparent border border-purple-500/50 text-purple-400 font-black italic tracking-widest text-sm overflow-hidden transition-all hover:border-purple-500"
              >
                <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-[-1]" />
                <span className="relative z-10 group-hover:text-black">EXIT_TO_DRIVE</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT HUD DECORATION */}
        <div className="hidden md:block h-[450px] border-r border-purple-500/20 relative">
          <div className="absolute top-0 right-0 w-4 h-[2px] bg-purple-400" />
          <div className="absolute bottom-0 right-0 w-4 h-[2px] bg-purple-400" />
          <div className="h-full flex items-center justify-center opacity-40 rotate-180">
            <SideShapes />
          </div>
        </div>
      </div>

      {/* FOOTER STATS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-12 font-mono text-[9px] text-gray-600 uppercase tracking-widest pointer-events-none">
        <div className="flex gap-2"><span className="text-cyan-500">INT:</span> 95</div>
        <div className="flex gap-2"><span className="text-purple-500">SPD:</span> MAX</div>
        <div className="flex gap-2"><span className="text-cyan-500">LOC:</span> BHOPAL_IN</div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
}