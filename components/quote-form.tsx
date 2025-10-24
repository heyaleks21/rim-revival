"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import {
  Loader2,
  CheckCircle2,
  Car,
  Phone,
  Mail,
  User,
  MessageSquare,
  ImageIcon,
  X,
  Upload,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react"

// Maximum number of images allowed
const MAX_IMAGES = 10
// Maximum size per image in bytes (2MB)
const MAX_IMAGE_SIZE = 2 * 1024 * 1024
// Maximum total size of all images in bytes (8MB)
const MAX_TOTAL_SIZE = 8 * 1024 * 1024

// Service options with sub-options
const serviceOptions = {
  "Budget Restoration": [
     "Minor scratch and rash repair",
        "Paint code matching (for solid gloss colors)",
        "Durable gloss clear coat application",
        "Vehicle drop-off and collection",
        "Brake caliper painting",
  ],
  "Premium Restoration": [
   "Premium metallic paint options",
    "Custom clear coats (satin or matte finishes)",
        "Restoration for heavy chipping, fading, and oxidization",
        "Deep scratch and extensive curb rash repair",
        "Inside barrels painted for a complete look",
        "Vehicle drop-off and collection",
        "Brake caliper painting",
  ],
  "Custom Refinishing": [
    "Tire removal, fitting, and rebalance",
    "Specialty finishes (e.g., shadow chrome, pearl, two-tone)",
    "Polished metal finishes",
    "Vehicle drop-off and collection",
    "Brake caliper painting",
  ],
   "Brake Calipers Only": [
    "Vehicle drop-off and collection",
    "Brake caliper painting",
  ],
}

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [images, setImages] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [totalImageSize, setTotalImageSize] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [expandedService, setExpandedService] = useState<string | null>("Budget Restoration")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Budget Restoration",
    serviceOptions: [] as string[],
    vehicleDetails: "",
    message: "",
  })

  // Effect to check for URL parameters on component mount
  useEffect(() => {
    // Listen for custom events from the Services component
    const handleServiceSelected = (event: Event) => {
      const customEvent = event as CustomEvent
      const selectedService = customEvent.detail

      if (selectedService && Object.keys(serviceOptions).includes(selectedService)) {
        handleServiceChange(selectedService)
        // Ensure the selected service is expanded
        setExpandedService(selectedService)
      }
    }

    window.addEventListener("serviceSelected", handleServiceSelected)

    // Clean up event listener
    return () => {
      window.removeEventListener("serviceSelected", handleServiceSelected)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      service: service,
      // Reset service options when changing main service
      serviceOptions: [],
    }))
    // Automatically expand the selected service
    setExpandedService(service)
  }

  const toggleServiceExpand = (service: string) => {
    setExpandedService(expandedService === service ? null : service)
  }

  const handleServiceOptionChange = (option: string) => {
    setFormData((prev) => {
      const currentOptions = [...prev.serviceOptions]

      if (currentOptions.includes(option)) {
        // Remove option if already selected
        return {
          ...prev,
          serviceOptions: currentOptions.filter((item) => item !== option),
        }
      } else {
        // Add option if not already selected
        return {
          ...prev,
          serviceOptions: [...currentOptions, option],
        }
      }
    })
  }

  // Function to compress an image
  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        const img = new Image()
        img.src = event.target?.result as string
        img.onload = () => {
          const canvas = document.createElement("canvas")

          // Calculate new dimensions while maintaining aspect ratio
          let width = img.width
          let height = img.height

          // Maximum dimensions for the compressed image
          const MAX_WIDTH = 1200
          const MAX_HEIGHT = 1200

          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round(height * (MAX_WIDTH / width))
              width = MAX_WIDTH
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round(width * (MAX_HEIGHT / height))
              height = MAX_HEIGHT
            }
          }

          canvas.width = width
          canvas.height = height

          const ctx = canvas.getContext("2d")
          ctx?.drawImage(img, 0, 0, width, height)

          // Adjust quality based on original file size
          let quality = 0.7 // Default quality
          if (file.size > MAX_IMAGE_SIZE) {
            quality = 0.5 // Lower quality for larger files
          }

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("Canvas to Blob conversion failed"))
                return
              }

              // Create a new file from the blob
              const compressedFile = new File([blob], file.name, {
                type: "image/jpeg",
                lastModified: Date.now(),
              })

              resolve(compressedFile)
            },
            "image/jpeg",
            quality,
          )
        }
        img.onerror = () => {
          reject(new Error("Error loading image"))
        }
      }
      reader.onerror = () => {
        reject(new Error("Error reading file"))
      }
    })
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newImages: File[] = []
    const newPreviews: string[] = []
    let newTotalSize = totalImageSize

    // Process only up to MAX_IMAGES total
    const filesToProcess = Math.min(files.length, MAX_IMAGES - images.length)

    if (images.length + files.length > MAX_IMAGES) {
      toast({
        title: `Maximum ${MAX_IMAGES} images allowed`,
        description: `You can upload up to ${MAX_IMAGES} images.`,
        variant: "destructive",
      })
    }

    // Process each file
    for (let i = 0; i < filesToProcess; i++) {
      const file = files[i]

      // Check file type
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please upload only image files (JPG, PNG, etc.)",
          variant: "destructive",
        })
        continue
      }

      // Check individual file size and compress if needed
      // (compression happens automatically in the next step)

      try {
        // Compress the image
        const compressedFile = await compressImage(file)

        // Check if adding this file would exceed the total size limit
        if (newTotalSize + compressedFile.size > MAX_TOTAL_SIZE) {
          toast({
            title: "Total image size limit reached",
            description: "The total size of all images cannot exceed 8MB.",
            variant: "destructive",
          })
          break
        }

        newImages.push(compressedFile)
        newPreviews.push(URL.createObjectURL(compressedFile))
        newTotalSize += compressedFile.size
      } catch (error) {
        console.error("Error compressing image:", error)
        toast({
          title: "Error processing image",
          description: "There was a problem processing your image. Please try another one.",
          variant: "destructive",
        })
      }
    }

    setImages((prev) => [...prev, ...newImages])
    setPreviews((prev) => [...prev, ...newPreviews])
    setTotalImageSize(newTotalSize)

    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const removeImage = (index: number) => {
    // Revoke the object URL to prevent memory leaks
    URL.revokeObjectURL(previews[index])

    // Update total size
    setTotalImageSize((prev) => prev - images[index].size)

    setImages((prev) => prev.filter((_, i) => i !== index))
    setPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsError(false)

    try {
      const formDataToSend = new FormData()

      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "serviceOptions" && Array.isArray(value)) {
          // Add each service option as a separate entry
          value.forEach((option, index) => {
            formDataToSend.append(`serviceOption_${index}`, option)
          })
          // Also add the count
          formDataToSend.append("serviceOptionsCount", value.length.toString())
        } else {
          formDataToSend.append(key, value as string)
        }
      })

      // Add images
      images.forEach((image, index) => {
        formDataToSend.append(`image_${index}`, image)
      })

      // Send the form data
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          body: formDataToSend,
        })

        // Get response as text first
        const responseText = await response.text()

        // Try to parse as JSON
        let result
        try {
          result = JSON.parse(responseText)
        } catch (e) {
          console.error("Failed to parse response as JSON:", responseText)
          throw new Error("Invalid response from server")
        }

        if (!response.ok || result.emailFailed) {
          // If email failed, show error with contact info
          setIsError(true)
          throw new Error(result.error || "Failed to send email")
        }

        // Show success message
        toast({
          title: "Quote Request Received",
          description: "Your request has been submitted successfully. We'll contact you soon.",
        })

        setIsSuccess(true)
      } catch (error) {
        console.error("Error submitting form:", error)

        // If it's an email failure, we'll show the error state
        if (error instanceof Error && error.message.includes("email")) {
          setIsError(true)
        }

        throw error
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "There was a problem submitting your request. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Budget Restoration",
      serviceOptions: [],
      vehicleDetails: "",
      message: "",
    })

    // Clean up image previews
    previews.forEach((preview) => URL.revokeObjectURL(preview))
    setImages([])
    setPreviews([])
    setTotalImageSize(0)
    setExpandedService(null)

    setIsSuccess(false)
    setIsError(false)
  }

  if (isError) {
    return (
      <section id="quote" className="py-20 bg-gray-100">
        <div className="container">
          <Card className="max-w-2xl mx-auto shadow-lg border-t-4 border-t-red-500">
            <CardContent className="pt-6">
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Unable to Send Your Request</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We're experiencing technical difficulties with our email system. Please contact us directly:
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6 max-w-md mx-auto">
                  <div className="flex items-center mb-3">
                    <Phone className="h-5 w-5 text-[#0066B1] mr-2" />
                    <a href="tel:0498256447" className="font-medium hover:underline">
                      0498 256 447
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#0066B1] mr-2" />
                    <a href="mailto:oceboosting@gmail.com" className="font-medium hover:underline">
                      oceboosting@gmail.com
                    </a>
                  </div>
                </div>

                <Button onClick={resetForm} className="bg-[#0066B1] hover:bg-[#0066B1]/90">
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  if (isSuccess) {
    return (
      <section id="quote" className="py-20 bg-gray-100">
        <div className="container">
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Request Sent Successfully!</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Thank you for your interest in our rim restoration services. We'll review your request and get back to
                  you as soon as possible.
                </p>
                <Button onClick={resetForm} className="bg-[#0066B1] hover:bg-[#0066B1]/90">
                  Submit Another Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="quote" className="py-20 bg-gray-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Quote</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and I'll get back to you with a personalized quote for your rim restoration needs.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <Label htmlFor="name" className="text-base font-medium">
                    Your Name
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 focus-visible:ring-[#0066B1]"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Label htmlFor="email" className="text-base font-medium">
                      Email Address
                    </Label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 focus-visible:ring-[#0066B1]"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Label htmlFor="phone" className="text-base font-medium">
                      Phone Number
                    </Label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 focus-visible:ring-[#0066B1]"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Label htmlFor="vehicleDetails" className="text-base font-medium">
                    Vehicle & Rim Details
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Car className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="vehicleDetails"
                      name="vehicleDetails"
                      value={formData.vehicleDetails}
                      onChange={handleChange}
                      className="pl-10 focus-visible:ring-[#0066B1]"
                      placeholder="e.g., 2019 BMW 3 Series, 18-inch rims"
                      required
                    />
                  </div>
                </div>

                {/* Redesigned Service Type Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Service Type</Label>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.keys(serviceOptions).map((service) => (
                      <div key={service} className="border rounded-md overflow-hidden">
                        {/* Service Header - Now a single clickable element */}
                        <div
                          className={`p-4 cursor-pointer transition-colors ${
                            formData.service === service
                              ? "bg-[#0066B1]/10 border-b border-[#0066B1]/20"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={() => {
                            handleServiceChange(service)
                            // If this service is already selected, toggle expansion
                            if (formData.service === service) {
                              toggleServiceExpand(service)
                            }
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                                  formData.service === service ? "border-[#0066B1] bg-[#0066B1]" : "border-gray-300"
                                }`}
                              >
                                {formData.service === service && <Check className="h-3 w-3 text-white" />}
                              </div>
                              <span className="font-medium">{service}</span>
                            </div>

                            {/* Only show the chevron if this service is selected */}
                            {formData.service === service &&
                              (expandedService === service ? (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                              ))}
                          </div>
                        </div>

                        {/* Service Options - Only shown when this service is selected and expanded */}
                        {formData.service === service && expandedService === service && (
                          <div className="px-4 py-3 bg-gray-50">
                            <p className="text-sm text-gray-600 mb-2">Select the services you're interested in:</p>
                            <div className="space-y-2 pl-8">
                              {serviceOptions[service as keyof typeof serviceOptions].map((option) => (
                                <div key={option} className="flex items-center">
                                  <input
                                    type="checkbox"
                                    id={option}
                                    checked={formData.serviceOptions.includes(option)}
                                    onChange={() => handleServiceOptionChange(option)}
                                    className="h-4 w-4 rounded border-gray-300 text-[#0066B1] focus:ring-[#0066B1]"
                                  />
                                  <label htmlFor={option} className="ml-2 text-sm text-gray-700 cursor-pointer">
                                    {option}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Label htmlFor="message" className="text-base font-medium">
                    Additional Details
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="pl-10 min-h-[120px] focus-visible:ring-[#0066B1]"
                      placeholder="Describe your rim condition, damage, or any specific requirements"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Please include details about damage, color preferences, or any questions you have.
                  </p>
                </div>

                {/* Image Upload Section */}
                <div className="space-y-3">
                  <Label className="text-base font-medium flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-gray-600" />
                    Rim Photos (Optional)
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Upload up to {MAX_IMAGES} photos of your rims to help me provide an accurate quote.
                  </p>

                  {/* Image Previews */}
                  {previews.length > 0 && (
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-3">
                      {previews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-square rounded-md overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
                            <img
                              src={preview || "/placeholder.svg"}
                              alt={`Rim preview ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow-sm opacity-90 hover:opacity-100 transition-opacity"
                            aria-label="Remove image"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}

                      {/* Add More Button (if less than MAX_IMAGES images) */}
                      {images.length < MAX_IMAGES && (
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="aspect-square rounded-md border border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
                        >
                          <Upload className="h-4 w-4 mb-1" />
                          <span className="text-xs">Add</span>
                        </button>
                      )}
                    </div>
                  )}

                  {/* Upload Button (if no images yet) */}
                  {previews.length === 0 && (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-gray-400 transition-colors"
                    >
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Click to upload photos of your rims (max {MAX_IMAGES})</p>
                      <p className="text-xs text-gray-400 mt-1">JPG, PNG, GIF files accepted</p>
                    </div>
                  )}

                  {/* Hidden File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                    aria-label="Upload rim photos"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white py-6 text-lg font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    "Get My Free Quote"
                  )}
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  We'll respond to your request within 24 hours.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
