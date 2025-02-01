"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame, THREE } from "@/lib/three-imports"

function AnimatedBox({ initialPosition }: { initialPosition: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(...initialPosition))
  const currentPosition = useRef(new THREE.Vector3(...initialPosition))
  const [hovered, setHovered] = useState(false)

  const getAdjacentIntersection = (current: THREE.Vector3) => {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]
    const randomDirection = directions[Math.floor(Math.random() * directions.length)]
    return new THREE.Vector3(current.x + randomDirection[0] * 3, 0.5, current.z + randomDirection[1] * 3)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = getAdjacentIntersection(currentPosition.current)
      newPosition.x = Math.max(-15, Math.min(15, newPosition.x))
      newPosition.z = Math.max(-15, Math.min(15, newPosition.z))
      setTargetPosition(newPosition)
    }, 1000)

    return () => clearInterval(interval)
  }, [currentPosition, getAdjacentIntersection]) // Added dependencies

  useFrame((state, delta) => {
    if (meshRef.current) {
      currentPosition.current.lerp(targetPosition, 0.1)
      meshRef.current.position.copy(currentPosition.current)
    }
  })

  return (
    <group>
      <mesh
        ref={meshRef}
        position={initialPosition}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "#ffffff" : "#333333"} />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial color="#ffffff" linewidth={2} />
      </lineSegments>
    </group>
  )
}

export function AnimatedScene() {
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
  ]

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {initialPositions.map((position, index) => (
        <AnimatedBox key={index} initialPosition={position} />
      ))}
    </>
  )
}

