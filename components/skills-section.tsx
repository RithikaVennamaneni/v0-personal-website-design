"use client"

import { Card } from "@/components/ui/card"
import { BarChart3, Database, Link, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    category: "Data Analysis & Visualization",
    icon: BarChart3,
    skills: [
      "Python (pandas, NumPy, scikit-learn, seaborn)",
      "SQL",
      "Power BI",
      "Tableau",
      "Excel (Power Query, DAX)",
      "Statistical Analysis",
      "Predictive Modeling",
      "Data Visualization"
    ]
  },
  {
    category: "Technical Infrastructure & Databases",
    icon: Database,
    skills: [
      "PostgreSQL",
      "AWS (S3, EC2, Redshift)",
      "Azure",
      "ETL Pipelines",
      "SAP",
      "Airflow"
    ]
  },
  {
    category: "Data Sources & Integration",
    icon: Link,
    skills: [
      "Web Scraping",
      "API Integration (REST APIs, OpenAI API)",
      "Social Media Analytics",
      "Data Aggregation"
    ]
  },
  {
    category: "Collaboration & Project Management",
    icon: Users,
    skills: [
      "Git",
      "Trello",
      "Asana",
      "SharePoint",
      "Agile/Scrum Methodologies"
    ]
  },
  {
    category: "Automation & AI",
    icon: Zap,
    skills: [
      "n8n",
      "Zapier",
      "LangChain",
      "Streamlit",
      "Process Automation",
      "Windsurf"
    ]
  }
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium floating orbs */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)" }}
        animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}
        animate={{ y: [0, -60, 0], x: [0, 40, 0] }}
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
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">Technical Expertise</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern tools and technologies for data analysis and business intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.1 * categoryIndex, duration: 0.5 }}
              >
                <Card className="glass-dark border-primary/20 p-8 hover-lift group relative overflow-hidden h-full">
                  {/* Premium glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Category header */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="relative p-3 glass rounded-xl">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                        {category.category}
                      </h3>
                    </div>
                    
                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-4 py-2 glass border border-accent/20 rounded-full text-sm font-medium text-foreground hover:border-accent/50 hover:bg-accent/10 hover:scale-105 transition-all duration-300 cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.1 * categoryIndex + 0.05 * skillIndex, duration: 0.3 }}
                          whileHover={{ 
                            y: -2,
                            boxShadow: "0 8px 16px rgba(99, 102, 241, 0.3)"
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
