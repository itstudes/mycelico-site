import { PageWrapper } from "@/components/PageWrapper"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import type { Metadata } from "next"

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
                <div className="relative z-10 space-y-4">
                    <h1 className="text-4xl font-bold text-sage-900 md:text-5xl">
                        About Mycelico
                    </h1>
                    <p className="text-xl text-sage-700 max-w-3xl">
                        A plant and microbial biotechnology company supplying affordable
                        disease and environmental analysis through molecular laboratory
                        services.
                    </p>
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

                <div className="relative z-10 prose prose-sage max-w-3xl">
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

                <div className="relative z-10 prose prose-sage max-w-3xl">
                    <h2 className="text-2xl font-semibold text-sage-900">
                        Serving South African Agriculture
                    </h2>
                    <p className="text-sage-700 leading-relaxed">
                        As a South African company, we understand the specific challenges
                        facing local producers. We&apos;re committed to providing
                        accessible, professional molecular testing services that help you
                        protect your crops and optimise your operations. Whether you&apos;re
                        a home grower or a commercial operation, we&apos;re here to help you
                        benefit from modern laboratory techniques.
                    </p>
                </div>
            </div>
        </PageWrapper>
    )
}
