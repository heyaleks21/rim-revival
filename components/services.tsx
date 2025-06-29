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
        "Surface cleaning and preparation",
        "Minor scratch and rash repair",
        "Color matching and repainting (solid gloss colours)",
        "Clear coat application",
        "Final clean",
      ],
    },
    {
      title: "Premium Restoration",
      price: "$600",
      pricePer: "per set of 4 rims",
      description: "Comprehensive repair for moderate to severe damage",
      features: [
        "Tyre removal for optimal finish",
        "Premium metallic paint",
        "Custom clear coats (satin, matte)",
        "Deep scratch and curb rash repair",
        "Inside barrels painted",
        "Final clean and wax",
      ],
      featured: true,
    },
    {
      title: "Custom Refinishing",
      price: "$950",
      pricePer: "per set of 4 rims",
      description: "Complete transformation with custom finishes",
      features: [
        "Structural repair for bent rims",
        "Welding crack repairs and additional rim surface",
        "Specialty finishes (chrome, pearl, two tone)",
        "Ceramic coating",
        "Oven curing",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Restoration Services</h2>
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
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>
                  <span className="text-2xl font-bold block mt-2">{service.price}</span>
                  <span className="text-sm block">{service.pricePer}</span>
                  <span className="mt-2 block">{service.description}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#0066B1] shrink-0 mr-2" />
                      <span>{feature}</span>
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
            *Final pricing may vary based on rim condition. Submit photos via our quote form for an accurate assessment.
          </p>
        </div>
      </div>
    </section>
  )
}
