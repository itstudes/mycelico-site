interface VerticalDottedLinesProps {
    /**
     * Show 5 lines (left, 25%, center, 75%, right) or just 3 (left, center, right)
     * @default "full"
     */
    variant?: "full" | "minimal"
    /**
     * Stroke color class (Tailwind)
     * @default "stroke-sage-300"
     */
    strokeClass?: string
}

export function VerticalDottedLines({
    variant = "full",
    strokeClass = "stroke-sage-300",
}: VerticalDottedLinesProps) {
    const lineStyle = {
        maskImage:
            "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
    }

    const Line = ({ className }: { className?: string }) => (
        <div className={`absolute inset-y-0 -my-20 w-px ${className ?? ""}`} style={lineStyle}>
            <svg className="h-full w-full" preserveAspectRatio="none">
                <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    className={strokeClass}
                    strokeWidth="2"
                    strokeDasharray="3 3"
                />
            </svg>
        </div>
    )

    return (
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
            {/* Left */}
            <Line className="left-0" />
            {/* Right */}
            <Line className="right-0" />
            {/* Center */}
            <Line className="-z-10 left-1/2" />

            {variant === "full" && (
                <>
                    {/* 25% */}
                    <Line className="-z-10 left-1/4 hidden sm:block" />
                    {/* 75% */}
                    <Line className="-z-10 left-3/4 hidden sm:block" />
                </>
            )}
        </div>
    )
}
