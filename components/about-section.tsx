import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const achievements = [
    "i-Hack (IIT Bombay) — 1st Place",
    "ENIGMA ML — Runner-Up",
    "3rd Position in DesignX",
    "Special Jury Award Issued by EpsilonPi",
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Graduate student in Information Management at UIUC ('26). I turn messy data into clear decisions with SQL,
              Python, and Power BI. I enjoy building KPI dashboards, benchmarking services and communicating insights to
              stakeholders.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Recent work spans research computing benchmarking at Illinois Computes/NCSA, course ops analytics at the
              iSchool, and BA internships where I streamlined workflows and delivered client-ready artifacts.
            </p>
          </div>

          <Card className="p-6 bg-card border-border">
            <h3 className="text-xl font-semibold text-secondary mb-4">Achievements & Recognition</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="block w-fit bg-secondary/20 text-secondary hover:bg-secondary/30"
                >
                  {achievement}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
