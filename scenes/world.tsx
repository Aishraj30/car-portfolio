"use client";

import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Sky } from "@react-three/drei";
import { Stars } from "@react-three/drei";


import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Car from "@/components/car";
import Road from "@/components/road";
import FollowCamera from "@/components/followCamera";
// import NeonCity from "@/components/city";
import SkyWireShapes from "@/components/skyWiring";

import planets from "@/components/planet"
import SignBoard from "@/components/signBoard";

import EndMessageBoard from "@/components/ThanyouBoard";


import VisitPrompt from "@/ui/VisitPrompt"
import StopController from "@/components/stopController";
import Planets from "@/components/planet";

import City from "@/components/city";


export default function World() {
  const carRef = useRef<THREE.Group>(null);

  const [isStopped, setIsStopped] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "about" | "projects" | "skills" | "contact" | "education" | "experience" | null
  >(null);

  // 🔑 Ref ensures the frame loop sees the change INSTANTLY (fixing the double-click issue)
  const ignoreStopRef = useRef(false);

  // User chooses to continue driving
  const resumeDriving = () => {
    setIsStopped(false);
    setActiveSection(null);
    ignoreStopRef.current = true;
  };

  return (
    <>
      {/* ================= 3D SCENE ================= */}
      <Canvas camera={{ position: [0, 4, 8], fov: 70 }}>

       
{/* <Sky
  distance={450000}
  sunPosition={[0, -1, -10]}
  turbidity={10}
  rayleigh={2}
  mieCoefficient={0.005}
  mieDirectionalG={0.8}
/> */}

<color attach="background" args={["#020617"]} />
<Stars radius={300} depth={100} count={1000} factor={4} fade />

<SkyWireShapes />



        <ambientLight intensity={1} />

        {/* Road */}
        <Road />
        {/* <NeonCity /> */}
          {/* <NeonShapes />    */}
          {/* <Planets /> */}



{/* <City position={[10, 0, -60]} scale={1.2} /> */}

        {/* Car */}
        <Car carRef={carRef} isStopped={isStopped} />

        {/* Camera Follow */}
        <FollowCamera carRef={carRef} />  

        {/* Stop & Section Detection */    }
        <StopController
          carRef={carRef}
          setIsStopped={setIsStopped}
          setActiveSection={setActiveSection}
          ignoreStopRef={ignoreStopRef}
        />

        {/* Sign Boards */}
        <SignBoard label="ABOUT ME" position={[-14, 0, -200]} carRef={carRef} />
        <SignBoard label="SKILLS" position={[-14, 0, -400]} carRef={carRef} />
        <SignBoard label="PROJECT" position={[-14, 0, -600]} carRef={carRef} />
        <SignBoard label="EXPERIENCE" position={[-14, 0, -800]} carRef={carRef} />
        <SignBoard label="EDUCATION" position={[-14, 0, -1000]} carRef={carRef} />
        <SignBoard label="CONTACT" position={[-14, 0, -1200]} carRef={carRef} />

          <EndMessageBoard position={[0, 0, -1500]} />

        <EffectComposer>
  <Bloom
    intensity={1.2}
    luminanceThreshold={0.1}
    luminanceSmoothing={0.9}
  />
</EffectComposer>

      </Canvas>

      {/* ================= UI (OUTSIDE CANVAS) ================= */}
      <VisitPrompt
        section={activeSection}
        onCancel={resumeDriving}
      />
    </>
  );
}
