"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Services() {
  const services = [
    {
      title: "Budget Restoration",
      price: "$450",
      pricePer: "per set of 4 rims",
      description: "Perfect for minor curb damage and simple colour changes",
      features: [
        "Minor scratch and rash repair",
        "Solid colour paint code matching",
        "Gloss clear coat",
      ],
      buttonColor: "bg-[#0066B1] hover:bg-[#0066B1]/90",
      badge: null,
    },
    {
      title: "Premium Restoration",
      price: "$650",
      pricePer: "per set of 4 rims",
      description: "Comprehensive repair for moderate to severe damage",
      features: [
        "Premium metallic paint options",
        "Custom clear coats (e.g., matte, satin, semi-gloss)",
        "Restoration for heavy chipping, oxidization and poor finishes",
        "Deep scratch and extensive curb rash repair",
        "Inside barrels painted for a complete look",
        "Drop-off and collection",
      ],
      featured: true,
      buttonColor: "bg-[#FF0000] hover:bg-[#FF0000]/90",
      badge: "Most Popular",
    },
    {
      title: "Custom Refinishing",
      price: "$950",
      pricePer: "per set of 4 rims",
      description: "Transform your rims with a truly unique look and complete, high-end finish",
      features: [
        "Professional tire removal and re-fitting",
        "Specialty finishes (e.g., shadow chrome, pearl, two-tone)",
        "Brake caliper painting",
        "Polished metal finishes",
      ],
      buttonColor: "bg-[#0066B1] hover:bg-[#0066B1]/90",
      badge: null,
    },
  ]

  // Function to scroll to quote form and set the selected service
  const scrollToQuoteWithService = (serviceTitle: string) => {
    const quoteSection = document.getElementById("quote")
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" })
    }

    const event = new CustomEvent("serviceSelected", { detail: serviceTitle })
    window.dispatchEvent(event)
  }

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Restoration Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect restoration package for your complete set of wheels, from basic repairs to custom
            refinishing.*
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative flex flex-col transition-all duration-300 ${
                service.featured
                  ? "border-[#FF0000] border-2 shadow-xl md:scale-105 bg-white"
                  : "border-gray-200 md:hover:shadow-lg md:hover:scale-105 bg-white"
              }`}
            >
              {service.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-[#FF0000] hover:bg-[#FF0000] text-white px-4 py-1.5 text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" />
                    {service.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className={service.featured ? "pt-8" : "pt-6"}>
                <CardTitle className="text-2xl font-bold text-center mb-2">{service.title}</CardTitle>
                <div className="text-center mb-3">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-[#0066B1]">{service.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{service.pricePer}</p>
                </div>
                <CardDescription className="text-center text-base">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 pb-6">
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Check className="h-5 w-5 text-[#0066B1] shrink-0" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0 pb-6">
                <Button
                  onClick={() => scrollToQuoteWithService(service.title)}
                  className={`w-full text-white font-semibold py-6 text-base ${service.buttonColor} transition-all`}
                >
                  Get a Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground italic max-w-3xl mx-auto">
            *Final pricing may vary based on rim condition and size. Submit photos via the quote form for an accurate
            assessment.
          </p>
        </div>
      </div>
    </section>
  )
}
