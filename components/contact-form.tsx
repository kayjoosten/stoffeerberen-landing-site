"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Loader2, Mail, Phone, Send, User } from "lucide-react"
import { contactFormSchema, type ContactFormData, serviceOptions } from "@/lib/validations/contact"

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  const selectedService = watch("service")

  const handleServiceChange = (value: string) => {
    setValue("service", value, { shouldValidate: true })
  }

  const handleFormSubmit = async (data: ContactFormData) => {
    if (isSubmitting) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      let result
      try {
        result = await response.json()
      } catch (parseError) {
        console.error("JSON parse error:", parseError)
        throw new Error("Er is een probleem met de server response")
      }

      if (!response.ok) {
        const errorMessage = result?.error || `Server error: ${response.status} ${response.statusText}`
        throw new Error(errorMessage)
      }

      if (!result?.success) {
        throw new Error(result?.error || "Onbekende fout opgetreden")
      }

      toast.success("Bericht verzonden!", {
        description: result.message || "Uw bericht is succesvol verzonden!",
        duration: 5000,
      })

      reset()
    } catch (error) {
      console.error("Form submission error:", error)
      
      let errorMessage = "Er is een onverwachte fout opgetreden. Probeer het later opnieuw."
      
      if (error instanceof Error) {
        errorMessage = error.message
      } else if (typeof error === "string") {
        errorMessage = error
      }

      toast.error("Fout bij verzenden", {
        description: errorMessage,
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-card rounded-lg shadow-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-card-foreground mb-2">
          Vraag een vrijblijvende offerte aan
        </h3>
        <p className="text-muted-foreground">
          Vul het formulier in en wij nemen binnen 24 uur contact met u op voor een persoonlijk adviesgesprek.
        </p>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              <User className="w-4 h-4 inline mr-2" />
              Volledige naam *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Uw voor- en achternaam"
              {...register("name")}
              className={`transition-colors ${
                errors.name 
                  ? "border-destructive focus:border-destructive focus:ring-destructive" 
                  : "border-input focus:border-primary focus:ring-primary"
              }`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              <Mail className="w-4 h-4 inline mr-2" />
              E-mailadres *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="uw.email@voorbeeld.nl"
              {...register("email")}
              className={`transition-colors ${
                errors.email 
                  ? "border-destructive focus:border-destructive focus:ring-destructive" 
                  : "border-input focus:border-primary focus:ring-primary"
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">
              <Phone className="w-4 h-4 inline mr-2" />
              Telefoonnummer *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="06-12345678"
              {...register("phone")}
              className={`transition-colors ${
                errors.phone 
                  ? "border-destructive focus:border-destructive focus:ring-destructive" 
                  : "border-input focus:border-primary focus:ring-primary"
              }`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-sm text-destructive" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Service Field */}
          <div className="space-y-2">
            <Label htmlFor="service" className="text-sm font-medium text-foreground">
              Gewenste dienst *
            </Label>
            <Select
              value={selectedService}
              onValueChange={handleServiceChange}
            >
              <SelectTrigger 
                className={`transition-colors ${
                  errors.service 
                    ? "border-destructive focus:border-destructive focus:ring-destructive" 
                    : "border-input focus:border-primary focus:ring-primary"
                }`}
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <SelectValue placeholder="Selecteer een dienst" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && (
              <p id="service-error" className="text-sm text-destructive" role="alert">
                {errors.service.message}
              </p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium text-foreground">
            Uw bericht *
          </Label>
          <Textarea
            id="message"
            placeholder="Beschrijf uw project, wensen, vragen en eventuele specifieke details zoals afmetingen, materiaalvoorkeur, planning, etc."
            rows={5}
            {...register("message")}
            className={`transition-colors resize-none ${
              errors.message 
                ? "border-destructive focus:border-destructive focus:ring-destructive" 
                : "border-input focus:border-primary focus:ring-primary"
            }`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-destructive" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Wordt verzonden...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Verstuur aanvraag
              </>
            )}
          </Button>
        </div>

        {/* Privacy Notice */}
        <div className="text-xs text-muted-foreground leading-relaxed">
          <p>
            Door dit formulier te versturen, gaat u akkoord met het verwerken van uw gegevens voor het 
            beantwoorden van uw aanvraag. Uw gegevens worden niet gedeeld met derden en worden 
            verwijderd na afhandeling van uw aanvraag. Meer informatie vindt u in onze{" "}
            <a 
              href="/privacy" 
              className="text-primary hover:text-primary/80 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacyverklaring
            </a>.
          </p>
        </div>
      </form>
    </div>
  )
}

export default ContactForm