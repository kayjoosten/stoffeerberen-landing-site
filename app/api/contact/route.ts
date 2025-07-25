import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { contactFormSchema } from "@/lib/validations/contact"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

export const POST = async (request: NextRequest) => {
  // Check if Resend API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured')
    return NextResponse.json(
      { error: 'Email service niet geconfigureerd. Neem contact op via telefoon.' },
      { status: 500 }
    )
  }
  try {
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      console.error('JSON parse error:', parseError)
      return NextResponse.json(
        { error: 'Ongeldige JSON data ontvangen' },
        { status: 400 }
      )
    }
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body)
    
    const { name, email, phone, service, message } = validatedData
    
    // Email template for the business owner
    const ownerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">Nieuwe Contact Aanvraag - Stoffeerberen</h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #2563eb; margin-top: 0;">Contact Details</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Naam:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${name}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">E-mail:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${email}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Telefoon:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${phone}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Gevraagde Dienst:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${service}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Bericht:</strong>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 5px;">
              <p style="margin: 0; color: #374151; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Deze aanvraag is verzonden via het contactformulier op stoffeerberen.nl
            </p>
          </div>
        </div>
      </div>
    `

    // Confirmation email for the customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">Bedankt voor uw aanvraag!</h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <p style="color: #374151; line-height: 1.6; margin-top: 0;">Beste ${name},</p>
          
          <p style="color: #374151; line-height: 1.6;">
            Hartelijk dank voor uw interesse in Stoffeerberen! Wij hebben uw aanvraag ontvangen en zullen binnen 24 uur contact met u opnemen.
          </p>
          
          <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0;">
            <h3 style="color: #2563eb; margin: 0 0 10px 0;">Uw aanvraag details:</h3>
            <p style="margin: 5px 0; color: #374151;"><strong>Dienst:</strong> ${service}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>Telefoon:</strong> ${phone}</p>
          </div>
          
          <p style="color: #374151; line-height: 1.6;">
            Onze ervaren specialisten staan klaar om u te helpen met uw vloerproject. U kunt ons altijd direct bereiken op:
          </p>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 5px 0; color: #374151;"><strong>📧 E-mail:</strong> ${process.env.CONTACT_EMAIL || 'contact@stoffeerberen.nl'}</p>
            <p style="margin: 5px 0; color: #374151;"><strong>📱 Telefoon:</strong> [Uw telefoonnummer]</p>
          </div>
          
          <p style="color: #374151; line-height: 1.6;">
            Met vriendelijke groet,<br>
            <strong>Het Stoffeerberen Team</strong>
          </p>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Stoffeerberen - Vakkundige vloerinstallatie sinds 2019
            </p>
          </div>
        </div>
      </div>
    `

    // Send email to business owner
    const ownerEmailResult = await resend.emails.send({
      from: 'Stoffeerberen Website <noreply@stoffeerberen.nl>',
      to: [process.env.CONTACT_EMAIL || 'contact@stoffeerberen.nl'],
      subject: `Nieuwe Contact Aanvraag: ${service} - ${name}`,
      html: ownerEmailHtml,
      replyTo: email,
    })

    // Send confirmation email to customer
    const customerEmailResult = await resend.emails.send({
      from: 'Stoffeerberen <noreply@stoffeerberen.nl>',
      to: [email],
      subject: 'Bedankt voor uw aanvraag - Stoffeerberen',
      html: customerEmailHtml,
    })

    if (ownerEmailResult.error || customerEmailResult.error) {
      console.error('Email sending error:', {
        ownerError: ownerEmailResult.error,
        customerError: customerEmailResult.error,
      })
      
      return NextResponse.json(
        { error: 'Er is een fout opgetreden bij het verzenden van de e-mail. Probeer het later opnieuw.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Uw bericht is succesvol verzonden! Wij nemen binnen 24 uur contact met u op.',
        success: true 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Controleer uw gegevens en probeer het opnieuw.',
          details: error.errors 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Er is een onverwachte fout opgetreden. Probeer het later opnieuw.' },
      { status: 500 }
    )
  }
}