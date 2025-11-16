import type { Metadata } from "next"
import Image from "next/image"
import QuoteForm from "@/components/quote-form"
import Footer from "@/components/footer"
import BeforeAfterGallery from "@/components/before-after-gallery"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Palette, Wrench, Star } from 'lucide-react'
import Script from "next/script"

export const metadata: Metadata = {
  title: "Custom Rim Finishes | Specialty Wheel Refinishing",
  description:
    "Custom rim finishes in Adelaide including shadow chrome, pearl, metallic, and two-tone designs. Professional specialty wheel refinishing.",
  keywords:
    "custom rim finishes, specialty wheel painting Adelaide, pearl rim finish, shadow chrome wheels, two-tone rims, custom alloy wheel refinishing",
  openGraph: {
    title: "Custom Rim Finishes | Specialty Wheel Refinishing",
    description:
      "Custom rim finishes in Adelaide including shadow chrome, pearl, metallic, and two-tone designs. Professional specialty wheel refinishing.",
    url: "https://www.rimrevivals.com.au/custom-finishes",
    images: [
      {
        url: "https://www.rimrevivals.com.au/images/hero-bmw-wheel.webp",
        width: 1920,
        height: 1280,
        alt: "Custom Rim Finishes | Specialty Wheel Refinishing",
      },
    ],
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
      before: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/alfa1.webp",
      beforeDesc: "Alfa Romeo calipers before refinishing",
      after: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/alfa2.webp",
      afterDesc: "Alfa Romeo calipers in signature Alfa red",
      title: "Premium Ferarri Colour",
      description: "Alfa Romeo rims restored in a custom Ferarri colour.",
    },
    {
      before: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/m61.webp",
      beforeDesc: "BMW M6 rims before custom metallic silver restoration",
      after: "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/m62.webp",
      afterDesc: "BMW M6 with custom metallic silver finish and caliper refresh",
      title: "Metallic Silver Finish",
      description: "Premium metallic restoration with a caliper and hub refresh.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/vyss1.webp",
      beforeDesc:
        "Heavily rashed and plasti-dipped Holden VY SS rims stripped and restored.",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/vysss2.webp",
      afterDesc:
        "Holden VY SS rims transformed with premium metallic grey finish and clear coat protection by Rim Revivals Adelaide",
      title: "Much Needed Love",
      description: "Heavily rashed and plasti-dipped rims stripped and restored.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.rimrevivals.com.au",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Custom Rim Finishes",
                item: "https://www.rimrevivals.com.au/custom-finishes",
              },
            ],
          }),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Custom Rim Finishes",
            name: "Custom Rim Finishes Adelaide",
            description:
              "Custom rim finishes in Adelaide including shadow chrome, pearl, metallic, and two-tone designs. Professional specialty wheel refinishing with complete tire removal and custom color matching.",
            provider: {
              "@type": "AutoRepair",
              name: "Rim Revivals",
              url: "https://www.rimrevivals.com.au",
              telephone: "0498256447",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Adelaide",
                addressRegion: "SA",
                addressCountry: "AU",
              },
            },
            areaServed: {
              "@type": "City",
              name: "Adelaide",
            },
            offers: {
              "@type": "Offer",
              price: "950.00",
              priceCurrency: "AUD",
              description: "Custom refinishing package - per set of 4 rims",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black">
          <Image
            src="/images/hero-bmw-wheel.webp"
            alt="Custom rim finishes in Adelaide including shadow chrome, pearl, metallic, and two-tone designs. Professional specialty wheel refinishing with premium paint systems and complete tire removal service."
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
                        After discussing your vision, I'll show you samples and help you choose the perfect finish for
                        your wheels and vehicle style.
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
                        Tires are removed (optional), wheels are stripped if needed, and all damage is repaired to
                        create the perfect foundation.
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
                        After curing, the wheels are inspected and tires are professionally mounted and balanced for
                        perfect performance.
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
