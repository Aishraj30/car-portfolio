"use client";

import { Text } from "@react-three/drei";

export default function Road() {
  const ROAD_WIDTH = 6;

  return (
    <>
      {/* ================= ROAD SURFACE ================= */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -50]}>
        <planeGeometry args={[40, 20000]} />
        <meshStandardMaterial color="#0b1020" />
      </mesh>

      {/* ================= START LABEL ================= */}
      <group position={[0, 0.02, -7]}>
        <Text
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={3}
          letterSpacing={0.3}
          color="#e0f2fe"
          outlineColor="#a855f7"
          outlineWidth={0.08}
          anchorX="center"
          anchorY="middle"
        >
          START
        </Text>
      </group>
     

      {/* ================= CENTER NEON DASH LINE ================= */}
      {Array.from({ length: 100 }).map((_, i) => (
        <mesh
          key={`center-${i}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.01, -i * 20]}
        >
          <planeGeometry args={[0.4, 6]} />
          <meshStandardMaterial
            color="white"
            emissive="#white"
            emissiveIntensity={1}
          />
        </mesh>
      ))}

      {/* ================= CONTINUOUS SIDE NEON STRIPS ================= */}

      {/* LEFT STRIP */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-(ROAD_WIDTH / 2 + 8), 0.02, -50]}
      >
        <planeGeometry args={[0.3, 20000]} />
        <meshStandardMaterial
          color="#020617"
          emissive="#a855f7"
          emissiveIntensity={1.4}
          />
      </mesh>

      {/* RIGHT STRIP */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[ROAD_WIDTH / 2 + 8, 0.02, -50]}
        >
        <planeGeometry args={[0.3, 20000]} />
        <meshStandardMaterial
          color="#020617"
          emissive="#22d3ee"
          emissiveIntensity={1.4}
        />
      </mesh>
    </>
  );
}
