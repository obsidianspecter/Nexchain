"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroGeometric from "@/components/hero-geometric";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Container variant to stagger the children animations.
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Child variant for each element.
const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-transparent overflow-hidden">
      {/* Animated Gradient Background Overlay */}
      <div className="absolute inset-0 z-[-2]">
        <div className="w-full h-full bg-gradient-to-r from-purple-800 via-blue-800 to-green-800 animate-gradient-x opacity-60"></div>
      </div>
      
      {/* Geometric Background from Main Page */}
      <div className="absolute inset-0 z-[-1]">
        <HeroGeometric className="w-full h-full" />
      </div>
      
      <Header />
      
      <main className="flex-grow flex items-center justify-center p-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl tracking-wide glow"
            variants={childVariants}
            whileHover={{ scale: 1.05, rotateZ: 2 }}
          >
            Empowering the Future Through Cutting-Edge Courses
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-white/80 drop-shadow-lg glow"
            variants={childVariants}
          >
            Master Data Science, Web Development, Generative AI, and AR/VR
          </motion.p>
          <motion.div variants={childVariants}>
            <Button
              asChild
              className="bg-white text-black hover:bg-white/90 transition-colors px-8 py-4 rounded-lg shadow-lg"
            >
              <Link href="/courses" aria-label="Explore our courses">
                <motion.span
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  Explore Courses
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />

      {/* Inline styles for animated gradient background and glow effect */}
      <style jsx>{`
        @keyframes gradientBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradientBackground 15s ease infinite;
          background-size: 200% 200%;
        }
        @keyframes glow {
          from {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5);
          }
          to {
            text-shadow: 0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 1);
          }
        }
        .glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
