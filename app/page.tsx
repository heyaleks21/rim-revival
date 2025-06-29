import Hero from "@/components/hero"
import Services from "@/components/services"
import PaintTypes from "@/components/paint-types"
import Process from "@/components/process"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import QuoteForm from "@/components/quote-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <PaintTypes />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />
      <QuoteForm />
      <Footer />
    </main>
  )
}
