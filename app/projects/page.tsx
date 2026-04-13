"use client";

import { useRouter } from "next/navigation";

export default function UnderConstruction() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#020205] text-white flex items-center justify-center px-6 overflow-hidden relative">
      
      {/* 1. NEON AMBIENCE & GRID */}
      <div className="absolute inset-0 z-0">
        {/* Faded Background Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #a855f7 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
        
        {/* Corner Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* 2. MAIN HUD UNIT */}
      <div className="relative z-10 w-full max-w-2xl text-center">
        
        {/* NEON LOGO / ICON */}
        <div className="relative inline-block mb-10 group">
          <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
          <div className="relative w-24 h-24 border-2 border-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)]">
             <svg 
                className="w-12 h-12 text-cyan-400 animate-pulse" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
          </div>
        </div>

        {/* STYLISH LABELS */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
            <span className="text-white">PROJECTS</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
              RESTRICTED
            </span>
          </h1>
          <div className="mt-4 flex items-center justify-center gap-4">
             <div className="h-[1px] w-8 bg-cyan-500/50" />
             <p className="text-cyan-400 font-mono tracking-[0.4em] text-[10px] md:text-xs uppercase">
               Garage Maintenance in Progress
             </p>
             <div className="h-[1px] w-8 bg-cyan-500/50" />
          </div>
        </div>

        {/* GLASS CONTENT BOX */}
        <div className="bg-black/60 backdrop-blur-2xl border border-white/5 rounded-[32px] p-10 shadow-2xl relative overflow-hidden group">
          
          {/* Neon inner border effect */}
          <div className="absolute inset-0 border border-cyan-500/20 rounded-[32px] pointer-events-none group-hover:border-cyan-500/40 transition-colors" />

          <p className="text-gray-400 text-lg mb-10 font-light tracking-wide">
            Our <span className="text-white font-bold">engineers</span> are currently fine-tuning the 
            visuals and performance of the <span className="text-purple-400">Featured Projects</span> vault. 
            Expect a high-velocity reveal soon.
          </p>

          {/* ANIMATED LOADING BAR */}
          <div className="relative w-full h-1.5 bg-white/5 rounded-full mb-12 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 w-[200%] animate-loading-slide shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => router.push("/drive")}
              className="group relative px-10 py-4 bg-transparent border border-cyan-500/50 text-cyan-400 font-bold tracking-widest hover:text-black transition-all duration-300 uppercase italic text-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-[-1]" />
              <span className="relative z-10">Back to Track</span>
            </button>
            
            <button
              onClick={() => router.push("/contact")}
              className="group relative px-10 py-4 bg-transparent border border-purple-500/50 text-purple-400 font-bold tracking-widest hover:text-black transition-all duration-300 uppercase italic text-sm overflow-hidden"
            >
               <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-[-1]" />
              <span className="relative z-10">Open Support Ticket</span>
            </button>
          </div>
        </div>

        {/* DATA HUD FOOTER */}
        <div className="mt-12 font-mono text-[9px] text-cyan-500/40 flex justify-between items-center px-6 uppercase tracking-widest">
          <div className="flex gap-4">
            <span>RPM: 0000</span>
            <span>GEAR: NEUTRAL</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping" />
            <span>Server: Latency_Optimized</span>
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx global>{`
        @keyframes loading-slide {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-loading-slide {
          animation: loading-slide 2s linear infinite;
        }
        body {
            background-color: #020205;
        }
      `}</style>
    </section>
  );
}