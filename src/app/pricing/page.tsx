import { PageWrapper } from "@/components/PageWrapper"
import type { Metadata } from "next"
import { PricingContent } from "./PricingContent"

export const metadata: Metadata = {
    title: "Plant Pathogen Testing Pricing South Africa | From R400 per Sample",
    description:
        "Transparent, affordable pricing for plant pathogen testing in South Africa. HLVd testing from R400 per sample. Fusarium, Phytophthora, Pythium testing available. 5-10 business day turnaround. Enterprise volume pricing for commercial cannabis, fruit, and vegetable producers. No hidden fees.",
    keywords: [
        "HLVd testing price",
        "pathogen testing cost South Africa",
        "plant testing pricing",
        "cannabis testing cost",
        "affordable pathogen testing",
        "laboratory testing rates",
        "Fusarium testing price",
        "Phytophthora testing cost",
    ],
}

export default function PricingPage() {
    return (
        <PageWrapper>
            <PricingContent />
        </PageWrapper>
    )
}
