import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael",
      vehicle: "Audi A5",
      comment:
        "I curbed my A5's wheels badly and thought I'd have to replace them. Rim Revivals restored them to an amazing condition. Incredible service!",
      rating: 5,
    },
    {
      name: "Dannie",
      vehicle: "Holden VE GTS",
      comment:
        "The premium restoration package was worth every cent. My wheels had severe corrosion and now they look factory fresh off the gun. Highly recommend!",
      rating: 5,
    },
    {
      name: "David",
      vehicle: "Ford FG XR6 Turbo",
      comment:
        "Fast service, very cheap and amazing results. I previously had another set resprayed by a different place and they charged me nearly double for a finish that needed cut and polishing!!!",
      rating: 5,
    },
    {
      name: "Jessica",
      vehicle: "Holden VF SSV Redline",
      comment:
        "I was skeptical at first, but the before and after results speak for themselves. My wheels look brand new and the service was excellent.",
      rating: 4,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some of my customers have to say about Rim Revivals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-[#0066B1] fill-[#0066B1]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.comment}"</p>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.vehicle}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
