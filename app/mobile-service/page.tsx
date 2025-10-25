import type { Metadata } from "next"
import QuoteForm from "@/components/quote-form"
import Footer from "@/components/footer"
import BeforeAfterGallery from "@/components/before-after-gallery"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, MapPin, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Mobile Rim Restoration Adelaide | Pickup & Delivery Service",
  description:
    "Convenient mobile rim restoration service in Adelaide. I pickup and deliver your wheels throughout the metro area. Professional wheel restoration at your convenience.",
  keywords:
    "mobile rim restoration Adelaide, wheel pickup delivery, convenient rim repair, mobile wheel refinishing Adelaide, rim restoration pickup service",
  openGraph: {
    title: "Mobile Rim Restoration Adelaide | Pickup & Delivery Service",
    description:
      "Convenient mobile rim restoration service in Adelaide with pickup and delivery throughout the metro area.",
    url: "https://www.rimrevivals.com.au/mobile-service",
    images: [
      {
        url: "https://www.rimrevivals.com.au/images/hero-bmw-wheel.webp",
        width: 1920,
        height: 1280,
        alt: "Mobile rim restoration service in Adelaide with convenient pickup and delivery",
      },
    ],
  },
}

export default function MobileService() {
  const serviceFeatures = [
    {
      icon: <Truck className="h-8 w-8 text-[#0066B1]" />,
      title: "Pickup & Delivery",
      description:
        "Your wheels are collected from your location and returned when the work is complete - all within the Adelaide metro area.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#0066B1]" />,
      title: "Metro-Wide Service",
      description:
        "Serving all Adelaide metro suburbs from the hills to the coast. I come to you, wherever is convenient.",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#0066B1]" />,
      title: "Flexible Scheduling",
      description:
        "Book a time that works for your schedule. I work around your availability for both pickup and delivery. Weekend and afterhour services available.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#0066B1]" />,
      title: "Professional Service",
      description:
        "Your wheels are transported safely and restored in my home-based workshop using the same high-quality processes.",
    },
  ]

  const mobileGalleryImages = [
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/1%20before.JPEG-XwD6OUSGRHNXggZFYrlsrLbQC0Kmfs.webp",
      beforeDesc: "Wheels collected via mobile service before restoration",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/1%20after.JPEG-WoJ7idkpqd7fYO3NhOCw8tUGgISjfZ.webp",
      afterDesc: "Restored wheels delivered back via mobile service",
      title: "Mobile Service Transformation",
      description: "Picked up, restored, and delivered.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/6%20before.JPEG-1Vjq7D4MtC6w8gWesS0Q7DC7z0Egea.webp",
      beforeDesc: "Sport wheels collected for mobile restoration service",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/6%20after.JPEG-31mZy7koWNFgS9RoJ7CF3gsbuI7nvp.webp",
      afterDesc: "Sport wheels restored and returned via mobile service",
      title: "Convenient Mobile Restoration",
      description: "Professional results with convenient service.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/2%20before.JPEG-492VbNwysP1u9i6KccPHn6sZwM2oVk.webp",
      beforeDesc: "Multi-spoke wheels via mobile pickup service",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/2%20after.JPEG-yFrSUCPVS5ejMEoNEx2e2jarpEWWLN.webp",
      afterDesc: "Restored wheels delivered to customer's location",
      title: "Mobile Service Excellence",
      description: "Quality restoration at your convenience.",
    },
  ]

  const serviceAreas = [
    "Adelaide CBD",
    "North Adelaide",
    "Prospect",
    "Blair Athol",
    "Enfield",
    "Clearview",
    "Salisbury",
    "Elizabeth",
    "Gawler",
    "Modbury",
    "Tea Tree Gully",
    "Golden Grove",
    "Greenwith",
    "Mawson Lakes",
    "Parafield Gardens",
    "Pooraka",
    "Angle Park",
    "West Lakes",
    "Henley Beach",
    "Glenelg",
    "Brighton",
    "Marion",
    "Morphett Vale",
    "Aberfoyle Park",
    "Blackwood",
    "Stirling",
    "Burnside",
    "Norwood",
    "Kensington",
    "Unley",
    "Hyde Park",
    "Goodwood",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bmw-wheel.webp"
            alt="Convenient mobile rim repair service in Adelaide. I pickup and deliver your wheels throughout the metro area. Professional wheel restoration at your convenience."
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
              Mobile Rim Restoration Service in Adelaide
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              Professional wheel restoration with the convenience of pickup and delivery throughout Adelaide metro. No
              need to remove your wheels or visit my workshop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start">
              <a
                href="#quote"
                className="bg-[#FF0000] text-white hover:bg-[#FF0000]/90 text-base px-6 py-3 rounded-md font-medium transition-colors"
              >
                Book Mobile Service
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Mobile Service?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get professional rim restoration without the hassle of dropping off and picking up your wheels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, index) => (
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

      {/* How It Works Section */}
      <section className="py-20 bg-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How Mobile Service Works</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0066B1] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Submit Your Quote Request</h3>
                      <p className="text-muted-foreground">
                        Fill out my quote form with photos and details about your wheels. I'll provide a detailed quote
                        and schedule a convenient pickup time.
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
                      <h3 className="font-semibold text-lg mb-2">Your Wheels Are Collected</h3>
                      <p className="text-muted-foreground">
                        At the scheduled time, I'll arrive at your location to collect your wheels. You can leave them
                        on the vehicle, or have them ready for pickup.
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
                      <h3 className="font-semibold text-lg mb-2">Professional Restoration</h3>
                      <p className="text-muted-foreground">
                        Your wheels are transported to my home-based workshop where they undergo the same professional
                        restoration process as any other job. I'll keep you updated on progress.
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
                      <h3 className="font-semibold text-lg mb-2">Delivery Back to You</h3>
                      <p className="text-muted-foreground">
                        Once complete, I'll deliver your beautifully restored wheels back to your location at a time
                        that suits your schedule. Simple as that!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Servicing All Adelaide Metro Areas</h2>
            <p className="text-center text-muted-foreground mb-8">
              Mobile pickup and delivery service covering the entire Adelaide metropolitan area including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0066B1] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 text-sm">
              Don't see your suburb? Contact me - I may still be able to service your area!
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile Service Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Same professional quality with added convenience. Slide to compare before and after transformations.
            </p>
          </div>
          <BeforeAfterGallery images={mobileGalleryImages} />
        </div>
      </section>

      {/* Pricing Info Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="border-[#0066B1] border-2">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Mobile Service Pricing</h2>
                <p className="text-center text-muted-foreground mb-6">
                  Add convenient pickup and delivery to any of my restoration packages:
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">Budget Restoration Package</span>
                    <span className="text-xl font-bold text-[#0066B1]">$450</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">Premium Restoration Package</span>
                    <span className="text-xl font-bold text-[#0066B1]">$650</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">Custom Refinishing Package</span>
                    <span className="text-xl font-bold text-[#0066B1]">$950</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">Metro Pickup & Delivery</span>
                    <span className="text-xl font-bold text-[#0066B1]">$50</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-6">
                  Restoration, pickup and delivery fees vary based on location. Get an exact quote when you submit your
                  request.
                </p>
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
