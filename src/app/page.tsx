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
import Image from "next/image"
import Link from "next/link"

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

      {/* Sticker Card Transition Section */}
      <section className="relative py-16 px-4 xl:px-0 bg-white overflow-hidden">
        <VerticalDottedLines />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StickerCard
              Icon={RiMicroscopeFill}
              title="Microbiology Testing Services"
              description="Accurate molecular diagnostics for fungi, bacteria, and viroids."
            />
            <StickerCard
              Icon={RiLightbulbFlashFill}
              title="Actionable Insights"
              description="Clear, decision‑ready reports that guide crop management."
            />
            <StickerCard
              Icon={RiMoneyDollarCircleFill}
              title="High ROI"
              description="Prevent losses and optimise inputs with targeted testing."
            />
            <StickerCard
              Icon={RiShieldCheckFill}
              title="Proactive Detection"
              description="Detect problems early to protect yield and quality."
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
                Know What&apos;s Happening Across Your Fields
              </h2>
              <p className="text-sage-700 leading-relaxed">
                Early detection is critical. Our testing services help you
                identify pathogen hotspots before they spread, giving you a
                clear picture of crop health across your entire operation.
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
            variant="light"
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
