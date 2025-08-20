"use client"

import type React from "react"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
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

  // Scroll to top function
  const scrollToTop = (event: React.MouseEvent) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-8">
        {/* Top section with logo and contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <img
              src="https://rcuitxlzolonzxfyfjlo.supabase.co/storage/v1/object/public/beforeafter//rim-revivals-logo-whitef.svg"
              alt="Rim Revivals Logo"
              className="w-65 h-16 py-2 pr-2"
            />
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <a
              href="tel:0498256447"
              className="flex items-center text-gray-300 hover:text-white text-sm transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              0498 256 447
            </a>
            <a
              href="mailto:oceboosting@gmail.com"
              className="flex items-center text-gray-300 hover:text-white text-sm transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              oceboosting@gmail.com
            </a>
            <span className="flex items-center text-gray-300 text-sm">
              <MapPin className="h-4 w-4 mr-2" />
              Blair Athol, SA 5084
            </span>
          </div>
        </div>

        <Separator className="bg-gray-800 my-4" />

        {/* Navigation links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-4">
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={scrollToTop} className="text-sm text-gray-300 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToSection("services", e)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToSection("paint-types", e)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Paint Systems
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToSection("process", e)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  The Process
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-3">More</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={(e) => scrollToSection("gallery", e)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToSection("testimonials", e)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToSection("faq", e)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToSection("quote", e)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-3">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={(e) => scrollToSection("services", e)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Budget Restoration
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToSection("services", e)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Premium Restoration
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToSection("services", e)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Custom Refinishing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-3">Connect</h4>
            <div className="flex space-x-3 mb-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-gray-400">Professional wheel and rim restoration services in Adelaide.</p>
          </div>
        </div>

        <Separator className="bg-gray-800 my-4" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rim Revivals. All rights reserved.</p>
          <div className="mt-2 md:mt-0">
            <span className="inline-block">Adelaide, South Australia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
