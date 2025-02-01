"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroGeometric from "@/components/hero-geometric";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

export default function ContactPage() {
  // New state variables for additional form fields.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      if (response.ok) {
        toast({
          title: "Message sent",
          description: "We'll get back to you soon!",
        });
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    // Set the container background to transparent so that the geometric background shows through.
    <div className="relative flex flex-col min-h-screen bg-transparent text-foreground">
      {/* Geometric Background */}
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

      <main className="relative flex-grow container mx-auto py-24 px-6 md:px-12 lg:px-16 z-10">
        {/* Page Title with subtle 3D hover effect */}
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>

        {/* Introductory Text */}
        <motion.p
          className="text-xl text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ rotateX: 2, rotateY: 2 }}
          transition={{ duration: 1 }}
        >
          We'd love to hear from you! Whether you have a question, need support, or simply want to say hello,
          please fill out the form below with as much detail as possible so we can assist you better.
        </motion.p>

        {/* Wrapper with perspective for 3D effects */}
        <div style={{ perspective: "1000px" }}>
          {/* Contact Form with enhanced 3D hover effect */}
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-8 rounded-2xl shadow-lg bg-white/10 dark:bg-black/30 backdrop-blur-md border border-border space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ rotateX: -3, rotateY: 3, scale: 1.02 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Name Input */}
            <motion.div whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2 }} transition={{ duration: 0.2 }}>
              <label htmlFor="name" className="block text-lg mb-2">
                Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-gray-800/50 border-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary transition-all"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2 }} transition={{ duration: 0.2 }}>
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800/50 border-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary transition-all"
              />
            </motion.div>

            {/* Phone Number Input */}
            <motion.div whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2 }} transition={{ duration: 0.2 }}>
              <label htmlFor="phone" className="block text-lg mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-gray-800/50 border-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary transition-all"
              />
            </motion.div>

            {/* Subject Input */}
            <motion.div whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2 }} transition={{ duration: 0.2 }}>
              <label htmlFor="subject" className="block text-lg mb-2">
                Subject
              </label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="bg-gray-800/50 border-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary transition-all"
              />
            </motion.div>

            {/* Message Input */}
            <motion.div whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2 }} transition={{ duration: 0.2 }}>
              <label htmlFor="message" className="block text-lg mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-gray-800/50 border-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary transition-all"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.05, rotateX: -1, rotateY: 1 }} transition={{ duration: 0.2 }}>
              <Button type="submit" className="w-full py-3 text-lg rounded-xl shadow-lg transition-all">
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
