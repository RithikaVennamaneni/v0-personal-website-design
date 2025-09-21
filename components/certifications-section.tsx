import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const certifications = [
  {
    title: "Developer Virtual Experience Program",
    issuer: "Accenture",
    date: "Dec 2022",
    logo: "/accenture-logo.png",
    skills: [],
  },
  {
    title: "Programming Fundamentals using Python",
    issuer: "Infosys Springboard",
    date: "Nov 2022",
    logo: "/infosys-logo.png",
    skills: ["Python (Programming Language)"],
  },
  {
    title: "Database Foundations",
    issuer: "Oracle",
    date: "Jun 2022",
    logo: "/oracle-logo-abstract.png",
    skills: ["SQL", "Database Management System (DBMS)"],
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Apr 2022",
    logo: "/aws-logo.png",
    skills: [],
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    date: "Apr 2022",
    logo: "/infosys-logo.png",
    skills: ["Java"],
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "Apr 2023",
    expired: "Apr 2024",
    logo: "/google-logo.png",
    skills: ["Google Analytics"],
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 bg-card border border-border hover:shadow-lg transition-all duration-200">
              <div className="flex items-start gap-4">
                <img
                  src={cert.logo || "/placeholder.svg"}
                  alt={`${cert.issuer} logo`}
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm leading-tight mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs mb-3">
                    Issued {cert.date}
                    {cert.expired && <span className="text-destructive"> · Expired {cert.expired}</span>}
                  </p>

                  {cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
