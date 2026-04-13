// import * as THREE from "three";


// export default function Tunnel({
//   startZ = -120,
//   children,
// }: {
//   startZ?: number;
//   children?: React.ReactNode;
// }) {
//   return (
//     <group position={[0, 0, startZ]}>
//       {/* Tunnel body */}
//       <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6, -60]}>
//         <cylinderGeometry args={[10, 10, 120, 32, 1, true]} />
//       <meshStandardMaterial
//   color="#020617"
//   emissive="#0f172a"
//   emissiveIntensity={0.4}
//   side={2} // BackSide enum value
// />

//       </mesh>

//       {/* Neon rings */}
//       {Array.from({ length: 20 }).map((_, i) => (
//         <mesh
//           key={i}
//           rotation={[Math.PI / 2, 0, 0]}
//           position={[0, 6, -i * 6]}
//         >
//           <torusGeometry args={[10, 0.15, 16, 32]} />
//           <meshStandardMaterial
//             emissive={i % 2 ? "#22d3ee" : "#a855f7"}
//             emissiveIntensity={1.2}
//             color="#020617"
//           />
//         </mesh>
//       ))}

//       {/* 🔥 PLACE SIGNS HERE */}
//       {children}
//     </group>
//   );
// }
