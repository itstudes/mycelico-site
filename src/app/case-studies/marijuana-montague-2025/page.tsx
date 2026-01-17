import { DiagonalHatching } from "@/components/ui/DiagonalHatching"
import { HeroBanner } from "@/components/ui/HeroBanner"
import { ImageTestimonial } from "@/components/ui/ImageTestimonial"
import { ReadyToGetStarted } from "@/components/ui/ReadyToGetStarted"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import {
    RiArrowLeftLine,
    RiCalendarLine,
    RiCheckLine,
    RiMapPinLine,
    RiPlantLine,
    RiVirusLine,
} from "@remixicon/react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Marijuana in Montague [2025] Case Study | Mycelico",
    description:
        "How HLVd testing provided actionable insights for large-scale cannabis growers in the Western Cape, enabling early detection and crop protection.",
    keywords: [
        "HLVd testing",
        "cannabis",
        "marijuana",
        "hop latent viroid",
        "Western Cape",
        "South Africa",
        "pathogen detection",
    ],
}

export default function MarijuanaMontagueCaseStudyPage() {
    return (
        <main className="relative mx-auto flex flex-col">
            {/* Hero Banner */}
            <HeroBanner
                heading="Marijuana in Montague [2025]"
                subheading="How comprehensive HLVd testing provided actionable insights for large-scale cannabis cultivators in the Western Cape, enabling early detection and preventing significant crop losses."
                imageSrc="/images/marijuana-leaf-lab.jpg"
                imageAlt="Cannabis leaf sample in laboratory setting"
                alignment="left"
                mobileAlignment="center"
                mode="dark"
                overlayOpacity={75}
                badges={[
                    {
                        text: "2025",
                        icon: <RiCalendarLine className="size-4" />,
                    },
                    {
                        text: "Montague, Western Cape",
                        icon: <RiMapPinLine className="size-4" />,
                    },
                    {
                        text: "Cannabis",
                        icon: <RiPlantLine className="size-4" />,
                    },
                ]}
                minHeight="60vh"
            />

            <div className="relative space-y-12 overflow-hidden px-4 xl:px-0 py-12">
                <div className="max-w-6xl mx-auto w-full">
                    <VerticalDottedLines />

                    {/* Breadcrumb */}
                    <div className="relative z-10 mb-12">
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 text-sm text-sage-600 hover:text-sage-900 transition-colors"
                        >
                            <RiArrowLeftLine className="size-4" />
                            Back to Case Studies
                        </Link>
                    </div>

                    {/* Quick Stats */}
                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "Samples Tested", value: "2,400+" },
                            { label: "Detection Rate", value: "12.3%" },
                            { label: "Plants Saved", value: "~50,000" },
                            { label: "Turnaround Time", value: "48-72 hrs" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-lg border border-sage-200 bg-white p-4 text-center"
                            >
                                <div className="text-2xl font-bold text-lime-600">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-sage-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* The Challenge */}
                    <section className="relative z-10 space-y-6">
                        <h2 className="text-2xl font-semibold text-sage-900">The Challenge</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <p className="text-sage-700 leading-relaxed">
                                    A consortium of large-scale cannabis cultivators in the Montague
                                    region of the Western Cape approached Mycelico with a critical
                                    concern: unexplained yield reductions and quality issues across
                                    their operations.
                                </p>
                                <p className="text-sage-700 leading-relaxed">
                                    The growers, who have chosen to remain anonymous, were
                                    experiencing symptoms consistent with Hop Latent Viroid (HLVd)
                                    infection—a devastating pathogen that can reduce cannabinoid
                                    content by up to 50% and significantly impact plant vigour.
                                </p>
                                <p className="text-sage-700 leading-relaxed">
                                    Without proper diagnostic testing, the growers had no way to
                                    identify infected plants, track transmission patterns, or make
                                    informed decisions about their cultivation practices.
                                </p>
                            </div>
                            <div className="relative rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/marijuana-bud-1.jpg"
                                    alt="Cannabis plant showing potential HLVd symptoms"
                                    width={600}
                                    height={400}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Our Approach */}
                    <section className="relative z-10 space-y-6">
                        <h2 className="text-2xl font-semibold text-sage-900">Our Approach</h2>
                        <div className="relative rounded-xl bg-white border border-sage-200 p-8 overflow-hidden">
                            <DiagonalHatching
                                patternId="approach-hatching"
                                strokeClass="stroke-sage-100"
                                maskDirection="both"
                            />
                            <div className="relative z-10 grid md:grid-cols-3 gap-8">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lime-100">
                                        <RiVirusLine className="size-6 text-lime-600" />
                                    </div>
                                    <h3 className="font-semibold text-sage-900">
                                        Comprehensive Screening
                                    </h3>
                                    <p className="text-sm text-sage-700">
                                        We implemented a systematic sampling protocol across all
                                        cultivation facilities, testing mother plants, clones, and
                                        production plants at various growth stages.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lavender-100">
                                        <RiPlantLine className="size-6 text-lavender-600" />
                                    </div>
                                    <h3 className="font-semibold text-sage-900">
                                        Source Identification
                                    </h3>
                                    <p className="text-sm text-sage-700">
                                        Through strategic testing of genetic lineages, we helped
                                        identify the likely sources of infection and mapped
                                        transmission pathways within the facilities.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-100">
                                        <RiCheckLine className="size-6 text-sky-600" />
                                    </div>
                                    <h3 className="font-semibold text-sage-900">
                                        Ongoing Monitoring
                                    </h3>
                                    <p className="text-sm text-sage-700">
                                        We established a regular testing schedule to monitor the
                                        effectiveness of sanitation measures and prevent
                                        re-introduction of the pathogen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Image Gallery */}
                    <section className="relative z-10 space-y-6">
                        <h2 className="text-2xl font-semibold text-sage-900">
                            Testing Process
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src="/images/marijuana-leaf-1.jpg"
                                    alt="Cannabis leaf sample collection"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src="/images/marijuana-leaf-2.jpg"
                                    alt="Cannabis leaf examination"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src="/images/marijuana-bud-2.jpg"
                                    alt="Cannabis bud quality assessment"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src="/images/marijuana-bud-3.jpg"
                                    alt="Cannabis cultivation monitoring"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Results */}
                    <section className="relative z-10 space-y-6">
                        <h2 className="text-2xl font-semibold text-sage-900">The Results</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-600 text-white">
                                        <RiCheckLine className="size-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-sage-900 mb-1">
                                            Early Detection Success
                                        </h3>
                                        <p className="text-sage-600 text-sm">
                                            Testing revealed a 12.3% infection rate across the
                                            facilities, with several mother plants identified as primary
                                            sources of transmission.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-600 text-white">
                                        <RiCheckLine className="size-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-sage-900 mb-1">
                                            Rapid Response
                                        </h3>
                                        <p className="text-sage-600 text-sm">
                                            With clear identification of infected plants, growers were
                                            able to isolate and remove infected stock before the viroid
                                            could spread further.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-600 text-white">
                                        <RiCheckLine className="size-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-sage-900 mb-1">
                                            Protected Investment
                                        </h3>
                                        <p className="text-sage-600 text-sm">
                                            By identifying and removing infected mother plants, growers
                                            protected approximately 50,000 production plants from
                                            potential infection.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-600 text-white">
                                        <RiCheckLine className="size-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-sage-900 mb-1">
                                            Quality Restoration
                                        </h3>
                                        <p className="text-sage-600 text-sm">
                                            Subsequent harvests from clean genetic lines showed improved
                                            cannabinoid profiles and overall plant health.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/marijuana-bud-4.jpg"
                                    alt="Healthy cannabis cultivation after HLVd management"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Testimonial */}
                    <section className="relative z-10">
                        <ImageTestimonial
                            quoteHighlight="Mycelico's testing gave us the visibility we desperately needed."
                            quoteText="Within weeks of implementing their testing protocol, we identified the source of our quality issues and took action. The ROI on testing is incredible when you consider what we would have lost without early detection."
                            authorName="Operations Manager"
                            authorRole="Large-scale Cannabis Cultivator, Western Cape"
                            authorImage="/images/smiller.jpeg"
                            backgroundImage="/images/marijuana-leaf-3.jpg"
                            shadowClass="shadow-lime-900/30"
                            roleColorClass="text-lime-600"
                        />
                    </section>

                    {/* Key Takeaways */}
                    <section className="relative z-10 space-y-6">
                        <h2 className="text-2xl font-semibold text-sage-900">Key Takeaways</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-lg border border-sage-200 bg-white p-6">
                                <h3 className="font-semibold text-sage-900 mb-3">
                                    For Cannabis Cultivators
                                </h3>
                                <ul className="space-y-2 text-sage-700 text-sm">
                                    <li className="flex items-start gap-2">
                                        <RiCheckLine className="size-4 text-lime-600 shrink-0 mt-0.5" />
                                        <span>
                                            Regular HLVd testing of mother plants is essential for
                                            maintaining clean genetic lines
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <RiCheckLine className="size-4 text-lime-600 shrink-0 mt-0.5" />
                                        <span>
                                            Asymptomatic plants can still carry and transmit the viroid
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <RiCheckLine className="size-4 text-lime-600 shrink-0 mt-0.5" />
                                        <span>
                                            Early detection significantly reduces economic impact
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <RiCheckLine className="size-4 text-lime-600 shrink-0 mt-0.5" />
                                        <span>
                                            Testing new genetics before introduction prevents facility
                                            contamination
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-lg border border-sage-200 bg-white p-6">
                                <h3 className="font-semibold text-sage-900 mb-3">
                                    About HLVd Testing
                                </h3>
                                <ul className="space-y-2 text-sage-700 text-sm">
                                    <li className="flex items-start gap-2">
                                        <RiCheckLine className="size-4 text-lime-600 shrink-0 mt-0.5" />
                                        <span>
                                            RT-PCR testing provides highly accurate detection of viroid
                                            presence
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <RiCheckLine className="size-4 text-lime-600 shrink-0 mt-0.5" />
                                        <span>
                                            Results typically available within 48-72 hours of sample
                                            receipt
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <RiCheckLine className="size-4 text-lime-600 shrink-0 mt-0.5" />
                                        <span>
                                            Leaf tissue samples are the most reliable for detection
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <RiCheckLine className="size-4 text-lime-600 shrink-0 mt-0.5" />
                                        <span>
                                            Bulk pricing available for large-scale testing programmes
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="relative z-10 mt-12">
                        <ReadyToGetStarted
                            patternId="case-study-cta"
                            variant="light"
                            title="Protect Your Cannabis Cultivation"
                            description="Don't wait for visible symptoms. Implement proactive HLVd testing to protect your investment and ensure consistent quality."
                            primaryLabel="Request Testing"
                            primaryHref="/contact"
                            secondaryLabel="View Pricing"
                            secondaryHref="/pricing"
                            imageSrc="/images/marijuana-leaf-lab.jpg"
                            imageAlt="Cannabis laboratory testing"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
