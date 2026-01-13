interface DiagonalHatchingProps {
    /**
     * Unique pattern ID (required if multiple instances on page)
     */
    patternId?: string
    /**
     * Stroke color class (Tailwind)
     * @default "stroke-sage-200/50"
     */
    strokeClass?: string
    /**
     * Optional mask direction
     * @default "bottom"
     */
    maskDirection?: "bottom" | "top" | "both" | "none"
}

export function DiagonalHatching({
    patternId = "diagonal-hatching",
    strokeClass = "stroke-sage-200/50",
    maskDirection = "bottom",
}: DiagonalHatchingProps) {
    const maskStyles: Record<string, string> = {
        bottom: "mask-[linear-gradient(transparent,white_10rem)]",
        top: "mask-[linear-gradient(white_calc(100%-10rem),transparent)]",
        both: "mask-[linear-gradient(transparent,white_10rem,white_calc(100%-10rem),transparent)]",
        none: "",
    }

    return (
        <svg
            className={`pointer-events-none absolute inset-0 h-full w-full select-none ${maskStyles[maskDirection]}`}
            aria-hidden="true"
        >
            <defs>
                <pattern
                    id={patternId}
                    patternUnits="userSpaceOnUse"
                    width="64"
                    height="64"
                >
                    {Array.from({ length: 17 }, (_, i) => {
                        const offset = i * 8
                        return (
                            <path
                                key={i}
                                d={`M${-106 + offset} 110L${22 + offset} -18`}
                                className={strokeClass}
                                strokeWidth="1"
                            />
                        )
                    })}
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
    )
}
