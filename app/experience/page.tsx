"use client";

import { useRouter } from "next/navigation";
import SideShapes from "@/components/bgShapes";

const experiences = [
  {
    id: "eduwire",
    role: "Full Stack Developer Trainee",
    company: "Eduwire Overseas Pvt. Ltd.",
    location: "Bhopal",
    period: "JAN 2026 – PRESENT",
    summary: "Developing and optimizing production-ready full-stack applications with Next.js and secure RESTful APIs.",
    tags: ["nextjs", "nodejs", "express", "mongodb"]
  },
  {
    id: "sheryians",
    role: "Full Stack Developer Intern",
    company: "Sheryians Pvt. Ltd.",
    location: "Onsite | Bhopal",
    period: "SEP 2025 – DEC 2025",
    summary: "Architecting AI-driven assessment systems and scalable backend services using Node.js and LLM integration.",
    tags: ["nextjs", "mongodb", "langchain", "llm"]
  }
];

export default function Experience() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#020205] text-white flex flex-col items-center py-24 px-6 relative overflow-x-hidden">
      
      {/* 1. BACKGROUND GRID & ATMOSPHERE */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #a855f7 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
      </div>

      <div className="w-full max-w-6xl relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-20 text-center">
          <p className="text-cyan-400 tracking-[0.5em] text-[10px] md:text-xs font-black uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-10 h-[1px] bg-cyan-500" />
            SELECT MISSION
            <span className="w-10 h-[1px] bg-cyan-500" />
          </p>
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
            MISSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">HISTORY</span>
          </h1>
        </div>

        {/* MISSION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="group relative border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 rounded-[40px] p-8 md:p-12 hover:border-cyan-500/50 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col h-full"
            >
              <div className="mb-8">
                <span className="font-mono text-[10px] text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20 uppercase tracking-widest">
                  {exp.period}
                </span>
                <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter text-white mt-6 group-hover:text-cyan-400 transition-colors">
                  {exp.role}
                </h2>
                <p className="text-purple-400 font-bold tracking-[0.2em] text-xs uppercase mt-2">
                  {exp.company}
                </p>
              </div>

              <p className="text-gray-400 text-base leading-relaxed mb-10 flex-grow">
                {exp.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono text-gray-500 border border-white/5 py-1 px-2 rounded lowercase bg-black/40">
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => router.push(`/experience/${exp.id}`)}
                className="w-full py-5 bg-transparent border-2 border-cyan-400 text-cyan-400 font-black italic uppercase tracking-tighter text-sm transition-all hover:bg-cyan-400 hover:text-black hover:scale-[1.02]"
              >
                READ FULL MISSION LOG
              </button>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/5 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* BOTTOM NAV */}
        <div className="mt-20 flex flex-wrap gap-6 items-center justify-center">
          <button
            onClick={() => router.push("/drive")}
            className="group relative px-12 py-5 bg-transparent border-2 border-purple-500 text-purple-500 font-black italic uppercase tracking-widest text-sm overflow-hidden transition-all hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            <div className="absolute inset-0 bg-purple-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 z-[-1]" />
            <span className="relative z-10">Abort to Drive</span>
          </button>

          <a
            href="/Aishraj_Bamoriya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-5 bg-transparent border-2 border-white/20 text-white/50 font-black italic uppercase tracking-widest text-sm overflow-hidden transition-all hover:text-white hover:border-white"
          >
             <span className="relative z-10">View Resume (PDF)</span>
          </a>
        </div>
      </div>

       {/* TECH OVERLAY */}
       <div className="absolute top-10 right-10 pointer-events-none hidden lg:block opacity-20">
        <div className="font-mono text-[9px] text-gray-500 space-y-1 text-right uppercase">
          <p>LOG_UNIT: BAMORIYA_CENTRAL</p>
          <p>STATUS: SELECTION_REQUIRED</p>
        </div>
      </div>
    </section>
  );
}
