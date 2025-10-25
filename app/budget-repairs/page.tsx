import type { Metadata } from "next"
import QuoteForm from "@/components/quote-form"
import Footer from "@/components/footer"
import BeforeAfterGallery from "@/components/before-after-gallery"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Wrench, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Budget Rim Repairs Adelaide | Affordable Wheel Restoration",
  description:
    "Professional budget rim repairs in Adelaide from $450 per set. Perfect for minor curb damage, scratches, and simple colour changes. Quick turnaround, quality results.",
  keywords:
    "budget rim repair, cheap wheel restoration Adelaide, affordable rim refinishing, curb rash repair cost, budget alloy wheel repair",
  openGraph: {
    title: "Budget Rim Repairs Adelaide | Affordable Wheel Restoration",
    description:
      "Professional budget rim repairs in Adelaide from $450 per set. Perfect for minor curb damage, scratches, and simple colour changes.",
    url: "https://www.rimrevivals.com.au/budget-repairs",
  },
}

export default function BudgetRepairs() {
  const budgetFeatures = [
    {
      icon: <DollarSign className="h-8 w-8 text-[#0066B1]" />,
      title: "Affordable Pricing",
      description: "Starting at $450 per set of 4 rims - over half the cost of traditional rim repair shops.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#0066B1]" />,
      title: "Minor Damage Repair",
      description:
        "Expertly repair light curb rash, surface scratches, and minor scuffs to restore your wheels' appearance.",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#0066B1]" />,
      title: "Quality Finish",
      description:
        "Professional gloss clear coat application with precise paint code matching for solid colours that lasts.",
    },
    {
      icon: <Check className="h-8 w-8 text-[#0066B1]" />,
      title: "Fast Turnaround",
      description:
        "Quick 2-3 business day turnaround to get you back on the road with great-looking wheels. Rushed services available.",
    },
  ]

  const budgetGalleryImages = [
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/1%20before.JPEG-XwD6OUSGRHNXggZFYrlsrLbQC0Kmfs.webp",
      beforeDesc: "Factory silver Holden rims with light curb damage before budget restoration",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/1%20after.JPEG-WoJ7idkpqd7fYO3NhOCw8tUGgISjfZ.webp",
      afterDesc: "Holden rims transformed with budget-friendly gloss black finish",
      title: "Silver to Black Budget Conversion",
      description: "Factory rims restored with my affordable budget package.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/2%20before.JPEG-492VbNwysP1u9i6KccPHn6sZwM2oVk.webp",
      beforeDesc: "Multi-spoke wheels with dull finish before budget repair",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/2%20after.JPEG-yFrSUCPVS5ejMEoNEx2e2jarpEWWLN.webp",
      afterDesc: "Multi-spoke wheels refinished in high-gloss black on a budget",
      title: "Budget Sport Wheel Restoration",
      description: "Affordable transformation with professional results.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/5%20before.JPEG-Mz4C4lG1Ckq6q5kyxpK8dzr3XbI2ik.webp",
      beforeDesc: "Basic 5-spoke factory wheels before budget restoration",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/5%20after.JPEG-qvvt77i4MkNItcSOoxRmD0EaPaUafg.webp",
      afterDesc: "5-spoke wheels with deep gloss black finish - budget package",
      title: "Budget Classic Wheel Refresh",
      description: "Simple yet effective budget restoration.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 z-10" />
          <div className="relative w-full h-full">
            <img
              src="/images/design-mode/pexels-redyar-rzgar-1257188192-30932163.jpg.webp"
              alt="Professional budget rim repairs in Adelaide from $450 per set. Perfect for minor curb damage, scratches, and simple colour changes. Quick turnaround, quality results."
              className="w-full h-full object-cover"
              loading="eager"
              style={{ contentVisibility: "auto" }}
            />
          </div>
        </div>
        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-2xl text-white text-center sm:text-left mx-auto sm:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Budget Rim Repairs in Adelaide
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              Professional wheel restoration that won't break the bank. Perfect for minor damage and colour changes
              starting at $450 per set of 4 rims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start">
              <a
                href="#quote"
                className="bg-[#FF0000] text-white hover:bg-[#FF0000]/90 text-base px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get Your Free Quote
              </a>
              <a
                href="#gallery"
                className="bg-transparent border border-white text-white hover:bg-white/10 text-base px-6 py-3 rounded-md font-medium transition-colors"
              >
                Before & After Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in Budget Repairs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My budget package is perfect for minor damage and gives you professional results without the premium price
              tag.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {budgetFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Card */}
          <Card className="max-w-2xl mx-auto border-[#0066B1] border-2">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-[#0066B1] mb-2">From $450</div>
                <div className="text-muted-foreground">per set of 4 rims</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066B1] shrink-0 mr-3 mt-0.5" />
                  <span>Minor scratch and curb rash repair</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066B1] shrink-0 mr-3 mt-0.5" />
                  <span>Precise paint code matching for solid gloss colors</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066B1] shrink-0 mr-3 mt-0.5" />
                  <span>Durable gloss clear coat application</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066B1] shrink-0 mr-3 mt-0.5" />
                  <span>2-3 business day turnaround</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066B1] shrink-0 mr-3 mt-0.5" />
                  <span>Rushed overnight/same day pickup services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#0066B1] shrink-0 mr-3 mt-0.5" />
                  <span>Pick-up and drop-off services available</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 bg-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Is Budget Repair Right For You?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-500 border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Perfect For:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mr-2 mt-0.5" />
                      <span>Minor curb rash and surface scratches</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mr-2 mt-0.5" />
                      <span>Simple colour changes (solid colours only)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mr-2 mt-0.5" />
                      <span>Light cosmetic damage</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mr-2 mt-0.5" />
                      <span>Budget-conscious customers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mr-2 mt-0.5" />
                      <span>Quick turnaround needs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Consider Premium For:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Heavy curb damage or deep scratches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Metallic or pearl paint finishes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Satin or matte clear coats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Inside barrel painting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Severe oxidation or corrosion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Budget Repair Results</h2>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              See the quality transformations achieved with my budget repair package. Slide to compare before and after.
            </p>
          </div>
          <BeforeAfterGallery images={budgetGalleryImages} />
        </div>
      </section>

      {/* Quote Form Section */}
      <QuoteForm />

      {/* Footer */}
      <Footer />
    </main>
  )
}
