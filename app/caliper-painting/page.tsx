import type { Metadata } from "next"
import QuoteForm from "@/components/quote-form"
import Footer from "@/components/footer"
import BeforeAfterGallery from "@/components/before-after-gallery"
import { Card, CardContent } from "@/components/ui/card"
import { Paintbrush, Shield, Zap, Check } from "lucide-react"
import Image from "next/image"

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
    images: [
      {
        url: "https://www.rimrevivals.com.au/images/hero-bmw-wheel.webp",
        width: 1920,
        height: 1280,
        alt: "Brake caliper painting in Adelaide showcasing BMW wheels with custom painted calipers",
      },
    ],
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
      description: "2k high-temperature brake caliper paint that withstands extreme heat without fading or peeling.",
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
      before: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/jeep1.webp",
      beforeDesc: "Jeep Cherokee calipers before painting",
      after: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/jeep2.webp",
      afterDesc: "Jeep calipers painted in Brembo red with black rims",
      title: "Brembo Red Caliper Paint",
      description: "Classic Brembo red on Jeep Cherokee.",
    },
    {
      before: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/alfa1.webp",
      beforeDesc: "Alfa Romeo calipers before refinishing",
      after: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/alfa2.webp",
      afterDesc: "Alfa Romeo calipers in signature Alfa red",
      title: "Alfa Romeo Red Calipers",
      description: "OEM Alfa red caliper restoration.",
    },
    {
      before: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/wrx1.webp",
      beforeDesc: "Subaru WRX calipers before refresh",
      after: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/wrx2.webp",
      afterDesc: "WRX calipers restored in Porsche Acid Green",
      title: "WRX Caliper Refresh",
      description: "Complete caliper restoration.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black">
          <Image
            src="/images/hero-bmw-wheel.webp"
            alt="Budget brake caliper painting in Adelaide. High-temperature 2k paint in custom colors including Brembo red, BMW blue, Porsche acid green and more. Enhance your wheel appearance."
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: "center",
            }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-2xl text-white text-center sm:text-left mx-auto sm:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Brake Caliper Painting in Adelaide
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              Budget high-temperature caliper painting to complement your wheel restoration. Choose from OEM colors or
              create a custom look.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="bg-[#a8a9ad] border-gray-400">
              <CardContent className="p-6 text-center flex flex-col justify-center min-h-[200px]">
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Shadow Chrome</h3>
                <p className="text-gray-800">
                  A dark, mirror-like finish that combines the depth of black with the reflectivity of chrome for a
                  dramatic, luxury appearance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border-gray-700">
              <CardContent className="p-6 text-center flex flex-col justify-center min-h-[200px]">
                <h3 className="font-semibold text-xl mb-4 text-white">Gloss Black</h3>
                <p className="text-gray-200">
                  Deep, mirror-like black finish that provides a sleek, premium appearance with exceptional depth and
                  shine.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#ffffff] border-gray-400">
              <CardContent className="p-6 text-center flex flex-col justify-center min-h-[200px]">
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Pearl White</h3>
                <p className="text-gray-800">
                  A classic white finish with pearlescent shimmer that adds a touch of elegance to any vehicle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#B08D57] border-amber-700">
              <CardContent className="p-6 text-center flex flex-col justify-center min-h-[200px]">
                <h3 className="font-semibold text-xl mb-4 text-white">Lamborghini Bronzo Zante</h3>
                <p className="text-gray-100">
                  Exotic Lamborghini bronze metallic that brings a luxurious, racing-inspired aesthetic with stunning
                  depth and warmth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#393D47] border-gray-600">
              <CardContent className="p-6 text-center flex flex-col justify-center min-h-[200px]">
                <h3 className="font-semibold text-xl mb-4 text-white">Ferrari Anthracite Grey</h3>
                <p className="text-gray-200">
                  A sophisticated dark grey metallic finish popular on European luxury and sports vehicles for a factory
                  premium look.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#2F539B] border-blue-700">
              <CardContent className="p-6 text-center flex flex-col justify-center min-h-[200px]">
                <h3 className="font-semibold text-xl mb-4 text-white">BMW Estoril Blue</h3>
                <p className="text-gray-100">
                  Iconic BMW Motorsport blue that adds a sporty, premium look synonymous with BMW M performance
                  vehicles.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#CBE800] border-yellow-400">
              <CardContent className="p-6 text-center flex flex-col justify-center min-h-[200px]">
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Porsche Acid Green</h3>
                <p className="text-gray-800">
                  Distinctive Porsche sport green that commands attention and exemplifies modern performance styling.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#a9211d] border-red-700">
              <CardContent className="p-6 text-center flex flex-col justify-center min-h-[200px]">
                <h3 className="font-semibold text-xl mb-4 text-white">Audi Tornado Red</h3>
                <p className="text-gray-100">
                  Bold Audi sport red that makes a powerful statement and perfectly complements high-performance
                  vehicles.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#bb1e10] border-red-700">
              <CardContent className="p-6 text-center flex flex-col justify-center min-h-[200px]">
                <h3 className="font-semibold text-xl mb-4 text-white">Brembo Red</h3>
                <p className="text-gray-100">
                  Iconic Brembo performance red - the ultimate brake caliper and accent color that signals serious
                  stopping power and racing heritage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#28282B] border-gray-700">
              <CardContent className="p-6 text-center flex flex-col justify-center min-h-[200px]">
                <h3 className="font-semibold text-xl mb-4 text-white">Matte Black</h3>
                <p className="text-gray-200">
                  A modern, understated finish with a smooth, non-reflective appearance that's both aggressive and
                  refined.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#F8CD02] border-yellow-400">
              <CardContent className="p-6 text-center flex flex-col justify-center min-h-[200px]">
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Porsche Speed Yellow</h3>
                <p className="text-gray-800">
                  Vibrant Porsche sport yellow that delivers maximum visual impact and embodies the spirit of
                  high-performance racing.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-gray-300 bg-white">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-500 via-purple-500 to-pink-500 mix-blend-multiply"></div>
              </div>
              <CardContent className="p-6 text-center flex flex-col justify-center min-h-[200px] relative z-10">
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Custom Match</h3>
                <p className="text-gray-700">
                  Any color imaginable - I can match your vehicle's paint code or create a completely unique custom
                  shade.
                </p>
              </CardContent>
            </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Caliper Painting Process</h2>
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
                        The entire vehicle plus brake components, bleeder valves, and mounting points are carefully
                        masked to ensure paint only goes where it should.
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
                        Paint is allowed to properly cure, then inspected for quality before wheel installation.
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

            <Card className="border-[#0066B1] border-2 relative">
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-[#0066B1] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  POPULAR
                </div>
              </div>
              <CardContent className="pt-6">
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
                <a href="#quote" className="block">
                  <div className="text-2xl font-bold text-[#0066B1] mb-2 hover:underline cursor-pointer">
                    Custom Quote
                  </div>
                </a>
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
