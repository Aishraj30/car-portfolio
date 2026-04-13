"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SideShapes from "@/components/bgShapes";

export default function Contact() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-[#020205] text-white flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* 1. BACKGROUND GRID & AMBIENCE */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #a855f7 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
      </div>

      {/* 2. GRID LAYOUT */}
      <div className="w-full max-w-10xl grid grid-cols-1 md:grid-cols-[1fr_2.5fr_1fr] gap-3 items-center relative z-10">

        {/* LEFT SHAPES */}
        <div className="hidden md:block h-[420px] opacity-40">
          <SideShapes />
        </div>

        {/* CENTER CONTENT: COMMS TERMINAL */}
        <div className="w-full bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative">
          
          {/* HUD ACCENTS */}
          <div className="absolute top-6 right-8 font-mono text-[9px] text-cyan-500/40 uppercase tracking-[0.3em] hidden sm:block">
            Signal_Strength: 100% // Encrypted
          </div>

          {/* HEADING */}
          <div className="mb-10">
            <p className="text-cyan-400 tracking-[0.5em] text-xs font-black mb-2 uppercase">
              Comms Uplink
            </p>
            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
              ESTABLISH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">CONTACT</span>
            </h1>
          </div>

          {/* CONTACT INFO TILES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Email", value: "aishubamoriya@gmail.com", color: "border-cyan-500/20 text-cyan-400" },
              { label: "Phone", value: "+91 95897 17157", color: "border-purple-500/20 text-purple-400" },
              { label: "Location", value: "Bhopal, India", color: "border-cyan-500/20 text-cyan-400" },
              { label: "Github", value: "Aishraj30", color: "border-purple-500/20 text-purple-400" }
            ].map((item, i) => (
              <div key={i} className={`border ${item.color.split(' ')[0]} rounded-2xl p-4 bg-white/5 backdrop-blur-sm`}>
                <p className={`${item.color.split(' ')[1]} text-[10px] font-bold uppercase tracking-widest mb-1`}>{item.label}</p>
                <p className="text-gray-300 text-xs truncate font-mono">{item.value}</p>
              </div>
            ))}
          </div>

          {/* MESSAGE FORM */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-10 group-focus-within:opacity-20 transition duration-500" />
            
            <form onSubmit={handleSubmit} className="relative space-y-5 bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 uppercase ml-1 tracking-widest">Driver_Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-gray-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 uppercase ml-1 tracking-widest">Freq_Channel (Email)</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-gray-500 uppercase ml-1 tracking-widest">Transmission_Data</label>
                <textarea
                  rows={4}
                  placeholder="Type your message..."
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-black border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-gray-700 resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative px-10 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-black italic tracking-widest text-sm overflow-hidden transition-all hover:text-black"
                >
                  <div className="absolute inset-0 bg-cyan-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="relative z-10">{loading ? "SENDING..." : "INITIALIZE SEND"}</span>
                </button>

                {success && (
                  <div className="flex items-center gap-2 text-green-400 font-mono text-[10px] animate-pulse">
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    DATA_SENT_SUCCESSFULLY
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* BACK TO DRIVE BUTTON */}
          <div className="mt-10">
            <button
              onClick={() => router.push("/drive")}
              className="text-purple-400/60 hover:text-purple-400 text-xs font-bold tracking-[0.3em] flex items-center gap-2 transition-all group"
            >
              <span className="group-hover:-translate-x-2 transition-transform">←</span> 
              ABORT TO MAIN DRIVE
            </button>
          </div>
        </div>

        {/* RIGHT SHAPES */}
        <div className="hidden md:block h-[420px] opacity-40">
          <SideShapes />
        </div>
      </div>
    </section>
  );
}