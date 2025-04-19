"use client"

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-blue-600 backdrop-blur supports-[backdrop-filter]:bg-blue-600/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2 text-white">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 bg-white/20 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold">Stoffeerberen</span>
            </div>
          </Link>
        </div>
        <nav
          className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-background md:bg-transparent p-4 md:p-0 border-b md:border-0 z-50`}
        >
          <Link
            href="/#services"
            className="text-sm font-medium text-white hover:text-blue-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Diensten
          </Link>
          <Link
            href="/#process"
            className="text-sm font-medium text-white hover:text-blue-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Ons Proces
          </Link>
          <Link
            href="/#portfolio"
            className="text-sm font-medium text-white hover:text-blue-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-white hover:text-blue-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/#contact">
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
  );
} 