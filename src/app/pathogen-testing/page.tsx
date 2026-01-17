import { PageWrapper } from "@/components/PageWrapper"
import { AvailableTestingServices } from "@/components/ui/AvailableTestingServices"
import { DiagonalHatching } from "@/components/ui/DiagonalHatching"
import { PathogenOrbit } from "@/components/ui/PathogenOrbit"
import { ReadyToGetStarted } from "@/components/ui/ReadyToGetStarted"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Plant Pathogen Testing Services South Africa | HLVd, Fusarium, Phytophthora, Pythium",
    description:
        "Comprehensive plant pathogen testing laboratory in South Africa. Molecular diagnostics for HLVd (Hop Latent Viroid), Fusarium wilt, Phytophthora root rot, Pythium damping-off. Serving cannabis growers, fruit producers, vegetable farmers, and field crop operations across Western Cape, Eastern Cape, and South Africa. Fast 5-10 day turnaround.",
    keywords: [
        "HLVd testing South Africa",
        "Hop Latent Viroid detection",
        "Fusarium wilt testing",
        "Phytophthora root rot",
        "Pythium damping-off",
        "cannabis pathogen testing",
        "plant disease laboratory",
        "molecular diagnostics agriculture",
        "crop pathogen detection",
        "viroid testing",
        "fungal pathogen testing",
        "Western Cape laboratory",
    ],
}

export default function PathogenTestingPage() {
    return (
        <PageWrapper>
            <div className="relative space-y-8 overflow-hidden">
                <VerticalDottedLines />

                {/* Header with Orbit Visualization */}
                <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-sage-900 md:text-5xl">
                            Plant Pathogen Testing
                        </h1>
                        <p className="text-lg text-sage-700 max-w-xl">
                            Molecular diagnostic laboratory services for local South African agricultural
                            producers. We use advanced PCR and molecular techniques to provide
                            accurate, timely results for HLVd, Fusarium, Phytophthora, and Pythium detection.
                            Based in Mossel Bay, serving growers across Western Cape, Eastern Cape, and nationwide.
                        </p>
                    </div>
                    <div className="relative hidden lg:flex items-center justify-center h-80">
                        <DiagonalHatching
                            patternId="pathogen-hero-hatching"
                            maskDirection="both"
                        />
                        <PathogenOrbit />
                    </div>
                </div>

                {/* Testing Types - From Config */}
                <AvailableTestingServices />

                {/* Lab Process Section with Images */}
                <div className="relative z-10 mt-16">
                    <div className="grid gap-8 lg:grid-cols-2 items-center">
                        <div className="relative rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/plant-petri-dish-1.jpg"
                                alt="Plant sample in petri dish for laboratory analysis"
                                width={600}
                                height={400}
                                className="w-full object-cover aspect-[4/3]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-sage-900/50 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white text-sm font-medium">
                                    Sample preparation for molecular analysis
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-sage-900">
                                Our Testing Process
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-800 font-semibold">
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
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-800 font-semibold">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-sage-900 mb-1">
                                            Laboratory Analysis
                                        </h3>
                                        <p className="text-sage-600">
                                            Our Mossel Bay laboratory uses PCR and molecular diagnostics to identify
                                            HLVd, Fusarium, Phytophthora, and Pythium with high accuracy.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-800 font-semibold">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-sage-900 mb-1">
                                            Results & Insights
                                        </h3>
                                        <p className="text-sage-600">
                                            Receive detailed reports within 5-10 business days with
                                            clear visual results and actionable disease management recommendations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cellular Image Section */}
                <div className="relative z-10 mt-16 rounded-xl overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/cellular-2.jpg"
                            alt=""
                            fill
                            className="object-cover"
                            aria-hidden="true"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/95 via-sage-900/85 to-sage-900/70" />
                    </div>
                    <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-white">
                                Molecular-Level Detection
                            </h2>
                            <p className="text-cream-100 leading-relaxed">
                                Our advanced RT-PCR and molecular analysis techniques detect
                                pathogens at the cellular level. They work often before visible symptoms
                                appear. This early detection is crucial for preventing the
                                spread of disease through your operation.
                            </p>
                            <p className="text-cream-200 text-sm">
                                High sensitivity testing ensures accurate results you can trust.
                            </p>
                        </div>
                        <div className="hidden md:block" />
                    </div>
                </div>

                <div className="relative z-10 mt-12 rounded-lg border border-sage-200 bg-white p-6">
                    <h2 className="text-xl font-semibold text-sage-900 mb-3">
                        Need Help with Sample Collection?
                    </h2>
                    <p className="text-sage-700 mb-4">
                        Proper sample collection is critical for accurate results. View our
                        detailed guidelines for collecting leaf, soil, and water samples.
                    </p>
                    <Link
                        href="/pathogen-testing/sample-collection-guidelines"
                        className="inline-flex items-center justify-center rounded-md border border-sage-300 bg-white px-6 py-3 font-medium text-sage-900 shadow-sm transition-colors hover:bg-sage-50"
                    >
                        Sample Collection Guidelines
                    </Link>
                </div>

                <div className="relative z-10 mt-12">
                    <ReadyToGetStarted patternId="pathogen-cta-hatching" variant="solid" />
                </div>
            </div>
        </PageWrapper>
    )
}
