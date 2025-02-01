"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { memo } from "react";

// Define the structure of a course
interface CourseType {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

// Course Data
const courses: CourseType[] = [
  { title: "Data Science", description: "Learn to analyze and interpret complex data", icon: "📊", slug: "data-science" },
  { title: "Web Development", description: "Master the art of building modern web applications", icon: "🌐", slug: "web-development" },
  { title: "Generative AI", description: "Explore the cutting-edge world of AI-generated content", icon: "🤖", slug: "generative-ai" },
  { title: "AR/VR", description: "Dive into the immersive technologies of the future", icon: "🥽", slug: "ar-vr" },
];

// Extracted Course Card Component
const CourseCard = memo(({ course }: { course: CourseType }) => {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <span className="text-2xl">{course.icon}</span>
          {course.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{course.description}</CardDescription>
        <Button asChild>
          <Link href={`/courses/${course.slug}`} aria-label={`Learn more about ${course.title}`}>
            Learn More
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
});

export default function CoursesSection() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
