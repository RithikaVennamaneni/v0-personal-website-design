import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Contact API route called")

    const body = await request.json()
    const { name, email, message } = body

    console.log("[v0] Form data received:", { name, email, messageLength: message?.length })

    // Validate required fields
    if (!name || !email || !message) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("[v0] Invalid email format")
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    console.log("[v0] Attempting to send email via Resend")

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Using Resend's default domain
      to: ["vennamanenirithikarao@gmail.com"],
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2F3B45;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    })

    console.log("[v0] Email sent successfully:", emailData.data?.id)

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        emailId: emailData.data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error sending email:", error)

    // More specific error handling
    if (error instanceof Error) {
      console.log("[v0] Error message:", error.message)
      return NextResponse.json({ error: `Failed to send email: ${error.message}` }, { status: 500 })
    }

    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
