import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Naam moet minimaal 2 karakters bevatten")
    .max(50, "Naam mag maximaal 50 karakters bevatten"),
  email: z
    .string()
    .email("Voer een geldig e-mailadres in")
    .max(100, "E-mailadres mag maximaal 100 karakters bevatten"),
  phone: z
    .string()
    .min(10, "Telefoonnummer moet minimaal 10 cijfers bevatten")
    .max(15, "Telefoonnummer mag maximaal 15 cijfers bevatten")
    .regex(/^[+]?[\d\s-()]+$/, "Voer een geldig telefoonnummer in"),
  service: z
    .string()
    .min(1, "Selecteer een dienst"),
  message: z
    .string()
    .min(10, "Bericht moet minimaal 10 karakters bevatten")
    .max(1000, "Bericht mag maximaal 1000 karakters bevatten"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const serviceOptions = [
  { value: "pvc-vloeren", label: "PVC Vloeren" },
  { value: "tapijt-vloeren", label: "Tapijt Vloeren" },
  { value: "vloer-demontage", label: "Professionele demontage van vloeren" },
  { value: "vloer-reparatie", label: "Vloer Reparatie" },
  { value: "vloer-egalisatie", label: "Vloer Egalisatie" },
  { value: "trap-bekleding", label: "Trap Bekleding" },
  { value: "offerte-algemeen", label: "Algemene offerte" },
]