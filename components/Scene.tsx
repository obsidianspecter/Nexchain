"use client";

import { OrbitControls, Grid } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Fix: Ensure dynamic import correctly retrieves default export
const AnimatedBox = dynamic(() => import("./AnimatedBox").then((mod) => mod.default), {
  ssr: false,
});

export function Scene() {
  const initialPositions: [number, number, number][] = [
    [-9, 0.5, -9],
    [-3, 0.5, -3],
    [0, 0.5, 0],
    [3, 0.5, 3],
    [9, 0.5, 9],
    [-6, 0.5, 6],
    [6, 0.5, -6],
    [-12, 0.5, 0],
    [12, 0.5, 0],
    [0, 0.5, 12],
  ];

  return (
    <Canvas shadows camera={{ position: [0, 5, 15], fov: 50 }} style={{ width: "100vw", height: "100vh" }}>
      <OrbitControls enableDamping dampingFactor={0.1} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={0.5} />

      <Grid
        renderOrder={-1}
        position={[0, 0, 0]}
        infiniteGrid
        cellSize={1}
        cellThickness={0.5}
        sectionSize={3}
        sectionThickness={1}
        sectionColor="#808080"
        fadeDistance={50}
      />

      {/* Fix: Wrap AnimatedBox inside Suspense */}
      <Suspense fallback={null}>
        {initialPositions.map((position, index) => (
          <AnimatedBox key={index} initialPosition={position} />
        ))}
      </Suspense>
    </Canvas>
  );
}
