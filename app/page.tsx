"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function RacingUI() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Loading Simulation
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(prev => prev + 2), 30);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setLoading(false), 500);
    }
  }, [progress]);

  return (
    <main className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex items-center justify-center font-sans">
      
      {/* 1. CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 z-[100] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      <div className="absolute inset-0 z-[101] pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* 2. LOADING SCREEN */}
      {loading && (
        <div className="absolute inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-opacity duration-1000">
          <div className="w-64 h-1 bg-gray-900 rounded-full overflow-hidden relative">
            <div 
              className="absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_15px_#00f3ff] transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="mt-4 text-cyan-500 font-mono text-xs tracking-[0.3em] animate-pulse">
            INITIALIZING_SYSTEM... {progress}%
          </span>
        </div>
      )}

      {/* 3. RACING GRID (PERSPECTIVE) */}
      <div className="absolute inset-0 z-0" style={{ perspective: '600px' }}>
        <div 
          className="absolute inset-0 w-full h-[200%] origin-top"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 243, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 243, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: 'rotateX(65deg) translateY(-25%)',
            animation: 'grid-move 2s linear infinite'
          }}
        />
      </div>

      {/* 4. SPEED STREAKS (Enhanced) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent w-[400px]"
            style={{
              top: `${15 * i + 5}%`,
              left: '-50%',
              animation: `speed-line ${0.8 + i * 0.1}s linear infinite`,
              opacity: 0.2
            }}
          />
        ))}
      </div>

      {/* 5. MAIN CONTENT */}
      {!loading && (
        <div className="relative z-10 text-center animate-fade-in">
          <div className="relative p-12 md:p-20 border border-white/5 bg-black/40 backdrop-blur-xl rounded-3xl shadow-[0_0_100px_rgba(0,0,0,1)]">
            
            {/* Header with Chromatic Effect */}
            <div className="relative group">
               <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white uppercase mb-2 relative">
                3D portfolio
                {/* Secondary Offset for Chromatic Aberration */}
                <span className="absolute inset-0 text-cyan-500 opacity-30 translate-x-1 -z-10 animate-glitch-1">3D portfolio</span>
                <span className="absolute inset-0 text-purple-500 opacity-30 -translate-x-1 -z-10 animate-glitch-2">3D portfolio</span>
              </h1>
              <span className="block text-xl tracking-[0.6em] font-bold text-cyan-400 opacity-80 mb-12">
               SCROLLING DISABLED. DRIVE TO CONTINUE.

              </span>
            </div>

            {/* THE START BUTTON */}
            <button 
              onClick={() => router.push("/drive")} 
              className="group relative px-16 py-6 bg-transparent border-2 border-purple-500 text-purple-500 font-black text-3xl uppercase italic tracking-tighter transition-all hover:text-white hover:scale-105 active:scale-95 duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-purple-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 skew-x-[-20deg]" />
              <span className="relative z-10 flex items-center gap-4">
                Start Engine
                <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* CONTROLS GUIDE */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-10 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 border border-cyan-500/50 flex items-center justify-center rounded-lg text-cyan-400 font-black text-sm mb-2 shadow-[0_0_10px_rgba(6,182,212,0.2)]">W</div>
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em]">Accelerate</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex gap-2 mb-2">
                  <div className="w-10 h-10 border border-cyan-500/50 flex items-center justify-center rounded-lg text-cyan-400 font-black text-sm shadow-[0_0_10px_rgba(6,182,212,0.2)]">A</div>
                  <div className="w-10 h-10 border border-cyan-500/50 flex items-center justify-center rounded-lg text-cyan-400 font-black text-sm shadow-[0_0_10px_rgba(6,182,212,0.2)]">S</div>
                  <div className="w-10 h-10 border border-cyan-500/50 flex items-center justify-center rounded-lg text-cyan-400 font-black text-sm shadow-[0_0_10px_rgba(6,182,212,0.2)]">D</div>
                </div>
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em]">Steer & Brake</span>
              </div>

              <div className="h-10 w-[1px] bg-white/10 hidden md:block" />

              <div className="text-left hidden sm:block">
                <p className="text-[9px] font-mono text-purple-400 uppercase tracking-[0.2em] mb-1">Navigation Intel:</p>
                <p className="text-[9px] font-mono text-gray-400 uppercase leading-loose">
                  Drive through signs into<br/>
                  portals to view sections.
                </p>
              </div>
            </div>

            {/* HUD Elements */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-cyan-500/50 text-left">
              LAT: 40.7128<br/>LONG: -74.0060<br/>STATUS: DRIFT_READY
            </div>
            
            <div className="absolute top-4 right-4 font-mono text-[10px] text-cyan-400 group/advisory text-right">
              <div className="text-[8px] text-purple-400 font-black tracking-[0.2em] mb-1 opacity-70">CRITICAL_INTEL:</div>
              <div className="bg-cyan-500/10 border-r-2 border-cyan-400 pr-3 py-1 animate-pulse">
                <span className="text-white font-black uppercase">Open on Laptop/Desktop</span><br/>
                <span className="text-[8px] opacity-60">OPTIMAL_DRIVE_CONFIGURATION</span>
              </div>
              {/* Scanning Bar Animation */}
              <div className="h-[2px] w-full bg-cyan-400/30 mt-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan-400 w-1/3 animate-scan" />
              </div>
            </div>

            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-purple-500/50 text-right">
              VER: 2.0.4-STABLE<br/>ENGINE: V8_TURBO
            </div>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style jsx global>{`
        @keyframes grid-move {
          0% { transform: rotateX(65deg) translateY(0); }
          100% { transform: rotateX(65deg) translateY(80px); }
        }
        @keyframes speed-line {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 0.4; }
          100% { transform: translateX(150vw); opacity: 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes glitch-1 {
          0%, 100% { transform: translate(2px, 0); }
          50% { transform: translate(-2px, 1px); }
        }
        @keyframes glitch-2 {
          0%, 100% { transform: translate(-2px, 0); }
          50% { transform: translate(2px, -1px); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        button {
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
          animation: pulse-border 2s infinite;
        }
        @keyframes pulse-border {
          0%, 100% { box-shadow: 0 0 15px rgba(168, 85, 247, 0.3); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.6); }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </main>
  );
}