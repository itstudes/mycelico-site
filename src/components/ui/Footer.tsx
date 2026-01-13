import { RiLinkedinFill, RiMailFill, RiTwitterXFill } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => {
  const sections = {
    services: {
      title: "Services",
      items: [
        { label: "Pathogen Testing", href: "/pathogen-testing" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    company: {
      title: "Company",
      items: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
  }

  return (
    <div className="px-4 xl:px-0 bg-white">
      <footer
        id="footer"
        className="relative mx-auto flex max-w-6xl flex-wrap pt-16 pb-8 border-t border-sage-200"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center font-medium text-sage-700 select-none mb-4"
            >
              <Image
                src="/logo-full.png"
                alt="Mycelico"
                width={120}
                height={35}
                className="h-8 w-auto"
              />
              <span className="sr-only">Mycelico Logo (go home)</span>
            </Link>
            <p className="text-sm text-sage-600 mb-4 max-w-md">
              Professional plant pathogen testing services for South African
              agriculture.
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-sage-700 transition-colors duration-200 hover:bg-sage-100 hover:text-sage-900"
                aria-label="Twitter"
              >
                <RiTwitterXFill className="size-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-sage-700 transition-colors duration-200 hover:bg-sage-100 hover:text-sage-900"
                aria-label="LinkedIn"
              >
                <RiLinkedinFill className="size-5" />
              </Link>
              <Link
                href="mailto:info@mycelico.co.za"
                className="rounded-sm p-2 text-sage-700 transition-colors duration-200 hover:bg-sage-100 hover:text-sage-900"
                aria-label="Email"
              >
                <RiMailFill className="size-5" />
              </Link>
            </div>
          </div>

          {/* Footer Sections */}
          {Object.entries(sections).map(([key, section]) => (
            <div key={key}>
              <h3 className="mb-4 font-semibold text-sage-900 text-sm">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label} className="text-sm">
                    <Link
                      href={item.href}
                      className="text-sage-600 transition-colors duration-200 hover:text-sage-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="w-full mt-12 pt-8 border-t border-sage-200 text-center">
          <p className="text-sm text-sage-600">
            &copy; {CURRENT_YEAR} Mycelico. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
