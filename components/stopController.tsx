"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function StopController({
  carRef,
  setIsStopped,
  setActiveSection,
  ignoreStopRef,
}: {
  carRef: React.RefObject<any>;
  setIsStopped: (v: boolean) => void;
  setActiveSection: (v: "about" | "projects" | "skills" | "contact" | "education"| "experience" | null) => void;
  ignoreStopRef: React.MutableRefObject<boolean>;
}) {
  useFrame(() => {
    if (!carRef.current) return;

    const zones = [
      { pos: new THREE.Vector3(-14, 0, -200), section: "about" },
      { pos: new THREE.Vector3(-14, 0, -400), section: "skills" },
      { pos: new THREE.Vector3(-14, 0, -600), section: "projects" },
      { pos: new THREE.Vector3(-14, 0, -800), section: "experience" },
      { pos: new THREE.Vector3(-14, 0, -1000), section: "education" },
      { pos: new THREE.Vector3(-14, 0, -1200), section: "contact" },





        // <SignBoard label="ABOUT ME" position={[-14, 0, -200]} carRef={carRef} />
        //       <SignBoard label="SKILLS" position={[-14, 0, -400]} carRef={carRef} />
        //       <SignBoard label="PROJECTS" position={[-14, 0, -600]} carRef={carRef} />
        //       <SignBoard label="EXPERIENCE" position={[-14, 0, -800]} carRef={carRef} />
        //       <SignBoard label="EDUCATION" position={[-14, 0, -1000]} carRef={carRef} />
        //       <SignBoard label="CONTACT" position={[-14, 0, -1200]} carRef={carRef} />


    ];

    let nearAnyZone = false;

    for (const z of zones) {
      const distance = carRef.current.position.distanceTo(z.pos);

      if (distance < 10) {
        nearAnyZone = true;

        if (!ignoreStopRef.current) {
          setIsStopped(true);
          setActiveSection(z.section as any);
        }
        return;
      }
    }

    // Car moved away → reset ignore flag
    if (!nearAnyZone && ignoreStopRef.current) {
      ignoreStopRef.current = false;
    }

    setIsStopped(false);
    setActiveSection(null);
  });

  return null;
}
