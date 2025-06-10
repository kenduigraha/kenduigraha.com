"use client"

import type React from "react"

import { useState } from "react"
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
    <div className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact me</h1>

        <form onSubmit={handleSubmit} className="bg-navy-light p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full px-4 py-3 rounded-md bg-navy border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal"
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
                className="w-full px-4 py-3 rounded-md bg-navy border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
          </div>

          <div className="mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-md bg-navy border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <div className="mb-6">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-md bg-navy border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-md bg-navy border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal"
            ></textarea>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-teal hover:bg-teal/90 text-white px-8 py-3 rounded-md"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>

            {isSubmitted && (
              <p className="mt-4 text-green-400">Thank you for your message! I'll get back to you soon.</p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
