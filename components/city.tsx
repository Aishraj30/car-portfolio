"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
  position?: [number, number, number];
  scale?: number;
};

export default function SideModel({
  position = [10, 0, -40], // right side of road
  scale = 1,
}: Props) {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/side-object.glb");

  // subtle rotation (optional)
  useFrame(() => {
    if (!ref.current) return;
    // ref.current.rotation.y += 0.002;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

// Important: preload
useGLTF.preload("/models/side-object.glb");
