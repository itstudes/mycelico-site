import { HeroBanner } from "@/components/ui/HeroBanner"
import { ReadyToGetStarted } from "@/components/ui/ReadyToGetStarted"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import Image from "next/image"
import Link from "next/link"
import { MycelicoMark } from "../../public/MycelicoMark"

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      {/* Hero Section with Background Image */}
      <HeroBanner
        heading="Professional Plant Pathogen Testing"
        subheading="Accurate, timely diagnostic services for South African agriculture. Protect your crops with expert pathogen detection and analysis."
        imageSrc="/images/farming-aerial-4.jpg"
        alignment="left"
        mode="dark"
        overlayOpacity={85}
        primaryButton={{
          label: "Our Services",
          href: "/pathogen-testing",
        }}
        secondaryButton={{
          label: "Get in Touch",
          href: "/contact",
        }}
        minHeight="80vh"
      />

      {/* Features Section */}
      <section className="relative py-20 px-4 xl:px-0 bg-white overflow-hidden">
        <VerticalDottedLines />
        <div className="max-w-6xl mx-auto relative z-10">
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

      {/* Cellular/Lab Image Section */}
      <section className="relative py-20 px-4 xl:px-0 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/images/cellular-1.jpg"
                alt="Microscopic view of plant cellular structure"
                width={600}
                height={400}
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">
                  Advanced molecular analysis at the cellular level
                </p>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-sage-900 md:text-4xl">
                Precision Diagnostics at the Molecular Level
              </h2>
              <p className="text-sage-700 leading-relaxed">
                Our laboratory uses advanced molecular techniques to detect
                pathogens with exceptional accuracy. By analysing at the
                cellular level, we can identify infections before visible
                symptoms appear—giving you the early warning you need to protect
                your crops.
              </p>
              <p className="text-sage-700 leading-relaxed">
                From viroids like HLVd to fungal and bacterial pathogens, our
                testing services provide the clarity you need for informed
                decision-making.
              </p>
              <Link
                href="/pathogen-testing"
                className="inline-flex items-center justify-center rounded-md bg-lime-600 px-6 py-3 font-medium text-white transition-colors hover:bg-lime-700 shadow-sm"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section with Farm Image */}
      <section className="relative py-20 px-4 xl:px-0 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/farming-side-view-1.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-cream-50/95" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-sage-900 md:text-4xl">
                Why Choose Mycelico
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-800">
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-800">
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-800">
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
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/farming-side-view-1.jpg"
                alt="Agricultural field in South Africa"
                width={600}
                height={400}
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 xl:px-0">
        <div className="max-w-6xl mx-auto">
          <ReadyToGetStarted
            patternId="home-cta"
            title="Ready to protect your crops?"
            description="Contact us today to discuss your pathogen testing needs or request a quote for your operation."
            primaryLabel="Contact Us"
            primaryHref="/contact"
            secondaryLabel="View Pricing"
            secondaryHref="/pricing"
            imageSrc="/images/apples-rot-4.jpg"
            imageAlt="Apple disease requiring pathogen testing"
          />
        </div>
      </section>
    </main>
  )
}
