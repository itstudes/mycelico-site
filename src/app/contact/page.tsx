import { PageWrapper } from "@/components/PageWrapper"
import { DiagonalHatching } from "@/components/ui/DiagonalHatching"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Mycelico | Get in Touch",
    description:
        "Contact Mycelico for plant pathogen testing services. We're here to answer your questions and help with your testing needs.",
}

export default function ContactPage() {
    return (
        <PageWrapper>
            <div className="relative space-y-8 max-w-4xl mx-auto overflow-hidden">
                <VerticalDottedLines variant="minimal" />

                <div className="relative z-10 space-y-4 text-center">
                    <h1 className="text-4xl font-bold text-sage-900 md:text-5xl">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-sage-700">
                        Have questions about our testing services? We&apos;re here to help.
                    </p>
                </div>

                <div className="relative z-10 grid gap-8 md:grid-cols-2 mt-12">
                    <div className="space-y-6">
                        <div className="rounded-lg border border-sage-200 bg-white p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-sage-900 mb-4">
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-sage-700 mb-1">
                                        Email
                                    </h3>
                                    <a
                                        href="mailto:info@mycelico.co.za"
                                        className="text-lime-700 hover:text-lime-800 transition-colors"
                                    >
                                        info@mycelico.co.za
                                    </a>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-sage-700 mb-1">
                                        Phone
                                    </h3>
                                    <a
                                        href="tel:+27123456789"
                                        className="text-sage-900 hover:text-sage-700 transition-colors"
                                    >
                                        +27 12 345 6789
                                    </a>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-sage-700 mb-1">
                                        Location
                                    </h3>
                                    <p className="text-sage-900">South Africa</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-sage-200 bg-white p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-sage-900 mb-4">
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

                    <div className="relative rounded-lg border border-sage-200 bg-white p-6 shadow-sm overflow-hidden">
                        <DiagonalHatching
                            patternId="contact-hatching"
                            strokeClass="stroke-sage-100/50"
                            maskDirection="bottom"
                        />
                        <div className="relative z-10">
                            <h2 className="text-xl font-semibold text-sage-900 mb-4">
                                Send Us a Message
                            </h2>
                            <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-sage-900 mb-1"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full rounded-md border border-sage-300 bg-white px-4 py-2 text-sage-900 placeholder-sage-400 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-sage-900 mb-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full rounded-md border border-sage-300 bg-white px-4 py-2 text-sage-900 placeholder-sage-400 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-sage-900 mb-1"
                                    >
                                        Phone (optional)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full rounded-md border border-sage-300 bg-white px-4 py-2 text-sage-900 placeholder-sage-400 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
                                        placeholder="+27 12 345 6789"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-sage-900 mb-1"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="w-full rounded-md border border-sage-300 bg-white px-4 py-2 text-sage-900 placeholder-sage-400 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
                                        placeholder="Tell us about your testing needs..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-lime-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-12 rounded-lg bg-cream-100 border border-cream-300 p-6 text-center">
                    <p className="text-sage-700">
                        Sample submission guidelines and courier information available upon
                        request.
                    </p>
                </div>
            </div>
        </PageWrapper>
    )
}
