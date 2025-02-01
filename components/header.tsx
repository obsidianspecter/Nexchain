"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SpinningLogo } from "./spinning-logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-40 w-full bg-gradient-to-r from-black/80 to-gray-900 backdrop-blur-lg border-b border-white/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo & Branding */}
        <Link href="/" className="flex items-center space-x-2">
          <SpinningLogo />
          <span className="font-bold text-white text-lg">Nexchain</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              className="relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-white transition-colors hover:text-white/80"
              >
                {item.label}
              </Link>
              <motion.span
                className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-pink-500 to-yellow-500 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-white" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 text-white p-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-2 py-2 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
