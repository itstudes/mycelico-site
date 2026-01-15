import { PageWrapper } from "@/components/PageWrapper"
import { ReadyToGetStarted } from "@/components/ui/ReadyToGetStarted"
import { TestTypeCard } from "@/components/ui/TestTypeCard"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import {
    RiBugLine,
    RiDropLine,
    RiPlantLine,
    RiVirusLine,
} from "@remixicon/react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Pathogen Testing Services | Mycelico",
    description:
        "Accurate plant pathogen testing for South African agriculture. HLVd testing available now. Phytophthora, Pythium, and Fusarium testing coming soon.",
}

export default function PathogenTestingPage() {
    return (
        <PageWrapper>
            <div className="relative space-y-8 overflow-hidden">
                <VerticalDottedLines />

                <div className="relative z-10 space-y-4">
                    <h1 className="text-4xl font-bold text-sage-900 md:text-5xl">
                        Pathogen Testing Services
                    </h1>
                    <p className="text-lg text-sage-700 max-w-3xl">
                        Molecular diagnostic services for South African agricultural
                        producers. We use advanced laboratory techniques to provide
                        accurate, timely results that help you make informed decisions about
                        crop health management.
                    </p>
                </div>

                {/* Testing Types - StickerCard style */}
                <div className="relative z-10 mt-12">
                    <h2 className="text-2xl font-semibold text-sage-900 mb-6">
                        Available Testing Services
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <TestTypeCard
                            Icon={RiVirusLine}
                            title="HLVd Testing"
                            description="Hop Latent Viroid detection for any crop type. Identify infections early before they spread."
                        />
                        <TestTypeCard
                            Icon={RiDropLine}
                            title="Phytophthora"
                            description="Water mould pathogen testing for root rot and crown rot diseases."
                            comingSoon
                        />
                        <TestTypeCard
                            Icon={RiPlantLine}
                            title="Pythium"
                            description="Root rot and damping-off disease detection for seedlings and mature plants."
                            comingSoon
                        />
                        <TestTypeCard
                            Icon={RiBugLine}
                            title="Fusarium"
                            description="Fusarium wilt and root rot testing across a range of crop species."
                            comingSoon
                        />
                    </div>
                </div>

                <div className="relative z-10 mt-12 space-y-6">
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
                                    Our team uses advanced molecular techniques to identify
                                    pathogens accurately.
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
                                    Receive clear, visual reports that empower you to make
                                    informed decisions about your operation.
                                </p>
                            </div>
                        </div>
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
                    <ReadyToGetStarted patternId="pathogen-cta-hatching" />
                </div>
            </div>
        </PageWrapper>
    )
}
