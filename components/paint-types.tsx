"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Sun, Droplet, Sparkles, Palette, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PaintTypes() {
  // Smooth scroll function that doesn't update URL
  const scrollToSection = (sectionId: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault()
    }

    const element = document.getElementById(sectionId)
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const paintFeatures = [
    {
      icon: <Shield className="h-10 w-10 text-[#0066B1]" />,
      title: "Epoxy and 2K Primers",
      description:
        "If required, a combination of high-adhesion epoxy primers are used for superior metal bonding and corrosion protection, along with 2K urethane primers for excellent filling properties and a perfect foundation for the color coat.",
    },
    {
      icon: <Palette className="h-10 w-10 text-[#0066B1]" />,
      title: "High Performance Base Coat Binder",
      description:
        "Premium quality base coat binders that deliver exceptional color retention, metallic control, and superior adhesion for long-lasting, vibrant finishes.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-[#0066B1]" />,
      title: "2K Polyurethane Clear Coats",
      description:
        "Professional-grade two-component polyurethane clear coats that provide outstanding gloss, depth, and protection while enhancing the overall appearance of your rims.",
    },
    {
      icon: <Sun className="h-10 w-10 text-[#0066B1]" />,
      title: "UV Protection",
      description:
        "All paints and clear coats feature advanced UV inhibitors specifically rated for harsh Australian summers, preventing fading and deterioration.",
    },
    {
      icon: <Droplet className="h-10 w-10 text-[#0066B1]" />,
      title: "Weather and Chemical Resistant",
      description:
        "Automotive-grade finishing systems are engineered to withstand extreme weather conditions, road salt, brake dust, chemicals, and cleaning products while maintaining their integrity and appearance.",
    },
  ]

  return (
    <section id="paint-types" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Paint Systems</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Only the highest quality automotive-grade paints and coatings are used to ensure your rims look fantastic
            and stay protected for years to come.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0 min-h-full">
                <div className="bg-[#0066B1]/10 p-8 md:p-10 flex items-center justify-center min-h-full">
                  <div className="max-w-sm text-center">
                    <h3 className="text-2xl font-bold mb-4">What Type of Paint Do You Use?</h3>
                    <p className="text-muted-foreground mb-6">
                      Premium automotive-grade paint systems including epoxy and 2K primers, high performance base coat
                      binders, and 2K polyurethane clear coats. All paint systems feature advanced UV inhibitors
                      specifically rated for harsh Australian summers.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Automotive-grade finishes are engineered to be weather and chemical resistant, protecting against
                      road salt, brake dust, and cleaning products while maintaining their integrity and appearance for
                      years to come.
                    </p>
                    <div className="flex justify-center">
                      <Button
                        onClick={(e) => scrollToSection("gallery", e)}
                        className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white flex items-center justify-center gap-2"
                      >
                        <ImageIcon className="h-4 w-4" />
                        See Examples
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 md:p-10 min-h-full">
                  <ul className="space-y-6">
                    {paintFeatures.map((feature, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="shrink-0 mt-1">{feature.icon}</div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
