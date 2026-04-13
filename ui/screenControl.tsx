"use client";

import { useControls } from "@/context/controlContext";
import useIsMobile from "@/app/hooks/useIsMobile";

export default function ScreenControls() {
  return null;
}

const container = {
  position: "fixed" as const,
  bottom: 20,
  right: 20,
  display: "flex",
  flexDirection: "column" as const,
  gap: 10,
  zIndex: 1000,
};

const btn = {
  width: 56,
  height: 56,
  fontSize: 22,
  borderRadius: 12,
  border: "none",
  background: "rgba(0,0,0,0.6)",
  color: "white",
};
