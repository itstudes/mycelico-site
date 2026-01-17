"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { RiArrowDownSLine, RiCloseFill, RiMenuFill } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "../Button"

interface NavLink {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

const navLinks: NavLink[] = [
  {
    href: "/pathogen-testing",
    label: "Pathogen Testing",
    children: [
      { href: "/pathogen-testing", label: "Overview" },
      {
        href: "/pathogen-testing/sample-collection-guidelines",
        label: "Sample Collection Guidelines",
      },
    ],
  },
  {
    href: "/case-studies",
    label: "Case Studies",
    children: [
      { href: "/case-studies", label: "All Case Studies" },
      {
        href: "/case-studies/marijuana-montague-2025",
        label: "Marijuana in Montague [2025]",
      },
    ],
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const scrolled = useScroll(15)

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-sage-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
          : "border-sage-200/30 bg-white/90 backdrop-blur-sm",
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
            <div className="flex items-center gap-6 font-medium">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 px-2 py-1 text-sage-900 hover:text-sage-700 transition-colors"
                    >
                      {link.label}
                      <RiArrowDownSLine
                        className={cx(
                          "size-4 transition-transform duration-200",
                          openDropdown === link.href ? "rotate-180" : "",
                        )}
                      />
                    </button>
                    <div
                      className={cx(
                        "absolute left-0 top-full pt-2 transition-all duration-200",
                        openDropdown === link.href
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2",
                      )}
                    >
                      <div className="min-w-[220px] rounded-lg border border-sage-200 bg-white py-2 shadow-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-sage-900 hover:bg-sage-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    className="px-2 py-1 text-sage-900 hover:text-sage-700 transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ),
              )}
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
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.href}>
                  <div className="mb-2">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-semibold text-sage-900"
                    >
                      {link.label}
                    </Link>
                  </div>
                  <ul className="ml-4 space-y-2 border-l border-sage-200 pl-4">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-sage-700 hover:text-sage-900"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.href} onClick={() => setOpen(false)}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ),
            )}
          </ul>
          <Button variant="secondary" className="text-lg" asChild>
            <Link href="/contact">Get a quote</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
