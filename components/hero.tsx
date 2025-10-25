"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  // Smooth scroll function that doesn't update URL
  const scrollToSection = (sectionId: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault()
    }

    const element = document.getElementById(sectionId)
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bmw-wheel.webp"
          alt="Professional rim restoration services in Adelaide showcasing BMW wheels with premium alloy wheel refinishing and brake caliper painting"
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
            Adelaide's Premier Rim Restoration Specialist
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Transform scuffed and faded wheels into sleek, head-turning highlights at half the cost and quarter of the
            time of the big shops. No overheads, no waiting lists - just honest work, quick turnarounds, and prices that
            won't dent your wallet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start">
            <Button
              size="lg"
              className="bg-[#FF0000] text-white hover:bg-[#FF0000]/90 text-base px-6 py-3 h-auto w-auto font-medium"
              onClick={(e) => scrollToSection("quote", e)}
              aria-label="Get a free quote for rim restoration"
            >
              Get a Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 text-base px-6 py-3 h-auto w-auto font-medium"
              onClick={(e) => scrollToSection("gallery", e)}
              aria-label="View our before and after gallery"
            >
              Before & After Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
