import Link from "next/link"
import { MycelicoMark } from "../../public/MycelicoMark"

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 xl:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold text-sage-900 md:text-6xl lg:text-7xl">
              Professional Plant Pathogen Testing
            </h1>
            <p className="text-xl text-sage-700 leading-relaxed">
              Accurate, timely diagnostic services for South African
              agriculture. Protect your crops with expert pathogen detection and
              analysis.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
              <Link
                href="/pathogen-testing"
                className="inline-flex items-center justify-center rounded-md bg-lime-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-lime-700 shadow-sm"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-sage-300 bg-white px-8 py-4 font-semibold text-sage-900 transition-colors hover:bg-sage-50 shadow-sm"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 xl:px-0 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-900 md:text-4xl">
              Comprehensive Testing Services
            </h2>
            <p className="mt-4 text-lg text-sage-700">
              Detect and identify the pathogens affecting your crops
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-sage-200 p-8 bg-cream-50 hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-sage-100 p-4">
                  <MycelicoMark className="h-12 w-12" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-sage-900 mb-3 text-center">
                Fungal Pathogens
              </h3>
              <p className="text-sage-700 text-center">
                Accurate detection of fungal diseases including blights, mildew,
                and rust affecting your crops.
              </p>
            </div>

            <div className="rounded-lg border border-sage-200 p-8 bg-cream-50 hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-lavender-100 p-4">
                  <svg
                    className="h-12 w-12 text-lavender-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-sage-900 mb-3 text-center">
                Bacterial Diseases
              </h3>
              <p className="text-sage-700 text-center">
                Screening for bacterial pathogens that can devastate crops if
                left undetected.
              </p>
            </div>

            <div className="rounded-lg border border-sage-200 p-8 bg-cream-50 hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-sky-100 p-4">
                  <svg
                    className="h-12 w-12 text-sky-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-sage-900 mb-3 text-center">
                Viral Infections
              </h3>
              <p className="text-sage-700 text-center">
                Molecular testing for viral diseases to help you identify and
                manage infections early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 xl:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-sage-900 md:text-4xl">
                Why Choose Mycelico
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-800">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-900 mb-1">
                      Fast Turnaround
                    </h3>
                    <p className="text-sage-700">
                      Get results when you need them to make timely crop
                      management decisions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-800">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-900 mb-1">
                      Local Expertise
                    </h3>
                    <p className="text-sage-700">
                      Based in South Africa, we understand the pathogen
                      challenges facing local producers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-800">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-900 mb-1">
                      Reliable Results
                    </h3>
                    <p className="text-sage-700">
                      Proven diagnostic methods ensure accurate, actionable
                      information for your operation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-sage-200 bg-sage-50 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-sage-900 mb-4">
                Ready to protect your crops?
              </h3>
              <p className="text-sage-700 mb-6">
                Contact us today to discuss your pathogen testing needs or
                request a quote for your operation.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-lime-600 px-6 py-3 font-medium text-white transition-colors hover:bg-lime-700 shadow-sm"
                >
                  Contact Us
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-md border border-sage-300 bg-white px-6 py-3 font-medium text-sage-900 transition-colors hover:bg-sage-50"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
