"use client"

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {Logo} from "@/components/logo";
import {redirect} from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <header className="sticky top-0 z-40 border-b bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-3 text-primary-foreground">
            <Logo size={70} priority className="flex"/>
            <span onClick={() =>{redirect('/')}} className="text-xl font-bold">Stoffeerberen</span>
          </div>
          <nav
              className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-background md:bg-transparent p-4 md:p-0 border-b md:border-0 z-50`}
          >
            <Link
                href="#services"
                className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
                onClick={() => setMobileMenuOpen(false)}
            >
              Diensten
            </Link>
            <Link
                href="#process"
                className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
                onClick={() => setMobileMenuOpen(false)}
            >
              Ons Proces
            </Link>
            <Link
                href="#portfolio"
                className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
                onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
                href="#contact"
                className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
                onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Offerte Aanvragen</Button>
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
  );
}
