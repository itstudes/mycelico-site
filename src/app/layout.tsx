import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"

import Footer from "@/components/ui/Footer"
import { NavBar } from "@/components/ui/Navbar"
import { siteConfig } from "./siteConfig"

// Raleway font for modern, organic feel
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mycelico.co.za"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "plant pathogen testing",
    "agriculture",
    "South Africa",
    "crop disease",
    "fungal pathogens",
    "bacterial disease",
    "viral infection",
    "laboratory testing",
    "agricultural diagnostics",
  ],
  authors: [
    {
      name: "Mycelico",
      url: "https://mycelico.co.za",
    },
  ],
  creator: "Mycelico",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body
        className={`${raleway.className} min-h-screen overflow-x-hidden scroll-auto bg-cream-50 antialiased selection:bg-lime-100 selection:text-lime-800`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
