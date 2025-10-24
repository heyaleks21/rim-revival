"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface GalleryImage {
  before: string
  beforeDesc: string
  after: string
  afterDesc: string
  title: string
  description: string
}

interface BeforeAfterGalleryProps {
  images: GalleryImage[]
}

export default function BeforeAfterGallery({ images }: BeforeAfterGalleryProps) {
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({})
  const sliderRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const initialPositions: { [key: number]: number } = {}
    images.forEach((_, index) => {
      initialPositions[index] = 50
    })
    setSliderPositions(initialPositions)
  }, [images])

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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((item, index) => (
        <div key={index} className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
          </div>

          <div
            className="relative aspect-[3/4] rounded-lg overflow-hidden border"
            ref={(el) => (sliderRefs.current[index] = el)}
          >
            <div className="absolute inset-0 w-full h-full">
              <img
                src={item.after || "/placeholder.svg"}
                alt={item.afterDesc}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div
              className="absolute inset-0 w-full h-full"
              style={{
                clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)`,
              }}
            >
              <img
                src={item.before || "/placeholder.svg"}
                alt={item.beforeDesc}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

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
  )
}
