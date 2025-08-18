"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 20)

      // Update active section based on scroll position
      const sections = ["services", "process", "gallery", "testimonials", "faq", "quote", "paint-types"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }

      // If we're at the top, set active to home
      if (scrollPosition < 100) {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll function that doesn't update URL
  const scrollToSection = (sectionId: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault()
    }

    const element = document.getElementById(sectionId)
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }

    // Close mobile menu if open
    setIsMenuOpen(false)
  }

  // Logo URLs
  const whiteLogo =
    "https://rcuitxlzolonzxfyfjlo.supabase.co/storage/v1/object/public/beforeafter//rim-revivals-logo-whitef.svg"
  const blackLogo =
    "https://rcuitxlzolonzxfyfjlo.supabase.co/storage/v1/object/public/beforeafter//rim-revivals-logo-blackf.svg"

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80 py-0.5"
          : "bg-transparent py-1"
      }`}
    >
      <div className="container flex items-center justify-between">
        <button
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
            setActiveSection("home")
          }}
        >
          <div className="relative h-16 w-65 py-2 pr-2">
            {/* Use different logo based on scroll position */}
            <img
              src={scrolled ? blackLogo : whiteLogo}
              alt="Rim Revivals Logo"
              className="h-full w-full object-contain transition-all"
            />
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { id: "services", label: "Services" },
            { id: "paint-types", label: "Paint Systems" },
            { id: "process", label: "Our Process" },
            { id: "gallery", label: "Gallery" },
            { id: "testimonials", label: "Testimonials" },
            { id: "faq", label: "FAQ" },
          ].map((item) => (
            <button
              key={item.id}
              className={`text-sm font-medium transition-colors relative ${
                scrolled ? "text-gray-700 hover:text-[#0066B1]" : "text-white/90 hover:text-white"
              } ${activeSection === item.id ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#0066B1]" : ""}`}
              onClick={(e) => scrollToSection(item.id, e)}
            >
              {item.label}
            </button>
          ))}
          <Button
            className={`px-6 py-2 h-auto font-medium transition-all ${
              scrolled ? "bg-[#FF0000] hover:bg-[#FF0000]/90 text-white" : "bg-white text-[#0066B1] hover:bg-white/90"
            }`}
            onClick={(e) => scrollToSection("quote", e)}
          >
            Get a Quote
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-md mt-2 rounded-b-lg">
          <nav className="flex flex-col space-y-4">
            {[
              { id: "services", label: "Services" },
              { id: "paint-types", label: "Paint Systems" },
              { id: "process", label: "The Process" },
              { id: "gallery", label: "Gallery" },
              { id: "testimonials", label: "Testimonials" },
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <button
                key={item.id}
                className={`text-sm font-medium px-2 py-2 rounded-md transition-colors text-left ${
                  activeSection === item.id
                    ? "bg-[#0066B1]/10 text-[#0066B1]"
                    : "text-gray-700 hover:text-[#0066B1] hover:bg-gray-100"
                }`}
                onClick={(e) => scrollToSection(item.id, e)}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={(e) => scrollToSection("quote", e)}
              className="w-full mt-2 bg-[#FF0000] hover:bg-[#FF0000]/90"
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
