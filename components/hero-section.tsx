"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

// Load Canvas dynamically to prevent WebGL errors during SSR
const Canvas = dynamic(() => import("@/lib/three-imports").then((mod) => mod.Canvas), { ssr: false });

// Load AnimatedScene dynamically to optimize performance
const AnimatedScene = dynamic(() => import("./animated-scene").then((mod) => mod.AnimatedScene), { ssr: false });

export default function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden bg-black text-white">
      {/* Suspense ensures the 3D scene loads smoothly */}
      <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-white">Loading Scene...</div>}>
        <Canvas shadows camera={{ position: [30, 30, 30], fov: 50 }} className="absolute inset-0">
          <AnimatedScene />
        </Canvas>
      </Suspense>

      {/* Glowing Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/[0.1] via-transparent to-blue-500/[0.1] blur-3xl opacity-70" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <motion.div
          className="text-center z-10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            Empowering the future through cutting-edge courses
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          >
            Master Data Science, Web Development, Generative AI, and AR/VR
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
          >
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-300 hover:text-black transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              <Link href="/courses" aria-label="Explore our courses">
                Explore Courses
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Particle Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-20 top-[10%] left-[20%] animate-pulse" />
        <div className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-15 top-[50%] left-[70%] animate-pulse delay-75" />
        <div className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-10 top-[80%] left-[30%] animate-pulse delay-150" />
      </div>
    </div>
  );
}
