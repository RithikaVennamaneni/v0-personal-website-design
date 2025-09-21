import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Analytics & BI",
    skills: ["Excel (VLOOKUP/INDEX-MATCH/pivots/macros)", "Power BI", "Tableau", "Neo4j", "Altair", "Streamlit"],
  },
  {
    category: "Programming & DB",
    skills: ["Python (pandas, seaborn, NumPy, statsmodels)", "SQL", "R", "SAS (basic)", "PostgreSQL", "SAP"],
  },
  {
    category: "Process & PM",
    skills: ["Auditing", "Benchmarking", "Workflow Automation", "Reporting", "Agile", "JIRA", "Trello/Asana"],
  },
  {
    category: "Platforms & Other",
    skills: ["SAP", "AWS", "Git", "Jupyter"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-[#36454F] border-border/20 text-primary-foreground bg-card-foreground">
              <h3 className="text-xl font-semibold text-[#8BA7B9] mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-[#8BA7B9] text-[#2F3B45] hover:bg-[#12352F] hover:text-white transition-colors duration-200 font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
