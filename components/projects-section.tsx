import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
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
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
