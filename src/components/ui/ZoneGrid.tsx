import { RiAlertLine, RiCheckLine, RiVirusLine } from "@remixicon/react"
import Image from "next/image"

interface ZoneCell {
    /** Position as grid row/col (0-7) */
    row: number
    col: number
    status: "healthy" | "warning" | "infected"
    /** Animation delay multiplier for staggered effects */
    animDelay: number
}

// 10 healthy cells, 3 warning, 3 infected = majority healthy
const zoneCells: ZoneCell[] = [
    // Healthy cells
    { row: 1, col: 2, status: "healthy", animDelay: 0 },
    { row: 0, col: 6, status: "healthy", animDelay: 2.5 },
    { row: 2, col: 5, status: "healthy", animDelay: 3.8 },
    { row: 4, col: 1, status: "healthy", animDelay: 2.1 },
    { row: 6, col: 1, status: "healthy", animDelay: 1.8 },
    // Warning cells
    { row: 4, col: 6, status: "warning", animDelay: 4.5 },
    { row: 5, col: 3, status: "warning", animDelay: 3.1 },
    // Infected cells   
    { row: 6, col: 5, status: "infected", animDelay: 1.0 },
]

function getStatusStyles(status: ZoneCell["status"]) {
    switch (status) {
        case "healthy":
            return {
                glowColor: "rgba(132, 204, 22, 0.4)",
                icon: <RiCheckLine className="size-4 sm:size-5 text-lime-600" />,
            }
        case "warning":
            return {
                glowColor: "rgba(251, 191, 36, 0.5)",
                icon: <RiAlertLine className="size-4 sm:size-5 text-amber-600" />,
            }
        case "infected":
            return {
                glowColor: "rgba(244, 63, 94, 0.5)",
                icon: <RiVirusLine className="size-4 sm:size-5 text-rose-600" />,
            }
    }
}

export function ZoneGrid() {
    // Grid is 8x8, each cell is 1/8 = 12.5%
    const cellSize = 12.5

    return (
        <div className="relative flex items-center justify-center overflow-hidden w-full max-w-[432px] aspect-square">
            {/* Diagonal pattern background */}
            <svg className="absolute size-full">
                <defs>
                    <pattern
                        id="zone-grid-diagonal-pattern"
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
                                    className="stroke-sage-200/50"
                                    strokeWidth="1"
                                />
                            )
                        })}
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#zone-grid-diagonal-pattern)"
                />
            </svg>

            <div className="relative w-full h-full">
                {/* Grid lines */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 432 432"
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                        maskImage:
                            "linear-gradient(transparent, white 10%, white 90%, transparent)",
                    }}
                >
                    <path
                        className="stroke-sage-200"
                        d="M48 0v432M96 0v432M144 0v432M192 0v432M240 0v432M288 0v432M336 0v432M384 0v432M0 48h432M0 96h432M0 144h432M0 192h432M0 240h432M0 288h432M0 336h432M0 384h432"
                    />
                </svg>

                <div className="pointer-events-none absolute inset-0 select-none">
                    {/* Center logo */}
                    <div
                        className="absolute flex items-center justify-center"
                        style={{
                            top: `${3 * cellSize}%`,
                            left: `${3 * cellSize}%`,
                            width: `${2 * cellSize}%`,
                            height: `${2 * cellSize}%`,
                        }}
                    >
                        <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-sm bg-white ring-1 shadow-md ring-sage-300">
                            <Image
                                src="/logo.png"
                                alt="Mycelico"
                                width={40}
                                height={40}
                                className="h-7 w-7 sm:h-10 sm:w-10"
                            />
                        </div>
                    </div>

                    {/* Zone cells */}
                    {zoneCells.map((cell, index) => {
                        const styles = getStatusStyles(cell.status)
                        return (
                            <div
                                key={index}
                                className="absolute flex items-center justify-center"
                                style={{
                                    top: `${cell.row * cellSize}%`,
                                    left: `${cell.col * cellSize}%`,
                                    width: `${cellSize}%`,
                                    height: `${cellSize}%`,
                                }}
                            >
                                <div className="relative">
                                    {/* Subtle glow effect */}
                                    <div
                                        className="absolute -inset-1 rounded-sm opacity-0"
                                        style={{
                                            boxShadow: `0 0 12px 4px ${styles.glowColor}`,
                                            animation: `zoneGlow 4s ease-in-out infinite`,
                                            animationDelay: `${cell.animDelay}s`,
                                        }}
                                    />
                                    <div
                                        className="relative flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-sm bg-white ring-1 shadow-sm ring-sage-300 transition-transform"
                                        style={{
                                            animation: `zoneBreath 5s ease-in-out infinite`,
                                            animationDelay: `${cell.animDelay}s`,
                                        }}
                                    >
                                        {styles.icon}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
