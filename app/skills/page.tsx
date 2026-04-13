"use client";

import { useRouter } from "next/navigation";
import SideShapes from "@/components/bgShapes";

export default function Skills() {
  const router = useRouter();

  const skillGroups = [
    { title: "Languages", skills: "JavaScript, TypeScript, C, C++", color: "text-purple-400", border: "border-purple-500/30" },
    { title: "Frontend", skills: "HTML5, CSS3, React, Next.js, Tailwind, Three.js", color: "text-cyan-400", border: "border-cyan-500/30" },
    { title: "Backend", skills: "Node.js, Express.js, OAuth 2.0, JWT, Socket.io", color: "text-purple-400", border: "border-purple-500/30" },
    { title: "Databases", skills: "MongoDB, PostgreSQL, Prisma, Redis", color: "text-cyan-400", border: "border-cyan-500/30" },
  ];

  return (
    <section className="min-h-screen bg-[#020205] text-white flex items-center justify-center px-6 relative overflow-x-hidden">
      
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
      </div>

      {/* GRID LAYOUT */}
      <div className="w-full max-w-10xl grid grid-cols-1 md:grid-cols-[1fr_2.5fr_1fr] gap-3 items-center relative z-10">

        {/* LEFT SHAPES */}
        <div className="hidden md:block h-[420px] opacity-50">
          <SideShapes />
        </div>

        {/* CENTER CONTENT: DIAGNOSTIC DASHBOARD */}
        <div className="w-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative">
          
          {/* HUD CORNER DECORATION */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-[32px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/50 rounded-br-[32px] pointer-events-none" />

          {/* HEADING SECTION */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
              <p className="text-cyan-400 tracking-[0.4em] text-xs font-bold uppercase">
                System Diagnostics
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Skills</span>
            </h1>
          </div>

          {/* SKILLS MODULES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group, idx) => (
              <div 
                key={idx} 
                className={`group relative border ${group.border} rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]`}
              >
                {/* Module Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`${group.color} font-black italic tracking-widest uppercase text-sm`}>
                    {group.title}
                  </h3>
                  <div className="flex gap-1">
                    <div className={`w-3 h-1 ${group.color.replace('text', 'bg')} opacity-100`} />
                    <div className={`w-3 h-1 ${group.color.replace('text', 'bg')} opacity-60`} />
                    <div className={`w-3 h-1 ${group.color.replace('text', 'bg')} opacity-20`} />
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
                  {group.skills}
                </p>

                {/* Animated Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500" />
              </div>
            ))}

            {/* FULL WIDTH TOOLS MODULE */}
            <div className="md:col-span-2 border border-white/10 rounded-2xl p-6 bg-gradient-to-r from-white/5 to-transparent relative group">
              <h3 className="text-white font-black italic tracking-widest uppercase text-sm mb-4">
                Tools & Platforms
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Git, GitHub, Vercel, Postman, Notion, ClickUp
              </p>
              {/* Decorative "Scanning" line */}
              <div className="absolute top-0 right-10 h-full w-[1px] bg-cyan-500/20 group-hover:translate-x-10 transition-transform duration-1000" />
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-6">
            <button
              onClick={() => router.push("/drive")}
              className="group relative px-8 py-3 overflow-hidden rounded-sm border border-purple-500/50 text-purple-400 font-bold tracking-widest hover:text-white transition-all duration-300 uppercase italic text-sm"
            >
              <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-[-1]" />
              Return to Drive
            </button>
            
            <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-tighter">
              <span className="animate-pulse">Core_Optimized</span>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <span>Ver: 8.0.2</span>
            </div>
          </div>
        </div>

        {/* RIGHT SHAPES */}
        <div className="hidden md:block h-[420px] opacity-50">
          <SideShapes />
        </div>
      </div>

      {/* GLOBAL HUD ANIMATIONS */}
      <style jsx global>{`
        body {
          background-color: #020205;
        }
      `}</style>
    </section>
  );
}