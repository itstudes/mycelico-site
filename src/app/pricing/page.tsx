import { PageWrapper } from "@/components/PageWrapper"
import type { Metadata } from "next"
import { PricingContent } from "./PricingContent"

export const metadata: Metadata = {
    title: "Pricing | Mycelico",
    description:
        "Transparent pricing for plant pathogen testing services. Starting from R450 per sample with 5-10 day turnaround. Enterprise solutions available for commercial operations.",
}

export default function PricingPage() {
    return (
        <PageWrapper>
            <PricingContent />
        </PageWrapper>
    )
}
