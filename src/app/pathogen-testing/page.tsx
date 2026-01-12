import { PageWrapper } from "@/components/PageWrapper"
import type { Metadata } from "next"
import Link from "next/link"
import { MycelicoMark } from "../../../public/MycelicoMark"

export const metadata: Metadata = {
    title: "Pathogen Testing Services | Mycelico",
    description:
        "Accurate plant pathogen testing for South African agriculture. Fast turnaround, reliable results, and expert analysis to protect your crops.",
}

export default function PathogenTestingPage() {
    return (
        <PageWrapper>
            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-sage-900 md:text-5xl">
                        Pathogen Testing Services
                    </h1>
                    <p className="text-lg text-sage-700 max-w-3xl">
                        Comprehensive plant pathogen testing services designed for South
                        African agricultural producers. We provide accurate, timely results
                        to help you make informed decisions about crop health management.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    <div className="rounded-lg border border-sage-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="mb-4 flex justify-center">
                            <div className="rounded-full bg-sage-100 p-3">
                                <MycelicoMark className="h-10 w-10" />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-sage-900 mb-3 text-center">
                            Fungal Pathogens
                        </h2>
                        <p className="text-sage-600 text-center">
                            Detection and identification of fungal diseases affecting crops,
                            including early blight, late blight, and powdery mildew.
                        </p>
                    </div>

                    <div className="rounded-lg border border-sage-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="mb-4 flex justify-center">
                            <div className="rounded-full bg-lavender-100 p-3">
                                <svg
                                    className="h-10 w-10 text-lavender-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-sage-900 mb-3 text-center">
                            Bacterial Diseases
                        </h2>
                        <p className="text-sage-600 text-center">
                            Screening for bacterial pathogens that can devastate crops,
                            including bacterial spot, canker, and wilt diseases.
                        </p>
                    </div>

                    <div className="rounded-lg border border-sage-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="mb-4 flex justify-center">
                            <div className="rounded-full bg-sky-100 p-3">
                                <svg
                                    className="h-10 w-10 text-sky-600"
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
                        <h2 className="text-xl font-semibold text-sage-900 mb-3 text-center">
                            Viral Infections
                        </h2>
                        <p className="text-sage-600 text-center">
                            infections before they spread throughout your operation.
                        </p>
                    </div>
                </div>

                <div className="mt-12 space-y-6">
                    <h2 className="text-2xl font-semibold text-sage-900">
                        Our Testing Process
                    </h2>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-800 font-semibold">
                                1
                            </div>
                            <div>
                                <h3 className="font-medium text-sage-900 mb-1">
                                    Sample Collection
                                </h3>
                                <p className="text-sage-600">
                                    Follow our sampling guidelines to collect representative
                                    samples from affected plants.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-800 font-semibold">
                                2
                            </div>
                            <div>
                                <h3 className="font-medium text-sage-900 mb-1">
                                    Laboratory Analysis
                                </h3>
                                <p className="text-sage-600">
                                    Our team uses advanced diagnostic techniques to identify
                                    pathogens accurately.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-800 font-semibold">
                                3
                            </div>
                            <div>
                                <h3 className="font-medium text-sage-900 mb-1">
                                    Results & Recommendations
                                </h3>
                                <p className="text-sage-600">
                                    Receive detailed reports with actionable insights for managing
                                    identified threats.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 rounded-lg bg-sage-50 border border-sage-200 p-8">
                    <h2 className="text-2xl font-semibold text-sage-900 mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-sage-700 mb-6">
                        Contact us to discuss your testing needs or request a quote.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md bg-sage-600 px-6 py-3 font-medium text-white transition-colors hover:bg-sage-700"
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
        </PageWrapper>
    )
}
