"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroGeometric from "@/components/hero-geometric";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const courses = [
  { title: "Data Science", description: "Learn to analyze and interpret complex data.", slug: "data-science", icon: "📊" },
  { title: "Web Development", description: "Master the art of building modern web applications.", slug: "web-development", icon: "💻" },
  { title: "Generative AI", description: "Explore AI-generated content and its applications.", slug: "generative-ai", icon: "🤖" },
  { title: "AR/VR", description: "Dive into the immersive technologies of the future.", slug: "ar-vr", icon: "🕶️" },
  { title: "Cybersecurity", description: "Learn ethical hacking and security best practices.", slug: "cybersecurity", icon: "🔒" },
  { title: "Blockchain", description: "Understand decentralized networks and smart contracts.", slug: "blockchain", icon: "⛓️" },
  { title: "Cloud Computing", description: "Master AWS, Azure, and cloud services.", slug: "cloud-computing", icon: "☁️" },
  { title: "Machine Learning", description: "Understand algorithms and build predictive models.", slug: "machine-learning", icon: "🧠" },
];

// Animation variants (flip effect)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, rotateY: 90 },
  show: { opacity: 1, rotateY: 0, transition: { duration: 0.8 } },
};

export default function CoursesPage() {
  return (
    // Outer container: transparent background with white fonts.
    <div className="relative flex flex-col min-h-screen bg-transparent text-white overflow-hidden">
      
      {/* Main Geometric Background */}
      <div className="absolute inset-0 z-[-1]">
        <HeroGeometric />
      </div>

      {/* Reflection of Main Background */}
      <div
        className="absolute inset-x-0 bottom-0 z-[-2] pointer-events-none"
        style={{
          height: "150px",
          transform: "scaleY(-1)",
          opacity: 0.3,
        }}
      >
        <HeroGeometric />
      </div>

      <Header />

      <main className="relative flex-grow container mx-auto py-24 px-6 md:px-12 lg:px-16 z-10">
        {/* Page Title with Modern 3D Effect */}
        <motion.h1
          className="text-5xl font-extrabold text-center mb-8 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          Explore Our Courses
        </motion.h1>

        {/* Introductory Text */}
        <motion.p
          className="text-2xl text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Dive into a world of knowledge with courses designed to push your skills to the next level. Whether you're starting out or refining your expertise, our dynamic learning experience is tailored for you.
        </motion.p>

        {/* Courses Grid */}
        <div style={{ perspective: "1000px" }}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {courses.map((course) => (
              <motion.div
                key={course.slug}
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="frosted-card p-6 rounded-2xl flex flex-col h-full border border-white/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <span className="text-3xl">{course.icon}</span>
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="mb-4 text-white">
                      {course.description}
                    </CardDescription>
                  </CardContent>
                  <div className="mt-auto">
                    <Button
                      asChild
                      className="w-full bg-transparent border border-white/20 text-white hover:bg-teal-600/50 transition-all duration-300 py-3 rounded-lg"
                    >
                      <Link href={`/courses/${course.slug}`}>
                        <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                          Learn More
                        </motion.span>
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />

      {/* Inline styles for animated gradient & frosted glass effect */}
      <style jsx>{`
        .frosted-card {
          background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e);
          background-size: 400% 400%;
          animation: gradientBackground 10s ease infinite;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
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
      `}</style>
    </div>
  );
}
