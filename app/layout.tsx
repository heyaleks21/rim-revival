import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

// Enhanced metadata with improved SEO
export const metadata: Metadata = {
  title: "Rim Revivals Adelaide | Wheel & Caliper Painting | Rash Repairs",
  description:
    "Transform scuffed and faded wheels into sleek, head-turning highlights at half the cost and quarter of the time of the big shops. No overheads, no waiting lists - just honest work, quick turnarounds, and prices that won't dent your wallet.",
  keywords:
    "rim restoration, wheel repair, alloy wheel restoration, curb rash repair, Adelaide wheel repair, rim refinishing, wheel refurbishment",
  verification: {
    google: "FZ0MFXVltChFYYXUmmEI1-Msljs61HLRFjBCbalu1hY",
  },
  openGraph: {
    title: "Rim Revivals Adelaide | Wheel & Caliper Painting | Rash Repairs",
    description:
      "Transform scuffed and faded wheels into sleek, head-turning highlights at half the cost and quarter of the time of the big shops. No overheads, no waiting lists - just honest work, quick turnarounds, and prices that won't dent your wallet.",
    url: "https://www.rimrevivals.com.au",
    siteName: "Rim Revivals",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/pexels-redyar-rzgar-1257188192-30932163.jpg-5q5xV7rLgwSneYAoRHxbJmPNxUo0by.webp",
        width: 1920,
        height: 1280,
        alt: "Transform scuffed and faded wheels into sleek, head-turning highlights at half the cost and quarter of the time of the big shops. No overheads, no waiting lists - just honest repairs, quick turnarounds, and prices that won't dent your wallet.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rim Revivals Adelaide | Wheel & Caliper Painting | Rash Repairs",
    description:
      "Transform scuffed and faded wheels into sleek, head-turning highlights at half the cost and quarter of the time of the big shops. No overheads, no waiting lists - just honest repairs, quick turnarounds, and prices that won't dent your wallet.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/pexels-redyar-rzgar-1257188192-30932163.jpg-5q5xV7rLgwSneYAoRHxbJmPNxUo0by.webp",
    ],
  },
  alternates: {
    canonical: "https://www.rimrevivals.com.au",
  },
  icons: {
    icon: [
      {
        url: "https://rcuitxlzolonzxfyfjlo.supabase.co/storage/v1/object/public/beforeafter//Rim%20(1000%20x%20500%20px)%20(1000%20x%20220%20px).svg",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "https://rcuitxlzolonzxfyfjlo.supabase.co/storage/v1/object/public/beforeafter//Rim%20(1000%20x%20500%20px)%20(1000%20x%20220%20px).svg",
      type: "image/svg+xml",
    },
  },
  applicationName: "Rim Revivals",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Enhanced structured data with more detailed business information */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Rim Revivals",
              alternateName: "Rim Revivals Adelaide",
              description:
                "Transform scuffed and faded wheels into sleek, head-turning highlights at half the cost and quarter of the time of the big shops. No overheads, no waiting lists - just honest repairs, quick turnarounds, and prices that won't dent your wallet.",
              image:
                "https://rcuitxlzolonzxfyfjlo.supabase.co/storage/v1/object/public/beforeafter//rim-revivals-logo-white.svg",
              logo: "https://rcuitxlzolonzxfyfjlo.supabase.co/storage/v1/object/public/beforeafter//rim-revivals-logo-white.svg",
              "@id": "https://www.rimrevivals.com.au",
              url: "https://www.rimrevivals.com.au",
              telephone: "0498256447",
              email: "oceboosting@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Blair Athol",
                addressLocality: "Adelaide",
                addressRegion: "SA",
                postalCode: "5084",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -34.8667,
                longitude: 138.6,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00",
              },
              sameAs: ["https://www.facebook.com/rimrevivals", "https://www.instagram.com/rimrevivals"],
              priceRange: "$$",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -34.8667,
                  longitude: 138.6,
                },
                geoRadius: "50km",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -34.8667,
                  longitude: 138.6,
                },
                geoRadius: "50km",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Wheel Restoration Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Budget Restoration",
                      description: "Perfect for minor curb damage and simple colour changes",
                    },
                    price: "450.00",
                    priceCurrency: "AUD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Premium Restoration",
                      description: "Comprehensive repair for moderate to severe damage",
                    },
                    price: "600.00",
                    priceCurrency: "AUD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Refinishing",
                      description: "Complete transformation with custom finishes",
                    },
                    price: "950.00",
                    priceCurrency: "AUD",
                  },
                ],
              },
            }),
          }}
        />

        {/* FAQ Schema for rich results */}
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long does the rim restoration process take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our standard turnaround time is 2-3 business days for a set of four wheels. Premium and custom restorations may take 5-7 business days. Rush services are available which can reduce the turnaround time to 1-2 business days depending on our current workload.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you repair bent or cracked rims?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we can repair most bent and cracked rims as part of our Custom Refinishing package. Our partners use specialized equipment to straighten bent rims and weld cracks. However, the extent of damage will determine if a rim can be safely repaired. We'll assess your rims and provide honest recommendations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What type of paint do you use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We use only premium automotive-grade paint systems including epoxy and 2K primers for superior adhesion and corrosion protection, high performance base coat binders for exceptional color retention, and 2K polyurethane clear coats for outstanding gloss and durability. All our paints feature advanced UV inhibitors specifically rated for harsh Australian summers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need to remove my tyres before bringing in my wheels?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, you don't need to remove your tyres. Our Budget Restoration service can be performed with tyres on. However, for Premium and Custom Refinishing services, we include tyre removal and refitting in the price as it allows us to achieve a more complete and professional finish.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer a warranty on your work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we stand behind our work. Our Budget Restoration comes with a 6-month warranty against peeling or flaking. Premium Restoration includes a 12-month warranty, and Custom Refinishing includes an 18-month warranty. Warranties cover manufacturing defects but do not cover damage from road hazards, improper care, or accidents.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Before/After Image Schema */}
        <Script
          id="before-after-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              name: "Rim Restoration Before and After Gallery",
              description:
                "See the transformation our expert restoration services can achieve on damaged alloy wheels and rims.",
              image: [
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20before.JPEG-Ia8skjmymmTpwZJJW6w4CSeHpqYjBP.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20after.JPEG-ogNwqWnZzuBPnqNKiXWWwfF7YykXmE.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20before.JPEG-fouYKfotbPXKsdpBOgce6jccUdfRhB.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20after.JPEG-hbnUssx8MLdj8Lie2Iy5XfA9MRpkOo.jpeg",
                "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/3%20before-ix8Dm0I9IuUj0dN4NFxU121yFr8I6t.JPEG",
                "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/3%20after-uQxuRGTMaCRmldAgWd5Eds5D2jC3hM.JPEG",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
