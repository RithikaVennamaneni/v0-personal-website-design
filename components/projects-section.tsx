"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "AI-Powered Incident Logging Assistant (Autism Support Tool)",
    description:
      "Developed a prototype using voice-to-text, auto-summaries, and AI tagging to help educators document and analyze behavioral incidents for children with autism.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    tags: ["AI", "Voice-to-Text", "Education", "Healthcare", "Accessibility"],
  },
  {
    title: "Solidarity Gardens Volunteer Coordination",
    description:
      "Coordinated volunteer activities and resource management for community garden initiatives, optimizing scheduling and impact tracking.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    tags: ["Volunteer Management", "Community Impact", "Coordination", "Social Good"],
  },
  {
    title: "Knowledge Base for Healthcare Payer",
    description:
      "Developed comprehensive knowledge management system for healthcare payer operations, improving information accessibility and decision-making processes.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Healthcare", "Knowledge Management", "Documentation", "Process Improvement"],
  },
  {
    title: "Operational Risk KPI Dashboard",
    description:
      "Power BI dashboard visualizing 50+ incidents (dept, severity, root cause) to speed leadership reviews.",
    image: "/power-bi-dashboard-with-charts-and-kpis.jpg",
    tags: ["Power BI", "KPI", "Risk Management", "Data Visualization"],
  },
  {
    title: "Predictive Sensor Framework (Zipcar QC)",
    description: "Analytics framework to shift from reactive to proactive maintenance.",
    image: "/predictive-analytics-sensors-dashboard.jpg",
    tags: ["Predictive Analytics", "IoT", "Maintenance", "Quality Control"],
  },
  {
    title: "Celestial Analytics — Meteorite Landings",
    description: "Python + BI exploration of mass, region, composition.",
    image: "/meteorite-data-visualization-charts.jpg",
    tags: ["Python", "Data Science", "Astronomy", "Visualization"],
  },
  {
    title: "Baseball Data Visualization",
    description: "Interactive player metrics for non-technical stakeholders.",
    image: "/baseball-statistics-dashboard.jpg",
    tags: ["Sports Analytics", "Interactive Viz", "Stakeholder Communication"],
  },
  {
    title: "Equitable Urban Planning (AI-assisted)",
    description: "Scenario analytics for informal settlements.",
    image: "/urban-planning-ai-analytics.jpg",
    tags: ["AI", "Urban Planning", "Social Impact", "Scenario Analysis"],
  },
  {
    title: "Research Paper on Agile Methodologies",
    description: "Evolving Paradigms: Agile Methodologies' Triumph over Waterfall in Modern Business Practices.",
    image: "/agile-methodology-research-paper.jpg",
    tags: ["Research", "Agile", "Business Process", "Academic"],
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium floating orbs */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)" }}
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">Featured Work</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming data into actionable insights through innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card className="glass-dark border-primary/20 overflow-hidden group relative h-full hover-lift">
                {/* Premium gradient glow on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Image with zoom effect */}
                  <div className="aspect-video overflow-hidden relative">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Premium gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    {/* Hover overlay with icon */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <div className="p-4 glass rounded-full">
                        <ArrowUpRight className="w-6 h-6 text-accent" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Premium tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1.5 text-xs font-medium glass border border-accent/20 rounded-full text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1.5 text-xs font-medium text-muted-foreground">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
