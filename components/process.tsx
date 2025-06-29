"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Camera, Wrench, Truck, ThumbsUp } from "lucide-react"

export default function Process() {
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

  const steps = [
    {
      icon: <Camera className="h-10 w-10 text-[#0066B1]" />,
      title: "Submit Photos",
      description: "Send us photos of your damaged rims through our quote form.",
      linkTo: "quote",
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-[#0066B1]" />,
      title: "Get a Quote",
      description: "Receive a detailed quote based on the damage and your restoration needs.",
    },
    {
      icon: <Truck className="h-10 w-10 text-[#0066B1]" />,
      title: "Drop-off or Pickup",
      description: "Drop off your wheels or use our convenient pickup service.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-[#0066B1]" />,
      title: "Restoration Process",
      description: "Our experts restore your rims using our proven multi-step process.",
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-[#0066B1]" />,
      title: "Quality Check & Return",
      description: "After a thorough quality check, your restored rims are ready for pickup or delivery.",
    },
  ]

  return (
    <section id="process" className="py-20 bg-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Restoration Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, hassle-free process to get your wheels looking like new again.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-4">{step.icon}</div>
                <CardTitle className="text-lg">Step {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                {step.linkTo ? (
                  <h3
                    className="font-medium mb-2 text-[#0066B1] hover:underline cursor-pointer transition-colors"
                    onClick={(e) => scrollToSection(step.linkTo, e)}
                  >
                    {step.title}
                  </h3>
                ) : (
                  <h3 className="font-medium mb-2">{step.title}</h3>
                )}
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
