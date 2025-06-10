"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-bg px-6 py-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-light">Ken D. Putra</div>
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-light hover:text-muted transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="text-light hover:text-muted transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-accent font-semibold">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Contact Form */}
      <div className="bg-light py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-12 text-center text-bg">Contact me</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-bluesky hover:bg-bluesky/90 text-light px-12 py-3 rounded-md text-lg"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>

              {isSubmitted && (
                <p className="mt-4 text-green-600">Thank you for your message! I'll get back to you soon.</p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-bg py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-light">Ken D. Putra</h3>
              <p className="text-sm text-muted">ken.duigraha@gmail.com</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-4 text-light">QUICK LINKS</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-muted hover:text-light transition-colors text-sm">
                  Home
                </Link>
                <Link href="/contact" className="text-muted hover:text-light transition-colors text-sm">
                  Contact
                </Link>
                <Link href="/portfolio" className="text-muted hover:text-light transition-colors text-sm">
                  Portfolio
                </Link>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="font-semibold mb-4 text-light">CONTACT ME</h3>
              <p className="text-sm text-muted mb-2">ken.duigraha@gmail.com</p>
              <p className="text-sm text-muted">+62 812 3456 7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
