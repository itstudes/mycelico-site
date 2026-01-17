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
    /**
     * Visual variant for the component
     * @default "light"
     */
    variant?: "light" | "solid" | "beige"
    /**
     * Optional background image for light variant texture
     * @default "/images/farming-aerial-3.jpg"
     */
    backgroundSrc?: string
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
    variant = "light",
    backgroundSrc = "/images/farming-aerial-3.jpg",
}: ReadyToGetStartedProps) {
    const hasImage = !!imageSrc
    const isLight = variant === "light"
    const isSolid = variant === "solid"
    const isBeige = variant === "beige"

    const containerClass = [
        "relative rounded-lg overflow-hidden",
        "p-6 sm:p-8",
        isLight && "bg-lime-50 border border-lime-200",
        isSolid && "bg-lime-700",
        isBeige && "bg-cream-50 border-2 border-lime-600",
    ]
        .filter(Boolean)
        .join(" ")

    const titleClass = [
        "text-2xl font-semibold mb-4",
        isSolid ? "text-white" : "text-sage-900",
    ].join(" ")

    const descriptionClass = [
        "mb-6",
        isSolid ? "text-lime-100" : "text-sage-700",
    ].join(" ")

    const primaryBtnClass = [
        "inline-flex items-center justify-center rounded-md px-6 py-3 font-medium shadow-sm transition-colors",
        isSolid ? "bg-white text-lime-800 hover:bg-lime-100" : "bg-lime-600 text-white hover:bg-lime-700",
    ].join(" ")

    const secondaryBtnClass = [
        "inline-flex items-center justify-center rounded-md px-6 py-3 font-medium shadow-sm transition-colors",
        isSolid
            ? "border border-white/60 bg-transparent text-white hover:bg-white/10"
            : "border border-sage-300 bg-white text-sage-900 hover:bg-sage-50",
    ].join(" ")

    return (
        <div className={containerClass}>
            {isLight && (
                <>
                    <div className="absolute inset-0 -z-10">
                        <Image
                            aria-hidden
                            alt=""
                            src={backgroundSrc}
                            fill
                            sizes="(min-width: 768px) 1200px, 100vw"
                            className="object-cover object-center opacity-40"
                        />
                        <div className="absolute inset-0 bg-lime-50/90" />
                    </div>
                    <DiagonalHatching
                        patternId={patternId}
                        strokeClass="stroke-lime-100"
                        maskDirection="top"
                    />
                </>
            )}
            {isBeige && (
                <DiagonalHatching
                    patternId={`${patternId}-beige`}
                    strokeClass="stroke-sage-100"
                    maskDirection="top"
                />
            )}
            <div
                className={`relative z-10 ${hasImage ? "grid gap-8 md:grid-cols-2 items-center" : ""}`}
            >
                <div>
                    <h2 className={titleClass}>{title}</h2>
                    <p className={descriptionClass}>{description}</p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            href={primaryHref}
                            className={primaryBtnClass}
                        >
                            {primaryLabel}
                        </Link>
                        <Link
                            href={secondaryHref}
                            className={secondaryBtnClass}
                        >
                            {secondaryLabel}
                        </Link>
                    </div>
                </div>
                {hasImage && (
                    <div className="relative isolate hidden md:block">
                        <div className="relative aspect-square rounded-xl overflow-hidden">
                            <Image
                                aria-hidden
                                alt={imageAlt}
                                src={imageSrc}
                                fill
                                sizes="(min-width: 768px) 400px, 100vw"
                                className="absolute inset-0 -z-10 blur-lg opacity-60 object-cover object-center"
                            />
                            <Image
                                alt={imageAlt}
                                src={imageSrc}
                                fill
                                sizes="(min-width: 768px) 400px, 100vw"
                                className="relative z-10 object-cover object-center"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
