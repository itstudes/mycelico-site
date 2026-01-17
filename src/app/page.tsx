import { AvailableTestingServices } from "@/components/ui/AvailableTestingServices"
import { HeroBanner } from "@/components/ui/HeroBanner"
import { ReadyToGetStarted } from "@/components/ui/ReadyToGetStarted"
import { StickerCard } from "@/components/ui/StickerCard"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import { ZoneGrid } from "@/components/ui/ZoneGrid"
import {
  RiLightbulbFlashFill,
  RiMicroscopeFill,
  RiMoneyDollarCircleFill,
  RiShieldCheckFill,
} from "@remixicon/react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Plant Pathogen Testing Services South Africa | HLVd, Fusarium, Phytophthora | Mycelico",
  description:
    "Professional molecular plant pathogen testing laboratory in South Africa. HLVd viroid testing, Fusarium, Phytophthora, and Pythium diagnostics. Fast turnaround, accurate results for cannabis, fruit, vegetable, and field crop producers. Serving Western Cape, Eastern Cape, and nationwide.",
  keywords: [
    "plant pathogen testing South Africa",
    "HLVd testing",
    "Hop Latent Viroid",
    "cannabis testing South Africa",
    "Fusarium testing",
    "Phytophthora detection",
    "Pythium testing",
    "crop disease diagnostics",
    "molecular plant testing",
    "agricultural laboratory South Africa",
    "pathogen detection Western Cape",
    "plant disease testing Mossel Bay",
    "viroid testing cannabis",
    "root rot testing",
    "crop health diagnostics",
  ],
  openGraph: {
    title: "Plant Pathogen Testing South Africa | Mycelico Laboratory",
    description:
      "Professional molecular diagnostics for South African agriculture. HLVd, Fusarium, Phytophthora testing. Fast, accurate, affordable.",
  },
}

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      {/* Hero Section with Background Image */}
      <HeroBanner
        heading="Plant Pathogen Testing for South African Growers"
        subheading="Lab testing services that identify crop diseases before they destroy your harvest. We test for HLVd, Fusarium, Phytophthora, and Pythium. Fast results. Reliable diagnostics. Affordable pricing."
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

      {/* Sticker Card Transition Section */}
      <section className="relative py-16 px-4 xl:px-0 bg-white overflow-hidden">
        <VerticalDottedLines />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StickerCard
              Icon={RiMicroscopeFill}
              title="Lab Testing Services"
              description="We test for plant pathogens using proven molecular techniques. Get clear results you can act on."
            />
            <StickerCard
              Icon={RiLightbulbFlashFill}
              title="Disease Detection"
              description="Identify infections before symptoms appear. Early detection saves crops and money."
            />
            <StickerCard
              Icon={RiMoneyDollarCircleFill}
              title="Affordable Testing"
              description="Professional diagnostics without premium prices. Protect your operation without breaking the budget."
            />
            <StickerCard
              Icon={RiShieldCheckFill}
              title="Fast Results"
              description="Get test results within 5-10 business days. Make quick decisions to protect your crops."
            />
          </div>
        </div>
      </section>

      {/* Zone Grid Transition Section */}
      <section className="relative py-16 px-4 xl:px-0 bg-cream-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-sage-900 md:text-4xl">
                Know Your Crop Health Status
              </h2>
              <p className="text-sage-700 leading-relaxed">
                Pathogen diseases spread fast and damage crops silently. Our testing helps you catch problems early.
                Test plants across your fields to identify disease hotspots before they spread to healthy zones.
                This simple step lets you take targeted action instead of guessing.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-lime-500" />
                  <span className="text-sage-700">Healthy zones</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <span className="text-sage-700">Needs attention</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="text-sage-700">Infection detected</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <ZoneGrid />
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
                How Our Testing Works
              </h2>
              <p className="text-sage-700 leading-relaxed">
                We use PCR (polymerase chain reaction) and other molecular lab techniques to detect
                pathogens at the DNA level. This method catches infections before plants show any visible symptoms.
                We can identify HLVd viroids, Fusarium wilt, Phytophthora root rot, and Pythium diseases
                with accuracy that protects your cannabis, fruit, vegetable, or field crops.
              </p>
              <p className="text-sage-700 leading-relaxed">
                You get clear results and actionable recommendations. No guesswork. Just solid science
                to help you make confident decisions about crop health and treatment.
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
                Why Choose Our Testing Service
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
                      Fast Results
                    </h3>
                    <p className="text-sage-700">
                      Get test results within 5 to 10 business days. Quick turnaround means you can respond to
                      crop problems immediately.
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
                      Based in South Africa
                    </h3>
                    <p className="text-sage-700">
                      We are located in Mossel Bay, Western Cape. We understand the specific crop diseases that
                      affect South African farms and gardens.
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
                      Accurate Testing
                    </h3>
                    <p className="text-sage-700">
                      We use proven PCR lab methods to identify plant diseases accurately. Our results are reliable
                      so you can make confident decisions.
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

      {/* Available Testing Services Section */}
      <section className="relative py-20 px-4 xl:px-0 bg-cream-50 overflow-hidden">
        <VerticalDottedLines />
        <div className="max-w-6xl mx-auto relative z-10">
          <AvailableTestingServices />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 xl:px-0">
        <div className="max-w-6xl mx-auto">
          <ReadyToGetStarted
            patternId="home-cta"
            variant="light"
            title="Ready to Test Your Crops?"
            description="Get accurate pathogen testing from our Mossel Bay laboratory. We test for HLVd, Fusarium, Phytophthora, and Pythium. Send samples, get clear results in 5-10 days, and protect your harvest."
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
