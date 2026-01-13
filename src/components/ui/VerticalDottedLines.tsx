interface VerticalDottedLinesProps {
    /**
     * Stroke color class (Tailwind)
     * @default "stroke-sage-300"
     */
    strokeClass?: string
}

export function VerticalDottedLines({
    strokeClass = "stroke-sage-300",
}: VerticalDottedLinesProps) {
    const lineStyle = {
        maskImage:
            "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
    }

    const Line = ({ className }: { className?: string }) => (
        <div
            className={`absolute inset-y-0 -my-20 w-px ${className ?? ""}`}
            style={lineStyle}
        >
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
        <div className="pointer-events-none absolute inset-x-4 inset-y-0 sm:inset-x-8 select-none overflow-hidden">
            {/* Left edge */}
            <Line className="left-0" />
            {/* Right edge */}
            <Line className="right-0" />
        </div>
    )
}
