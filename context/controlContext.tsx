"use client";

import { createContext, useContext, useState, useRef, ReactNode } from "react";

type Controls = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
};

type GameState = {
  controls: Controls;
  setControls: any;
  carPositionRef: React.RefObject<[number, number, number]>;
};

const ControlsContext = createContext<GameState | null>(null);

export function ControlsProvider({ children }: { children: ReactNode }) {
  const [controls, setControls] = useState<Controls>({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  const carPositionRef = useRef<[number, number, number]>([0, 0.2, 0]);

  return (
    <ControlsContext.Provider value={{ controls, setControls, carPositionRef }}>
      {children}
    </ControlsContext.Provider>
  );
}

export function useControls() {
  const context = useContext(ControlsContext);
  if (!context) throw new Error("useControls must be used within a ControlsProvider");
  return context;
}
