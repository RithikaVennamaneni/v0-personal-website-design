import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AccessibilitySection() {
  return (
    <section id="accessibility" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Digital Accessibility & Inclusive Design
          </h2>
        </div>

        <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow duration-200">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                Accessibility & Digital Risk Assistant
              </h3>
              <p className="text-base text-muted-foreground">
                University of Illinois System
              </p>
            </div>
            <Badge variant="secondary" className="mt-2 md:mt-0 w-fit">
              May 2025 – Present
            </Badge>
          </div>

          {/* Overview */}
          <div className="mb-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              I specialize in digital accessibility and inclusive design, with hands-on experience ensuring WCAG 2.2 compliance across university systems. My work spans web accessibility auditing, PDF remediation, and supporting organization-wide accessibility initiatives.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Currently supporting the University of Illinois System's digital accessibility initiatives, where I conduct comprehensive accessibility audits and assist in the remediation of PDFs, websites, and digital materials to ensure WCAG 2.2 compliance. I work closely with content creators and web teams to implement inclusive design principles across university digital properties.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As part of my work with the iSchool, I provide accessibility support for course materials and learning management systems, ensuring all students have equal access to educational content and digital resources.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Pope Tech</Badge>
              <Badge variant="secondary">Equidox</Badge>
              <Badge variant="secondary">Adobe Acrobat Pro</Badge>
              <Badge variant="secondary">WCAG 2.2</Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
