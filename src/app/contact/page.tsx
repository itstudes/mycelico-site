import { PageWrapper } from "@/components/PageWrapper"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Mycelico | Plant Pathogen Testing Enquiries South Africa",
    description:
        "Contact Mycelico laboratory for plant pathogen testing services in South Africa. Enquiries for HLVd, Fusarium, Phytophthora, and Pythium testing. Email connal@myceli.co or call +27 74 366 5607 for cannabis, fruit, vegetable, and field crop pathogen testing.",
    keywords: [
        "contact pathogen testing",
        "plant testing enquiries",
        "HLVd testing quote",
        "Mycelico contact",
        "pathogen laboratory contact",
        "South Africa plant testing",
    ],
}

export default function ContactPage() {
    return (
        <PageWrapper>
            <div className="relative space-y-8 max-w-4xl mx-auto overflow-hidden">
                <VerticalDottedLines />

                <div className="relative z-10 space-y-4 text-center">
                    <h1 className="text-4xl font-bold text-sage-900 md:text-5xl">
                        Contact Us
                    </h1>
                    <p className="text-lg text-sage-700">
                        Get in touch for testing enquiries.
                        We&apos;re here to help!
                    </p>
                </div>

                <div className="relative z-10 mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                    <div className="rounded-lg border border-sage-200 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-sage-900 mb-4 text-center">
                            Contact Information
                        </h2>
                        <div className="space-y-4">
                            <div className="text-center">
                                <h3 className="text-sm font-medium text-sage-700 mb-1">
                                    Email
                                </h3>
                                <a
                                    href="mailto:connal@myceli.co"
                                    className="text-lime-700 hover:text-lime-800 transition-colors"
                                >
                                    connal@myceli.co
                                </a>
                            </div>
                            <div className="text-center">
                                <h3 className="text-sm font-medium text-sage-700 mb-1">
                                    Phone
                                </h3>
                                <a
                                    href="tel:+27743665607"
                                    className="text-sage-900 hover:text-sage-700 transition-colors"
                                >
                                    +27 74 366 5607
                                </a>
                            </div>
                            <div className="text-center">
                                <h3 className="text-sm font-medium text-sage-700 mb-1">
                                    Location
                                </h3>
                                <p className="text-sage-900">South Africa</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border border-sage-200 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-sage-900 mb-4 text-center">
                            Business Hours
                        </h2>
                        <div className="space-y-2 text-sage-700">
                            <div className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span className="font-medium">8:00 - 17:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Saturday</span>
                                <span className="font-medium">Closed</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sunday</span>
                                <span className="font-medium">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-12 rounded-lg bg-cream-100 border border-cream-300 p-6 text-center">
                    <p className="text-sage-700">
                        Sample collection, submission and trusted courier recommendations available upon
                        request.
                    </p>
                </div>
            </div>
        </PageWrapper>
    )
}
