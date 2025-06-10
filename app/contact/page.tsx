"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import ReCAPTCHA from "react-google-recaptcha"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const onCaptchaChange = useCallback((value: string | null) => {
    setCaptchaValue(value)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Check if captcha is completed
    if (!captchaValue) {
      setError("Please complete the captcha verification.")
      setIsSubmitting(false)
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add captcha value to form data
    formData.append("g-recaptcha-response", captchaValue)

    try {
      // Replace with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
        setCaptchaValue(null)
        recaptchaRef.current?.reset()
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error:", error)
      setError("Failed to send your message. Please try again later.")
      recaptchaRef.current?.reset()
      setCaptchaValue(null)
    } finally {
      setIsSubmitting(false)
    }
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
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
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
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent resize-none"
              ></textarea>
            </div>

            {/* reCAPTCHA */}
            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LcEPVsrAAAAAMZe-aPzYucHcCLaToszJfsJhRgQ" // Replace with your actual site key
                onChange={onCaptchaChange}
                theme="light"
              />
            </div>

            {/* Hidden fields for Formspree */}
            <input type="hidden" name="_subject" value="New contact form submission from kenduigraha.com" />
            <input type="hidden" name="_next" value="https://kenduigraha.com/contact?success=true" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting || !captchaValue}
                className="bg-bluesky hover:bg-bluesky/90 text-light px-12 py-3 rounded-md text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>

              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p>I'll get back to you as soon as possible.</p>
                </div>
              )}

              {error && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  <p>{error}</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Other ways to reach me - Dark Section */}
      <section className="py-16 px-6 bg-bg text-light">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-8 text-light">Other ways to reach me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold mb-2 text-light">Email</h3>
              <a href="mailto:ken.duigraha@gmail.com" className="text-muted hover:text-light transition-colors">
                ken.duigraha@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold mb-2 text-light">Phone</h3>
              <a href="tel:+6281213858586" className="text-muted hover:text-light transition-colors">
                +62 812 1385 8586
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
