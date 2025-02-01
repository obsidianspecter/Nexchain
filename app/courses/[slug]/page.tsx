"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import EnrollmentForm from "@/components/enrollment-form";
import { notFound } from "next/navigation";
import HeroGeometric from "@/components/hero-geometric";

const courses = {
  "data-science": {
    title: "Data Science",
    description:
      "Master the skills to analyze and interpret complex data, driving insights and decision-making.",
    syllabus: [
      "Introduction to Data Science",
      "Statistical Analysis and Probability",
      "Data Cleaning and Preprocessing",
      "Exploratory Data Analysis",
      "Machine Learning Fundamentals",
      "Advanced Machine Learning Techniques",
      "Big Data Technologies",
      "Data Visualization",
      "Capstone Project",
    ],
  },
  "web-development": {
    title: "Web Development",
    description:
      "Learn to build modern, responsive web applications using the latest technologies and best practices.",
    syllabus: [
      "HTML, CSS, and JavaScript Fundamentals",
      "Frontend Frameworks (React, Vue, Angular)",
      "Backend Development with Node.js",
      "Database Design and Management",
      "RESTful API Development",
      "Authentication and Security",
      "Cloud Deployment and DevOps",
      "Performance Optimization",
      "Full-Stack Project",
    ],
  },
  "generative-ai": {
    title: "Generative AI",
    description:
      "Explore AI-generated content, from text and images to music and beyond, as you learn cutting-edge techniques that drive creative artificial intelligence.",
    syllabus: [
      "Introduction to AI & Machine Learning",
      "Neural Networks & Deep Learning",
      "Natural Language Processing",
      "Generative Adversarial Networks (GANs)",
      "Transformer Models & BERT",
      "AI Image Generation & Manipulation",
      "AI for Music & Audio Generation",
      "Ethical Considerations in AI",
      "Generative AI Final Project",
    ],
  },
  "ar-vr": {
    title: "AR/VR Development",
    description:
      "Dive into immersive technologies, building Augmented and Virtual Reality experiences. Master 3D modeling, interactive environments, and cutting-edge VR/AR applications that push the boundaries of reality.",
    syllabus: [
      "Fundamentals of AR & VR",
      "3D Modeling & Animation",
      "Unity & Unreal Engine",
      "AR Development (ARKit, ARCore)",
      "VR Development (Oculus, SteamVR)",
      "User Experience in Immersive Tech",
      "Spatial Computing & Interaction",
      "Performance Optimization for AR/VR",
      "Capstone AR/VR Project",
    ],
  },
};

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses[params.slug as keyof typeof courses];
  if (!course) {
    notFound();
  }

  // For this update, all text is white
  const textClass = "text-white";

  // Common container style for content sections
  const containerStyle =
    "bg-transparent p-10 rounded-xl border border-white/20 shadow-2xl mb-10 flex flex-col";

  return (
    <div className="relative flex flex-col min-h-screen bg-transparent text-white overflow-hidden">
      {/* Geometric Background from Main Page */}
      <div className="absolute inset-0 z-[-1]">
        <HeroGeometric className="w-full h-full" />
      </div>
      {/* Reflection of Geometric Background */}
      <div
        className="absolute inset-x-0 bottom-0 z-[-2] pointer-events-none"
        style={{
          height: "150px",
          transform: "scaleY(-1)",
          opacity: 0.3,
        }}
      >
        <HeroGeometric className="w-full h-full" />
      </div>

      <Header />

      <main className="flex-grow container mx-auto py-24 px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Course Title & Description */}
          <motion.h1
            className={`${
              "text-5xl sm:text-6xl font-extrabold tracking-wider drop-shadow-lg mb-8 text-center"
            } ${textClass}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
          >
            {course.title}
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl mb-12 text-center max-w-3xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {course.description}
          </motion.p>

          {/* Course Syllabus */}
          <motion.div
            className={containerStyle}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-white">
              Course Syllabus
            </h2>
            <ul className="space-y-4">
              {course.syllabus.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-4 text-lg sm:text-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.03, color: "#FFD700" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Certification Details */}
          <motion.div
            className={containerStyle}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotate: -0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center text-white">
              Certification
            </h2>
            <p className="text-xl text-center text-white">
              Upon successful completion of this course, you will receive a{" "}
              <span className="font-bold">NEXORIS-certified diploma</span>, recognizing your expertise in{" "}
              {course.title}. This certification is widely recognized in the industry and will help advance your career.
            </p>
          </motion.div>

          {/* Enrollment Section */}
          <motion.div
            className={containerStyle + " mt-10"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 20px 40px rgba(255, 255, 255, 0.3)" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-center text-white">
              Enroll Now
            </h3>
            <EnrollmentForm courseTitle={course.title} />
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
