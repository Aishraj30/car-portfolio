"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "@/context/controlContext";
import { useThree } from "@react-three/fiber";

export default function Car({
  carRef,
  isStopped,
}: {
  carRef: React.RefObject<any>;
  isStopped: boolean;
}) {
  const { controls, setControls, carPositionRef } = useControls();

  const { camera } = useThree();

  // Load car model
  const { scene } = useGLTF("/models/car.glb");
  const hasSetInitial = useRef(false);

  // 1. Initial Position Load
  useEffect(() => {
    if (carRef.current && !hasSetInitial.current && carPositionRef.current) {
      const [x, y, z] = carPositionRef.current;
      carRef.current.position.set(x, y, z);
      hasSetInitial.current = true;
    }
  }, [carPositionRef, carRef]);

  // 2. Controls & Persistence cleanup
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "w" || e.key === "ArrowUp")
        setControls((c: any) => ({ ...c, forward: true }));
      if (e.key === "s" || e.key === "ArrowDown")
        setControls((c: any) => ({ ...c, backward: true }));
      if (e.key === "a" || e.key === "ArrowLeft")
        setControls((c: any) => ({ ...c, left: true }));
      if (e.key === "d" || e.key === "ArrowRight")
        setControls((c: any) => ({ ...c, right: true }));
    };

    const up = (e: KeyboardEvent) => {
      if (e.key === "w" || e.key === "ArrowUp")
        setControls((c: any) => ({ ...c, forward: false }));
      if (e.key === "s" || e.key === "ArrowDown")
        setControls((c: any) => ({ ...c, backward: false }));
      if (e.key === "a" || e.key === "ArrowLeft")
        setControls((c: any) => ({ ...c, left: false }));
      if (e.key === "d" || e.key === "ArrowRight")
        setControls((c: any) => ({ ...c, right: false }));
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [setControls]);

 useFrame(() => {
  if (!carRef.current || isStopped) return;

  // Real-time position save (No re-renders)
  if (carPositionRef.current) {
     carPositionRef.current[0] = carRef.current.position.x;
     carPositionRef.current[1] = carRef.current.position.y;
     carPositionRef.current[2] = carRef.current.position.z;
  }

  const speed = 4;

  if (controls.forward) carRef.current.position.z -= speed;
  if (controls.backward) carRef.current.position.z += speed * 4;
  if (controls.left) carRef.current.position.x -= speed;
  if (controls.right) carRef.current.position.x += speed;

  // Clamp movement
  carRef.current.position.z = THREE.MathUtils.clamp(
    carRef.current.position.z,
    -1600,
    90
  );

  carRef.current.position.x = THREE.MathUtils.clamp(
    carRef.current.position.x,
    -8,
    8
  );

  /* ================= CAMERA FOLLOW ================= */

  const carPos = carRef.current.position;

  // Camera offset (behind & above the car)
  const cameraOffset = new THREE.Vector3(
    carPos.x,
    carPos.y + 3,      // height
    carPos.z + 5     // distance behind
  );

  // Smooth camera movement
  camera.position.lerp(cameraOffset, 0.3);

  // Camera always looks at car
  camera.lookAt(carPos.x, carPos.y + 1, carPos.z);
});


return (
  <group
    ref={carRef}
    scale={1}
    rotation={[0, -3.13, 0]} // face forward
  >
    {/* Car Model */}
    <primitive object={scene} />

    <ambientLight intensity={1.5} />

{/* Key light from above (shows details) */}
<directionalLight
  position={[0, 5, 0]}
  intensity={0.1}
  color="#ffffff"
/>

    {/* ================= HEADLIGHTS ================= */}

    {/* Left Headlight */}
   {/* Left Headlight */}
<spotLight
  position={[-2.4, 0.4, 0.9]}
  angle={0.4}
  intensity={1}
  distance={30}
  penumbra={0.4}
  color="#e0f2fe"
/>

{/* Right Headlight */}
<spotLight
  position={[-2.4, 0.4, -0.9]}
  angle={0.4}
  intensity={1}
  distance={30}
  penumbra={0.4}
  color="#e0f2fe"
/>


  <mesh position={[-2.45, 0.35, 0.9]}>
  <planeGeometry args={[0.4, 0.2]} />
  <meshStandardMaterial emissive="#e0f2fe" emissiveIntensity={2} />
</mesh>

<mesh position={[-2.45, 0.35, -0.9]}>
  <planeGeometry args={[0.4, 0.2]} />
  <meshStandardMaterial emissive="#e0f2fe" emissiveIntensity={2} />
</mesh>


    {/* ================= BACK LIGHTS ================= */}

    {/* Left Back Light */}
 <pointLight
  position={[2.4, 0.35, 0.9]}
  intensity={0.5}
  distance={8}
  color="#ef4444"
/>

<pointLight
  position={[2.4, 0.35, -0.9]}
  intensity={0.5}
  distance={8}
  color="#ef4444"
/>


    {/* Back light glow meshes */}
  <mesh position={[2.45, 0.32, 0.9]}>
  <planeGeometry args={[0.35, 0.18]} />
  <meshStandardMaterial emissive="#ef4444" emissiveIntensity={2} />
</mesh>

<mesh position={[2.45, 0.32, -0.9]}>
  <planeGeometry args={[0.35, 0.18]} />
  <meshStandardMaterial emissive="#ef4444" emissiveIntensity={2} />
</mesh>

  </group>
);

}
