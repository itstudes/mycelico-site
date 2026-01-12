import { PageWrapper } from "@/components/PageWrapper"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Pricing | Mycelico",
    description:
        "Transparent pricing for plant pathogen testing services. Competitive rates for South African agricultural producers.",
}

export default function PricingPage() {
    return (
        <PageWrapper>
            <div className="space-y-8">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold text-sage-900 md:text-5xl">
                        Pricing
                    </h1>
                    <p className="text-lg text-sage-700 max-w-2xl mx-auto">
                        Clear, competitive pricing for professional pathogen testing
                        services. Choose the package that fits your needs.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 mt-12 max-w-5xl mx-auto">
                    <div className="rounded-lg border border-sage-200 bg-white p-8 shadow-sm flex flex-col">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-sage-900 mb-2">
                                Basic Testing
                            </h2>
                            <p className="text-sage-600 text-sm mb-4">
                                Essential pathogen screening
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-sage-900">R850</span>
                                <span className="text-sage-600">/sample</span>
                            </div>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                Visual inspection
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                Single pathogen test
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                5-7 business day turnaround
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                Basic report
                            </li>
                        </ul>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md border border-sage-300 bg-white px-6 py-3 font-medium text-sage-900 transition-colors hover:bg-sage-50"
                        >
                            Get Started
                        </Link>
                    </div>

                    <div className="rounded-lg border-2 border-sage-500 bg-white p-8 shadow-lg flex flex-col relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sage-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                            Popular
                        </div>
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-sage-900 mb-2">
                                Comprehensive
                            </h2>
                            <p className="text-sage-600 text-sm mb-4">
                                Full diagnostic panel
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-sage-900">R1,850</span>
                                <span className="text-sage-600">/sample</span>
                            </div>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                Multi-pathogen screening
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                Molecular diagnostics
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                3-5 business day turnaround
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                Detailed report with recommendations
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                Phone consultation
                            </li>
                        </ul>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md bg-sage-600 px-6 py-3 font-medium text-white transition-colors hover:bg-sage-700"
                        >
                            Get Started
                        </Link>
                    </div>

                    <div className="rounded-lg border border-sage-200 bg-white p-8 shadow-sm flex flex-col">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-sage-900 mb-2">
                                Enterprise
                            </h2>
                            <p className="text-sage-600 text-sm mb-4">
                                For large operations
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-sage-900">Custom</span>
                            </div>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                Bulk pricing
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                Priority processing
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                Dedicated account manager
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                Custom reporting formats
                            </li>
                            <li className="flex gap-2 text-sage-700">
                                <svg
                                    className="h-6 w-6 shrink-0 text-sage-500"
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
                                On-site visits available
                            </li>
                        </ul>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md border border-sage-300 bg-white px-6 py-3 font-medium text-sage-900 transition-colors hover:bg-sage-50"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>

                <div className="mt-16 rounded-lg bg-cream-100 border border-cream-300 p-8 max-w-3xl mx-auto">
                    <h2 className="text-xl font-semibold text-sage-900 mb-4">
                        Volume Discounts Available
                    </h2>
                    <p className="text-sage-700">
                        We offer competitive pricing for producers submitting multiple
                        samples regularly. Contact us to discuss a custom package tailored
                        to your operation&apos;s needs.
                    </p>
                </div>
            </div>
        </PageWrapper>
    )
}
