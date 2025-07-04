"use client"

import type React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
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

  const faqs = [
    {
      question: "How long does the rim restoration process take?",
      answer:
        "Our standard turnaround time is 2-3 business days for a set of four wheels. Premium and custom restorations may take 5-7 business days. Rush services are available which can reduce the turnaround time to 1-2 business days depending on our current workload.",
    },
    {
      question: "Can you repair bent or cracked rims?",
      answer:
        "Yes, we can repair most bent and cracked rims as part of our Custom Refinishing package. Our partners use specialized equipment to straighten bent rims and weld cracks. However, the extent of damage will determine if a rim can be safely repaired. We'll assess your rims and provide honest recommendations.",
    },
    {
      question: "What type of paint do you use?",
      answer:
        "We use only premium automotive-grade paint systems including epoxy and 2K primers for superior adhesion and corrosion protection, high performance base coat binders for exceptional color retention, and 2K polyurethane clear coats for outstanding gloss and durability. All our paints feature advanced UV inhibitors specifically rated for harsh Australian summers and are engineered to be weather and chemical resistant, protecting against road salt, brake dust, and cleaning products.",
    },
    {
      question: "Do I need to remove my tyres before bringing in my wheels?",
      answer:
        "No, you don't need to remove your tyres. Our Budget Restoration service can be performed with tyres on. However, for Premium and Custom Refinishing services, we include tyre removal and refitting in the price as it allows us to achieve a more complete and professional finish.",
    },
    {
      question: "What types of finishes can you apply to my rims?",
      answer:
        "We are able to paint any colour you desire with gloss, satin and matte clear coats, and even two-tone finishes. We can also match your original factory finish or create a custom look. Premium metallic and pearl finishes plus specialty coatings like ceramic are available with our Premium and Custom packages. Machined/diamond cut finishes not availble.",
    },
    {
      question: "Will the new finish last as long as the original?",
      answer:
        "Our restoration process includes proper preparation, high-quality primers (excluding budget), automotive-grade paints, and clear coat protection. When properly maintained, our finishes can last as long or longer than many factory finishes. We also offer ceramic coating options for maximum durability and protection.",
    },
    {
      question: "Do you offer a warranty on your work?",
      answer:
        "Yes, we stand behind our work. Our Budget Restoration comes with a 6-month warranty against peeling or flaking. Premium Restoration includes a 12-month warranty, and Custom Refinishing includes an 18-month warranty. Warranties cover manufacturing defects but do not cover damage from road hazards, improper care, or accidents.",
    },
    {
      question: "How should I care for my newly restored rims?",
      answer:
        "To maintain your restored rims, we recommend regular cleaning with pH-neutral wheel cleaners (avoid acidic cleaners), using soft microfiber cloths, and applying a wheel sealant every 3-4 months. Avoid automatic car washes with harsh brushes and be cautious around curbs to prevent damage.",
    },
    {
      question: "Do you offer mobile services or pickup/delivery?",
      answer:
        "Yes, we offer pickup and delivery services throughout the Adelaide metro area for an additional fee. For customers outside the metro area, we can arrange courier services. We currently don't offer mobile restoration services as our professional equipment is located at our workshop.",
    },
    {
      question: "Can you match my factory original finish?",
      answer:
        "Yes, we can match most factory finishes by using the specific paint code. For vehicles with unique or discontinued finishes, we can color match using a computerized paint mixing system to get as close as possible to the original finish.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, PayID, bank transfers, and AfterPay. A 50% deposit is required to begin work, with the remaining balance due upon completion before delivery or pickup. Please EFT payments must clear before rims are picked up or delivered.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our rim restoration services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-[#0066B1] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Don't see your question here?{" "}
            <button onClick={(e) => scrollToSection("quote", e)} className="text-[#0066B1] hover:underline font-medium">
              Contact us
            </button>{" "}
            and we'll be happy to help.
          </p>
        </div>
      </div>
    </section>
  )
}
