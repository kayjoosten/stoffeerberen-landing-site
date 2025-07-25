import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stoffeerberen - Premium Vloerinstallatie',
  description: 'Hoogwaardige vloerinstallatie diensten voor thuis en bedrijf',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
      <Header/>
      {children}
        <Toaster 
          position="top-right"
          richColors
          closeButton
          duration={5000}
        />
      </body>
    </html>
  )
}
