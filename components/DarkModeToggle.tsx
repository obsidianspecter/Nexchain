"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="p-2 rounded-full transition-all duration-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-md"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
}
