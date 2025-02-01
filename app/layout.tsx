import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import HeroGeometric from "@/components/hero-geometric"
import type React from "react"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nexchain - Cutting-Edge Courses",
  description:
    "Empowering the future through cutting-edge courses in Data Science, Web Development, Generative AI, and AR/VR",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen">
            <HeroGeometric />
            <div className="relative z-10">{children}</div>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

