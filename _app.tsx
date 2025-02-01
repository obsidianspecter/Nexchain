import { ThemeProvider } from "next-themes"
import { Manrope } from "next/font/google"
import "../styles/globals.css"
import type { AppProps } from "next/app"

const manrope = Manrope({ subsets: ["latin"] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default MyApp

