"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { TypingEffect } from "@/components/typing-effect"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const roles = [
    "Data Analyst",
    "Business Analyst",
    "Problem Solver",
    "Data Storyteller"
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Premium floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)" }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)" }}
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)" }}
        animate={{
          y: [0, -20, 0],
          x: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {/* Premium badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-foreground">Available for opportunities</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm{" "}
                <span className="gradient-text block mt-2">
                  Rithika Vennamaneni
                </span>
              </motion.h1>
              
              <motion.div 
                className="text-2xl sm:text-3xl font-medium text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <TypingEffect texts={roles} className="text-accent" />
              </motion.div>
              
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                I bridge data and business needs by transforming information into insights, building solutions that
                improve efficiency, and driving impact across teams.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className="bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button 
                  onClick={() => scrollToSection("#projects")}
                  variant="outline"
                  className="glass border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
                >
                  View Projects
                </Button>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="flex gap-4 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <a href="https://github.com/Rithika-vennamaneni" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/vennamaneni-rithika-546a1b203" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:vennamanenirithikarao@gmail.com" className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110">
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* Premium glow effect */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <Card className="relative p-1 glass-dark border-primary/30 hover-lift overflow-hidden group">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/rithika-profile.png"
                    alt="Rithika Vennamaneni"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="flex justify-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <button 
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
          >
            <span className="text-sm font-medium">Explore More</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 group-hover:text-accent" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
