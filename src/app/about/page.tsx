import { PageWrapper } from "@/components/PageWrapper"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Mycelico | Plant Pathogen Testing",
    description:
        "Learn about Mycelico, a South African company providing professional plant pathogen testing services to agricultural producers.",
}

export default function AboutPage() {
    return (
        <PageWrapper>
            <div className="space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-sage-900 md:text-5xl">
                        About Mycelico
                    </h1>
                    <p className="text-xl text-sage-700 max-w-3xl">
                        Providing trusted plant pathogen testing services to South African
                        agricultural producers.
                    </p>
                </div>

                <div className="prose prose-sage max-w-3xl">
                    <h2 className="text-2xl font-semibold text-sage-900">Our Mission</h2>
                    <p className="text-sage-700 leading-relaxed">
                        Mycelico is dedicated to supporting the South African agricultural
                        sector through accurate, timely plant pathogen testing. We help
                        producers identify and manage disease threats, enabling better crop
                        management decisions and improved yields.
                    </p>
                </div>

                <div className="prose prose-sage max-w-3xl">
                    <h2 className="text-2xl font-semibold text-sage-900">What We Do</h2>
                    <p className="text-sage-700 leading-relaxed">
                        We offer comprehensive diagnostic services for detecting fungal,
                        bacterial, and viral pathogens affecting crops. Our laboratory uses
                        modern testing methods to provide reliable results that producers
                        can act on with confidence.
                    </p>
                </div>

                <div className="rounded-lg border border-sage-200 bg-white p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold text-sage-900 mb-6">
                        Why Choose Mycelico
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <h3 className="font-semibold text-sage-900 mb-2">
                                Local Expertise
                            </h3>
                            <p className="text-sage-600">
                                Based in South Africa, we understand the specific pathogen
                                challenges facing local producers.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-sage-900 mb-2">
                                Fast Turnaround
                            </h3>
                            <p className="text-sage-600">
                                Quick processing times mean you get results when you need them
                                to make timely decisions.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-sage-900 mb-2">
                                Accurate Results
                            </h3>
                            <p className="text-sage-600">
                                We use proven diagnostic methods to ensure you receive reliable,
                                actionable information.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-sage-900 mb-2">
                                Support & Guidance
                            </h3>
                            <p className="text-sage-600">
                                Our team is available to discuss results and provide guidance on
                                managing identified threats.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="prose prose-sage max-w-3xl">
                    <h2 className="text-2xl font-semibold text-sage-900">
                        Serving South African Agriculture
                    </h2>
                    <p className="text-sage-700 leading-relaxed">
                        As a bootstrapped South African company, we&apos;re committed to
                        providing accessible, professional pathogen testing services to
                        agricultural producers across the country. We understand the
                        challenges of farming and strive to be a reliable partner in
                        protecting crop health.
                    </p>
                </div>
            </div>
        </PageWrapper>
    )
}
