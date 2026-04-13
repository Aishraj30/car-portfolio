"use client";

import { useParams, useRouter } from "next/navigation";
import SideShapes from "@/components/bgShapes";

const experienceData: any = {
  eduwire: {
    role: "Full Stack Developer Trainee",
    company: "Eduwire Overseas Pvt. Ltd.",
    location: "Bhopal",
    period: "JAN 2026 – PRESENT",
    highlights: [
      "Developing full-stack applications using Next.js, Node.js, Express.js, and MongoDB.",
      "Building and maintaining RESTful APIs with secure authentication workflows.",
      "Implementing role-based access control (RBAC) for scalable user systems.",
      "Collaborating with senior developers to deliver production-ready features.",
      "Debugging and optimizing real-world applications for better performance."
    ],
    tags: ["nextjs", "nodejs", "express", "mongodb", "restapi", "rbac", "performance", "backend"]
  },
  sheryians: {
    role: "Full Stack Developer Intern",
    company: "Sheryians Pvt. Ltd.",
    location: "Onsite | Bhopal",
    period: "SEP 2025 – DEC 2025",
    highlights: [
      "Architected AI-driven assessment system using LLM APIs & LangChain, improving evaluation efficiency.",
      "Built scalable backend services using Node.js, Express.js, and MongoDB.",
      "Designed role-based data workflows using MongoDB Aggregation Pipelines.",
      "Implemented secure authentication & authorization using JWT and RBAC.",
      "Collaborated in Agile sprints using GitHub, Slack, and ClickUp.",
      "Optimized system performance and stability for production deployment."
    ],
    tags: ["nextjs", "mongodb", "langchain", "llm", "nodejs", "express", "jwt", "rbac", "agile"]
  }
};

export default function ExperienceDetails() {
  const { id } = useParams();
  const router = useRouter();
  const exp = experienceData[id as string];

  if (!exp) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Mission Data Not Found</div>;

  return (
    <section className="min-h-screen bg-[#020205] text-white flex flex-col items-center py-12 px-6 relative overflow-x-hidden">
      
      {/* 1. BACKGROUND GRID */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #a855f7 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
      </div>

      <div className="w-full max-w-4xl relative z-10">
        
        {/* BACK BUTTON */}
        <button 
          onClick={() => router.push("/experience")}
          className="mb-6 flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO MISSIONS
        </button>

        {/* MISSION REPORT HEADER */}
        <div className="mb-8">
          <p className="text-cyan-400 tracking-[0.5em] text-[10px] md:text-xs font-black uppercase mb-2 flex items-center gap-3">
             <span className="w-10 h-[1px] bg-cyan-500" />
             FULL MISSION DEBRIEF
          </p>
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-tight mb-3">
             {exp.role}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
             <span className="text-purple-400 font-bold tracking-widest text-[10px] uppercase bg-purple-500/10 px-3 py-1 rounded">
                @ {exp.company}
             </span>
             <span className="font-mono text-[9px] text-cyan-400/60">
                RANGE: {exp.period}
             </span>
          </div>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-14 backdrop-blur-xl relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <SideShapes />
          </div>

          <h3 className="text-xl font-bold italic text-cyan-400 mb-8 flex items-center gap-3">
             <span className="w-2 h-2 bg-cyan-400 rounded-full" />
             CORE OBJECTIVES & ACHIEVEMENTS
          </h3>

          <ul className="space-y-6">
            {exp.highlights.map((task: string, i: number) => (
              <li key={i} className="flex items-start gap-4 text-gray-300 group">
                <span className="text-cyan-500 font-black mt-1">»</span>
                <span className="text-lg leading-relaxed group-hover:text-white transition-colors">{task}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-12 border-t border-white/10">
             <h4 className="text-xs font-black tracking-widest text-gray-500 uppercase mb-6 text-center">TECHNICAL_ARRAY</h4>
             <div className="flex flex-wrap justify-center gap-3">
                {exp.tags.map((tag: string) => (
                  <span key={tag} className="px-4 py-2 bg-black border border-white/5 rounded-xl font-mono text-xs text-cyan-400/80 hover:border-cyan-400 transition-colors">
                    #{tag}
                  </span>
                ))}
             </div>
          </div>
        </div>

        {/* ACTION PANEL */}
        <div className="mt-12 flex justify-center gap-6">
           <button 
             onClick={() => router.push("/drive")}
             className="px-10 py-4 bg-purple-600/20 border border-purple-500 text-purple-400 font-bold italic uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all rounded-full"
           >
             Initialize Drive
           </button>
           <a 
             href="/Aishraj_Bamoriya_Resume.pdf"
             target="_blank"
             className="px-10 py-4 bg-cyan-500/20 border border-cyan-400 text-cyan-400 font-bold italic uppercase tracking-widest text-xs hover:bg-cyan-500 hover:text-black transition-all rounded-full"
           >
             Download Intel (PDF)
           </a>
        </div>
      </div>
    </section>
  );
}
