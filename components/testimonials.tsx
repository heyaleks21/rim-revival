import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Phil",
      vehicle: "Ford Transit Custom",
      comment:
        "Alex did an amazing job restoring my very scratched rims and giving my brake callipers a fresh look. Super impressed with the finished product. Thanks again Alex, amazing job.",
      rating: 5,
      date: "1 week ago",
      source: "Google",
    },
    {
      name: "Robert",
      vehicle: "Audi TT",
      comment:
        "Alex went the extra mile on my rims, I can’t say how impressed I am with his work and his level of perfection to do a good job. Also he’s a top bloke who actually cares about his customers, couldn’t recommend him enough!",
      rating: 5,
      date: "2 weeks ago",
      source: "Google",
    },
    {
      name: "John",
      vehicle: "BMW M6",
      comment:
        "Aleks did an amazing job on my M6 BMW wheels and brake callipers. He pretty much transformed my tired car into looking brand new. I also found Aleks punctual, polite, good communication, extremely honest and amazing work. Wheels look better than brand new now! Thankyou Aleks +++AAA",
      rating: 5,
      date: "2 months ago",
      source: "Google",
    },
    {
      name: "Steve",
      vehicle: "Holden VF SSV Redline",
      comment:
        "Had my genuine VF redline wheels done by Alex, and I have to say he did a great job, wheels looked brand new and the price is unbelievable, i recommend this company 100% great job alex",
      rating: 5,
      date: "3 months ago",
      source: "Google",
    },

    {
      name: "Steve",
      vehicle: "Ford FG XR8",
      comment: "Great Service! Alex Smashed out my Dark Argents in record time! He’s the Satin Black Guru!!!",
      rating: 5,
      date: "2 months ago",
      source: "Google",
    },
    {
      name: "Amanjot singh",
      vehicle: "Mercedes C200",
      comment: "Amazing service and price, thanks Aleks!",
      rating: 5,
      date: "1 week ago",
      source: "Google",
    },
    {
      name: "Martin",
      vehicle: "Audi A5",
      comment:
        "Excellent service and very happy with my rims. The paint job on them is second to none. Highly recommend!",
      rating: 5,
      date: "2 months ago",
      source: "Google",
    },

    {
      name: "Bruno",
      vehicle: "Alfa Romeo 156",
      comment: "AAAA++++ highly recommend perfect job and really fast makes my car look amazing",
      rating: 5,
      date: "2 months ago",
      source: "Google",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Reviews</h2>
          <div className="flex items-center justify-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm inline-flex mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-[#FBBC05] fill-[#FBBC05]" />
              ))}
            </div>
            <span className="font-semibold text-gray-900">5.0</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Read what customers have to say about their rim restoration experience with Rim Revivals.
          </p>
          <a
            href="https://www.google.com/maps/place/Rim+Revivals/@-34.8632193,138.6011185,17z/data=!4m18!1m9!3m8!1s0x6ab0c98eda01bfe7:0x3f5ef50fba93f6ee!2sRim+Revivals!8m2!3d-34.8632193!4d138.6011185!9m1!1b1!16s%2Fg%2F11ygyjmcng!3m7!1s0x6ab0c98eda01bfe7:0x3f5ef50fba93f6ee!8m2!3d-34.8632193!4d138.6011185!9m1!1b1!16s%2Fg%2F11ygyjmcng?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-medium px-6 py-3 rounded-full shadow-md transition-all hover:shadow-lg border border-gray-200"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            View All Reviews on Google
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full relative">
                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-full p-1 shadow-sm">
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-[#FBBC05] fill-[#FBBC05]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="italic mb-4 text-gray-700">"{testimonial.comment}"</p>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between items-end">
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.vehicle}</p>
                  </div>
                  <p className="text-xs text-gray-500">{testimonial.date}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
