"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      title: "Budget Restoration",
      price: "$450",
      pricePer: "per set of 4 rims",
      description: "Perfect for minor curb damage and simple colour changes",
      features: [
        "Minor scratch and rash repair",
        "Precise paint code matching (for solid gloss colors)",
        "Durable gloss clear coat application",
      ],
    },
    {
      title: "Premium Restoration",
      price: "$650",
      pricePer: "per set of 4 rims",
      description: "Comprehensive repair for moderate to severe damage",
      features: [
        "Premium metallic paint options",
        "Custom clear coats (satin or matte finishes)",
        "Restoration for heavy chipping, fading, and oxidization",
        "Deep scratch and extensive curb rash repair",
        "Inside barrels painted for a complete look",
        "Vehicle drop-off and collection",
      ],
      featured: true,
    },
    {
      title: "Custom Refinishing",
      price: "$950",
      pricePer: "per set of 4 rims",
      description: "Transform your rims with a truly unique look and a complete, high-end finish.",
      features: [
        "Professional tire removal, fitting, and rebalance",
        "Specialty finishes (e.g., shadow chrome, pearl, two-tone)",
        "Brake caliper painting",
        "Polished metal finishes",
      ],
    },
  ]

  // Function to scroll to quote form and set the selected service
  const scrollToQuoteWithService = (serviceTitle: string) => {
    // Scroll to the quote section
    const quoteSection = document.getElementById("quote")
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" })
    }

    // Dispatch a custom event to notify the quote form component
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

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative ${service.featured ? "border-[#FF0000] shadow-lg" : ""}`}>
              {service.featured && (
                <div className="absolute top-0 right-0 bg-[#FF0000] text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                <CardDescription>
                  <span className="text-3xl md:text-4xl font-bold block mt-2">{service.price}</span>
                  <span className="text-sm md:text-base block">{service.pricePer}</span>
                  <span className="mt-2 block text-base">{service.description}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#0066B1] shrink-0 mr-2" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => scrollToQuoteWithService(service.title)}
                  className={`w-full ${service.featured ? "bg-[#FF0000] hover:bg-[#FF0000]/90" : "bg-[#0066B1] hover:bg-[#0066B1]/90"}`}
                >
                  Get a Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground italic max-w-2xl mx-auto">
            *Final pricing may vary based on rim condition and size. Submit photos via the quote form for an accurate
            assessment.
          </p>
        </div>
      </div>
    </section>
  )
}
