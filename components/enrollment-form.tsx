"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export default function EnrollmentForm({ courseTitle }: { courseTitle: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("Both fields are required.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSuccess(true);

    // Here you would typically send the data to your backend
    console.log("Enrollment submitted:", { name, email, courseTitle });
    toast({
      title: "Enrollment Submitted",
      description: `Thank you for enrolling in ${courseTitle}. We'll be in touch soon!`,
    });

    setTimeout(() => setSuccess(false), 3000); // Hide success message after 3s
    setName("");
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto bg-black border border-gray-800 p-6 rounded-lg shadow-xl"
    >
      <h2 className="text-xl font-bold text-center text-white mb-4">
        Enroll in <span className="text-blue-500">{courseTitle}</span>
      </h2>

      {error && (
        <motion.p
          className="text-red-500 text-sm text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}

      {success && (
        <motion.p
          className="text-green-400 text-sm text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Enrollment successful!
        </motion.p>
      )}

      <motion.form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <Button
          type="submit"
          className="w-full bg-black-600 hover:bg-black-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
        >
          Enroll Now
        </Button>
      </motion.form>
    </motion.div>
  );
}
