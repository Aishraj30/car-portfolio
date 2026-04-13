"use client";

import * as THREE from "three";

export default function Planets() {
  return (
    <group>
      {/* Big main planet */}
      <mesh position={[0, 25, -180]}>
        <sphereGeometry args={[10, 32, 32]} />
        <meshStandardMaterial
          color="#020617"
          emissive="#22d3ee"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Side planet */}
      <mesh position={[30, 18, -140]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshStandardMaterial
          color="#020617"
          emissive="#a855f7"
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* Small distant planet */}
      <mesh position={[-40, 22, -220]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial
          color="#020617"
          emissive="#22d3ee"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}
