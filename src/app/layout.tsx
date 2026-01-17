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
    "plant pathogen testing South Africa",
    "HLVd testing",
    "Hop Latent Viroid",
    "cannabis pathogen testing",
    "Fusarium wilt testing",
    "Phytophthora root rot",
    "Pythium damping-off",
    "molecular plant diagnostics",
    "crop disease laboratory",
    "agricultural testing Western Cape",
    "plant disease detection",
    "viroid testing South Africa",
    "pathogen laboratory Mossel Bay",
    "cannabis testing South Africa",
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
  // Structured data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mycelico",
    "url": "https://mycelico.co.za",
    "logo": "https://mycelico.co.za/logo-full.png",
    "description": "Professional plant pathogen testing laboratory in South Africa specialising in HLVd, Fusarium, Phytophthora, and Pythium diagnostics",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mossel Bay",
      "addressRegion": "Western Cape",
      "addressCountry": "ZA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@mycelico.co.za",
      "contactType": "Customer Service"
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Plant Pathogen Testing",
    "provider": {
      "@type": "Organization",
      "name": "Mycelico"
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    },
    "description": "Molecular diagnostic testing for plant pathogens including HLVd, Fusarium, Phytophthora, and Pythium"
  }

  return (
    <html lang="en" className={raleway.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
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
