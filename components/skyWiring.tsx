"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const SHAPE_COUNT = 40;
const Z_SPACING = 40;
const RECYCLE_Z = SHAPE_COUNT * Z_SPACING;

type SkyShape = {
  x: number;
  y: number;
  z: number;
  rotationSpeed: number;
  color: string;
  type: number;
};

export default function SkyWireShapes() {
  const groupRef = useRef<THREE.Group>(null);

  // Create shapes only once
  const shapes = useMemo<SkyShape[]>(() => {
    return Array.from({ length: SHAPE_COUNT }).map((_, i) => ({
      x: (Math.random() > 0.5 ? 1 : -1) * (20 + Math.random() * 40),
      y: 20 + Math.random() * 30,
      z: -i * Z_SPACING,
      rotationSpeed: 0.0005 + Math.random() * 0.001,
      color: Math.random() > 0.5 ? "#22d3ee" : "#a855f7",
      type: Math.floor(Math.random() * 4),
    }));
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    groupRef.current.children.forEach((child, i) => {
      const shape = shapes[i];
      if (!shape) return;

      // move backward (illusion of forward driving)
      child.position.z += 0.05;

      // slow rotation
      child.rotation.y += shape.rotationSpeed;
      child.rotation.x += shape.rotationSpeed *5;

      // recycle to front
      if (child.position.z > 10) {
        child.position.z = -RECYCLE_Z;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {shapes.map((s, i) => (
        <mesh key={i} position={[s.x, s.y, s.z]}>
          {s.type === 0 && <boxGeometry args={[6, 6, 6]} />}
          {s.type === 1 && <coneGeometry args={[5, 8, 4]} />}
          {s.type === 2 && <cylinderGeometry args={[4, 4, 8, 6]} />}
          {s.type === 3 && <octahedronGeometry args={[4]} />}

          <meshStandardMaterial
            wireframe
            color="#020617"
            emissive={s.color}
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}
    </group>
  );
}
