"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/20 text-white border-t border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-6 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold">Nexchain</h3>
            <p className="text-white/60">Empowering the future</p>
          </motion.div>

          {/* Quick Links + Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between md:items-center"
          >
            {/* Quick Links */}
            <div className="flex space-x-4 mb-2 md:mb-0">
              <Link href="/courses" className="text-white/60 hover:text-white transition-colors">
                Courses
              </Link>
              <Link href="/pricing" className="text-white/60 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-4 text-center text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          © 2023 Nexchain. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}
