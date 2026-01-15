import Image from "next/image"
import Link from "next/link"
import { DiagonalHatching } from "./DiagonalHatching"

interface ReadyToGetStartedProps {
    /**
     * Optional custom title
     * @default "Ready to Get Started?"
     */
    title?: string
    /**
     * Optional custom description
     * @default "Contact us to discuss your testing needs or request a quote."
     */
    description?: string
    /**
     * Primary CTA link
     * @default "/contact"
     */
    primaryHref?: string
    /**
     * Primary CTA label
     * @default "Contact Us"
     */
    primaryLabel?: string
    /**
     * Secondary CTA link
     * @default "/pricing"
     */
    secondaryHref?: string
    /**
     * Secondary CTA label
     * @default "View Pricing"
     */
    secondaryLabel?: string
    /**
     * Optional image to display on the right side
     */
    imageSrc?: string
    /**
     * Alt text for the image
     */
    imageAlt?: string
    /**
     * Unique pattern ID for diagonal hatching
     * @default "ready-cta-hatching"
     */
    patternId?: string
}

export function ReadyToGetStarted({
    title = "Ready to Get Started?",
    description = "Contact us to discuss your testing needs or request a quote.",
    primaryHref = "/contact",
    primaryLabel = "Contact Us",
    secondaryHref = "/pricing",
    secondaryLabel = "View Pricing",
    imageSrc,
    imageAlt = "",
    patternId = "ready-cta-hatching",
}: ReadyToGetStartedProps) {
    const hasImage = !!imageSrc

    return (
        <div className="relative rounded-lg bg-lime-50 border border-lime-200 p-8 overflow-hidden">
            <DiagonalHatching
                patternId={patternId}
                strokeClass="stroke-lime-100"
                maskDirection="top"
            />
            <div
                className={`relative z-10 ${hasImage ? "grid gap-8 md:grid-cols-2 items-center" : ""}`}
            >
                <div>
                    <h2 className="text-2xl font-semibold text-sage-900 mb-4">{title}</h2>
                    <p className="text-sage-700 mb-6">{description}</p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            href={primaryHref}
                            className="inline-flex items-center justify-center rounded-md bg-lime-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-lime-700"
                        >
                            {primaryLabel}
                        </Link>
                        <Link
                            href={secondaryHref}
                            className="inline-flex items-center justify-center rounded-md border border-sage-300 bg-white px-6 py-3 font-medium text-sage-900 shadow-sm transition-colors hover:bg-sage-50"
                        >
                            {secondaryLabel}
                        </Link>
                    </div>
                </div>
                {hasImage && (
                    <div className="relative isolate rounded-xl hidden md:block">
                        <Image
                            aria-hidden
                            alt={imageAlt}
                            src={imageSrc}
                            height={400}
                            width={600}
                            className="absolute inset-0 -z-10 rounded-xl blur-lg opacity-60"
                        />
                        <Image
                            alt={imageAlt}
                            src={imageSrc}
                            height={400}
                            width={600}
                            className="relative z-10 rounded-xl object-cover"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
