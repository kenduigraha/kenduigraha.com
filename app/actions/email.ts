"use server"

import nodemailer from "nodemailer"

type EmailData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export async function sendEmail(data: EmailData) {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASSWORD, // your email password or app password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "ken.duigraha@gmail.com", // your email where you want to receive messages
      subject: `Contact Form: ${data.firstName} ${data.lastName}`,
      text: `
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Phone: ${data.phone || "Not provided"}
        
        Message:
        ${data.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email. Please try again later." }
  }
}
