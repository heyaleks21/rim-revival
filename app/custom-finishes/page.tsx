import type { Metadata } from "next"
import QuoteForm from "@/components/quote-form"
import Footer from "@/components/footer"
import BeforeAfterGallery from "@/components/before-after-gallery"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Palette, Wrench, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Rim Finishes Adelaide | Specialty Wheel Refinishing",
  description:
    "Custom rim finishes in Adelaide including shadow chrome, pearl, metallic, and two-tone designs. Professional specialty wheel refinishing.",
  keywords:
    "custom rim finishes, specialty wheel painting Adelaide, pearl rim finish, shadow chrome wheels, two-tone rims, custom alloy wheel refinishing",
  openGraph: {
    title: "Custom Rim Finishes Adelaide | Specialty Wheel Refinishing",
    description:
      "Custom rim finishes in Adelaide including shadow chrome, pearl, metallic, and two-tone designs. Professional specialty wheel refinishing.",
    url: "https://www.rimrevivals.com.au/custom-finishes",
  },
}

export default function CustomFinishes() {
  const finishTypes = [
    {
      icon: <Sparkles className="h-8 w-8 text-[#0066B1]" />,
      title: "Metallics & Pearls",
      description:
        "Premium metallic and pearl paint systems that add depth and dimension to your wheels with stunning color-shifting effects.",
    },
    {
      icon: <Palette className="h-8 w-8 text-[#0066B1]" />,
      title: "Custom Colours",
      description:
        "Any color you can imagine - I can match OEM colors or create completely custom shades tailored to your vision.",
    },
    {
      icon: <Star className="h-8 w-8 text-[#0066B1]" />,
      title: "Specialty Coatings",
      description: "Shadow chrome, satin finishes, candy colors, and specialty coatings for a truly unique appearance.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#0066B1]" />,
      title: "Complete Refinishing",
      description:
        "Full tire removal, complete surface preparation, and professional refitting with balancing included.",
    },
  ]

  const customGalleryImages = [
    {
     before: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/alfab.webp",
      beforeDesc: "Alfa Romeo calipers before refinishing",
      after: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/alfaa%20%281%29.webp",
      afterDesc: "Alfa Romeo calipers in signature Alfa red",
      title: "Premium Ferarri Colour",
      description: "Alfa Romeo rims restored in a custom Ferarri colour.",
    },
    {
      before: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/IMG_8553.JPEG",
      beforeDesc: "BMW M6 rims before custom metallic silver restoration",
      after: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/IMG_8523%20%281%29.jpg",
      afterDesc: "BMW M6 with custom metallic silver finish and caliper refresh",
      title: "Metallic Silver Finish",
      description: "Premium metallic restoration with a caliper and hub refresh.",
    },
    {  before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/1506842681f02d3fc0f4a6dbae65c773.webp",
      beforeDesc:
        "Factory silver Holden sport wheels with multi-spoke design before professional restoration in Adelaide",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/IMG_8641.JPEG",
      afterDesc: "Holden sport wheels transformed with mirror-finish gloss black by Rim Revivals Adelaide",
      title: "EV Pre-Sale Restoration",
      description: "Tesla rims with heavy rash restored to a factory appearance.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 z-10" />
          <div className="relative w-full h-full">
            <img
              src="/images/design-mode/pexels-redyar-rzgar-1257188192-30932163.jpg.webp"
              alt="Custom rim finishes in Adelaide including shadow chrome, pearl, metallic, and two-tone designs. Professional specialty wheel refinishing."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-2xl text-white text-center sm:text-left mx-auto sm:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Custom Rim Finishes in Adelaide
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              Transform your wheels with specialty finishes including shadow chrome, pearl, metallic, and custom colors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start">
              <a
                href="#quote"
                className="bg-[#FF0000] text-white hover:bg-[#FF0000]/90 text-base px-6 py-3 rounded-md font-medium transition-colors"
              >
                Request A Quote
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

      {/* Finish Types Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Finish Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer a wide range of specialty finishes to create the exact look you envision for your wheels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {finishTypes.map((finish, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="mb-4">{finish.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{finish.title}</h3>
                  <p className="text-sm text-muted-foreground">{finish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Finishes Section */}
      <section className="py-20 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Finishes</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3">Shadow Chrome</h3>
                <p className="text-muted-foreground mb-4">
                  A dark, mirror-like finish that combines the depth of black with the reflectivity of chrome for a
                  dramatic, luxury appearance.
                </p>
                <div className="text-sm font-medium text-[#0066B1]">Premium Finish</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3">Pearl White</h3>
                <p className="text-muted-foreground mb-4">
                  Elegant pearl white with subtle color-shifting particles that create depth and sophistication in any
                  lighting condition.
                </p>
                <div className="text-sm font-medium text-[#0066B1]">Most Popular</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3">Satin Black</h3>
                <p className="text-muted-foreground mb-4">
                  A modern, understated finish with a smooth, non-reflective appearance that's both aggressive and
                  refined.
                </p>
                <div className="text-sm font-medium text-[#0066B1]">Trending</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3">Anthracite Grey</h3>
                <p className="text-muted-foreground mb-4">
                  A sophisticated dark grey metallic finish popular on European luxury and sports vehicles for a factory
                  premium look.
                </p>
                <div className="text-sm font-medium text-[#0066B1]">Premium Finish</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3">Gunmetal</h3>
                <p className="text-muted-foreground mb-4">
                  A dark grey with subtle metallic flake that adds character while maintaining a stealthy, tactical
                  appearance.
                </p>
                <div className="text-sm font-medium text-[#0066B1]">Popular Choice</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3">Custom Match</h3>
                <p className="text-muted-foreground mb-4">
                  Any color imaginable - I can match your vehicle's paint code or create a completely unique custom
                  shade.
                </p>
                <div className="text-sm font-medium text-[#0066B1]">Your Vision</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium & Custom Finish Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my refinishing work. Slide to compare before and after transformations.
            </p>
          </div>
          <BeforeAfterGallery images={customGalleryImages} />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Custom Refinishing Process</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0066B1] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Consultation & Color Selection</h3>
                      <p className="text-muted-foreground">
                        After discussing your vision, I'll show you samples and help you choose the perfect finish for your wheels
                        and vehicle style.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0066B1] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Preparation</h3>
                      <p className="text-muted-foreground">
                        Tires are removed (optional), wheels are stripped if needed, and all damage is repaired
                        to create the perfect foundation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0066B1] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Premium Paint Application</h3>
                      <p className="text-muted-foreground">
                        Multiple coats of epoxy primer, your custom color, and premium clear coat are applied in a
                        controlled environment as needed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0066B1] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Finishing & Tire Fitting</h3>
                      <p className="text-muted-foreground">
                        After curing, the wheels are inspected and tires are professionally mounted and
                        balanced for perfect performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <QuoteForm />

      {/* Footer */}
      <Footer />
    </main>
  )
}
