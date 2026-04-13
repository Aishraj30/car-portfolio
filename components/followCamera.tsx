"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function FollowCamera({
  carRef,
}: {
  carRef: React.RefObject<any>;
}) {
  const { camera } = useThree();

  useFrame(() => {
    if (!carRef.current) return;

    const offset = new THREE.Vector3(0, 3, 6);
    const target = carRef.current.position.clone().add(offset);

    camera.position.lerp(target, 0.5);
    camera.lookAt(
      carRef.current.position.x,
      carRef.current.position.y,
      carRef.current.position.z - 10
    );
  });

  return null;
}
