"use client"
import { Camera, ClipboardCheck, Truck, Wrench, ThumbsUp } from "lucide-react"

export default function Process() {
  const scrollToSection = (sectionId: string, event?: any) => {
    if (event) {
      event.preventDefault()
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const steps = [
    {
      icon: Camera,
      title: "Submit Photos",
      description: "Send photos of your damaged rims through the quote form.",
      linkTo: "quote",
    },
    {
      icon: ClipboardCheck,
      title: "Get a Quote",
      description: "Receive a detailed quote based on the damage and your restoration needs.",
    },
    {
      icon: Truck,
      title: "Drop-off or Pickup",
      description: "Drop off your wheels, car or use our convenient pickup service.",
    },
    {
      icon: Wrench,
      title: "Restoration Process",
      description: "Your rims are restored using a proven multi-step process, with updates along the way.",
    },
    {
      icon: ThumbsUp,
      title: "Quality Check & Return",
      description: "After a thorough quality check, your restored rims are ready for pickup or delivery.",
    },
  ]

  return (
    <section id="process" className="py-20 bg-gray-100">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Restoration Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, hassle-free process to get your wheels looking like new again.
          </p>
        </div>

        <div className="relative">
          {/* Desktop: Horizontal layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Step number and icon */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-[#0066B1] flex items-center justify-center mb-4">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    {step.linkTo ? (
                      <h3
                        className="font-bold text-lg mb-3 cursor-pointer hover:text-[#0066B1] transition-colors"
                        onClick={(e) => scrollToSection(step.linkTo, e)}
                      >
                        {step.title}
                      </h3>
                    ) : (
                      <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 left-[60%] w-[80%] h-0.5 bg-[#0066B1]/30 hidden xl:block" />
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile: Vertical layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative pl-16">
                  {/* Step number and icon */}
                  <div className="absolute left-0 top-0">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-[#0066B1] flex items-center justify-center">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FF0000] text-white flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </div>
                    </div>
                    {/* Connector line */}
                    {index < steps.length - 1 && <div className="absolute left-7 top-14 w-0.5 h-16 bg-[#0066B1]/30" />}
                  </div>

                  {/* Content */}
                  <div>
                    {step.linkTo ? (
                      <h3
                        className="font-bold text-lg mb-2 cursor-pointer hover:text-[#0066B1] transition-colors"
                        onClick={(e) => scrollToSection(step.linkTo, e)}
                      >
                        {step.title}
                      </h3>
                    ) : (
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
