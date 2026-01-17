import { cx } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export interface HeroBannerBadge {
    text: string
    icon: React.ReactNode
}

export interface HeroBannerButton {
    label: string
    href: string
}

export interface HeroBannerProps {
    /** The main heading text */
    heading: string
    /** Optional subheading/description text */
    subheading?: string
    /** Path to the background image */
    imageSrc: string
    /** Alt text for the background image (used for accessibility, hidden visually) */
    imageAlt?: string
    /** Content alignment on desktop: left, center, or right */
    alignment?: "left" | "center" | "right"
    /** Content alignment on mobile (defaults to alignment value) */
    mobileAlignment?: "left" | "center" | "right"
    /** Light mode uses dark text with white overlay; dark mode uses light text with dark overlay */
    mode?: "light" | "dark"
    /** Overlay opacity from 0 to 100 (default: 80 for dark mode, 90 for light mode) */
    overlayOpacity?: number
    /** Primary button configuration */
    primaryButton?: HeroBannerButton
    /** Secondary button configuration */
    secondaryButton?: HeroBannerButton
    /** Array of up to 3 badges with text and icon */
    badges?: HeroBannerBadge[]
    /** Optional className for the section wrapper */
    className?: string
    /** Minimum height of the banner (default: 80vh) */
    minHeight?: string
}

export function HeroBanner({
    heading,
    subheading,
    imageSrc,
    imageAlt = "",
    alignment = "left",
    mobileAlignment,
    mode = "dark",
    overlayOpacity,
    primaryButton,
    secondaryButton,
    badges,
    className,
    minHeight = "80vh",
}: HeroBannerProps) {
    const showButtons = primaryButton || secondaryButton
    const showBadges = badges && badges.length > 0
    const effectiveMobileAlignment = mobileAlignment ?? alignment

    // Default opacity based on mode
    const opacity = overlayOpacity ?? (mode === "dark" ? 80 : 90)

    // Calculate opacity class (Tailwind uses values like 80, 90, etc.)
    const opacityValue = opacity / 100

    // Mobile alignment classes
    const mobileAlignmentClasses = {
        left: "items-start text-left",
        center: "items-center text-center",
        right: "items-end text-right",
    }

    // Desktop alignment classes
    const desktopAlignmentClasses = {
        left: "md:items-start md:text-left",
        center: "md:items-center md:text-center",
        right: "md:items-end md:text-right",
    }

    const mobileContainerAlignmentClasses = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
    }

    const desktopContainerAlignmentClasses = {
        left: "md:justify-start",
        center: "md:justify-center",
        right: "md:justify-end",
    }

    // Text color classes based on mode
    const headingColor = mode === "dark" ? "text-white" : "text-sage-900"
    const subheadingColor = mode === "dark" ? "text-cream-100" : "text-sage-700"

    return (
        <section
            className={cx(
                "relative flex items-center overflow-hidden",
                className,
            )}
            style={{ minHeight }}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                    aria-hidden="true"
                />
                {/* Overlay */}
                {mode === "dark" ? (
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-sage-900 via-sage-900 to-sage-900"
                        style={{
                            opacity: opacityValue,
                            background: `linear-gradient(to right, rgba(47, 54, 43, ${opacityValue}), rgba(47, 54, 43, ${opacityValue * 0.85}), rgba(47, 54, 43, ${opacityValue * 0.65}))`,
                        }}
                    />
                ) : (
                    <div
                        className="absolute inset-0 bg-white"
                        style={{ opacity: opacityValue }}
                    />
                )}
            </div>

            {/* Content */}
            <div
                className={cx(
                    "relative z-10 w-full px-4 xl:px-0 py-32",
                    mobileContainerAlignmentClasses[effectiveMobileAlignment],
                    desktopContainerAlignmentClasses[alignment],
                )}
            >
                <div className="max-w-6xl mx-auto w-full">
                    <div
                        className={cx(
                            "flex flex-col space-y-6",
                            mobileAlignmentClasses[effectiveMobileAlignment],
                            desktopAlignmentClasses[alignment],
                            alignment === "center" ? "max-w-3xl mx-auto" : "max-w-2xl",
                        )}
                    >
                        {/* Badges */}
                        {showBadges && (
                            <div
                                className={cx(
                                    "flex flex-wrap gap-3",
                                    effectiveMobileAlignment === "center"
                                        ? "justify-center"
                                        : effectiveMobileAlignment === "right"
                                            ? "justify-end"
                                            : "justify-start",
                                    alignment === "center"
                                        ? "md:justify-center"
                                        : alignment === "right"
                                            ? "md:justify-end"
                                            : "md:justify-start",
                                )}
                            >
                                {badges.slice(0, 3).map((badge, index) => (
                                    <span
                                        key={index}
                                        className={cx(
                                            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium",
                                            mode === "dark"
                                                ? "bg-white/10 text-white backdrop-blur-sm"
                                                : "bg-sage-100 text-sage-700",
                                        )}
                                    >
                                        {badge.icon}
                                        {badge.text}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Heading */}
                        <h1
                            className={cx(
                                "text-4xl font-bold md:text-5xl lg:text-6xl",
                                headingColor,
                            )}
                        >
                            {heading}
                        </h1>

                        {/* Subheading */}
                        {subheading && (
                            <p className={cx("text-lg md:text-xl leading-relaxed", subheadingColor)}>
                                {subheading}
                            </p>
                        )}

                        {/* Buttons */}
                        {showButtons && (
                            <div
                                className={cx(
                                    "flex flex-col gap-4 sm:flex-row pt-4",
                                    effectiveMobileAlignment === "center"
                                        ? "justify-center"
                                        : effectiveMobileAlignment === "right"
                                            ? "justify-end"
                                            : "justify-start",
                                    alignment === "center"
                                        ? "md:justify-center"
                                        : alignment === "right"
                                            ? "md:justify-end"
                                            : "md:justify-start",
                                )}
                            >
                                {primaryButton && (
                                    <Link
                                        href={primaryButton.href}
                                        className={cx(
                                            "inline-flex items-center justify-center rounded-md px-8 py-4 font-semibold transition-colors shadow-lg",
                                            mode === "dark"
                                                ? "bg-lime-600 text-white hover:bg-lime-700"
                                                : "bg-lime-600 text-white hover:bg-lime-700",
                                        )}
                                    >
                                        {primaryButton.label}
                                    </Link>
                                )}
                                {secondaryButton && (
                                    <Link
                                        href={secondaryButton.href}
                                        className={cx(
                                            "inline-flex items-center justify-center rounded-md px-8 py-4 font-semibold transition-colors shadow-lg",
                                            mode === "dark"
                                                ? "border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                                                : "border border-sage-300 bg-white text-sage-900 hover:bg-sage-50",
                                        )}
                                    >
                                        {secondaryButton.label}
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
