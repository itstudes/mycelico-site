import Image from "next/image"
import Link from "next/link"
const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => {
  const sections = {
    services: {
      title: "Services",
      items: [
        { label: "Pathogen Testing", href: "/pathogen-testing" },
        { label: "Sample Collection", href: "/pathogen-testing/sample-collection-guidelines" },
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
            <div className="space-y-2">
              <div className="flex flex-col gap-1 text-sm text-sage-700">
                <a
                  href="mailto:connal@myceli.co"
                  className="hover:text-sage-900 transition-colors"
                >
                  connal@myceli.co
                </a>
                <a
                  href="tel:+27743665607"
                  className="hover:text-sage-900 transition-colors"
                >
                  +27 74 366 5607
                </a>
              </div>
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
