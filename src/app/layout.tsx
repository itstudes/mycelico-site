import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

import Footer from "@/components/ui/Footer"
import { NavBar } from "@/components/ui/Navbar"
import { siteConfig } from "./siteConfig"

// Add a serif font for headings
const headingFont = localFont({
  src: [
    {
      path: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-heading",
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
    <html lang="en" className={`${headingFont.variable}`}>
      <body
        className={`${GeistSans.className} ${GeistMono.variable} min-h-screen overflow-x-hidden scroll-auto bg-cream-50 antialiased selection:bg-lavender-100 selection:text-lavender-700`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
