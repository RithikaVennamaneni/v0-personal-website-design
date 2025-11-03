import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      dateStyle: 'full',
      timeStyle: 'long'
    })

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'vennamanenirithikarao@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%); color: #f8fafc; border-radius: 12px;">
          <h2 style="color: #06b6d4; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background: rgba(15, 23, 42, 0.6); padding: 20px; border-radius: 8px; margin-bottom: 15px; border: 1px solid rgba(148, 163, 184, 0.1);">
            <p style="margin: 0 0 10px 0;"><strong style="color: #6366f1;">Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong style="color: #6366f1;">Email:</strong> ${email}</p>
            <p style="margin: 0;"><strong style="color: #6366f1;">Timestamp:</strong> ${timestamp}</p>
          </div>
          
          <div style="background: rgba(15, 23, 42, 0.6); padding: 20px; border-radius: 8px; border: 1px solid rgba(148, 163, 184, 0.1);">
            <p style="margin: 0 0 10px 0;"><strong style="color: #8b5cf6;">Message:</strong></p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; color: #94a3b8; text-align: center;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}
