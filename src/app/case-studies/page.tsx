import { PageWrapper } from "@/components/PageWrapper"
import { ReadyToGetStarted } from "@/components/ui/ReadyToGetStarted"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import { RiArrowRightLine, RiCalendarLine } from "@remixicon/react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Case Studies | Mycelico",
    description:
        "Real-world examples of how Mycelico's pathogen testing services help South African agricultural producers protect their crops and improve yields.",
}

interface CaseStudy {
    slug: string
    title: string
    description: string
    date: string
    image: string
    tags: string[]
}

const caseStudies: CaseStudy[] = [
    {
        slug: "marijuana-montague-2025",
        title: "Marijuana in Montague [2025]",
        description:
            "How HLVd testing provided actionable insights for large-scale cannabis growers in the Western Cape, enabling early detection and preventing significant crop losses.",
        date: "2025",
        image: "/images/marijuana-leaf-lab.jpg",
        tags: ["HLVd", "Cannabis", "Western Cape"],
    },
]

export default function CaseStudiesPage() {
    return (
        <PageWrapper>
            <div className="relative space-y-12 overflow-hidden">
                <VerticalDottedLines />

                <div className="relative z-10 space-y-4">
                    <h1 className="text-4xl font-bold text-sage-900 md:text-5xl">
                        Case Studies
                    </h1>
                    <p className="text-lg text-sage-700 max-w-3xl">
                        Discover how South African agricultural producers use Mycelico&apos;s
                        pathogen testing services to protect their crops, prevent disease
                        spread, and make informed decisions about their operations.
                    </p>
                </div>

                <div className="relative z-10 grid gap-8">
                    {caseStudies.map((study) => (
                        <Link
                            key={study.slug}
                            href={`/case-studies/${study.slug}`}
                            className="group block"
                        >
                            <article className="rounded-xl border border-sage-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                                <div className="grid md:grid-cols-5 gap-0">
                                    <div className="md:col-span-2 relative h-64 md:h-auto">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            {study.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center rounded-full bg-lime-100 px-3 py-1 text-xs font-medium text-lime-800"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-2xl font-semibold text-sage-900 mb-3 group-hover:text-lime-700 transition-colors">
                                            {study.title}
                                        </h2>
                                        <p className="text-sage-700 mb-4 leading-relaxed">
                                            {study.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-sage-500">
                                                <RiCalendarLine className="size-4" />
                                                <span>{study.date}</span>
                                            </div>
                                            <span className="inline-flex items-center gap-1 text-sm font-medium text-lime-600 group-hover:gap-2 transition-all">
                                                Read case study
                                                <RiArrowRightLine className="size-4" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {caseStudies.length === 1 && (
                    <div className="relative z-10 rounded-lg border border-sage-200 bg-sage-50 p-8 text-center">
                        <h3 className="text-lg font-semibold text-sage-900 mb-2">
                            More Case Studies Coming Soon
                        </h3>
                        <p className="text-sage-700">
                            We&apos;re documenting more success stories from our clients across
                            South Africa. Check back soon for additional case studies covering
                            different crops and pathogens.
                        </p>
                    </div>
                )}

                <div className="relative z-10 mt-12">
                    <ReadyToGetStarted
                        patternId="case-studies-cta"
                        variant="light"
                        title="Want Your Success Story Featured?"
                        description="If you've had positive results with our testing services, we'd love to hear about it. Contact us to share your experience."
                        primaryLabel="Contact Us"
                        primaryHref="/contact"
                        secondaryLabel="Our Services"
                        secondaryHref="/pathogen-testing"
                    />
                </div>
            </div>
        </PageWrapper>
    )
}
