import { HeroBanner } from "@/components/ui/HeroBanner"
import { ReadyToGetStarted } from "@/components/ui/ReadyToGetStarted"
import { StickerCard } from "@/components/ui/StickerCard"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import {
    RiFlaskFill,
    RiGraduationCapFill,
    RiHeartPulseFill,
    RiSeedlingFill,
} from "@remixicon/react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "About Mycelico | Plant Pathogen Testing Laboratory Mossel Bay South Africa",
    description:
        "Mycelico is a South African plant and microbial biotechnology laboratory based in Mossel Bay, Western Cape. MSc-qualified team with 10+ years experience in molecular diagnostics, plant pathology, and viroid detection. Providing affordable HLVd, Fusarium, Phytophthora, and Pythium testing for cannabis, fruit, vegetable, and field crop producers across South Africa.",
    keywords: [
        "Mycelico laboratory",
        "plant pathology South Africa",
        "Mossel Bay laboratory",
        "molecular diagnostics Western Cape",
        "MSc plant pathologist",
        "biotechnology South Africa",
        "agricultural laboratory",
        "pathogen testing experts",
    ],
}

export default function AboutPage() {
    return (
        <main className="relative mx-auto flex flex-col">
            {/* Hero Section with Mossel Bay Image */}
            <HeroBanner
                heading="About Mycelico Laboratory"
                subheading="A plant pathology and microbial biotechnology laboratory based in Mossel Bay, Western Cape, South Africa. We specialise in molecular diagnostic services for agricultural producers, offering HLVd viroid testing, Fusarium detection, Phytophthora identification, and Pythium diagnostics. Making professional plant pathogen testing accessible and affordable for South African growers."
                imageSrc="/images/mossel-bay-1.jpg"
                alignment="left"
                mode="dark"
                overlayOpacity={70}
                primaryButton={{
                    label: "Our Services",
                    href: "/pathogen-testing",
                }}
                secondaryButton={{
                    label: "Get in Touch",
                    href: "/contact",
                }}
                minHeight="70vh"
            />

            {/* Sticker Card Section */}
            <section className="relative py-16 px-4 xl:px-0 bg-white overflow-hidden">
                <VerticalDottedLines />
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <StickerCard
                            Icon={RiFlaskFill}
                            title="10+ Years in Industry"
                            description="A decade of hands-on experience in plant pathology and molecular diagnostics."
                        />
                        <StickerCard
                            Icon={RiGraduationCapFill}
                            title="MSc Qualified"
                            description="Postgraduate expertise in microbiology and biotechnology research."
                        />
                        <StickerCard
                            Icon={RiSeedlingFill}
                            title="Bootstrapped Lab"
                            description="Independently built from the ground up with a focus on affordability."
                        />
                        <StickerCard
                            Icon={RiHeartPulseFill}
                            title="Client-Focused"
                            description="Empowering growers with knowledge, not just data."
                        />
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="relative px-4 xl:px-0 pb-16 overflow-hidden">
                <div className="max-w-6xl mx-auto relative space-y-12">

                    {/* Lab/Science Section with Petri Dish Image */}
                    <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="relative rounded-xl overflow-hidden shadow-xl order-2 lg:order-1">
                            <Image
                                src="/images/petri-dish-2.jpg"
                                alt="Laboratory petri dish with samples for analysis"
                                width={600}
                                height={400}
                                className="w-full object-cover aspect-[4/3]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-sage-900/40 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white text-sm font-medium">
                                    Advanced molecular diagnostics in action
                                </p>
                            </div>
                        </div>
                        <div className="prose prose-sage order-1 lg:order-2">
                            <h2 className="text-2xl font-semibold text-sage-900">
                                The Problem We Solve
                            </h2>
                            <p className="text-sage-700 leading-relaxed">
                                Mycelico provides a platform for clients to improve their operations
                                by accessing or developing novel molecular testing services, such as
                                disease testing and microbial environmental analysis. We seek to
                                expose clients to the benefits of modern laboratory techniques by
                                supplying affordable and effective molecular services.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 rounded-lg border border-sage-200 bg-white p-8 shadow-sm">
                        <h2 className="text-2xl font-semibold text-sage-900 mb-6">
                            What Sets Us Apart
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <h3 className="font-semibold text-sage-900 mb-2">
                                    Bridging Knowledge & Data
                                </h3>
                                <p className="text-sage-600">
                                    We bridge the gap between practical knowledge and laboratory
                                    data, involving clients in final decision-making processes and
                                    result interpretation.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-sage-900 mb-2">
                                    Clear Visual Results
                                </h3>
                                <p className="text-sage-600">
                                    Clearly and visually displaying final results empowers clients,
                                    showing the significance of molecular testing while demystifying
                                    results for future testing.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-sage-900 mb-2">
                                    Affordable Access
                                </h3>
                                <p className="text-sage-600">
                                    We make advanced molecular diagnostics accessible to operations
                                    of all sizes through competitive pricing and efficient
                                    processes.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-sage-900 mb-2">
                                    Client Empowerment
                                </h3>
                                <p className="text-sage-600">
                                    Our goal is to empower you with knowledge, not just data. We help
                                    you understand what results mean for your specific operation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Final Section with Background Image */}
                    <div className="relative z-10 rounded-xl overflow-hidden">
                        <div className="absolute inset-0">
                            <Image
                                src="/images/farming-aerial-3.jpg"
                                alt=""
                                fill
                                className="object-cover"
                                aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-sage-900/95 via-sage-900/85 to-sage-900/70" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12">
                            <h2 className="text-2xl font-semibold text-white mb-4">
                                Serving South African Agriculture
                            </h2>
                            <p className="text-cream-100 leading-relaxed max-w-2xl">
                                As a South African company, we understand the specific challenges
                                facing local producers. We&apos;re committed to providing
                                accessible, professional molecular testing services that help you
                                protect your crops and optimise your operations. Whether you&apos;re
                                a home grower or a commercial operation, we&apos;re here to help you
                                benefit from modern laboratory techniques.
                            </p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="relative z-10 mt-8">
                        <ReadyToGetStarted
                            patternId="about-cta"
                            variant="light"
                            title="Ready to Work Together?"
                            description="Contact us to learn more about how our molecular testing services can benefit your operation."
                            primaryLabel="Get in Touch"
                            primaryHref="/contact"
                            secondaryLabel="View Services"
                            secondaryHref="/pathogen-testing"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
