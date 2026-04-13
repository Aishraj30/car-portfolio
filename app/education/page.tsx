"use client";

import { useRouter } from "next/navigation";
import SideShapes from "@/components/bgShapes";

export default function Education() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#020205] text-white flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* 1. BACKGROUND NEON ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* 2. GRID LAYOUT */}
      <div className="w-full max-w-10xl grid grid-cols-1 md:grid-cols-[1fr_2.5fr_1fr] gap-3 items-center relative z-10">

        {/* LEFT SHAPES */}
        <div className="hidden md:block h-[420px] opacity-40">
          <SideShapes />
        </div>

        {/* CENTER CONTENT: ACADEMIC LOG */}
        <div className="w-full bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,1)] relative overflow-hidden">
          
          {/* HEADER SECTION */}
          <div className="relative mb-12">
            <p className="text-cyan-400 tracking-[0.6em] text-[10px] md:text-xs font-black uppercase mb-2 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-cyan-500/50" />
              Academic Log
            </p>
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-tight">
              DRIVER <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">QUALIFICATIONS</span>
            </h1>
          </div>

          {/* TIMELINE CONTENT */}
          <div className="space-y-10 relative">
            {/* Vertical Connector Line */}
            <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-30 ml-[-20px] md:ml-[-30px]" />

            {/* COLLEGE: B.TECH */}
            <div className="relative group">
              {/* Glowing Dot on Timeline */}
              <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-400 rounded-full ml-[-25px] md:ml-[-35px] shadow-[0_0_15px_#22d3ee] animate-pulse" />
              
              <div className="border-l-2 border-transparent group-hover:border-cyan-500/50 transition-all pl-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h2 className="text-xl md:text-2xl font-black italic tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    B.Tech — CSE (AIML)
                  </h2>
                  <span className="font-mono text-xs text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    2023 // 2027
                  </span>
                </div>

                <p className="text-purple-400 font-bold tracking-widest text-xs uppercase mb-4">
                  Oriental Institute of Science and Technology, Bhopal
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5 group-hover:bg-white/10 transition-all">
                        <span className="text-[10px] text-gray-500 uppercase block mb-1">Performance_Score</span>
                        <span className="text-lg font-bold text-white tracking-widest">CGPA: 8.28</span>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5 group-hover:bg-white/10 transition-all">
                        <span className="text-[10px] text-gray-500 uppercase block mb-1">Core_Specialization</span>
                        <span className="text-sm font-bold text-white uppercase tracking-tighter">AI & Machine Learning</span>
                    </div>
                </div>
              </div>
            </div>

            {/* SCHOOL: SECONDARY */}
            <div className="relative group">
              {/* Glowing Dot on Timeline */}
              <div className="absolute left-0 top-2 w-3 h-3 bg-purple-500 rounded-full ml-[-25px] md:ml-[-35px] shadow-[0_0_15px_#a855f7]" />

              <div className="border-l-2 border-transparent group-hover:border-purple-500/50 transition-all pl-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h2 className="text-xl md:text-2xl font-black italic tracking-tight text-white group-hover:text-purple-400 transition-colors">
                    High School (MPBSE)
                  </h2>
                  <span className="font-mono text-xs text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                    COMPLETED 2023
                  </span>
                </div>

                <p className="text-cyan-400 font-bold tracking-widest text-xs uppercase mb-4">
                  Bhopal Academy Co-Ed Hr. Sec. School
                </p>

                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase">Class 12th</span>
                    <span className="text-xl font-black italic text-white">80%</span>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase">Class 10th</span>
                    <span className="text-xl font-black italic text-white">86.6%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-16 flex items-center gap-6">
            <button
              onClick={() => router.push("/drive")}
              className="group relative px-8 py-3 bg-black border border-cyan-500 text-cyan-400 font-black italic uppercase tracking-widest text-sm overflow-hidden transition-all hover:shadow-[0_0_20px_#22d3ee]"
            >
              <div className="absolute inset-0 bg-cyan-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10 group-hover:text-black">Back to Drive</span>
            </button>
            
            <div className="hidden sm:block h-[1px] flex-grow bg-white/5" />
            
            <span className="font-mono text-[9px] text-gray-600 uppercase tracking-widest">
              Secured_Channel // Auth_Verified
            </span>
          </div>
        </div>

        {/* RIGHT SHAPES */}
        <div className="hidden md:block h-[420px] opacity-40">
          <SideShapes />
        </div>
      </div>

      {/* CUSTOM STYLE FOR TIMELINE PULSE */}
      <style jsx global>{`
        body {
          background-color: #020205;
        }
      `}</style>
    </section>
  );
}