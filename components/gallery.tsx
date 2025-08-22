"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Define the image data structure
interface GalleryImage {
  before: string
  beforeDesc: string
  after: string
  afterDesc: string
  title: string
  description: string
}

export default function Gallery() {
  // State for the before/after slider
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({})
  const sliderRefs = useRef<(HTMLDivElement | null)[]>([])

  // Gallery data
  const galleryImages: GalleryImage[] = [
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/1%20before.JPEG-XwD6OUSGRHNXggZFYrlsrLbQC0Kmfs.webp",
      beforeDesc:
        "Factory silver Holden rims with curb damage and scratches before restoration by Rim Revivals Adelaide",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/1%20after.JPEG-WoJ7idkpqd7fYO3NhOCw8tUGgISjfZ.webp",
      afterDesc:
        "Holden rims transformed with premium gloss black finish and clear coat protection by Rim Revivals Adelaide",
      title: "Silver to Black Conversion",
      description: "Boring factory rims transformed with premium gloss black finish.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/2%20before.JPEG-492VbNwysP1u9i6KccPHn6sZwM2oVk.webp",
      beforeDesc: "Factory silver Holden multi-spoke wheels with dull finish and clear coat damage before restoration",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/2%20after.JPEG-yFrSUCPVS5ejMEoNEx2e2jarpEWWLN.webp",
      afterDesc:
        "Holden multi-spoke wheels refinished in high-gloss black.",
      title: "Sport Wheel Restoration",
      description: "Multi-spoke rims with clear coat failure and light rash refinished in high-gloss black.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/3%20before-Tum7gOau22bVYgSvqedUgNLcylM25h.webp",
      beforeDesc:
        "Audi 5-spoke rims with faded factory finish and edge wear before professional restoration in Adelaide",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/3%20after-ZSHhC4zan5ONmkPxo9KE3NRNJWbbic.webp",
      afterDesc: "Audi rims restored with premium matte gray finish for a modern look by Rim Revivals Adelaide",
      title: "Rare Wheel Refresh",
      description: "Factory Audi rims with severe rash and a paint can finish transformed.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/IMG_8553.webp",
      beforeDesc:
        "Neglected BMW M6 rims and calipers restored in a bright metallic silver",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/IMG_8523%20%281%29.webp",
      afterDesc:
        "BMW rims transformed with premium metallic gloss silver finish and clear coat protection by Rim Revivals Adelaide",
      title: "Factory Refresh",
      description: "Neglected BMW M6 rims and calipers restored in a bright metallic silver.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/jjbb%20%281%29.webp",
      beforeDesc:
        "Standard Jeep Cherokee  rims with curb damage and scratches before restoration and caliper paint by Rim Revivals Adelaide",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/jjaa.webp",
      afterDesc:
        "Holden rims transformed with premium gloss black finish and clear coat protection by Rim Revivals Adelaide",
      title: "Black Out & Caliper Paint",
      description: "Standard Jeep rims painted in semi-gloss black and calipers in Brembo red.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/alfab.webp",
      beforeDesc:
        "Factory Alfa Romeo rims with curb damage and scratches before restoration by Rim Revivals Adelaide",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/alfaa%20%281%29.webp",
      afterDesc:
        "Alfa Romeo rims and calipers transformed with an Anthracite grey and Alfa red finish.",
      title: "Budget Original Restoration",
      description: "Alfa Romeo rims transformed with an Anthracite grey finish and calipers in Alfa red.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/4%20before.JPEG-ZSR8Wma7S3gbiFtCXFhQEYPbbfxN1R.webp",
      beforeDesc: "Diamond-cut face wheels with oxidation and curb damage before professional restoration in Adelaide",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/4%20after.JPEG-IpIIVPzvgctekD1DAzSLYmch0942qz.webp",
      afterDesc:
        "Diamond-cut wheels completely refinished in satin black with machined details by Rim Revivals Adelaide",
      title: "Premium Style Upgrade",
      description: "Diamond-cut HSV rims resurfaced and refinished in satin black after tyre removal.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/5%20before.JPEG-Mz4C4lG1Ckq6q5kyxpK8dzr3XbI2ik.webp",
      beforeDesc:
        "Basic 5-spoke factory wheels with worn silver finish before restoration in Adelaide, South Australia",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/5%20after.JPEG-qvvt77i4MkNItcSOoxRmD0EaPaUafg.webp",
      afterDesc: "5-spoke wheels transformed with deep gloss black finish for a custom look by Rim Revivals Adelaide",
      title: "Classic Design Refresh",
      description: "Basic 5-spoke factory wheels transformed with deep gloss black finish for a blacked-out look.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/6%20before.JPEG-1Vjq7D4MtC6w8gWesS0Q7DC7z0Egea.webp",
      beforeDesc:
        "Factory silver Holden sport wheels with multi-spoke design before professional restoration in Adelaide",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/before/6%20after.JPEG-31mZy7koWNFgS9RoJ7CF3gsbuI7nvp.webp",
      afterDesc: "Holden sport wheels transformed with mirror-finish gloss black by Rim Revivals Adelaide",
      title: "Performance Wheel Upgrade",
      description: "Factory wheels transformed with mirror-finish gloss black for a lasting premium appearance.",
    },
  ]

  // Initialize slider positions
  useEffect(() => {
    const initialPositions: { [key: number]: number } = {}
    galleryImages.forEach((_, index) => {
      initialPositions[index] = 50 // Start at 50%
    })
    setSliderPositions(initialPositions)
  }, [])

  // Slider functionality
  const handleSliderChange = (index: number, position: number) => {
    setSliderPositions((prev) => ({
      ...prev,
      [index]: position,
    }))
  }

  const handleSliderMouseDown = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    index: number,
  ) => {
    e.preventDefault()
    e.stopPropagation()

    const handleMouseMove = (moveEvent: MouseEvent | TouchEvent) => {
      moveEvent.preventDefault()
      const sliderElement = sliderRefs.current[index]
      if (!sliderElement) return

      const rect = sliderElement.getBoundingClientRect()
      const containerWidth = rect.width

      let clientX: number
      if ("clientX" in moveEvent) {
        clientX = moveEvent.clientX
      } else {
        clientX = moveEvent.touches[0].clientX
      }

      const position = ((clientX - rect.left) / containerWidth) * 100
      const clampedPosition = Math.max(0, Math.min(100, position))
      handleSliderChange(index, clampedPosition)
    }

    const handleMouseUp = (upEvent: MouseEvent | TouchEvent) => {
      upEvent.preventDefault()
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleMouseMove)
      document.removeEventListener("touchend", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleMouseMove)
    document.addEventListener("touchend", handleMouseUp)
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the transformation my restoration services can achieve. Slide to compare before and after.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>

              {/* Before/After Slider */}
              <div
                className="relative aspect-[3/4] rounded-lg overflow-hidden border"
                ref={(el) => (sliderRefs.current[index] = el)}
              >
                {/* After Image (Background) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={item.after || "/placeholder.svg"}
                    alt={`${item.title} after restoration`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Before Image (Overlay with clip-path) */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)`,
                  }}
                >
                  <img
                    src={item.before || "/placeholder.svg"}
                    alt={`${item.title} before restoration`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-6 -ml-3 flex items-center justify-center cursor-col-resize z-10 focus:outline-none"
                  style={{ left: `${sliderPositions[index] || 50}%` }}
                  onMouseDown={(e) => handleSliderMouseDown(e, index)}
                  onTouchStart={(e) => handleSliderMouseDown(e, index)}
                  tabIndex={0}
                >
                  <div className="h-full w-1 bg-white"></div>
                  <div className="absolute bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-white/50">
                    <div className="flex items-center">
                      <ArrowLeft className="h-3 w-3 text-gray-700" />
                      <ArrowRight className="h-3 w-3 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div
                  className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded transition-opacity"
                  style={{
                    opacity: sliderPositions[index] < 15 ? 0 : 1,
                  }}
                >
                  Before
                </div>
                <div
                  className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded transition-opacity"
                  style={{
                    opacity: sliderPositions[index] > 85 ? 0 : 1,
                  }}
                >
                  After
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
