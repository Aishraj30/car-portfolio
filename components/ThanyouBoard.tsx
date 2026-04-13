"use client";

import { Text } from "@react-three/drei";

export default function EndMessageBoard({
  position = [0, 0, -300],
}: {
  position?: [number, number, number];
}) {
  const ROAD_WIDTH = 6;

  return (
    <group position={position}>
      {/* LEFT POLE */}
      <mesh position={[-(ROAD_WIDTH / 2 + 1.5), 5, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 10, 24]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* RIGHT POLE */}
      <mesh position={[ROAD_WIDTH / 2 + 1.5, 5, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 10, 24]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* MAIN BOARD */}
      <mesh position={[0, 8, 0]}>
        <boxGeometry args={[22, 4.5, 0.5]} />
        <meshStandardMaterial
          color="#020617"
          emissive="#0f172a"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* NEON FRAME */}
      <mesh position={[0, 8, 0.35]}>
        <boxGeometry args={[22.6, 5.1, 0.08]} />
        <meshStandardMaterial
          color="#020617"
          emissive="#0A0A0C"
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* TEXT */}
      <Text
        position={[0, 8, 0.8]}
        fontSize={1.8}
        letterSpacing={0.12}
        color="#e0f2fe"
        outlineColor="#38bdf8"
        outlineWidth={0.05}
        anchorX="center"
        anchorY="middle"
        textAlign="center"
      >
        HOPE YOU ENJOY
        {"\n"}THE RIDE
      </Text>
    </group>
  );
}
