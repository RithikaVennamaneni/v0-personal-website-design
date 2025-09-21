"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-secondary">Rithika Vennamaneni</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-secondary font-medium">Data & Business Analyst</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I bridge data and business needs by transforming information into insights, building solutions that
                improve efficiency, and driving impact across teams.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Card className="p-2 bg-card border-border">
              <div className="relative w-80 h-80 rounded-xl overflow-hidden">
                <Image
                  src="/images/rithika-profile.png"
                  alt="Rithika Vennamaneni"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-card border-border">
            <h3 className="font-semibold text-secondary mb-2">Education</h3>
            <p className="text-sm text-muted-foreground">MSIM @ UIUC </p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <h3 className="font-semibold text-secondary mb-2">Core Skills</h3>
            <p className="text-sm text-muted-foreground">SQL • Python • Power BI</p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <h3 className="font-semibold text-secondary mb-2">Industries</h3>
            <p className="text-sm text-muted-foreground">Healthcare • Research • Consulting</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
