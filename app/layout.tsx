import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] })
const openSans = Open_Sans({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Chip Tuning Engineers - Professional Engine Optimization",
  description:
    "Professional chip tuning and eco-friendly engine optimization. Maximum performance safely and efficiently.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
