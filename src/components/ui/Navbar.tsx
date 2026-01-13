"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "../Button"

const navLinks = [
  { href: "/pathogen-testing", label: "Pathogen Testing" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(15)

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-sage-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
          : "bg-white/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Mycelico Logo</span>
            <Image
              src="/logo-full.png"
              alt="Mycelico"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-8 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="px-2 py-1 text-sage-900 hover:text-sage-700 transition-colors"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
          <Button
            variant="secondary"
            className="hidden h-10 font-semibold sm:block"
            asChild
          >
            <Link href="/contact">Get a quote</Link>
          </Button>
          <Button
            onClick={() => setOpen(!open)}
            variant="secondary"
            className="p-1.5 sm:hidden"
            aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {!open ? (
              <RiMenuFill
                className="size-6 shrink-0 text-sage-900"
                aria-hidden
              />
            ) : (
              <RiCloseFill
                className="size-6 shrink-0 text-sage-900"
                aria-hidden
              />
            )}
          </Button>
        </div>
        <nav
          className={cx(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            {navLinks.map((link) => (
              <li key={link.href} onClick={() => setOpen(false)}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <Button variant="secondary" className="text-lg" asChild>
            <Link href="/contact">Get a quote</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
