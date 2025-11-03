import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, CheckCircle2, AlertCircle } from "lucide-react"

const certifications = [
  // Accessibility & Design
  {
    title: "An Introduction to Accessibility and Inclusive Design",
    issuer: "University of Illinois Urbana-Champaign",
    platform: "Coursera",
    date: "November 2025",
    verifyCode: "A5B584XZYZQ6",
    category: "Accessibility & Design",
    skills: ["WCAG Compliance", "Inclusive Design", "Digital Accessibility"],
  },
  
  // Business Analysis
  {
    title: "Business Analysis Fundamentals",
    issuer: "Microsoft",
    platform: "Coursera",
    date: "November 2025",
    verifyCode: "GIEKUVG9KKMK",
    category: "Business Analysis",
    skills: ["Business Analysis", "Stakeholder Management", "Requirements Gathering"],
  },
  {
    title: "Introduction to Business Analysis",
    issuer: "IBM",
    platform: "Coursera",
    date: "November 2025",
    verifyCode: "EOZ72FPOC5W1",
    category: "Business Analysis",
    skills: ["Business Analysis", "Requirements", "Process Improvement"],
  },
  
  // Data & Analytics
  {
    title: "Data for Business Analysts Using Microsoft Excel",
    issuer: "Microsoft",
    platform: "Coursera",
    date: "November 2025",
    verifyCode: "4KVYC5XE93WU",
    category: "Data & Analytics",
    skills: ["Data Analysis", "Excel", "Business Intelligence"],
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "April 2023",
    expired: "April 2024",
    certificateId: "148175326",
    category: "Data & Analytics",
    skills: ["Web Analytics", "Digital Marketing", "Data Analysis"],
  },
  
  // Cloud & Technical
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "February 2023",
    category: "Cloud & Technical",
    skills: ["Cloud Computing", "AWS", "Infrastructure"],
  },
  {
    title: "Database Foundations",
    issuer: "Oracle",
    date: "June 2022",
    category: "Cloud & Technical",
    skills: ["Database Management", "SQL", "Data Modeling"],
  },
  {
    title: "Programming Fundamentals using Python",
    issuer: "Infosys Wingspan",
    date: "November 2022",
    category: "Cloud & Technical",
    skills: ["Python", "Programming", "Data Science"],
  },
  
  // Research & Professional Development
  {
    title: "CITI Program - Protection of Human Subjects",
    issuer: "University of Illinois at Urbana-Champaign",
    date: "September 2024",
    validUntil: "September 2027",
    recordId: "64882120",
    category: "Research & Professional Development",
    skills: ["Research Ethics", "IRB Training", "Human Subjects Protection"],
    active: true,
  },
  {
    title: "Agile Job Simulation",
    issuer: "JPMorgan Chase",
    platform: "Forage",
    date: "October 2023",
    verifyCode: "hmfcXnsBSScCZrnja",
    category: "Research & Professional Development",
    skills: ["Agile", "Scrum", "Sprint Planning", "User Stories"],
  },
  {
    title: "Developer Virtual Experience Program",
    issuer: "Accenture",
    platform: "Forage",
    date: "December 2022",
    verifyCode: "AnSEMBzukwrGmyXZP",
    category: "Research & Professional Development",
    skills: ["Software Development", "Architecture", "Cloud Migration", "Security"],
  },
]

export function CertificationsSection() {
  // Group certifications by category
  const categories = [
    "Accessibility & Design",
    "Business Analysis",
    "Data & Analytics",
    "Cloud & Technical",
    "Research & Professional Development",
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Certifications
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categoryCerts = certifications.filter((cert) => cert.category === category)
            if (categoryCerts.length === 0) return null

            return (
              <div key={category}>
                <h3 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryCerts.map((cert, index) => (
                    <Card
                      key={index}
                      className="p-6 bg-card border border-border hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                    >
                      {/* Header with Icon and Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-md">
                            <Award className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-foreground text-base leading-tight mb-2">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer}
                            {cert.platform && (
                              <span className="text-xs"> • {cert.platform}</span>
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Date and Status */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Completed {cert.date}</span>
                        </div>

                        {/* Active/Valid Badge */}
                        {cert.active && cert.validUntil && (
                          <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Valid until {cert.validUntil}
                          </Badge>
                        )}

                        {/* Expired Badge */}
                        {cert.expired && (
                          <Badge variant="destructive" className="text-xs">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            Expired {cert.expired}
                          </Badge>
                        )}

                        {/* Verification Codes */}
                        {cert.verifyCode && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Verify:</span> {cert.verifyCode}
                          </div>
                        )}
                        {cert.certificateId && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Certificate ID:</span> {cert.certificateId}
                          </div>
                        )}
                        {cert.recordId && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Record ID:</span> {cert.recordId}
                          </div>
                        )}
                      </div>

                      {/* Skills Tags */}
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
