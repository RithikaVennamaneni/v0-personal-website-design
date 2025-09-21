import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Consultant (Business Intelligence Group)",
    company: "Healthcare Organization",
    period: "Aug 2025 – Present",
    points: [
      "Designed a dynamic knowledge base to centralize and auto-update payer rules, reducing costly denials and delays.",
      "Proposed automation features (chatbot, denial-prevention alerts, real-time notifications) to streamline staff workflows.",
      "Built Excel/Power BI models to perform impact analysis, quantify savings and guide process improvements.",
    ],
  },
  {
    title: "IS 400 Course Support",
    company: "iSchool at Illinois",
    period: "Sep 2025 – Present",
    points: [
      "Supported course operations and quality assurance on accessibility deliverables.",
      "Coordinated analytics and reporting for course performance metrics.",
      "Assisted in curriculum development and student engagement initiatives.",
    ],
  },
  {
    title: "Student Research Assistant",
    company: "Illinois Computes, NCSA, UIUC",
    period: "Apr 2025 – Aug 2025",
    points: [
      "Benchmarked IT and workforce services across 20+ peer institutions, analyzing staffing and cost structures.",
      "Built Power BI dashboards and Excel reports to highlight operational inefficiencies and optimize resource allocation.",
      "Delivered actionable recommendations to senior stakeholders for service redesign and staff productivity improvements.",
    ],
  },
  {
    title: "Research Analyst",
    company: "Avicenna Community Health Center",
    period: "Feb 2025 – Apr 2025",
    points: [
      "Analyzed attendance and health program compliance data using Python and Power BI.",
      "Produced workforce dashboards to track participation, identify patterns, and guide program adjustments.",
      "Collaborated with healthcare teams to improve patient engagement strategies.",
    ],
  },
  {
    title: "Business Analyst Intern",
    company: "BlueTale Techno Solutions",
    period: "May 2024 – Aug 2024",
    points: [
      "Prospected and engaged potential clients through outreach, discovery calls, and requirement discussions.",
      "Supported client-facing engagements by preparing requirements documentation and aligning deliverables with scope.",
      "Contributed to business development initiatives and client relationship management.",
    ],
  },
  {
    title: "Business Analyst & Project Management Intern",
    company: "Banao Technologies",
    period: "Oct 2023 – May 2024",
    points: [
      "Conducted market and feasibility analyses using Python and Excel, presenting findings in stakeholder reports.",
      "Streamlined project workflows using Trello/Asana across design, content, and engineering teams.",
      "Supported feasibility analysis and stakeholder reporting for innovation-driven initiatives.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-secondary font-medium">{exp.company}</p>
                </div>
                <Badge variant="outline" className="mt-2 md:mt-0 w-fit border-secondary text-secondary">
                  {exp.period}
                </Badge>
              </div>

              <ul className="space-y-2">
                {exp.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-muted-foreground leading-relaxed flex items-start">
                    <span className="text-secondary mr-2 mt-2 flex-shrink-0">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
