import Link from "next/link";

const services = [
  { title: "PVC Vloeren" },
  { title: "Tapijt Vloeren" },
  { title: "Professionele demontage van vloeren" },
  { title: "Vloer Reparatie" },
  { title: "Vloer Egalisatie" },
  { title: "Trap Bekleding" },
];

export default function Footer() {
  return (
    <>
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 bg-primary-foreground/20 flex items-center justify-center text-primary-foreground font-bold">
                  S
                </div>
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
                    <a href="/#services" className="text-primary-foreground/80 hover:text-primary-foreground">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Bedrijf</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Over Ons
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Ons Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Vacatures
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Pers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Juridisch</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/voorwaarden" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Algemene Voorwaarden
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Privacybeleid
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Cookiebeleid
                  </Link>
                </li>
                <li>
                  <Link href="/garantie" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Garantie-informatie
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t py-6 md:py-0 text-white">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-4 md:h-16">
          <p className="text-sm text-black">
            © {new Date().getFullYear()} Stoffeerberen. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </>
  );
}
