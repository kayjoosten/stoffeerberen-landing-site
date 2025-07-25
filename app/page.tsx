"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import { Logo } from "@/components/logo"
import {
  CheckCircle,
  ChevronRight,
  Clock,
  MessageSquare,
  Phone,
  Shield,
  PenToolIcon as Tool,
} from "lucide-react"

export default function Home() {
  // Voeg state toe voor mobiel menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
        {
          title: "PVC Vloeren",
          description: "Professionele PVC vloeren installatie voor alle ruimtes in huis, in allerlei patronen. Onderandere visgraat en hongaars punt",
          color: "bg-red-50",
        },
        {
          title: "Tapijt Vloeren",
          description: "We brengen alle soorten tapijt aan van laagpolig tot hoogpolig tapijt, voor alle ruimtes in huis of op kantoor ",
          color: "bg-stone-100",
        },
        {
          title: "Professionele demontage van vloeren",
          description: "Wij demonteren de vloer en brengen deze naar een recyclingcentrum",
          color: "bg-slate-100",
        },
        {
          title: "Vloer Reparatie",
          description:
            "Professionele reparatiediensten voor beschadigde vloeren, van kleine reparaties tot grote restauraties.",
          color: "bg-orange-100",
        },
        {
          title: "Vloer Egalisatie",
          description: "Deskundige vloer egalisatie om een perfecte basis en ondergrond voor uw nieuwe vloer te garanderen.",
          color: "bg-gray-100",
        },
        {
          title: "Trap Bekleding",
          description: "Geluidsdempend en duurzaam materiaal, van onder andere PVC en tapijt",
          color: "bg-stone-100",
        },
      ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-blue-600 backdrop-blur supports-[backdrop-filter]:bg-blue-600/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-3 text-white">
            <Logo size={70} priority />
            <span className="text-xl font-bold">Stoffeerberen</span>
          </div>
          <nav
            className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-background md:bg-transparent p-4 md:p-0 border-b md:border-0 z-50`}
          >
            <Link
              href="#services"
              className="text-sm font-medium text-white hover:text-blue-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Diensten
            </Link>
            <Link
              href="#process"
              className="text-sm font-medium text-white hover:text-blue-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ons Proces
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium text-white hover:text-blue-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-white hover:text-blue-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Offerte Aanvragen</Button>
            </Link>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menu openen</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-slate-100 from-background to-background/60 z-10" />
            <div className="h-full w-full bg-muted/50"></div>
          </div>
          <div className="container relative z-20 py-24 md:py-32 lg:py-40">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Premium Vloerinstallatie
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Transformeer Uw Ruimte Met Vakkundige Vloeren
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Stoffeerberen brengt vakmanschap en precisie in elke vloer die we installeren. Van bekleden van trappen tot
                  to het aanbrengen van een mooie pvc vloer, wij creëren de basis voor mooi wonen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                    Gratis Adviesgesprek <ChevronRight className="h-4 w-4"/>
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative rounded-lg overflow-hidden border shadow-lg h-[400px] bg-muted flex items-center justify-center">
                  <Image
                      src="/visgraatvloer.jpg"
                      alt="Visgraat PVC vloer"
                      fill
                      style={{objectFit: "cover"}}
                      priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container relative z-20 pb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: CheckCircle, label: "5+ Jaar Ervaring" },
                { icon: Shield, label: "10 Jaar Garantie" },
                { icon: Clock, label: "Op Tijd Opgeleverd" },
                { icon: Tool, label: "Premium Materialen" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-background/80 backdrop-blur shadow-sm"
                >
                  <item.icon className="h-8 w-8 text-primary mb-2" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Onze Diensten
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Vakkundige Vloeroplossingen
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Wij bieden uitgebreide vloerdiensten op maat van uw specifieke wensen en voorkeuren.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className={`aspect-video overflow-hidden ${service.color} flex items-center justify-center`}>
                    <span className="text-lg font-medium">{service.title}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Ons Proces
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Hoe Wij Uw Vloeren Transformeren
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Ons gestroomlijnde proces zorgt voor een soepele ervaring van advies tot oplevering.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border md:block hidden"></div>
              <div className="space-y-8 relative">
                {[
                  {
                    step: "01",
                    title: "Eerste Adviesgesprek",
                    description: "We bespreken uw wensen, voorkeuren en budget om uw visie te begrijpen.",
                  },
                  {
                    step: "02",
                    title: "Opmeting Ter Plaatse",
                    description:
                      "Ons team bezoeken uw ruimte om nauwkeurige metingen te nemen en de omstandigheden te beoordelen.",
                  },
                  {
                    step: "03",
                    title: "Materiaalkeuze",
                    description: "Kies uit ons brede assortiment hoogwaardige vloermaterialen en afwerkingen.",
                  },
                  {
                    step: "04",
                    title: "Vrijblijvende Offerte",
                    description: "Ontvang een offerte met duidelijkheid over de totaal prijs van het project.",
                  },
                  {
                    step: "05",
                    title: "Professionele Installatie",
                    description: "Onze vakbekbestemig team komt de vloer installeren met plezier en ambacht.",
                  },
                  {
                    step: "06",
                    title: "Oplevering",
                    description:
                      "Wij prensenteren de nieuwe vloer en geven u een garantie van 10 jaar.",
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className={`flex flex-col md:flex-row gap-4 md:gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className={`md:w-1/2 flex justify-center  ${parseInt(step.step) % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} items-center`}>
                      <div className="relative">
                        <div className="absolute -inset-4 rounded-full bg-primary/10 blur-xl"></div>
                        <div className={`relative h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold`}>
                          {step.step}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 bg-muted/30 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*<section id="portfolio" className="py-16 md:py-24 bg-muted/50">*/}
        {/*  <div className="container">*/}
        {/*    <div className="flex flex-col items-center text-center mb-12">*/}
        {/*      <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">*/}
        {/*        Ons Portfolio*/}
        {/*      </div>*/}
        {/*      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">*/}
        {/*        Prachtige Vloertransformaties*/}
        {/*      </h2>*/}
        {/*      <p className="max-w-[700px] text-muted-foreground md:text-xl">*/}
        {/*        Bekijk onze galerij van voltooide projecten om de kwaliteit van ons werk te zien.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">*/}
        {/*      {[1, 2, 3, 4, 5, 6].map((i) => (*/}
        {/*        <div key={i} className="group relative overflow-hidden rounded-lg h-[250px] bg-muted/80">*/}
        {/*          <div className="h-full w-full flex items-center justify-center">*/}
        {/*            <span className="text-muted-foreground">Portfolio project {i}</span>*/}
        {/*          </div>*/}
        {/*          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">*/}
        {/*            <div className="text-white">*/}
        {/*              <h3 className="font-bold text-lg">Project {i}</h3>*/}
        {/*              <p className="text-sm text-white/80">Hardhouten vloer in een modern appartement</p>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section id="contact" className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Klaar Om Uw Vloeren Te Transformeren?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mb-8">
                  Neem contact op met ons team voor een gratis adviesgesprek en offerte. Wij helpen u graag bij het
                  creëren van het perfecte beeld voor uw ruimte.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Bel ons direct</div>
                      <div className="font-semibold text-lg">+31 6 2247 5904</div>
                      <div className="text-sm text-muted-foreground">Ma-Vr: 8:00-18:00</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">E-mail ons</div>
                      <div className="font-semibold text-lg">info@stoffeerberen.nl</div>
                      <div className="text-sm text-muted-foreground">Reactie binnen 24 uur</div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-900 mb-2">Gratis Adviesgesprek</h3>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      Wij komen graag bij u langs voor een gratis adviesgesprek en opmeting. 
                      Geen verplichtingen, wel deskundig advies op maat.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-blue-600 text-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Logo size={60} className=" flex items-center brightness-0 invert" />
                  <span className="text-xl font-bold">Stoffeerberen</span>
                </div>
                <p className="text-primary-foreground/80">
                  Premium vloeroplossingen voor woon- en bedrijfsruimtes. Kwaliteitsvakmanschap sinds 2019.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Diensten</h3>
                <ul className="space-y-2">
                  {services.map((service, i) => (
                    <li key={i}>
                      <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground">
                        {service.title}
                      </a>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Juridisch</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground">
                      Privacybeleid
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 text-white">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-4 md:h-16">
          <p className="text-sm text-black">
            © {new Date().getFullYear()} Stoffeerberen. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </div>
  )
}
