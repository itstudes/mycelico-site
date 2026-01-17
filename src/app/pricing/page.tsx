import { PageWrapper } from "@/components/PageWrapper"
import { DiagonalHatching } from "@/components/ui/DiagonalHatching"
import { ReadyToGetStarted } from "@/components/ui/ReadyToGetStarted"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Pricing | Mycelico",
    description:
        "Transparent pricing for plant pathogen testing services. Starting from R450 per sample with 5-10 day turnaround. Enterprise solutions available for commercial operations.",
}

function CheckIcon() {
    return (
        <svg
            className="h-6 w-6 shrink-0 text-lime-600"
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
    )
}

export default function PricingPage() {
    return (
        <PageWrapper>
            <div className="relative space-y-8 overflow-hidden">
                <VerticalDottedLines />

                <div className="space-y-4 text-center relative z-10">
                    <h1 className="text-4xl font-bold text-sage-900 md:text-5xl">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-sage-700">
                        Professional pathogen testing services at competitive rates. Choose
                        the option that best fits your needs.
                    </p>
                </div>

                <div className="relative mt-12 grid max-w-4xl mx-auto gap-8 md:grid-cols-2">
                    {/* Starter Tier */}
                    <div className="relative flex flex-col rounded-lg border-2 border-lime-500 bg-white p-8 shadow-lg">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-lime-600 px-4 py-1 text-sm font-medium text-white">
                            Most Popular
                        </div>
                        <div className="mb-6">
                            <h2 className="mb-2 text-2xl font-semibold text-sage-900">
                                Starter
                            </h2>
                            <p className="mb-4 text-sm text-sage-600">
                                Perfect for home growers and small test batches
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-sm text-sage-600">From</span>
                                <span className="text-4xl font-bold text-sage-900">R450</span>
                                <span className="text-sage-600">/sample</span>
                            </div>
                        </div>
                        <ul className="mb-8 flex-1 space-y-3">
                            <li className="flex gap-2 text-sage-700">
                                <CheckIcon />
                                Standard pathogen screening
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <CheckIcon />
                                5-10 business day turnaround
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <CheckIcon />
                                Digital results report
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <CheckIcon />
                                Email support
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <CheckIcon />
                                Sample collection guidance
                            </li>
                        </ul>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md bg-lime-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-lime-700"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="relative flex flex-col overflow-hidden rounded-lg border border-sage-200 bg-white p-8 shadow-sm">
                        <DiagonalHatching
                            patternId="enterprise-hatching"
                            strokeClass="stroke-sage-100"
                            maskDirection="top"
                        />
                        <div className="relative z-10 mb-6">
                            <h2 className="mb-2 text-2xl font-semibold text-sage-900">
                                Enterprise
                            </h2>
                            <p className="mb-4 text-sm text-sage-600">
                                For commercial operations and large-scale testing
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-sage-900">Custom</span>
                            </div>
                        </div>
                        <ul className="relative z-10 mb-8 flex-1 space-y-3">
                            <li className="flex gap-2 text-sage-700">
                                <CheckIcon />
                                Large batch processing
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <CheckIcon />
                                Expedited results available
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <CheckIcon />
                                Volume-based pricing
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <CheckIcon />
                                Dedicated account manager
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <CheckIcon />
                                Priority phone support
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <CheckIcon />
                                Custom reporting formats
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <CheckIcon />
                                On-site consultation available
                            </li>
                        </ul>
                        <Link
                            href="/contact"
                            className="relative z-10 inline-flex items-center justify-center rounded-md border border-sage-300 bg-white px-6 py-3 font-medium text-sage-900 shadow-sm transition-colors hover:bg-sage-50"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="relative z-10 mx-auto mt-16 max-w-3xl rounded-lg border border-cream-300 bg-cream-100 p-8">
                    <h2 className="mb-4 text-xl font-semibold text-sage-900">
                        Not sure which option is right for you?
                    </h2>
                    <p className="mb-4 text-sage-700">
                        We&apos;re happy to discuss your specific testing requirements and
                        recommend the best approach for your operation. Whether you&apos;re
                        a home grower checking a few plants or a commercial farm needing
                        regular screening, we can tailor our services to your needs.
                    </p>
                    <p className="text-sage-600 text-sm">
                        All prices exclude VAT. Turnaround times calculated from receipt of
                        samples at our laboratory.
                    </p>
                </div>

                {/* CTA Section */}
                <div className="relative z-10 mt-16">
                    <ReadyToGetStarted
                        patternId="pricing-cta"
                        variant="light"
                        title="Ready to Get Started?"
                        description="Contact us to discuss your testing needs or submit samples for analysis."
                        primaryLabel="Contact Us"
                        primaryHref="/contact"
                        secondaryLabel="View Services"
                        secondaryHref="/pathogen-testing"
                        imageSrc="/images/farming-aerial-2.jpg"
                        imageAlt="Aerial view of South African farmland"
                    />
                </div>
            </div>
        </PageWrapper>
    )
}
