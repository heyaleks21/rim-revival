"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 20)

      if (isHomePage) {
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

        if (scrollPosition < 100) {
          setActiveSection("home")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  const scrollToSection = (sectionId: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault()
    }

    // If we're not on the home page, navigate to home page with hash
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }

    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

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
        <a href="/" className="flex items-center">
          <div className="relative h-16 w-65 py-2 pr-2">
            <img
              src={scrolled ? blackLogo : whiteLogo}
              alt="Rim Revivals Logo"
              className="h-full w-full object-contain transition-all"
            />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button
              className={`text-base font-medium transition-colors flex items-center gap-1 ${
                scrolled ? "text-gray-700 hover:text-[#0066B1]" : "text-white/90 hover:text-white"
              }`}
              onClick={(e) => {
                if (isHomePage) {
                  scrollToSection("services", e)
                } else {
                  window.location.href = "/#services"
                }
              }}
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </button>
            {isServicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <a
                  href="/budget-repairs"
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-[#0066B1]"
                >
                  Budget Repairs
                </a>
                <a
                  href="/custom-finishes"
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-[#0066B1]"
                >
                  Custom Finishes
                </a>
                <a
                  href="/caliper-painting"
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-[#0066B1]"
                >
                  Caliper Painting
                </a>
                <a
                  href="/mobile-service"
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-[#0066B1]"
                >
                  Mobile Service
                </a>
              </div>
            )}
          </div>
          {[
            { id: "paint-types", label: "Paint Systems" },
            { id: "process", label: "The Process" },
            { id: "gallery", label: "Gallery" },
            { id: "testimonials", label: "Testimonials" },
            { id: "faq", label: "FAQ" },
          ].map((item) => (
            <button
              key={item.id}
              className={`text-base font-medium transition-colors relative ${
                scrolled ? "text-gray-700 hover:text-[#0066B1]" : "text-white/90 hover:text-white"
              } ${activeSection === item.id && isHomePage ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#0066B1]" : ""}`}
              onClick={(e) => scrollToSection(item.id, e)}
            >
              {item.label}
            </button>
          ))}
          <Button
            className={`px-6 py-2 h-auto font-medium transition-all ${
              scrolled ? "bg-[#FF0000] hover:bg-[#FF0000]/90 text-white" : "bg-white text-[#0066B1] hover:bg-white/90"
            }`}
            onClick={(e) => {
              if (isHomePage) {
                scrollToSection("quote", e)
              } else {
                window.location.href = "/#quote"
              }
            }}
          >
            Get a Quote
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className={`md:hidden h-14 w-14 ${scrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-9 w-9" /> : <Menu className="h-9 w-9" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-6 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-md mt-2 rounded-b-lg">
          <nav className="flex flex-col space-y-2">
            <div className="mb-4">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-4 mb-3">Our Services</div>
              <div className="space-y-1">
                <a
                  href="/budget-repairs"
                  className="text-base font-medium px-4 py-3 rounded-md text-gray-700 hover:text-[#0066B1] hover:bg-gray-100 block transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Budget Repairs
                </a>
                <a
                  href="/custom-finishes"
                  className="text-base font-medium px-4 py-3 rounded-md text-gray-700 hover:text-[#0066B1] hover:bg-gray-100 block transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Custom Finishes
                </a>
                <a
                  href="/caliper-painting"
                  className="text-base font-medium px-4 py-3 rounded-md text-gray-700 hover:text-[#0066B1] hover:bg-gray-100 block transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Caliper Painting
                </a>
                <a
                  href="/mobile-service"
                  className="text-base font-medium px-4 py-3 rounded-md text-gray-700 hover:text-[#0066B1] hover:bg-gray-100 block transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mobile Service
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              {[
                { id: "paint-types", label: "Paint Systems" },
                { id: "process", label: "The Process" },
                { id: "gallery", label: "Gallery" },
                { id: "testimonials", label: "Testimonials" },
                { id: "faq", label: "FAQ" },
              ].map((item) => (
                <button
                  key={item.id}
                  className={`text-base font-medium px-4 py-3 rounded-md transition-colors text-left w-full ${
                    activeSection === item.id && isHomePage
                      ? "bg-[#0066B1]/10 text-[#0066B1]"
                      : "text-gray-700 hover:text-[#0066B1] hover:bg-gray-100"
                  }`}
                  onClick={(e) => {
                    scrollToSection(item.id, e)
                    setIsMenuOpen(false)
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-4">
              <Button
                onClick={(e) => {
                  if (isHomePage) {
                    scrollToSection("quote", e)
                  } else {
                    window.location.href = "/#quote"
                  }
                  setIsMenuOpen(false)
                }}
                className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 py-3 text-base font-semibold"
              >
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
