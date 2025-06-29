"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ArrowLeft, ArrowRight, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

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

  // State for the expanded view
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isBeforeImage, setIsBeforeImage] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })

  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

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
        "Holden multi-spoke wheels refinished in high-gloss black with polished spoke edges by Rim Revivals Adelaide",
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
      title: "Rare Wheel Restoration",
      description: "Factory VF SSV Redline rims with severe rash and a paint can finish transformed.",
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
      description: "Diamond-cut VE HSV Pentagons resurfaced and refinished in satin black after tyre removal.",
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

  // Reset zoom and position when dialog opens or image changes
  useEffect(() => {
    setZoomLevel(1)
    setPosition({ x: 0, y: 0 })
  }, [isOpen, currentImageIndex, isBeforeImage])

  // Preload adjacent images for smoother navigation
  useEffect(() => {
    if (isOpen) {
      const preloadImage = (src: string) => {
        const img = new Image()
        img.src = src
      }

      // Preload next and previous images
      const nextIndex = (currentImageIndex + 1) % galleryImages.length
      const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length

      if (isBeforeImage) {
        preloadImage(galleryImages[nextIndex].before)
        preloadImage(galleryImages[prevIndex].before)
        // Also preload the "after" version of current image
        preloadImage(galleryImages[currentImageIndex].after)
      } else {
        preloadImage(galleryImages[nextIndex].after)
        preloadImage(galleryImages[prevIndex].after)
        // Also preload the "before" version of current image
        preloadImage(galleryImages[currentImageIndex].before)
      }
    }
  }, [isOpen, currentImageIndex, isBeforeImage, galleryImages])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "ArrowLeft":
          navigatePrevious()
          break
        case "ArrowRight":
          navigateNext()
          break
        case "Escape":
          closeModal()
          break
        case "+":
        case "=":
          zoomIn()
          break
        case "-":
          zoomOut()
          break
        case "0":
          resetZoom()
          break
        case " ": // Space key to toggle before/after
          toggleBeforeAfter()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentImageIndex, isBeforeImage, zoomLevel])

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
    e.stopPropagation()

    const handleMouseMove = (moveEvent: MouseEvent | TouchEvent) => {
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

    const handleMouseUp = () => {
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

  // Modal navigation functions
  const openModal = (index: number, isBefore: boolean) => {
    setCurrentImageIndex(index)
    setIsBeforeImage(isBefore)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const navigateNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const navigatePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const toggleBeforeAfter = () => {
    setIsBeforeImage((prev) => !prev)
  }

  // Zoom functions
  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3))
  }

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1))
  }

  const resetZoom = () => {
    setZoomLevel(1)
    setPosition({ x: 0, y: 0 })
  }

  // Pan functionality
  const startDrag = (clientX: number, clientY: number) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      setStartPosition({ x: clientX, y: clientY })
    }
  }

  const onDrag = (clientX: number, clientY: number) => {
    if (!isDragging || zoomLevel <= 1) return

    const dx = clientX - startPosition.x
    const dy = clientY - startPosition.y

    updatePosition(dx, dy)
    setStartPosition({ x: clientX, y: clientY })
  }

  const stopDrag = () => {
    setIsDragging(false)
  }

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      e.preventDefault()
      startDrag(e.clientX, e.clientY)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    onDrag(e.clientX, e.clientY)
  }

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && zoomLevel > 1) {
      startDrag(e.touches[0].clientX, e.touches[0].clientY)
    } else if (e.touches.length === 2) {
      // Handle pinch zoom
      e.preventDefault()
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      const distance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY)

      // Store the initial distance for pinch zoom calculation
      e.currentTarget.dataset.initialPinchDistance = distance.toString()
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDragging) {
      e.preventDefault() // Prevent scrolling when panning
      onDrag(e.touches[0].clientX, e.touches[0].clientY)
    } else if (e.touches.length === 2) {
      // Handle pinch zoom
      e.preventDefault()

      const initialDistance = Number.parseFloat(e.currentTarget.dataset.initialPinchDistance || "0")
      if (initialDistance > 0) {
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        const currentDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY)

        // Calculate zoom change
        const zoomDelta = (currentDistance - initialDistance) / 200

        setZoomLevel((prev) => {
          const newZoom = Math.max(1, Math.min(3, prev + zoomDelta))
          return newZoom
        })

        // Update the initial distance for the next move
        e.currentTarget.dataset.initialPinchDistance = currentDistance.toString()
      }
    }
  }

  // Update position with bounds checking
  const updatePosition = (dx: number, dy: number) => {
    const imageElement = imageRef.current
    const containerElement = containerRef.current

    if (imageElement && containerElement) {
      // Calculate the scaled dimensions
      const scaledWidth = imageElement.offsetWidth * zoomLevel
      const scaledHeight = imageElement.offsetHeight * zoomLevel

      // Calculate the maximum allowed movement
      const maxX = Math.max(0, (scaledWidth - containerElement.clientWidth) / 2)
      const maxY = Math.max(0, (scaledHeight - containerElement.clientHeight) / 2)

      // Calculate new position with bounds
      const newX = Math.max(-maxX, Math.min(maxX, position.x + dx))
      const newY = Math.max(-maxY, Math.min(maxY, position.y + dy))

      setPosition({ x: newX, y: newY })
    }
  }

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    if (isMobile) return // Don't interfere with scrolling on mobile

    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.25 : 0.25
    setZoomLevel((prev) => {
      const newZoom = Math.max(1, Math.min(3, prev + delta))
      return newZoom
    })
  }

  // Get current image and description
  const getCurrentImage = () => {
    const image = galleryImages[currentImageIndex]
    return {
      src: isBeforeImage ? image.before : image.after,
      alt: isBeforeImage ? image.beforeDesc : image.afterDesc,
      title: image.title,
      description: isBeforeImage ? "Before: " + image.beforeDesc : "After: " + image.afterDesc,
    }
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the transformation our expert restoration services can achieve. Slide to compare before and after, or
            click on any image for a closer look.
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
                    className="w-full h-full object-cover cursor-pointer"
                    loading="lazy"
                    onClick={() => openModal(index, false)}
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
                    className="w-full h-full object-cover cursor-pointer"
                    loading="lazy"
                    onClick={() => openModal(index, true)}
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-6 -ml-3 flex items-center justify-center cursor-col-resize z-10"
                  style={{ left: `${sliderPositions[index] || 50}%` }}
                  onMouseDown={(e) => handleSliderMouseDown(e, index)}
                  onTouchStart={(e) => handleSliderMouseDown(e, index)}
                >
                  <div className="h-full w-1 bg-white"></div>
                  <div className="absolute bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
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

      {/* Improved Modal for Expanded View */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-[85vw] p-0 bg-black border-0 text-white h-[90vh] flex flex-col">
          {/* Header with controls */}
          <div className="flex items-center justify-between p-3 bg-black/80 backdrop-blur-sm">
            <div className="flex-1">
              <h3 className="text-lg font-medium">{getCurrentImage().title}</h3>
              <p className="text-sm text-gray-300 hidden md:block">{getCurrentImage().description}</p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={toggleBeforeAfter}
                title={isBeforeImage ? "Show After Image" : "Show Before Image"}
              >
                {isBeforeImage ? "Before" : "After"}
              </Button>

              <div className="hidden md:flex items-center gap-1 mx-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={zoomOut}
                  disabled={zoomLevel <= 1}
                  title="Zoom Out"
                >
                  <ZoomOut className="h-5 w-5" />
                </Button>
                <span className="text-sm w-12 text-center">{Math.round(zoomLevel * 100)}%</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={zoomIn}
                  disabled={zoomLevel >= 3}
                  title="Zoom In"
                >
                  <ZoomIn className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={resetZoom}
                  disabled={zoomLevel === 1}
                  title="Reset Zoom"
                >
                  <span className="text-xs">1:1</span>
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={closeModal}
                title="Close"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image container */}
          <div className="flex-1 relative overflow-hidden" ref={containerRef}>
            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10"
              onClick={navigatePrevious}
              title="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10"
              onClick={navigateNext}
              title="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image with zoom/pan */}
            <div
              className="w-full h-full flex items-center justify-center"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={stopDrag}
              onMouseLeave={stopDrag}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={stopDrag}
              onWheel={handleWheel}
              style={{ touchAction: "none" }}
            >
              <img
                ref={imageRef}
                src={getCurrentImage().src || "/placeholder.svg"}
                alt={getCurrentImage().alt}
                className="max-h-full max-w-full object-contain select-none"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "center",
                  transition: isDragging ? "none" : "transform 0.2s ease-out",
                  cursor: zoomLevel > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
                  position: "relative",
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                }}
                draggable="false"
                onClick={() => {
                  if (zoomLevel === 1) {
                    zoomIn()
                  }
                }}
                onDoubleClick={(e) => {
                  e.preventDefault()
                  if (zoomLevel > 1) {
                    resetZoom()
                  } else {
                    zoomLevel === 1 && zoomIn()
                  }
                }}
              />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center justify-between p-2 bg-black/80">
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 h-8 px-2"
                onClick={zoomOut}
                disabled={zoomLevel <= 1}
              >
                <ZoomOut className="h-4 w-4 mr-1" />
                <span className="text-xs">Out</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 h-8 px-2"
                onClick={zoomIn}
                disabled={zoomLevel >= 3}
              >
                <ZoomIn className="h-4 w-4 mr-1" />
                <span className="text-xs">In</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 h-8 px-2"
                onClick={resetZoom}
                disabled={zoomLevel === 1}
              >
                <span className="text-xs">Reset</span>
              </Button>
            </div>
            <span className="text-xs text-gray-300">{Math.round(zoomLevel * 100)}%</span>
          </div>

          {/* Mobile caption */}
          <p className="md:hidden text-xs text-gray-300 p-2 bg-black/80 border-t border-gray-800">
            {getCurrentImage().description}
          </p>
        </DialogContent>
      </Dialog>
    </section>
  )
}
