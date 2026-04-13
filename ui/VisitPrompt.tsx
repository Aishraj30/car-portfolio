"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function VisitPrompt({
  section,
  onCancel,
}: {
  section: "about" | "projects" | "skills" | "contact" | "education" | "experience" | null;
  onCancel: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (e.key === "Enter" && section) {
        router.push(`/${section}`);
      }
      if (e.key === "Escape") {
        onCancel();
      }
    };

    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [section, onCancel, router]);

  if (!section) return null;

  return (
    <div style={container}>
      <button style={primaryBtn} onClick={() => router.push(`/${section}`)}>
        Visit {section.charAt(0).toUpperCase() + section.slice(1)}
      </button>

      <button style={secondaryBtn} onClick={onCancel}>
        Continue Driving
      </button>
    </div>
  );
}

/* ================= STYLES ================= */

const container = {
  position: "fixed" as const,
  bottom: 40,
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: 12,
  zIndex: 3000,
};

const primaryBtn = {
  padding: "14px 26px",
  fontSize: 16,
  borderRadius: 12,
  border: "none",
  background: "#32FFFF",
  color: "#000",
  fontWeight: 600,
  cursor: "pointer",
};

const secondaryBtn = {
  padding: "14px 20px",
  fontSize: 14,
  borderRadius: 12,
  border: "1px solid #32FFFF",
  background: "transparent",
  color: "#32FFFF",
  cursor: "pointer",
};
