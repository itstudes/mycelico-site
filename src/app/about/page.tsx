import { PageWrapper } from "@/components/PageWrapper"
import { ReadyToGetStarted } from "@/components/ui/ReadyToGetStarted"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "About Mycelico | Plant & Microbial Biotechnology",
    description:
        "Mycelico is a South African plant and microbial biotechnology company providing affordable disease testing and environmental analysis using molecular laboratory services.",
}

export default function AboutPage() {
    return (
        <PageWrapper>
            <div className="relative space-y-12 overflow-hidden">
                <VerticalDottedLines />

                {/* Hero Section with Aerial Image */}
                <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-sage-900 md:text-5xl">
                            About Mycelico
                        </h1>
                        <p className="text-xl text-sage-700">
                            A plant and microbial biotechnology company supplying affordable
                            disease and environmental analysis through molecular laboratory
                            services.
                        </p>
                    </div>
                    <div className="relative rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/farming-aerial-6.jpg"
                            alt="Aerial view of South African agricultural land"
                            width={600}
                            height={400}
                            className="w-full object-cover aspect-[4/3]"
                        />
                    </div>
                </div>

                <div className="relative z-10 prose prose-sage max-w-3xl">
                    <h2 className="text-2xl font-semibold text-sage-900">Who We Are</h2>
                    <p className="text-sage-700 leading-relaxed">
                        Mycelico provides and innovates laboratory techniques for in-depth
                        molecular analysis services, optimising a range of agricultural and
                        environmental operations. Based in South Africa, we&apos;re
                        committed to making modern diagnostic technology accessible to local
                        producers.
                    </p>
                </div>

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
                            by accessing—or developing novel—molecular testing services, such as
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
                                Our goal is to empower you with knowledge—not just data. We help
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
        </PageWrapper>
    )
}
