import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

// Load Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Ken Duigraha Putra | Frontend Engineer",
  description: "Professional Frontend Engineer with 6+ years of experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-outfit bg-bg text-light`}>{children}</body>
    </html>
  )
}
