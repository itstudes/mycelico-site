import type { Metadata } from "next"
import SampleCollectionGuidelines from "./SampleCollectionGuidelines"

export const metadata: Metadata = {
    title: "Sample Collection Guide | How to Collect Plant Samples for Pathogen Testing",
    description:
        "Comprehensive guide to collecting plant samples for HLVd, Fusarium, Phytophthora, and Pythium testing. Step-by-step instructions for leaf, tissue, soil, and water samples. Proper collection techniques ensure accurate laboratory results. Storage, packaging, and shipping guidelines for South African growers.",
    keywords: [
        "how to collect plant samples",
        "leaf sample collection",
        "soil sample collection",
        "water sample pathogen testing",
        "HLVd sample collection",
        "cannabis sample collection",
        "plant tissue sampling",
        "pathogen testing samples",
        "laboratory sample guidelines",
        "South Africa plant sampling",
    ],
}

export default function SampleCollectionGuidelinesPage() {
    return <SampleCollectionGuidelines />
}
