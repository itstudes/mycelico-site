import type { Metadata } from "next"
import SampleCollectionGuidelines from "./SampleCollectionGuidelines"

export const metadata: Metadata = {
    title: "Sample Collection Guidelines | Mycelico",
    description:
        "Step-by-step guide to collecting leaf, soil, and water samples for pathogen testing. Proper sample collection ensures accurate results.",
    keywords: [
        "sample collection",
        "leaf samples",
        "soil samples",
        "water samples",
        "pathogen testing",
        "plant diagnostics",
        "South Africa",
    ],
}

export default function SampleCollectionGuidelinesPage() {
    return <SampleCollectionGuidelines />
}
