"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface AnimatedBoxProps {
  initialPosition: [number, number, number];
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ initialPosition }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(...initialPosition));
  const currentPosition = useRef(new THREE.Vector3(...initialPosition));
  const [hovered, setHovered] = useState(false);

  // Random color for hover effect
  const [color] = useState(() => `hsl(${Math.random() * 360}, 70%, 60%)`);

  const getAdjacentIntersection = (current: THREE.Vector3) => {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    return new THREE.Vector3(current.x + randomDirection[0] * 3, 0.5, current.z + randomDirection[1] * 3);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = getAdjacentIntersection(currentPosition.current);
      newPosition.x = Math.max(-15, Math.min(15, newPosition.x));
      newPosition.z = Math.max(-15, Math.min(15, newPosition.z));
      setTargetPosition(newPosition);
    }, 2000); // Slower, smoother movement

    return () => clearInterval(interval);
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Smooth interpolation
      currentPosition.current.lerpVectors(currentPosition.current, targetPosition, 0.05);
      meshRef.current.position.copy(currentPosition.current);

      // Subtle rotation effect
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={initialPosition}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]} // Hover scaling effect
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? color : "#333333"} />
      </mesh>
      {/* Edge lines for better visibility */}
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial attach="material" color="#ffffff" linewidth={2} />
      </lineSegments>
    </group>
  );
};

export default AnimatedBox;
