"use client"

import type React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

// Security utilities
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, "") // Remove potential XSS characters
    .replace(/['"]/g, "") // Remove quotes that could be used in injection
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim()
}

const validatePhoneNumber = (phone: string): boolean => {
  // Allow numbers, spaces, hyphens, parentheses, and plus sign
  const phoneRegex = /^[\d\s\-$$$$+]*$/
  return phoneRegex.test(phone)
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({})

  // Rate limiting state
  const submissionAttempts = useRef(0)
  const lastSubmissionTime = useRef(0)
  const maxAttempts = 3
  const cooldownPeriod = 60000 // 1 minute

  const validateForm = (formData: FormData): boolean => {
    const errors: { [key: string]: string } = {}

    const firstName = sanitizeInput(formData.get("firstName") as string)
    const lastName = sanitizeInput(formData.get("lastName") as string)
    const email = sanitizeInput(formData.get("email") as string)
    const phone = sanitizeInput(formData.get("phone") as string)
    const message = sanitizeInput(formData.get("message") as string)

    // Validate required fields
    if (!firstName || firstName.length < 2) {
      errors.firstName = "First name must be at least 2 characters"
    }
    if (!lastName || lastName.length < 2) {
      errors.lastName = "Last name must be at least 2 characters"
    }
    if (!email || !validateEmail(email)) {
      errors.email = "Please enter a valid email address"
    }
    if (phone && !validatePhoneNumber(phone)) {
      errors.phone = "Phone number can only contain numbers, spaces, hyphens, parentheses, and plus sign"
    }
    if (!message || message.length < 10) {
      errors.message = "Message must be at least 10 characters"
    }

    // Check for suspicious content (potential XSS)
    const suspiciousPatterns = [/<script/i, /javascript:/i, /on\w+=/i, /<iframe/i, /<object/i, /<embed/i]

    const allContent = `${firstName} ${lastName} ${email} ${phone} ${message}`
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(allContent)) {
        errors.security = "Suspicious content detected. Please remove any HTML or script tags."
        break
      }
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const checkRateLimit = (): boolean => {
    const now = Date.now()

    // Reset attempts if cooldown period has passed
    if (now - lastSubmissionTime.current > cooldownPeriod) {
      submissionAttempts.current = 0
    }

    if (submissionAttempts.current >= maxAttempts) {
      const remainingTime = Math.ceil((cooldownPeriod - (now - lastSubmissionTime.current)) / 1000)
      setError(`Too many submission attempts. Please wait ${remainingTime} seconds before trying again.`)
      return false
    }

    return true
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Only allow numbers, spaces, hyphens, parentheses, and plus sign
    const sanitizedValue = value.replace(/[^\d\s\-$$$$+]/g, "")
    e.target.value = sanitizedValue
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setValidationErrors({})

    // Check rate limiting
    if (!checkRateLimit()) {
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    // Validate form
    if (!validateForm(formData)) {
      return
    }

    setIsSubmitting(true)
    submissionAttempts.current++
    lastSubmissionTime.current = Date.now()

    // Check honeypot field (should be empty)
    const honeypot = formData.get("_gotcha") as string
    if (honeypot) {
      setError("Spam detected. Please try again.")
      setIsSubmitting(false)
      return
    }

    // Sanitize all form data before sending
    const sanitizedData = new FormData()
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        sanitizedData.append(key, sanitizeInput(value))
      } else {
        sanitizedData.append(key, value)
      }
    }

    try {
      const response = await fetch("https://formspree.io/f/mwpblwgd", {
        method: "POST",
        body: sanitizedData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
        submissionAttempts.current = 0 // Reset on successful submission
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || "Form submission failed")
      }
    } catch (error) {
      console.error("Error:", error)
      setError("Failed to send your message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-bg px-6 py-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-light">
            <Link href="/" className="hover:text-accent transition-colors">
              Ken D. Putra
            </Link>
          </div>
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
                  maxLength={50}
                  className={`w-full px-4 py-3 rounded-md border text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent ${
                    validationErrors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {validationErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  maxLength={50}
                  className={`w-full px-4 py-3 rounded-md border text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent ${
                    validationErrors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {validationErrors.lastName && <p className="text-red-500 text-sm mt-1">{validationErrors.lastName}</p>}
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                maxLength={100}
                className={`w-full px-4 py-3 rounded-md border text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent ${
                  validationErrors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {validationErrors.email && <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (numbers only)"
                maxLength={20}
                onChange={handlePhoneInput}
                className={`w-full px-4 py-3 rounded-md border text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent ${
                  validationErrors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {validationErrors.phone && <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>}
              <p className="text-gray-500 text-xs mt-1">
                Only numbers, spaces, hyphens, parentheses, and plus sign are allowed
              </p>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={6}
                maxLength={1000}
                className={`w-full px-4 py-3 rounded-md border text-bg focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent resize-none ${
                  validationErrors.message ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {validationErrors.message && <p className="text-red-500 text-sm mt-1">{validationErrors.message}</p>}
            </div>

            {/* Security error display */}
            {validationErrors.security && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                <p>{validationErrors.security}</p>
              </div>
            )}

            {/* Honeypot field - hidden from users but visible to bots */}
            <div style={{ display: "none" }}>
              <label htmlFor="_gotcha">Don't fill this out if you're human:</label>
              <input type="text" name="_gotcha" id="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Hidden fields for Formspree */}
            <input type="hidden" name="_subject" value="New contact form submission from kenduigraha.com" />
            <input type="hidden" name="_next" value="https://kenduigraha.com/contact?success=true" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
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
