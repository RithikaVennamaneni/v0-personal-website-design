"use client"

import { Card } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const achievements = [
    "i-Hack (IIT Bombay) — 1st Place",
    "ENIGMA ML — Runner-Up",
    "3rd Position in DesignX",
    "Special Jury Award Issued by EpsilonPi",
  ]

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium floating orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)" }}
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)" }}
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">Get to know me</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data analyst bridging technical expertise with business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="p-8 glass-dark border-primary/20 hover-lift group relative overflow-hidden">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />
                <p className="text-lg text-foreground leading-relaxed relative z-10">
                  Graduate student in <span className="text-secondary font-semibold">Information Management at UIUC ('26)</span>. I turn messy data into clear decisions with SQL,
                  Python, and Power BI. I enjoy building KPI dashboards, benchmarking services and communicating insights to
                  stakeholders.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="p-8 glass-dark border-primary/20 hover-lift group relative overflow-hidden">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />
                <p className="text-lg text-foreground leading-relaxed relative z-10">
                  Recent work spans <span className="text-accent font-semibold">research computing benchmarking</span> at Illinois Computes/NCSA, course ops analytics at the
                  iSchool, and BA internships where I streamlined workflows and delivered client-ready artifacts.
                </p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Card className="p-8 glass-dark border-primary/20 hover-lift relative overflow-hidden group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-3 glass rounded-xl">
                      <Trophy className="w-6 h-6 text-accent" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    Achievements & Recognition
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                      whileHover={{ 
                        y: -2,
                        scale: 1.05,
                        boxShadow: "0 8px 16px rgba(6, 182, 212, 0.4)"
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 glass border border-accent/30 rounded-full text-sm font-medium text-accent hover:border-accent/60 hover:bg-accent/10 transition-all duration-300 cursor-default"
                    >
                      <Trophy className="w-4 h-4" />
                      {achievement}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
