"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function PurpleShape() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.x += 0.002;
    ref.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={ref} position={[-1.2, 0, 0]}>
      <icosahedronGeometry args={[1.1, 0]} />
      <meshBasicMaterial
        color="#a855f7" //purple
        wireframe
      />
    </mesh>
  );
}

function BlueShape() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={ref} position={[1.2, 0, 0]}>
      <octahedronGeometry args={[1]} />
      <meshBasicMaterial
        color="#22d3ee" //blue
        wireframe
      />
    </mesh>
  );
}

export default function SideShapes() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={1} />
      <PurpleShape />
      <BlueShape />
    </Canvas>
  );
}
