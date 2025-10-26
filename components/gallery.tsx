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
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/jeep1.webp",
      beforeDesc:
        "Standard Jeep Cherokee  rims with curb damage and scratches before restoration and caliper paint by Rim Revivals Adelaide",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/jeep2.webp",
      afterDesc:
        "Jeep rims transformed with premium gloss black finish and clear coat protection by Rim Revivals Adelaide",
      title: "Black Out & Caliper Paint",
      description: "Standard Jeep rims painted in semi-gloss black and calipers in Brembo red.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/alfa1.webp",
      beforeDesc:
        "Factory Alfa Romeo rims with curb damage and scratches before restoration by Rim Revivals Adelaide",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/alfa2.webp",
      afterDesc:
        "Alfa Romeo rims and calipers transformed with an Anthracite grey and Alfa red finish.",
      title: "Premium Original Restoration",
      description: "Alfa Romeo rims transformed with an Anthracite grey finish and calipers in Alfa red.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/rr1.webp",
      beforeDesc:
        "Land rover rims with faded factory finish and edge wear before professional restoration in Adelaide",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/rr2.webp",
      afterDesc: "Land rover rims restored with a gloss black finish for a modern look by Rim Revivals Adelaide",
      title: "Rare Wheel Refresh",
      description: "Factory Land Rover rims with severe rash and multiple touch ups transformed.",
    },
    
    
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/wrx1.webp",
      beforeDesc: "Diamond-cut face wheels with oxidation and curb damage before professional restoration in Adelaide",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/wrx2.webp",
      afterDesc:
        "Boring grey WRX rims refinished in a high gloss black, with Porsche acid green calipers.",
      title: "Premium Style Upgrade",
      description: "Boring grey WRX rims refinished in a high gloss black, with Porsche acid green calipers.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/mustang1.webp",
      beforeDesc:
        "Basic 5-spoke factory rims with worn silver finish before restoration in Adelaide, South Australia",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/mustang2.webp",
      afterDesc: "5-spoke wheels transformed with deep gloss black finish for a custom look by Rim Revivals Adelaide",
      title: "Classic Design Refresh",
      description: "Basic factory Mustang rims transformed with deep gloss black finish for a blacked-out look.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/m61.webp",
      beforeDesc:
        "Neglected BMW M6 rims and calipers restored in a bright metallic silver",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/m62.webp",
      afterDesc:
        "BMW rims transformed with premium metallic gloss silver finish and clear coat protection by Rim Revivals Adelaide",
      title: "Factory Refresh",
      description: "Neglected BMW M6 rims restored in a bright metallic silver with a caliper and hub refresh.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/tesla1.webp",
      beforeDesc:
        "Tesla sport wheels with multi-spoke design before professional restoration in Adelaide",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/tesla2.webp",
      afterDesc: "Tesla sport wheels transformed with a matte black by Rim Revivals Adelaide",
      title: "EV Pre-Sale Restoration",
      description: "Tesla rims with heavy gutter rash restored to a factory appearance.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/csl1.webp",
      beforeDesc:
        "Rattle canned BMW CSL rims stripped and restored.",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/csl2.webp",
      afterDesc:
        "BMW CSL rims transformed with premium gloss black finish and clear coat protection by Rim Revivals Adelaide",
      title: "Much Needed Love",
      description: "Heavily rashed and rattle canned BMW CSL rims stripped and restored.",
    },
    {
      before:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/tt1.webp",
      beforeDesc: "Factory silver Audi multi-spoke wheels with dull finish and clear coat damage before restoration",
      after:
        "https://yqjsjmayq49ocucv.public.blob.vercel-storage.com/rims/rim-revivals-gallery/tt2.webp",
      afterDesc:
        "Holden multi-spoke wheels refinished in high-gloss black.",
      title: "Sport Wheel Restoration",
      description: "Multi-spoke Audi rims with a poor finish and moderate rash refinished in high-gloss black.",
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
