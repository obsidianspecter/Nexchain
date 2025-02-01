"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

function FloatingPaths({ position }: { position: number }) {
  // Memoized paths to prevent recalculations
  const paths = useMemo(() => {
    return Array.from({ length: 36 }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
        380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
        152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
        684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      width: 0.5 + i * 0.05,
      opacity: 0.2 + i * 0.01,
      duration: 10 + Math.random() * 15, // More variation in timing
    }));
  }, [position]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-foreground" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            filter="url(#glow)"
            initial={{ pathLength: 0.1, opacity: 0.5 }}
            animate={{
              pathLength: [0.2, 1, 0.2],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function FloatingDots() {
  const dots = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      size: Math.random() * 4 + 2,
      duration: 5 + Math.random() * 10,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute bg-white rounded-full shadow-lg"
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.y,
            left: dot.x,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            y: ["0px", "20px", "-20px", "0px"],
          }}
          transition={{
            duration: dot.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function BackgroundPaths() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
        <FloatingDots />
      </div>
    </div>
  );
}
