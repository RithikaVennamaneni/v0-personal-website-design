"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || "Please try again later.")
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage("Network error. Please try again later.")
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium floating orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)" }}
        animate={{ y: [0, 50, 0], x: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)" }}
        animate={{ y: [0, -50, 0], x: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">Let's Connect</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card className="p-8 glass-dark border-primary/20 hover-lift group relative overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="glass border-accent/20 focus:border-accent transition-all duration-300"
                    disabled={isSubmitting}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="glass border-accent/20 focus:border-accent transition-all duration-300"
                    disabled={isSubmitting}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="glass border-accent/20 focus:border-accent resize-none transition-all duration-300"
                    disabled={isSubmitting}
                    placeholder="Your message..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 glass border border-accent/30 rounded-lg text-accent"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <p className="text-sm font-medium">Thanks for reaching out! I'll get back to you soon.</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 glass border border-destructive/30 rounded-lg text-destructive"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 text-primary-foreground group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="p-6 glass-dark border-primary/20 hover-lift hover-glow group relative overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />
              <div className="flex items-center space-x-4 relative z-10">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-3 glass rounded-xl">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">Email</h3>
                  <a
                    href="mailto:vennamanenirithikarao@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    vennamanenirithikarao@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-dark border-primary/20 hover-lift hover-glow group relative overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />
              <div className="flex items-center space-x-4 relative z-10">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-3 glass rounded-xl">
                    <Linkedin className="h-6 w-6 text-accent" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/vennamaneni-rithika-546a1b203"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
