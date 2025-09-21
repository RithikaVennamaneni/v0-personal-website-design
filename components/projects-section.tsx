import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AI Incident Logging for Classrooms",
    description: "Voice-to-text logs with auto-summaries/tags to improve teacher–parent communication.",
    image: "/ai-classroom-incident-logging-dashboard.jpg",
  },
  {
    title: "Operational Risk KPI Dashboard",
    description:
      "Power BI dashboard for 50+ synthetic incidents (dept, severity, root cause) to speed leadership reviews.",
    image: "/operational-risk-kpi-dashboard-with-charts.jpg",
  },
  {
    title: "Predictive Sensor Framework (Zipcar QC)",
    description: "Concept + analytics to shift from reactive to proactive maintenance.",
    image: "/predictive-maintenance-sensor-analytics.jpg",
  },
  {
    title: "Celestial Analytics – Meteorite Landings",
    description: "Python + BI exploration of mass, region, composition trends.",
    image: "/meteorite-data-visualization-analytics.jpg",
  },
  {
    title: "Baseball Data Visualization",
    description: "Interactive player metrics for non-technical stakeholders.",
    image: "/baseball-statistics-dashboard-visualization.jpg",
  },
  {
    title: "Equitable Urban Planning (AI-assisted)",
    description: "Scenario analytics and research-backed insights.",
    image: "/urban-planning-analytics-dashboard.jpg",
  },
  {
    title: "Research Paper on Agile Methodologies",
    description: "Evolving Paradigms: Agile Methodologies' Triumph over Waterfall in Modern Business Practices.",
    image: "/agile-methodology-research-paper-visualization.jpg",
  },
  {
    title: "HummCare Market Research & Case Study",
    description:
      "Conducted market and competitive analysis for a healthcare platform and identifying business model enhancements.",
    image: "/healthcare-market-research-analysis.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">My Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
