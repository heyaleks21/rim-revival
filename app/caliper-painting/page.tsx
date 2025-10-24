import type { Metadata } from "next"
import QuoteForm from "@/components/quote-form"
import Footer from "@/components/footer"
import BeforeAfterGallery from "@/components/before-after-gallery"
import { Card, CardContent } from "@/components/ui/card"
import { Paintbrush, Shield, Zap, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Brake Caliper Painting Adelaide | Professional Caliper Refinishing",
  description:
    "Budget brake caliper painting in Adelaide. High-temperature 2k paint in custom colors including Brembo red, BMW blue, Porsche acid green and more. Enhance your wheel appearance.",
  keywords:
    "brake caliper painting Adelaide, caliper refinishing, Brembo red calipers, custom caliper colors, high temperature caliper paint",
  openGraph: {
    title: "Brake Caliper Painting Adelaide | Budget Caliper Refinishing",
    description:
      "Budget brake caliper painting in Adelaide with high-temperature 2k paint in custom colors to complement your wheels.",
    url: "https://www.rimrevivals.com.au/caliper-painting",
  },
}

export default function CaliperPainting() {
  const caliperFeatures = [
    {
      icon: <Paintbrush className="h-8 w-8 text-[#0066B1]" />,
      title: "Custom Colors",
      description:
        "Choose from popular OEM colors like Brembo red, BMW blue, Porsche acid green, or any custom color to match your style.",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#0066B1]" />,
      title: "High-Temperature Paint",
      description:
        "2k high-temperature brake caliper paint that withstands extreme heat without fading or peeling.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#0066B1]" />,
      title: "Professional Finish",
      description:
        "Clean, even coating with proper masking and preparation for a factory-quality appearance that lasts.",
    },
    {
      icon: <Check className="h-8 w-8 text-[#0066B1]" />,
      title: "Perfect Complement",
      description:
        "Caliper painting pairs perfectly with wheel restoration to create a complete, cohesive look behind your wheels.",
    },
  ]

  const caliperGalleryImages = [
    {
      before: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/jjbb%20%281%29.webp",
      beforeDesc: "Jeep Cherokee calipers before painting",
      after: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/jjaa.webp",
      afterDesc: "Jeep calipers painted in Brembo red with black rims",
      title: "Brembo Red Caliper Paint",
      description: "Classic Brembo red on Jeep Cherokee.",
    },
    {
      before: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/alfab.webp",
      beforeDesc: "Alfa Romeo calipers before refinishing",
      after: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/alfaa%20%281%29.webp",
      afterDesc: "Alfa Romeo calipers in signature Alfa red",
      title: "Alfa Romeo Red Calipers",
      description: "OEM Alfa red caliper restoration.",
    },
    {
      before: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/IMG_9157.webp",
      beforeDesc: "BMW M6 calipers and hub before refresh",
      after: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/IMG_9112.JPEG",
      afterDesc: "WRX calipers restored in Porsche Acid Green",
      title: "WRX Caliper Refresh",
      description: "Complete caliper and hub restoration.",
    },
  ]

  const popularColors = [
    { name: "Brembo Red", desc: "Classic performance brake caliper red" },
    { name: "BMW M Blue", desc: "Iconic BMW Motorsport blue" },
    { name: "Porsche Acid Green", desc: "Distinctive Porsche sport green" },
    { name: "Mercedes Silver", desc: "Elegant Mercedes-Benz silver" },
    { name: "Alfa Romeo Red", desc: "Traditional Alfa Rosso red" },
    { name: "Audi Silver", desc: "Modern Audi sport silver" },
    { name: "Gloss Black", desc: "Stealthy murdered-out look" },
    { name: "Custom Match", desc: "Any color to match your vision" },
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
              alt="Luxury BMW wheel with premium alloy rim restoration by Rim Revivals Adelaide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-2xl text-white text-center sm:text-left mx-auto sm:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Brake Caliper Painting in Adelaide
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              Budget high-temperature caliper painting to complement your wheel restoration. Choose from OEM
              colors or create a custom look.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start">
              <a
                href="#quote"
                className="bg-[#FF0000] text-white hover:bg-[#FF0000]/90 text-base px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get Caliper Quote
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Paint Your Brake Calipers?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Caliper painting is the perfect finishing touch that adds visual impact and protects your brake
              components.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caliperFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Colors Section */}
      <section className="py-20 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Caliper Colors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from popular OEM colors or let us create a custom color to perfectly match your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {popularColors.map((color, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{color.name}</h3>
                  <p className="text-sm text-muted-foreground">{color.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Caliper Painting Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how caliper painting enhances the overall appearance. Slide to compare before and after.
            </p>
          </div>
          <BeforeAfterGallery images={caliperGalleryImages} />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Caliper Painting Process</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF0000] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Thorough Cleaning & Degreasing</h3>
                      <p className="text-muted-foreground">
                        Calipers are thoroughly cleaned and degreased to remove brake dust, road grime, and contaminants
                        for proper paint adhesion.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF0000] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Careful Masking & Protection</h3>
                      <p className="text-muted-foreground">
                        The entire vehicle plus brake components, bleeder valves, and mounting points are carefully masked to ensure paint only
                        goes where it should.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF0000] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">High-Temperature 2k Paint Application</h3>
                      <p className="text-muted-foreground">
                        Multiple coats of specialized 2k high-temperature brake caliper paint are applied for even
                        coverage and durability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF0000] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Curing & Quality Check</h3>
                      <p className="text-muted-foreground">
                        Paint is allowed to properly cure, then inspected for quality before wheel
                        installation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Add Caliper Painting to Any Package</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Caliper painting can be added to any of our wheel restoration packages for a complete transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3">Caliper Paint Only</h3>
                <p className="text-muted-foreground mb-4">
                  Just want your calipers painted? I can do that too, even if you're not restoring your wheels.
                </p>
                <div className="text-2xl font-bold text-[#0066B1] mb-2">From $400</div>
                <div className="text-sm text-muted-foreground">per set of 4 calipers</div>
              </CardContent>
            </Card>

            <Card className="border-[#0066B1] border-2">
              <CardContent className="pt-6">
                <div className="bg-[#0066B1] text-white text-xs font-bold px-2 py-1 rounded inline-block mb-3">
                  POPULAR
                </div>
                <h3 className="font-semibold text-xl mb-3">With Wheel Restoration</h3>
                <p className="text-muted-foreground mb-4">
                  Add caliper painting to any wheel restoration package for a complete, cohesive look.
                </p>
                <div className="text-2xl font-bold text-[#0066B1] mb-2">Add $350</div>
                <div className="text-sm text-muted-foreground">to any rim package</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3">Custom Package</h3>
                <p className="text-muted-foreground mb-4">
                  Complex caliper work, hub painting, or special requirements? Let's discuss a custom quote.
                </p>
                <div className="text-2xl font-bold text-[#0066B1] mb-2">Custom Quote</div>
                <div className="text-sm text-muted-foreground">based on requirements</div>
              </CardContent>
            </Card>
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
