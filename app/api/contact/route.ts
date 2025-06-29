import { NextResponse } from "next/server"

// Set a higher limit for the API route
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb", // Increase the size limit for the API route
    },
  },
}

export async function POST(request: Request) {
  try {
    // Get form data
    const formData = await request.formData()

    // Extract basic form fields
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string
    const service = formData.get("service") as string
    const vehicleDetails = formData.get("vehicleDetails") as string

    // Extract service options
    const serviceOptionsCount = Number.parseInt((formData.get("serviceOptionsCount") as string) || "0")
    const serviceOptions: string[] = []

    for (let i = 0; i < serviceOptionsCount; i++) {
      const option = formData.get(`serviceOption_${i}`) as string
      if (option) {
        serviceOptions.push(option)
      }
    }

    // Process images
    const images: { filename: string; content: string }[] = []

    // Look for images in the form data (max 10)
    for (let i = 0; i < 10; i++) {
      const imageFile = formData.get(`image_${i}`) as File | null

      if (imageFile && imageFile instanceof File && imageFile.size > 0) {
        try {
          // Convert the file to base64
          const buffer = await imageFile.arrayBuffer()
          const base64 = Buffer.from(buffer).toString("base64")

          images.push({
            filename: imageFile.name,
            content: base64,
          })
        } catch (error) {
          console.error(`Error processing image ${i}:`, error)
          // Continue with other images if one fails
        }
      }
    }

    // Create service options HTML
    const serviceOptionsHtml =
      serviceOptions.length > 0
        ? `
        <div style="margin: 10px 0;">
          <p><strong>Selected Service Options:</strong></p>
          <ul style="margin-top: 5px;">
            ${serviceOptions.map((option) => `<li>${option}</li>`).join("")}
          </ul>
        </div>
      `
        : ""

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <h2 style="color: #0066B1; border-bottom: 2px solid #FF0000; padding-bottom: 10px;">New Quote Request from Rim Revivals</h2>
        
        <div style="margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service Requested:</strong> ${service}</p>
          ${serviceOptionsHtml}
          <p><strong>Vehicle Details:</strong> ${vehicleDetails}</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Message:</h3>
          <p style="white-space: pre-line;">${message || "No additional information provided."}</p>
        </div>
        
        ${images.length > 0 ? `<p><strong>Number of Images Attached:</strong> ${images.length}</p>` : ""}
        
        <p style="font-size: 12px; color: #666; margin-top: 30px; text-align: center;">
          This message was sent from the Rim Revivals website contact form.
        </p>
      </div>
    `

    // Log the form submission for debugging
    console.log("Form submission received:", {
      name,
      email,
      phone,
      service,
      serviceOptions,
      vehicleDetails,
      imageCount: images.length,
    })

    // Check if RESEND_API_KEY is available
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not defined in environment variables")
      return NextResponse.json(
        {
          error: "Email service configuration error",
          emailFailed: true,
        },
        { status: 500 },
      )
    }

    // Send a single email with all images attached
    try {
      // Prepare the email payload for Resend
      const emailPayload: any = {
        from: "Rim Revivals <onboarding@resend.dev>",
        to: "oceboosting@gmail.com", // Your recipient email
        subject: `New Quote Request: ${name} - ${service}`,
        html: emailContent,
        reply_to: email, // Set reply-to as the customer's email
      }

      // Add all attachments in a single email
      if (images.length > 0) {
        emailPayload.attachments = images.map((image) => ({
          filename: image.filename,
          content: image.content,
          encoding: "base64",
        }))

        console.log(`Attaching ${images.length} images to the email`)
      }

      // For debugging
      console.log("Sending email with Resend API", {
        to: emailPayload.to,
        subject: emailPayload.subject,
        attachmentCount: emailPayload.attachments ? emailPayload.attachments.length : 0,
        apiKeyLength: process.env.RESEND_API_KEY?.length || 0,
      })

      // Send the email
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      })

      // Get response as text first for debugging
      const responseText = await response.text()
      console.log("Resend API raw response:", responseText)

      // Try to parse as JSON if possible
      let result
      try {
        result = JSON.parse(responseText)
        console.log("Resend API parsed response:", result)
      } catch (e) {
        console.error("Failed to parse Resend API response as JSON:", responseText)
        return NextResponse.json(
          {
            error: "Invalid response from email service",
            emailFailed: true,
          },
          { status: 500 },
        )
      }

      // Check if response is OK
      if (!response.ok) {
        console.error("Resend API error response:", result)
        return NextResponse.json(
          {
            error: result.message || "Failed to send email",
            emailFailed: true,
          },
          { status: response.status },
        )
      }

      // Check if the response contains an ID (indicating success)
      if (result.id) {
        console.log("Email sent successfully with ID:", result.id)
        return NextResponse.json({
          success: true,
          message: "Quote request submitted successfully",
          id: result.id,
        })
      } else {
        // If no ID but response was OK, it might still be an error
        console.error("Resend API did not return an ID:", result)
        return NextResponse.json(
          {
            error: "Email service did not confirm delivery",
            emailFailed: true,
          },
          { status: 500 },
        )
      }
    } catch (error) {
      console.error("Error sending email:", error)
      return NextResponse.json(
        {
          error: error instanceof Error ? error.message : "Failed to send email",
          emailFailed: true,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error processing form:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to process form",
        emailFailed: true,
      },
      { status: 500 },
    )
  }
}
