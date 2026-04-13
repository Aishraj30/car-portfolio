"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function SignBoard({
  label,
  position,
  carRef,
}: {
  label: string;
  position: [number, number, number];
  carRef: React.RefObject<any>;
}) {
  const boardRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!carRef?.current || !boardRef?.current) return;

    const carPos = carRef.current.getWorldPosition(new THREE.Vector3());
    const boardPos = boardRef.current.getWorldPosition(new THREE.Vector3());
    const distance = carPos.distanceTo(boardPos);

    const material = boardRef.current.material as THREE.MeshStandardMaterial;

    if (distance < 18) {
      material.emissive.set("#22d3ee");
      material.emissiveIntensity = 1.4;
    } else {
      material.emissive.set("#0f172a");
      material.emissiveIntensity = 0.5;
    }
  });

  return (
    <group position={position}>
      {/* POLE */}
      <mesh position={[0, 4, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 8, 20]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* ARM */}
      <mesh position={[6, 7, 0]}>
        <boxGeometry args={[12, 0.4, 0.4]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>

      {/* MAIN BOARD */}
      <mesh
        ref={boardRef}
        position={[15, 7, 0]}
        rotation={[0, 0, -0.04]} // slight tilt
      >
        <boxGeometry args={[1, 4.5, 0.4]} />
        <meshStandardMaterial
          color="#020617"
          emissive="#0f172a"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* NEON BORDER FRAME */}
      <mesh position={[10, 7, 0.26]}>
        <boxGeometry args={[16, 4.9, 0.05]} />
        <meshStandardMaterial
          color="#1A1A1A"
          emissive="#0A0A0C"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* TEXT */}
      <Text
        position={[10, 7, 0.7]}
        fontSize={1.8}
        letterSpacing={0.12}
        color="#e0f2fe"
        outlineColor="#38bdf8"
        outlineWidth={0.05}
        anchorX="center"
        anchorY="middle"
      >
        {label.toUpperCase()} 
      </Text>
    </group>
  );
}
