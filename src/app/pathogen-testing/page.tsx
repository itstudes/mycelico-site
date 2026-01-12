import { PageWrapper } from "@/components/PageWrapper"
import type { Metadata } from "next"
import Link from "next/link"

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
                    <div className="rounded-lg border border-sage-200 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-sage-900 mb-3">
                            Fungal Pathogens
                        </h2>
                        <p className="text-sage-600">
                            Detection and identification of fungal diseases affecting crops,
                            including early blight, late blight, and powdery mildew.
                        </p>
                    </div>

                    <div className="rounded-lg border border-sage-200 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-sage-900 mb-3">
                            Bacterial Diseases
                        </h2>
                        <p className="text-sage-600">
                            Screening for bacterial pathogens that can devastate crops,
                            including bacterial spot, canker, and wilt diseases.
                        </p>
                    </div>

                    <div className="rounded-lg border border-sage-200 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-sage-900 mb-3">
                            Viral Infections
                        </h2>
                        <p className="text-sage-600">
                            Molecular testing for viral diseases, helping identify and manage
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
