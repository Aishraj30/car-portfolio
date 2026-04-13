"use client";

export default function RacingBackground() {
  return (
    <>
      {/* CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 z-[100] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      <div className="absolute inset-0 z-[101] pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* RACING GRID */}
      <div className="absolute inset-0 z-0" style={{ perspective: "600px" }}>
        <div
          className="absolute inset-0 w-full h-[200%] origin-top"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 243, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 243, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: "rotateX(65deg) translateY(-25%)",
            animation: "grid-move 2s linear infinite",
          }}
        />
      </div>

      {/* SPEED STREAKS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent w-[400px]"
            style={{
              top: `${15 * i + 5}%`,
              left: "-50%",
              animation: `speed-line ${0.8 + i * 0.1}s linear infinite`,
              opacity: 0.2,
            }}
          />
        ))}
      </div>
    </>
  );
}
